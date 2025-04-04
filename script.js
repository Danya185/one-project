document.addEventListener('DOMContentLoaded', () => {
    const musicButton = document.getElementById('music-button');
    const backgroundMusic = document.getElementById('background-music');

    // Автоматически запускаем музыку при загрузке страницы
    backgroundMusic.play();

    musicButton.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicButton.textContent = 'Выключить музыку';
        } else {
            backgroundMusic.pause();
            musicButton.textContent = 'Включить музыку';
        }
    });

    const countdown = () => {
        const countDate = new Date('Jan 1, 2026 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(gap / day);
        const hours = Math.floor((gap % day) / hour);
        const minutes = Math.floor((gap % hour) / minute);
        const seconds = Math.floor((gap % minute) / second);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        // Функция для изменения текста меток в зависимости от количества
        const updateLabel = (value, labelId, forms) => {
            const label = document.getElementById(labelId);
            if (value % 10 === 1 && value % 100 !== 11) {
                label.textContent = forms[0];
            } else if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
                label.textContent = forms[1];
            } else {
                label.textContent = forms[2];
            }
        };

        updateLabel(days, 'days-label', ['День', 'Дня', 'Дней']);
        updateLabel(hours, 'hours-label', ['Час', 'Часа', 'Часов']);
        updateLabel(minutes, 'minutes-label', ['Минута', 'Минуты', 'Минут']);
        updateLabel(seconds, 'seconds-label', ['Секунда', 'Секунды', 'Секунд']);
    };

    // Запускаем функцию сразу и затем каждую секунду
    countdown();
    setInterval(countdown, 1000); // Обновляем значения каждую секунду
});




