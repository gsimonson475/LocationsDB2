export const industrialTheme = {
  palette: {
    background: "#0F1624",
    surface: "#1B2333",
    textPrimary: "#E6ECFF",
    textSecondary: "#A3B3D9",
    accentPrimary: "#FFB400",
    accentSecondary: "#00C2FF",
    accentDanger: "#FF5C5C",
    outline: "#2E3A4F"
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", sans-serif',
    titleSize: "1.75rem",
    bodySize: "1rem",
    buttonWeight: 600
  },
  spacing: (factor: number) => `${factor * 8}px`,
  radii: {
    sm: "6px",
    md: "10px"
  },
  shadows: {
    depth1: "0 18px 40px rgba(7, 13, 23, 0.35)"
  }
} as const;

export type IndustrialTheme = typeof industrialTheme;
