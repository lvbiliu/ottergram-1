var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var ESC_KEY = 27;

//Устанавливаем URL главного изображения и его title
function setDetails(imageUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
};

//Получаем ссылку на изображение
function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
};

//Получаем title изображения
function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
};

//Устанавливаем значения для главной картинки из миниатюры
function setDetailsFromThumb(thumbnail){
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
};

//Добавим событие клика на миниатюру
function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
};

//Получаем массив миниатюр
function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
};

function hideDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  'use strict';
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

//Логика работы скрипта
function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
};

initializeEvents();