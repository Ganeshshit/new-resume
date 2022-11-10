function lightFunction() {
    var elment = document.body;
    let about=document.getElementById('about');
    let project=document.getElementById('project');
    // let project2=document.getElementsByClassName('card-container');
    project.classList.toggle("card-dark-mood");
    // project2.classList.toggle("card-dark-mood");
    // setInterval(() => {
      
      // }, 1000);
      setTimeout(() => {
        // audio=new Audio('lamborgini.mp3');
        audio.play();
      stop()
    }, 1000);

    about.classList.toggle("about-mood");
    elment.classList.toggle("green-mood");
}
// addEventListener scroll
// $(function () {
//     $("#nav-placeholder").load("nav.html");
// });
let logo=document.getElementsByClassName('logo');

let mybutton = document.getElementById('scroll-btn');
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {

    // document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
