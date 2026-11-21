# mechayard-site

Static site for [mechayard.com](https://mechayard.com). Plain HTML, no build step.

- `index.html`: home page (the lot, bays, featured build).
- `builds/index.html`: list of builds.
- `builds/<slug>/index.html`: one build, with its photos in `builds/<slug>/img/`.
- `builds/nc/`: the Miata, one build in four volumes. `builds/nc/index.html` is the series page;
  each volume is `builds/nc/vol-<n>-<name>/` and carries a volume strip linking all four.
- `vercel.json`: redirects from the old build URLs (`/builds/lfx-nc/` and friends).
- `assets/site.css`, `assets/site.js`: styles and the photo lightbox shared by every page.
- `logo.svg`: logo and favicon.

To add a build, copy `builds/nc/vol-4-lfx/`, replace the text and photos, and add a card to
`builds/index.html`. Photos are resized to 1400 px on the long edge before they go in.

To preview locally, run `python3 -m http.server` in this folder and open <http://localhost:8000>.

Hosted on Vercel (project `mechayard-site`, framework preset "Other"). Pushes to `main` deploy to
production; other branches and pull requests get a preview deployment.

DNS is at Porkbun: `A @ -> 216.198.79.1` and `CNAME www -> 13a66bf2818b850c.vercel-dns-017.com`.
`www` redirects to the apex. The MX and SPF records there belong to Porkbun email forwarding and
must stay.
