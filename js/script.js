'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.main__title'),
    burger = document.querySelector('.burger'),
    list = document.querySelector('.header__list'),
    search = document.querySelector('.header__search'),
    icon = document.querySelector('.icon');

  let h = true;
  burger.addEventListener('click', () => {

    if (h) {
      burger.classList.add('burger--active')
      list.classList.add('header__list--active')
      search.classList.add('header__search--active')
      h = false
    } else {
      burger.classList.remove('burger--active')
      search.classList.remove('header__search--active')
      list.classList.remove('header__list--active')
      h = true
    }
  })

  // modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.overlay'),
    modalClose = document.querySelector('[data-close]'),
    modalInput = document.querySelector('.header__search input'),
    popupBtn = document.querySelector('.popup__login');

   const modalTimerId = setTimeout(openModal, 5000)

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal)
  });



  function closeModal() {
    modal.style.top = '';
    document.body.style.overflow = ''
  }

  function openModal() {
    modal.style.top = '0%';
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  modalClose.addEventListener('click', closeModal)

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && openModal) {
      closeModal();
    }
  })

  modalInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && closeModal) {
      openModal();
      modalInput.style.color = 'red';
    }
  })

  popupBtn.addEventListener('click', (e) => {
    if (e.target === popupBtn) {
      closeModal();
    }
  })





  const db = [
    {
      title: "Something new",
      bgSrc: "images/v1.png",
      imgSrc: "images/v1.png",
    },
    {
      title: "The Life Battle",
      bgSrc: "images/vd-1.png",
      imgSrc: "images/vd-1.png",
    },
    {
      title: 'Robotic Civil Shop',
      bgSrc: "images/vd-3.png",
      imgSrc: 'images/vd-3.png',
    },
    {
      title: 'Robotic Civil Shop',
      bgSrc: "images/vd-4.png",
      imgSrc: 'images/vd-4.png',
    },
    {
      title: 'survival or Death',
      bgSrc: "images/vd-1.png",
      imgSrc: 'images/vd-1.png',
    }
  ];

  function slider() {
    const next = document.querySelector(".right"),
      prev = document.querySelector(".left"),
      wrapper = document.querySelector(".main__inner"),
      body = document.body;
    let count = 0;

    next.addEventListener("click", () => {
      const {
        title,
        imgSrc,
        bgSrc
      } = db[count];
      wrapper.innerHTML = "";
      body.style.background = `linear-gradient(90.35deg, rgba(0, 0, 0, 0.5) 16.51%, rgba(109, 76, 110, 0.3) 48.2%, rgba(0, 0, 0, 0.01) 83.93%), url(${bgSrc});`;
      wrapper.innerHTML = `
          <div class="main__content">
          <h1 class="main__title">
            ${title}
          </h1>
    
          <p class="main__categories">2022 | 18+ | Season 1 | 1hr 44 mins | K-Dramas based on Titan</p>
    
          <p class="main__text">When man-eating Titans first appeared 100 years ago, humans <br> found safety
            behind massive walls that stopped the giants in <br> their tracks.</p>
    
          <p class="main__info">
            Starring:Satomi Ishihra, Romi Park, Yui Ishikawa <br>
            Creators: Hajime Isayama, Kodansha,Kodansha USA
          </p>
    
          <div class="main__social">
            <a href="#" class="main__play"> <i class="fa-solid fa-play"></i> Play</a>
            <div class="main__social-icons">
              <i class="fa-solid fa-share-nodes"></i>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
    
    
        <div class="main__img">
          <img src=${imgSrc} alt="">
        </div> `;
      count++;
    });



  }
  slider();


})