

function onToggle(element) {
    var oStatus = element.getAttribute("data-checked")
    if (oStatus == "true") {
        element.setAttribute("data-checked","false")
        document.documentElement.setAttribute('data-bs-theme', 'light')
    } else {
        element.setAttribute("data-checked","true")
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
}
