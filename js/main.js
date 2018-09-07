window.onload = function windowLoaded() {
  console.log('main window loaded');

  function fetchContentPages(url) {
    return fetch(url).then(resp => resp.text().then(val => val));
  }

  function loadContent(url, placeId) {
    const checkedId = placeId.startsWith('#') ? placeId : `#${placeId}`;
    const place = document.querySelector(checkedId);

    if (!place) {
      console.log('not a valid element to dump content has been found :(');
      return;
    }

    fetchContentPages(url).then((resp) => {
      place.innerHTML = resp;

      const scripts = place.getElementsByTagName('script');

      Array.from(scripts).map((script) => {
        const source = script.src;
        fetchContentPages(source).then((resp) => {
          eval(resp);
        });
      });
    });
  }

  function setLinkActive(element) {
    const currentActive = document.querySelector('.active');
    if (currentActive) currentActive.classList.remove('active');

    element.classList.add('active');
  }

  const contentLinks = document.querySelectorAll('.content_link');

  Array.from(contentLinks).map((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      loadContent(e.target.href, 'content_dump');
      setLinkActive(e.target);
    });
  });
};
