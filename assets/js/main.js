let navItems = document.getElementsByClassName('nav-item'),
  home = document.getElementById('home').offsetTop,
  features = document.getElementById('features').offsetTop,
  howitwork = document.getElementById('howitwork').offsetTop,
  FAQs = document.getElementById('FAQs').offsetTop,
  aboutus = document.getElementById('aboutus').offsetTop,
  navbarToggler = document.querySelector('#navbarToggler'),
  nav_button = document.querySelector('.navbar-toggler'),
  nav_icon = document.querySelector('.animated-icon3'),
  first_time = !1;
nav_button.addEventListener('click', () => {
  setTimeout(() => {
    nav_icon.classList.toggle('open');
  }, 200);
}),
  [].forEach.call(navItems, function (e) {
    e.addEventListener('click', () => {
      nav_icon.classList.remove('open'), navbarToggler.classList.remove('show');
      let t = document.getElementsByClassName('nav-active nav-item');
      [].forEach.call(t, function (e) {
        e.classList.remove('nav-active');
      }),
        e.classList.add('nav-active');
    });
  });
let name_brand = document.getElementById('name_brand'),
  navbar = document.getElementById('navbar'),
  currentheight = window.pageYOffset,
  navheight = navbar.offsetHeight,
  checkActiveTab = !1,
  scroll_top_icon = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  let e = window.pageYOffset;
  if (
    (0 === e &&
      (scroll_top_icon.classList.remove('animate__rotateIn'),
      scroll_top_icon.classList.add('animate__rotateOut')),
    e > 0 &&
      (name_brand.classList.add('animate__fadeOutLeft'),
      scroll_top_icon.classList.remove('animate__rotateOut'),
      scroll_top_icon.classList.add('animate__rotateIn'),
      setTimeout(() => {
        scroll_top_icon.classList.remove('d-none');
      }, 100)),
    e < currentheight &&
      (name_brand.classList.remove('animate__fadeOutLeft'),
      name_brand.classList.add('animate__fadeInLeft')),
    (currentheight = e) >= home && currentheight < features)
  ) {
    document
      .getElementsByClassName('nav-active nav-item')[0]
      .classList.remove('nav-active'),
      document
        .querySelector("a[href^='#home']")
        .parentNode.classList.add('nav-active');
  }
  if (currentheight >= features && currentheight < howitwork) {
    document
      .getElementsByClassName('nav-active nav-item')[0]
      .classList.remove('nav-active'),
      document
        .querySelector("a[href^='#features']")
        .parentNode.classList.add('nav-active');
  }
  if (currentheight >= howitwork && currentheight < FAQs) {
    document
      .getElementsByClassName('nav-active nav-item')[0]
      .classList.remove('nav-active'),
      document
        .querySelector("a[href^='#howitwork']")
        .parentNode.classList.add('nav-active');
  }
  if (currentheight >= FAQs && currentheight < aboutus) {
    document
      .getElementsByClassName('nav-active nav-item')[0]
      .classList.remove('nav-active'),
      document
        .querySelector("a[href^='#FAQs']")
        .parentNode.classList.add('nav-active');
  }
  if (currentheight >= aboutus) {
    document
      .getElementsByClassName('nav-active nav-item')[0]
      .classList.remove('nav-active'),
      document
        .querySelector("a[href^='#aboutus']")
        .parentNode.classList.add('nav-active');
  }
  if (currentheight >= features && 0 == checkActiveTab) {
    let e = document.querySelectorAll('.about__timeline__item'),
      t = document.getElementById('body__about__image'),
      a = 1;
    e[0].classList.add('tab');
    let s = setInterval(() => {
      e[0].classList.remove('orange'),
        e[1].classList.remove('orange'),
        e[2].classList.remove('orange'),
        setTimeout(() => {
          e[a].classList.add('orange'),
            2 !== a && e[a].classList.add('tab'),
            3 == ++a && clearInterval(s);
        }, 500),
        t.classList.add('animate__fadeOutRight'),
        t.classList.remove('animate__fadeInRight'),
        t.setAttribute('src', `/assets/img/section1/feature1${a + 1}.png`),
        setTimeout(() => {
          t.classList.add('animate__fadeInRight'),
            t.classList.remove('animate__fadeOutRight');
        }, 500);
    }, 3500);
    checkActiveTab = !0;
  }
});
let feature_phone_img = document.querySelector('.feature_bubble'),
  feature_box = document.querySelector('.feature_box'),
  feature_bodys = document.getElementsByClassName('feature_body'),
  line = document.getElementById('feature_line');
