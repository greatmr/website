import { Tile, type TileKind } from "@/components/svg/Tile"

type ThumbItem = { kind: TileKind; caption: string }

const PROJECTS: ThumbItem[] = [
  { kind: "grid", caption: "travel-grid" },
  { kind: "type", caption: "poster-set" },
  { kind: "moon", caption: "meditation" },
  { kind: "triangle", caption: "wayfinder" },
]

const SKILLS: ThumbItem[] = [
  { kind: "neon", caption: "vue.js" },
  { kind: "whale", caption: "motion" },
  { kind: "mountain", caption: "perf-budget" },
  { kind: "diagram", caption: "a11y-audits" },
]

const EXPERIENCE: ThumbItem[] = [
  { kind: "geom", caption: "snapptrip" },
  { kind: "grid", caption: "otc-fintech" },
  { kind: "type", caption: "crm-suite" },
  { kind: "door", caption: "freelance" },
]

function Thumbs({ items, prefix }: { items: ThumbItem[]; prefix: string }) {
  return (
    <div className="thumbs">
      {items.map((t, i) => (
        <div className="thumb" key={`${prefix}-${i}`}>
          <Tile kind={t.kind} />
          <span className="thumb__cap">{t.caption}...</span>
        </div>
      ))}
    </div>
  )
}

export function AboutSpread() {
  return (
    <>
      <section className="page page--left">
        <div className="chapter" style={{ marginTop: 20 }}>
          <span className="chapter__label">Chapter.1</span>
          <span className="chapter__rule" />
        </div>

        <h2 className="section-title">About</h2>
        <h3 className="mono-h">Mohammadreza Jahantalab</h3>
        <p className="mono-sub">Front-End Engineer</p>
        <p className="mono-quote">
          &quot;Crafting fast, reliable, and user-friendly web experiences&quot;
        </p>

        <div className="about-body">
          <div style={{ position: "relative", flex: "0 0 auto" }}>
            <div
              className="polaroid"
              style={{ width: 220, transform: "rotate(-2deg)" }}
            >
              <span className="tape" />
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/my.png"
                  alt="My"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="mono-p">
              <span className="u">Front-End</span> Developer with 6+ years of
              experience in creating responsive and efficient{" "}
              <span className="u">web</span> applications. Contributed to 20+
              diverse <span className="u">projects</span> in various sectors
              including travel, fintech, and CRM. Achieved{" "}
              <span className="ug">30%</span> <span className="ug">faster</span>{" "}
              load times, 45% better PWA caching efficiency, and reduced bugs by{" "}
              <span className="ur">125%</span>. Proficient in solving complex
              problems, adopting new technologies, and meeting tight deadlines.
            </p>
          </div>
        </div>
      </section>

      <section className="page page--right">
        <div className="chapter" style={{ marginTop: 20 }}>
          <span className="chapter__label">Chapter.2</span>
          <span className="chapter__rule" />
        </div>

        <h2 className="section-title">Projects</h2>
        <Thumbs items={PROJECTS} prefix="p" />

        <h2 className="section-title" style={{ marginTop: 30 }}>
          Skills
        </h2>
        <Thumbs items={SKILLS} prefix="s" />

        <h2 className="section-title" style={{ marginTop: 30 }}>
          Experience
        </h2>
        <Thumbs items={EXPERIENCE} prefix="e" />
      </section>
    </>
  )
}
