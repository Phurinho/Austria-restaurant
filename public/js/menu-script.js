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

// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.getElementById("slider");
//     const list = slider.querySelector(".list");
//     const prev = document.getElementById("prev");
//     const next = document.getElementById("next");

//     let currentIndex = 0;

//     const updateSlider = () => {
//         const width = slider.offsetWidth;
//         list.style.transform = `translateX(-${currentIndex * width}px)`;
//     };

//     prev.addEventListener("click", () => {
//         currentIndex = Math.max(currentIndex - 1, 0);
//         updateSlider();
//     });

//     next.addEventListener("click", () => {
//         currentIndex = Math.min(currentIndex + 1, list.children.length - 1);
//         updateSlider();
//     });

//     window.addEventListener("resize", updateSlider);
// });

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

    // Modal Zoom
    const modal = document.getElementById("zoomModal");
    const modalImg = document.getElementById("zoomedImage");
    const closeModal = document.getElementById("closeModal");
    const zoomContainer = modal.querySelector(".modal-zoom-container");

    let scale = 1;

    // เปิด modal
    slider.querySelectorAll(".zoomable").forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;

            // รีเซ็ตค่าซูม
            scale = 1;
            modalImg.style.transform = `scale(1)`;
            document.body.style.overflow = "hidden"; // ปิด scroll หน้าเว็บ
        });
    });

    // ซูมรูปภาพ
    zoomContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        scale = Math.min(Math.max(0.5, scale + delta), 3);
        modalImg.style.transform = `scale(${scale})`;
    });

    // ปิด modal เมื่อคลิกปุ่มปิด
    closeModal.addEventListener("click", () => closeModalModal());

    // ปิด modal เมื่อคลิกนอกภาพ
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModalModal();
        }
    });

    const closeModalModal = () => {
        modal.style.display = "none";
        modalImg.src = "";
        document.body.style.overflow = ""; // เปิด scroll หน้าเว็บ
    };

    // ปิด modal เมื่อกดปุ่ม Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            closeModalModal();
        }
    });
});
