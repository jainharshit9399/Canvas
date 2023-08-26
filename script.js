document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".box");

    const originalStyles = [];

    containers.forEach((container) => {
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
            circle.style.backgroundColor="green";
        });
    });
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", () => {
      containers.forEach((container,index) => {
        const circle = container.querySelector(".circle");
        const arrow = container.querySelector(".arrow");
  
        arrow.style.transform = originalStyles[index].arrowTransform; // Reset arrow position
        circle.style.backgroundColor = originalStyles[index].circleColor; // Reset circle color
      });
    });
});
  

// document.addEventListener("DOMContentLoaded", () => {
//     const containers = document.querySelectorAll(".container");
  
//     containers.forEach((container) => {
//       const circle = container.querySelector(".circle");
//       const arrow = container.querySelector(".arrow");
//       const originalCircleColor = window.getComputedStyle(circle).backgroundColor;
//       const originalArrowTransform = window.getComputedStyle(arrow).transform;
  
//       circle.addEventListener("click", () => {
//         const circleRect = circle.getBoundingClientRect();
//         const arrowRect = arrow.getBoundingClientRect();
  
//         const distanceToTravel = circleRect.right - arrowRect.right;
//         arrow.style.transform = `translateX(${distanceToTravel}px)`;
  
//         circle.style.backgroundColor = "red"; // Change circle color here
//       });
//     });
  
//     const resetButton = document.getElementById("reset-button");
//     resetButton.addEventListener("click", () => {
//       containers.forEach((container) => {
//         const circle = container.querySelector(".circle");
//         const arrow = container.querySelector(".arrow");
  
//         arrow.style.transform = "none"; // Reset arrow position
//         circle.style.backgroundColor = originalCircleColor; // Reset circle color
//       });
//     });
//   });
  


// document.addEventListener("DOMContentLoaded", () => {
//     const containers = document.querySelectorAll(".box");
  
//     const originalStyles = [];
  
//     containers.forEach((container) => {
//       const circle = container.querySelector(".circle");
//       const arrow = container.querySelector(".arrow");
      
//       originalStyles.push({
//         circleColor: window.getComputedStyle(circle).backgroundColor,
//         arrowTransform: window.getComputedStyle(arrow).transform
//       });
  
//       circle.addEventListener("click", () => {
//         const circleRect = circle.getBoundingClientRect();
//         const arrowRect = arrow.getBoundingClientRect();
  
//         const distanceToTravel = circleRect.right - arrowRect.right;
//         arrow.style.transform = `translateX(${distanceToTravel}px)`;
  
//         circle.style.backgroundColor = "red"; // Change circle color here
//       });
//     });
  
//     const resetButton = document.getElementById("reset-button");
//     resetButton.addEventListener("click", () => {
//       containers.forEach((container, index) => {
//         const circle = container.querySelector(".circle");
//         const arrow = container.querySelector(".arrow");
  
//         arrow.style.transform = originalStyles[index].arrowTransform; // Reset arrow position
//         circle.style.backgroundColor = originalStyles[index].circleColor; // Reset circle color
//       });
//     });
//   });
  