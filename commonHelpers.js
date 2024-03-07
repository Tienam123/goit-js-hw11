var y=Object.defineProperty;var b=(t,e,r)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var h=(t,e,r)=>(b(t,typeof e!="symbol"?e+"":e,r),r);import{a as w,i as l,S as L}from"./assets/vendor-b0e94dfd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))g(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&g(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function p(t){return t.map(e=>`
  <li class="gallery-item">
   <a href="${e.largeImageURL}">
   <img src="${e.webformatURL}"
        loading="lazy"
        alt="${e.tags}"
            >
       <ul class="gallery__description-list gallery-description-list">
         <li class="gallery-description-list__item">
           <h3>Likes</h3>
           <p>${e.likes}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Views</h3>
           <p>${e.views}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Comments</h3>
           <p>${e.comments}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Downloads</h3>
           <p>${e.downloads}</p>
         </li>
       </ul>
       </a>
  </li>`).join("")}const c=class c{static show(){c.spinner.classList.remove("hidden")}static hide(){c.spinner.classList.add("hidden")}};h(c,"spinner",document.querySelector(".loader-backdrop"));let u=c;const i=class i{constructor(){}static show(){i.button.classList.remove("hidden")}static hide(){i.button.classList.add("hidden")}static disabled(){i.button.disabled=!0,i.button.classList.add("load-more_disabled")}static activate(){i.button.classList.remove("load-more_disabled"),i.button.disabled=!1}};h(i,"button",document.querySelector('button[data-load="load-more"]'));let a=i;const C="41512134-7ce1694d07a59eb7d39c787c8";class q{constructor(){this.searchQuery="",this.page=1}async fetchArticles(){const e=`https://pixabay.com/api/?key=${C}&q=${this.searchQuery}&image_type=photo&orientation=horisontal&safesearch=true&per_page=15&page=${this.page}`;try{const r=await w.get(e);return this.increasePage(),r.data}catch(r){l.show({message:r.message,backgroundColor:"#fc3d03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3})}}increasePage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}const n={searchForm:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector('button[data-load="load-more"]')},d=new q;n.searchForm.addEventListener("submit",v);n.loadMoreBtn.addEventListener("click",P);let m=new L(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});async function v(t){t.preventDefault();let e=t.target.elements.query.value.trim();if(u.show(),e===""){l.show({message:"Поле не может быть пустым",backgroundColor:"#fc3d03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3});return}e.length>100&&l.show({message:"Поле не может быть больше 100 символов",backgroundColor:"#fc3d03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3}),e=e.split(" ").join("+"),d.query=e,d.resetPage(),n.gallery.innerHTML="";const r=await d.fetchArticles();r.hits.length?(u.hide(),a.show(),n.gallery.insertAdjacentHTML("afterbegin",p(r.hits)),m.refresh()):l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fc3d03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3})}async function P(){a.disabled();const t=await d.fetchArticles();if(t.hits.length===0){a.hide(),l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fc3d03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3});return}n.gallery.insertAdjacentHTML("beforeend",p(t.hits)),m.refresh(),a.activate()}
//# sourceMappingURL=commonHelpers.js.map
