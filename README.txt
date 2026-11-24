SCROLL WEBSITE — QUICK SETUP

FILES
- index.html       Main page
- styles.css       Design and responsive layout
- script.js        Section switches and video links
- assets/          Put your own images here

SECTION SWITCHES
Open script.js and edit SITE_CONFIG.sections:
  hero: true,
  film: true,
  posters: true,
  trailer: true,
  bytes: true,
  behind: true

Set any section to false to hide it. Set it back to true to show it.

VIDEO LINKS
In script.js, replace each placeholder URL under SITE_CONFIG.videos.
YouTube embed format:
  https://www.youtube.com/embed/VIDEO_ID
Vimeo embed format:
  https://player.vimeo.com/video/VIDEO_ID

IMAGE FILES
Replace these image files in assets/ (keep filenames):
  poster-main.jpg
  poster-02.jpg
  poster-03.jpg
  making-01.jpg
  making-02.jpg
  making-03.jpg

You can use PNG or WebP too, but update the matching src/href in index.html.
The image slots are intentionally empty until you add your own approved artwork/stills.

HOSTING
Upload index.html, styles.css, script.js and the entire assets folder to the public root
of your hosting space (for example GitHub Pages). No server or database is required.

NOTE
Google Fonts are loaded online. For fully offline use, remove the Google Fonts links
and use the fallback fonts already defined in styles.css.
