const unreads = document.querySelectorAll(".unread")

unreads.forEach(unread => {
    unread.addEventListener("click",() => alert('test'))
})