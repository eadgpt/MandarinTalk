// ─────────────────────────────────────────────────────────────
//  MODULE LIST — the app loads these files from the modules/ folder.
//  To add a module: copy _template.js, rename it, then add its
//  file name (without .js) to the right place below.
// ─────────────────────────────────────────────────────────────

MT.areas = [
  { id: "priority", title: "Priority", zh: "重点" },   // shown first on the home page
  { id: "aviation", title: "Aviation", zh: "航空" },
  { id: "business", title: "Business", zh: "商务" },
  { id: "travel",   title: "Travel",   zh: "旅行" }
];

MT.files = [
  "changi", "leaders", "chinaaviation",         // priority
  "airport", "cabin", "industry",               // aviation
  "meetings", "negotiation", "office", "banquet", // business
  "hotel", "transport", "everyday"              // travel
];

// Newest first. The top entry shows on the home page.
MT.changelog = [
  { date: "2026-10-04", text: "New Priority module: Changi Airport & Jewel Tour — hosting guests and VIPs around the airport and Jewel, with the key facts and figures." },
  { date: "2026-10-04", text: "New look: bottom bar, category chips, one topic at a time with Next buttons, back-to-top button, plus daily goals, streaks, levels and medals." },
  { date: "2026-10-04", text: "Text size: Settings → A− / A+. Favourites: tap ☆ on any phrase or \"Remember these\" card to save it. Every module now has a \"Remember these\" box, and Senior Leaders covers the C-suite." },
  { date: "2026-10-04", text: "Two new modules on top: Senior Leaders & Founders, and China Aviation (people, airlines, cities, provinces) — with memory hooks and a \"Remember these\" box." },
  { date: "2026-10-02", text: "First release: 10 modules, 1,000 phrases across aviation, business and travel." }
];
