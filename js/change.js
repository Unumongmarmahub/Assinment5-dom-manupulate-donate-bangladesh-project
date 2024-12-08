const historyButton = document.getElementById("btn-history");
const donateButton = document.getElementById("btn-donate");
historyButton.addEventListener("click", function () {
  historyButton.classList.add(
    "btn",
    "btn-outline",
    "text-2xl",
    "font-semibold",
    "bg-[#B4F461]"
  );

  donateButton.classList.remove(
    "btn",
    "btn-outline",
    "text-2xl",
    "font-semibold",
    "bg-[#B4F461]"
  );
});

donateButton.addEventListener("click", function () {
  donateButton.classList.add(
    "btn",
    "btn-outline",
    "text-2xl",
    "font-semibold",
    "bg-[#B4F461]"
  );
  historyButton.classList.remove(
    "btn",
    "btn-outline",
    "text-2xl",
    "font-semibold",
    "bg-[#B4F461]"
  );
});