$(function () {
  $('.feature_bubble').on('afterChange', function (e, t, a) {
    !(function (e) {
      line.classList.remove('line_animation');
      setTimeout(() => {
        line.classList.add('line_animation');
      }, 100);
      [].forEach.call(feature_bodys, function (t) {
        t.classList.remove('animate__fadeIn'),
          t.classList.add('animate__fadeOut'),
          setTimeout(() => {
            t.classList.remove('d-block'), t.classList.add('d-none');
          }, 100),
          t.getAttribute('id') === e &&
            (t.classList.add('animate__fadeIn'),
            t.classList.remove('animate__fadeOut'),
            setTimeout(() => {
              t.classList.add('d-block'), t.classList.remove('d-none');
            }, 100));
      });
    })(
      feature_phone_img.querySelector('.slick-active').getAttribute('id') +
        '_content'
    );
  }),
    $('.feature_bubble').slick({
      dots: !0,
      infinite: !0,
      speed: 300,
      autoplay: !0,
      autoplaySpeed: 3500,
      fade: !0,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      variableWidth: !1,
      customPaging: function (e, t) {
        return '<div class="large-circle"><i class="fas fa-circle"></i></div>';
      },
    });
});
let card1 = document.getElementById('card1'),
  card2 = document.getElementById('card2'),
  card3 = document.getElementById('card3'),
  box_border = document.getElementById('box_border'),
  preview_phone = document.getElementById('preview_phone'),
  check1 = !1,
  check2 = !0,
  check3 = !0,
  startFeature = document.getElementById('main_feature'),
  featureInfo = document.getElementById('feature_info'),
  feature1 = document.getElementById('feature1'),
  feature2 = document.getElementById('feature2'),
  feature3 = document.getElementById('feature3'),
  endFeature = feature3.offsetTop + feature3.offsetHeight;
function animateBoxBorder() {
  let e = window.pageYOffset;
  if (
    (e > feature1.offsetTop &&
      e < feature1.offsetTop + feature1.offsetHeight &&
      (!1 === check1 &&
        (preview_phone.classList.remove('animate__fadeInLeft'),
        preview_phone.classList.add('animate__fadeOutLeft'),
        setTimeout(() => {
          preview_phone.setAttribute(
            'src',
            '/assets/img/section1/feature1.png'
          ),
            preview_phone.classList.remove('animate__fadeOutLeft'),
            preview_phone.classList.add('animate__fadeInLeft');
        }, 650),
        (check1 = !0),
        (check2 = !1),
        (check3 = !1)),
      box_border.style.setProperty('top', '0px'),
      card1.style.setProperty('background-color', '#ffffff'),
      card2.style.setProperty('background-color', 'transparent'),
      card3.style.setProperty('background-color', 'transparent')),
    e > feature2.offsetTop && e < feature2.offsetTop + feature2.offsetHeight)
  ) {
    let e = card1.offsetHeight;
    box_border.style.setProperty('top', `${e}px`),
      !1 === check2 &&
        (preview_phone.classList.remove('animate__fadeInLeft'),
        preview_phone.classList.add('animate__fadeOutLeft'),
        setTimeout(() => {
          preview_phone.setAttribute(
            'src',
            '/assets/img/section1/feature2.png'
          ),
            preview_phone.classList.remove('animate__fadeOutLeft'),
            preview_phone.classList.add('animate__fadeInLeft');
        }, 650),
        (check1 = !1),
        (check2 = !0),
        (cehck3 = !1)),
      card1.style.setProperty('background-color', 'transparent'),
      card2.style.setProperty('background-color', '#ffffff'),
      card3.style.setProperty('background-color', 'transparent');
  }
  if (
    e > feature3.offsetTop &&
    e < feature3.offsetTop + feature3.offsetHeight
  ) {
    let e = card1.offsetHeight + card2.offsetHeight;
    box_border.style.setProperty('top', `${e}px`),
      !1 === check3 &&
        (preview_phone.classList.remove('animate__fadeInLeft'),
        preview_phone.classList.add('animate__fadeOutLeft'),
        setTimeout(() => {
          preview_phone.setAttribute(
            'src',
            '/assets/img/section1/feature3.png'
          ),
            preview_phone.classList.remove('animate__fadeOutLeft'),
            preview_phone.classList.add('animate__fadeInLeft');
        }, 650),
        (check1 = !1),
        (check2 = !1),
        (check3 = !0)),
      card1.style.setProperty('background-color', 'transparent'),
      card2.style.setProperty('background-color', 'transparent'),
      card3.style.setProperty('background-color', '#ffffff');
  }
}
function togglePlusMinusIcon(e) {
  let t = 'plus-minus-icon-' + `${e}`;
  document.getElementById(t).classList.toggle('active');
}
window.addEventListener('scroll', () => {
  animateBoxBorder();
}),
  $(function () {
    $('.slider').slick({
      dots: !0,
      infinite: !0,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: !1,
      customPaging: function (e, t) {
        return '<div class="large-circle"><i class="fas fa-circle"></i></div>';
      },
      prevArrow:
        "<button type='button' class='slick-prev slick-arrow'><img class='arrow' src='/assets/img/icon_logo/arrow-icon-prev-white.png'> </button>",
      nextArrow:
        "<button type='button' class='slick-next slick-arrow'><img class='arrow' src='/assets/img/icon_logo/arrow-icon-next-white.png'></button>",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: !0,
            dots: !0,
          },
        },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      ],
    });
  });
