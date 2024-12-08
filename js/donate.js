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

    // input validation

    if (isNaN(inputNoakhali) || inputNoakhali <= 0) {
      alert("Invalid Donation Amount...!");
      document.getElementById("input-field-noakhali").value = "";
      return;
    } else {
      alert("Successful...! Thanks for your donation.");
    }

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

    // input validation

    if (isNaN(inputFeni) || inputFeni <= 0) {
      alert("Invalid Donation Amount...!");
      document.getElementById("input-field-feni").value = "";
      return;
    } else {
      alert("Successful...! Thanks for your donation.");
    }

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

    // input validation

    if (isNaN(inputQuota) || inputQuota <= 0) {
      alert("Invalid Donation Amount...!");
      document.getElementById("input-field-quota").value = "";
      return;
    } else {
      alert("Successful...! Thanks for your donation.");
    }

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

// button donation
document.getElementById("btn-donate").addEventListener("click", function () {
  document.getElementById("part-of-donation").classList.remove("hidden");
  document.getElementById("part-of-history").classList.add("hidden");
  
});
