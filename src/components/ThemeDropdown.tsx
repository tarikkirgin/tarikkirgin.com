import { useStore } from "@nanostores/react";
import { THEME_MAP, themeStore } from "../lib/stores/theme";

export default function ThemeDropdown() {
  const theme = useStore(themeStore);

  return (
    <div>
      <button
        className="justify-between"
        onClick={() => themeStore.set(THEME_MAP.dark)}
      >
        Dark
      </button>
      <button
        className="justify-between"
        onClick={() => themeStore.set(THEME_MAP.light)}
      >
        Light
      </button>
      <button
        className="justify-between"
        onClick={() => themeStore.set(THEME_MAP.system)}
      >
        System
      </button>
    </div>
  );
}
