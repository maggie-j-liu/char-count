document.addEventListener("selectionchange", function () {
  const selection = window
    .getSelection()
    .toString()
    .replaceAll("\t", "    ")
    .replace(/\n$/, "");
  if (selection.length !== 0) {
    chrome.runtime.sendMessage({
      request: "updateContextMenu",
      selection: selection,
    });
  }
});
