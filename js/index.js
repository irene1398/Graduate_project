/*scroll*/
const anchors = document.querySelectorAll('a.scroll-link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/*header-modal*/
let modal = document.querySelector('.modal');
let modalInner = document.querySelector('.modal__inner');
let openButton = document.querySelectorAll('.header__login');
let closeButton = document.querySelector('.modal__close');

openButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal__active');
    modalInner.classList.add('modal__active');
  })
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('modal__active');
  modalInner.classList.remove('modal__active');
});

document.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.classList.remove('modal__active');
    modalInner.classList.remove('modal__active');
  }
});

/*header-modal-mobile*/
let modals = document.querySelector('.modal');
let modalInners = document.querySelector('.modal__inner');
let openButtons = document.querySelectorAll('.hidden-header__btn');
let closeButtons = document.querySelector('.modal__close');

openButtons.forEach((buttons) => {
  buttons.addEventListener('click', (e) => {
    e.preventDefault();
    modals.classList.add('modal__active');
    modalInners.classList.add('modal__active');
  })
});

closeButtons.addEventListener('click', () => {
  modals.classList.remove('modal__active');
  modalInners.classList.remove('modal__active');
});

document.addEventListener('click', (e) => {
  if(e.target === modal) {
    modals.classList.remove('modal__active');
    modalInners.classList.remove('modal__active');
  }
});

/*header-search*/
let search = document.querySelector('.header__form');
let searchButton = document.querySelectorAll('.header__search');
let closeButtonForm = document.querySelector('.form__input');

searchButton.forEach((button) => {
  button.addEventListener('click', (el) => {
    el.preventDefault();
    search.classList.add('header__form-active');
  })
});

document.addEventListener('DOMContentLoaded', (el) => {
  document.getElementById('form-btn-search').addEventListener('click', (el) => {
    document.getElementById('form-search').classList.remove('header__form-active');
  });
});

document.getElementById('form-search').addEventListener('submit', (el) => {
  el.preventDefault()
});

/*header-form*/
new JustValidate('.modal__form', {
  rules: {
    login: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    password: {
      required: true,
      minLength: 8,
    },
  },
  messages: {
    login: {
      required: 'Введите логин',
      minLength: 'Логин должен содержать не менее 2 символов'
    },
    password: {
      required: 'Введите пароль',
      minLength: 'Пароль должен содержать не менее 8 символов'
    },
  },
  colorWrong: 'var(--red-color)'
});

/*header-burger*/
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let navBtn = menu.querySelector('.nav__btn');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',
  function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  });

  navBtn.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });

  menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })});


/*podcasts-more*/
const btnMore = document.querySelector('.podcasts__btn');
const podcastsItem = document.querySelectorAll('.podcasts__item');

btnMore.addEventListener('click', () => {
  podcastsItem.forEach(elem => { elem.classList.add('podcasts__item--visible') });
  btnMore.classList.add('podcasts__btn--hidden');
});


/*broadcasts select*/
const choice = document.querySelector('.select');
const choices = new Choices(choice, {
  allowHTML: true,
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom',
  });


/*guests-accordion*/
$( function() {
  $( "#accordion" ).accordion();
});

$( "#accordion" ).accordion({
  icons: false,
  collapsible: true,
  heightStyle: 'content',
});

$( function() {
  $( "#accordion-middle" ).accordion();
});

$( "#accordion-middle" ).accordion({
  icons: false,
  collapsible: true,
  heightStyle: 'content',
  active: false,
});


/*guests-card-tabs*/
document.querySelectorAll('.acc__link').forEach(function(accLink) {
  accLink.addEventListener('click', function(link) {
    const path = link.currentTarget.dataset.path;

document.querySelectorAll('.acc__link').forEach(function(lnk) {
  lnk.classList.remove('ui-widget-content-active')});
  link.currentTarget.classList.add('ui-widget-content-active');

document.querySelectorAll('.guests__card').forEach(function(accLink) {
  accLink.classList.remove('guests__card_active')});

document.querySelector(`[data-target="${path}"]`).classList.add('guests__card_active');
  });
});


/*about-swiper*/
let swiper1 = new Swiper('.people__swiper', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
  loop: true,
  loopedSlides: 6,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 15
    },
    1080: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  }
});

let swiper2 = new Swiper('.playlist__hidden', {
  slidesPerView: 'auto',
  loopedSlides: 8,
  loop: true,
  spaceBetween: 15,
});

/*about-form*/
new JustValidate('.about__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    mail: {
      required: true,
      email: true
    },
    checkbox: {
      required: true
    }
  },
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Имя должно содержать не менее 2 букв'
    },
    mail: {
      required: 'Введите e-mail',
      email: 'e-mail введен неверно'
    },
    checkbox: {
      required: 'Согласие на обработку данных обязательно'
    }
  },
  colorWrong: 'var(--red-color)'
});
