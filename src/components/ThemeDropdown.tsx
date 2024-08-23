import { useStore } from "@nanostores/react";
import { THEME_MAP, type ThemeKey, themeStore } from "~/lib/stores/theme";

export default function ThemeDropdown(props: any) {
  const theme = useStore(themeStore);

  return (
    <div className="group relative flex items-center pl-2">
      <select
        title="Select theme"
        className="select-none appearance-none cursor-pointer pl-3 pr-8 py-2 pb-2.5 backdrop-blur-lg bg-white/60 hover:bg-neutral-100/60 focus-visible:bg-neutral-100/60  dark:bg-neutral-900/60 dark:hover:bg-neutral-800/60 dark:focus-visible:bg-neutral-800/60 ring-1 ring-neutral-200 dark:ring-neutral-800 text-black dark:text-white rounded-md"
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
