import { GoogleGenerativeAI } from "@google/generative-ai";
import { ConfigService } from "./config.js";
import { IconGenerationOptions } from "../types.js";
import { StyleTemplates } from "../utils/styleTemplates.js";

export class GeminiService {
  private static async getClient(): Promise<GoogleGenerativeAI> {
    const apiKey = await ConfigService.get("google_api_key");

    if (!apiKey) {
      throw new Error(
        "Google API key not configured. Run: snapai config --google-api-key YOUR_KEY"
      );
    }

    return new GoogleGenerativeAI(apiKey);
  }

  static async generateIcon(options: IconGenerationOptions): Promise<string[]> {
    const client = await this.getClient();
    const {
      prompt,
      model = "gemini-nano",
      size = "1024x1024",
      rawPrompt = false,
      style,
      numImages = 1,
    } = options;

    // Map snapai model names to Gemini model names
    const geminiModel = model === "gemini-nano" 
      ? "gemini-2.5-flash-image" 
      : "gemini-3-pro-image-preview";

    // Validate model-specific parameters
    this.validateModelParameters(model, size, numImages);

    // Use either raw prompt, style-enhanced prompt, or default iOS prompt
    let finalPrompt: string;
    
    if (rawPrompt) {
      finalPrompt = prompt;
    } else if (style) {
      finalPrompt = StyleTemplates.getStylePrompt(prompt, style, size);
    } else {
      // Default iOS prompt (backward compatibility)
      finalPrompt = `Create a full-bleed ${size} px iOS app icon: ${prompt}.Use crisp, minimal design with vibrant colors. Add a subtle inner bevel for gentle depth; no hard shadows or outlines. Center the design with comfortable breathing room from the edges. Solid, light-neutral background. IMPORTANT: Fill the entire canvas edge-to-edge with the design, no padding, no margins. Design elements should be centered with appropriate spacing from edges but the background must cover 100% of the canvas. Add subtle depth with inner highlights, avoid hard shadows. Clean, minimal, Apple-style design. No borders, frames, or rounded corners.`;
    }

    // Get the model instance
    const generativeModel = client.getGenerativeModel({ 
      model: geminiModel,
    });

    // Generate images - Gemini models typically generate 1 image per request
    // For multiple images, we'll make multiple requests
    const imagePromises: Promise<string>[] = [];
    
    for (let i = 0; i < numImages; i++) {
      imagePromises.push(
        generativeModel.generateContent({
          contents: [{ role: "user", parts: [{ text: finalPrompt }] }],
        }).then((response) => {
          const result = response.response;
          const candidates = result.candidates;
          
          if (!candidates || candidates.length === 0) {
            throw new Error("No candidates returned from Gemini API");
          }

          // Find image part in the response
          const imagePart = candidates[0].content?.parts?.find(
            (part: any) => part.inlineData
          );

          if (!imagePart || !imagePart.inlineData) {
            throw new Error("Failed to get image data from Gemini response");
          }

          // Return base64 data (mimeType is already included but we just need the data)
          return imagePart.inlineData.data;
        })
      );
    }

    // Wait for all images to be generated
    const base64Images = await Promise.all(imagePromises);
    
    return base64Images;
  }

  private static validateModelParameters(
    model: string,
    size: string,
    numImages: number
  ): void {
    // Validate size based on model
    // Gemini models support common sizes - map to what we know
    const validSizes = {
      "gemini-nano": ["1024x1024"], // Flash typically supports 1K resolution
      "gemini-nano-pro": ["1024x1024", "2048x2048"], // Pro supports up to 4K
    };

    const modelKey = model as keyof typeof validSizes;
    if (!validSizes[modelKey]?.includes(size)) {
      // For now, accept common sizes - Gemini may auto-adjust
      // Warn but don't fail for sizes that might work
      if (size !== "1024x1024" && model === "gemini-nano") {
        throw new Error(
          `Size "${size}" may not be supported for model "${model}". Recommended size: 1024x1024`
        );
      }
    }

    // Validate number of images
    if (numImages < 1 || numImages > 10) {
      throw new Error("Number of images must be between 1 and 10");
    }

    // Gemini models generate 1 image per request, so numImages > 1 requires multiple requests
    // This is acceptable and handled in the generation loop above
  }
}
