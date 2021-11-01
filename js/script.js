// document.querySelectorAll(".select").forEach((select) => {
//   let selectCurrent = select.querySelector(".select__current"),
//     selectList = select.querySelector("select__list"),
//     selectInput = select.querySelector(".select__input"),
//     selectItem = select.querySelector(".select__item");

//   selectCurrent,
//     addEventListener("click", () => {
//       selectList.classList.toggle("select__list--show");
//     });

//   selectItem.forEach((item) => {
//     item.addEventListener("click", () => {
//       let itemValue = item.getAttribute("data-value");
//       let itemText = item.textContent;
//       selectInput.value = itemValue;
//       selectCurrent.textContent = itemText;
//       selectListHide();
//     });
//   });

//   let selectListHide = () => {
//     selectList.classList.remove("select__list--show");
//   };
//   document.addEventListener("mouseup", (e) => {
//     if (!select.contains(e.target)) selectListHide();
//   });
// });
document.querySelectorAll(".select").forEach((select) => {
  //Выбриаем все выпадающие списки на странице

  let selectCurrent = select.querySelector(".select__current"),
    selectList = select.querySelector(".select__list"),
    selectInput = select.querySelector(".select__input"),
    selectItem = select.querySelectorAll(".select__item");

  //по клику добавляем/удалям класс
  selectCurrent.addEventListener("click", () => {
    selectList.classList.toggle("select__list--show");
  });

  //обходим элементы списка
  selectItem.forEach((item) => {
    //обрабатываем событие клик по элементу
    item.addEventListener("click", () => {
      //получаем значение из data-атрибута
      let itemValue = item.getAttribute("data-value");

      //получаем содержание элемента (текст)
      let itemText = item.textContent;

      //присваиваем инпуту ранее полученное значение из data-атрибута
      selectInput.value = itemValue;

      //присваиваем текущее значение (текст)
      selectCurrent.textContent = itemText;

      //скрываем выпадающий список
      selectListHide();
    });
  });

  // функция закрытия выпадающего списка
  let selectListHide = () => {
    selectList.classList.remove("select__list--show");
  };
  //Закрываем выпадающий сисок, если клик был вне области
  document.addEventListener("mouseup", (e) => {
    if (!select.contains(e.target)) selectListHide();
  });
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});