const shareBtn = document.querySelectorAll(".share-btn-c");
const shareBtnDesk = document.querySelector(".share-btn-desk");
const shareIcon = document.querySelector(".share-icon-desk")
const socials = document.querySelector(".socials-container");
const profile = document.querySelector(".profile-container");

shareBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        socials.classList.toggle("hidden");
        shareBtnDesk.classList.toggle("share-bg");
        shareIcon.classList.toggle("share-clr");
    })
})
