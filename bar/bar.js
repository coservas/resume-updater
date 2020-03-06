let startTimeButton = document.getElementById('start-time')
let resumeLinkButton = document.getElementById('resume-link')

showSuccessStartTimeButton()
showSuccessResumeLinkButton()

startTimeButton.addEventListener('click', () => openOptionsPage())
resumeLinkButton.addEventListener('click', () => openOptionsPage())

function openOptionsPage() {
    browser.runtime.openOptionsPage()
}

function showSuccessStartTimeButton(time) {
    startTimeButton.innerText = 'Start at '+ '08:00'
    startTimeButton.style.backgroundColor = '#4caf50'
}

function showErrorStartTimeButton() {
    startTimeButton.innerText = 'Choose a time'
    startTimeButton.style.backgroundColor = '#f44336'
}

function showSuccessResumeLinkButton() {
    resumeLinkButton.innerText = 'Link provided'
    resumeLinkButton.style.backgroundColor = '#4caf50'
}

function showErrorResumeLinkButton() {
    resumeLinkButton.innerText = 'Provide a link'
    resumeLinkButton.style.backgroundColor = '#f44336'
}

// setInterval(updateResume, 2000)

// browser.runtime.openOptionsPage();

document.getElementById('frog').innerHTML = 'lol'

browser.storage.sync.get('link')
    .then((res) => {
        document.getElementById('frog').innerHTML = res.link;
    })

// updateResume()
//
// function updateResume() {
//     let resumeUrl = 'https://petrozavodsk.hh.ru/resume/585bb5f2ff0384c6900039ed1f4e714a37734e'
//
//     let buttons = document.getElementsByClassName('bloko-button')
//
//     for (let item of buttons) {
//         let text = item.innerHTML
//         if (-1 !== text.indexOf('Обновить дату')) {
//             item.click()
//             console.log(item)
//         }
//     }
// }