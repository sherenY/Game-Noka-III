let show = false;

function showMenu() {
  let links = document.querySelector("#verticalLinks");
  if (show == false) {
    links.style.display = "flex";
    show = true;
  } else {
    links.style.display = "none";
    show = false;
  }
}
