const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

const toggleTheme = () => {
  const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
};

themeToggle.onclick = toggleTheme;
