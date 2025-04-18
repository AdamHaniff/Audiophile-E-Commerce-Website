// HELPER FUNCTIONS
function splitProductName(name) {
  const words = name.trim().split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return { firstPart, lastWord };
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export { splitProductName, scrollToTop };
