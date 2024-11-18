const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const TelegramBot = require('node-telegram-bot-api');


const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const token = '7764849066:AAEpORB1whrdgEmZlfAF3qa-kKl35icHWII';

// Инициализируем бота
const bot = new TelegramBot(token, { polling: true });

// ID чата, куда будут отправляться сообщения
const chatId = '-1002454776165';

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Форматируем сообщение для отправки
  const formattedMessage = `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

  // Отправляем сообщение в чат
  bot.sendMessage(chatId, formattedMessage)
    .then(() => {
      console.log(`Сообщение успешно отправлено!`);
      res.redirect('/'); // Перенаправляем на главную страницу после успешной отправки
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Произошла ошибка при отправке сообщения' });
    });
});


app.use('/static', express.static(path.join(__dirname, 'static')));

  app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/Front/index.html`);
  });

  app.get('/index_2.html', (req, res) => {
    res.sendFile(`${__dirname}/Front/index_2.html`);
  });

  app.get('/index.html', (req, res) => {
    res.sendFile(`${__dirname}/Front/index.html`);
  });

  app.get('/index_3.html', (req, res) => {
    res.sendFile(`${__dirname}/Front/index_3.html`);
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});