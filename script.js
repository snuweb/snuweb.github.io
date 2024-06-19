document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    header.addEventListener("click", function () {
        header.style.backgroundColor =
            header.style.backgroundColor === "rgb(193, 193, 193)"
                ? "#4CAF50"
                : "#c1c1c1";
    });
});
