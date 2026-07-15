import defaultCfg from '../wedding.json'

let cfg = defaultCfg
let targetDate = new Date(`${cfg.weddingDate}T${cfg.weddingTime || '00:00'}:00`).getTime()

function clientSlugFromUrl() {
  const value = new URLSearchParams(window.location.search).get('client')
  return value && /^[a-z0-9-]+$/i.test(value) ? value : null
}

async function loadClientConfig() {
  const slug = clientSlugFromUrl()
  if (!slug) return

  const response = await fetch(`clients/${slug}/wedding.json`, { cache: 'no-store' })
  if (!response.ok) throw new Error(`Не удалось загрузить данные клиента: ${response.status}`)

  cfg = { ...defaultCfg, ...await response.json(), clientSlug: slug }
  targetDate = new Date(`${cfg.weddingDate}T${cfg.weddingTime || '00:00'}:00`).getTime()
}

function generatedAsset(name) {
  return cfg.clientSlug ? `clients/${cfg.clientSlug}/generated/${name}` : `generated/${name}`
}

function ensureWeddingFonts() {
  if (document.getElementById('wedding-fonts')) return

  const link = document.createElement('link')
  link.id = 'wedding-fonts'
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Forum&display=swap'
  document.head.appendChild(link)
}

function ensureDynamicStyles() {
  if (document.getElementById('wedding-json-overrides')) return

  ensureWeddingFonts()

  const style = document.createElement('style')
  style.id = 'wedding-json-overrides'
  style.textContent = `
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
  `
  document.head.appendChild(style)
}

let isUpdatingCountdown = false
let countdownObserverStarted = false

function overlayGeneratedImage(host, className, src, alt) {
  host.classList.add('wj-overlay-host')
  const img = host.tagName === 'IMG' ? host : host.querySelector('img')
  if (img) img.classList.add('wj-hidden-img')

  const existing = host.querySelector('.wj-generated-image')
  if (existing) {
    existing.src = src
    existing.alt = alt
    existing.className = `wj-generated-image ${className}`
    return
  }

  const generated = document.createElement('img')
  generated.className = `wj-generated-image ${className}`
  generated.src = src
  generated.alt = alt
  host.appendChild(generated)
}

function replaceWithGeneratedImage(el, className, src, alt) {
  el.classList.add('wj-text-image-host')
  const { height } = el.getBoundingClientRect()
  if (height > 0) {
    el.style.height = `${height}px`
    el.style.minHeight = `${height}px`
  }

  const existing = el.querySelector('.wj-inline-image')
  if (existing) {
    existing.src = src
    existing.alt = alt
    existing.className = `wj-inline-image ${className}`
    return
  }

  el.textContent = ''
  const img = document.createElement('img')
  img.className = `wj-inline-image ${className}`
  img.src = src
  img.alt = alt
  el.appendChild(img)
}

function overlayHeart(host, text) {
  host.classList.add('wj-overlay-host')
  const img = host.tagName === 'IMG' ? host : host.querySelector('img')
  if (img) img.classList.add('wj-hidden-img')

  let wrap = host.querySelector('.wj-heart-wrap')
  if (!wrap) {
    wrap = document.createElement('div')
    wrap.className = 'wj-heart-wrap'
    wrap.innerHTML = '<div class="wj-heart"><span class="wj-heart-number"></span></div>'
    host.appendChild(wrap)
  }

  wrap.querySelector('.wj-heart-number').textContent = text
}

function applyImageTextOverrides() {
  ensureDynamicStyles()

  document.querySelectorAll('[data-original*="_46.png"]').forEach(el => {
    overlayGeneratedImage(el, 'wj-groom-label', generatedAsset('groom-name.png'), cfg.groomName)
  })

  document.querySelectorAll('[data-original*="_47.png"]').forEach(el => {
    overlayGeneratedImage(el, 'wj-bride-label', generatedAsset('bride-name.png'), cfg.brideName)
  })

  document.querySelectorAll('[data-original*="_49.png"]').forEach(el => {
    overlayGeneratedImage(el, 'wj-month-label', generatedAsset('wedding-month.png'), cfg.weddingMonth)
  })

  document.querySelectorAll('[data-original*="_51.png"]').forEach(el => {
    overlayGeneratedImage(el, 'wj-venue-label', generatedAsset('venue-display-name.png'), cfg.venueDisplayName)
  })

  document.querySelectorAll('[data-original*="_66.png"]').forEach(el => {
    overlayGeneratedImage(el, 'wj-time-label', generatedAsset('wedding-time.png'), cfg.weddingTime)
  })

  document.querySelectorAll('[data-original*="_54.png"]').forEach(el => {
    const host = el.tagName === 'IMG' ? el.parentElement : el
    if (host) overlayHeart(host, cfg.weddingDay)
  })

  document.querySelectorAll('[data-original*="191712.png"]').forEach(el => {
    overlayGeneratedImage(el, 'wj-heading-image', generatedAsset('invitation-title.png'), `${cfg.invitationTitle} ${cfg.invitationSubtitle}`)
  })

  document.querySelectorAll('[data-original*="_52.png"]').forEach(el => {
    overlayGeneratedImage(el, 'wj-host-left-label', generatedAsset('host-left-name.png'), cfg.hostNameLeft)
  })

  document.querySelectorAll('[data-original*="_69.png"]').forEach(el => {
    overlayGeneratedImage(el, 'wj-host-right-label', generatedAsset('host-right-name.png'), cfg.hostNameRight)
  })
}

