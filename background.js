chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("letterboxd.com/Yoshintame/films/")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
      console.log("test3")
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: "test",
      });
    }
  });
  
  console.log("test4")