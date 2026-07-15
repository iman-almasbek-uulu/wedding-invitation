(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const E="Все данные здесь можно менять! (Формат JSON требует кавычек)",C="Санжар",q="Касиет",N="2026-08-23",k="23",A="Август",F="16:00",T="Уйлонуу тойго",L="Чакыруу",I="Орозбек",$="Гульмира",D="ресторан",M="AZEM",_="Баялы Исакеева к., 32",B="Кочкор",G="https://2gis.kg/bishkek/geo/70000001079030752/75.752782,42.215872",z="Биз бул күндү өзгөчө кылгыбыз келет, андыктан сиздерди үйлөнүү үлпөтүбүздү биз менен бирге белгилөөгө чакырабыз!",O=[{label:"Элдос",phone:"+996 700 000 001",whatsapp:"996700000001"}],P={ogImage:"assets/images/photo.jpg",couplePhoto:"assets/images/image.jpeg"},R="assets/music/music.mp3",x={_comment:E,groomName:C,brideName:q,weddingDate:N,weddingDay:k,weddingMonth:A,weddingTime:F,invitationTitle:T,invitationSubtitle:L,hostNameLeft:I,hostNameRight:$,venueName:D,venueDisplayName:M,venueStreet:_,venueCity:B,venueMapUrl:G,invitationText:z,contacts:O,photos:P,audioSrc:R};let r=x,j=new Date(`${r.weddingDate}T${r.weddingTime||"00:00"}:00`).getTime();function U(){const e=new URLSearchParams(window.location.search).get("client");return e&&/^[a-z0-9-]+$/i.test(e)?e:null}async function H(){const e=U();if(!e)return;const i=await fetch(`clients/${e}/wedding.json`,{cache:"no-store"});if(!i.ok)throw new Error(`Не удалось загрузить данные клиента: ${i.status}`);r={...x,...await i.json(),clientSlug:e},j=new Date(`${r.weddingDate}T${r.weddingTime||"00:00"}:00`).getTime()}function u(e){return r.clientSlug?`clients/${r.clientSlug}/generated/${e}`:`generated/${e}`}function W(){if(document.getElementById("wedding-fonts"))return;const e=document.createElement("link");e.id="wedding-fonts",e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Forum&display=swap",document.head.appendChild(e)}function Y(){if(document.getElementById("wedding-json-overrides"))return;W();const e=document.createElement("style");e.id="wedding-json-overrides",e.textContent=`
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
  `,document.head.appendChild(e)}let y=!1,w=!1;function g(e,i,t,n){e.classList.add("wj-overlay-host");const a=e.tagName==="IMG"?e:e.querySelector("img");a&&a.classList.add("wj-hidden-img");const o=e.querySelector(".wj-generated-image");if(o){o.src=t,o.alt=n,o.className=`wj-generated-image ${i}`;return}const s=document.createElement("img");s.className=`wj-generated-image ${i}`,s.src=t,s.alt=n,e.appendChild(s)}function X(e,i,t,n){e.classList.add("wj-text-image-host");const{height:a}=e.getBoundingClientRect();a>0&&(e.style.height=`${a}px`,e.style.minHeight=`${a}px`);const o=e.querySelector(".wj-inline-image");if(o){o.src=t,o.alt=n,o.className=`wj-inline-image ${i}`;return}e.textContent="";const s=document.createElement("img");s.className=`wj-inline-image ${i}`,s.src=t,s.alt=n,e.appendChild(s)}function J(e,i){e.classList.add("wj-overlay-host");const t=e.tagName==="IMG"?e:e.querySelector("img");t&&t.classList.add("wj-hidden-img");let n=e.querySelector(".wj-heart-wrap");n||(n=document.createElement("div"),n.className="wj-heart-wrap",n.innerHTML='<div class="wj-heart"><span class="wj-heart-number"></span></div>',e.appendChild(n)),n.querySelector(".wj-heart-number").textContent=i}function K(){Y(),document.querySelectorAll('[data-original*="_46.png"]').forEach(e=>{g(e,"wj-groom-label",u("groom-name.png"),r.groomName)}),document.querySelectorAll('[data-original*="_47.png"]').forEach(e=>{g(e,"wj-bride-label",u("bride-name.png"),r.brideName)}),document.querySelectorAll('[data-original*="_49.png"]').forEach(e=>{g(e,"wj-month-label",u("wedding-month.png"),r.weddingMonth)}),document.querySelectorAll('[data-original*="_51.png"]').forEach(e=>{g(e,"wj-venue-label",u("venue-display-name.png"),r.venueDisplayName)}),document.querySelectorAll('[data-original*="_66.png"]').forEach(e=>{g(e,"wj-time-label",u("wedding-time.png"),r.weddingTime)}),document.querySelectorAll('[data-original*="_54.png"]').forEach(e=>{const i=e.tagName==="IMG"?e.parentElement:e;i&&J(i,r.weddingDay)}),document.querySelectorAll('[data-original*="191712.png"]').forEach(e=>{g(e,"wj-heading-image",u("invitation-title.png"),`${r.invitationTitle} ${r.invitationSubtitle}`)}),document.querySelectorAll('[data-original*="_52.png"]').forEach(e=>{g(e,"wj-host-left-label",u("host-left-name.png"),r.hostNameLeft)}),document.querySelectorAll('[data-original*="_69.png"]').forEach(e=>{g(e,"wj-host-right-label",u("host-right-name.png"),r.hostNameRight)})}function Z(){const e=Number.parseInt(r.weddingDay,10),i={"1775311028902":String(e-2),"1775311072793000005":String(e-1),"1775311083030000006":String(e+1),"1775311058017000004":String(e+2)};Object.entries(i).forEach(([t,n])=>{const a=document.querySelector(`[data-elem-id="${t}"] .tn-atom`);a&&(a.textContent=n)}),document.querySelectorAll(".tn-atom").forEach(t=>{if(t.querySelector(".wj-inline-image")||t.childElementCount!==0)return;const n=t.textContent.trim();if(n.includes("Биз бул күндү өзгөчө")||n.includes("Ð‘Ð¸Ð· Ð±ÑƒÐ»")){X(t,"wj-invitation-image",u("invitation-text.png"),r.invitationText);return}if(n==="Юнусалиев к., 33"||n===r.venueStreet||n.includes("к.,")||n.includes("Ðº.,")){t.textContent=r.venueStreet,t.style.color="#54332a",t.style.fontFamily="'Forum', Georgia, serif";return}if(["ресторан","рестораны","РЕСТОРАНЫ",r.venueName].includes(n)||n.includes("Ñ€ÐµÑÑ‚Ð¾Ñ€")){t.textContent=r.venueName,t.style.color="#54332a",t.style.fontFamily="'Forum', Georgia, serif";return}(["БИШКЕК ШААРЫ",r.venueCity].includes(n)||n.includes("Ð‘Ð˜Ð¨ÐšÐ•Ðš"))&&(t.textContent=r.venueCity,t.style.color="#54332a",t.style.fontFamily="'Forum', Georgia, serif",t.style.fontSize="20px",t.style.fontWeight="400",t.style.lineHeight="1.2")})}function Q(){const e=document.getElementById("rec2411060293");if(!e)return;const i=(l,m)=>{let d=document.querySelector(".wj-modal");d||(d=document.createElement("div"),d.className="wj-modal",d.innerHTML=`
        <div class="wj-modal-box" role="dialog" aria-modal="true">
          <p class="wj-modal-title"></p>
          <p class="wj-modal-text"></p>
          <button type="button" class="wj-modal-close">Жабуу</button>
        </div>
      `,document.body.appendChild(d),d.querySelector(".wj-modal-close").addEventListener("click",()=>d.remove()),d.addEventListener("click",p=>{p.target===d&&d.remove()})),d.querySelector(".wj-modal-title").textContent=l,d.querySelector(".wj-modal-text").textContent=m},t=()=>{const l=[...e.querySelectorAll("input, textarea, select")].filter(c=>!c.closest(".tn-atom__inputs-wrapp")).filter(c=>!c.disabled&&c.type!=="hidden"&&c.type!=="submit"&&c.type!=="button"),m=l.filter(c=>c.type==="radio"),d=m.length===0||m.some(c=>c.checked),p=l.filter(c=>["text","search","email","tel",""].includes(c.type)||c.tagName==="TEXTAREA"),S=p.length===0||p.some(c=>c.value.trim().length>0);return d&&S},n=()=>{if(!t()){i("Толтуруңуз","Сураныч, катышууңузду белгилеп, атыңызды жазыңыз.");return}i("Жөнөтүлдү","Рахмат, анкета ийгиликтүү кабыл алынды.")},a=e.querySelector(".t396__artboard")||e;let o=e.querySelector(".wj-fake-submit");o||(o=document.createElement("button"),o.type="button",o.className="wj-fake-submit",o.textContent="Жиберүү",a.appendChild(o)),o.dataset.wjClickFallback!=="ready"&&(o.dataset.wjClickFallback="ready",o.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),n()},!0));const s=e.querySelector('[data-elem-type="form"]');s&&(s.setAttribute("data-field-buttontitle-value","Жиберүү"),s.setAttribute("data-success-message","Рахмат, жообуңуз жөнөтүлдү.")),e.querySelectorAll('.t-submit, button[type="submit"], input[type="submit"]').forEach(l=>{"value"in l&&(l.value="Жиберүү"),l.textContent="Жиберүү",l.dataset.wjClickFallback!=="ready"&&(l.dataset.wjClickFallback="ready",l.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),n()},!0))}),e.querySelectorAll("form").forEach(l=>{l.dataset.wjSubmitFallback!=="ready"&&(l.dataset.wjSubmitFallback="ready",l.addEventListener("submit",m=>{m.preventDefault(),m.stopPropagation(),n()},!0))})}function v(){document.querySelectorAll('a[href*="2gis"], a[href*="geo/700000"]').forEach(e=>{e.href=r.venueMapUrl,e.target="_blank",e.rel="noopener"})}function f(){const e=document.getElementById("days"),i=document.getElementById("hours"),t=document.getElementById("minutes"),n=document.getElementById("seconds");if(!e&&!i&&!t&&!n)return;const a=j-Date.now(),o=Math.max(a,0),s={days:String(Math.floor(o/(1e3*60*60*24))),hours:String(Math.floor(o%(1e3*60*60*24)/(1e3*60*60))),minutes:String(Math.floor(o%(1e3*60*60)/(1e3*60))),seconds:String(Math.floor(o%(1e3*60)/1e3))};y=!0,e&&e.textContent!==s.days&&(e.textContent=s.days),i&&i.textContent!==s.hours&&(i.textContent=s.hours),t&&t.textContent!==s.minutes&&(t.textContent=s.minutes),n&&n.textContent!==s.seconds&&(n.textContent=s.seconds),y=!1}function V(){if(w)return;const e=["days","hours","minutes","seconds"].map(t=>document.getElementById(t)).filter(Boolean);if(!e.length)return;const i=new MutationObserver(()=>{y||f()});e.forEach(t=>i.observe(t,{childList:!0,characterData:!0,subtree:!0})),w=!0}function h(){var a;const e=`${r.groomName} & ${r.brideName}`;document.title=`${e} | сайт-приглашение`;const i=document.querySelector('meta[property="og:title"]');i&&i.setAttribute("content",`${e} | сайт-приглашение`);const t=document.querySelector('meta[property="og:image"]');t&&t.setAttribute("content",r.photos.ogImage),Z(),Q(),v(),document.querySelectorAll('img[src*="WhatsApp_Image"]').forEach(o=>{o.src=r.photos.couplePhoto}),document.querySelectorAll('[data-original*="WhatsApp_Image"]').forEach(o=>{o.setAttribute("data-original",r.photos.couplePhoto)});const n=document.querySelector("audio source");n&&(n.src=r.audioSrc,(a=n.parentElement)==null||a.load()),K(),f(),V()}async function b(){try{await H()}catch(e){console.error(e)}h(),setTimeout(h,500),setTimeout(h,1500),setTimeout(v,2500),setTimeout(f,2500),setInterval(f,250)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();
