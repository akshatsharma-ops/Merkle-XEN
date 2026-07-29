/* ============================================================
   EDIT THIS FILE TO ADD OR CHANGE LINKS. Nothing else needed.

   To add a link, copy one block inside LINKS and change the text:

     {
       title: "What it is",
       description: "One short line",   // optional
       url: "https://…",
       tag: "Toolkit",                  // optional pill on the right
       accent: "cobalt",                // cobalt | purple | blue | red | grey
       badge: "New"                     // optional sticker, use sparingly
     },

   Order in this list is the order on the page. Top item = first.
   ============================================================ */

const PROFILE = {
  kicker: "Link hub",
  headline: "Every link we hand out.\nOne page.",
  tagline:
    "Tools, sessions and work from the XEN team. Start anywhere.",

  about: "A running list of what we share — updated as we ship it.",

  email: "hello@merkle.com",
  emailNote: "Tell us what you're stuck on.",

  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/company/merkle" },
    { label: "Merkle.com", url: "https://www.merkle.com" },
  ],
};

const LINKS = [
  {
    title: "XEN Tools",
    description: "Find the right tool for the problem you're working on.",
    url: "https://www.merkle.com",
    tag: "Toolkit",
    accent: "cobalt",
    badge: "Start here",
  },
  {
    title: "XEN LAB",
    description: "What we're experimenting with right now.",
    url: "https://www.merkle.com",
    tag: "Lab",
    accent: "purple",
  },
  {
    title: "Workshops",
    description: "Sessions you can run with your team next week.",
    url: "https://www.merkle.com",
    tag: "Sessions",
    accent: "blue",
  },
  {
    title: "Case studies",
    description: "Work we've shipped, and what we learned doing it.",
    url: "https://www.merkle.com",
    tag: "Work",
    accent: "red",
  },
  {
    title: "Get in touch",
    description: "Bring us a problem. We'll point you somewhere useful.",
    url: "mailto:hello@merkle.com",
    tag: "Contact",
    accent: "grey",
  },
];
