
const htmlColor = document.querySelector('body');

htmlColor.addEventListener('click', (e) => {
    e.target.style.backgroundColor = '#41B3A3';
});

const navBackgroundColor = document.querySelector('.main-navigation');

navBackgroundColor.addEventListener('click', (e) => {
    e.target.style.backgroundColor = '#41B3A3';
});


const navStyle = document.querySelectorAll('.nav-link');


for (let i = 0; i < navStyle.length; i++) {
    navStyle[i].addEventListener('mouseover', (e) => {
        e.target.style.fontSize = '2rem';
        e.target.style.color = 'orange';
    })
};

for (let i = 0; i < navStyle.length; i++) {
    navStyle[i].addEventListener('mouseleave', (e) => {
        e.target.style.fontSize = '1.6rem';
        e.target.style.color = 'black';
    })
};

for (let i = 0; i < navStyle.length; i++) {
    navStyle[i].addEventListener('click', (e) => {
        e.stopPropagation();
    })
};

const backgroundNav = document.querySelector('.nav');

backgroundNav.addEventListener('click', (e) => {
    e.target.style.backgroundColor = "red";
});




// Looks crappy.. arg
const h1Affect = document.querySelector('.logo-heading');

h1Affect.addEventListener('click', (e) => {
    e.target.style.backgroundColor = "beige";
});

// IMG affects

const headerImg = document.querySelector('header img');

headerImg.addEventListener('dblclick', (e) => {
    e.target.style.border = "5px solid red";
});


const bodyImg = document.querySelectorAll('.img-content img');

for (let i = 0; i < bodyImg.length; i++) {
    bodyImg[i].addEventListener('mouseover', (e) =>{
        e.target.style.borderRadius = "50%";
    });
}


const allH2s = document.querySelectorAll('body h2');

for (let i = 0; i < allH2s.length; i++) {
    allH2s[i].addEventListener('dblclick', (e) => {
        e.target.style.fontFamily = "Times New Roman";
    });
}

const allH4s = document.querySelectorAll('body h4');

for (let i = 0; i < allH4s.length; i++) {
    allH4s[i].addEventListener('dblclick', (e) => {
        e.target.style.fontFamily = "Times New Roman";
    });
}

const buttons = document.querySelectorAll('.destination .btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "orange";
    });
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = "#17A2B8";
    });
}








