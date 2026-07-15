(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const C="Все данные здесь можно менять! (Формат JSON требует кавычек)",q="Санжар",N="Касиет",k="2026-08-23",A="23",F="Август",T="16:00",L="Уйлонуу тойго",$="Чакыруу",M="Орозбек",I="Гульмира",D="ресторан",_="AZEM",P="Баялы Исакеева к., 32",B="Кочкор",G="https://2gis.kg/bishkek/geo/70000001079030752/75.752782,42.215872",z="Биз бул күндү өзгөчө кылгыбыз келет, андыктан сиздерди үйлөнүү үлпөтүбүздү биз менен бирге белгилөөгө чакырабыз!",O=[{label:"Элдос",phone:"+996 700 000 001",whatsapp:"996700000001"}],R={ogImage:"assets/images/photo.jpg",couplePhoto:"assets/images/image.jpeg"},U="assets/music/music.mp3",j={_comment:C,groomName:q,brideName:N,weddingDate:k,weddingDay:A,weddingMonth:F,weddingTime:T,invitationTitle:L,invitationSubtitle:$,hostNameLeft:M,hostNameRight:I,venueName:D,venueDisplayName:_,venueStreet:P,venueCity:B,venueMapUrl:G,invitationText:z,contacts:O,photos:R,audioSrc:U};let i=j,v=new Date(`${i.weddingDate}T${i.weddingTime||"00:00"}:00`).getTime();function H(){const e=new URLSearchParams(window.location.search).get("client");return e&&/^[a-z0-9-]+$/i.test(e)?e:null}async function W(){const e=H();if(!e)return;const a=await fetch(`clients/${e}/wedding.json`,{cache:"no-store"});if(!a.ok)throw new Error(`Не удалось загрузить данные клиента: ${a.status}`);i={...j,...await a.json(),clientSlug:e},v=new Date(`${i.weddingDate}T${i.weddingTime||"00:00"}:00`).getTime()}function m(e){return i.clientSlug?`clients/${i.clientSlug}/generated/${e}`:`generated/${e}`}function Y(){if(document.getElementById("wedding-fonts"))return;const e=document.createElement("link");e.id="wedding-fonts",e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Forum&display=swap",document.head.appendChild(e)}function X(){if(document.getElementById("wedding-json-overrides"))return;Y();const e=document.createElement("style");e.id="wedding-json-overrides",e.textContent=`
    .wj-overlay-host {
      position: relative !important;
      background-image: none !important;
      overflow: visible !important;
    }

    .wj-overlay-host > img,
    .wj-overlay-host.t-bgimg {
      color: transparent;
    }

    .wj-hidden-img {
      opacity: 0 !important;
    }

    .wj-generated-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
      overflow: visible !important;
    }

    .wj-text-image-host {
      position: relative !important;
      color: transparent !important;
    }

    .wj-inline-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
    }

    .wj-city-image {
      object-fit: contain;
    }

    .wj-groom-label {
      inset: -44% -38% -44% 8% !important;
      width: 130%;
      height: 192%;
    }

    .wj-bride-label {
      inset: -44% -30% -44% -28% !important;
      width: 128%;
      height: 192%;
      transform: translateY(-52px);
    }

    .wj-host-left-label {
      inset: -58% -34% -50% 6% !important;
      width: 128%;
      height: 214%;
    }

    .wj-host-right-label {
      inset: -58% 22% -50% -38% !important;
      width: 128%;
      height: 214%;
    }

    .wj-heading-image {
      transform: translateY(-13%) scale(2.08);
      transform-origin: center;
    }

    .wj-heart-wrap {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .wj-heart {
      position: relative;
      width: 66%;
      aspect-ratio: 1;
      transform: rotate(-45deg);
      background: #54332a;
      margin-top: -8%;
    }

    .wj-heart::before,
    .wj-heart::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #54332a;
    }

    .wj-heart::before {
      top: -50%;
      left: 0;
    }

    .wj-heart::after {
      top: 0;
      left: 50%;
    }

    .wj-heart-number {
      position: absolute;
      inset: -35%;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(45deg) translateY(-7%);
      color: #fff;
      font-family: 'Forum', Georgia, serif;
      font-size: clamp(28px, 9vw, 58px);
      font-weight: 700;
      line-height: 1;
    }

    #rec2411060293 .tn-elem[data-elem-type="form"] {
      margin-top: 0;
    }

    #rec2411060293 .t-submit,
    #rec2411060293 button[type="submit"],
    #rec2411060293 input[type="submit"] {
      display: none !important;
      pointer-events: none !important;
    }

    #rec2411060293 .t-form__successbox {
      color: #54332a !important;
      font-family: 'Forum', Georgia, serif !important;
      font-size: 22px !important;
      line-height: 1.25 !important;
      text-align: center !important;
    }

    #rec2411060293 .wj-form-notice {
      display: none !important;
      margin-top: 16px;
      color: #54332a;
      font-family: 'Forum', Georgia, serif;
      font-size: 22px;
      font-weight: 700;
      line-height: 1.25;
      text-align: center;
    }

    #rec2411060293 .wj-fake-submit {
      position: absolute;
      left: 50%;
      bottom: 26px;
      z-index: 30;
      width: min(286px, 72%);
      height: 54px;
      transform: translateX(-50%);
      border: 1px solid #54332a;
      border-radius: 10px;
      background: transparent;
      color: #54332a;
      font-family: 'Forum', Georgia, serif;
      font-size: 17px;
      font-weight: 700;
      line-height: 1;
      cursor: pointer;
    }

    #rec2411060293 .wj-fake-submit:active {
      background: rgba(84, 51, 42, 0.08);
    }

    .wj-modal {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      background: rgba(48, 29, 24, 0.28);
    }

    .wj-modal-box {
      width: min(320px, 88vw);
      border: 1px solid rgba(84, 51, 42, 0.25);
      border-radius: 14px;
      background: #fffaf7;
      box-shadow: 0 18px 60px rgba(48, 29, 24, 0.25);
      padding: 26px 22px 22px;
      color: #54332a;
      font-family: 'Forum', Georgia, serif;
      text-align: center;
    }

    .wj-modal-title {
      margin: 0 0 10px;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.1;
    }

    .wj-modal-text {
      margin: 0 0 20px;
      font-size: 20px;
      line-height: 1.3;
    }

    .wj-modal-close {
      min-width: 130px;
      height: 42px;
      border: 1px solid #54332a;
      border-radius: 8px;
      background: #54332a;
      color: #fffaf7;
      font-family: 'Forum', Georgia, serif;
      font-size: 18px;
      cursor: pointer;
    }
  `,document.head.appendChild(e)}let w=!1,b=!1;function g(e,a,t,o){e.classList.add("wj-overlay-host");const r=e.tagName==="IMG"?e:e.querySelector("img");r&&r.classList.add("wj-hidden-img");const n=e.querySelector(".wj-generated-image");if(n){n.src=t,n.alt=o,n.className=`wj-generated-image ${a}`;return}const s=document.createElement("img");s.className=`wj-generated-image ${a}`,s.src=t,s.alt=o,e.appendChild(s)}function J(e,a,t,o){e.classList.add("wj-text-image-host");const{height:r}=e.getBoundingClientRect();r>0&&(e.style.height=`${r}px`,e.style.minHeight=`${r}px`);const n=e.querySelector(".wj-inline-image");if(n){n.src=t,n.alt=o,n.className=`wj-inline-image ${a}`;return}e.textContent="";const s=document.createElement("img");s.className=`wj-inline-image ${a}`,s.src=t,s.alt=o,e.appendChild(s)}function K(e,a){e.classList.add("wj-overlay-host");const t=e.tagName==="IMG"?e:e.querySelector("img");t&&t.classList.add("wj-hidden-img");let o=e.querySelector(".wj-heart-wrap");o||(o=document.createElement("div"),o.className="wj-heart-wrap",o.innerHTML='<div class="wj-heart"><span class="wj-heart-number"></span></div>',e.appendChild(o)),o.querySelector(".wj-heart-number").textContent=a}function Z(){X(),document.querySelectorAll('[data-original*="_46.png"]').forEach(e=>{g(e,"wj-groom-label",m("groom-name.png"),i.groomName)}),document.querySelectorAll('[data-original*="_47.png"]').forEach(e=>{g(e,"wj-bride-label",m("bride-name.png"),i.brideName)}),document.querySelectorAll('[data-original*="_49.png"]').forEach(e=>{g(e,"wj-month-label",m("wedding-month.png"),i.weddingMonth)}),document.querySelectorAll('[data-original*="_51.png"]').forEach(e=>{g(e,"wj-venue-label",m("venue-display-name.png"),i.venueDisplayName)}),document.querySelectorAll('[data-original*="_66.png"]').forEach(e=>{g(e,"wj-time-label",m("wedding-time.png"),i.weddingTime)}),document.querySelectorAll('[data-original*="_54.png"]').forEach(e=>{const a=e.tagName==="IMG"?e.parentElement:e;a&&K(a,i.weddingDay)}),document.querySelectorAll('[data-original*="191712.png"]').forEach(e=>{g(e,"wj-heading-image",m("invitation-title.png"),`${i.invitationTitle} ${i.invitationSubtitle}`)}),document.querySelectorAll('[data-original*="_52.png"]').forEach(e=>{g(e,"wj-host-left-label",m("host-left-name.png"),i.hostNameLeft)}),document.querySelectorAll('[data-original*="_69.png"]').forEach(e=>{g(e,"wj-host-right-label",m("host-right-name.png"),i.hostNameRight)})}function Q(){const e=Number.parseInt(i.weddingDay,10),a={"1775311028902":String(e-2),"1775311072793000005":String(e-1),"1775311083030000006":String(e+1),"1775311058017000004":String(e+2)};Object.entries(a).forEach(([t,o])=>{const r=document.querySelector(`[data-elem-id="${t}"] .tn-atom`);r&&(r.textContent=o)}),document.querySelectorAll(".tn-atom").forEach(t=>{if(t.querySelector(".wj-inline-image")||t.childElementCount!==0)return;const o=t.textContent.trim();if(o.includes("Биз бул күндү өзгөчө")||o.includes("Ð‘Ð¸Ð· Ð±ÑƒÐ»")){J(t,"wj-invitation-image",m("invitation-text.png"),i.invitationText);return}if(o==="Юнусалиев к., 33"||o===i.venueStreet||o.includes("к.,")||o.includes("Ðº.,")){t.textContent=i.venueStreet,t.style.color="#54332a",t.style.fontFamily="'Forum', Georgia, serif";return}if(["ресторан","рестораны","РЕСТОРАНЫ",i.venueName].includes(o)||o.includes("Ñ€ÐµÑÑ‚Ð¾Ñ€")){t.textContent=i.venueName,t.style.color="#54332a",t.style.fontFamily="'Forum', Georgia, serif";return}(["БИШКЕК ШААРЫ",i.venueCity].includes(o)||o.includes("Ð‘Ð˜Ð¨ÐšÐ•Ðš"))&&(t.textContent=i.venueCity,t.style.color="#54332a",t.style.fontFamily="'Forum', Georgia, serif",t.style.fontSize="20px",t.style.fontWeight="400",t.style.lineHeight="1.2")})}function V(){const e=document.getElementById("rec2411060293");if(!e)return;const a=(l,u)=>{let d=document.querySelector(".wj-modal");d||(d=document.createElement("div"),d.className="wj-modal",d.innerHTML=`
        <div class="wj-modal-box" role="dialog" aria-modal="true">
          <p class="wj-modal-title"></p>
          <p class="wj-modal-text"></p>
          <button type="button" class="wj-modal-close">Жабуу</button>
        </div>
      `,document.body.appendChild(d),d.querySelector(".wj-modal-close").addEventListener("click",()=>d.remove()),d.addEventListener("click",f=>{f.target===d&&d.remove()})),d.querySelector(".wj-modal-title").textContent=l,d.querySelector(".wj-modal-text").textContent=u},t=()=>{const l=[...e.querySelectorAll("input, textarea, select")].filter(c=>!c.closest(".tn-atom__inputs-wrapp")).filter(c=>!c.disabled&&c.type!=="hidden"&&c.type!=="submit"&&c.type!=="button"),u=l.filter(c=>c.type==="radio"),d=u.length===0||u.some(c=>c.checked),f=l.filter(c=>["text","search","email","tel",""].includes(c.type)||c.tagName==="TEXTAREA"),E=f.length===0||f.some(c=>c.value.trim().length>0);return d&&E},o=()=>{if(!t()){a("Толтуруңуз","Сураныч, катышууңузду белгилеп, атыңызды жазыңыз.");return}a("Жөнөтүлдү","Рахмат, анкета ийгиликтүү кабыл алынды.")},r=e.querySelector(".t396__artboard")||e;let n=e.querySelector(".wj-fake-submit");n||(n=document.createElement("button"),n.type="button",n.className="wj-fake-submit",n.textContent="Жиберүү",r.appendChild(n)),n.dataset.wjClickFallback!=="ready"&&(n.dataset.wjClickFallback="ready",n.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),o()},!0));const s=e.querySelector('[data-elem-type="form"]');s&&(s.setAttribute("data-field-buttontitle-value","Жиберүү"),s.setAttribute("data-success-message","Рахмат, жообуңуз жөнөтүлдү.")),e.querySelectorAll('.t-submit, button[type="submit"], input[type="submit"]').forEach(l=>{"value"in l&&(l.value="Жиберүү"),l.textContent="Жиберүү",l.dataset.wjClickFallback!=="ready"&&(l.dataset.wjClickFallback="ready",l.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),o()},!0))}),e.querySelectorAll("form").forEach(l=>{l.dataset.wjSubmitFallback!=="ready"&&(l.dataset.wjSubmitFallback="ready",l.addEventListener("submit",u=>{u.preventDefault(),u.stopPropagation(),o()},!0))})}function S(){document.querySelectorAll('a[href*="2gis"], a[href*="geo/700000"]').forEach(e=>{e.href=i.venueMapUrl,e.target="_blank",e.rel="noopener"})}function h(){const e=document.getElementById("days"),a=document.getElementById("hours"),t=document.getElementById("minutes"),o=document.getElementById("seconds");if(!e&&!a&&!t&&!o)return;const r=v-Date.now(),n=Math.max(r,0),s={days:String(Math.floor(n/(1e3*60*60*24))),hours:String(Math.floor(n%(1e3*60*60*24)/(1e3*60*60))),minutes:String(Math.floor(n%(1e3*60*60)/(1e3*60))),seconds:String(Math.floor(n%(1e3*60)/1e3))};w=!0,e&&e.textContent!==s.days&&(e.textContent=s.days),a&&a.textContent!==s.hours&&(a.textContent=s.hours),t&&t.textContent!==s.minutes&&(t.textContent=s.minutes),o&&o.textContent!==s.seconds&&(o.textContent=s.seconds),w=!1}function ee(){if(b)return;const e=["days","hours","minutes","seconds"].map(t=>document.getElementById(t)).filter(Boolean);if(!e.length)return;const a=new MutationObserver(()=>{w||h()});e.forEach(t=>a.observe(t,{childList:!0,characterData:!0,subtree:!0})),b=!0}function y(){var n;const e=`${i.groomName} & ${i.brideName}`;document.title=`${e} | сайт-приглашение`;const a=document.querySelector('meta[property="og:title"]');a&&a.setAttribute("content",`${e} | сайт-приглашение`);const t=document.querySelector('meta[property="og:image"]');t&&t.setAttribute("content",i.photos.ogImage),Q(),V(),S(),["tild3732-3763-4834-a132-633765376635/photo.png","tild3436-3236-4432-a261-643032306231/photo.png"].forEach(s=>{document.querySelectorAll(`img[src*="${s}"]`).forEach(p=>{p.src=i.photos.couplePhoto}),document.querySelectorAll(`[data-original*="${s}"]`).forEach(p=>{p.setAttribute("data-original",i.photos.couplePhoto)})}),document.querySelectorAll('img[src*="WhatsApp_Image"]').forEach(s=>{s.src=i.photos.couplePhoto}),document.querySelectorAll('[data-original*="WhatsApp_Image"]').forEach(s=>{s.setAttribute("data-original",i.photos.couplePhoto)});const r=document.querySelector("audio source");r&&(r.src=i.audioSrc,(n=r.parentElement)==null||n.load()),Z(),h(),ee()}async function x(){try{await W()}catch(e){console.error(e)}y(),setTimeout(y,500),setTimeout(y,1500),setTimeout(S,2500),setTimeout(h,2500),setInterval(h,250)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x();
