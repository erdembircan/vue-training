window.onload = function windowLoaded() {
  console.log('main window loaded');

  function fetchContentPages(url) {
    return fetch(url).then(resp => resp.text().then(val => val));
  }

  function loadContent(url, placeId) {
    const checkedId = placeId.startsWith('#') ? placeId : `#${placeId}`;
    const place = document.querySelector(checkedId);

    if (!place) {
      console.log('not a valid element to dump content has been found 😢');
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

  function setLinkActive(element, cssClass) {
    const currentActive = document.querySelector('.active');
    if (currentActive) currentActive.classList.remove(cssClass);

    element.classList.add(cssClass);
  }

  window.helper = { fetchContentPages, setLinkActive, loadContent };
};
