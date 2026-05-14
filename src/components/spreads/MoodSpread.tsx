"use client"

import { Button } from "@/components/ui/button"
import { asset } from "@/lib/asset"

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
        <div className="w-full flex justify-center items-center relative mt-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/image.png")}
            alt="Mohammadreza Jahantalab"
            style={{
              width: "60%",
            }}
            className="block object-cover grayscale mix-blend-multiply h-full"
          />
        </div>

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
        <div style={{ gridAutoRows: 62 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/project-brand.png")}
            alt="Project brand"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
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
