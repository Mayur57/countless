function removeParentElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

function removeTags() {
  const elements = document.querySelectorAll("[aria-label]");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const ariaLabel = element.getAttribute("aria-label");
    if (ariaLabel && ariaLabel.includes("post analytics")) {
      removeParentElement(element.parentNode);
    }
  }
}

setInterval(removeTags, 3000);
