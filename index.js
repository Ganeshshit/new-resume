function lightFunction() {
  var elment = document.body;
  let about = document.getElementById('about');
  let footer = document.getElementById("footer")

  project.classList.toggle("about-mood");

  // project.classList
  setTimeout(() => {
    audio = new Audio('lamborgini.mp3');
    // audio.play();
    stop()
  }, 100);

  about.classList.toggle("about-mood");
  elment.classList.toggle("green-mood");
  footer.classList.toggle("footer-dark")
}

let logo = document.getElementsByClassName('logo');

let mybutton = document.getElementById('scroll-btn');
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {

  // document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
}

