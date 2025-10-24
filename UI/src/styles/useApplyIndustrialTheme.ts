import { useEffect } from "react";
import { industrialTheme } from "@styles/industrialTheme";

type CssVarName = `--industrial-${string}`;

const setVariable = (
  root: HTMLElement,
  name: CssVarName,
  value: string,
  previous: Map<CssVarName, string>
) => {
  previous.set(name, root.style.getPropertyValue(name));
  root.style.setProperty(name, value);
};

export const useApplyIndustrialTheme = () => {
  useEffect(() => {
    const root = document.documentElement;
    const previousValues = new Map<CssVarName, string>();

    Object.entries(industrialTheme.palette).forEach(([key, value]) => {
      setVariable(root, `--industrial-color-${key}` as CssVarName, value, previousValues);
    });

    Object.entries(industrialTheme.typography).forEach(([key, value]) => {
      setVariable(
        root,
        `--industrial-typography-${key}` as CssVarName,
        String(value),
        previousValues
      );
    });

    Object.entries(industrialTheme.radii).forEach(([key, value]) => {
      setVariable(root, `--industrial-radius-${key}` as CssVarName, value, previousValues);
    });

    Object.entries(industrialTheme.shadows).forEach(([key, value]) => {
      setVariable(root, `--industrial-shadow-${key}` as CssVarName, value, previousValues);
    });

    [1, 2, 3, 4].forEach((factor) => {
      setVariable(
        root,
        `--industrial-spacing-${factor}` as CssVarName,
        industrialTheme.spacing(factor),
        previousValues
      );
    });

    return () => {
      previousValues.forEach((value, name) => {
        if (value) {
          root.style.setProperty(name, value);
        } else {
          root.style.removeProperty(name);
        }
      });
    };
  }, []);
};
