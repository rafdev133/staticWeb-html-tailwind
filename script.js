document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    let currentIndex = 0;
    let cardsToShow = window.innerWidth >= 1024 ? 2 : 1; // Adjust based on screen size

    function showCards(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('hidden', !(i >= index && i < index + cardsToShow));
        });
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - cardsToShow;
        showCards(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < cards.length - cardsToShow) ? currentIndex + 1 : 0;
        showCards(currentIndex);
    });

    // Adjust number of cards to show on resize
    window.addEventListener('resize', () => {
        cardsToShow = window.innerWidth >= 1024 ? 2 : 1;
        showCards(currentIndex);
    });

    showCards(currentIndex);
});
