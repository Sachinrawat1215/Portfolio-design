console.log('This is my portfolio')
// Declaring all the variables
let navBtn = document.getElementById('nav_icon');
let navBox = document.getElementById('nav_container');

function controlPage(){
    // Removing all active class
    about.classList.remove('active')
    portfolio.classList.remove('active')
    contact.classList.remove('active')
    resume.classList.remove('active');

    // set display block to all container
    about_section.style.display = "none";
    what_doing_section.style.display = "none";
    portfolio_container.style.display = "none";
    contact_container.style.display = "none";
    resume_container.style.display = "none";
}

navBtn.addEventListener('click',() => {
    navBox.classList.toggle('active');
    resume.addEventListener('click',() => {
        controlPage();
        resume.classList.add('active');
        resume_container.style.display = "block";
    })

    portfolio.addEventListener('click',() => {
        controlPage();
        portfolio.classList.add('active');
        portfolio_container.style.display = "block";
    })

    contact.addEventListener('click',() => {
        controlPage();
        contact.classList.add('active')
        contact_container.style.display = "block";
    })

    about.addEventListener('click',() => {
        controlPage();
        about.classList.add('active');
        about_section.style.display = "block";
        what_doing_section.style.display = "block";
    })
})