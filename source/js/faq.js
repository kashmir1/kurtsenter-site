// let answers = document.querySelectorAll('.faq__desc');
// let questions = document.querySelectorAll('.faq__question-title');
//
// const faqOpen = () => {
//
// }

// answers.forEach(function(el) {
//   el.classList.add('faq-close');
// });
//
// questions.forEach(function(el) {
//   el.onclick = () => {
//     if (el.nextSibling.nextSibling.style.display === 'none') {
//       el.nextSibling.nextSibling.style.display = 'block';
//       el.classList.remove('faq__close', 'faq__hover');
//       el.classList.add('faq__open', 'faq__question--open');
//     } else {
//       el.nextSibling.nextSibling.style.display = 'none';
//       el.classList.add('faq__close', 'faq__hover');
//       el.classList.remove('faq__open', 'faq__question--open');
//     }
//   };
// });


let acc = document.querySelectorAll(".faq__question-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("faq-active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
