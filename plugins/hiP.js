module.exports = (bot) => {
  bot.onText(/\/hi/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hey');
  });
};
