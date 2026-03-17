const express = require('express');
const quizController = require('./controllers/quizController');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', quizController.index);
app.get('/quiz/new', quizController.showNewForm);
app.post('/quiz', quizController.create);
app.get('/quiz/:id', quizController.show);
app.get('/quiz/:id/question/new', quizController.showNewQuestionForm);
app.post('/quiz/:id/question', quizController.addQuestion);

app.listen(3000, () => {
  console.log('Quiz app running on http://localhost:3000');
});
