const STORAGE_KEY = "theme";

/** Blocking script for root layout: no FOUC, no React 19 client script warning. */
export const themeInitScript = `(function(){try{var s=localStorage.getItem("${STORAGE_KEY}");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=s==="light"||s==="dark"?s:d?"dark":"light";var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(t);r.style.colorScheme=t}catch(e){}})();`;

export { STORAGE_KEY };
