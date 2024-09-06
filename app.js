const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
  console.log(event);

  const xposition = event.x;
  const yposition = event.y;
  const randomNumber = Math.floor(Math.random() * 100);
  const span = document.createElement("span");
  span.style.left = `${xposition}px`;
  span.style.top = `${yposition}px`;
  span.style.height = `${randomNumber}px`;
  span.style.width = `${randomNumber}px`;
  body.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 3000);
});
