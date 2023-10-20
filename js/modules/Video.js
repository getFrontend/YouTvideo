import { capitaliseFirstLetter } from "../helpers/capitaliseFirstLetter";
import { formatDate } from "../helpers/formatDate";

export class Video {
  constructor() {
    this.videoElem = document.querySelector('.video');
  }

  create({ items: [video] }) {
    console.log(video);

    this.showVideo(video);
  }

  showVideo(
    {
      id,
      statistics: {
        viewCount,
      },
      snippet: {
        title,
        channelTitle,
        publishedAt,
        description,
      },
    }
  ) {
    const videoPlayer = document.querySelector('.video__player');
    videoPlayer.innerHTML = `
      <iframe class="video__iframe" src="https://www.youtube.com/embed/${id}"
        frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>
    `;

    const videoContent = document.querySelector('.video__content');
    videoContent.innerHTML = `
      <header class="video__header">
        <h2 class="title video__title">
        ${title === title.toLowerCase() ? capitaliseFirstLetter(title) : title}
        </h2>
        <div class="video__favourite">
          <span>В избранном</span>
          <svg class="video__favourite-icon" viewBox="0 0 20 20" role="img"
            aria-label="Кнопка для добавления видео в Избранное">
            <use xlink:href="./img/sprite.svg#star-orange" />
          </svg>
        </div>
      </header>
      <p class="video__channel">${channelTitle}</p>
      <p class="video__info">
        <span class="video__info-stat">${Number(viewCount).toLocaleString()} просмотров </span>
        <span class="video__info-date">Дата премьеры: ${formatDate(publishedAt)}</span>
      </p>
      <p class="video__description">${description ? description : ''}</p>
    `;
  }
}