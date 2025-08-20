import{a as g,S as b,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();g.defaults.baseURL="https://pixabay.com";async function h(r,e=1){return await g.get("/api/",{params:{key:"51813911-adef45491f9b881200172b027",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}}).then(o=>o.data).catch(function(o){console.log(o)})}const y=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".js-load-bt");function v(r){const e=S(r);y.insertAdjacentHTML("beforeend",e),w.refresh()}function S(r){return r.map(q).join("")}function q({likes:r,views:e,comments:o,downloads:s,largeImageURL:t,webformatURL:a,tags:l},M){return`<li class="gallery-item"><a class="gallery-link" href="${t}">
          <img class="image-item" src="${a}" alt="${l}" /></a>
          <div class="text-item">
            <div class="single-text">
              <h5>Likes</h5>
              <p>${r}</p>
            </div>
            <div class="single-text">
              <h5>Views</h5>
              <p>${e}</p>
            </div>
            <div class="single-text">
              <h5>Comments</h5>
              <p>${o}</p>
            </div>
            <div class="single-text">
              <h5>Downloads</h5>
              <p>${s}</p>
            </div>
          </div>
        </li>`}let w=new b(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});function x(){y.innerHTML=""}function L(){f.style.display="flex"}function i(){f.style.display="none"}function E(){p.classList.remove("hide")}function c(){p.classList.add("hide")}const P=document.querySelector(".js-form"),B=document.querySelector(".js-load-bt");let u=1,d="",m=0;document.addEventListener("DOMContentLoaded",r=>{i(),c()});P.addEventListener("submit",async r=>{if(r.preventDefault(),u=1,c(),r.currentTarget.elements["search-text"].value.trim()!=""){d=r.currentTarget.elements["search-text"].value.trim(),r.currentTarget.elements["search-text"].value="",x(),L();try{const e=await h(d);if(e.hits.length!=0){m=Math.ceil(e.totalHits/15),v(e.hits),i();const o=document.querySelector(".gallery-item");if(o){const{height:s}=o.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}m<2?n.info({title:"Message",message:"We`re sorry, but you`ve reached the end of search results."}):E()}else n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i()}catch(e){i(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(e)}}});B.addEventListener("click",async r=>{u+=1,L();try{const e=await h(d,u);if(e.hits.length!=0){v(e.hits),i();const o=document.querySelector(".gallery-item");if(o){const{height:s}=o.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}m<u+1&&(c(),n.info({title:"Message",message:"We`re sorry, but you`ve reached the end of search results."}))}else n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c(),i()}catch(e){i(),c(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(e)}});
//# sourceMappingURL=index.js.map
