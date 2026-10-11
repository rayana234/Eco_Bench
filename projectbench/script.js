/*=========================
        SMOOTH SCROLL
=========================*/

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*=========================
      HEADER SHADOW
=========================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});


/*=========================
     SCROLL ANIMATION
=========================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


const hiddenElements = document.querySelectorAll(

".about,.card,.specs,.gallery,.contact"

);

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


const languageBtn = document.getElementById("languageBtn");


let currentLanguage = "en";


languageBtn.addEventListener("click", ()=>{


const elements = document.querySelectorAll("[data-en]");


elements.forEach(element=>{


if(currentLanguage === "en"){

element.textContent = element.dataset.ar;

}
else{

element.textContent = element.dataset.en;

}


});


if(currentLanguage === "en"){

currentLanguage = "ar";

languageBtn.textContent = "English";

document.body.style.direction = "rtl";

}
else{

currentLanguage = "en";

languageBtn.textContent = "عربي";

document.body.style.direction = "ltr";

}


});
/*=========================
        CLOCK & DATE
=========================*/

function updateDateTime(){

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    clock.textContent = `${hours}:${minutes}:${seconds}`;


    date.textContent = now.toLocaleDateString("en-US",{

        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"

    });

}


setInterval(updateDateTime,1000);

updateDateTime();



/*=========================
        DARK MODE
=========================*/

const darkModeBtn = document.getElementById("darkModeBtn");


if(localStorage.getItem("darkMode") === "enabled"){

    document.body.classList.add("dark-mode");

    darkModeBtn.textContent="☀️";

}


darkModeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark-mode");


    if(document.body.classList.contains("dark-mode")){


        localStorage.setItem("darkMode","enabled");

        darkModeBtn.textContent="☀️";


    }
    else{


        localStorage.setItem("darkMode","disabled");

        darkModeBtn.textContent="🌙";


    }


});



/*=========================
        SCROLL PROGRESS
=========================*/

window.addEventListener("scroll",()=>{


    const progressBar = document.getElementById("progressBar");


    const scrollTop = document.documentElement.scrollTop;


    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    const progress =
    (scrollTop / scrollHeight) * 100;


    progressBar.style.width = progress + "%";


});



/*=========================
        BACK TO TOP
=========================*/


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        topBtn.style.display="block";

    }
    else{

        topBtn.style.display="none";

    }


});


topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



/*=========================
        WELCOME MESSAGE
=========================*/


window.addEventListener("load",()=>{


    const welcome = document.getElementById("welcomeMessage");


    setTimeout(()=>{


        welcome.classList.add("show");


    },500);



    setTimeout(()=>{


        welcome.classList.remove("show");


    },4000);



});
/*=========================
        FAQ ACCORDION
=========================*/


const questions = document.querySelectorAll(".faq-question");


questions.forEach(question=>{


    question.addEventListener("click",()=>{


        const answer = question.nextElementSibling;


        question.classList.toggle("active");


        answer.classList.toggle("show");


    });


});





/*=========================
        3D IMAGE EFFECT
=========================*/


const benchImage = document.getElementById("benchImage");


if(benchImage){


document.querySelector(".hero-image").addEventListener("mousemove",(e)=>{


    let x = e.clientX / window.innerWidth - 0.5;

    let y = e.clientY / window.innerHeight - 0.5;



    benchImage.style.transform =
    `
    perspective(1000px)
    rotateY(${x*25}deg)
    rotateX(${-y*20}deg)
    scale(1.05)
    `;


});



document.querySelector(".hero-image").addEventListener("mouseleave",()=>{


    benchImage.style.transform=
    `
    perspective(1000px)
    rotateY(0)
    rotateX(0)
    scale(1)
    `;


});


}
