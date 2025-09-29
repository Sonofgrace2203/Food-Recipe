
//This is the menu-nav script
var menuIcon = document.getElementById("mobile-menu");
var asideNav = document.getElementById("aside-nav");

function popUp() {
    asideNav.classList.remove("d-hide");
}

    menuIcon.addEventListener("click", popUp);

    var cancelIcon = document.getElementById("cancel-icon");

function hideNav() {
    asideNav.classList.add("d-hide");
}
            
    cancelIcon.addEventListener("click", hideNav);









// recipe search here       // recipe search here       // recipe search here

            (function () {
            const searchInput = document.getElementById('search-box');
            const cards = Array.from(document.querySelectorAll('.trendy-recipe'));
            const noResults = document.getElementById('noResults');

            // Helper: normalize text for comparison
            function norm(text) {
                return (text || '').trim().toLowerCase();
            }

            function filterRecipes() {
                const q = norm(searchInput.value);
                let visibleCount = 0;

                cards.forEach(card => {
                const titleEl = card.querySelector('.recipe-title');
                const descEl = card.querySelector('.recipe-desc');
                const title = norm(titleEl && titleEl.textContent);
                const desc = norm(descEl && descEl.textContent);

                // match either title OR description
                const isMatch = q === '' || title.includes(q) || desc.includes(q);

                if (isMatch) {
                    // restore default display (so grid/flex layout stays intact)
                    card.style.display = '';
                    visibleCount++;
                } else {
                    // hide non-matching
                    card.style.display = 'none';
                }
                });

                // show or hide the no-results message
                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            }

            // Listen to input (updates as the user types)
            searchInput.addEventListener('input', filterRecipes);

            // Optional: support Enter to focus first visible card (small UX boost)
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                e.preventDefault();
                const firstVisible = cards.find(c => c.style.display !== 'none');
                if (firstVisible) firstVisible.querySelector('h6').focus();
                }
            });

            // Initial run (in case input has a prefilled value)
            filterRecipes();
            })();