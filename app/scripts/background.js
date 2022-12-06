console.log("background.js")
chrome.runtime.onInstalled.addListener((reason) => {
    console.log("Reason", reason)
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
      console.log("installed")
    }
  });