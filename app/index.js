import fs from 'fs';
import { Slack } from '@jobscale/slack';
import { createLogger } from '@jobscale/logger';
import { program } from 'commander';

const logger = createLogger('info', { noPathName: true, noType: true });
const env = JSON.parse(fs.readFileSync('app/env.json').toString());

const template = {
  text: undefined,
  username: undefined,
  channel: undefined,
  icon_emoji: undefined,
  attachments: [{
    fallback: undefined,
    thumb_url: undefined,
  }],
};

class App {
  post() {
    const data = { ...template };
    program.option('--text <text>');
    program.option('--username <text>');
    program.option('--channel <text>');
    program.option('--emoji <text>');
    program.parse(process.argv);
    const options = program.opts();
    data.text = options.text;
    if (!data.text) {
      logger.info('Usage: npm start -- --text "hello post-slack"');
      logger.info('Usage: node app/index.js --text "hello post-slack"');
      logger.info(`Options:
      --text <text>
      --username <text>
      --channel <text>
      --emoji <text>`);
      return;
    }
    logger.info({ options });
    data.username = options.username;
    data.channel = options.channel;
    data.icon_emoji = options.emoji;
    new Slack(env).send(data)
    .then(res => logger.info(res));
  }
}

new App().post();
