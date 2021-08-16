const contextMenuId = "charcount";
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "0 characters",
    contexts: ["selection"],
    id: contextMenuId,
    documentUrlPatterns: [
      "https://github.com/*",
      "https://usaco.guide/*",
      "https://*.vercel.app/*",
    ],
  });
});

chrome.runtime.onMessage.addListener(function (msg) {
  if (msg.request === "updateContextMenu" && msg.selection.length !== 0) {
    chrome.contextMenus.update(contextMenuId, {
      title: `${msg.selection.length} character${
        msg.selection.length === 1 ? "" : "s"
      }`,
    });
  }
});
