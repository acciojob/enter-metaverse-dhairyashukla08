//your JS code here. If required.
const statusElement = document.getElementById('status');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
	const newContent = document.createElement('h1');
	newContent.textContent = "Entered Metaverse";
	statusElement.replaceWith(newContent);
});