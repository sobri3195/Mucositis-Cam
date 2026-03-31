const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.card');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    const target = item.dataset.target;

    navItems.forEach((btn) => btn.classList.remove('active'));
    sections.forEach((section) => section.classList.remove('active'));

    item.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});
