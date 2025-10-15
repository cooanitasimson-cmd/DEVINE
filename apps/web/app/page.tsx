import Link from "next/link";
import { Button } from "@devine/ui";
import { formatCurrency } from "@devine/utils";

const roadmapLinks = [
  {
    title: "Scaffold Services",
    description:
      "Generate foundational Express/Nest services for identity, people, and messaging with shared typing via the SDK package.",
    href: "https://linear.app/"
  },
  {
    title: "Connect Portal Shell",
    description:
      "Stand up the Expo Router project for the member-facing experience and wire it to the shared auth SDK.",
    href: "https://expo.dev/"
  },
  {
    title: "Automation Engine",
    description:
      "Model trigger/action contracts and create a worker that can execute chained workflows with durable state.",
    href: "https://docs.temporal.io/"
  }
];

const metrics = [
  {
    label: "Giving in sandbox",
    value: formatCurrency(128000.57)
  },
  {
    label: "Automations defined",
    value: "42 recipes"
  },
  {
    label: "Check-in kiosks online",
    value: "8 of 9"
  }
];

export default function Page() {
  return (
    <div className="page">
      <section className="card">
        <h2 className="card__title">Kick-off Checklist</h2>
        <p className="card__body">
          This workspace is configured as a Turborepo so that apps, services, and shared packages evolve together. Use pnpm to install
          dependencies and start composing real features.
        </p>
        <ul className="card__list">
          <li>Install dependencies with <code>pnpm install</code>.</li>
          <li>Launch the web shell with <code>pnpm dev:web</code>.</li>
          <li>Co-locate new feature slices under <code>apps/web/features</code> as they come online.</li>
        </ul>
        <div className="card__actions">
          <Button asChild>
            <Link href="https://turbo.build/repo/docs">View Turborepo docs</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/docs/devinarch-architecture">Blueprint overview</Link>
          </Button>
        </div>
      </section>

      <section className="card">
        <h2 className="card__title">Delivery Metrics (sample data)</h2>
        <p className="card__body">The first telemetry card to wire into real services.</p>
        <ul className="metrics">
          {metrics.map((metric) => (
            <li key={metric.label} className="metrics__item">
              <span className="metrics__label">{metric.label}</span>
              <span className="metrics__value">{metric.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="card__title">Immediate Roadmap</h2>
        <p className="card__body">Track the first engineering streams spinning out of the architecture blueprint.</p>
        <ul className="card__list">
          {roadmapLinks.map((item) => (
            <li key={item.title} className="roadmap-item">
              <div className="roadmap-item__title">{item.title}</div>
              <div className="roadmap-item__description">{item.description}</div>
              <Link className="roadmap-item__link" href={item.href}>
                Open reference ↗
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
