<script>
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.querySelector('.question');
    const choicesElement = document.querySelector('.choices');
    const resultElement = document.querySelector('.result');
    const restartButton = document.getElementById('restart-btn');

    let currentQuestion = 0;
    let score = 0;

    const questions = [
        {
            "question": "Which method is used to concatenate two or more strings in JavaScript?",
            "choices": [
                {"id": "a", "text": "concat()"},
                {"id": "b", "text": "merge()"},
                {"id": "c", "text": "combine()"},
                {"id": "d", "text": "append()"}
            ],
            "correctAnswer": "a"
        },
        {
            "question": "How do you access the third element of an array?",
            "choices": [
                {"id": "a", "text": "myArray[2]"},
                {"id": "b", "text": "myArray[3]"},
                {"id": "c", "text": "myArray.third"},
                {"id": "d", "text": "myArray.element(3)"}
            ],
            "correctAnswer": "a"
        },
        {
            "question": "Which array method is used to add elements to the end of an array?",
            "choices": [
                {"id": "a", "text": "push()"},
                {"id": "b", "text": "pop()"},
                {"id": "c", "text": "shift()"},
                {"id": "d", "text": "unshift()"}
            ],
            "correctAnswer": "a"
        },
        {
            "question": "What does the 'length' property of an array represent?",
            "choices": [
                {"id": "a", "text": "The number of elements in the array"},
                {"id": "b", "text": "The maximum length of the array"},
                {"id": "c", "text": "The average length of the array elements"},
                {"id": "d", "text": "The length of the array type"}
            ],
            "correctAnswer": "a"
        },
        {
            "question": "How do you remove the last element from an array?",
            "choices": [
                {"id": "a", "text": "myArray.removeLast()"},
                {"id": "b", "text": "myArray.splice(-1, 1)"},
                {"id": "c", "text": "myArray.pop()"},
                {"id": "d", "text": "myArray.shift()"}
            ],
            "correctAnswer": "c"
        }
    ];

    function startQuiz() {
        currentQuestion = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        const currentQuiz = questions[currentQuestion];
        questionElement.textContent = currentQuiz.question;
        choicesElement.innerHTML = '';

        currentQuiz.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.addEventListener('click', () => checkAnswer(choice.id));
            choicesElement.appendChild(button);
        });
    }

    function checkAnswer(userChoice) {
        const currentQuiz = questions[currentQuestion];

        if (userChoice === currentQuiz.correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        hideElement('#quiz');
        showElement('#restart-btn');
        resultElement.textContent = `Your score is ${score} out of ${questions.length}.`;
    }

    function showElement(selector) {
        document.querySelector(selector).classList.remove('hidden');
    }

    function hideElement(selector) {
        document.querySelector(selector).classList.add('hidden');
    }

    restartButton.addEventListener('click', () => {
        showElement('#quiz');
        hideElement('#restart-btn');
        startQuiz();
    });

    startQuiz();  // Initial quiz start
</script>
