<p align="center">
    <img src="images/alarm-clock.png" alt="Alarm clock"/>
</p>

# countdown

⏰ Countdown mechanism + creating stickers after `double click`

## Preview 🎉

<https://piecioshka.github.io/countdown/>

## Features

- ✅ Counts down to `00:00` with large, legible digits
- ✅ Lets you adjust the remaining time mid-countdown via the URL hash (press `Enter` to apply)
- ✅ Ships with a custom web font tailored for the clock face
- ✅ Automatically switches to a red alert theme when time runs out
- ✅ Plays an alarm sound the moment the countdown completes
- ✅ Works in all modern desktop and mobile browsers
- ✅ Uses [MoveMaster](https://github.com/piecioshka/move-master) for drag-and-drop interactions
- ✅ Double-click empty space to spawn movable sticky notes 📒 on `document.body`

## How to set time in countdown?

Provide the target time in the URL hash using `SS`, `MM:SS`, or `HH:MM:SS` formats:

- <https://piecioshka.github.io/countdown/> – default `01:00`
- <https://piecioshka.github.io/countdown/#45> – 45 seconds
- <https://piecioshka.github.io/countdown/#10:00> – 10 minutes
- <https://piecioshka.github.io/countdown/#03:14> – 3 minutes, 14 seconds
- <https://piecioshka.github.io/countdown/#02:15:00> – 2 hours, 15 minutes
- <https://piecioshka.github.io/countdown/#100:00> – 1 hour, 40 minutes

## Print screens

Start time:

![Regular](images/start-time.png)

End of time:

![Alarm](images/end-of-time.png)

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2017
