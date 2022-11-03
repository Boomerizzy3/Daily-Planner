let container = document.getElementById('container')

const logUpdateonload = () => {
    let logNine = localStorage.getItem('nine-am')
    let logTen = localStorage.getItem('ten-am')
    let logEleven = localStorage.getItem('eleven-am')
    let logTwelve = localStorage.getItem('twelve-pm')
    let logOne = localStorage.getItem('one-pm')
    let logTwo = localStorage.getItem('two-pm')
    let logThree = localStorage.getItem('three-pm')
    let logFour = localStorage.getItem('four-pm')
    let logFive = localStorage.getItem('five-pm')
    

    document.getElementById('nine-am-text').value = logNine
    document.getElementById('ten-am-text').value = logTen
    document.getElementById('eleven-am-text').value = logEleven
    document.getElementById('twelve-pm-text').value = logTwelve
    document.getElementById('one-pm-text').value = logOne
    document.getElementById('two-pm-text').value = logTwo
    document.getElementById('three-pm-text').value = logThree
    document.getElementById('four-pm-text').value = logFour
    document.getElementById('five-pm-text').value = logFive

}

const timeDisplay = () => {
    let time = moment().format("kk");
    let currentDay = moment().format('dddd, MMMM do')

    document.getElementById('current-day').innerHTML = currentDay

    let hours = [document.getElementById('nine-am'), document.getElementById('ten-am'), document.getElementById('eleven-am'), document.getElementById('twelve-pm'), document.getElementById('one-pm'), document.getElementById('two-pm'), document.getElementById('three-pm'), document.getElementById('four-pm'), document.getElementById('five-pm')]

    for (let i = 0; i < hours.length; i++) {
        let x = i + 9
        if (x == time) {
            hours[i].style.backgroundColor = 'red';
        } else if (x > time) {
            hours[i].style.backgroundColor = 'green';
        }
    }

}

timeDisplay();

logUpdateonload();

container.addEventListener('click', (event) => {
    let element = event.target

    if (element.matches('#nine-am-save')) {
        let text = document.getElementById('nine-am-text').value
        localStorage.setItem('nine-am', text)
    }

    if (element.matches('#ten-am-save')) {
        let text = document.getElementById('ten-am-text').value
        localStorage.setItem('ten-am', text)
    }

    if (element.matches('#eleven-am-save')) {
        let text = document.getElementById('eleven-am-text').value
        localStorage.setItem('eleven-am', text)
    }

    if (element.matches('#twelve-pm-save')) {
        let text = document.getElementById('twelve-pm-text').value
        localStorage.setItem('twelve-pm', text)
    }

    if (element.matches('#one-pm-save')) {
        let text = document.getElementById('one-pm-text').value
        localStorage.setItem('one-pm', text)
    }

    if (element.matches('#two-pm-save')) {
        let text = document.getElementById('two-pm-text').value
        localStorage.setItem('two-pm', text)
    }

    if (element.matches('#three-pm-save')) {
        let text = document.getElementById('three-pm-text').value
        localStorage.setItem('three-pm', text)
    }

    if (element.matches('#four-pm-save')) {
        let text = document.getElementById('four-pm-text').value
        localStorage.setItem('four-pm', text)
    }

    if (element.matches('#five-pm-save')) {
        let text = document.getElementById('five-pm-text').value
        localStorage.setItem('five-pm', text)
    }
})