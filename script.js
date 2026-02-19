// FUN scroll reveal
const options = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

document.querySelectorAll(".card, .section").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
