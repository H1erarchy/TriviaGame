const questions = [
    {
        question: "What is Eren last name?",
        answers: [
            { text: "Yeager", correct: true },
            { text: "Ackerman", correct: false },
            { text: "Smith", correct: false },
            { text: "Arlet", correct: false }
        ]
    },
    {
        question: "Who did Eren touch to trigger his founding Titan power?",
        answers: [
            { text: "Historia", correct: true },
            { text: "Mikasa", correct: false },
            { text: "Dina", correct: false },
            { text: "Grisha", correct: false }
        ]
    },
    {
        question: "What latent power does the Attack Titan have?",
        answers: [
            { text: "Shared Memories", correct: true },
            { text: "Telekinesis", correct: false },
            { text: "Flight", correct: false },
            { text: "Invisiblity", correct: false }
        ]
    },
    {
        question: "What is the goal of the Yeagerist?",
        answers: [
            { text: "Closing Paradis Islands Wall", correct: false },
            { text: "World Dominiation", correct: false },
            { text: "The Rumbling", correct: true },
            { text: "Destorying Paradis Island", correct: false }
        ]
    },
    {
        question: "A hero will sacrifice you to save the world but Eren will sacrifice the world to save?",
        answers: [
            { text: "The Owl", correct: false },
            { text: "The Marleyans", correct: false },
            { text: "The Subjects Of Ymir", correct: true },
            { text: "The Azumabito", correct: false }
        ]
    },
    
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];

    // clear the previous question
    document.querySelector(".question").innerHTML = "";
    document.querySelector(".answers").innerHTML = "";

    // display the question
    const questionEl = document.createElement("h1");
    questionEl.classList.add("question-text");
    questionEl.textContent = question.question;
    document.querySelector(".question").appendChild(questionEl);

    // display the answers
    question.answers.forEach(answer => {
        const answerEl = document.createElement("button");
        answerEl.classList.add("answer-btn");
        answerEl.textContent = answer.text;
        answerEl.addEventListener("click", () => {
            if (answer.correct) {
                score++;
                alert("Correct!");
            } else {
                alert("Incorrect");
            }
            currentQuestionIndex++;
            if (currentQuestionIndex === questions.length) {
                alert(`Game over! You scored ${score} point${score !== 1 ? 's' : ''}`);
                return;
            }
            displayQuestion();
        });
        document.querySelector(".answers").appendChild(answerEl);
    });
}

var restartButton = document.createElement('button');
      restartButton.innerHTML = 'Restart';
      restartButton.onclick = function() {
      location.reload();
      };
      document.body.appendChild(restartButton);

displayQuestion();