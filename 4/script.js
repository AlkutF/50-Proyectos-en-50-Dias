document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', () => {
        if (searchInput.classList.contains('hide')) {
            searchInput.classList.remove('hide');
            searchInput.classList.add('show');
        } else {
            searchInput.classList.remove('show');
            searchInput.classList.add('hide');
        }
    });
});
