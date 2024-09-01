import { useStore } from "@nanostores/react";
import { THEME_MAP, type ThemeKey, themeStore } from "~/lib/stores/theme";

export default function ThemeDropdown(props: any) {
  const theme = useStore(themeStore);

  return (
    <div className="group relative flex items-center pl-2">
      <select
        title="Select theme"
        className="select-none appearance-none cursor-pointer pl-3 pr-8 py-2 pb-2.5 bg-background group-hocus:bg-accent ring-1 ring-border rounded-md"
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
