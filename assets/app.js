/* Renders the page from assets/links.js. You shouldn't need to edit this file. */
(function () {
  "use strict";

  var ACCENTS = ["cobalt", "purple", "blue", "red", "grey"];

  var profile = typeof PROFILE === "object" && PROFILE ? PROFILE : {};
  var links = Array.isArray(typeof LINKS !== "undefined" ? LINKS : null) ? LINKS : [];

  function slot(key) {
    return document.querySelector('[data-profile="' + key + '"]');
  }

  // mailto:, tel: and same-page anchors should stay in this tab.
  function opensNewTab(url) {
    return /^https?:/i.test(url);
  }

  /* ---- header and footer text ---- */

  function fillText(key) {
    var el = slot(key);
    if (el && profile[key]) el.textContent = profile[key];
  }

  ["kicker", "tagline", "about", "emailNote"].forEach(fillText);

  // Headline keeps its line breaks: "\n" in links.js becomes a <br>.
  var headline = slot("headline");
  if (headline && profile.headline) {
    profile.headline.split("\n").forEach(function (line, i) {
      if (i) {
        // The space keeps the lines apart on narrow screens, where CSS
        // hides the <br> and lets the headline wrap on its own.
        headline.appendChild(document.createTextNode(" "));
        headline.appendChild(document.createElement("br"));
      }
      headline.appendChild(document.createTextNode(line));
    });
  }

  var email = slot("email");
  if (email && profile.email) {
    email.textContent = profile.email;
    email.href = "mailto:" + profile.email;
  }

  var social = slot("social");
  if (social && Array.isArray(profile.social)) {
    profile.social.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.url || "#";
      a.textContent = item.label || item.url || "";
      if (opensNewTab(a.href)) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      li.appendChild(a);
      social.appendChild(li);
    });
  }

  /* ---- links ---- */

  function arrow() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 18 18");
    svg.setAttribute("class", "row__arrow");
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M3 9h11M9.5 4l5 5-5 5");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.7");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
    return svg;
  }

  function row(link, index) {
    var a = document.createElement("a");
    a.className = "row";
    a.href = link.url || "#";
    a.setAttribute(
      "data-accent",
      ACCENTS.indexOf(link.accent) > -1 ? link.accent : "cobalt"
    );
    if (opensNewTab(a.href)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }

    var no = document.createElement("span");
    no.className = "row__no";
    no.textContent = ("0" + (index + 1)).slice(-2);
    a.appendChild(no);

    var body = document.createElement("span");
    body.className = "row__body";

    var head = document.createElement("span");
    head.className = "row__head";

    var title = document.createElement("span");
    title.className = "row__title";
    title.textContent = link.title || "Untitled";
    head.appendChild(title);

    if (link.badge) {
      var badge = document.createElement("span");
      badge.className = "row__badge";
      badge.textContent = link.badge;
      head.appendChild(badge);
    }

    body.appendChild(head);

    if (link.description) {
      var desc = document.createElement("span");
      desc.className = "row__desc";
      desc.textContent = link.description;
      body.appendChild(desc);
    }

    a.appendChild(body);

    var meta = document.createElement("span");
    meta.className = "row__meta";
    if (link.tag) {
      var tag = document.createElement("span");
      tag.className = "row__tag";
      tag.textContent = link.tag;
      meta.appendChild(tag);
    }
    meta.appendChild(arrow());
    a.appendChild(meta);

    return a;
  }

  var list = document.getElementById("links");
  if (list) {
    if (!links.length) {
      var empty = document.createElement("p");
      empty.className = "fallback";
      empty.textContent = "No links yet — add some in assets/links.js.";
      list.appendChild(empty);
    } else {
      var frag = document.createDocumentFragment();
      links.forEach(function (link, i) {
        frag.appendChild(row(link, i));
      });
      list.appendChild(frag);
    }
  }
})();
