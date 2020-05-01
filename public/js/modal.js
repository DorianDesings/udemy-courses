const button = document.getElementById('button')
const modal = document.getElementById('modal')

button.addEventListener('click', () => modal.classList.add('modal--show'))
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')
})