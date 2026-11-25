/*
  SCROLL website controls
  1) Toggle each content section below: true = visible, false = hidden.
  2) Replace the sample video URLs with your YouTube or Vimeo links.
  3) Replace images inside /assets with your own files, keeping the same filenames.
*/
const SITE_CONFIG = {
  sections: {
    hero: true,
    film: true,
    posters: true,
    trailer: true,
    bytes: true,
    behind: true
  },
  videos: {
    trailer: "https://player.vimeo.com/video/1230499139?autopause=0&amp;player_id=0&amp;app_id=58479",
    byte1: "https://www.youtube.com/embed/REPLACE_WITH_BYTE_1_ID",
    byte2: "https://www.youtube.com/embed/REPLACE_WITH_BYTE_2_ID",
    byte3: "https://www.youtube.com/embed/REPLACE_WITH_BYTE_3_ID",
    making: "https://www.youtube.com/embed/REPLACE_WITH_MAKING_VIDEO_ID"
  }
};

// Optional Vimeo format: https://player.vimeo.com/video/VIDEO_ID
Object.entries(SITE_CONFIG.sections).forEach(([id, enabled]) => {
  const section = document.getElementById(id);
  if (section) section.hidden = !enabled;
});

document.querySelectorAll("[data-video]").forEach((container) => {
  container.addEventListener("click", () => {
    const key = container.dataset.video;
    const url = SITE_CONFIG.videos[key];
    if (!url || url.includes("REPLACE_WITH")) {
      alert(`Add the ${key} video URL in script.js (SITE_CONFIG.videos).`);
      return;
    }
    const iframe = document.createElement("iframe");
    iframe.src = url + (url.includes("?") ? "&" : "?") + "autoplay=1&rel=0";
    iframe.title = key + " video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    container.replaceChildren(iframe);
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
