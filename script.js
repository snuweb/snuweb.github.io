document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");
    const container = document.querySelector(".skills-container");

    const containerRect = container.getBoundingClientRect();

    skills.forEach((skill) => {
        let posX = Math.random() * (containerRect.width - skill.offsetWidth);
        let posY = Math.random() * (containerRect.height - skill.offsetHeight);
        let velocityX = (Math.random() * 2 - 1) * 2; // Random velocity between -2 and 2
        let velocityY = (Math.random() * 2 - 1) * 2;

        skill.style.left = `${posX}px`;
        skill.style.top = `${posY}px`;

        let moving = true;

        skill.addEventListener("click", function () {
            moving = !moving;
        });

        function moveSkill() {
            if (moving) {
                posX += velocityX;
                posY += velocityY;

                // Check for collisions with container edges
                let touchingBottomEdge = false;

                if (posY >= containerRect.height - skill.offsetHeight) {
                    touchingBottomEdge = true;
                    velocityY *= -1; // Reverse direction
                }

                if (
                    posX <= 0 ||
                    posX >= containerRect.width - skill.offsetWidth
                ) {
                    velocityX *= -1; // Reverse direction
                }
                if (posY <= 0) {
                    velocityY *= -1; // Reverse direction
                }

                if (touchingBottomEdge) {
                    skill.style.backgroundColor = "#ffa500"; // Orange color when touching bottom edge
                } else {
                    skill.style.backgroundColor = "#01AED8"; // Original color when not touching bottom edge
                }

                skill.style.left = `${posX}px`;
                skill.style.top = `${posY}px`;
            }

            requestAnimationFrame(moveSkill);
        }

        moveSkill();
    });
});

// Contact form submission
document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const mailtoLink = `mailto:vmcebl@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom:%0D%0A${name}%0D%0A${email}`;
        window.location.href = mailtoLink;
    });
