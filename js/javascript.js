
let navLink = document.querySelectorAll('.nav-link'),
navbarCollapse = document.querySelector('.navbar-collapse');

//--------------------- animation info title home page ----------------------
let home = document.querySelector('.home');
window.addEventListener('load',function() { 
home.classList.add('active');
})


//----- updowon btn  -----
let upDownBtn = document.querySelector('.up-btn');

//----------------- btn-scroll to Top ------------------
upDownBtn.onclick = function() { 
    window.scrollTo({ 
        top: 0,
        behavior: 'smooth',
    });
}
//--------------------- animation about section clients profile-image ----------------------
let about = document.querySelector('.about'),
 gellary = document.querySelector('.gellary');
window.addEventListener("scroll" , function() { 
    if (this.scrollY != 0) { 
document.querySelector('.heading').classList.add('stiky');

    }
else { 
document.querySelector('.heading').classList.remove('stiky');
}
if(this.scrollY == 0) { 
    for (let index = 0; index < navLink.length; index++) {
        navLink[index].classList.remove('active');
    upDownBtn.classList.remove('active');

    }
    navLink[0].classList.add('active');
    }
    if (this.scrollY >= 500) { 
         for (let index = 0; index < navLink.length; index++) {
        navLink[index].classList.remove('active');
    }
    navLink[1].classList.add('active');
    upDownBtn.classList.add('active');
    about.classList.add('active');
    }
     if (this.scrollY >= 1200) { 
        for (let index = 0; index < navLink.length; index++) {
            navLink[index].classList.remove('active');
        }
        navLink[2].classList.add('active');
        gellary.classList.add('active');
    }
    if (this.scrollY >= 2000) { 
        for (let index = 0; index < navLink.length; index++) {
            navLink[index].classList.remove('active');
        }
        navLink[3].classList.add('active');
        
    }
    if (this.scrollY >= 3200) { 
        for (let index = 0; index < navLink.length; index++) {
            navLink[index].classList.remove('active');
        }

        navLink[4].classList.add('active');
        
    }

    if (this.scrollY >= 4000) { 
        for (let index = 0; index < navLink.length; index++) {
            navLink[index].classList.remove('active');
        }
        navLink[5].classList.add('active');
        
    }
    
})
 
//------------------ nav-hidden-when-click-link ---------------------

for (let index = 0; index < navLink.length; index++) {
    navLink[index].onclick = function() { 
    for (let index = 0; index < navLink.length; index++) {
        navLink[index].classList.remove('active');
    }
    navbarCollapse.classList.remove('show');
    this.classList.add('active');
    }
}
/*------------------- image slider -------------------*/
let slide = document.querySelectorAll('.services .parent-slider'),
nextBtn = document.querySelector('.fa-angle-right'),
square = document.querySelector('.controls .square'),
index = 0,
counter = 90;
function next() { 
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');
  square.style.transform = `rotate(${counter+=90}deg)`;
}
function prev() { 
    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('active');
  square.style.transform = `rotate(${counter-=90}deg)`;
}
 setInterval(() => {
    nextBtn.click();
 }, 6000);



