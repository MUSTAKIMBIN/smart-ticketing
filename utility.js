function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-lime-400");
}
function incriseMoneyById (id){
  const mainElement = document.getElementById(id)
  const element = mainElement.innerText
  const money = parseInt(element)
  const finalMoney = money + 550
  mainElement.innerText = finalMoney
}