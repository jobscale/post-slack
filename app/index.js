const { Slack } = require('@jobscale/slack');
const { logger } = require('@jobscale/logger');
const program = require('commander');
const env = require('env.json');

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
      logger.info('Usage: NODE_PATH=./app:./modules node app --text "hello post-slack"');
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
