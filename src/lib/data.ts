// Shared content for the Mozaik Images site.
// Imagery is currently Unsplash placeholder; replace `cover` / `images` URLs
// with the photographer's real work (and ideally self-hosted assets).

export type ProjectRow = "one" | "two-a" | "two-b";

export interface ProjectImage {
  url: string;
  row: ProjectRow;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  year: string;
  location: string;
  cover: string;
  /** 12-col grid span used on the work grid, e.g. "span-7" */
  span: "span-4" | "span-5" | "span-6" | "span-7" | "span-8";
  aspect: "tall" | "wide";
  lede: string;
  images: ProjectImage[];
}

export const PROJECTS: Project[] = [
  {
    id: "sara-theo",
    title: "Sara & Théo",
    type: "Wedding",
    year: "2024",
    location: "Toronto",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600",
    span: "span-7",
    aspect: "tall",
    lede:
      "A two-day celebration in late September. Mostly available light, mostly the people who already loved them.",
    images: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600", row: "one" },
      { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200", row: "two-a" },
      { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200", row: "two-b" },
      { url: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=1600", row: "one" },
    ],
  },
  {
    id: "holdfast",
    title: "Holdfast",
    type: "Brand",
    year: "2024",
    location: "Studio",
    cover: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600",
    span: "span-5",
    aspect: "tall",
    lede:
      "Campaign stills for an independent menswear label. Studio + on-location, twelve looks across two days.",
    images: [
      { url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600", row: "one" },
      { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200", row: "two-a" },
      { url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200", row: "two-b" },
    ],
  },
  {
    id: "lighthouse",
    title: "Lighthouse Hours",
    type: "Travel",
    year: "2025",
    location: "Lisbon",
    cover: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1600",
    span: "span-8",
    aspect: "wide",
    lede: "Three weeks along the Portuguese coast — quiet, slow, mostly mornings.",
    images: [
      { url: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1600", row: "one" },
      { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200", row: "two-a" },
      { url: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1200", row: "two-b" },
    ],
  },
  {
    id: "north-room",
    title: "North Room",
    type: "Music",
    year: "2025",
    location: "Montréal",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600",
    span: "span-4",
    aspect: "tall",
    lede: "An album release show, shot on stage and from the floor.",
    images: [
      { url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600", row: "one" },
      { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200", row: "two-a" },
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200", row: "two-b" },
    ],
  },
  {
    id: "tuesday-light",
    title: "Tuesday Light",
    type: "Documentary",
    year: "2024",
    location: "Hamilton",
    cover: "https://images.unsplash.com/photo-1499363536502-87642509e31b?w=1600",
    span: "span-6",
    aspect: "wide",
    lede: "A short film about a neighbourhood diner that has been open since 1973.",
    images: [
      { url: "https://images.unsplash.com/photo-1499363536502-87642509e31b?w=1600", row: "one" },
      { url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200", row: "two-a" },
      { url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1200", row: "two-b" },
    ],
  },
  {
    id: "high-and-mighty",
    title: "High & Mighty",
    type: "Architecture",
    year: "2025",
    location: "New York",
    cover: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600",
    span: "span-6",
    aspect: "wide",
    lede: "Interior photography of a renovated brownstone in Brooklyn.",
    images: [
      { url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600", row: "one" },
      { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200", row: "two-a" },
    ],
  },
];

export interface Reel {
  thumb: string;
  duration: string;
}

export const REEL: Reel = {
  thumb: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600",
  duration: "01:48",
};

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function getNextProject(currentId: string): Project {
  const idx = PROJECTS.findIndex((p) => p.id === currentId);
  return PROJECTS[(idx + 1) % PROJECTS.length];
}
