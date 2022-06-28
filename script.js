document.querySelectorAll('.story-btn').forEach((btn) => {
	btn.addEventListener('click', () => {
		//console.log("Clicked"); Testing
		btn.classList.toggle('change-button-on-click')
		btn.nextElementSibling.classList.toggle('display-story-on-click')
	})
})
