document.querySelector(".share").addEventListener("click", () => {
  document.querySelector(".share_btns").classList.toggle("hide");
  if (document.querySelector(".share_btns").classList.contains("hide")) {
    document.querySelector(".svg").style.color = "#6E8098";
  } else {
    document.querySelector(".svg").style.color = "white";
  }
});
 