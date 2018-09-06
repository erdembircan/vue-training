window.onload = function () {
  console.log('loaded');
  const content = document.querySelector('.content');

  const testFetch = fetch('/pages/test.html').then((resp) => {
    resp.text().then((val) => {
      content.innerHTML = val;
    });
  });
};
