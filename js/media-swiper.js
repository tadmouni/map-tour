var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    },

    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
    },
        mousewheel: true,
        keyboard: true,
});