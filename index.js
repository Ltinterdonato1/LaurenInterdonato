let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  console.log("Dark mode toggled!");
  contrastToggle = !contrastToggle;
  document.body.classList.toggle("dark-theme", contrastToggle);
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");

  emailjs.sendForm(
    "service_zfa0hs4",
    "template_xon2u43",
    event.target,
    "hEwvpXiHH0DubP_6K"
  )
  .then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible");
  })
  .catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert("Email service down. Contact: newlauren.94@email.com");
  });
}

function toggleModal() {
  isModalOpen = !isModalOpen;
  document.body.classList.toggle("modal--open", isModalOpen);
}

// TEST: Remove after confirming
console.log("index.js loaded!");

