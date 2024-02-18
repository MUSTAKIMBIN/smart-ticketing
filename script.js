// ------ pop up ----------
function popUp() {
  heideElementById("header");
  heideElementById("offer");
  heideElementById("tecket-section");
  const showElement = document.getElementById("success");
  showElement.classList.remove("hidden");
}
function heideElementById(element) {
  const heideElemtnt = document.getElementById(element);
  heideElemtnt.classList.add("hidden");
}

