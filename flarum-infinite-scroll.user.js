// ==UserScript==
// @name           giffgaff Flarum Infini-scroll
// @description    Allows for infinite scrolling on the giffgaff community, automatically loading more content as you scroll.
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-infinite-scroll)
// @namespace      https://github.com/davwheat/giffgaff-flarum-infinite-scroll
// @version        0.1.0
// @icon           https://github.com/davwheat/giffgaff-flarum-infinite-scroll/blob/master/icon.png?raw=true
// @match          *://community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

function loadMoreIfNeeded() {
  const distanceToBottom = -(
    (document.body.scrollHeight || document.documentElement.scrollHeight) -
    (document.body.scrollTop ||
      document.documentElement.scrollTop +
        document.documentElement.clientHeight)
  );

  if (distanceToBottom > document.documentElement.clientHeight * 1.5) return;

  $(".DiscussionList-loadMore button").click();
}

document.body.addEventListener("scroll", loadMoreIfNeeded, { passive: true });
