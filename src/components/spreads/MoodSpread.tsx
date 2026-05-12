"use client"

import { Button } from "@/components/ui/button"

const HEADLINE: ReadonlyArray<readonly [string, string]> = [
  ["Years building", "8+"],
  ["Shipped projects", "20+"],
  ["Framework of choice", "Vue.js"],
  ["Time-zone", "GMT+3:30"],
  ["Coffee per day", "2.5"],
] as const

export function MoodSpread() {
  return (
    <>
      <section className="page page--left">
        <div style={{ position: "relative", marginTop: 0 }}>
          <div
            style={{
              position: "absolute",
              left: -10,
              top: 0,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "var(--accent)",
              opacity: 0.9,
            }}
          />
          <svg
            viewBox="0 0 260 320"
            style={{ position: "relative", width: 240, height: 300 }}
          >
            <defs>
              <clipPath id="mood-cmask">
                <rect x="0" y="0" width="260" height="320" />
              </clipPath>
            </defs>
            <g clipPath="url(#mood-cmask)">
              <rect x="0" y="0" width="260" height="320" fill="transparent" />
              <circle cx="130" cy="110" r="56" fill="#cfcec9" />
              <rect x="118" y="92" width="38" height="14" fill="#1a1d28" />
              <path d="M52 320 C 52 200, 208 200, 208 320 Z" fill="#cfcec9" />
              <path
                d="M165 200 L 220 230 L 220 320 L 165 320 Z"
                fill="#a8a59c"
              />
            </g>
          </svg>
        </div>

        <h2 className="mono-h" style={{ marginTop: 46, fontSize: 26 }}>
          <span style={{ color: "var(--accent)" }}>M</span>ohammadreza{" "}
          <span style={{ color: "var(--accent)" }}>J</span>ahantalab
        </h2>

        <p className="mono-p" style={{ marginTop: 24, maxWidth: 520 }}>
          Hey!
          <br />
          I&rsquo;m <span className="u">Mohammadreza</span>, a Front-End
          Developer who&rsquo;s been building for the web for the past 8+ years.
          Most of my work revolves around <span className="u">Vue.js</span>, and
          I love creating apps that are fast, reliable, and enjoyable to use.
          <br />
          <br />
          I&rsquo;ve had the chance to work with startups and teams of all
          sizes, which taught me not just coding best practices, but also how to
          collaborate and ship real products that make an impact.
          <br />
          <br />
          Always curious, always learning &mdash; I&rsquo;m excited to bring
          ideas to life through code.
        </p>

        <Button
          style={{
            marginTop: 24,
            background: "var(--accent)",
            color: "var(--paper)",
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            letterSpacing: ".04em",
          }}
          onClick={() => alert("😘")}
        >
          Kiss me
        </Button>
      </section>

      <section className="page page--right">
        <div className="mood" style={{ gridAutoRows: 62 }}>
          <div className="m1" />
          <div className="m2" />
          <div className="m3">P O R T F O L I O</div>
          <div className="m4" />
          <div className="m5" />
          <div className="m6" />
          <div className="m7">
            <i />
          </div>
          <div className="m8" />
          <div className="m9" />
          <div className="m10" />
        </div>

        <h2 className="section-title" style={{ marginTop: 46 }}>
          Headline
        </h2>
        <div className="tetle-list">
          {HEADLINE.map(([k, v]) => (
            <div className="tetle-row" key={k}>
              <b>{k}</b>
              <span className="val">{v}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
