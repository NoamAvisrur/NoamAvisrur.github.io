document.querySelector('nav a:nth-child(1)').addEventListener('click', function(event) {
    if (document.querySelector('.about_me').style.display === "none") {    
        switchDivs ('.about_me', '.skills', '.projects', '.contact');
        fadeIn('.about_me.undisplay');
    }
});

document.querySelector('nav a:nth-child(2)').addEventListener('click', function(event) { 
    if (document.querySelector('.skills').className === "skills undisplay") { 
        switchDivs ('.skills', '.about_me', '.projects', '.contact');
        fadeIn('.skills.undisplay');
    }
});

document.querySelector('nav a:nth-child(3)').addEventListener('click', function(event) {
    if (document.querySelector('.projects').className === "projects undisplay") { 
        switchDivs ('.projects', '.skills', '.about_me', '.contact');
        fadeIn('.projects.undisplay');
    }
});

document.querySelector('nav a:nth-child(4)').addEventListener('click', function(event) {
    if (document.querySelector('.contact').className === "contact undisplay") { 
        switchDivs ('.contact', '.projects', '.skills', '.about_me');
        fadeIn('.contact.undisplay');
    }
});

function switchDivs (dispaly, undisplay1, undisplay2, undisplay3){ 
    document.querySelector(dispaly).style.display = "block";
    document.querySelector(undisplay1).style.display = "none";
    document.querySelector(undisplay1).classList.add('undisplay');
    document.querySelector(undisplay2).style.display = "none";
    document.querySelector(undisplay2).classList.add('undisplay');
    document.querySelector(undisplay3).style.display = "none";
    document.querySelector(undisplay3).classList.add('undisplay');
}

function fadeIn(selector) { 
    setTimeout(function(){
        document.querySelector(selector).classList.remove('undisplay');
     }, 0100);
}

if (window.matchMedia("(max-width: 450px)").matches) {
    allLinks = (document.querySelectorAll('nav a'));
    for (var i = 0; i < allLinks.length; i++){
        allLinks[i].href = "#main";  
    }
}
