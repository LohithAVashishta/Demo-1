<!DOCTYPE html>
<html>
<head>
	<title>Current Time and Date</title>
	<style>
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 2rem;
			font-weight: bold;
			height: 100vh;
		}

		.time, .date {
			margin: 1rem;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="time">Current Time: <span id="current-time"></span></div>
		<div class="date">Current Date: <span id="current-date"></span></div>
	</div>

	<script>
		const timeElement = document.getElementById("current-time");
		const dateElement = document.getElementById("current-date");

		setInterval(() => {
			const now = new Date();
			const timeString = now.toLocaleTimeString();
			const dateString = now.toLocaleDateString();
			timeElement.innerText = timeString;
			dateElement.innerText = dateString;
		}, 1000);
	</script>
</body>
</html>
