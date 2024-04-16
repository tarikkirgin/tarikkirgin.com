export default function ThemeDropdown() {
  const onClickLight = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  const onClickDark = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  return (
    <div>
      <button onClick={onClickLight}>Light</button>
      <button onClick={onClickDark}>Dark</button>
    </div>
  );
}
