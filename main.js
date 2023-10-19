import 'normalize.css';
import './style/main.scss';
import { formatTime } from './js/modules/helpers/formatTime';

const API_KEY = 'AIzaSyCJb41sNM0py5NxZQ4_A7z4d-DBik6hxrg';
const BASE_VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos';
const BASE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

const getTrendingVideo = async () => {
  try {
    const url = new URL(BASE_VIDEO_URL);
    url.searchParams.append('part', 'contentDetails,id,snippet');
    url.searchParams.append('chart', 'mostPopular');
    url.searchParams.append('regionCode', 'UA');
    url.searchParams.append('maxResults', 12);
    url.searchParams.append('key', API_KEY);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(new Error(error));
  }
}

const showVideos = (videos) => {
  console.log('video', videos);

  const videoList = document.querySelector('.video-list__items');
  videoList.innerHTML = '';

  const videoListItems = videos.items.map((
    {
      id,
      snippet: {
        title,
        channelTitle,
        thumbnails,
      },
      contentDetails: {
        duration
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
        <button class="video-card__favourite" type="button" aria-label="Добавить в Избранное видео: ${title}">
          <svg class="video-card__favourite-icon" viewBox="0 0 20 20">
            <use xlink:href="./img/sprite.svg#star-fill" />
          </svg>
          </button>
        </article>
    `;

    return videoListItem;
  })

  videoList.append(...videoListItems);
}

const init = () => {
  console.log('Start');

  getTrendingVideo().then(data => {
    showVideos(data);
  });
}


init();