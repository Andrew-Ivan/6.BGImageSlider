const images = [
  "https://cache3.youla.io/files/images/780_780/5e/8d/5e8d9b24074b3e2d371af0b3.jpg",
  "https://proprikol.ru/wp-content/uploads/2019/10/kartinki-bmv-24.jpg",
  "https://yandex.ru/images/_crpd/TqNc47234/0839d2dKHO/cd_a_xVS2w1ZAzn9E_unvfs-bo8HchE658rGFevZzoeQ0fLzks8Cg4QjK3GxZPrbB8Gk0cZWTA7p2_cztH2wijaU0-ECAZtUTgEpumKjpf3mIjnUUHIIJejKhQ69hIvL34CszZKPEs_Wen8ctm_5xCjrh8-xbzBvxancHKh9u95k1M6iT2zyTE4sOtpY5YGGmgR8lxZkO2P44-Z5xOv175jV_eaj6zXI41p1JeUTkJoTzKrlsUoMSviP9h-HUZTjbOqWsUhF1whPIDzHa9qNl5sxQaMvRAJfzMzAQv3N8uWO4PnbneUo4d9SfiXpDZ2OFv-t7IJ3BXHbveArnFKF3WrGtbtPXOMufSAly1fVjqiaD0W5KHMiUtnG6l7I2NLwp_vxyZvYIMfZY30uzgSNjSDZr9yBdw135JnaOZZNtNtt5ISjblnsG242PdpE77usvyRulCt5Am7T2sRZ4u3g_IPM0v-U9wbd7WVfD9E2gZY90o_gsEI3e86W-jWdRpzJZe-OpnJX-h9EIQnnetuvtqASRrYgWSBZ2-7XYtno2di_x87dv9gl_N55QxXeG52XENus55FSO2z5qdgeiF65zFLHo6F4SdomZDEo-kfesZuXBUKbM2Qfds_lxV_ezOjbnfvW-5HPFsPHTG0B9C6mow3Bt9SVSh5Iw6v6Oqhyo-1Y4qGIc0LJJFgDIPZt86ypogBEmA1YGlrszdp96NHJ_KTwztyGyDbK53VXB-06voQS3IXaoF0VRPia0CqLSZr7eeuDo0586SJXKSnMc8-vvqIAX4YgQCRj8cf6YPXx6seM-tP0gdIb3MVhYDnOEZyuJv-C-It8DFbkiPcmiXa0yHjHsZNfeeo9ZC4P9nbMm6GnLXmOJ3weQ-vO81L_zvzTmcbT1L7BLsfPRFkJ1jezhDbDq8CGXy542LfHI6lko9ZI6Ze0S2XlPnQoAvZ5xIeenSl_qxpSL2LBwdBR2_c",
  "https://img2.goodfon.ru/original/3843x2562/4/4a/auto-cars-ac-cobra-cobra.jpg",
  "https://img3.badfon.ru/original/2048x1536/a/8a/avto-sportkar-ferrari-gto.jpg",
  "https://demotivation.ru/wp-content/uploads/2020/01/129599-gonochnyj-sportivnyj_avtomobil-superkar-lamborgini_aventador-avto-2560x1600-1.jpg",
  "https://images.hgmsites.net/hug/2012-fisker-karma_100367916_h.jpg",
  "https://ie.drivenn.ru/evgvqpqe1k3ig_zijthy.jpeg",
  "https://million-wallpapers.ru/wallpapers/0/41/371401827431243/dodge-challenger-srt-8.jpg",
  "https://img1.goodfon.com/wallpaper/original/2/94/nissan-370z-blue-front-nissan.jpg",
  "https://i.ucrazy.ru/files/i/2013.3.30/0kuzovov-avtomobilnyh.jpg",
  "https://cdn.wallpapersafari.com/54/88/jcdeuC.jpg",
  "https://cdn3.automobilesreview.com/img/ferrari-fxx/2005-ferrari-fxx-01.jpg",
  "https://w-dog.ru/wallpapers/1/12/513991262751847/lamborghini-avto-mashiny-tyuning-villa-dom-garazh.jpg",
  "https://3-9zemel.ru/wp-content/uploads/2016/06/fi44.jpg",
  "http://wp1.carwallpapers.ru/bugatti/veyron/2009-grand-sport/Bugatti-Veyron-16-4-Grand-Sport-2009-1920x1200-005.jpg",
  "https://get.wallhere.com/photo/2880x1800-px-car-green-Plymouth-Barracuda-667826.jpg",
  "https://avatars.mds.yandex.net/get-zen_doc/1889358/pub_5dbd82971febd400b1f33867_5dbd8309a3f6e400b2f9a836/scale_1200",
  "https://pbs.twimg.com/media/DVdNAbqWsAEj33c.jpg:large",
  "https://img3.badfon.ru/original/2048x1536/2/2e/bufori-geneva-avto.jpg",
];

let image = document.querySelector(".polaroid");
let counter = 0;

function nextImage(i) {
  if (i) {
    if (counter >= images.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
  } else {
    if (counter < 0) {
      counter = images.length - 1;
    } else {
      counter--;
    }
  }
  image.style.opacity = 0;
  setTimeout(() => {
    image.style.backgroundImage = `url(${images[counter]})`;
    image.style.opacity = 1;
  }, 1000);
}

document.querySelectorAll("button").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    nextImage(e.target.className == "btn next");
  });
});
