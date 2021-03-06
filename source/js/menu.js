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

// var addSubmenuClickListener = function (subMenuItem, subList) {
//   subMenuItem.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     subList.classList.toggle('d-block');
//   })
// };

// var addSubmenuClickListener = function (subMenuItem, subList) {
//   subMenuItem.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     if (!subList.classList.contains('d-none')) {
//       subList.classList.add('d-none');
//       subList.classList.remove('d-block')
//     } else {
//       subList.classList.remove('d-none');
//       subList.classList.add('d-block');
//     }
//   })
// };
//
// for (var q = 0; q < submenuItems.length; q++) {
//   var submenuItem = submenuItems[q];
//   var subList = subLists[q];
//   addSubmenuClickListener(submenuItem, subList)
// }


// Open the full screen search box
function openSearch(evt) {
  evt.preventDefault();
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

