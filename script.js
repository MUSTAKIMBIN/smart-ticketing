function mySeats(elementId) {
  setBackgroundColorById(elementId);
  //   --------
  const parchesSeatsElement = document.getElementById("parches-seats");
  const parchesSeatsText = parchesSeatsElement.innerText;
  const parchesSeats = parseInt(parchesSeatsText);
  const seats = parchesSeats + 1;
  parchesSeatsElement.innerText = seats;

  //   ---------------====
  const totalSeatsElement = document.getElementById("total-seats");
  const totalSeatsText = totalSeatsElement.innerText;
  const totalSeats = parseInt(totalSeatsText);
  const abvibaleSeats = totalSeats - 1;
  totalSeatsElement.innerText = abvibaleSeats;

  // ==========
  let xyz = document.getElementById(elementId);
  let ex = xyz.innerText;
  const mainTicket = document.getElementById("main-ticket-ditels");
  const div = document.createElement("div");
  div.classList.add('flex', 'justify-between')
  const p1 = document.createElement("p");
  p1.textContent = ex;
  mainTicket.appendChild(p1);
  const p2 = document.createElement("p");
  p2.textContent = "Economoy";
  const p3 = document.createElement("p");
  p3.textContent = "550";
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  mainTicket.appendChild(div);

// =========
incriseMoneyById("grand-total-price")
incriseMoneyById("total-price")
// ===
 
}
// =====
function applyBtn(){
  const inputFildElement = document.getElementById("chack-cupon-input")
  const inputFildText = inputFildElement.value
  if(inputFildText === "NEW15"){
    const grandTotalPriceElement = document.getElementById("grand-total-price")
    const grandTotalPriceElementText = grandTotalPriceElement.innerText
    const grandTotalPrice = parseInt(grandTotalPriceElementText)
    const grandTotalDiscountPrice = grandTotalPrice *0.15
    const grandTotalFinalPrice = grandTotalPrice - grandTotalDiscountPrice
    grandTotalPriceElement.innerText = grandTotalFinalPrice
    // ====

    // ====
    document.getElementById("input-label").classList.add("hidden")
  }else if(inputFildText === "Couple 20"){
    const grandTotalPriceElement = document.getElementById("grand-total-price")
    const grandTotalPriceElementText = grandTotalPriceElement.innerText
    const grandTotalPrice = parseInt(grandTotalPriceElementText)
    const grandTotalDiscountPrice = grandTotalPrice *0.2
    const grandTotalFinalPrice = grandTotalPrice - grandTotalDiscountPrice
    grandTotalPriceElement.innerText = grandTotalFinalPrice
    // ====
    document.getElementById("input-label").classList.add("hidden")
  }
 }
// ------ pop up ----------
function popUp() {
  heideElementById("header");
  heideElementById("offer");
  heideElementById("footer");
  heideElementById("tecket-section");
  const showElement = document.getElementById("success");
  showElement.classList.remove("hidden");
}

function heideElementById(element) {
  const heideElemtnt = document.getElementById(element);
  heideElemtnt.classList.add("hidden");
}
//  first 8 seats only funcional