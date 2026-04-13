const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    function filterCategory(category) {
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const cardCategory = card.getAttribute("data-name");

            if (category === "all" || cardCategory === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    cards.forEach(card => {
        const category = card.getAttribute("data-name");

        if (category.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});