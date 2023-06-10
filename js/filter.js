(() => {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-card]');
  function filter(category, items) {
    items.forEach(item => {
      const categoryCard = item.dataset.card.toLowerCase();
      const isItemFiltered = categoryCard !== category;
      const isShowAll = category.toLowerCase() === 'all';
      if (isItemFiltered && !isShowAll) {
        item.style.display = 'none';
      } else {
        item.style.removeProperty('display');
      }
    });
  }
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      const currentCategory = button.dataset.filter.toLowerCase();
      const target = e.target;
      filter(currentCategory, cards);
      buttons.forEach(button => button.classList.remove('is-active'));
      target.classList.add('is-active');
    });
  });
})();
