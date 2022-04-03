const shareEl = document.querySelector(".share-icon-box");

const socialBoxEl = document.querySelector(".socia-media");

shareEl.addEventListener("click", function () {
  shareEl.classList.toggle("active");

  if (shareEl.classList.contains("active")) {
    socialBoxEl.style.opacity = "1";
  } else socialBoxEl.style.opacity = "0";
});
