// setInterval(updateResume, 2000)

updateResume()

function updateResume() {
    let resumeUrl = 'https://petrozavodsk.hh.ru/resume/585bb5f2ff0384c6900039ed1f4e714a37734e'

    let buttons = document.getElementsByClassName('bloko-button')

    for (let item of buttons) {
        let text = item.innerHTML
        if (-1 !== text.indexOf('Обновить дату')) {
            item.click()
            console.log(item)
        }
    }
}