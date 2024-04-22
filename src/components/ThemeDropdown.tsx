import { useStore } from "@nanostores/react";
import { THEME_MAP, type ThemeKey, themeStore } from "~/lib/stores/theme";

export default function ThemeDropdown(props: any) {
  const theme = useStore(themeStore);

  return (
    <div className="group relative flex items-center pl-2">
      <select
        title="Select theme"
        className="select-none appearance-none cursor-pointer pl-4 pr-8 py-2 bg-white hover:bg-neutral-100 focus:bg-neutral-100  dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-800 text-black dark:text-white rounded-md"
        defaultValue={theme}
        onChange={(e) => themeStore.set(THEME_MAP[e.target.value as ThemeKey])}
      >
        {Object.keys(THEME_MAP).map((key) => {
          const themeKey = key as ThemeKey;
          return <option key={key}>{themeKey}</option>;
        })}
      </select>
      {props.chevron}
    </div>
  );
}
