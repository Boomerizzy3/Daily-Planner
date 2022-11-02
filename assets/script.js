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

logUpdateonload();

container.addEventListener('click', (event) => {
    let element = event.target

    if (element.matches('#nine-am-save')) {
        let text = document.getElementById('nine-am-text').value
        console.log(text)
        localStorage.setItem('nine-am', text)
    }

    if (element.matches('#ten-am-save')) {
        let text = document.getElementById('ten-am-text').value
        console.log(text)
        localStorage.setItem('ten-am', text)
    }

    if (element.matches('#eleven-am-save')) {
        let text = document.getElementById('eleven-am-text').value
        console.log(text)
        localStorage.setItem('eleven-am', text)
    }

    if (element.matches('#twelve-pm-save')) {
        let text = document.getElementById('twelve-pm-text').value
        console.log(text)
        localStorage.setItem('twelve-pm', text)
    }

    if (element.matches('#one-pm-save')) {
        let text = document.getElementById('one-pm-text').value
        console.log(text)
        localStorage.setItem('one-pm', text)
    }

    if (element.matches('#two-pm-save')) {
        let text = document.getElementById('two-pm-text').value
        console.log(text)
        localStorage.setItem('two-pm', text)
    }

    if (element.matches('#three-pm-save')) {
        let text = document.getElementById('three-pm-text').value
        console.log(text)
        localStorage.setItem('three-pm', text)
    }

    if (element.matches('#four-pm-save')) {
        let text = document.getElementById('four-pm-text').value
        console.log(text)
        localStorage.setItem('four-pm', text)
    }

    if (element.matches('#five-pm-save')) {
        let text = document.getElementById('five-pm-text').value
        console.log(text)
        localStorage.setItem('five-pm', text)
    }
})