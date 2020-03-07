let startTimeButton = document.getElementById('start-time')
let resumeLinkButton = document.getElementById('resume-link')

browser.storage.sync.get('link')
    .then((res) => {
        if (res.link.length > 0) {
            showSuccessResumeLinkButton()
        } else {
            showErrorResumeLinkButton()
        }
    })
    .catch((err) => {
        showErrorResumeLinkButton()
    })

// startTimeButton.addEventListener('click', () => openOptionsPage())
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