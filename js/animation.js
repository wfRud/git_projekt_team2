window.sr = new ScrollReveal();
const hero = document.querySelector(".features-list");

console.log(hero);
// ===HOME Caption===
sr.reveal(".caption", {
  duration: 1000,
  scale: 1,
  delay: 500,
});

// ===Course====
sr.reveal(".course__title", {
  distance: "100%",
  origin: "left",
  duration: 1500,
  scale: 1,
  delay: 500,
});
sr.reveal(".btn-secondary", {
  distance: "100%",
  origin: "right",
  duration: 1000,
  scale: 1,
  delay: 500,
});

// ===Jumbotron===

sr.reveal(".jumbotron__title", {
  duration: 1000,
  scale: 1,
  delay: 500,
});

sr.reveal(".features-list__item", {
  interval: 200,
  easing: "ease-in",
  viewFactor: 0.75,
});

sr.reveal(".resource", {
  interval: 300,
  easing: "ease-in",
  viewFactor: 0.75,
});

// ===clients===
sr.reveal(".client-1", {
  distance: "100%",
  origin: "left",
  duration: 1000,
  scale: 1,
  delay: 500,
});

sr.reveal(".client-2", {
  distance: "100%",
  origin: "right",
  duration: 1000,
  scale: 1,
  delay: 500,
});

sr.reveal(".footer_elements", {
  interval: 300,
  easing: "ease-in",
  viewFactor: 0.75,
});
