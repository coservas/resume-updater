setInterval(update(), 1000)

function update() {
    browser.storage.sync.get('link')
        .then((res) => {
            if (res.link.length === 0) {
                console.log('Provide a link')
                return
            }

            getHTML(res.link, function (response) {
                let buttons = response.getElementsByClassName('bloko-button')

                for (let item of buttons) {
                    let text = item.innerHTML
                    if (-1 !== text.indexOf('Обновить дату')) {
                        item.click()
                        console.log(item)
                    }
                }
            })
        })
        .catch((err) => {
            console.error(err)
        })
}

let getHTML = function (url, callback) {
    if (!window.XMLHttpRequest) {
        return
    }

    // CORS request!!! And I completely forgot about it and did not think =(
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (callback && typeof( callback ) === 'function') {
            callback( this.responseXML )
        }
    }
    xhr.open( 'GET', url )
    xhr.responseType = 'document'
    xhr.send()
}