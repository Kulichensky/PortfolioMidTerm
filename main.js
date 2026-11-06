// 1. Мобильное меню (бургер)
const burgerBtn = document.getElementById('burger-btn');
const burgerIcon = document.getElementById('burger-icon');
const navMenu = document.getElementById('nav-menu');

burgerBtn.onclick = () => {
  navMenu.classList.toggle('open');
  burgerIcon.src = navMenu.classList.contains('open') ? 'media/close.png' : 'media/burger.png';
};

document.querySelectorAll('.nav__link').forEach(link => {
  link.onclick = () => {
    navMenu.classList.remove('open');
    burgerIcon.src = 'media/burger.png';
  };
});

// 2. Переключение темы (светлая / тёмная)
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeIcon.src = 'media/sun.png';
}

themeBtn.onclick = () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  themeIcon.src = isDark ? 'media/sun.png' : 'media/moon.png';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// 3. Модальное окно Resume
const modal = document.getElementById('resume-modal');
const openModal = () => modal.classList.add('open');
const closeModal = () => modal.classList.remove('open');

document.getElementById('resume-open-btn').onclick = openModal;
document.getElementById('resume-close-btn').onclick = closeModal;
document.getElementById('modal-overlay').onclick = closeModal;

// Закрытие модального окна по клавише Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});