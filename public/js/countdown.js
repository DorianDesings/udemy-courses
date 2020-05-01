const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};

const countdown = (deadline, languaje) => {
    const link = document.getElementById(`${languaje}-link`)

    const days = document.getElementById(`${languaje}-days`)
    const hours = document.getElementById(`${languaje}-hours`)
    const minutes = document.getElementById(`${languaje}-minutes`)
    const seconds = document.getElementById(`${languaje}-seconds`)
    const interval = setInterval(() => {
        const t = getRemainingTime(deadline);
        days.innerHTML = t.remainDays
        hours.innerHTML = t.remainHours
        minutes.innerHTML = t.remainMinutes
        seconds.innerHTML = t.remainSeconds
        if (t.remainTime <= 1) {
            clearInterval(interval)
            days.innerHTML = '-'
            hours.innerHTML = '-'
            minutes.innerHTML = '-'
            seconds.innerHTML = '-'
            link.href = '#'
            link.setAttribute('target', '')
            link.innerHTML = 'Próximo cupón pronto'
        }
    }, 1000)
};

countdown('May 1 2020 11:28:00 GMT+0200', 'html');
countdown('May 3 2020 21:34:40 GMT+0200', 'css');
countdown('May 3 2020 21:34:40 GMT+0200', 'js');
countdown('May 27 2020 05:05:00 GMT-0700', 'react');