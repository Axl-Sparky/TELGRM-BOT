module.exports = (bot) => {
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Check if the message contains 'sparky'
    if (msg.text && msg.text.toLowerCase().includes('sparky')) {
      // Create buttons for the reply
      const options = {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Yes', callback_data: 'yes' }],
            [{ text: 'No', callback_data: 'no' }]
          ]
        }
      };

      // Send the message with inline buttons
      bot.sendMessage(chatId, 'Do you want to see something cool?', options);
    }
  });

  // Handle button clicks
  bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;

    if (data === 'yes') {
      // Send an image when user clicks "Yes"
      const imageUrl = 'https://path/to/your/image.jpg'; // Replace with your image URL
      bot.sendPhoto(chatId, imageUrl, { caption: 'Here is your cool image!' });
    } else if (data === 'no') {
      // Send an image with caption when user clicks "No"
      const imageUrl = 'https://path/to/your/second/image.jpg'; // Replace with your second image URL
      bot.sendPhoto(chatId, imageUrl, { caption: 'hai' });
    }
  });
};
