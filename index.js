import{a as u,S as f,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();u.defaults.baseURL="https://pixabay.com";function p(r){return u.get("/api/",{params:{key:"51813911-adef45491f9b881200172b027",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data).catch(function(t){console.log(t)})}const d=document.querySelector(".gallery"),m=document.querySelector(".loader");function h(r){const t=y(r);d.innerHTML=t,v.refresh()}function y(r){return r.map(g).join("")}function g({likes:r,views:t,comments:a,downloads:s,largeImageURL:e,webformatURL:i,tags:o},b){return`<li class="gallery-item"><a class="gallery-link" href="${e}">
          <img class="image-item" src="${i}" alt="${o}" /></a>
          <div class="text-item">
            <div class="single-text">
              <h5>Likes</h5>
              <p>${r}</p>
            </div>
            <div class="single-text">
              <h5>Views</h5>
              <p>${t}</p>
            </div>
            <div class="single-text">
              <h5>Comments</h5>
              <p>${a}</p>
            </div>
            <div class="single-text">
              <h5>Downloads</h5>
              <p>${s}</p>
            </div>
          </div>
        </li>`}let v=new f(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});function L(){d.innerHTML=""}function x(){m.style.display="flex"}function n(){m.style.display="none"}const c=document.querySelector(".js-form");document.addEventListener("DOMContentLoaded",r=>{n()});c.addEventListener("submit",r=>{r.preventDefault(),r.currentTarget.elements["search-text"].value.trim()!=""&&(c.insertAdjacentHTML,L(),x(),p(r.currentTarget.elements["search-text"].value.trim()).then(t=>{t.hits.length!=0?(h(t.hits),n()):(l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n())}).catch(t=>{n(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(t)}))});
//# sourceMappingURL=index.js.map
