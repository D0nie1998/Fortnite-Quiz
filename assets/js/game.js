const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");
const progressText = document.getElementById('progressText');
const question = document.getElementById("question");
const scoreText = document.getElementById('score');
const correctBonus = 10;
const maxQuestions = 10;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

/*  Questions   */


let questions = [
    {
        question: "What year was Fortnite created ",
        choice1: "1998",
        choice2: "2017",
        choice3: "2018",
        choice4: "2001",
        answer: '2'
    },
    {
        question: "What is the main currency?",
        choice1: "V-bucks",
        choice2: "dollars",
        choice3: "Yen",
        choice4: "bitcoin",
        answer: '1'
    },
    {
        question: "What is the price of Fortnite Battle Royale? ",
        choice1: "£30",
        choice2: "£20",
        choice3: "Free",
        choice4: "£50",
        answer: '3'
    },
    {
        question: "Which of these is NOT a basic building material?",
        choice1: "Wood",
        choice2: "Brick",
        choice3: "Concrete",
        choice4: "Steel",
        answer: '3'
    },
    {
        question: "Who created Fortnite?",
        choice1: "Sony",
        choice2: "Apple",
        choice3: "Epic games",
        choice4: "Microsoft",
        answer: '3'
    },
    {
        question: "How many players can win a Battle Royale?",
        choice1: "4",
        choice2: "1",
        choice3: "3",
        choice4: "6",
        answer: '2'
    },
    {
        question: "What is the first weapon you recieve? ",
        choice1: "Shotgun",
        choice2: "Pickaxe",
        choice3: "Pistol",
        choice4: "Assault Rifle",
        answer: '2'
    },
    {
        question: "Who was the first fortnite streamer to get a skin?",
        choice1: "Nickmercs",
        choice2: "Sypherpk",
        choice3: "Tfue",
        choice4: "Ninja",
        answer: '4'
    },
    {
        question: "Who won the Fortnite World cup solos?",
        choice1: "Clix",
        choice2: "Ninja",
        choice3: "Tfue",
        choice4: "Bugha",
        answer: '4'
    },
    {
        question: "Which of these has been featured as a weapon?",
        choice1: "Stinky sock bomb",
        choice2: "Pumpkin Launcher",
        choice3: "Pencil sharpener",
        choice4: "Zucchini zapper",
        answer: '2'
    },
];

/*    Start Game    */


function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

/*  To recieve random question   */


function getNewQuestion() {
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    if (availableQuestions.length === 0 || questionCounter >= maxQuestions){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("end.html");
    }

    questionCounter++;

    progressText.innerText = `Question ${questionCounter}/${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
    
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

/* correct and incorrect          */

choices.forEach(choice => {
    choice.addEventListener('click', (event) => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset.number;

        const classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(correctBonus);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});


/* incrementing the score */
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

startGame();