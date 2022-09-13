console.log("Better-Letterboxd is working")


const addToWatchlistButton = (posterNode) => {
    overlay = posterNode.getElementsByClassName("overlay-actions")[0]
  
    let likeButton = overlay.querySelector(".like-link-target")
    let likeButtonCopy = likeButton.cloneNode(true)
    likeButton.append(likeButtonCopy)

    console.log("Button appended")
   
    overlayWidth = parseInt(getComputedStyle(overlay).width, 10)
    console.log("Overlay Width:" + +(overlayWidth) + "px")

    overlay.style.width = +(overlayWidth / 3 * 4) + "px"
     
}


const createObserver = () => {
    let observer = new MutationObserver(mutations => {
        for(let mutation of mutations) {
            for(let node of mutation.addedNodes) {
              if (!(node instanceof HTMLElement)) continue;

              if (node.matches('.react-component, .poster, .film-poster')) {
                addToWatchlistButton(node);
              }
            }
          }
    });

    let contentWraperNode = document.getElementsByClassName('content-wrap')[0]
    observer.observe(contentWraperNode, {childList: true, subtree: true})
}


window.addEventListener('load', createObserver())



// $.fn.getHiddenOffsetWidth = function () {
//     // save a reference to a cloned element that can be measured
//     var $hiddenElement = $(this).clone().appendTo('body');

//     // calculate the width of the clone
//     var width = $hiddenElement.outerWidth();

//     // remove the clone from the DOM
//     $hiddenElement.remove();

//     return width;
// };