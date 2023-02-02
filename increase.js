var count = 3;
var countElements = document.querySelectorAll("[id^='likes']");

function add1() {
    count++;
    for (var i = 0; i < countElements.length; i++) {
        countElements[i].innerText = count + " like(s)";
    }
}