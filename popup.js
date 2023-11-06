function abrirNuevaPestana() {
  chrome.tabs.create({ url: 'index.html' });
}

document.getElementById('abrirPestanaBtn').addEventListener('click', abrirNuevaPestana);