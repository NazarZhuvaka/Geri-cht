// function navToggle() {
// 	document.getElementById("headerUl").classList.toggle("_active");
// 	document.getElementById("html").classList.toggle("_overflow");
// }

// window.onload = function() {
//     window.setInterval(function(){
//         var date = new Date();


//         var years = date.getFullYear();
        

//         var clock = years;

//         document.getElementById("year-clock").innerHTML = clock; 
//     }
//     );
// }

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    spaceBetween: '20' ,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    autoplay: {
        delay: 5000,
    },
  
});
