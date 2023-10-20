import { formatTime } from "../helpers/formatTime";
import { Favourite } from "./Favourite";

export class VideoList {
  create(data) {
    if (data) {
      this.videoList.innerHTML = '';
    }

    this.videoList = document.querySelector('.video-list__items');
    return this;
  }

  showVideoList(videos) {
    console.log("videos=", videos)

    new Favourite().set();
    const favouriteVideosId = new Favourite().get();

    const videoListItems = videos.items.map((
      {
        id,
        snippet: {
          title,
          channelTitle,
          thumbnails,
        },
        contentDetails: {
          duration,
        },
      }
    ) => {
      const videoListItem = document.createElement('li');
      videoListItem.innerHTML = `
          <article class="video-card">
          <a class="video-card__link" href="./video.html?id=${id}">
            <img class="video-card__thumbnail" src="${thumbnails.standard?.url}"
              alt="Превью к видео: ${title}">
            <div class="video-card__info">
              <h3 class="title video-card__title">${title}</h3>
              <p class="video-card__channel">${channelTitle}</p>
              <p class="video-card__duration">${formatTime(duration)}</p>
            </div>
          </a>
          <button class="favourite 
          ${favouriteVideosId.includes(id) ? 'favourite_active' : ''} 
          video-card__favourite" type="button" 
          aria-label="Добавить в Избранное видео: ${title}"
          data-video-id="${id}">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
            </button>
          </article>
      `;

      return videoListItem;
    })

    this.videoList.append(...videoListItems);
  }

  showSearchVideoList(videos) {
    console.log("videos=", videos)

    new Favourite().set();
    const favouriteVideosId = new Favourite().get();

    const videoListItems = videos.items.map((
      {
        id,
        snippet: {
          title,
          channelTitle,
          thumbnails,
        },
      }
    ) => {
      const videoListItem = document.createElement('li');
      videoListItem.innerHTML = `
          <article class="video-card">
          <a class="video-card__link" href="./video.html?id=${id}">
            <img class="video-card__thumbnail" src="${thumbnails.standard?.url}"
              alt="Превью к видео: ${title}">
            <div class="video-card__info">
              <h3 class="title video-card__title">${title}</h3>
              <p class="video-card__channel">${channelTitle}</p>
            </div>
          </a>
          <button class="favourite 
          ${favouriteVideosId.includes(id) ? 'favourite_active' : ''} 
          video-card__favourite" type="button" 
          aria-label="Добавить в Избранное видео: ${title}"
          data-video-id="${id}">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
            </button>
          </article>
      `;

      return videoListItem;
    })

    this.videoList.append(...videoListItems);
  }
}