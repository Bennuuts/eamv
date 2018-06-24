const videoElement = document.querySelector("#video-tag");

const playButton = document.querySelector(".play-button");

const stopButton = document.querySelector(".stop-button");

const sendStartRequest = () => {
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", "api.php?type=start", true);
	xhttp.send();
}

const sendPauseRequest = () => {
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", "api.php?type=stop", true);
	xhttp.send();
}

videoElement.onplay = sendStartRequest;

videoElement.onpause = sendPauseRequest;


playButton.addEventListener('click', () =>{
	playButton.classList.add("hidden");
  stopButton.classList.remove("hidden");
	videoElement.play();
});

stopButton.addEventListener('click', () =>{
	stopButton.classList.add("hidden");
  playButton.classList.remove("hidden");
	videoElement.pause();
});
