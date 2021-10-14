console.log('This is my portfolio')
// Declaring all the variables
let navBtn = document.getElementById('nav_icon');
let navBox = document.getElementById('nav_container');
let container = document.getElementById("container");
console.log(window.innerWidth);

function controlPage() {
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

navBtn.addEventListener('click', () => {
    navBox.classList.toggle('active');

    if(navBox.classList.contains("active")){
        console.log("yes it is containing...");
        second.style.display = "none";
        first.style.transform = "rotate(45deg)";
        third.style.transform = "rotate(-45deg)";
        first.style.position = "absolute";
        third.style.position = "absolute";
        first.style.top = "17px";
        third.style.top = "17px";
    }else{
        console.log("NO it's not containing...");
        second.style.display = "block";
        first.style.transform = "rotate(0deg)";
        third.style.transform = "rotate(0deg)";
        first.style.position = "relative";
        third.style.position = "relative";
        first.style.top = "0px";
        third.style.top = "0px";
    }

    resume.addEventListener('click', () => {
        controlPage();
        resume.classList.add('active');
        resume_container.style.display = "block";
        if (window.innerWidth <= 870) {
            document.body.style.height = "1450px";
            container.style.marginTop = "-670px";
        }
        if (window.innerWidth <= 560) {
            document.body.style.height = "1910px";
            container.style.marginTop = "-1160px";
        }
    });

    portfolio.addEventListener('click', () => {
        controlPage();
        portfolio.classList.add('active');
        portfolio_container.style.display = "block";
        if (window.innerWidth <= 870 && window.innerWidth >= 561) {
            document.body.style.height = "1600px";
            container.style.marginTop = "-800px";
        }else if (window.innerWidth <= 560) {
            document.body.style.height = "2000px";
            container.style.marginTop = "-1210px";
            console.log("this is first working...")
        };
    });

    contact.addEventListener('click', () => {
        controlPage();
        contact.classList.add('active')
        contact_container.style.display = "block";
        if (window.innerWidth <= 870) {
            document.body.style.height = "1450px";
            container.style.marginTop = "-670px";
        }
    });

    about.addEventListener('click', () => {
        controlPage();
        about.classList.add('active');
        about_section.style.display = "block";
        what_doing_section.style.display = "block";
        if (window.innerWidth <= 870 && window.innerWidth >= 561) {
            document.body.style.height = "1800px";
            container.style.marginTop = "-1020px";
            console.log("this is second working...")
        }else if (window.innerWidth <= 560) {
            document.body.style.height = "1720px";
            container.style.marginTop = "-950px";
            console.log("this is first working...")
        };
    });
});