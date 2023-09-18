const check = document.querySelector("input[type='checkbox']");
let prefs;

// Inital user settings.
const themePrefs = JSON.parse(localStorage.getItem("prefs"));
const userTheme = themePrefs.theme;
document.body.className = userTheme;
if (userTheme === "dark") {
  check.checked = true;
}

check.addEventListener("click", (e) => {
  // Add prefferences in local storage

  if (check.checked) {
    prefs = { theme: "dark" };
    localStorage.setItem("prefs", JSON.stringify(prefs));
  } else {
    prefs = { theme: "light" };
    localStorage.setItem("prefs", JSON.stringify(prefs));
  }

  // Retrieve prefferences
  const savedprefs = JSON.parse(localStorage.getItem("prefs"));
  const userprefs = savedprefs.theme;

  // Set color theme.
  document.body.className = userprefs;
  console.log(userprefs);
});
