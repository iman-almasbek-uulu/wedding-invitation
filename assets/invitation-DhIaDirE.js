(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const j="Санжар",v="Касиет",S="2026-08-23",E="23",C="Август",q="16:00",N="Уйлонуу тойго",k="Чакыруу",A="Орозбек",F="Гульмира",L="ресторан",T="AZEM",I="Баялы Исакеева к., 32",M="Кочкор",D="https://2gis.kg/bishkek/geo/70000001079030752/75.752782,42.215872",_="Биз бул күндү өзгөчө кылгыбыз келет, андыктан сиздерди үйлөнүү үлпөтүбүздү биз менен бирге белгилөөгө чакырабыз!",B={ogImage:"assets/images/photo.jpg",couplePhoto:"assets/images/image.jpeg"},G="assets/music/music.mp3",r={groomName:j,brideName:v,weddingDate:S,weddingDay:E,weddingMonth:C,weddingTime:q,invitationTitle:N,invitationSubtitle:k,hostNameLeft:A,hostNameRight:F,venueName:L,venueDisplayName:T,venueStreet:I,venueCity:M,venueMapUrl:D,invitationText:_,photos:B,audioSrc:G},$=new Date(`${r.weddingDate}T${r.weddingTime}:00`).getTime();function z(){if(document.getElementById("wedding-fonts"))return;const e=document.createElement("link");e.id="wedding-fonts",e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Forum&display=swap",document.head.appendChild(e)}function O(){if(document.getElementById("wedding-json-overrides"))return;z();const e=document.createElement("style");e.id="wedding-json-overrides",e.textContent=`
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
  `,document.head.appendChild(e)}let h=!1,y=!1;function u(e,a,t,n){e.classList.add("wj-overlay-host");const i=e.tagName==="IMG"?e:e.querySelector("img");i&&i.classList.add("wj-hidden-img");const o=e.querySelector(".wj-generated-image");if(o){o.src=t,o.alt=n,o.className=`wj-generated-image ${a}`;return}const s=document.createElement("img");s.className=`wj-generated-image ${a}`,s.src=t,s.alt=n,e.appendChild(s)}function P(e,a,t,n){e.classList.add("wj-text-image-host");const{height:i}=e.getBoundingClientRect();i>0&&(e.style.height=`${i}px`,e.style.minHeight=`${i}px`);const o=e.querySelector(".wj-inline-image");if(o){o.src=t,o.alt=n,o.className=`wj-inline-image ${a}`;return}e.textContent="";const s=document.createElement("img");s.className=`wj-inline-image ${a}`,s.src=t,s.alt=n,e.appendChild(s)}function R(e,a){e.classList.add("wj-overlay-host");const t=e.tagName==="IMG"?e:e.querySelector("img");t&&t.classList.add("wj-hidden-img");let n=e.querySelector(".wj-heart-wrap");n||(n=document.createElement("div"),n.className="wj-heart-wrap",n.innerHTML='<div class="wj-heart"><span class="wj-heart-number"></span></div>',e.appendChild(n)),n.querySelector(".wj-heart-number").textContent=a}function H(){O(),document.querySelectorAll('[data-original*="_46.png"]').forEach(e=>{u(e,"wj-groom-label","generated/groom-name.png",r.groomName)}),document.querySelectorAll('[data-original*="_47.png"]').forEach(e=>{u(e,"wj-bride-label","generated/bride-name.png",r.brideName)}),document.querySelectorAll('[data-original*="_49.png"]').forEach(e=>{u(e,"wj-month-label","generated/wedding-month.png",r.weddingMonth)}),document.querySelectorAll('[data-original*="_51.png"]').forEach(e=>{u(e,"wj-venue-label","generated/venue-display-name.png",r.venueDisplayName)}),document.querySelectorAll('[data-original*="_66.png"]').forEach(e=>{u(e,"wj-time-label","generated/wedding-time.png",r.weddingTime)}),document.querySelectorAll('[data-original*="_54.png"]').forEach(e=>{const a=e.tagName==="IMG"?e.parentElement:e;a&&R(a,r.weddingDay)}),document.querySelectorAll('[data-original*="191712.png"]').forEach(e=>{u(e,"wj-heading-image","generated/invitation-title.png",`${r.invitationTitle} ${r.invitationSubtitle}`)}),document.querySelectorAll('[data-original*="_52.png"]').forEach(e=>{u(e,"wj-host-left-label","generated/host-left-name.png",r.hostNameLeft)}),document.querySelectorAll('[data-original*="_69.png"]').forEach(e=>{u(e,"wj-host-right-label","generated/host-right-name.png",r.hostNameRight)})}function W(){const e=Number.parseInt(r.weddingDay,10),a={"1775311028902":String(e-2),"1775311072793000005":String(e-1),"1775311083030000006":String(e+1),"1775311058017000004":String(e+2)};Object.entries(a).forEach(([t,n])=>{const i=document.querySelector(`[data-elem-id="${t}"] .tn-atom`);i&&(i.textContent=n)}),document.querySelectorAll(".tn-atom").forEach(t=>{if(t.querySelector(".wj-inline-image")||t.childElementCount!==0)return;const n=t.textContent.trim();if(n.includes("Биз бул күндү өзгөчө")||n.includes("Ð‘Ð¸Ð· Ð±ÑƒÐ»")){P(t,"wj-invitation-image","generated/invitation-text.png",r.invitationText);return}if(n==="Юнусалиев к., 33"||n===r.venueStreet||n.includes("к.,")||n.includes("Ðº.,")){t.textContent=r.venueStreet,t.style.color="#54332a",t.style.fontFamily="'Forum', Georgia, serif";return}if(["ресторан","рестораны","РЕСТОРАНЫ",r.venueName].includes(n)||n.includes("Ñ€ÐµÑÑ‚Ð¾Ñ€")){t.textContent=r.venueName,t.style.color="#54332a",t.style.fontFamily="'Forum', Georgia, serif";return}(["БИШКЕК ШААРЫ",r.venueCity].includes(n)||n.includes("Ð‘Ð˜Ð¨ÐšÐ•Ðš"))&&(t.textContent=r.venueCity,t.style.color="#54332a",t.style.fontFamily="'Forum', Georgia, serif",t.style.fontSize="20px",t.style.fontWeight="400",t.style.lineHeight="1.2")})}function U(){const e=document.getElementById("rec2411060293");if(!e)return;const a=(l,m)=>{let d=document.querySelector(".wj-modal");d||(d=document.createElement("div"),d.className="wj-modal",d.innerHTML=`
        <div class="wj-modal-box" role="dialog" aria-modal="true">
          <p class="wj-modal-title"></p>
          <p class="wj-modal-text"></p>
          <button type="button" class="wj-modal-close">Жабуу</button>
        </div>
      `,document.body.appendChild(d),d.querySelector(".wj-modal-close").addEventListener("click",()=>d.remove()),d.addEventListener("click",g=>{g.target===d&&d.remove()})),d.querySelector(".wj-modal-title").textContent=l,d.querySelector(".wj-modal-text").textContent=m},t=()=>{const l=[...e.querySelectorAll("input, textarea, select")].filter(c=>!c.closest(".tn-atom__inputs-wrapp")).filter(c=>!c.disabled&&c.type!=="hidden"&&c.type!=="submit"&&c.type!=="button"),m=l.filter(c=>c.type==="radio"),d=m.length===0||m.some(c=>c.checked),g=l.filter(c=>["text","search","email","tel",""].includes(c.type)||c.tagName==="TEXTAREA"),x=g.length===0||g.some(c=>c.value.trim().length>0);return d&&x},n=()=>{if(!t()){a("Толтуруңуз","Сураныч, катышууңузду белгилеп, атыңызды жазыңыз.");return}a("Жөнөтүлдү","Рахмат, анкета ийгиликтүү кабыл алынды.")},i=e.querySelector(".t396__artboard")||e;let o=e.querySelector(".wj-fake-submit");o||(o=document.createElement("button"),o.type="button",o.className="wj-fake-submit",o.textContent="Жиберүү",i.appendChild(o)),o.dataset.wjClickFallback!=="ready"&&(o.dataset.wjClickFallback="ready",o.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),n()},!0));const s=e.querySelector('[data-elem-type="form"]');s&&(s.setAttribute("data-field-buttontitle-value","Жиберүү"),s.setAttribute("data-success-message","Рахмат, жообуңуз жөнөтүлдү.")),e.querySelectorAll('.t-submit, button[type="submit"], input[type="submit"]').forEach(l=>{"value"in l&&(l.value="Жиберүү"),l.textContent="Жиберүү",l.dataset.wjClickFallback!=="ready"&&(l.dataset.wjClickFallback="ready",l.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),n()},!0))}),e.querySelectorAll("form").forEach(l=>{l.dataset.wjSubmitFallback!=="ready"&&(l.dataset.wjSubmitFallback="ready",l.addEventListener("submit",m=>{m.preventDefault(),m.stopPropagation(),n()},!0))})}function b(){document.querySelectorAll('a[href*="2gis"], a[href*="geo/700000"]').forEach(e=>{e.href=r.venueMapUrl,e.target="_blank",e.rel="noopener"})}function p(){const e=document.getElementById("days"),a=document.getElementById("hours"),t=document.getElementById("minutes"),n=document.getElementById("seconds");if(!e&&!a&&!t&&!n)return;const i=$-Date.now(),o=Math.max(i,0),s={days:String(Math.floor(o/(1e3*60*60*24))),hours:String(Math.floor(o%(1e3*60*60*24)/(1e3*60*60))),minutes:String(Math.floor(o%(1e3*60*60)/(1e3*60))),seconds:String(Math.floor(o%(1e3*60)/1e3))};h=!0,e&&e.textContent!==s.days&&(e.textContent=s.days),a&&a.textContent!==s.hours&&(a.textContent=s.hours),t&&t.textContent!==s.minutes&&(t.textContent=s.minutes),n&&n.textContent!==s.seconds&&(n.textContent=s.seconds),h=!1}function Y(){if(y)return;const e=["days","hours","minutes","seconds"].map(t=>document.getElementById(t)).filter(Boolean);if(!e.length)return;const a=new MutationObserver(()=>{h||p()});e.forEach(t=>a.observe(t,{childList:!0,characterData:!0,subtree:!0})),y=!0}function f(){var i;const e=`${r.groomName} & ${r.brideName}`;document.title=`${e} | сайт-приглашение`;const a=document.querySelector('meta[property="og:title"]');a&&a.setAttribute("content",`${e} | сайт-приглашение`);const t=document.querySelector('meta[property="og:image"]');t&&t.setAttribute("content",r.photos.ogImage),W(),U(),b(),document.querySelectorAll('img[src*="WhatsApp_Image"]').forEach(o=>{o.src=r.photos.couplePhoto}),document.querySelectorAll('[data-original*="WhatsApp_Image"]').forEach(o=>{o.setAttribute("data-original",r.photos.couplePhoto)});const n=document.querySelector("audio source");n&&(n.src=r.audioSrc,(i=n.parentElement)==null||i.load()),H(),p(),Y()}function w(){f(),setTimeout(f,500),setTimeout(f,1500),setTimeout(b,2500),setTimeout(p,2500),setInterval(p,250)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();
