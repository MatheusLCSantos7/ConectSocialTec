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

    // $.ajax({
    //     url: "http://localhost:5044/texto-post", 
    //     method: "get",
    //     dataType: "json",
    //     success: function(users) {
    //       $(users).each(i => {
    //         console.log(JSON.parse(users[i]));
    //          $(".post-container").after(`
    //         <div class="post-row">
    //             <div class="user-profile">
    //                 <img src="images/ProfilePic.jpg" alt="">
    //                 <div>  
    //                     <p>User</p>
    //                     <span class="clocks">20 de Janeiro 2023, 14:00</span>
    //                 </div>
    //             </div>
    //             <a href="#"><i class="fas fa-ellipsis-v"></i></a>
    //         </div>

    //         <p class="post-text">Inscrevasse <span>@MLCSantos</span>para mais tutoriais
    //         <a href="#">#Dvelopment</a></p>
    //         <p>${JSON.parse(users[i]).text}</p>
    //         <div class="post-row">
    //             <div class="activity-icons">
    //                 <div><img src="images/like-blue.png">120</div>
    //                 <div><img src="images/comments.png">45</div>
    //                 <div><img src="images/search.png">100</div>
    //             </div>
    //             <div class="post-profile-icon">
    //                 <img src="images/ProfilePic.jpg"><i class="fa-sharp fa-solid fa-caret-down"></i>
    //             </div>
    //         </div>

    //          `)
    //       });
    //     },
    //   }); 

    
}



// const $post = document.querySelector('form')
// console.log($post)

// $post.addEventListener('submit', function criaPostContrller(infosEvento){
//     infosEvento.preventDefault();
//     console.log("Estamos criando")
//     const $campoCriaPost = document.querySelector('a[id=extpost]') 
//     const $listaDePost = document.querySelector('.post-container')

//      console.log($listaDePost)
    
//       $listaDePost.insertAdjacentHTML('afterbegin', '<div class="post-container"></div>')
    
// });

//function criaPostContrller(infosEvento){
///    infosEvento.preventDefault();
//    console.log("Estamos criando")
//    const $campoCriaPost = document.querySelector('textarea[id=Publisher]') 
 //   const $listaDePost = document.querySelector('.post-container')
//}