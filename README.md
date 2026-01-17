# SnapAI ⚡

> AI-powered icon generation for React Native & Expo developers

Create stunning app icons in seconds using OpenAI's latest image generation models or Google's Gemini Nano Banana models. Perfect for developers who want professional icons without the design hassle! 🎨

## ✨ Features

🚀 **Lightning Fast** - Generate icons in seconds, not hours  
🎯 **iOS Optimized** - Perfect for App Store requirements  
🛡️ **Privacy First** - Zero data collection, API keys stay local  
📱 **Multiple Sizes** - Square, landscape, and portrait formats  
💎 **HD Quality** - Crystal clear icons for any device  
🔧 **Developer Friendly** - Simple CLI, perfect for CI/CD

## 🚀 Full Video Tutorial

<a href="https://youtu.be/R4hvt8iz_rE">
  <img src="https://i.ytimg.com/vi_webp/R4hvt8iz_rE/maxresdefault.webp" height="380" alt="YouTube Video Preview">
</a>

### Installation

```bash
# Install globally
npm install -g snapai

# Or use directly (no installation)
npx snapai
```

> [!IMPORTANT]  
> You'll need an OpenAI API key or Google API key to generate icons. 
> - OpenAI: Get one at [platform.openai.com](https://platform.openai.com) - it costs ~$0.04 per icon!
> - Google: Get one at [aistudio.google.com](https://aistudio.google.com/apikey) - check Google's pricing for Gemini models

### Setup Your API Key

```bash
# For OpenAI models
snapai config --api-key sk-your-openai-api-key-here

# For Gemini Nano Banana models
snapai config --google-api-key your-google-api-key-here

# Optional: Set a default model (see Configuration section for details)
snapai config --default-model gpt-image-1
```

### Generate Your First Icon! 🎉

```bash
snapai icon --prompt "minimalist weather app with sun and cloud"
```

## 🎨 See It In Action

**Real icons generated with SnapAI:**

| Prompt                                                                                                            | Result                                                       | Command                                                                              |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `glass-like color-wheel flower made of eight evenly spaced, semi-transparent petals`                              | ![Flower Icon](test-icons/icon-1750560657796.png)            | `snapai icon --prompt "glass-like color-wheel flower..."`                            |
| `glass-like sound wave pattern made of five curved, semi-transparent layers flowing in perfect harmony`           | ![Sound Wave Icon](test-icons/icon-sound-wave.png)           | `snapai icon --prompt "glass-like sound wave pattern..."`                            |
| `glass-like speech bubble composed of three overlapping, semi-transparent rounded rectangles with soft gradients` | ![Messaging Icon](test-icons/icon-messaging.png)             | `snapai icon --prompt "glass-like speech bubble..."`                                 |
| `glass-like camera aperture made of six triangular, semi-transparent blades forming a perfect hexagonal opening`  | ![Camera Glass Icon](test-icons/icon-camera-glass.png)       | `snapai icon --prompt "glass-like camera aperture..."`                               |
| `stylized camera lens with concentric circles in warm sunset colors orange pink and coral gradients`              | ![Camera Retro Icon](test-icons/icon-lens-retro.png)         | `snapai icon --prompt "stylized camera lens with concentric circles..."`             |
| `neon-outlined calculator with electric blue glowing numbers`                                                     | ![Neon Calculator Icon](test-icons/icon-calculator-neon.png) | `snapai icon --prompt "neon-outlined calculator with electric blue glowing numbers"` |

**Style-specific examples:**

| Prompt                                                                             | Result                                         | Command                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| `minimalist terminal with clean black background and white command prompt symbols` | ![Minimalist Terminal](test-icons/minimal.png) | `snapai icon --prompt "minimalist terminal..." --style minimalism` |
| `premium play button with glossy green surface and glass-like reflections`         | ![Glassy Play Button](test-icons/glassy.png)   | `snapai icon --prompt "premium play button..." --style glassy`     |
| `retro arcade joystick with pixelated red ball and classic gaming aesthetic`       | ![Pixel Joystick](test-icons/pixel.png)        | `snapai icon --prompt "retro arcade joystick..." --style pixel`    |

## 🎨 Amazing Example Prompts

Try these proven prompts that create stunning icons:

```bash
# Glass-like design (trending!)
snapai icon --prompt "glass-like color-wheel flower made of eight evenly spaced, semi-transparent petals forming a perfect circle"

# Minimalist apps
snapai icon --prompt "minimalist calculator app with clean geometric numbers and soft gradients"
snapai icon --prompt "fitness tracker app with stylized running figure using vibrant gradient colors"

# Creative concepts
snapai icon --prompt "weather app with glass-like sun and translucent cloud elements"
snapai icon --prompt "music player app with abstract sound waves in soft pastel hues"
snapai icon --prompt "banking app with secure lock symbol and professional gradients"

# Style-specific examples
snapai icon --prompt "minimalist calculator app with clean geometric numbers and soft blue gradients" --style minimalism
snapai icon --prompt "premium music player with glass-like sound waves and translucent purple elements" --style glassy
snapai icon --prompt "cyberpunk gaming app with electric neon borders and glowing green accents" --style neon
snapai icon --prompt "retro indie game with pixelated rocket ship and 8-bit style stars" --style pixel
snapai icon --prompt "modern Android app with Material Design floating action button and bold colors" --style material
```

## 🛠️ Command Reference

### Generate Icons

#### Basic Usage

```bash
# Basic usage
snapai icon --prompt "modern fitness tracker with heart rate monitor and clean geometric design"

# Custom output directory
snapai icon --prompt "professional banking app with secure lock icon and elegant blue gradients" --output ./assets/icons

# High quality (costs 2x but worth it!)
snapai icon --prompt "premium social media app with camera icon and vibrant gradient background" --quality hd

# Different sizes
snapai icon --prompt "wide landscape banner with company logo and modern typography" --size 1536x1024
snapai icon --prompt "tall portrait icon with vertical app interface and clean layout" --size 1024x1536

# Different styles
snapai icon --prompt "minimalist calculator with clean white background and subtle blue accents" --style minimalism
snapai icon --prompt "premium music player with glass-like equalizer bars and translucent elements" --style glassy
snapai icon --prompt "futuristic weather app with neon cloud icons and electric blue glow effects" --style neon
```

#### Advanced Options

##### Model Selection

```bash
# Use GPT-Image-1 (default, best quality)
snapai icon --prompt "professional task manager with checkmark icon and clean minimalist design" --model gpt-image-1

# Use DALL-E 3 (creative, artistic)
snapai icon --prompt "artistic photo editing app with paintbrush and vibrant color palette" --model dall-e-3

# Use DALL-E 2 (fast, cost-effective)
snapai icon --prompt "simple note-taking app with pencil icon and clean white background" --model dall-e-2

# Use Gemini Nano Banana (fast, Google's image model)
snapai icon --prompt "modern calculator app with clean design and glass-like elements" --model gemini-nano

# Use Gemini Nano Banana Pro (high-quality, Google's premium image model)
snapai icon --prompt "premium music player app with vibrant gradients and modern styling" --model gemini-nano-pro

# Use your configured default model (no --model flag needed)
snapai icon --prompt "modern app icon with clean design"
```

> [!TIP]
> Set a default model with `snapai config --default-model MODEL_NAME` to avoid specifying `--model` every time. You can still override it with the `--model` flag when needed.

##### Multiple Images

```bash
# Generate 3 variations (gpt-image-1 only)
snapai icon --prompt "modern fitness app with dumbbell icon and energetic design" --num-images 3

# Generate 5 variations with high quality
snapai icon --prompt "professional company logo with geometric shapes and modern typography" --num-images 5 --quality high
```

##### Background & Format

```bash
# Transparent background (gpt-image-1 only)
snapai icon --prompt "modern company logo with geometric shapes and clean typography" --background transparent --output-format png

# Different output formats (gpt-image-1 only)
snapai icon --prompt "wide web banner with company branding and call-to-action elements" --output-format webp
snapai icon --prompt "professional headshot with clean background and business attire" --output-format jpeg
```

##### Style Selection

```bash
# Minimalist design (clean, Apple-inspired)
snapai icon --prompt "minimalist calculator with clean white background and subtle blue number buttons" --style minimalism

# Glass-like aesthetic (semi-transparent, premium)
snapai icon --prompt "premium music player with glass-like equalizer bars and translucent purple elements" --style glassy

# Neon cyberpunk style (electric colors, glowing)
snapai icon --prompt "futuristic gaming app with neon laser effects and electric green glow" --style neon

# Material Design (Google's design language)
snapai icon --prompt "modern Android app with Material Design floating action button and bold orange accent" --style material

# Pixel art (retro 8-bit/16-bit gaming)
snapai icon --prompt "retro indie game with pixelated spaceship and 8-bit style starfield background" --style pixel
```

##### Quality & Moderation

```bash
# Ultra-high quality (gpt-image-1)
snapai icon --prompt "professional banking app with secure lock icon and elegant gold gradients" --quality high

# Lower content filtering (gpt-image-1 only)
snapai icon --prompt "edgy gaming app with dark theme and bold red accent colors" --moderation low
```

#### All Available Flags

| Flag              | Short | Options                               | Default       | Description                          |
| ----------------- | ----- | ------------------------------------- | ------------- | ------------------------------------ |
| `--prompt`        | `-p`  | text                                  | _required_    | Description of the icon to generate  |
| `--output`        | `-o`  | path                                  | `./assets`    | Output directory for generated icons |
| `--model`         | `-m`  | `gpt-image-1`, `dall-e-3`, `dall-e-2`, `gemini-nano`, `gemini-nano-pro` | `gpt-image-1` or configured default | AI model to use (can be set via `config --default-model`) |
| `--size`          | `-s`  | See sizes table below                 | `1024x1024`   | Icon size (model-dependent)          |
| `--quality`       | `-q`  | See quality table below               | `auto`        | Image quality (model-dependent)      |
| `--background`    | `-b`  | `transparent`, `opaque`, `auto`       | `auto`        | Background type (gpt-image-1 only)   |
| `--output-format` | `-f`  | `png`, `jpeg`, `webp`                 | `png`         | Output format (gpt-image-1 only)     |
| `--num-images`    | `-n`  | 1-10                                  | `1`           | Number of images (dall-e-3 max: 1)   |
| `--moderation`    |       | `low`, `auto`                         | `auto`        | Content filtering (gpt-image-1 only) |
| `--raw-prompt`    |       | boolean                               | `false`       | Skip iOS enhancement                 |
| `--style`         |       | See style table below                 | _none_        | Icon design style                    |


#### Model Comparison

| Feature             | GPT-Image-1                           | DALL-E 3                        | DALL-E 2                    | Gemini Nano Banana            | Gemini Nano Banana Pro       |
| ------------------- | ------------------------------------- | ------------------------------- | --------------------------- | ----------------------------- | ---------------------------- |
| **Quality**         | ⭐⭐⭐⭐⭐                            | ⭐⭐⭐⭐                        | ⭐⭐⭐                      | ⭐⭐⭐⭐                        | ⭐⭐⭐⭐⭐                    |
| **Speed**           | ⭐⭐⭐⭐                              | ⭐⭐⭐                          | ⭐⭐⭐⭐⭐                  | ⭐⭐⭐⭐⭐                      | ⭐⭐⭐⭐                      |
| **Cost**            | Medium                                | High                            | Low                         | Low-Medium                    | Medium-High                  |
| **Sizes**           | 1024x1024, 1536x1024, 1024x1536, auto | 1024x1024, 1792x1024, 1024x1792 | 256x256, 512x512, 1024x1024 | 1024x1024                     | 1024x1024, 2048x2048        |
| **Quality Options** | auto, high, medium, low               | standard, hd                    | standard only               | standard only                 | standard only                |
| **Multiple Images** | 1-10                                  | 1 only                          | 1-10                        | 1-10                          | 1-10                         |
| **Transparent BG**  | ✅                                    | ❌                              | ❌                          | ❌                            | ❌                           |
| **Format Options**  | png, jpeg, webp                       | png only                        | png only                    | png only                      | png only                     |

#### Size Guide

**GPT-Image-1 & DALL-E 2:**

- `1024x1024` - Square (perfect for app icons)
- `1536x1024` - Landscape
- `1024x1536` - Portrait
- `auto` - Let AI decide best size (gpt-image-1 only)

**DALL-E 3:**

- `1024x1024` - Square
- `1792x1024` - Wide landscape
- `1024x1792` - Tall portrait

**DALL-E 2:**

- `256x256` - Small square
- `512x512` - Medium square
- `1024x1024` - Large square

**Gemini Nano Banana:**

- `1024x1024` - Square (recommended size)

**Gemini Nano Banana Pro:**

- `1024x1024` - Square
- `2048x2048` - High resolution (up to 4K support)

#### Quality Guide

**GPT-Image-1:**

- `auto` - AI optimizes quality vs speed
- `high` - Maximum quality, slower
- `medium` - Balanced quality and speed
- `low` - Fast generation, lower quality

**DALL-E 3:**

- `standard` - Good quality, faster
- `hd` - High definition, costs 2x more

**DALL-E 2:**

- `standard` - Only option available
- API does not support quality option

**Gemini Models:**

- Quality options are handled automatically by the model
- Gemini Nano Banana: Optimized for speed and efficiency
- Gemini Nano Banana Pro: Higher fidelity with better detail and text rendering

#### Style Guide

SnapAI offers 14 distinct visual styles to match your app's personality and target audience:

| Style                | Description                                                                                       | Best For                                          | Example Use                |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------- |
| **minimalism**       | Clean, simple lines with maximum 2-3 colors. Ultra-clean, Apple-inspired minimalism.              | Productivity apps, utilities, professional tools  | `--style minimalism`       |
| **glassy**           | Glass-like, semi-transparent elements with soft color blending. Modern, premium glass aesthetic.  | Social apps, media players, lifestyle apps        | `--style glassy`           |
| **woven**            | Textile-inspired patterns with woven textures and organic flowing lines. Warm, tactile materials. | Craft apps, lifestyle, wellness, organic products | `--style woven`            |
| **geometric**        | Only geometric shapes with bold, angular compositions. Mathematical precision and symmetry.       | Finance apps, productivity, technical tools       | `--style geometric`        |
| **neon**             | Electric neon colors with glowing effects. Cyberpunk, futuristic aesthetic.                       | Gaming apps, tech tools, nightlife apps           | `--style neon`             |
| **gradient**         | Smooth, vibrant gradients as primary design element. Modern, Instagram-inspired aesthetic.        | Social media, photo apps, creative tools          | `--style gradient`         |
| **flat**             | Solid colors, no gradients, no shadows. Clean, modern, Microsoft-inspired flat design.            | Business apps, utilities, professional tools      | `--style flat`             |
| **material**         | Google Material Design principles with bold colors and geometric shapes.                          | Android apps, Google services, productivity       | `--style material`         |
| **ios-classic**      | Traditional iOS design with subtle gradients and Apple's signature color palette.                 | iOS apps, Apple ecosystem, premium apps           | `--style ios-classic`      |
| **android-material** | Android Material Design 3 with dynamic colors and modern Android styling.                         | Android apps, Google services, modern mobile      | `--style android-material` |
| **pixel**            | Pixel-perfect, retro 8-bit/16-bit game art style with sharp, blocky pixels.                       | Indie games, retro apps, nostalgic tools          | `--style pixel`            |
| **game**             | Vibrant, energetic gaming aesthetics with bold colors and playful elements.                       | Mobile games, gaming platforms, entertainment     | `--style game`             |
| **clay**             | Soft, malleable clay-like textures with organic, handcrafted appearance.                          | Kids apps, creative tools, playful utilities      | `--style clay`             |
| **holographic**      | Iridescent, rainbow-shifting colors with metallic finishes and prismatic effects.                 | Futuristic apps, AR/VR, premium tech              | `--style holographic`      |

##### Style Examples

```bash
# Clean productivity app
snapai icon --prompt "minimalist task manager with clean white checkmark icon and subtle blue accent" --style minimalism

# Premium social media app
snapai icon --prompt "premium photo sharing app with glass-like camera icon and translucent elements" --style glassy

# Retro gaming app
snapai icon --prompt "retro space shooter with pixelated rocket ship and 8-bit style stars" --style pixel

# Modern Android app
snapai icon --prompt "modern weather app with sun and cloud icons using Material Design principles" --style android-material

# Futuristic AR app
snapai icon --prompt "futuristic augmented reality app with holographic glasses and rainbow effects" --style holographic
```

> [!TIP]
> Combine styles with different models for unique results! Try `--style neon --model dall-e-3` for creative cyberpunk designs or `--style minimalism --model gpt-image-1 --quality high` for ultra-clean professional icons.

### Configuration

```bash
snapai config --show                    # Check your setup
snapai config --api-key YOUR_KEY        # Set/update OpenAI API key
snapai config --google-api-key YOUR_KEY # Set/update Google API key for Gemini models
snapai config --default-model MODEL     # Set default model (dall-e-2, dall-e-3, gpt-image-1, gemini-nano, gemini-nano-pro)
```

#### Setting a Default Model

You can set a default model that will be used when you don't specify `--model` in the `icon` command:

```bash
# Set GPT-Image-1 as default (best quality)
snapai config --default-model gpt-image-1

# Set DALL-E 2 as default (fast, cost-effective)
snapai config --default-model dall-e-2

# Set Gemini Nano as default (fast, Google's model)
snapai config --default-model gemini-nano

# View your current default model
snapai config --show
```

Available models:
- `gpt-image-1` - Best quality, balanced features (default if not configured)
- `dall-e-3` - Creative, artistic designs
- `dall-e-2` - Fast, cost-effective
- `gemini-nano` - Fast, Google's efficient model
- `gemini-nano-pro` - High-quality, Google's premium model

Once set, you can generate icons without specifying `--model`:
```bash
# Uses your configured default model
snapai icon --prompt "modern calculator app icon"

# Override the default for this command
snapai icon --prompt "artistic icon" --model dall-e-3
```

> [!NOTE]  
> Icons are saved as PNG files with timestamps. Perfect for version control!

## 🔐 Privacy & Security

**Your data stays yours** 🛡️

- ✅ **Zero tracking** - We collect absolutely nothing
- ✅ **Local storage** - API keys never leave your machine
- ✅ **No telemetry** - No analytics, no phone-home
- ✅ **Open source** - Inspect every line of code
- ✅ **No accounts** - Just install and use

> [!WARNING]  
> Keep your API keys secure! Never commit them to version control or share them publicly. This applies to both OpenAI and Google API keys.

## 💰 Pricing

**SnapAI is 100% free!** You only pay for generation with your chosen provider:

### Model Pricing

| Model                  | Quality     | Size      | Price per Image | Best For                |
| ---------------------- | ----------- | --------- | --------------- | ----------------------- |
| **GPT-Image-1**        | auto/medium | 1024x1024 | ~$0.04          | Balanced quality & cost |
| **GPT-Image-1**        | high        | 1024x1024 | ~$0.08          | Professional icons      |
| **GPT-Image-1**        | low         | 1024x1024 | ~$0.02          | Quick iterations        |
| **DALL-E 3**           | standard    | 1024x1024 | ~$0.04          | Creative designs        |
| **DALL-E 3**           | hd          | 1024x1024 | ~$0.08          | High-detail artwork     |
| **DALL-E 2**           | standard    | 1024x1024 | ~$0.02          | Fast & economical       |
| **Gemini Nano Banana** | standard    | 1024x1024 | Check [Google's pricing](https://ai.google.dev/pricing) | Fast & efficient       |
| **Gemini Nano Pro**    | standard    | 1024x1024 | Check [Google's pricing](https://ai.google.dev/pricing) | High-quality images    |

### Cost Optimization Tips

```bash
# 💡 Cost-effective workflow
# 1. Start with DALL-E 2 for quick iterations
snapai icon --prompt "modern fitness app icon concept with dumbbell and clean design" --model dall-e-2

# 2. Test different styles with GPT-Image-1 (low cost)
snapai icon --prompt "minimalist calculator app with clean white background and blue accents" --style minimalism --model gpt-image-1 --quality low
snapai icon --prompt "premium calculator app with glass-like elements and translucent effects" --style glassy --model gpt-image-1 --quality low

# 2.1 Generate multiple variations with GPT-Image-1
snapai icon --prompt "refined app icon" --model gpt-image-1 --num-images 3

# 3. Generate multiple variations with GPT-Image-1
snapai icon --prompt "refined fitness app icon with dumbbell and energetic gradient design" --model gpt-image-1 --num-images 3 --style minimalism

# 4. Final high-quality version with DALL-E 3
snapai icon --prompt "final fitness app icon with professional dumbbell design and clean minimalist style" --model dall-e-3 --quality hd --style minimalism
```

> [!TIP]
> Use `--model dall-e-2` or `--model gemini-nano` for testing, then `--model gpt-image-1` for style exploration and variations, and `--model dall-e-3 --quality hd` or `--model gemini-nano-pro` for production! Combine with `--style` for consistent visual identity.

## 🚀 Advanced Usage

### CI/CD Integration

```bash
# Perfect for automation with different models
npx snapai icon --prompt "$(cat icon-prompt.txt)" --output ./dist/icons --model gpt-image-1 --style minimalism

# Generate multiple formats for web
npx snapai icon --prompt "modern web logo with company branding and clean geometric design" --background transparent --output-format webp --output ./web-assets --style glassy
```

### Batch Generation

```bash
# Generate multiple variations with single command
snapai icon --prompt "modern fitness app icon variations with dumbbell and energetic design" --num-images 5 --model gpt-image-1 --output ./icons --style minimalism

# Generate different sizes for different platforms
snapai icon --prompt "vibrant social media logo with gradient background and modern typography" --size 1024x1024 --output ./social --model dall-e-3 --style gradient
snapai icon --prompt "premium banner logo with glass-like elements and translucent effects" --size 1792x1024 --output ./banners --model dall-e-3 --style glassy
```

### Professional Workflow

```bash
# 1. Concept phase - quick & cheap
snapai icon --prompt "modern fitness app icon concept with dumbbell and clean geometric design" --model dall-e-2 --num-images 5

# 2. Style exploration - try different visual approaches
snapai icon --prompt "minimalist fitness app with clean white dumbbell icon and subtle blue accents" --style minimalism --model gpt-image-1
snapai icon --prompt "premium fitness app with glass-like dumbbell and translucent purple elements" --style glassy --model gpt-image-1
snapai icon --prompt "energetic fitness app with neon dumbbell and electric green glow effects" --style neon --model gpt-image-1

# 3. Refinement phase - multiple high-quality options
snapai icon --prompt "professional fitness app icon with dumbbell and clean minimalist design" --model gpt-image-1 --quality high --num-images 3 --style minimalism

# 4. Final production - transparent background for overlays
snapai icon --prompt "final fitness app icon with professional dumbbell design and clean white background" --model gpt-image-1 --background transparent --quality high --style minimalism

# 5. Platform-specific versions
snapai icon --prompt "iOS app store fitness icon with classic Apple design and subtle gradients" --model dall-e-3 --quality hd --style ios-classic
snapai icon --prompt "Android play store fitness icon with Material Design and bold colors" --model dall-e-3 --quality hd --style android-material

# Alternative with Gemini models
snapai icon --prompt "iOS app store fitness icon with classic Apple design and subtle gradients" --model gemini-nano-pro --style ios-classic
snapai icon --prompt "Android play store fitness icon with Material Design and bold colors" --model gemini-nano-pro --style android-material
```

## 🛠️ For Developers

Need help setting up for development? Check out our detailed guides:

- 📚 [Development Setup](DEV_SETUP.md) - Local development workflow
- 📦 [Publishing Guide](PUBLISHING_GUIDE.md) - For maintainers

```bash
# Quick dev setup
git clone https://github.com/betomoedano/snapai.git
cd snapai && pnpm install && pnpm run build
./bin/dev.js --help
```

## 📚 Learn More

**Want to master React Native & Expo development?** 🚀

Visit [**Code with Beto**](https://codewithbeto.dev) for premium courses:

- 📱 **React Native with Expo** - Build real-world apps
- ⚡ **React with TypeScript** - Type-safe development
- 🔧 **GitHub Mastery** - Professional workflows
- 🔥 **LiveStore Course** _(Coming Soon)_ - Local-first apps

_Build the skills that top developers use in production!_ ✨

## 🤝 Contributing

Love SnapAI? Help make it even better!

- 🐛 [Report bugs](https://github.com/betomoedano/snapai/issues)
- 💡 [Suggest features](https://github.com/betomoedano/snapai/issues)
- 📝 [Improve docs](CONTRIBUTING.md)
- 🔧 [Submit code](CONTRIBUTING.md)

## 📄 License

MIT License - build amazing things! 🎉
