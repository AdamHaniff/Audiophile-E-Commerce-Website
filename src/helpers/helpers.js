// HELPER FUNCTIONS
function splitProductName(name) {
  const words = name.trim().split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return { firstPart, lastWord };
}

export { splitProductName };
