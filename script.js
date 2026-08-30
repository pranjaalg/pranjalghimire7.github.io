document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active classes across matching node sets
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add accent activation flags to clicked target
            button.classList.add('active');

            const targetFilter = button.getAttribute('data-filter');

            // Categorization DOM filter engineering
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (targetFilter === 'all' || cardCategory === targetFilter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});