<?php include('header.php')?>
  <section class="news">
    <div class="container">
      <div class="news-wrapper">
        <div class="news-wrapper-text">
          <h2 class="news__title title">Новости</h2>
          <div class="swiper-container news-slider news-text">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">
                <p class="news__text text">1 Lorem ipsum dolor sit amet et delectus accommodare his consul copiosaeLorem ipsum dolor
                  sit amet et delectus accommodare his consul copiosaeLorem ipsum dolor sit amet ipsum dolor
                  sit amet et delectus accommodare his consul copiosaeLorem ipsum dolor sit amet</p>
                <a href="#" class="news__link">Подробнее</a>                  
              </div>
              <div class="swiper-slide">
                <p class="news__text  text">2 Lorem ipsum dolor sit amet et delectus accommodare his consul copiosaeLorem ipsum dolor
                  sit amet et delectus
                  accommodare his consul copiosaeLorem ipsum dolor sit amet</p>
                  <a href="#" class="news__link">Подробнее</a>
              </div>
              <div class="swiper-slide">
                <p class="news__text  text">3 Lorem ipsum dolor sit amet et delectus accommodare his consul copiosaeLorem ipsum dolor
                  sit amet et delectus
                  accommodare his consul copiosaeLorem ipsum dolor sit amet</p>
                  <a href="#" class="news__link">Подробнее</a>
              </div>
              <!--/.swiper-wrapper-->
            </div>
          </div>
          <!--/.swiper-container news-slider-->
        </div>
        <!-- /.news-wrapper-text -->
        <div class="swiper-container news-slider news-photo">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img class="swiper-slide__item" src="img/Новость1.jpg" alt="Фотография: Новость"></div>
            <div class="swiper-slide"><img class="swiper-slide__item"  src="img/Новость1.jpg" alt="Фотография: Новость"></div>
            <div class="swiper-slide"><img class="swiper-slide__item" src="img/Новость1.jpg" alt="Фотография: Новость"></div>
          </div>
          <!--/.swiper-wrapper-->
        </div>
        <!--/.swiper-container news-slider-->
        <div class="news-button_next"></div>
      </div>
      <!-- /.news-wrapper -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.news -->

  <section class="advantages">
    <h2 class="advantages__title title">Занятия йогой для тех, кто ценит пространство,<br> эстетику и профессионализм</h2>
    <div class="container">
      <div class="advantages-wrapper">
        <div class="advantages-block" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100">
          <img src="img/Актуальность.png" alt="Картинка: актуальность" class="advantages__img">
          <div class="advantages-block__word">
            <h3 class="advantages-block__title">Актуальность</h3>
            <p class="advantages-block__text text">В нашем клубе представлены 3 самые популярные направления в йоге: хатха-йога, айенгар-йога, кундалини-йога</p>
          </div>
          <!-- /.advantages-block__word -->
        </div>
        <!-- /.advantages-block -->
        <div class="advantages-block" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="100">
          <img src="img/Эстетика.png" alt="Картинка: эстетика" class="advantages__img">
          <div class="advantages-block__word">
            <h3 class="advantages-block__title">Эстетика</h3>
            <p class="advantages-block__text text">Всё пространство нашего клуба выполнено в едином стиле, с добавлением индийских
            мотивов, для того, чтобы полностью
            погрузить Вас в мир йоги</p>
            </div>
            <!-- /.advantages-block__word -->
        </div>
        <!-- /.advantages-block -->
        <div class="advantages-block" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
          <img src="img/Пространство.png" alt="Картинка: пространство" class="advantages__img">
          <div class="advantages-block__word">
            <h3 class="advantages-block__title">Пространство</h3>
            <p class="advantages-block__text text">Самый большой центр йоги в Новосибирске, 500 кв.м, 220 из которых занимает именно зал для занятий</p>
          </div>
          <!-- /.advantages-block__word -->
        </div>
        <!-- /.advantages-block -->
        <div class="advantages-block" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300">
          <img src="img/Комфорт.png" alt="Картинка: комфорт" class="advantages__img">
          <div class="advantages-block__word">
            <h3 class="advantages-block__title">Комфорт</h3>
            <p class="advantages-block__text text">2 полностью оборудованных зала для йоги, гардероб, большая зона ресепшена, чайная
            зона, 2 раздевалки в каждой из которых имеются душевые и даже мини-сауны</p>
            </div>
            <!-- /.advantages-block__word -->
        </div>
        <!-- /.advantages-block -->
        <div class="advantages-block" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">
          <img src="img/Профессионализм.png" alt="Картинка: профессионализм" class="advantages__img">
          <div class="advantages-block__word">
            <h3 class="advantages-block__title">Профессионализм</h3>
            <p class="advantages-block__text text">У нас работают только сертифицированные преподаватели, безопасность наших учеников для нас превыше всего</p>
          </div>
          <!-- /.advantages-block__word -->
        </div>
        <!-- /.advantages-block -->
      </div>
      <!-- /.advantages-wrapper -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.advantages -->

  <section class="register">
      <div class="container">
        <div class="register-wrapper" data-aos="zoom-out" data-aos-duration="2000">
          <h2 class="title register__title">Записывайтесь на&nbsp;пробное занятие уже сейчас</h2>
          <form class="register-form" action="send.php" method="POST">
            <input type="text" class="register-form__input" placeholder="Ваше имя*" name="name">
            <input type="text" class="register-form__input" placeholder="Телефон*" name="phone">
            <button class="register-form__button">Записаться на занятие</button>
          </form>
        </div>
        <!-- /.register-wrapper -->
      </div>
      <!-- /.container -->
  </section>
  <!-- /.register -->

  
  <section class="map">
    <div class="container">
      <div class="map-wrapper">
        <div class="map-wrapper-text">
          <h2 class="map__title title">Как нас найти</h2>
          <p class="map__text text">
            Красный проспект 82<br> Вход со двора через арку, отдельное крыльцо с вывеской "Снежный лотос"
          </p>
        </div>
          <!-- /.news-wrapper-text -->
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A04d1b59d54201b3be0691d6e82ea375416eb545799a0f9ec0472e3811b19dbbd&amp;source=constructor" width="600" height="400" frameborder="0" class="map__geo"></iframe>
      </div>
      <!-- /.map-wrapper -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.map -->
<?php include('footer.php')?>