const searchContainer = document.querySelector('.search-container')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  searchContainer.classList.toggle('expanded')
})
