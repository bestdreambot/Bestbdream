const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body;

    if (body.message && body.message.text) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

      if (text === '/start') {
        await bot.sendMessage(chatId, 'Привет! Бот на Vercel работает!');
      }
    }
    res.status(200).send('ok');
  } else {
    res.status(200).send('bot is alive');
  }
};
