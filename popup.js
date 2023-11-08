function openNewTab() {
  chrome.tabs.create({ url: 'index.html' });
}

document.getElementById('openTabBtn').addEventListener('click', openNewTab);