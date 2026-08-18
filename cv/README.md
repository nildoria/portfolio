# CV source

Editable sources for the CV. The built PDFs are served from `public/` — that is
what the site links to and what you send to people.

| File | Purpose |
|---|---|
| `sabbir-ahmed-cv.html` | Designed version — portrait, two-column skills, accent headings |
| `sabbir-ahmed-cv-ats.html` | ATS version — single column, no image, standard headings |
| `portrait.png` | 360×360 square crop of `public/profile.png` |

Content is transcribed from `utils/data/` (personal-data, experience, skills,
projects-data) and `portfolio-skills-details.md`. If you change a role, project
or skill there, update it here too — these files are not generated from that
data at build time.

## Rebuilding the PDFs

Both PDFs are printed with headless Chrome. It needs the files served over HTTP
rather than `file://`, otherwise the webfont will not load and the type falls
back to Segoe UI.

```bash
# 1. serve this directory
cd cv && python -m http.server 8912

# 2. in another terminal, print both
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=15000 \
  --print-to-pdf="../public/Sabbir-Ahmed-CV.pdf" \
  "http://localhost:8912/sabbir-ahmed-cv.html"

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=15000 \
  --print-to-pdf="../public/Sabbir-Ahmed-CV-ATS.pdf" \
  "http://localhost:8912/sabbir-ahmed-cv-ats.html"
```

`--virtual-time-budget` is what gives the Inter webfont time to arrive. Without
it the PDF still builds, but in a fallback face.

## After rebuilding

Open both PDFs and check every page for: orphaned section headings, content
clipped at a page edge, and overall page count. Section headings use
`break-after: avoid` so they stay with their first entry — if you add content,
confirm that still holds.

Both should stay within two pages.
