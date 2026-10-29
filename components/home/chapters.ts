const D = "/images/demo/";

/** Photographic chapters for the opening sequence. Coordinates are approximate. */
export const chapters = [
  {
    id: "makkah",
    label: "Makkah",
    title: "Makkah al-Mukarramah",
    arabic: "مكة المكرمة",
    image: `${D}haram-aerial.jpg`,
    alt: "Masjid al-Haram in Makkah seen from above at night, with the Kaaba at its centre",
    coords: "21.4225° N · 39.8262° E",
    caption: "Masjid al-Haram, after Isha",
    position: "50% 55%",
  },
  {
    id: "madinah",
    label: "Madinah",
    title: "Madinah al-Munawwarah",
    arabic: "المدينة المنورة",
    image: `${D}nabawi-umbrellas.jpg`,
    alt: "The shaded courtyard of Masjid an-Nabawi in Madinah, its umbrellas open beneath the minarets",
    coords: "24.4672° N · 39.6112° E",
    caption: "Masjid an-Nabawi, the courtyard",
    position: "55% 45%",
  },
  {
    id: "arafat",
    label: "Arafat",
    title: "The Plain of Arafat",
    arabic: "عرفات",
    image: `${D}arafat.jpg`,
    alt: "Pilgrims on the steps of Jabal al-Rahmah on the plain of Arafat",
    coords: "21.3549° N · 39.9842° E",
    caption: "Jabal al-Rahmah, Arafat",
    position: "50% 40%",
  },
] as const;
