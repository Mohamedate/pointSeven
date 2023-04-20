
//--------------- drop down for contact us -----------------------

let contact =  document.querySelector('.contact-us'),
tellUs = document.querySelector('.tell-us');
contact.onclick = function() { 
    tellUs.classList.toggle('active');
}
let navLink = document.querySelectorAll('.nav-link')
//----- updowon btn  -----
let upDownBtn = document.querySelector('.up-btn');

//----------------- btn-scroll to Top ------------------
upDownBtn.onclick = function() { 
    window.scrollTo({ 
        top: 0,
        behavior: 'smooth',
    });
}

window.addEventListener("scroll" , function() { 
    if (this.scrollY != 0) {
document.querySelector('.heading').classList.add('stiky');
tellUs.classList.remove('active');
    }
else { 
document.querySelector('.heading').classList.remove('stiky')
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
    }
     if (this.scrollY >= 1200) { 
        for (let index = 0; index < navLink.length; index++) {
            navLink[index].classList.remove('active');
        }
        navLink[2].classList.add('active');
        
    }
    if (this.scrollY >= 2000) { 
        for (let index = 0; index < navLink.length; index++) {
            navLink[index].classList.remove('active');
        }
        navLink[3].classList.add('active');
        
    }
    if (this.scrollY >= 3000) { 
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

/*--------------------------- section list ----------------------------*/
let navS = document.querySelector('.nav-s'),
navListS = navS.querySelectorAll('li'),
totalNavS = navListS.length,
allSection = document.querySelectorAll('.content-s'),
totalSec = allSection.length;
for (let i = 0; i < totalNavS; i++) {
    let a = navListS[i].querySelector('a');
    a.addEventListener('click',function() { 
        for (let i = 0; i < totalSec; i++) {
            allSection[i].classList.remove('active');
            
        }
        for (let j = 0; j < totalNavS; j++) {
            if(navListS[j].querySelector('a').classList.contains('active')) { 
                allSection[j].classList.add('active')
            }
            navListS[j].querySelector('a').classList.remove('active');
            
        }
        
        this.classList.add('active');
        showSection(this);
    })
}
function showSection(el) { 
    for (let i = 0; i < totalSec; i++) {
        allSection[i].classList.remove('active');  
    }
    let target = el.getAttribute('data-sec').split('se')[1];
    document.querySelector('.' + target).classList.add('active');
}
//------------------------- drop down ------------------------
let iconDrop = document.querySelector('.nav-item .fa-caret-down'),
dropLink = document.querySelector('.drop-link');
iconDrop.onclick = function() { 
dropLink.classList.toggle('active');
}

