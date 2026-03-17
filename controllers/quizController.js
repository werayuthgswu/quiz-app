const Quiz = require('../models/Quiz');

const quizController = {
  index: (req, res) => {
    const quizzes = Quiz.getAllQuizzes();
    res.render('index', { quizzes });
  },

  showNewForm: (req, res) => {
    res.render('new-quiz');
  },

  create: (req, res) => {
    const quiz = Quiz.createQuiz(req.body.title);
    res.redirect(`/quiz/${quiz.id}`);
  },

  show: (req, res) => {
    const quiz = Quiz.getQuizById(req.params.id);
    if (!quiz) return res.status(404).send('Quiz not found');
    res.render('quiz', { quiz });
  },

  showNewQuestionForm: (req, res) => {
    const quiz = Quiz.getQuizById(req.params.id);
    if (!quiz) return res.status(404).send('Quiz not found');
    res.render('new-question', { quiz });
  },

  addQuestion: (req, res) => {
    const question = Quiz.addQuestion(req.params.id, req.body);
    if (!question) return res.status(404).send('Quiz not found');
    res.redirect(`/quiz/${req.params.id}`);
  }
};

module.exports = quizController;
