//your JS code here. If required.
const statusElement = document.getElementById('status');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
  statusElement.innerHTML = '<h1>Entered Metaverse</h1>';
});