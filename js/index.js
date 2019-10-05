// Your code goes here

// const  = document.querySelector('');

// elCard.addEventListener('dblclick', (e) => {
//     // put whatever we want to happen on the click
//     // console.log(e);
//     e.target.style.display = 'none';
//   });


// a tags used 2  events mouseover and mouseleave
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
})




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



