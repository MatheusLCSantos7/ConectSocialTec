var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuTogle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light")
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
} else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")
} else{
    localStorage.setItem("theme","light")
}


function getUser(){
 var txtpub = document.getElementById("Publisher").value
    $.ajax({
        url: "http://localhost:5044/texto-new-post", 
        method: "post",
        data:JSON.stringify({text:txtpub}),
        contentType: "application/json",
        success: function(users) {
        console.log(users);
        },
    }); 

    location.reload ;
  
}

// LOGO INTRO

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })

        setTimeout(()=>{

            logoSpan.forEach((span, idx) =>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade'); 
                },(idx + 1) * 50)
            })
        },2000)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)

    })
})