let myVar = setInterval(changeIMG, 0);
function changURL(e) {
  setTimeout(() => {
    headerIMG.classList.add('animate__fadeOut'),
      headerIMG.classList.remove('animate__fadeIn');
  }, 1e3),
    setTimeout(() => {
      (headerIMG.src = e),
        headerIMG.classList.remove('animate__fadeOut'),
        headerIMG.classList.add('animate__fadeIn');
    }, 2400);
}
function changeIMG() {
  let e = document.getElementById('typedLanguage').innerHTML;
  e.includes('Tiếng Anh') &&
    setTimeout(() => {
      headerIMG.src = '/assets/img/section1/bg-china.png';
    }, 1e3 + 80 * 'Tiếng Anh'.length + 80 * 'Tiếng Hàn'.length),
    e.includes('Tiếng Hàn') &&
      setTimeout(() => {
        headerIMG.src = '/assets/img/section1/bg-japan.png';
      }, 1e3 + 80 * 'Tiếng Hàn'.length + 80 * 'Tiếng Nhật'.length),
    e.includes('Tiếng Nhật') &&
      setTimeout(() => {
        headerIMG.src = '/assets/img/section1/bg-english.png';
      }, 1e3 + 80 * 'Tiếng Nhật'.length + 80 * 'Tiếng Anh'.length + 100),
    e.includes('English') &&
      setTimeout(() => {
        headerIMG.src = '/assets/img/section1/bg-china.png';
      }, 1e3 + 80 * 'English'.length + 80 * 'Korean'.length),
    e.includes('Korean') &&
      setTimeout(() => {
        headerIMG.src = '/assets/img/section1/bg-japan.png';
      }, 1e3 + 80 * 'Korean'.length + 80 * 'Japanese'.length),
    e.includes('Japanese') &&
      setTimeout(() => {
        headerIMG.src = '/assets/img/section1/bg-english.png';
      }, 1e3 + 80 * 'Japanese'.length + 80 * 'English'.length + 100);
}
let step_cards = document.getElementsByClassName('card_step'),
  step_wrapper_top = document.querySelector('#howitwork');
function activeIconStep(e) {
  e.matches &&
    [].forEach.call(step_cards, (e) => {
      let t = e.querySelectorAll('img');
      e.classList.add('wow');
      let a = e.querySelector('.icon_box');
      a.classList.remove('opacity-0'),
        a.classList.add('opacity-1'),
        [].forEach.call(t, (e) => {
          e.classList.add('animate__fadeInUp');
        });
    });
}
step_wrapper_top.addEventListener('mouseover', () => {
  [].forEach.call(step_cards, (e) => {
    let t = e.querySelector('.icon_box');
    t.classList.remove('opacity-0'), t.classList.add('opacity-1');
    let a = e.querySelectorAll('img');
    [].forEach.call(a, (e) => {
      e.classList.add('animate__fadeInUp');
    });
  });
});
var x = window.matchMedia('(max-width: 768px)');
function noScroll() {
  window.scrollTo(0, 0);
}
function loading() {
  (document.getElementById('hideAll').style.opacity = '0'),
    setTimeout(() => {
      document.getElementById('hideAll').style.display = 'none';
    }, 300),
    window.removeEventListener('scroll', noScroll);
}
activeIconStep(x),
  x.addListener(activeIconStep),
  window.addEventListener('resize', () => {
    animateBoxBorder();
  }),
  (document.getElementById('hideAll').style.display = 'flex'),
  window.addEventListener('scroll', noScroll);

// get data
const scriptURL = 'https://api.apispreadsheets.com/data/15719/';
const form = document.forms['submit-to-google-sheet'];
const form_1 = document.forms['submit-to-google-sheet-1'];
const form_2 = document.forms['submit-to-google-sheet-2'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => alert('Gửi thành công! Cảm ơn bạn!'))
    .catch((error) => alert('Có lỗi rồi ! ', error.message));
});
form_1.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form_1) })
    .then((response) => alert('Gửi thành công! Cảm ơn bạn!'))
    .catch((error) => alert('Có lỗi rồi ! ', error.message));
});
form_2.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form_2) })
    .then((response) => alert('Gửi thông tin thành công !'))
    .catch((error) => alert('Có lỗi rồi ! ', error.message));
});
