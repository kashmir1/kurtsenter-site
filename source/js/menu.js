var navMain = document.querySelector('.nav-list');
var navToggle = document.querySelector('.open-menu');

navToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!navMain.classList.contains('d-none')) {

    navMain.classList.add('d-none');
    navMain.classList.remove('d-block');
    navToggle.classList.remove('close-icon');

  } else {
    navMain.classList.remove('d-none');
    navMain.classList.add('d-block');
    navToggle.classList.add('close-icon');
  }
});

var submenuItems = document.querySelectorAll('.nav-item-drop');
var subLists = document.querySelectorAll('.subnav');

var addSubmenuClickListener = function (subMenuItem, subList) {
  subMenuItem.addEventListener('click', function (evt) {
    evt.preventDefault();
    subList.classList.toggle('d-block');
    // if (!subList.classList.contains('d-block')) {
    //   subList.classList.remove('d-block')
    // } else {
    //
    // }
    // subList.classList.add('d-none');
    // if (!subList.classList.contains('d-none')) {
    //   subList.classList.add('d-none');
    //   subList.classList.remove('d-block')
    // } else {
    //   subList.classList.remove('d-none');
    //   subList.classList.add('d-block');
    // }
  })
};

for (var q = 0; q < submenuItems.length; q++) {
  var submenuItem = submenuItems[q];
  var subList = subLists[q];
  addSubmenuClickListener(submenuItem, subList)
}
