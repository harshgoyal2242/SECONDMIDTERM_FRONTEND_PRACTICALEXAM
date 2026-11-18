document.getElementById("calculateBtn").addEventListener("click", function () {
  let billInput = document.getElementById("billAmount").value;
  let tipInput = document.getElementById("tipPercent").value;
  let peopleInput = document.getElementById("peopleCount").value;

  let bill = parseFloat(billInput);
  let tipPercent = parseFloat(tipInput);
  let people = parseInt(peopleInput);

  let error = document.getElementById("error");

  if (billInput === "" || isNaN(bill) || bill <= 0) {
    error.textContent = "Please enter a valid bill amount greater than 0.";
    return;
  }

  if (isNaN(people) || people < 1) {
    error.textContent = "Please enter at least 1 person.";
    return;
  }

  error.textContent = "";

  let tipAmount = (bill * tipPercent) / 100;
  let totalBill = bill + tipAmount;
  let perPerson = totalBill / people;

  tipAmount = tipAmount.toFixed(2);
  totalBill = totalBill.toFixed(2);
  perPerson = perPerson.toFixed(2);

  document.getElementById("tipAmount").textContent = tipAmount;
  document.getElementById("totalBill").textContent = totalBill;
  document.getElementById("perPerson").textContent = perPerson;
});
