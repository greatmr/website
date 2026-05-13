"use client"

import { useState, type ReactNode } from "react"
import { BookNavProvider } from "./BookNavContext"
import { Drawer } from "./Drawer"
import { Hamburger } from "./Hamburger"
import { PageNav } from "./PageNav"
import { Progress } from "./Progress"
import { ChapterEyebrow } from "./ChapterEyebrow"
import { ThemeSwitch } from "./ThemeSwitch"
import { JahanLogo } from "@/components/svg/JahanLogo"
import { useKeyboardNav } from "@/hooks/useKeyboardNav"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import {
  SPREADS,
  TAB_TO_SPREAD,
  leftChapterFor,
  rightChapterFor,
  spreadToTab,
} from "@/lib/spreads"
import type { ThemeName } from "@/lib/themes"

type SpreadSlot = {
  id: string
  label: string
  node: ReactNode
}

type Props = {
  spreads: readonly SpreadSlot[]
}

type Side = 0 | 1

export function BookShell({ spreads }: Props) {
  const [spread, setSpread] = useState(0)
  const [side, setSide] = useState<Side>(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [theme, setTheme] = useState<ThemeName>("cool")
  const isMobile = useMediaQuery("(max-width: 767px)")

  const lastSpread = spreads.length - 1
  // The cover (spread 0) is the book's front/back, not a page.
  const isCover = spread === 0
  const contentSpreadCount = Math.max(0, spreads.length - 1)
  const totalPages = isMobile ? contentSpreadCount * 2 : contentSpreadCount
  const currentPage = isMobile ? (spread - 1) * 2 + side : spread - 1

  const prev = () => {
    if (isMobile) {
      if (side === 1) {
        setSide(0)
      } else if (spread > 0) {
        setSpread(spread - 1)
        setSide(1)
      }
    } else if (spread > 0) {
      setSpread(spread - 1)
    }
  }

  const next = () => {
    if (isMobile) {
      if (side === 0) {
        setSide(1)
      } else if (spread < lastSpread) {
        setSpread(spread + 1)
        setSide(0)
      }
    } else if (spread < lastSpread) {
      setSpread(spread + 1)
    }
  }

  const jumpTo = (pageIdx: number) => {
    if (isMobile) {
      setSpread(Math.floor(pageIdx / 2) + 1)
      setSide((pageIdx % 2) as Side)
    } else {
      setSpread(pageIdx + 1)
    }
  }

  useKeyboardNav({ onPrev: prev, onNext: next, enabled: !drawerOpen })

  const onTab = (tabIdx: number) => {
    const target = TAB_TO_SPREAD[tabIdx]
    if (target != null) {
      setSpread(target)
      setSide(0)
    }
  }

  const current = spreads[spread] ?? spreads[0]
  const meta = SPREADS[spread] ?? SPREADS[0]

  const navValue = {
    goToSpread: (idx: number) => {
      setSpread(idx)
      setSide(0)
    },
    currentSpread: spread,
  }

  return (
    <BookNavProvider value={navValue}>
    <div className={`book-root theme-${theme}`}>
      <div
        className={"book" + (isCover ? " book--cover" : "")}
        data-mobile-side={side === 0 ? "left" : "right"}
      >
        <Drawer
          open={drawerOpen}
          current={spreadToTab(spread)}
          onClose={() => setDrawerOpen(false)}
          onNavigate={onTab}
        />

        <Hamburger onClick={() => setDrawerOpen(true)} />

        {!meta.flat && (
          <>
            <ChapterEyebrow
              side="left"
              chapter={leftChapterFor(spread)}
              label={meta.leftLabel ?? meta.label}
            />
            <ChapterEyebrow
              side="right"
              chapter={rightChapterFor(spread)}
              label={meta.rightLabel ?? meta.label}
            />
          </>
        )}

        <button
          type="button"
          className="menu-logo"
          onClick={() => {
            setSpread(0)
            setSide(0)
          }}
          aria-label="Go to cover"
        >
          <JahanLogo />
        </button>

        <div className="spread" key={`${spread}-${side}`}>
          {current.node}
        </div>

        {!isCover && (
          <>
            <PageNav
              onPrev={prev}
              onNext={next}
              canPrev={currentPage > 0}
              canNext={currentPage < totalPages - 1}
            />

            <Progress total={totalPages} current={currentPage} onJump={jumpTo} />

            {isMobile ? (
              <div
                className={
                  "book__pageno book__pageno--" + (side === 0 ? "left" : "right")
                }
              >
                {String((spread - 1) * 2 + side + 1).padStart(2, "0")}
              </div>
            ) : (
              <>
                <div className="book__pageno book__pageno--left">
                  {String((spread - 1) * 2 + 1).padStart(2, "0")}
                </div>
                <div className="book__pageno book__pageno--right">
                  {String((spread - 1) * 2 + 2).padStart(2, "0")}
                </div>
              </>
            )}
          </>
        )}
      </div>

      <ThemeSwitch value={theme} onChange={setTheme} />
    </div>
    </BookNavProvider>
  )
}
