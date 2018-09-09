window.onload = function load() {
  const params = new URL(window.location).searchParams;

  const page = params.get('p');

  if (!page) return;

  const target = document.querySelector(`content-link[href="${page}"]`);

  if (!target) {
    console.log('%c🤔 check query and try again', 'background: #ff0000; color:#fff');
    return;
  }
  helper.loadContent(target.getAttribute('href'), target.getAttribute('placeid'));
  helper.setLinkActive(target, 'active');

  const wrapper = helper.upToId(target, 'section').firstChild.nextElementSibling;
  if (wrapper.classList.contains('hide')) {
    wrapper.classList.remove('hide');
  }

  wrapper.classList.add('secActive');
};
