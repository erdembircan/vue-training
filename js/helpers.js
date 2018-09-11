(function helpers(context, factory) {
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.helper = factory.apply(context);
  } else {
    context.helper = factory.apply(context);
  }
}(this, () => {
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
    const currentActive = document.querySelector(`.${cssClass}`);
    if (currentActive) currentActive.classList.remove(cssClass);

    element.classList.add(cssClass);
  }

  function upToId(element, id) {
    let currentId = element.id;
    let currentElement = element;
    while (currentId !== id) {
      if (currentElement.nodeType != 11) {
        currentElement = currentElement.parentNode;
      } else {
        currentElement = currentElement.host;
      }
      currentId = currentElement.id;
    }
    return currentElement;
  }

  function changeUrl(url) {
    window.history.pushState({}, '', url);
  }

  function debounce(func, delay) {
    let timeout;
    return function inner(...args) {
      const context = this;

      const later = function deeper() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, delay);
    };
  }

  function parseNav(url) {
    return fetchContentPages(url).then((resp) => {
      const dataObj = JSON.parse(resp);
      return dataObj;
    });
  }

  return {
    setLinkActive,
    fetchContentPages,
    loadContent,
    upToId,
    changeUrl,
    debounce,
    parseNav,
  };
}));
