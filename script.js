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

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', function() {
        var query = this.value.toLowerCase();
        var projectCards = document.querySelectorAll('.main-container .project-card');

        projectCards.forEach(function(card) {
            var title = card.querySelector('h2').textContent.toLowerCase();
            var description = card.querySelector('h3').textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});








