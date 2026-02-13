/* ══════════════════════════════════════════════
   Instagram Valentine – script.js
══════════════════════════════════════════════ */

// ─────────────────────────────────────────────
// POST DATA  – edit captions, images, etc here
// ─────────────────────────────────────────────
const POSTS = [
  {
    id: 0,
    music: 'audio/whenyouregone.mp3',
    images: ['images/birthday2.jpg', 'images/beach3.jpg', 'images/thanksgiving.jpg','images/sunset.jpg','images/weeknd.jpg', 'images/sidaks.jpg', 'images/promposal.jpg', 'images/prom.jpg', 'images/home3.jpg', 'images/play2.jpg', 'images/game.jpg', 'images/college.jpg', 'images/ditchday.jpg', 'images/birthday.jpg', 'images/college2.jpg', 'images/grad2.jpg', 'images/home2.jpg', 'images/botc.jpg'],
    username: 'krm_arham',
    displayName: '🎵 When You\'re Gone - The Cranberries',
    avatar: 'images/pfp.jpg',
    verified: false,
    location: '',
    caption: 'You and Me ❤️',
    likes: 128,
    likerName: 'daniticau',
    likerUrl: 'https://www.instagram.com/daniticau/',
    likerAvatars: ['images/danipfp.jpg','images/rehaanpfp.jpg','images/brianpfp.jpg'],
    timestamp: 'FEBRUARY 11, 2026',
    comments: [
      { user: 'taylorswift',   avatar: 'images/taylorpfp.jpg', text: 'Ruin the friendship!!', verified: true},
      { user: 'dj_muresan', avatar: 'images/djonipfp.jpg', text: 'should\'ve been me' },
      { user: 'rehaan_karnik',         avatar: 'images/rehaanpfp.jpg', text: 'happy for yall mannn' },
      { user: 'champagnepapi',         avatar: 'images/drakepfp.jpg', text: 'keep her close 👀', verified: true },
      { user: 'anju.2x',         avatar: 'images/anjalipfp.jpg', text: 'still mad you didn\'t know her mailing address...'},
      { user: 'brendz98',         avatar: 'images/brendzpfp.jpg', text: 'awww I approve!'},
      { user: 'veniceellamayor',         avatar: 'images/venicepfp.jpg', text: 'your body is a temple 🧘'},
    ],
  },
  {
    id: 1,
    music: 'audio/telegraphave.mp3',
    images: ['images/hoco.jpg','images/topgolf.jpg','images/uvas.jpg', 'images/prom2.jpg', 'images/sunset2.jpg', 'images/play.jpg', 'images/sunset3.jpg', 'images/haters.jpg', 'images/christmas.jpg', 'images/beach4.jpg', 'images/allstars2.jpg', 'images/haters2.jpg', 'images/beach.jpg', 'images/allstars.jpg'],
    username: 'krm_arham',
    displayName: '🎵 III. Telegraph Ave. ("Oakland" by Lloyd) - Childish Gambino',
    avatar: 'images/pfp.jpg',
    verified: false,
    location: '',
    caption: 'Good Times',
    likes: 94,
    likerName: 'vic_orea',
    likerUrl: 'https://www.instagram.com/vic_orea/',
    likerAvatars: ['images/vicpfp.jpg','images/zuripfp.jpg','images/siyonapfp.jpg'],
    timestamp: 'JANUARY 28, 2026',
    comments: [
      { user: '5riantran',   avatar: 'images/brianpfp.jpg', text: 'rip h8rs', verified: false },
      { user: 'xo.evvvv', avatar: 'images/evonnepfp.jpg', text: 'guys im single let\'s link again!!!' },
      { user: 'j8yliu', avatar: 'images/jacobpfp.jpg', text: 'reporting this account' },
    ],
  },
  {
    id: 2,
    music: 'audio/cecesinterlude.mp3',
    images: ['images/summer.jpg','images/uvas2.jpg', 'images/pool.jpg', 'images/party2.jpg', 'images/game2.jpg', 'images/disabled.jpg', 'images/alviso.jpg', 'images/dylan.jpg'],
    username: 'krm_arham',
    displayName: '🎵 Cece\'s Interlude - Drake',
    avatar: 'images/pfp.jpg',
    verified: false,
    location: '',
    caption: 'Isn\'t she lovely?',
    likes: 71,
    likerName: 'fioraqb',
    likerUrl: 'https://www.instagram.com/fioraqb/',
    likerAvatars: ['images/fiorapfp.jpg','images/reikopfp.jpg','images/anjalipfp.jpg'],
    timestamp: 'JANUARY 15, 2026',
    comments: [
      { user: 'beccalabarge', avatar: 'images/beccapfp.jpg', text: 'what a queen' },
      { user: 'albert', avatar: 'images/albertpfp.jpg', text: 'do you know when kai\'s coming up to berkeley' },
      { user: 'reiko.yy', avatar: 'images/reikopfp.jpg', text: 'bestieee'},
      { user: 'kailorat', avatar: 'images/kaipfp.jpg', text: 'i\'m scared to be in the same comment section as albert'},
      { user: 'arelesss_', avatar: 'images/ryanpfp.jpg', text: 'whose the chopped one'},
    ],
  },
];

