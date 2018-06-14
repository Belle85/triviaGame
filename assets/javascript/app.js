// console.log("This is to confirm my JS file is linked");

$(document).ready(function () {

var myQuestions = {
    questionOne:{
        question: "What is the tradition behind the onion soup?",
        answers:["The soup is brought to the the newly weds, the night of their wedding.", " In the XXI century, the onion soup was offered to the parents of a young woam menstruating for the first time.", "The onion soup was tradionnally served the nights a criminal was being beheaded.", "Churches used to organized banquets and serve onion soup on Ash Sunday."],
        correctAnswer:"The soup is brought, the night of the wedding to the newly weds., in their bed.",
    },
    questionTwo:{
        question: "As it is often times reminded to the French,  which war did they surrender?",
        answers:["WWI", "WWII", "The Cinco de Mayo battle", "All of the above"],
        correctAnswer:"WWII"
    },
    questionThree:{
        question: "Which of these electro bandS is French?",
        answers:["Tangerine Dream", "Infected Mushroom", "Daft Punk", "Depeche Mode"],
        correctAnswer:"Daft Punk"
    },
    questionFour:{
        question: "what nikname was given to French by the British?",
        answers:["The Frogs", "The Snails", "The Bloody Frenchies", "The Bread Eaters"],
        correctAnswer:"The Frogs",
    },
    questionFive:{
        question: "French are know for eating:",
        answers:["Rabbit", "Snails", "Frogs", "All of the above"],
        correctAnswer: "All of the above",
    },
    questionSix:{
        question: "which of these cheeses is not a French cheese?:",
        answers:["Bleu de Gand", "Tomme", "Camembert", "Fourme d'Asco"],
        correctAnswer:"Bleu de Gand",
    },
}  
// * User clicks "Start" to begin the game and first question displays.
$("#startBtn").on("click", function StartGame() {
    console.log("This is the click to start the game.");
});

// * User clicks "Start" to begin the game and first question displays.

// * Each questions display a 30 seconds timer and four possible answers.
// * If answer is incorrect then

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

})