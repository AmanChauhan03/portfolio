// ============== scroll section active link =====("When i scroll the sections or on screen then the nav element color will change on where your are")
// function ScrollActiveOnSEction(){
    let sections = document.querySelectorAll("section ");
    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = ()=> {
        sections.forEach(sec =>{
            let top =window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if(top>= offset && top < offset + height){
                navLinks.forEach(links =>{
                    links.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
            };
        });

        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 100);
    
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    };

   
   
// }


// function menuIconHumburger(){
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.onclick = ()=>{
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    }

   
    

// }



//scroll reveal when i scroll then the some element comes as animation
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay:200

});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });

ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });

ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text",{
    strings: ["Frontend Developer","App Developer","Blogger"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});