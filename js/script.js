function updateUTCTimeMilliseconds() {
			const now = new Date();
			const utcTimeMilliseconds = now.getTime();
			document.getElementById('utc-time-milliseconds').textContent = utcTimeMilliseconds;
		}

		setInterval(updateUTCTimeMilliseconds, 1000);

		updateUTCTimeMilliseconds();


		const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		const currentDate = new Date();

		const dayofWeek = currentDate.getDay();

		document.getElementById('day-of-week').textContent = weekdays[dayofWeek];