// Repost data
const REPOST = {
  images: ['images/lego.jpg'],
  username: 'lego',
  displayName: '',
  avatar: 'images/legopfp.jpg',
  verified: true,
  location: '',
  caption: 'Lego Tulips!! 🌷',
  likes: 2100,
  likerName: 'krm_arham',
  likerUrl: 'https://www.instagram.com/krm_arham/',
  likerAvatars: ['images/pfp.jpg','images/nullpfp.jpg','images/nullpfp.jpg'],
  timestamp: 'FEBRUARY 8, 2026',
  comments: [
    { user: 'krm_arham', avatar: 'images/pfp.jpg', text: '@clarissa_and_co check your mail 😉' },
    //{ user: 'fan.account',   avatar: 'images/friend2.jpg', text: 'I might buy this', noHeart: false },
  ],
};

// Valentine story — just the question slide now
const VAL_SLIDES = [
  { type: 'question' },
];

//  highlight slides
const HEART_SLIDES = [
  { src: 'images/feet.jpg',  caption: '', position: 'right center'},
];

const SLIDE_DURATION_MS = 4000;

// ─────────────────────────────────────────────
// DOM REFS
// ─────────────────────────────────────────────
const postModal       = document.getElementById('postModal');
const closePostBtn    = document.getElementById('closePost');
const carouselTrack   = document.getElementById('carouselTrack');
const carouselPrev    = document.getElementById('carouselPrev');
const carouselNext    = document.getElementById('carouselNext');
const carouselDots    = document.getElementById('carouselDots');
const likeBtn         = document.getElementById('likeBtn');
const saveBtn         = document.getElementById('saveBtn');
const commentFocusBtn = document.getElementById('commentFocusBtn');
const commentInput    = document.getElementById('commentInput');
const submitComment   = document.getElementById('submitComment');
const commentsArea    = document.getElementById('commentsArea');
const likesRow        = document.getElementById('likesRow');
const postTimestamp   = document.getElementById('postTimestamp');
const postHeader      = document.getElementById('postHeader');

const valentineStoryModal = document.getElementById('valentineStoryModal');
const openValentineStory  = document.getElementById('openValentineStory');
const closeValentineStory = document.getElementById('closeValentineStory');
const valProgressBar      = document.getElementById('valProgressBar');
const valSlidesWrap       = document.getElementById('valSlidesWrap');
const valTapPrev          = document.getElementById('valTapPrev');
const valTapNext          = document.getElementById('valTapNext');

const heartStoryModal  = document.getElementById('heartStoryModal');
const openHeartStory   = document.getElementById('openHeartStory');
const closeHeartStoryBtn = document.getElementById('closeHeartStory');
const heartProgressBar = document.getElementById('heartProgressBar');
const heartSlidesEl    = document.getElementById('heartSlides');
const storyTapPrev     = document.getElementById('storyTapPrev');
const storyTapNext     = document.getElementById('storyTapNext');

