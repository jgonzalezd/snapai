import { Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import { ConfigService } from '../services/config.js';
import { ValidationService } from '../utils/validation.js';

export default class ConfigCommand extends Command {
  static description = 'Manage SnapAI configuration';

  static examples = [
    '<%= config.bin %> <%= command.id %> --api-key sk-your-openai-key',
    '<%= config.bin %> <%= command.id %> --google-api-key your-google-key',
    '<%= config.bin %> <%= command.id %> --default-model gpt-image-1',
    '<%= config.bin %> <%= command.id %> --show',
  ];

  static flags = {
    'api-key': Flags.string({
      description: 'Set OpenAI API key',
    }),
    'google-api-key': Flags.string({
      description: 'Set Google API key for Gemini models',
    }),
    'default-model': Flags.string({
      description: 'Set default model: dall-e-2, dall-e-3, gpt-image-1, gemini-nano, gemini-nano-pro',
      options: ['dall-e-2', 'dall-e-3', 'gpt-image-1', 'gemini-nano', 'gemini-nano-pro'],
    }),
    show: Flags.boolean({
      description: 'Show current configuration',
    }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(ConfigCommand);

    if (flags['api-key']) {
      await this.setApiKey(flags['api-key']);
    }

    if (flags['google-api-key']) {
      await this.setGoogleApiKey(flags['google-api-key']);
    }

    if (flags['default-model']) {
      await this.setDefaultModel(flags['default-model']);
    }

    if (flags.show) {
      await this.showConfig();
    }

    // If no flags provided, show help
    if (Object.keys(flags).length === 0) {
      await this.showConfig();
    }
  }

  private async setApiKey(apiKey: string): Promise<void> {
    const error = ValidationService.validateApiKey(apiKey);
    if (error) {
      this.error(chalk.red(error));
    }

    await ConfigService.set('openai_api_key', apiKey);
    this.log(chalk.green('✅ OpenAI API key configured successfully!'));
    this.log('');
    this.log(chalk.dim('Built with ❤️  by \u001b]8;;https://codewithbeto.dev\u001b\\codewithbeto.dev\u001b]8;;\u001b\\ - Ship faster, contribute more, lead with confidence'));
  }

  private async setGoogleApiKey(apiKey: string): Promise<void> {
    const error = ValidationService.validateGoogleApiKey(apiKey);
    if (error) {
      this.error(chalk.red(error));
    }

    await ConfigService.set('google_api_key', apiKey);
    this.log(chalk.green('✅ Google API key configured successfully!'));
    this.log('');
    this.log(chalk.dim('Built with ❤️  by \u001b]8;;https://codewithbeto.dev\u001b\\codewithbeto.dev\u001b]8;;\u001b\\ - Ship faster, contribute more, lead with confidence'));
  }

  private async setDefaultModel(model: string): Promise<void> {
    await ConfigService.set('default_model', model as 'dall-e-2' | 'dall-e-3' | 'gpt-image-1' | 'gemini-nano' | 'gemini-nano-pro');
    this.log(chalk.green(`✅ Default model set to ${chalk.bold(model)}!`));
    this.log('');
    this.log(chalk.dim('Built with ❤️  by \u001b]8;;https://codewithbeto.dev\u001b\\codewithbeto.dev\u001b]8;;\u001b\\ - Ship faster, contribute more, lead with confidence'));
  }

  private async showConfig(): Promise<void> {
    const config = await ConfigService.getConfig();
    
    this.log(chalk.bold('📋 Current Configuration:'));
    this.log('');
    
    if (config.openai_api_key) {
      const maskedKey = `sk-...${config.openai_api_key.slice(-4)}`;
      this.log(`🔑 OpenAI API Key: ${chalk.green(maskedKey)}`);
    } else {
      this.log(`🔑 OpenAI API Key: ${chalk.red('Not configured')}`);
      this.log(chalk.gray('   Set with: snapai config --api-key YOUR_KEY'));
    }
    
    if (config.google_api_key) {
      const maskedKey = `...${config.google_api_key.slice(-4)}`;
      this.log(`🔑 Google API Key: ${chalk.green(maskedKey)}`);
    } else {
      this.log(`🔑 Google API Key: ${chalk.red('Not configured')}`);
      this.log(chalk.gray('   Set with: snapai config --google-api-key YOUR_KEY'));
    }
    
    if (config.default_output_path) {
      this.log(`📁 Default Output: ${chalk.blue(config.default_output_path)}`);
    }
    
    if (config.default_model) {
      this.log(`🤖 Default Model: ${chalk.blue(config.default_model)}`);
    } else {
      this.log(`🤖 Default Model: ${chalk.yellow('Not configured (using gpt-image-1)')}`);
      this.log(chalk.gray('   Set with: snapai config --default-model MODEL_NAME'));
      this.log(chalk.gray('   Available models: dall-e-2, dall-e-3, gpt-image-1, gemini-nano, gemini-nano-pro'));
    }
    
    this.log('');
    this.log(chalk.dim('Built with ❤️  by \u001b]8;;https://codewithbeto.dev\u001b\\codewithbeto.dev\u001b]8;;\u001b\\ - Ship faster, contribute more, lead with confidence'));
  }
}