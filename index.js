import{a as g,S as w,i}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();g.defaults.baseURL="https://pixabay.com";async function h(t,r=1){return await g.get("/api/",{params:{key:"51813911-adef45491f9b881200172b027",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}}).then(s=>s.data).catch(function(s){console.log(s)})}const f=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".js-load-bt");function v(t){const r=E(t);f.insertAdjacentHTML("beforeend",r),P.refresh()}function E(t){return t.map(S).join("")}function S({likes:t,views:r,comments:s,downloads:a,largeImageURL:e,webformatURL:o,tags:n},$){return`<li class="gallery-item"><a class="gallery-link" href="${e}">
          <img class="image-item" src="${o}" alt="${n}" /></a>
          <div class="text-item">
            <div class="single-text">
              <h5>Likes</h5>
              <p>${t}</p>
            </div>
            <div class="single-text">
              <h5>Views</h5>
              <p>${r}</p>
            </div>
            <div class="single-text">
              <h5>Comments</h5>
              <p>${s}</p>
            </div>
            <div class="single-text">
              <h5>Downloads</h5>
              <p>${a}</p>
            </div>
          </div>
        </li>`}let P=new w(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});function x(){f.innerHTML=""}function L(){y.style.display="flex"}function c(){y.style.display="none"}function b(){p.classList.remove("hide")}function m(){p.classList.add("hide")}const q=document.querySelector(".js-form"),M=document.querySelector(".js-load-bt");let l=1,u="",d=0;document.addEventListener("DOMContentLoaded",()=>{c(),m()});q.addEventListener("submit",async t=>{t.preventDefault(),l=1,m();const r=t.currentTarget.elements["search-text"],s=r.value.trim();if(s===""){i.warning({title:"Warning",message:"Please enter a search term before submitting."});return}u=s,x(),L();try{const a=await h(u,l);c(),a.hits.length>0?(d=Math.ceil(a.totalHits/15),v(a.hits),d>1?b():i.info({title:"Message",message:"We're sorry, but you've reached the end of search results."})):i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(a){c(),i.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(a)}finally{r.value=""}});M.addEventListener("click",async()=>{l+=1,m(),L();try{const t=await h(u,l);if(c(),t.hits.length>0){v(t.hits);const r=document.querySelector(".gallery-item");if(r){const{height:s}=r.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}l<d?b():i.info({title:"Message",message:"We're sorry, but you've reached the end of search results."})}else i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(t){c(),i.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(t)}});
//# sourceMappingURL=index.js.map
