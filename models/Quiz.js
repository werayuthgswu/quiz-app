class Quiz {
  constructor() {
    this.quizzes = [];
    this.nextQuizId = 1;
    this.nextQuestionId = 1;
  }

  getAllQuizzes() {
    return this.quizzes;
  }

  createQuiz(title) {
    const quiz = {
      id: this.nextQuizId++,
      title,
      questions: []
    };
    this.quizzes.push(quiz);
    return quiz;
  }

  getQuizById(id) {
    return this.quizzes.find(q => q.id == id);
  }

  addQuestion(quizId, questionData) {
    const quiz = this.getQuizById(quizId);
    if (!quiz) return null;

    const question = {
      id: this.nextQuestionId++,
      text: questionData.text,
      options: [questionData.option1, questionData.option2, questionData.option3, questionData.option4],
      correct: parseInt(questionData.correct)
    };
    quiz.questions.push(question);
    return question;
  }
}

module.exports = new Quiz();
