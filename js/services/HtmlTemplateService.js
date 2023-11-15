export class HtmlTemplateService {
  constructor() {

  }

  createVideoTemplate() {
    return `
        <div class="video__player">
          <iframe class="video__iframe" src="https://www.youtube.com/embed/WcIcVapfqXw" frameborder="0" allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <article class="video__content">
          <header class="video__header">
            <h2 class="title video__title">Rema, Selena Gomez - Calm Down (Official Music Video)</h2>
            <div class="favourite video__favourite">
              <span>В избранном</span>
              <svg class="video-card__favourite-icon" class="video__favourite-icon" viewBox="0 0 20 20" role="img"
                aria-label="Кнопка для добавления видео в Избранное">
                <use xlink:href="./img/sprite.svg#star-orange" />
              </svg>
            </div>
          </header>
          <p class="video__channel">Selena Gomez</p>
          <p class="video__info">
            <span class="video__info-stat">675 310 487 просмотров </span>
            <span class="video__info-date">Дата премьеры: 7 сен. 2022 г.</span>
          </p>
          <p class="video__description">Music video by Rema, Selena Gomez performing Calm Down.</p>
        </article>
    `;
  } 

  createVideoListTemplate() {
    return `
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="./video.html">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/WcIcVapfqXw/maxresdefault.jpg"
              alt="Превью к видео: Rema, Selena Gomez - Calm Down (Official Music Video)">
            <div class="video-card__info">
              <h3 class="title video-card__title">Rema, Selena Gomez - Calm Down (Official Music Video)</h3>
              <p class="video-card__channel">Selena Gomez</p>
              <p class="video-card__duration">3 мин 59 сек</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/X-t5QxXtY2U/maxresdefault.jpg"
              alt="Превью к видео: Interstellar | Melancholic Melody, 1 Hour Magical Journey, Sleep Aid, Ambient Music">
            <div class="video-card__info">
              <h3 class="title video-card__title">Interstellar | Melancholic Melody, 1 Hour Magical Journey, Sleep
                Aid, Ambient Music</h3>
              <p class="video-card__channel">Soothing Sonata</p>
              <p class="video-card__duration">1 ч 00 мин</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/BX0lKSa_PTk/maxresdefault.jpg"
              alt="Превью к видео: Oliver Tree & Robin Schulz - Miss You [Official Music Video]">
            <div class="video-card__info">
              <h3 class="title video-card__title">Oliver Tree & Robin Schulz - Miss You [Official Music Video]</h3>
              <p class="video-card__channel">Oliver Tree</p>
              <p class="video-card__duration">2 мин 49 сек</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/RZUmgKOHET0/maxresdefault.jpg"
              alt="Превью к видео: HAUSER - Rebel With a Cello - Live in Budapest (Full Concert)">
            <div class="video-card__info">
              <h3 class="title video-card__title">HAUSER - Rebel With a Cello - Live in Budapest (Full Concert)</h3>
              <p class="video-card__channel">HAUSER</p>
              <p class="video-card__duration">1 ч 43 мин 45 сек</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/WcIcVapfqXw/maxresdefault.jpg"
              alt="Превью к видео: Rema, Selena Gomez - Calm Down (Official Music Video)">
            <div class="video-card__info">
              <h3 class="title video-card__title">Rema, Selena Gomez - Calm Down (Official Music Video)</h3>
              <p class="video-card__channel">Selena Gomez</p>
              <p class="video-card__duration">3 мин 59 сек</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/X-t5QxXtY2U/maxresdefault.jpg"
              alt="Превью к видео: Interstellar | Melancholic Melody, 1 Hour Magical Journey, Sleep Aid, Ambient Music">
            <div class="video-card__info">
              <h3 class="title video-card__title">Interstellar | Melancholic Melody, 1 Hour Magical Journey, Sleep
                Aid, Ambient Music</h3>
              <p class="video-card__channel">Soothing Sonata</p>
              <p class="video-card__duration">1 ч 00 мин</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/BX0lKSa_PTk/maxresdefault.jpg"
              alt="Превью к видео: Oliver Tree & Robin Schulz - Miss You [Official Music Video]">
            <div class="video-card__info">
              <h3 class="title video-card__title">Oliver Tree & Robin Schulz - Miss You [Official Music Video]</h3>
              <p class="video-card__channel">Oliver Tree</p>
              <p class="video-card__duration">2 мин 49 сек</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/RZUmgKOHET0/maxresdefault.jpg"
              alt="Превью к видео: HAUSER - Rebel With a Cello - Live in Budapest (Full Concert)">
            <div class="video-card__info">
              <h3 class="title video-card__title">HAUSER - Rebel With a Cello - Live in Budapest (Full Concert)</h3>
              <p class="video-card__channel">HAUSER</p>
              <p class="video-card__duration">1 ч 43 мин 45 сек</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/WcIcVapfqXw/maxresdefault.jpg"
              alt="Превью к видео: Rema, Selena Gomez - Calm Down (Official Music Video)">
            <div class="video-card__info">
              <h3 class="title video-card__title">Rema, Selena Gomez - Calm Down (Official Music Video)</h3>
              <p class="video-card__channel">Selena Gomez</p>
              <p class="video-card__duration">3 мин 59 сек</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/X-t5QxXtY2U/maxresdefault.jpg"
              alt="Превью к видео: Interstellar | Melancholic Melody, 1 Hour Magical Journey, Sleep Aid, Ambient Music">
            <div class="video-card__info">
              <h3 class="title video-card__title">Interstellar | Melancholic Melody, 1 Hour Magical Journey, Sleep
                Aid, Ambient Music</h3>
              <p class="video-card__channel">Soothing Sonata</p>
              <p class="video-card__duration">1 ч 00 мин</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/BX0lKSa_PTk/maxresdefault.jpg"
              alt="Превью к видео: Oliver Tree & Robin Schulz - Miss You [Official Music Video]">
            <div class="video-card__info">
              <h3 class="title video-card__title">Oliver Tree & Robin Schulz - Miss You [Official Music Video]</h3>
              <p class="video-card__channel">Oliver Tree</p>
              <p class="video-card__duration">2 мин 49 сек</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
      <li class="video-list__item">
        <article class="video-card">
          <a class="video-card__link" href="#!">
            <img class="video-card__thumbnail" src="https://i.ytimg.com/vi/RZUmgKOHET0/maxresdefault.jpg"
              alt="Превью к видео: HAUSER - Rebel With a Cello - Live in Budapest (Full Concert)">
            <div class="video-card__info">
              <h3 class="title video-card__title">HAUSER - Rebel With a Cello - Live in Budapest (Full Concert)</h3>
              <p class="video-card__channel">HAUSER</p>
              <p class="video-card__duration">1 ч 43 мин 45 сек</p>
            </div>
          </a>
          <button class="favourite video-card__favourite" type="button">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20" role="img"
              aria-label="Кнопка для добавления видео в Избранное">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
          </button>
        </article>
      </li>
    `;
  }
}