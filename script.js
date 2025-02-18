function removeElementBySelector(selector, conditionFn) {
  document.querySelectorAll(selector).forEach((element) => {
    if (conditionFn(element)) {
      let parentDiv = element.closest("div");
      if (parentDiv) {
        parentDiv.remove();
      }
    }
  });
}

function removeViewsElement() {
  removeElementBySelector(
    "span",
    (span) => span.textContent.trim() === "Views"
  );
}

function removeGrokElements() {
  removeElementBySelector("button[aria-label*='Grok']", () => true);
}

function removeGrokActionsButton() {
  removeElementBySelector("button[aria-label='Grok actions']", () => true);
}

function removeGrokFab() {
  document.querySelectorAll("div[data-testid='GrokDrawer']").forEach((div) => {
    let parentDiv = div.closest("div.css-175oi2r");
    if (parentDiv) {
      parentDiv.remove();
    }
  });
}

function removeLinksByHref(hrefs) {
  hrefs.forEach((href) => {
    document.querySelectorAll("a[href]").forEach((link) => {
      if (link.href.includes(href)) {
        link.remove();
      }
    });
  });
}

function removeNodeTreeFromTwoParentsUp(aria) {
  document.querySelectorAll(`[aria-label="${aria}"]`).forEach((element) => {
    let parent1 = element.closest("div");
    if (parent1) {
      let parent2 = parent1.parentElement;
      if (parent2) {
        parent2.remove();
      }
    }
  });
}

function removeSpamElements() {
  try {
    removeViewsElement();
    removeGrokElements();
    removeGrokActionsButton();
    removeGrokFab();
    const hrefsToRemove = [
      "/explore",
      "/i/grok",
      "/i/premium_sign_up",
      "/i/verified-orgs-signup",
      "/i/communitynotes",
      "/communities",
    ];
    removeLinksByHref(hrefsToRemove);
    document
      .querySelectorAll('a[aria-label*="View post analytics"]')
      .forEach((link) => {
        let parentDiv = link.closest("div");
        if (parentDiv) {
          parentDiv.remove();
        }
      });
    const x = document.querySelector('[data-testid="sidebarColumn"]');
    if (x !== null) x.remove();
    const y = document.querySelector('[data-testid="DMDrawer"]');
    if (y !== null) y.remove();
  } catch (e) {
    console.log(e);
  }
}

setInterval(removeSpamElements, 50);