const seePostPopup     = document.getElementById('seePostPopup');
const themeToggle      = document.getElementById('themeToggle');
const bgMusic          = document.getElementById('bgMusic');
const postMusic        = document.getElementById('postMusic');

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let carouselIndex  = 0;
let totalSlides    = 0;
let liked          = false;
let saved          = false;
let likeCount      = 0;
let activePostData = null;
let darkMode       = true;
document.body.classList.toggle('dark', darkMode);
let audioStarted   = false;
let confettiAnimId = null;

let valSlideIndex  = 0;
let valSegRAF      = null;
let valSegStart    = null;

let heartSlideIndex = 0;
let heartSegRAF    = null;
let heartSegStart  = null;

let seePostHideTimer = null;

// ─────────────────────────────────────────────
// AUDIO
// ─────────────────────────────────────────────
function startAudio() {
  if (audioStarted) return;
  audioStarted = true;
  bgMusic.volume = 0.45;
  bgMusic.play().catch(()=>{});
}
document.addEventListener('click', startAudio, { once: true });

function fadeAudio(el, targetVol, ms) {
  const steps = 20, iv = ms / steps;
  const start = el.volume, delta = (targetVol - start) / steps;
  let s = 0;
  const t = setInterval(() => {
    s++;
    el.volume = Math.min(1, Math.max(0, start + delta * s));
    if (s >= steps) { clearInterval(t); if (targetVol === 0) el.pause(); }
  }, iv);
}

// ─────────────────────────────────────────────
// TABS
// ─────────────────────────────────────────────
document.querySelectorAll('.ig-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ig-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const which = tab.getAttribute('data-tab');
    document.querySelectorAll('.ig-tab-panel').forEach(p => p.classList.add('hidden'));
    document.getElementById('panel-' + which).classList.remove('hidden');
  });
});

// ─────────────────────────────────────────────
// GRID THUMBNAILS → open post
// ─────────────────────────────────────────────
document.querySelectorAll('.ig-grid-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const postId = thumb.getAttribute('data-post');
    if (postId === 'repost') openPost(REPOST);
    else openPost(POSTS[parseInt(postId, 10)]);
  });
});

// ─────────────────────────────────────────────
// POST MODAL
// ─────────────────────────────────────────────
function openPost(data) {
  activePostData = data;
  liked = false; saved = false;
  likeCount = data.likes;
  likeBtn.classList.remove('liked');
  saveBtn.classList.remove('saved');

  // Build header
  postHeader.innerHTML = `
    <div class="ig-post-avatar">
      <img src="${data.avatar}" alt="${data.username}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
      <div class="ig-post-av-fallback" style="display:none">👤</div>
    </div>
    <div class="ig-post-header-info">
      <span class="ig-post-username">
        ${escapeHtml(data.username)}
        ${data.verified ? `<svg class="ig-verified" viewBox="0 0 24 24" fill="#0095f6" width="14" height="14"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>` : ''}
      </span>
      <span class="ig-post-displayname">${escapeHtml(data.displayName)}</span>
    </div>
    <button class="ig-post-more">···</button>`;

  // Build carousel
  carouselTrack.innerHTML = '';
  data.images.forEach(src => {
    const slide = document.createElement('div');
    slide.className = 'ig-carousel-slide';
    slide.innerHTML = `<img src="${src}" alt="" onerror="this.parentElement.style.background='#2a2a2a'"/>`;
    carouselTrack.appendChild(slide);
  });
  totalSlides = data.images.length;
  carouselIndex = 0;
  buildDots(); updateCarousel();

  // Build comments (caption first, no heart; replies with hearts)
  commentsArea.innerHTML = '';
  const capDiv = document.createElement('div');
  capDiv.className = 'ig-comment';
  capDiv.innerHTML = `
    <div class="ig-comment-avatar">
      <img src="${data.avatar}" alt="${data.username}" onerror="this.style.display='none'"/>
    </div>
    <div class="ig-comment-body">
      <span class="ig-comment-user">${escapeHtml(data.username)}</span>
      <span class="ig-comment-text"> ${escapeHtml(data.caption)}</span>
    </div>`;
  commentsArea.appendChild(capDiv);

  const metaDiv = document.createElement('div');
  metaDiv.className = 'ig-comment-meta';
  metaDiv.textContent = '';
  commentsArea.appendChild(metaDiv);

  data.comments.forEach(c => {
    commentsArea.appendChild(buildCommentEl(c.user, c.avatar, c.text, true, c.verified));
  });

  // Likes row
  const likerCount = data.likes - 1;
  likesRow.innerHTML = `
    <div class="ig-likes-avatars">
      ${data.likerAvatars.map(s=>`<img src="${s}" alt="" onerror="this.style.background='#dbdbdb';this.removeAttribute('onerror')"/>`).join('')}
    </div>
    <span class="ig-likes-text">Liked by <a href="${data.likerUrl}" target="_blank" rel="noopener" class="ig-likes-link">${escapeHtml(data.likerName)}</a> and <strong id="otherCount">${likerCount} others</strong></span>`;

  postTimestamp.textContent = data.timestamp;

  postModal.classList.add('open');
  document.body.classList.add('no-scroll');
  startAudio();
  if (data.music) {
    // lower background music
    fadeAudio(bgMusic, 0.1, 600);

    // swap track + restart every time you open the post
    postMusic.pause();
    postMusic.currentTime = 0;
    postMusic.src = data.music;
    postMusic.load();

    postMusic.volume = 0;
    postMusic.play().catch(()=>{});
    fadeAudio(postMusic, 0.65, 700);
    }
  /* prev music logic
  if (postMusic.src && !postMusic.src.endsWith('/')) {
    fadeAudio(bgMusic, 0.1, 600);
    postMusic.volume = 0;
    postMusic.play().catch(()=>{});
    fadeAudio(postMusic, 0.65, 700);
  }
    */
}

