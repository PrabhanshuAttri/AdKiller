(function() {
  'use strict';
  const removeAds = () => {
    // select all nodes in the feed
    const allNodes = document.querySelectorAll('[data-pagelet^="FeedUnit_"]');
    allNodes.forEach((node) => {
      // check if it sponsored ad or not
      const sponsored = node.querySelectorAll('[aria-label="Sponsored"]');
      if(sponsored.length > 0) {
        console.log('Ad removed');
        node.remove();
      }
    });
  }

  // trigger on every scroll
  document.addEventListener("scroll", () => removeAds());
})();
