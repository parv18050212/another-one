document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in, .slide-in").forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.remove("hidden");
        }, 300);
    });
});

function showMainContent() {
    document.querySelector(".welcome").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

function showMessage(message) {
    const msgElement = document.getElementById("fortune-message");
    msgElement.innerText = message;
    msgElement.classList.add("fade-in");
}
