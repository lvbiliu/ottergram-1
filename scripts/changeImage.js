function getImagesArr() {
  'use strict';
  var imagesArr = [];
  var linksArr = [];
  var imagesNode = document.querySelectorAll('a[data-image-url]');
  var tempArr = [].slice.call(imagesNode);

  for (let i = 0; i < tempArr.length; i++) {
    imagesArr[i] = tempArr[i].getAttribute('data-image-url');
    linksArr[i] = tempArr[i];
  };

  var itemImage = imagesArr[Math.floor(Math.random()*imagesArr.length)];
  var itemLink = linksArr[Math.floor(Math.random()*linksArr.length)];

  itemLink.setAttribute('data-image-url', itemImage);
};