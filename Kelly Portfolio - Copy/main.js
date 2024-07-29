let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};

// multiple toggle themes

// List of theme class names
const themes = ['theme1', 'theme2', 'theme3'];
let currentThemeIndex = 0;

document.getElementById('btn').onclick = function() {
    // Remove the current theme class from the body
    document.body.classList.remove(themes[currentThemeIndex]);

    // Increment the theme index, cycling back to 0 if necessary
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Add the new theme class to the body
    document.body.classList.add(themes[currentThemeIndex]);
};





// // Dark-mode Toggle
// let btn = document.getElementById("btn");

// btn.onclick = function() {
//     document.body.classList.toggle("theme");
// };



// reviews swiper
var swiper = new Swiper(".review-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//   Email JS

function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if (name.value == "" || email.value == ""  || msg.value == "" ){
            emptyerror();
        } else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}

validate();

function sendmail(name,email,msg){
    emailjs.send("service_2hom6bg","template_hq54a27",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}


function emptyerror(){
    swal({
        title: "error!",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}

function success(){
    swal({
        title: "Email sent successfully",
        text: "We'll try to reply asap",
        icon: "success",
      });
}


// Header Background Change

let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active",window.scrollY > 0)
})

// Scroll Top
let scrollTop = document.querySelector(".scroll-top")

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active",window.scrollY >= 400)
})