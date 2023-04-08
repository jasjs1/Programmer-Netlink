const showContainerBtn = document.getElementById('show-container');
		const containerType = document.getElementById('container-type');
		const questonContainer = document.getElementById('queston-container');
		const answerContainer = document.getElementById('answer-container');
		
		showContainerBtn.addEventListener('click', () => {
			if (containerType.value === 'queston') {
				questonContainer.style.display = 'block';
				answerContainer.style.display = 'none';
			} else if (containerType.value === 'answer') {
				questonContainer.style.display = 'none';
				answerContainer.style.display = 'block';
			}
		});