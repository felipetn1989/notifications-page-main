let unreads = document.querySelectorAll(".unread");
let unreadDots = document.querySelectorAll(".unread_dot");

notificationsNumber.innerHTML = unreads.length;

unreads.forEach((unread, index) => {
  unread.addEventListener("click",() => displayAsRead(unread,index));
});

markAll.addEventListener("click", () => {
  unreads.forEach((unread, index) => displayAsRead(unread,index));
});

function displayAsRead(unread,index) {
  unreadDots[index].classList.remove(
    "unread_dot",
    "after:w-2",
    "after:h-2",
    "after:inline-block",
    "after:bg-[#f65351]",
    "after:rounded-full"
  );
  unread.classList.replace("bg-[#f7fafd]", "bg-white");
  unread.classList.remove("unread");
  unreads = document.querySelectorAll(".unread");
  notificationsNumber.innerHTML = unreads.length;
}
