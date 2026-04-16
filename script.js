const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

// 🔍 SEARCH FUNCTION
searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// 🎯 CATEGORY FILTER (MUST be outside!)
function filterCategory(category) {
    cards.forEach(card => {
        const cardCategory = card.getAttribute("data-name");

        if (category === "all" || cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}