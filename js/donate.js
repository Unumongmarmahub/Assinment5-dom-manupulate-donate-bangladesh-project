// donate for noakhali
document
  .getElementById("donate-btn-noakhali")
  .addEventListener("click", function () {
    const inputNoakhali = parseFloat(
      document.getElementById("input-field-noakhali").value
    );

    // input validation 
    
    if (isNaN(inputNoakhali) || inputNoakhali < 0) {
      alert("Invalid Donation Amount");
    }

    const balanceNoakhali = parseFloat(
      document.getElementById("initial-balance-noakhali").innerText
    );
    const totalBalanceNoakhali = balanceNoakhali + inputNoakhali;

    document.getElementById("initial-balance-noakhali").innerText =
      totalBalanceNoakhali;
    document.getElementById("input-field-noakhali").value = "";

    const myBalance = parseFloat(
      document.getElementById("myBalance").innerText
    );
    const myRemainingBalance = myBalance - inputNoakhali;

    document.getElementById("myBalance").innerText = myRemainingBalance;
  });

// donate for feni
document
  .getElementById("donate-btn-feni")
  .addEventListener("click", function () {
    const inputFeni = parseFloat(
      document.getElementById("input-field-feni").value
    );
    const balanceFeni = parseFloat(
      document.getElementById("initial-balance-feni").innerText
    );

    const totalBalanceFeni = balanceFeni + inputFeni;

    document.getElementById("initial-balance-feni").innerText =
      totalBalanceFeni;

    document.getElementById("input-field-feni").value = "";

    const myBalance = parseFloat(
      document.getElementById("myBalance").innerText
    );

    const myRemainingBalance = myBalance - inputFeni;

    document.getElementById("myBalance").innerText = myRemainingBalance;
  });

// donate for quota movement
document
  .getElementById("donate-btn-quota")
  .addEventListener("click", function () {
    const inputQuota = parseFloat(
      document.getElementById("input-field-quota").value
    );
    const balanceQuota = parseFloat(
      document.getElementById("initial-balance-quota").innerText
    );

    const totalBalanceQuota = balanceQuota + inputQuota;

    document.getElementById("initial-balance-quota").innerText =
      totalBalanceQuota;

    document.getElementById("input-field-quota").value = "";

    const myBalance = parseFloat(
      document.getElementById("myBalance").innerText
    );

    const myRemainingBalance = myBalance - inputQuota;

    document.getElementById("myBalance").innerText = myRemainingBalance;
  });
