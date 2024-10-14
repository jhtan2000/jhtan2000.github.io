// show modal
const modals = document.querySelectorAll('.project-modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const modalCloses = document.querySelectorAll('.modal-close');

var modal = function(modalClick) {
    modals[modalClick].classList.add("show-modal");
}

modalBtns.forEach((mBtn, i) => {
    mBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloses.forEach((mClose, i) => {
    mClose.addEventListener("click", () => {
        modals.forEach((modalView) => {
            modalView.classList.remove("show-modal");
        });
    });
});