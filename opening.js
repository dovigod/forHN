let opens = document.getElementById('entry');
alert("heloo");

function moveClouds(e) {
	/* clouds 1 & 2 move to the left 
    
       clouds 3 & 4 to the right */

	for (i = 1; i < 5; i++) {
		var cloud = document.getElementById(`cloud${i}`);
		cloud.style.transitionTimingFunction = 'ease-out';
		cloud.style.transitionDuration = '300ms';
		var top = window.getComputedStyle(cloud, null).getPropertyValue('top');

		topValue = parseInt(top);
		topValue = topValue - 210;
		top = topValue + 'px';

		cloud.style.top = top;

		var left = window.getComputedStyle(cloud, null).getPropertyValue('left');
		leftValue = parseInt(left);

		if (i < 3) {
			leftValue = leftValue - 210;
		} else {
			leftValue = leftValue + 210;
		}
		left = leftValue + 'px';

		cloud.style.left = left;
	}
}

const handleClick = (e) => {
	alert('click');
	opens.classList.append('clicked');
};

const openings = () => {
	opens.addEventListener('click', () => {
		alert(333);
	});
	opens.addEventListener('onmousemove', () => {
		alert(222);
	});
};


openings();