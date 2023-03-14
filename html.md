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
			
			
			
			
### For Unique id baseed on user input

		<!DOCTYPE html>
	<html>
	  <head>
	    <title>Unique ID Example</title>
	  </head>
	  <body>
	    <div id="unique-form-id">
	      <label for="day-input">Enter day of year:</label>
	      <input type="number" id="day-input" name="day-input" min="1" max="366" required>
	      <button id="confirm-btn">Confirm</button>
	    </div>
	    <p id="id-display"></p>
	    <script>
	      // Get the form element by its ID
	      const form = document.getElementById('unique-form-id');

	      // Get the display element by its ID
	      const display = document.getElementById('id-display');

	      // Add event listener to the confirm button
	      const confirmBtn = document.getElementById('confirm-btn');
	      confirmBtn.addEventListener('click', updateId);

	      function updateId() {
		// Get the current year and day of the year from the input
		const dayInput = document.getElementById('day-input').value;
		const now = new Date();
		const year = now.getFullYear();
		const dayOfYear = parseInt(dayInput);

		// Validate the input
		if (dayOfYear <= 0 || dayOfYear > 366) {
		  alert('Invalid day of year!');
		  return;
		}

		// Format the ID string with the year and day of year
		const id = `indc/ops/daily/${dayOfYear}/${year}`;

		// Set the ID attribute of the form element to the unique ID string
		form.setAttribute('id', id);

		// Update the display element with the ID
		display.textContent = `Unique ID: ${id}`;
	      }
	    </script>
	  </body>
	</html>


### For unique Id without using the user input