function replacePlainText() {
  const day = Number.parseInt(cfg.weddingDay, 10)
  const calendarById = {
    '1775311028902': String(day - 2),
    '1775311072793000005': String(day - 1),
    '1775311083030000006': String(day + 1),
    '1775311058017000004': String(day + 2),
  }

  Object.entries(calendarById).forEach(([id, value]) => {
    const el = document.querySelector(`[data-elem-id="${id}"] .tn-atom`)
    if (el) el.textContent = value
  })

  document.querySelectorAll('.tn-atom').forEach(el => {
    if (el.querySelector('.wj-inline-image')) return
    if (el.childElementCount !== 0) return

    const text = el.textContent.trim()

    if (text.includes('Биз бул күндү өзгөчө') || text.includes('Ð‘Ð¸Ð· Ð±ÑƒÐ»')) {
      replaceWithGeneratedImage(el, 'wj-invitation-image', generatedAsset('invitation-text.png'), cfg.invitationText)
      return
    }

    if (text === 'Юнусалиев к., 33' || text === cfg.venueStreet || text.includes('к.,') || text.includes('Ðº.,')) {
      el.textContent = cfg.venueStreet
      el.style.color = '#54332a'
      el.style.fontFamily = "'Forum', Georgia, serif"
      return
    }

    if (['ресторан', 'рестораны', 'РЕСТОРАНЫ', cfg.venueName].includes(text) || text.includes('Ñ€ÐµÑÑ‚Ð¾Ñ€')) {
      el.textContent = cfg.venueName
      el.style.color = '#54332a'
      el.style.fontFamily = "'Forum', Georgia, serif"
      return
    }

    if (['БИШКЕК ШААРЫ', cfg.venueCity].includes(text) || text.includes('Ð‘Ð˜Ð¨ÐšÐ•Ðš')) {
      el.textContent = cfg.venueCity
      el.style.color = '#54332a'
      el.style.fontFamily = "'Forum', Georgia, serif"
      el.style.fontSize = '20px'
      el.style.fontWeight = '400'
      el.style.lineHeight = '1.2'
    }
  })
}

function prepareGuestForm() {
  const formBlock = document.getElementById('rec2411060293')
  if (!formBlock) return

  const showModal = (title, text) => {
    let modal = document.querySelector('.wj-modal')
    if (!modal) {
      modal = document.createElement('div')
      modal.className = 'wj-modal'
      modal.innerHTML = `
        <div class="wj-modal-box" role="dialog" aria-modal="true">
          <p class="wj-modal-title"></p>
          <p class="wj-modal-text"></p>
          <button type="button" class="wj-modal-close">Жабуу</button>
        </div>
      `
      document.body.appendChild(modal)
      modal.querySelector('.wj-modal-close').addEventListener('click', () => modal.remove())
      modal.addEventListener('click', event => {
        if (event.target === modal) modal.remove()
      })
    }
    modal.querySelector('.wj-modal-title').textContent = title
    modal.querySelector('.wj-modal-text').textContent = text
  }

  const isFormFilled = () => {
    const fields = [...formBlock.querySelectorAll('input, textarea, select')]
      .filter(field => !field.closest('.tn-atom__inputs-wrapp'))
      .filter(field => !field.disabled && field.type !== 'hidden' && field.type !== 'submit' && field.type !== 'button')

    const radios = fields.filter(field => field.type === 'radio')
    const needsRadio = radios.length === 0 || radios.some(field => field.checked)
    const textFields = fields.filter(field => ['text', 'search', 'email', 'tel', ''].includes(field.type) || field.tagName === 'TEXTAREA')
    const needsText = textFields.length === 0 || textFields.some(field => field.value.trim().length > 0)

    return needsRadio && needsText
  }

  const handleFakeSubmit = () => {
    if (!isFormFilled()) {
      showModal('Толтуруңуз', 'Сураныч, катышууңузду белгилеп, атыңызды жазыңыз.')
      return
    }
    showModal('Жөнөтүлдү', 'Рахмат, анкета ийгиликтүү кабыл алынды.')
  }

  const artboard = formBlock.querySelector('.t396__artboard') || formBlock
  let fakeButton = formBlock.querySelector('.wj-fake-submit')
  if (!fakeButton) {
    fakeButton = document.createElement('button')
    fakeButton.type = 'button'
    fakeButton.className = 'wj-fake-submit'
    fakeButton.textContent = 'Жиберүү'
    artboard.appendChild(fakeButton)
  }

  if (fakeButton.dataset.wjClickFallback !== 'ready') {
    fakeButton.dataset.wjClickFallback = 'ready'
    fakeButton.addEventListener('click', event => {
      event.preventDefault()
      event.stopPropagation()
      handleFakeSubmit()
    }, true)
  }

  const formElem = formBlock.querySelector('[data-elem-type="form"]')
  if (formElem) {
    formElem.setAttribute('data-field-buttontitle-value', 'Жиберүү')
    formElem.setAttribute('data-success-message', 'Рахмат, жообуңуз жөнөтүлдү.')
  }

  const submitButtons = formBlock.querySelectorAll('.t-submit, button[type="submit"], input[type="submit"]')
  submitButtons.forEach(button => {
    if ('value' in button) button.value = 'Жиберүү'
    button.textContent = 'Жиберүү'
    if (button.dataset.wjClickFallback !== 'ready') {
      button.dataset.wjClickFallback = 'ready'
      button.addEventListener('click', event => {
        event.preventDefault()
        event.stopPropagation()
        handleFakeSubmit()
      }, true)
    }
  })

  const forms = formBlock.querySelectorAll('form')
  forms.forEach(form => {
    if (form.dataset.wjSubmitFallback === 'ready') return
    form.dataset.wjSubmitFallback = 'ready'

    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()
      handleFakeSubmit()
    }, true)
  })
}

