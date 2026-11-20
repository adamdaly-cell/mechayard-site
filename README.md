# mechayard-site

Static landing page for [mechayard.com](https://mechayard.com): `index.html` and `logo.svg`, no build step.

Hosted on Vercel (project `mechayard-site`, framework preset "Other"). Pushes to `main` deploy to
production; other branches and pull requests get a preview deployment.

DNS is at Porkbun: `A @ -> 216.198.79.1` and `CNAME www -> 13a66bf2818b850c.vercel-dns-017.com`.
`www` redirects to the apex. The MX and SPF records there belong to Porkbun email forwarding and
must stay.
