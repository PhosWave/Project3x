 document.addEventListener('DOMContentLoaded', async function () {
    const appstate = {
      qanswered: 0,
      qcorrect: 0,
      qwrong: 0,
      currentQuestionIndex: 0,
      questions: [],
    };

    const quizContainer = document.getElementById("quiz-container");
    const restartButton = document.getElementById("restart-btn");

      const response = await fetch('https://my-json-server.typicode.com/PhosWave/Project3json/db');
      const data = await response.json();

      appstate.questions = data.questions;

      const quizTemplate = Handlebars.compile(document.getElementById("quiz-template").innerHTML);


      quizContainer.innerHTML = quizTemplate({ questions: appstate.questions });

      document.querySelector('.question-container').classList.add('active-question');
   


    quizContainer.addEventListener('click', function (event) {
      const target = event.target;


      if (target.classList.contains('choice-btn')) {
        const selectedAnswer = target.getAttribute('data-answer');
        const correctAnswer = appstate.questions[appstate.currentQuestionIndex].correctAnswer;

        const isIncorrect = selectedAnswer !== correctAnswer;

        if (isIncorrect) {
          target.classList.add('incorrect');
          appstate.incorrectAnswers.push({ question: appstate.questions[appstate.currentQuestionIndex].question, selectedAnswer, correctAnswer });
        }

    
        showNextQuestion();
        appstate.qanswered = appstate.qanswered+4;
      }
    });

  
    function showNextQuestion() {
      const questionContainers = document.querySelectorAll('.question-container');
      questionContainers[appstate.currentQuestionIndex].classList.remove('active-question');
      appstate.currentQuestionIndex += 1;

      if (appstate.currentQuestionIndex < questionContainers.length) {
        questionContainers[appstate.currentQuestionIndex].classList.add('active-question');
      } 
      appstate.qanswered = appstate.qanswered+1;
    }
    if(appstate.qanswered===4){
        alert("Rbgrb");
    }
  });
