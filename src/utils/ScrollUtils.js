export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (!section) return;
  const headerOffset = 100;
  const yOffset = -1;
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
