import qrencode from 'qrcode-pure/lib/qrencode'
window.addEventListener('DOMContentLoaded', function () {
  encodeCanvas = document.getElementById('qrbox');
  chrome.tabs.getSelected(null, function (tab) {
    window.result = qrencode({ text: tab.url })
    encodeCanvas.appendChild(result.canvas)
  });
})

