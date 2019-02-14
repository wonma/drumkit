
window.addEventListener('keydown', (e) => {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)	

	if(!audio) return;
	audio.currentTime = 0
	audio.play()

	key.classList.add('playing')
})

// 모든 div 엘리먼트들이 본인의 transition이 끝나는 순간에 class떼는 이벤트 발생하도록

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key')

keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition)
})