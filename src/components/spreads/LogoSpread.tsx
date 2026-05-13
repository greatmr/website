"use client"

import { asset } from "@/lib/asset"
import { useBookNav } from "@/components/book/BookNavContext"

export function LogoSpread() {
  const { goToSpread } = useBookNav()

  return (
    <>
      <section className="page page--left logo-page">
        <div className="logo-stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/group.svg")}
            alt="PORTFOLIO"
            className="logo-group-img"
          />
        </div>
      </section>

      <section className="page page--right logo-page">
        <div className="logo-stage">
          <div className="logo-combo" aria-label="PORTFOLIO">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/mark.svg")}
              alt=""
              aria-hidden="true"
              className="logo-combo__mark"
            />

            <button
              type="button"
              className="discover-btn"
              onClick={() => goToSpread(1)}
            >
              <span>Discover More</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/portfolio.svg")}
              alt=""
              aria-hidden="true"
              className="logo-combo__text"
            />
          </div>
        </div>
      </section>
    </>
  )
}
