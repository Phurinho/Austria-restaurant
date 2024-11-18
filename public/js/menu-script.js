// let hnext = document.querySelector('.hotdeal-next')
// let hprev = document.querySelector('.hotdeal-prev')

// hnext.addEventListener('click', function(){
//     let hitems = document.querySelectorAll('.hotdeal-item')
//     document.querySelector('.hotdeal-slide').appendChild(hitems[0])
// })

// hprev.addEventListener('click', function(){
//     let hitems = document.querySelectorAll('.hotdeal-item')
//     document.querySelector('.hotdeal-slide').prepend(hitems[hitems.length - 1]) // here the length of items = 6
// })

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const list = slider.querySelector(".list");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let currentIndex = 0;

    const updateSlider = () => {
        const width = slider.offsetWidth;
        list.style.transform = `translateX(-${currentIndex * width}px)`;
    };

    prev.addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    next.addEventListener("click", () => {
        currentIndex = Math.min(currentIndex + 1, list.children.length - 1);
        updateSlider();
    });

    window.addEventListener("resize", updateSlider);
});