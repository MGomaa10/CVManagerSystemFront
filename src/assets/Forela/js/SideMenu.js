  bodyy = document.querySelector('body'),
  sidebar = bodyy.querySelector('nav'),
  toggle = bodyy.querySelector(".toggle"),
  searchBtn = bodyy.querySelector(".search-box"),
  modeSwitch = bodyy.querySelector(".toggle-switch"),
  sideMenuMax = document.querySelector(".sideMenuMax"),
  left_side = document.querySelector(".left_side"),
  openNoti = document.querySelector(".openNoti"),
  notification = document.querySelector(".notification-ui_dd"),
  modeText = bodyy.querySelector(".mode-text");

  console.log(toggle, openNoti);
toggle?.addEventListener("click", () => {
  sidebar.classList.toggle("closes");
  sideMenuMax.classList.toggle("sideMenuMin");
  left_side.classList.toggle("left_side_close");
  openNoti.classList.toggle("show");
})
openNoti?.addEventListener("click", () => {
  notification.classList.toggle("show");
})

searchBtn?.addEventListener("click", () => {
  sidebar.classList.remove("closes");
})
modeSwitch?.addEventListener("click", () => {
  bodyy.classList.toggle("dark");
  if (bodyy.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});