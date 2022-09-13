console.log("Better-Letterboxd is working")

const addToWatchlistButton = () => {
    overlays = document.getElementsByClassName("overlay-actions")
    console.log(overlays.length)
    
    for (let overlay of overlays){
        // overlayWidth = parseInt(getComputedStyle(overlay).width, 10)
        // overlayWidth = overlayWidth.getHiddenOffsetWidth()
        // overlay.style.width = overlayWidth / 4 * 3
        // console.log(overlayWidth)

        let likeButton = overlay.querySelector(".like-link-target")
        let likeButtonCopy = likeButton.cloneNode(true)
        likeButton.append(likeButtonCopy)
        console.log("appended")
    }
}
  
document.addEventListener("DOMContentLoaded", addToWatchlistButton())
window.addEventListener('load', addToWatchlistButton())

posters = document.getElementsByClassName("react-component poster film-poster linked-film-poster")
