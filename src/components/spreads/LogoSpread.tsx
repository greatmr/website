import { asset } from "@/lib/asset";

export function LogoSpread() {
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
            <img src={asset("/mark.svg")} alt="" aria-hidden="true" className="logo-combo__mark" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/portfolio.svg")} alt="" aria-hidden="true" className="logo-combo__text" />
          </div>
        </div>
      </section>
    </>
  )
}
