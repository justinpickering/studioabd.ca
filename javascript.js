
// const burger = document.querySelector(".burger");
// const nav = document.querySelector(".nav-links");
// const navbar = document.querySelector("nav");
// const navLinks = document.querySelectorAll(".nav-links li");


// burger.addEventListener('click', () => {


//     //toggle nav
//     nav.classList.toggle('nav-active');


//     //Animate Links
//     navLinks.forEach((link, index) => {
        
//         if (link.style.animation) {

//             link.style.animation = '';
//         }
//         else {
//             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//             console.log(index/7);
//         }
//     });

//     // Burger animation
//     burger.classList.toggle('toggle')
// });


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     navbar.style.opacity = "90%";
//   }
//     else {
//     navbar.style.opacity = "70%";
//   }
// }





const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");


    burger.addEventListener('click', () => {

        //toggle nav
        nav.classList.toggle('nav-active');

        if (nav.classList.contains("nav-active")) {
            nav.style.animation = `navSlide 0.5s forwards`;
          } else {
            nav.style.animation = `navSlideOut 0.5s`;
          }



        //Animate Links
        navLinks.forEach((link, index) => {
            
            if (link.style.animation) {

                link.style.animation = '';
            }
            else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }

        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });


}

navSlide();