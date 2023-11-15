import 'normalize.css';
import './style/main.scss';
import { VideoList } from './js/modules/VideoList';
import { Video } from './js/modules/Video';
import { ApiService } from './js/services/ApiService';
import Navigo from 'navigo';


const init = async () => {
  const router = new Navigo('/', { hash: true });

  const currentPage = location.pathname.split('/').pop();
  const urlSearchParams = new URLSearchParams(location.search);
  const videoId = urlSearchParams.get('id');
  const searchQuery = urlSearchParams.get('q');

  // Main page
  if (currentPage === 'index.html' || currentPage === '') {
    const trendingVideos = await new ApiService().getTrendingVideo();
    new VideoList().create().showVideoList(trendingVideos);

    // Video page
  } else if (currentPage === 'video.html' && videoId) {
    const currentVideo = await new ApiService().getCurrentVideo(videoId);
    new Video().create(currentVideo);

    // Favourite page
  } else if (currentPage === 'favourite.html') {
    const favouriteVideos = await new ApiService().getFavouriteVideos();
    new VideoList().create().showVideoList(favouriteVideos);

    // Search page
  } else if (currentPage === 'search.html' && searchQuery) {
    console.log('Search', searchQuery)

    const title = document.querySelector('.video-list__title');
    title.textContent = `Поиск: ${searchQuery}`;

    const foundVideos = await new ApiService().getVideoFromSearch(searchQuery);
    new VideoList().create().showSearchVideoList(foundVideos);
  }
}

init();