document.getElementById('year').textContent = new Date().getFullYear();

for (const link of document.querySelectorAll('.nav-link')) {
  link.addEventListener('click', () => {
    document.querySelector('.navbar-collapse')?.classList.remove('show');
  });
}
