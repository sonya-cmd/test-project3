document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".header__nav a");

    links.forEach((link) => {
        link.addEventListener("click", function () {
            links.forEach((el) => el.classList.remove("active"));
            this.classList.add("active");
        });
    });
});



function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie('cookiecook'),
  cookiewin = document.getElementsByClassName('cookie_notice')[0];
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != 'no') {
  // показываем
  cookiewin.style.display = 'block';
  // закрываем по клику
  document.getElementById('cookie_close').addEventListener('click', function () {
    cookiewin.style.display = 'none';
    // записываем cookie на 1 день, с которой мы не показываем окно
    let date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = 'cookiecook=no; path=/; expires=' + date.toUTCString();
  });
}
