window.onload = function load() {
  const params = new URL(window.location).searchParams;

  const page = params.get('p');

  helper.parseNav('/data/data.json').then((data) => {
    renderNav(data, 'nav_root', 'content_dump');
  });

  function renderNav({ nav }, navRootId, placeId) {
    const htmlArray = [];

    nav.map((val) => {
      const temp = `
        <br>
        <h3>${val.main}</h3>
        ${val.sections
    .map(
      section => `
        <li id="section">
      <section-wrapper href="#" class="section_wrapper hide">${section.section}</section-wrapper>
          <ul>
            ${section.sub
    .map((sub) => {
      const href = `${sub
        .toLowerCase()
        .split(' ')
        .join('_')}`;
      return `<li><content-link class="content_link" href="/pages/${href}.html" placeId=${placeId}>${sub}</content-link></li>`;
    })
    .join('')}</ul>`,
    )
    .join('')}</li>`;
      htmlArray.push(temp);
    });

    const navRoot = document.querySelector(`#${navRootId}`);

    const range = document.createRange();
    range.setStart(navRoot, 0);
    const ele = range.createContextualFragment(htmlArray.join(''));
    navRoot.appendChild(ele);

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
  }
};
