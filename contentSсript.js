(() => {
  console.log("test0")
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
      const { type, value, videoId } = obj;
      console.log("test1")
      if (type === "NEW") {
          console.log("test2")
          currentVideo = videoId;
      }
  });
})();

