# Temple photos

Put one photo per temple here as `<slug>.jpg` (for example `kedarnath.jpg`), about 1600 px wide,
then add a `photo` entry to that temple in `src/data/temples.ts`:

```ts
photo: {
  src: "/temples/kedarnath.jpg",
  alt: "Kedarnath Temple with snow-covered peaks behind",
  credit: "Photographer's name",
  license: "CC BY-SA 4.0",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:...",
},
```

Freely licensed photos (Wikimedia Commons) must keep the photographer credit and licence link,
which the site shows on every photo. Temples without a photo keep their line drawing.
