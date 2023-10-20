import { Favourite } from "../modules/favourite";

export class ApiService {
  #API_KEY = 'AIzaSyCJb41sNM0py5NxZQ4_A7z4d-DBik6hxrg';
  #BASE_VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos';
  #BASE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
  #REGION_CODE = 'UA';
  #MAX_RESULTS = 12;

  async getData(url) {
    try {
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

  async getTrendingVideo() {
    const url = new URL(this.#BASE_VIDEO_URL);
    url.searchParams.append('part', 'contentDetails,id,snippet');
    url.searchParams.append('chart', 'mostPopular');
    url.searchParams.append('regionCode', this.#REGION_CODE);
    url.searchParams.append('maxResults', this.#MAX_RESULTS);
    url.searchParams.append('key', this.#API_KEY);

    return this.getData(url);
  }

  async getFavouriteVideos() {
    const favouriteVideosId = new Favourite().get();

    if (favouriteVideosId.length === 0) {
      return { items: [] };
    }

    const url = new URL(this.#BASE_VIDEO_URL);
    url.searchParams.append('part', 'contentDetails,id,snippet');
    url.searchParams.append('maxResults', this.#MAX_RESULTS);
    url.searchParams.append('id', favouriteVideosId.join(','));
    url.searchParams.append('key', this.#API_KEY);

    return this.getData(url);
  }

  async getCurrentVideo(id) {
    const url = new URL(this.#BASE_VIDEO_URL);
    url.searchParams.append('part', 'snippet, statistics');
    url.searchParams.append('id', id);
    url.searchParams.append('key', this.#API_KEY);

    return this.getData(url);
  }

  async getVideoFromSearch(searchQuery) {
    const url = new URL(this.#BASE_SEARCH_URL);
    url.searchParams.append('q', searchQuery);
    url.searchParams.append('part', 'snippet');
    url.searchParams.append('maxResults', this.#MAX_RESULTS);
    url.searchParams.append('key', this.#API_KEY);

    return this.getData(url);
  }
}