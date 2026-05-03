const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

let currentCategory = "all"; // ✅ global state

function applyFilters() {
    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const cardCategory = card.getAttribute("data-name");

        const matchesSearch = text.includes(searchValue);
        const matchesCategory =
            currentCategory === "all" || cardCategory === currentCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// 🔍 Search typing
searchInput.addEventListener("keyup", applyFilters);

// 🎯 Category buttons
function filterCategory(category) {
    currentCategory = category;
    applyFilters();
}

const saveButtons = document.querySelectorAll(".save-btn");

// Load saved items
let savedItems = JSON.parse(localStorage.getItem("saved")) || [];

saveButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const title = card.querySelector("h2").textContent;

        if (savedItems.includes(title)) {
            savedItems = savedItems.filter(item => item !== title);
            btn.textContent = "⭐ Save";
        } else {
            savedItems.push(title);
            btn.textContent = "✅ Saved";
        }

        localStorage.setItem("saved", JSON.stringify(savedItems));
    });
});

document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("h2").textContent;
    const btn = card.querySelector(".save-btn");

    if (savedItems.includes(title)) {
        btn.textContent = "✅ Saved";
    }
});