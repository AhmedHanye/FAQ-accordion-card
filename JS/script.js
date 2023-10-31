// Select all the Questions and Answers
Questions = document.querySelectorAll(".question");
Arrows = document.querySelectorAll(".arrow");
Answers = document.querySelectorAll(".answer");

// Add Event Listener to all the Questions
l_q = Questions.length;
let opend = -1;
for (let i = 0; i < l_q; i++) {
  Questions[i].addEventListener("click", () => {
    // This will close the previous open Question
    if (opend != -1 && opend != i) {
      Questions[opend].classList.remove("bold");
      Arrows[opend].classList.remove("arrow-down");
      Answers[opend].classList.remove("open");
    }

    // This will toggle the current Question
    Questions[i].classList.toggle("bold");
    Arrows[i].classList.toggle("arrow-down");
    Answers[i].classList.toggle("open");

    // This will set the current Question as open
    Arrows[i].classList.contains("arrow-down") ? (opend = i) : (opend = -1);
  });
}