function closePost() {
    postModal.classList.remove('open');
    document.body.classList.remove('no-scroll');
    postMusic.pause();
    postMusic.currentTime = 0;
    fadeAudio(bgMusic, 0.45, 700);
    /*
  postModal.classList.remove('open');
  document.body.classList.remove('no-scroll');
  if (!postMusic.paused) fadeAudio(postMusic, 0, 500);
  if (audioStarted) fadeAudio(bgMusic, 0.45, 700);
  */
}

closePostBtn.addEventListener('click', closePost);
postModal.addEventListener('click', e => { if (e.target === postModal) closePost(); });

// Like button
likeBtn.addEventListener('click', () => {
  liked = !liked;
  likeBtn.classList.toggle('liked', liked);
  likeCount += liked ? 1 : -1;
  const oc = document.getElementById('otherCount');
  if (oc) oc.textContent = (likeCount - 1) + ' others';
});

// Double-tap to like on carousel
let lastTap = 0;
const carouselEl = document.querySelector('.ig-carousel');
carouselEl.addEventListener('click', e => {
  // don't trigger if clicking nav buttons
  if (e.target.closest('.ig-carousel-btn')) return;
  const now = Date.now();
  if (now - lastTap < 300) {
    if (!liked) { liked = true; likeBtn.classList.add('liked'); likeCount++; const oc=document.getElementById('otherCount'); if(oc) oc.textContent=(likeCount-1)+' others'; }
    carouselEl.classList.remove('heart-flash');
    void carouselEl.offsetWidth; // reflow
    carouselEl.classList.add('heart-flash');
    setTimeout(() => carouselEl.classList.remove('heart-flash'), 800);
  }
  lastTap = now;
});

// Save button
saveBtn.addEventListener('click', () => {
  saved = !saved;
  saveBtn.classList.toggle('saved', saved);
});

// Comment heart toggle (delegated)
commentsArea.addEventListener('click', e => {
  const btn = e.target.closest('.ig-comment-heart');
  if (!btn) return;
  btn.classList.toggle('liked');
});

// Comment focus
commentFocusBtn.addEventListener('click', () => commentInput.focus());

