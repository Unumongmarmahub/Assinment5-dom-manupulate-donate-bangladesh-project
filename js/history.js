// button history
document.getElementById("btn-history").addEventListener("click", function () {
  document.getElementById("part-of-donation").classList.add("hidden");
  document.getElementById("part-of-history").classList.remove("hidden");
});

const inputNoakhali = parseFloat(
  document.getElementById("input-field-noakhali").value
);

document
  .getElementById("donate-btn-noakhali")
  .addEventListener("click", function () {
    const card = document.createElement("div");

    card.innerHTML = `
      <div class="bg-white p-5 rounded shadow-md"> 
        <h1 class="text-2xl font-bold mb-3">${inputNoakhali} Taka is Donated for Flood-2024 at Noakhali, Bangladesh</h1> 
      </div>
    `;

    const partOfHistory = document.getElementById("part-of-history");
    partOfHistory.appendChild(card);
  });

//   <p class="text-gray-700">This is a dynamically created card using JavaScript with template strings.</p>
