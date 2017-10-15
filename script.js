var answer = "";
var correct = false;
var answerBox = document.getElementById('answer');
var wordBox = document.getElementById('word');
var iterator = 0;
var goodAnswers = 0;
var badAnswers = 0;

var ok = document.getElementById('ok');
var wrong = document.getElementById('wrong');

document.addEventListener("keypress", function(event) {
  if (event.keyCode == "13") {
    submitAnswer();
    event.preventDefault();
  }
});

function chooseNextWord() {
  iterator++;
  if (iterator >= words.length) {
    alert("Koniec słówek!");
  } else {
    wordBox.value = words[iterator][0];
    answerBox.value = "";
  }
}

function repeatWordAtEnd() {
  words.push(words[iterator]);
}

function submitAnswer() {
  answer = answerBox.value;
  word = wordBox.value;
  answerBox.value = "";
  if (checkAnswer(answer)) {
    goodAnswers++;
  } else {
    badAnswers++;
    repeatWordAtEnd();
  }
  chooseNextWord();
  updateResults();
}

function checkAnswer(a) {
  return a === words[iterator][1];
}

function updateResults() {
  ok.innerHTML = "✓ : " + goodAnswers + " kurwo";
  wrong.innerHTML = "✕ : " + badAnswers + " kurwo";
}

var words = [
  ["koń", "le cheval"],
  ["ja", "je"]
];

// cosmetics

ok.style.color = "green";
wrong.style.color = "red";