// Live comments
commentInput.addEventListener('input', () => {
  submitComment.classList.toggle('active', commentInput.value.trim().length > 0);
});
function postCommentAction() {
  const text = commentInput.value.trim();
  if (!text) return;
  const el = buildCommentEl('clarissa_and_co', 'images/clarissapfp.jpg', text, true);
  el.classList.add('new-comment');
  commentsArea.appendChild(el);
  commentsArea.scrollTop = commentsArea.scrollHeight;
  commentInput.value = '';
  submitComment.classList.remove('active');
}
submitComment.addEventListener('click', postCommentAction);
commentInput.addEventListener('keydown', e => { if (e.key === 'Enter') postCommentAction(); });

function buildCommentEl(user, avatar, text, withHeart, verified=false) {
  const div = document.createElement('div');
  div.className = 'ig-comment';
  div.innerHTML = `
    <div class="ig-comment-avatar">
      <img src="${avatar}" alt="${escapeHtml(user)}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
      <span style="display:none">👤</span>
    </div>
    <div class="ig-comment-body">
      <span class="ig-comment-user">
        ${escapeHtml(user)}
        ${verified ? `
            <svg class="ig-verified-comment" viewBox="0 0 24 24" fill="#0095f6">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
        ` : ''}
        </span>
      <span class="ig-comment-text"> ${escapeHtml(text)}</span>
    </div>
    ${withHeart ? `<button class="ig-comment-heart" aria-label="Like comment"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></button>` : ''}`;
  return div;
}

// ─────────────────────────────────────────────
// CAROUSEL
// ─────────────────────────────────────────────
function buildDots() {
  carouselDots.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    carouselDots.appendChild(d);
  }
}
function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
  carouselDots.querySelectorAll('.dot').forEach((d,i) => d.classList.toggle('active', i === carouselIndex));
  carouselPrev.disabled = carouselIndex === 0;
  carouselNext.disabled = carouselIndex === totalSlides - 1;
}
carouselPrev.addEventListener('click', () => { if (carouselIndex > 0) { carouselIndex--; updateCarousel(); } });
carouselNext.addEventListener('click', () => { if (carouselIndex < totalSlides - 1) { carouselIndex++; updateCarousel(); } });
let carouselTouchX = 0;
carouselTrack.addEventListener('touchstart', e => { carouselTouchX = e.changedTouches[0].clientX; }, { passive: true });
carouselTrack.addEventListener('touchend', e => {
  const diff = carouselTouchX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) {
    if (diff > 0 && carouselIndex < totalSlides - 1) { carouselIndex++; updateCarousel(); }
    else if (diff < 0 && carouselIndex > 0) { carouselIndex--; updateCarousel(); }
  }
}, { passive: true });

// ─────────────────────────────────────────────
// DARK MODE
// ─────────────────────────────────────────────
const iconMoon = themeToggle.querySelector('.icon-moon');
const iconSun  = themeToggle.querySelector('.icon-sun');
themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
  iconMoon.style.display = darkMode ? 'none' : '';
  iconSun.style.display  = darkMode ? ''     : 'none';
});

// ─────────────────────────────────────────────
// VALENTINE STORY (multi-slide with question)
// ─────────────────────────────────────────────
openValentineStory.addEventListener('click', openValStory);
closeValentineStory.addEventListener('click', closeValStory);
valentineStoryModal.addEventListener('click', e => { if (e.target === valentineStoryModal) closeValStory(); });
valTapPrev.addEventListener('click', () => goValSlide(valSlideIndex - 1));
valTapNext.addEventListener('click', () => goValSlide(valSlideIndex + 1));

