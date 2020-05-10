// ==UserScript==
// @name           giffgaff Flarum Infini-scroll
// @description    Allows for infinite scrolling on the giffgaff community, automatically loading more content as you scroll.
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-infinite-scroll)
// @namespace      https://github.com/davwheat/giffgaff-flarum-infinite-scroll
// @version        1.0.0
// @icon           https://github.com/davwheat/giffgaff-flarum-infinite-scroll/blob/master/icon.png?raw=true
// @match          *://community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

// Increase this if it's loading content too late
const multiplier = 1.75

function loadMoreIfNeeded() {
  const distanceToBottom = -(
    (document.body.scrollHeight || document.documentElement.scrollHeight) -
    (document.body.scrollTop ||
      document.documentElement.scrollTop +
        document.documentElement.clientHeight)
  );

  console.log({
    "distance to bottom": distanceToBottom,
    height: document.documentElement.clientHeight * multiplier,
  });

  if (distanceToBottom > document.documentElement.clientHeight * multiplier) return;

  $(".DiscussionList-loadMore button").click();
}

document.addEventListener("scroll", loadMoreIfNeeded, { passive: true });
