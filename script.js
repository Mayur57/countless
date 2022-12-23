const removeTags = () => {
  var e1 = document.querySelectorAll("div.css-1dbjc4n.r-18u37iz.r-1h0z5md");
  var e2 = document.querySelectorAll("div.css-1dbjc4n.r-1mf7evn");
  e1 &&
    e1.forEach((e) => {
      if (e.childNodes[0].nodeName === "A") {
        e.parentElement.removeChild(e);
      }
    });
  e2 &&
    e2.forEach((e) => {
      if (
        e?.childNodes[0]?.childNodes[0]?.nodeName === "A" &&
        e?.childNodes[0]?.childNodes[0]?.href.toString().includes("/analytics")
      ) {
        e?.childNodes[0]?.parentElement.removeChild(e?.childNodes[0]);
      }
    });
};

setInterval(removeTags, 3000);