function buildValStory() {
  // Progress segments
  valProgressBar.innerHTML = '';
  VAL_SLIDES.forEach((_, i) => {
    const seg = document.createElement('div');
    seg.className = 'story-seg';
    seg.setAttribute('data-seg', i);
    const fill = document.createElement('div');
    fill.className = 'story-seg-fill';
    seg.appendChild(fill);
    valProgressBar.appendChild(seg);
  });

  // Slides
  valSlidesWrap.innerHTML = '';
  VAL_SLIDES.forEach((slide, i) => {
    const div = document.createElement('div');
    div.className = 'val-slide' + (i === 0 ? ' active' : '');

    if (slide.type === 'question') {
      div.innerHTML = `
        <div class="val-question-slide">
          <div class="story-card">
            <p class="story-eyebrow">Dear Clarissa Co...</p>
            <h2 class="story-q">Will You Be<br/>My Valentine?</h2>
            <div class="val-couple-row">
                <div class="val-circle">
                    <img src="images/lion.jpg" alt="You">
                </div>

                <div class="val-heart">♥</div>

                <div class="val-circle">
                    <img src="images/cat.jpg" alt="Them">
                </div>
            </div>
            <div class="story-btns">
              <button class="story-btn-yes" id="valentineYes">Yes! 💕</button>
              
            </div>
          </div>
        </div>
        <div class="ig-story-success" id="valentineSuccess">
          <canvas id="valentineConfetti"></canvas>
          <div class="story-success-content">
            <div class="story-big-heart">❤️</div>
            <h2 class="story-love-title">I love you!</h2>
            <p class="story-love-sub">Happy Valentine's Day 🌷</p>
            <button class="story-replay" id="valentineReplay">Watch again ↺</button>
          </div>
        </div>`;
    } else {
      // Photo slide with clickable see-post popup
      const bg = slide.bg || '#16213e';
      div.innerHTML = `<div class="val-slide-bg" style="background:${bg}">
        <img src="${slide.src}" alt="story ${i+1}" style="width:100%;height:100%;object-fit:cover;cursor:pointer;display:block" onerror="this.parentElement.style.background='${bg}'"/>
      </div>`;
      // click → show popup
      div.addEventListener('click', e => {
        if (e.target.tagName === 'IMG') {
          showSeePostPopup(e.clientX, e.clientY);
        }
      });
    }

    valSlidesWrap.appendChild(div);
  });

  // Wire yes/no buttons (they're in last slide)
  setTimeout(() => {
    const yesBtn = document.getElementById('valentineYes');
    //const noBtn  = document.getElementById('valentineNo');
    const replay = document.getElementById('valentineReplay');
    if (yesBtn) yesBtn.addEventListener('click', triggerValentineYes);
    //if (noBtn)  {
    //  noBtn.addEventListener('click', triggerValentineYes);
    //}
    if (replay) replay.addEventListener('click', () => {
      const success = document.getElementById('valentineSuccess');
      if (success) success.classList.remove('show');
      stopConfetti();
      goValSlide(VAL_SLIDES.length - 1);
    });
  }, 50);
}

function openValStory() {
  buildValStory();
  valSlideIndex = 0;
  valentineStoryModal.classList.add('open');
  document.body.classList.add('no-scroll');
  startAudio();
  showValSlide(0);
}
function closeValStory() {
  valentineStoryModal.classList.remove('open');
  document.body.classList.remove('no-scroll');
  stopValSlide();
  stopConfetti();
  hideSeePostPopup();
}

function showValSlide(index) {
  stopValSlide();
  if (index >= VAL_SLIDES.length) { closeValStory(); return; }
  if (index < 0) index = 0;
  valSlideIndex = index;

  valSlidesWrap.querySelectorAll('.val-slide').forEach((s,i) => s.classList.toggle('active', i === index));

  valProgressBar.querySelectorAll('.story-seg').forEach((seg, i) => {
    const fill = seg.querySelector('.story-seg-fill');
    if (i < index) { seg.classList.add('done'); fill.style.width='100%'; }
    else           { seg.classList.remove('done'); fill.style.width='0%'; }
  });

  const currentFill = valProgressBar.querySelector(`[data-seg="${index}"] .story-seg-fill`);
  // Last slide (question) doesn't auto-advance
  if (VAL_SLIDES[index].type === 'question') { if(currentFill) currentFill.style.width='100%'; return; }

  valSegStart = null;
  function animateSeg(ts) {
    if (!valSegStart) valSegStart = ts;
    const pct = Math.min(100, ((ts - valSegStart) / SLIDE_DURATION_MS) * 100);
    if (currentFill) currentFill.style.width = pct + '%';
    if (pct < 100) { valSegRAF = requestAnimationFrame(animateSeg); }
    else           { goValSlide(valSlideIndex + 1); }
  }
  valSegRAF = requestAnimationFrame(animateSeg);
}
function goValSlide(index) { stopValSlide(); showValSlide(index); }
function stopValSlide() { if (valSegRAF) { cancelAnimationFrame(valSegRAF); valSegRAF = null; } }

