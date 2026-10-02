// ─────────────────────────────────────────────────────────────
//  MODULE LIST — the app loads these files from the modules/ folder.
//  To add a module: copy _template.js, rename it, then add its
//  file name (without .js) to the right place below.
// ─────────────────────────────────────────────────────────────

MT.areas = [
  { id: "aviation", title: "Aviation", zh: "航空" },
  { id: "business", title: "Business", zh: "商务" },
  { id: "travel",   title: "Travel",   zh: "旅行" }
];

MT.files = [
  "airport", "cabin", "industry",               // aviation
  "meetings", "negotiation", "office", "banquet", // business
  "hotel", "transport", "everyday"              // travel
];

// Newest first. The top entry shows on the home page.
MT.changelog = [
  { date: "2026-10-02", text: "First release: 10 modules, 1,000 phrases across aviation, business and travel." }
];
