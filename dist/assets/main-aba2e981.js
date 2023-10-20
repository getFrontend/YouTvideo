var L=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var o=(a,e,t)=>(L(a,e,"read from private field"),t?t.call(a):e.get(a)),l=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)};(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const V=a=>{if(a)return a.replace("PT","").replace("H"," ч ").replace("M"," мин ").replace("S"," сек")};class m{constructor(){this.favouriteVideosId=JSON.parse(localStorage.getItem("favouriteVideos")||"[]")}get(){return this.favouriteVideosId}set(){document.body.addEventListener("click",e=>{const t=e.target.closest(".favourite");if(t){const r=t.dataset.videoId;this.favouriteVideosId.includes(r)?(console.log("click"),this.favouriteVideosId.splice(this.favouriteVideosId.indexOf(r),1),localStorage.setItem("favouriteVideos",JSON.stringify(this.favouriteVideosId)),t.classList.remove("favourite_active")):(this.favouriteVideosId.push(r),localStorage.setItem("favouriteVideos",JSON.stringify(this.favouriteVideosId)),t.classList.add("favourite_active"))}})}}class w{create(e){return e&&(this.videoList.innerHTML=""),this.videoList=document.querySelector(".video-list__items"),this}showVideoList(e){if(!e)throw console.log("Не удалось загрузить видео с Youtube, поэтому вы видите демо данные."),new Error("Sorry, but we have a problem with Youtube server to get data.");console.log("videos=",e),new m().set();const t=new m().get(),r=e.items.map(({id:s,snippet:{title:i,channelTitle:n,thumbnails:h},contentDetails:{duration:d}})=>{var y;const v=document.createElement("li");return v.innerHTML=`
          <article class="video-card">
          <a class="video-card__link" href="./video.html?id=${s}">
            <img class="video-card__thumbnail" src="${(y=h.standard)==null?void 0:y.url}"
              alt="Превью к видео: ${i}">
            <div class="video-card__info">
              <h3 class="title video-card__title">${i}</h3>
              <p class="video-card__channel">${n}</p>
              <p class="video-card__duration">${V(d)}</p>
            </div>
          </a>
          <button class="favourite 
          ${t.includes(s)?"favourite_active":""} 
          video-card__favourite" type="button" 
          aria-label="Добавить в Избранное видео: ${i}"
          data-video-id="${s}">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
            </button>
          </article>
      `,v});this.videoList.append(...r)}showSearchVideoList(e){console.log("videos=",e),new m().set();const t=new m().get(),r=e.items.map(({id:s,snippet:{title:i,channelTitle:n,thumbnails:h}})=>{var v;const d=document.createElement("li");return d.innerHTML=`
          <article class="video-card">
          <a class="video-card__link" href="./video.html?id=${s}">
            <img class="video-card__thumbnail" src="${(v=h.standard)==null?void 0:v.url}"
              alt="Превью к видео: ${i}">
            <div class="video-card__info">
              <h3 class="title video-card__title">${i}</h3>
              <p class="video-card__channel">${n}</p>
            </div>
          </a>
          <button class="favourite 
          ${t.includes(s)?"favourite_active":""} 
          video-card__favourite" type="button" 
          aria-label="Добавить в Избранное видео: ${i}"
          data-video-id="${s}">
            <svg class="video-card__favourite-icon" viewBox="0 0 20 20">
              <use xlink:href="./img/sprite.svg#star-fill" />
            </svg>
            </button>
          </article>
      `,d});this.videoList.append(...r)}}const S=a=>a.charAt(0).toUpperCase()+a.slice(1),b=a=>{const e=new Date(a);return new Intl.DateTimeFormat("ua-UA",{day:"numeric",month:"short",year:"numeric"}).format(e)};class I{constructor(){this.videoElem=document.querySelector(".video")}create({items:[e]}){console.log(e),this.showVideo(e)}showVideo({id:e,statistics:{viewCount:t},snippet:{title:r,channelTitle:s,publishedAt:i,description:n}}){const h=document.querySelector(".video__player");h.innerHTML=`
      <iframe class="video__iframe" src="https://www.youtube.com/embed/${e}"
        frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>
    `;const d=document.querySelector(".video__content");d.innerHTML=`
      <header class="video__header">
        <h2 class="title video__title">
        ${r===r.toLowerCase()?S(r):r}
        </h2>
        <div class="video__favourite">
          <span>В избранном</span>
          <svg class="video__favourite-icon" viewBox="0 0 20 20" role="img"
            aria-label="Кнопка для добавления видео в Избранное">
            <use xlink:href="./img/sprite.svg#star-orange" />
          </svg>
        </div>
      </header>
      <p class="video__channel">${s}</p>
      <p class="video__info">
        <span class="video__info-stat">${Number(t).toLocaleString()} просмотров </span>
        <span class="video__info-date">Дата премьеры: ${b(i)}</span>
      </p>
      <p class="video__description">${n||""}</p>
    `}}var c,u,g,_,p;class f{constructor(){l(this,c,"AIzaSyCJb41sNM0py5NxZQ4_A7z4d-DBik6hxrg");l(this,u,"https://www.googleapis.com/youtube/v3/videos");l(this,g,"https://www.googleapis.com/youtube/v3/search");l(this,_,"UA");l(this,p,12)}async getData(e){try{const t=await fetch(e);if(!t.ok)throw new Error("HTTP error: "+t.status);return await t.json()}catch(t){console.log(new Error(t))}}async getTrendingVideo(){const e=new URL(o(this,u));return e.searchParams.append("part","contentDetails,id,snippet"),e.searchParams.append("chart","mostPopular"),e.searchParams.append("regionCode",o(this,_)),e.searchParams.append("maxResults",o(this,p)),e.searchParams.append("key",o(this,c)),this.getData(e)}async getFavouriteVideos(){const e=new m().get();if(e.length===0)return{items:[]};const t=new URL(o(this,u));return t.searchParams.append("part","contentDetails,id,snippet"),t.searchParams.append("maxResults",o(this,p)),t.searchParams.append("id",e.join(",")),t.searchParams.append("key",o(this,c)),this.getData(t)}async getCurrentVideo(e){const t=new URL(o(this,u));return t.searchParams.append("part","snippet, statistics"),t.searchParams.append("id",e),t.searchParams.append("key",o(this,c)),this.getData(t)}async getVideoFromSearch(e){const t=new URL(o(this,g));return t.searchParams.append("q",e),t.searchParams.append("part","snippet"),t.searchParams.append("maxResults",o(this,p)),t.searchParams.append("key",o(this,c)),this.getData(t)}}c=new WeakMap,u=new WeakMap,g=new WeakMap,_=new WeakMap,p=new WeakMap;const P=async()=>{const a=location.pathname.split("/").pop(),e=new URLSearchParams(location.search),t=e.get("id"),r=e.get("q");if(a==="index.html"||a===""){const s=await new f().getTrendingVideo();new w().create().showVideoList(s)}else if(a==="video.html"&&t){const s=await new f().getCurrentVideo(t);new I().create(s)}else if(a==="favourite.html"){const s=await new f().getFavouriteVideos();new w().create().showVideoList(s)}else if(a==="search.html"&&r){console.log("Search",r);const s=document.querySelector(".video-list__title");s.textContent=`Поиск: ${r}`;const i=await new f().getVideoFromSearch(r);new w().create().showSearchVideoList(i)}};P();
