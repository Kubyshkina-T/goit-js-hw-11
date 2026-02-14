import{a as d,S as f,i as c}from"./assets/vendor-DQiTczw4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="54645920-7a588b5965485e203aa072a25",m="https://pixabay.com/api/";function h(o){return d.get(m,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector(".gallery"),n=document.querySelector(".loader");function y(){l.innerHTML=""}function g(){n==null||n.classList.remove("is-hidden")}const b=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const s=o.map(t=>`
<a class="gallery-link" href="${t.largeImageURL}">
<div class="photo-card">
<img class="photo-card-img" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
<div class="info">
<p class="info-item"><b>Likes</b><span>${t.likes}</span></p>
<p class="info-item"><b>Views</b><span>${t.views}</span></p>
<p class="info-item"><b>Comments</b><span>${t.comments}</span></p>
<p class="info-item"><b>Downloads</b><span>${t.downloads}</span></p>
</div>
</div>
</a>`).join("");l.insertAdjacentHTML("beforeend",s),b.refresh()}function v(){n==null||n.classList.add("is-hidden")}const u=document.querySelector(".form"),S=document.querySelector('input[name="search-text"]');u.addEventListener("submit",w);function w(o){o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();S.value,y(),g(),h(s).then(t=>{if(!t.hits.length){c.info({message:`Sorry, there are no images matching your search query. Please try again!
    `});return}L(t.hits),u.reset()}).catch(t=>{console.log("CATCH ERROR:",t),c.error({message:"Something went wrong 😢"})}).finally(()=>{v()})}
//# sourceMappingURL=index.js.map
