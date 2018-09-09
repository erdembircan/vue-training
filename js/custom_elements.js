class ContentLink extends HTMLElement {
  constructor() {
    super();
    const range = document.createRange();
    const shadow = this.attachShadow({ mode: 'closed' });
    const placeId = this.getAttribute('placeId');

    range.setStart(shadow, 0);

    const str = `<div>
     <style>
       a{
         text-decoration: none;
         font-size: 0.8rem;
         color: inherit;
       }
       
     </style>
     <a class='content_link' href="${this.getAttribute('href')}">${this.textContent}</a>
     </div>
    `;

    const parsed = range.createContextualFragment(str);

    parsed.firstChild.addEventListener('click', (e) => {
      e.preventDefault();
      helper.loadContent(e.target.href, placeId);
      helper.setLinkActive(e.target.parentNode.parentNode.host, 'active');

      helper.setLinkActive(
        helper.upToId(e.currentTarget, 'section').firstChild.nextElementSibling,
        'secActive',
      );

      helper.changeUrl(`?p=${this.getAttribute('href')}`);
    });

    shadow.appendChild(parsed.firstChild);
  }
}

class SectionWrapper extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'closed' });
    const range = document.createRange();
    range.setStart(shadow, 0);

    const str = `<div>
    <style>
      a{
        text-decoration: none;
        color: inherit;
      }
    </style>
    <a href="${this.getAttribute('href')}" class="section_wrapper">${this.textContent}</a>
    </div>
    `;

    const parsed = range.createContextualFragment(str);

    parsed.firstChild.addEventListener('click', (e) => {
      e.preventDefault();
      e.currentTarget.parentNode.host.classList.toggle('hide');
    });

    shadow.appendChild(parsed.firstChild);
  }
}

customElements.define('content-link', ContentLink);
customElements.define('section-wrapper', SectionWrapper);
