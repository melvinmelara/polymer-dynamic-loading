window.addEventListener('WebComponentsReady', function () {
  Polymer.Base.importHref('elements/custom-element/custom-element.html', function () {
    var content = document.querySelector('#content');
    var element = document.createElement('custom-element');
    content.appendChild(element);

    // Also doesn't work:
    // content.innerHTML = '<custom-element></custom-element>';
  });
});
