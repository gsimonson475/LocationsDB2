import { useMemo } from "react";
import { useApplyIndustrialTheme } from "@styles/useApplyIndustrialTheme";
import "@styles/console.css";

type ButtonTone = "accentPrimary" | "accentSecondary" | "accentDanger";

type ButtonConfig = {
  label: string;
  tone: ButtonTone;
};

const buttonOptions: ButtonConfig[] = [
  { label: "Pressure Override", tone: "accentPrimary" },
  { label: "Emergency Halt", tone: "accentDanger" },
  { label: "System Diagnostics", tone: "accentSecondary" },
  { label: "Coolant Flush", tone: "accentPrimary" },
  { label: "Ignition Prime", tone: "accentSecondary" },
  { label: "Vent Cycle", tone: "accentPrimary" }
];

const pickRandomButtons = (count: number): ButtonConfig[] => {
  const pool = [...buttonOptions];
  const selection: ButtonConfig[] = [];
  for (let i = 0; i < count && pool.length > 0; i += 1) {
    const index = Math.floor(Math.random() * pool.length);
    selection.push(pool.splice(index, 1)[0]);
  }
  return selection;
};

const App = () => {
  useApplyIndustrialTheme();

  const buttons = useMemo(() => pickRandomButtons(3), []);

  return (
    <div className="console-viewport">
      <main className="console-panel">
        <header className="console-heading">
          <h1 className="console-heading__title">Reactor Control Station</h1>
          <p className="console-heading__subtitle">
            Select an operation to dispatch from the command console.
          </p>
        </header>

        <section className="console-actions">
          {buttons.map((button) => (
            <button
              key={button.label}
              type="button"
              className="console__button"
              data-tone={button.tone}
            >
              {button.label}
            </button>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
