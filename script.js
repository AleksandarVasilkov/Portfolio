document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('jsProjectsCheckbox').addEventListener('change', function() {
        let projectCards = document.querySelectorAll('.main-container .project-card');
        projectCards.forEach(card => {
            if (this.checked && !card.classList.contains('js-project')) {
                card.classList.add('hidden');
            } else {
                card.classList.remove('hidden');
            }
        });
    });
});