function applyMapLinks() {
  document.querySelectorAll('a[href*="2gis"], a[href*="geo/700000"]').forEach(link => {
    link.href = cfg.venueMapUrl
    link.target = '_blank'
    link.rel = 'noopener'
  })
}

function updateCountdown() {
  const daysEl = document.getElementById('days')
  const hoursEl = document.getElementById('hours')
  const minutesEl = document.getElementById('minutes')
  const secondsEl = document.getElementById('seconds')

  if (!daysEl && !hoursEl && !minutesEl && !secondsEl) return

  const diff = targetDate - Date.now()
  const safeDiff = Math.max(diff, 0)
  const values = {
    days: String(Math.floor(safeDiff / (1000 * 60 * 60 * 24))),
    hours: String(Math.floor((safeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
    minutes: String(Math.floor((safeDiff % (1000 * 60 * 60)) / (1000 * 60))),
    seconds: String(Math.floor((safeDiff % (1000 * 60)) / 1000)),
  }

  isUpdatingCountdown = true
  if (daysEl && daysEl.textContent !== values.days) daysEl.textContent = values.days
  if (hoursEl && hoursEl.textContent !== values.hours) hoursEl.textContent = values.hours
  if (minutesEl && minutesEl.textContent !== values.minutes) minutesEl.textContent = values.minutes
  if (secondsEl && secondsEl.textContent !== values.seconds) secondsEl.textContent = values.seconds
  isUpdatingCountdown = false
}

function watchCountdown() {
  if (countdownObserverStarted) return

  const countdownEls = ['days', 'hours', 'minutes', 'seconds']
    .map(id => document.getElementById(id))
    .filter(Boolean)

  if (!countdownEls.length) return

  const observer = new MutationObserver(() => {
    if (!isUpdatingCountdown) updateCountdown()
  })

  countdownEls.forEach(el => observer.observe(el, { childList: true, characterData: true, subtree: true }))
  countdownObserverStarted = true
}

function applyConfig() {
  const names = `${cfg.groomName} & ${cfg.brideName}`
  document.title = `${names} | сайт-приглашение`

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', `${names} | сайт-приглашение`)

  const ogImage = document.querySelector('meta[property="og:image"]')
  if (ogImage) ogImage.setAttribute('content', cfg.photos.ogImage)

  replacePlainText()
  prepareGuestForm()

  applyMapLinks()

  const couplePhotoMarkers = [
    'tild3732-3763-4834-a132-633765376635/photo.png',
    'tild3436-3236-4432-a261-643032306231/photo.png',
  ]
  couplePhotoMarkers.forEach(marker => {
    document.querySelectorAll(`img[src*="${marker}"]`).forEach(img => {
      img.src = cfg.photos.couplePhoto
    })
    document.querySelectorAll(`[data-original*="${marker}"]`).forEach(el => {
      el.setAttribute('data-original', cfg.photos.couplePhoto)
    })
  })

  document.querySelectorAll('img[src*="WhatsApp_Image"]').forEach(img => {
    img.src = cfg.photos.couplePhoto
  })

  document.querySelectorAll('[data-original*="WhatsApp_Image"]').forEach(el => {
    el.setAttribute('data-original', cfg.photos.couplePhoto)
  })

  const audioSource = document.querySelector('audio source')
  if (audioSource) {
    audioSource.src = cfg.audioSrc
    audioSource.parentElement?.load()
  }

  applyImageTextOverrides()
  updateCountdown()
  watchCountdown()
}

async function start() {
  try {
    await loadClientConfig()
  } catch (error) {
    console.error(error)
  }

  applyConfig()
  setTimeout(applyConfig, 500)
  setTimeout(applyConfig, 1500)
  setTimeout(applyMapLinks, 2500)
  setTimeout(updateCountdown, 2500)
  setInterval(updateCountdown, 250)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start)
} else {
  start()
}
