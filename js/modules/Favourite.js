export class Favourite {
  constructor() {
    this.favouriteVideosId = JSON.parse(localStorage.getItem('favouriteVideos') || '[]');
  }
  
  get() {
    return this.favouriteVideosId;
  }

  set() {
    document.body.addEventListener('click', (event) => {
      const favouriteItem = event.target.closest('.favourite');

      if (favouriteItem) {
        const videoId = favouriteItem.dataset.videoId;
        if (this.favouriteVideosId.includes(videoId)) {
          console.log('click');
          this.favouriteVideosId.splice(this.favouriteVideosId.indexOf(videoId), 1);
          localStorage.setItem('favouriteVideos', JSON.stringify(this.favouriteVideosId));
          favouriteItem.classList.remove('favourite_active');

        } else {
          this.favouriteVideosId.push(videoId);
          localStorage.setItem('favouriteVideos', JSON.stringify(this.favouriteVideosId));
          favouriteItem.classList.add('favourite_active');
        }
      }
    })
  }
}