function triggerValentineYes() {
  stopValSlide();
  const success = document.getElementById('valentineSuccess');
  if (success) { success.classList.add('show'); launchConfetti('valentineConfetti'); }
}

// See-post popup
function showSeePostPopup(x, y) {
  seePostPopup.style.left = (x + 10) + 'px';
  seePostPopup.style.top  = (y - 10) + 'px';
  seePostPopup.classList.add('show');
  clearTimeout(seePostHideTimer);
  seePostHideTimer = setTimeout(hideSeePostPopup, 3000);
}
function hideSeePostPopup() { seePostPopup.classList.remove('show'); }
document.addEventListener('scroll', hideSeePostPopup, { passive: true });

// ─────────────────────────────────────────────
// (highlight)
// ─────────────────────────────────────────────
openHeartStory.addEventListener('click', openHeartStoryFn);
closeHeartStoryBtn.addEventListener('click', closeHeartStoryFn);
heartStoryModal.addEventListener('click', e => { if (e.target === heartStoryModal) closeHeartStoryFn(); });
storyTapPrev.addEventListener('click', () => goHeartSlide(heartSlideIndex - 1));
storyTapNext.addEventListener('click', () => goHeartSlide(heartSlideIndex + 1));

function buildHeartStory() {
  heartProgressBar.innerHTML = '';
  HEART_SLIDES.forEach((_, i) => {
    const seg = document.createElement('div');
    seg.className = 'story-seg';
    seg.setAttribute('data-seg', i);
    const fill = document.createElement('div');
    fill.className = 'story-seg-fill';
    seg.appendChild(fill);
    heartProgressBar.appendChild(seg);
  });
  heartSlidesEl.innerHTML = '';
  HEART_SLIDES.forEach((slide, i) => {
    const div = document.createElement('div');
    div.className = 'heart-story-slide' + (i === 0 ? ' active' : '');
    const img = document.createElement('img');
    img.src = slide.src; img.alt = 'memory ' + (i+1);
    if (slide.position) {
        img.style.objectPosition = slide.position;
    }
    const fallback = document.createElement('div');
    fallback.className = 'slide-fallback';
    fallback.innerHTML = `<span class="slide-emoji">📸</span><span>memory ${i+1}</span>`;
    fallback.style.display = 'none';
    img.onerror = () => { img.style.display = 'none'; fallback.style.display = 'flex'; };
    div.appendChild(img); div.appendChild(fallback);
    if (slide.caption) {
      const cap = document.createElement('div');
      cap.className = 'slide-caption'; cap.textContent = slide.caption;
      div.appendChild(cap);
    }
    heartSlidesEl.appendChild(div);
  });
}
function openHeartStoryFn() {
  buildHeartStory(); heartSlideIndex = 0;
  heartStoryModal.classList.add('open');
  document.body.classList.add('no-scroll');
  startAudio(); showHeartSlide(0);
}
function closeHeartStoryFn() {
  heartStoryModal.classList.remove('open');
  document.body.classList.remove('no-scroll');
  stopHeartSlide();
}
function showHeartSlide(index) {
  stopHeartSlide();
  if (index >= HEART_SLIDES.length) { closeHeartStoryFn(); return; }
  if (index < 0) index = 0;
  heartSlideIndex = index;
  heartSlidesEl.querySelectorAll('.heart-story-slide').forEach((s,i) => s.classList.toggle('active', i === index));
  heartProgressBar.querySelectorAll('.story-seg').forEach((seg,i) => {
    const fill = seg.querySelector('.story-seg-fill');
    if (i < index) { seg.classList.add('done'); fill.style.width='100%'; }
    else           { seg.classList.remove('done'); fill.style.width='0%'; }
  });
  const currentFill = heartProgressBar.querySelector(`[data-seg="${index}"] .story-seg-fill`);
  heartSegStart = null;
  function animateSeg(ts) {
    if (!heartSegStart) heartSegStart = ts;
    const pct = Math.min(100, ((ts - heartSegStart) / SLIDE_DURATION_MS) * 100);
    if (currentFill) currentFill.style.width = pct + '%';
    if (pct < 100) { heartSegRAF = requestAnimationFrame(animateSeg); }
    else           { goHeartSlide(heartSlideIndex + 1); }
  }
  heartSegRAF = requestAnimationFrame(animateSeg);
}
function goHeartSlide(index) { stopHeartSlide(); showHeartSlide(index); }
function stopHeartSlide() { if (heartSegRAF) { cancelAnimationFrame(heartSegRAF); heartSegRAF = null; } }

