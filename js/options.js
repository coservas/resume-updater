function saveOptions(e) {
    browser.storage.sync.set({
        link: document.querySelector("#link").value
    })
    e.preventDefault()
}

function restoreOptions() {
    var storageItem = browser.storage.managed.get('link')
    storageItem.then((res) => {
        document.querySelector("#link").innerText = res.link
    })
    
    var gettingItem = browser.storage.sync.get('link');
    gettingItem.then((res) => {
        document.querySelector("#link").value = res.link || ''
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions)
document.querySelector("form").addEventListener("submit", saveOptions)