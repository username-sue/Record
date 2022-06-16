function $(selector) {
    return document.querySelector(selector)
}

function $$(selectorAll) {
    return document.querySelectorAll(selectorAll)
}

function $$$(tagName) {
    return document.createElement(tagName)
}