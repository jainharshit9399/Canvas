document.addEventListener("DOMContentLoaded", () => {
    const box_containers = document.querySelectorAll(".box");

    const originalStyles = [];

    box_containers.forEach((container) => {
        const circle = container.querySelector(".circle");
        const arrow = container.querySelector(".arrow");
        originalStyles.push({
            circleColor:window.getComputedStyle(circle).backgroundColor,
            arrowTransform: window.getComputedStyle(arrow).transform
        })

        circle.addEventListener("click", () => {
            const circleRect = circle.getBoundingClientRect();
            const arrowRect = arrow.getBoundingClientRect();

            const distanceToTravel = circleRect.right - arrowRect.right;
            arrow.style.transform = `translateX(${distanceToTravel+50}px)`;
            setTimeout(()=>{
                circle.style.backgroundColor="green";
            },5000);
            
        });
    });
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", () => {
      box_containers.forEach((container,index) => {
        const circle = container.querySelector(".circle");
        const arrow = container.querySelector(".arrow");
  
        arrow.style.transform = originalStyles[index].arrowTransform; // Reset arrow position
        // circle.style.backgroundColor = originalStyles[index].circleColor; // Reset circle color
        setTimeout(() => {
            circle.style.backgroundColor = originalStyles[index].circleColor; // Reset circle color
        }, 5000);
      });
    });
});
  
