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

const savedList = document.getElementById("savedList");

function displaySavedItems() {
    savedList.innerHTML = "";

    if (savedItems.length === 0) {
        savedList.innerHTML = "<p>No saved resources yet.</p>";
        return;
    }

    savedItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("saved-item");
        div.textContent = item;
        savedList.appendChild(div);
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
            btn.classList.remove("saved");
        } else {
            savedItems.push(title);
            btn.textContent = "✅ Saved";
            btn.classList.add("saved");
        }

        localStorage.setItem("saved", JSON.stringify(savedItems));
    });
});

localStorage.setItem("saved", JSON.stringify(savedItems));
displaySavedItems();

document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("h2").textContent;
    const btn = card.querySelector(".save-btn");

    if (savedItems.includes(title)) {
        btn.textContent = "✅ Saved";
        btn.classList.add("saved");
    }
});

displaySavedItems();