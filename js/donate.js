// donate for noakhali
document
  .getElementById("donate-btn-noakhali")
  .addEventListener("click", function () {
    const inputNoakhali = parseFloat(
      document.getElementById("input-field-noakhali").value
    );
    const balanceNoakhali = parseFloat(
      document.getElementById("initial-balance-noakhali").innerText
    );
    const totalBalanceNoakhali = balanceNoakhali + inputNoakhali;
    document.getElementById("initial-balance-noakhali").innerText =
      totalBalanceNoakhali;
    document.getElementById("input-field-noakhali").value = "";

    const myBalance = parseFloat(document.getElementById("myBalance").innerText);
    const myRemainingBalance = myBalance - inputNoakhali;
    
    document.getElementById("myBalance").innerText = myRemainingBalance;
  });
