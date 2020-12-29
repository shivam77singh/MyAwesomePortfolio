// <====menu open & close====>
document.querySelector('.menu').addEventListener('click', () => {
    if (document.querySelector('.nav-links').style.top === '-1000px') {
        document.querySelector('.nav-links').style.top = '5rem';
    }
    else {
        document.querySelector('.nav-links').style.top = '-1000px';
    }
});

// <===mouse cursor===>

if (window.innerWidth > 1000) {

    window.addEventListener('mousemove', cursor);
    let mouse_cursor = document.querySelector('.mouse-cursor')
    function cursor(e) {
        mouse_cursor.style.top = e.pageY + 'px';
        mouse_cursor.style.left = e.pageX + 'px';
    }
}


// <<=====about, skilss, projects =====>>

const about = document.querySelector('.about-container');
const about_img = document.querySelector('.about-image');
window.addEventListener('scroll', () => {
    $('.circle').css('top', `${window.scrollY}px`);
    let windX = window.innerWidth;
    let windY = window.innerHeight;
    let mouseX = ((windX / 2) - window.scrollY) / 60;
    let mouseY = ((windY / 2) - window.scrollY) / 70;
    if (window.innerWidth <= 900) {
        mouseY /= 12;
        mouseX /= 12;
    }
    // console.log(innerWidth);
    if (scrollY <= 1400) { about.style.transform = `rotateX(${-mouseX}deg) rotateY(${mouseY}deg)`; }
    about.style.transition = 'all 0.2s ease';

    if (scrollY >= 2600) {

        $('.project1').css(
            {
                'transform': 'skewX(-15deg)'
            }
        )
        $('.project2').css(
            {
                'transform': 'skewX(-15deg)'
            }
        )
        $('.project3').css(
            {
                'transform': 'skewX(-15deg)'
            }
        )
    }
    else {
        $('.project1').css(
            {
                'transform': 'translateX(900px) skewX(-15deg)'
            }
        )
        $('.project2').css(
            {
                'transform': 'translateX(-900px) skewX(-15deg)'
            }
        )
        $('.project3').css(
            {
                'transform': 'translateX(900px) skewX(-15deg)'
            }
        )
    }

    if (window.innerWidth > 900) {

        let cards = document.getElementsByClassName('skills-card');
        let t = 0;
        for (let i = 0; i < 3; i++) {
            // window.scrollTo(0,1300);
            if (t + 1800 < scrollY) {
                if (i > 0) {
                    cards[i - 1].style.cssText = "transform: none;background-color: rgba(0, 17, 255, 0.2);"
                }
                cards[i].style.cssText = "transform: translate3d(-20px, -20px, -70px) scale(1.3);background-color: rgb(0, 13, 126);"
            }
            else {
                cards[i].style.cssText = "transform: none;background-color: rgba(0, 17, 255, 0.2);"
            }
            if (i === 1) t += 200;
            else { t += 250; }

        }
    }
});




// <<======projects and carousal hover effect===>>

const projects = [".project1", ".project2", ".project3", ".home-left", ".home-right"];
const carousals = [".news", ".music", ".portfolio", ".web-design", ".web-design"];


function mouseenter(i) {
    let project = document.querySelector(`${projects[i]}`);
    let carousal = document.querySelector(`${carousals[i]}`);

    project.addEventListener('mouseenter', () => {
        window.addEventListener('mousemove', (e) => {
            carousal.style.opacity = '0.9';
            carousal.style.left = `${e.pageX - 100}px`;
            carousal.style.top = `${e.pageY - 270}px`;
            carousal.style.transition = 'all 0s ease';
        });

    });
    project.addEventListener('mouseleave', () => {
        window.addEventListener('mousemove', (e) => {
            carousal.style.opacity = '0';
            carousal.style.left = '-100px';
            carousal.style.transition = 'all 0.2s ease';
        });
    });

}

for (let i = 0; i < 5; i++) {
    mouseenter(i);
}



// <<===scroll into view===>>

let pages = [".home-container", ".about-container", ".skills-page", ".projects-page"];
let links = $('.nav-links li');

for (let i = 0; i < 4; i++) {
    let page = document.querySelector(`${pages[i]}`)
    links[i].addEventListener('click', () => {
        page.scrollIntoView();
    });
}