let heartTouchX = 0;
heartSlidesEl.addEventListener('touchstart', e => { heartTouchX = e.changedTouches[0].clientX; }, { passive: true });
heartSlidesEl.addEventListener('touchend', e => {
  const diff = heartTouchX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) { diff > 0 ? goHeartSlide(heartSlideIndex+1) : goHeartSlide(heartSlideIndex-1); }
}, { passive: true });

// ─────────────────────────────────────────────
// CONFETTI
// ─────────────────────────────────────────────
function launchConfetti(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  // canvas is position:fixed full-viewport
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const COLORS=['#ff6b9d','#ffc0cb','#ff1744','#c06c84','#ffd1dc','#fff','#ffb6c1','#ff85a1'];
  const SHAPES=['rect','circle','ribbon'];
  class Piece {
    constructor(){this.reset(true)}
    reset(init){
      this.x=Math.random()*canvas.width;
      this.y=init?Math.random()*canvas.height-canvas.height*1.2:-20;
      this.vx=(Math.random()-.5)*2.5; this.vy=Math.random()*3.5+1.5;
      this.size=Math.random()*9+4;
      this.color=COLORS[Math.floor(Math.random()*COLORS.length)];
      this.shape=SHAPES[Math.floor(Math.random()*SHAPES.length)];
      this.rot=Math.random()*360; this.spin=(Math.random()-.5)*6;
    }
    update(){this.x+=this.vx;this.y+=this.vy;this.rot+=this.spin;if(this.y>canvas.height+20)this.reset(false)}
    draw(){
      ctx.save(); ctx.translate(this.x,this.y); ctx.rotate(this.rot*Math.PI/180); ctx.fillStyle=this.color;
      if(this.shape==='rect'){ctx.fillRect(-this.size/2,-this.size/4,this.size,this.size/2)}
      else if(this.shape==='circle'){ctx.beginPath();ctx.arc(0,0,this.size/2.5,0,Math.PI*2);ctx.fill()}
      else{ctx.beginPath();ctx.moveTo(-this.size/2,0);ctx.bezierCurveTo(-this.size/4,-this.size/2,this.size/4,this.size/2,this.size/2,0);ctx.lineWidth=2;ctx.strokeStyle=this.color;ctx.stroke()}
      ctx.restore();
    }
  }
  const pieces=Array.from({length:160},()=>new Piece());
  stopConfetti();
  function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);pieces.forEach(p=>{p.update();p.draw()});confettiAnimId=requestAnimationFrame(animate)}
  animate();
}
function stopConfetti(){
  if(confettiAnimId){cancelAnimationFrame(confettiAnimId);confettiAnimId=null}
  const c=document.getElementById('valentineConfetti');
  if(c){c.getContext('2d').clearRect(0,0,c.width,c.height)}
}

// ─────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────
function escapeHtml(str){
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closePost(); closeValStory(); closeHeartStoryFn();
});
window.addEventListener('resize', () => {
  const c = document.getElementById('valentineConfetti');
  const s = document.getElementById('valentineSuccess');
  if (c && s && s.classList.contains('show')) {
    c.width  = window.innerWidth;
    c.height = window.innerHeight;
  }
});
