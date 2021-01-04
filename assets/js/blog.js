var selectedCategory = 'All';
var borderLeft = '4px solid black';

function selectCategory(category) {
  selectedCategory = category;
  
  let postLinks = document.getElementsByClassName('post-link');
  for (let link of postLinks) {
    if (selectedCategory === 'All' || (link.getAttribute('category') === selectedCategory)) {
      link.style.display = '';
    } else {
      link.style.display = 'none';
    }
  }
}

function handleCategoryItemClick(ev) {
  let categoryItems = document.getElementsByClassName('category-item');
  for (let item of categoryItems) {
    item.style.borderLeft = '';
  }
  ev.currentTarget.style.borderLeft = borderLeft;
  selectCategory(ev.currentTarget.getAttribute('category'));
}

function handleCategoryChange() {
  let categorySelect = document.getElementById('category-select');
  selectCategory(categorySelect.value);
}

window.onload = function() {
  // Large viewport
  let categoryItems = document.getElementsByClassName('category-item');
  for (let item of categoryItems) {
    if (item.getAttribute('category') === selectedCategory) {
      item.style.borderLeft = borderLeft;      
      selectCategory(item.getAttribute('category'));
    }
    item.addEventListener('click', handleCategoryItemClick);
  }

  // Small viewport
  let categorySelect = document.getElementById('category-select');
  categorySelect.addEventListener('change', handleCategoryChange);
}