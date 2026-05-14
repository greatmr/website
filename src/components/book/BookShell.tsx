"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { BookNavProvider } from "./BookNavContext"
import { Drawer } from "./Drawer"
import { Header } from "./Header"
import { PageNav } from "./PageNav"
import { Progress } from "./Progress"
import { ThemeSwitch } from "./ThemeSwitch"
import { useKeyboardNav } from "@/hooks/useKeyboardNav"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import {
  SPREADS,
  TAB_TO_SPREAD,
  spreadToTab,
} from "@/lib/spreads"
import type { ThemeName } from "@/lib/themes"

const COVER_PATH = "/"

type Side = 0 | 1

function spreadIndexFromId(id: string | undefined) {
  if (!id) return 0
  const idx = SPREADS.findIndex((s) => s.id === id)
  return idx === -1 ? 0 : idx
}

function pathFor(idx: number, side: Side) {
  const meta = SPREADS[idx]
  if (!meta || idx === 0) return COVER_PATH
  return side === 1 ? `/${meta.id}/right` : `/${meta.id}`
}

function locationFromPathname(pathname: string): { spread: number; side: Side } {
  if (pathname === COVER_PATH) return { spread: 0, side: 0 }
  const parts = pathname.replace(/^\//, "").split("/")
  const spread = spreadIndexFromId(parts[0])
  const side: Side = parts[1] === "right" ? 1 : 0
  return { spread, side }
}

type SpreadSlot = {
  id: string
  label: string
  node: ReactNode
  /** When false, the spread is hidden and unreachable. */
  active?: boolean
}

type Props = {
  spreads: readonly SpreadSlot[]
  initialSpreadId?: string
}

export function BookShell({ spreads, initialSpreadId }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const location = pathname
    ? locationFromPathname(pathname)
    : { spread: spreadIndexFromId(initialSpreadId), side: 0 as Side }
  const spread = location.spread
  const side = location.side

  const setLocation = (idx: number, nextSide: Side) => {
    const target = pathFor(idx, nextSide)
    if (target !== pathname) {
      router.replace(target, { scroll: false })
    }
  }
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [theme, setTheme] = useState<ThemeName>("cool")
  const spreadRef = useRef<HTMLDivElement | null>(null)
  const bookRef = useRef<HTMLDivElement | null>(null)
  const isMobile = useMediaQuery("(max-width: 767px)")

  useEffect(() => {
    const root = spreadRef.current
    const book = bookRef.current
    if (!root || !book) return
    const pages = Array.from(root.querySelectorAll<HTMLElement>(".page"))
    const apply = (scrolled: boolean) => {
      book.classList.toggle("is-scrolled", scrolled)
    }
    const handler = (e: Event) => {
      const t = e.currentTarget as HTMLElement
      apply(t.scrollTop > 4)
    }
    pages.forEach((p) => {
      p.scrollTop = 0
      p.addEventListener("scroll", handler, { passive: true })
    })
    apply(pages.some((p) => p.scrollTop > 4))
    return () => {
      pages.forEach((p) => p.removeEventListener("scroll", handler))
    }
  }, [spread, side])

  const isActive = (i: number) =>
    spreads[i]?.active !== false && SPREADS[i]?.active !== false

  // Indices of every spread that is active (including the cover).
  const activeIndices = spreads.map((_, i) => i).filter(isActive)
  // Active content spreads (cover excluded) — drives the pagination dots.
  const activeContentIndices = activeIndices.filter((i) => i !== 0)

  // The cover (spread 0) is the book's front/back, not a page.
  const isCover = spread === 0
  const pos = activeIndices.indexOf(spread)
  const contentSpreadCount = activeContentIndices.length
  const totalPages = isMobile ? contentSpreadCount * 2 : contentSpreadCount
  const contentPos = activeContentIndices.indexOf(spread)
  const currentPage = isMobile
    ? contentPos * 2 + side
    : contentPos

  const prev = () => {
    if (isMobile) {
      if (side === 1) {
        setLocation(spread, 0)
      } else if (pos > 0) {
        setLocation(activeIndices[pos - 1], 1)
      }
    } else if (pos > 0) {
      setLocation(activeIndices[pos - 1], 0)
    }
  }

  const next = () => {
    if (isMobile) {
      if (side === 0) {
        setLocation(spread, 1)
      } else if (pos < activeIndices.length - 1) {
        setLocation(activeIndices[pos + 1], 0)
      }
    } else if (pos < activeIndices.length - 1) {
      setLocation(activeIndices[pos + 1], 0)
    }
  }

  const jumpTo = (pageIdx: number) => {
    if (isMobile) {
      const contentIdx = Math.floor(pageIdx / 2)
      const target = activeContentIndices[contentIdx]
      if (target == null) return
      setLocation(target, (pageIdx % 2) as Side)
    } else {
      const target = activeContentIndices[pageIdx]
      if (target == null) return
      setLocation(target, 0)
    }
  }

  useKeyboardNav({ onPrev: prev, onNext: next, enabled: !drawerOpen })

  const onTab = (tabIdx: number) => {
    let target: number | undefined = TAB_TO_SPREAD[tabIdx]
    // Tab 2 covers spreads 2 and 3; fall back if the primary is inactive.
    if (tabIdx === 2 && (target == null || !isActive(target))) {
      target = isActive(2) ? 2 : isActive(3) ? 3 : undefined
    }
    if (target != null && isActive(target)) {
      setLocation(target, 0)
    }
  }

  const safeSpread = isActive(spread) ? spread : (activeIndices[0] ?? 0)
  const current = spreads[safeSpread] ?? spreads[0]
  const meta = SPREADS[safeSpread] ?? SPREADS[0]

  const chapterFor = (idx: number) => {
    const nonFlatBefore = SPREADS.slice(0, idx).filter(
      (s, i) => !s.flat && isActive(i),
    ).length
    return nonFlatBefore * 2 + 1
  }

  const navValue = {
    goToSpread: (idx: number) => {
      setLocation(idx, 0)
    },
    currentSpread: spread,
  }

  return (
    <BookNavProvider value={navValue}>
    <div className={`book-root theme-${theme}`}>
      <div
        ref={bookRef}
        className={
          "book" +
          (isCover ? " book--cover" : "")
        }
        data-mobile-side={side === 0 ? "left" : "right"}
      >
        <Drawer
          open={drawerOpen}
          current={spreadToTab(spread)}
          onClose={() => setDrawerOpen(false)}
          onNavigate={onTab}
          isTabActive={(tabIdx) => {
            // Tab 2 covers both spreads 2 and 3 (about + more).
            if (tabIdx === 2) return isActive(2) || isActive(3)
            const target = TAB_TO_SPREAD[tabIdx]
            return target != null && isActive(target)
          }}
        />

        {!isCover && (
          <Header
            side="left"
            chapter={meta.flat ? undefined : chapterFor(safeSpread)}
            label={meta.flat ? undefined : meta.leftLabel ?? meta.label}
            showHamburger
            showLogo={meta.flat || isMobile}
            onHamburger={() => setDrawerOpen(true)}
            onLogo={() => setLocation(0, 0)}
          />
        )}
        {(isCover || !meta.flat) && (
          <Header
            side="right"
            chapter={isCover ? undefined : chapterFor(safeSpread) + 1}
            label={isCover ? undefined : meta.rightLabel ?? meta.label}
            showHamburger={!isCover && isMobile}
            showLogo
            onHamburger={() => setDrawerOpen(true)}
            onLogo={() => setLocation(0, 0)}
          />
        )}

        <div className="spread" key={`${spread}-${side}`} ref={spreadRef}>
          {current.node}
        </div>

        {!isCover && <div className="book__topbar" aria-hidden="true" />}

        {!isCover && (
          <>
            <PageNav
              onPrev={prev}
              onNext={next}
              canPrev={isMobile ? side === 1 || pos > 0 : pos > 0}
              canNext={
                isMobile
                  ? side === 0 || pos < activeIndices.length - 1
                  : pos < activeIndices.length - 1
              }
            />

            <Progress total={totalPages} current={currentPage} onJump={jumpTo} />

            {isMobile ? (
              <div
                className={
                  "book__pageno book__pageno--" + (side === 0 ? "left" : "right")
                }
              >
                {String(contentPos * 2 + side + 1).padStart(2, "0")}
              </div>
            ) : (
              <>
                <div className="book__pageno book__pageno--left">
                  {String(contentPos * 2 + 1).padStart(2, "0")}
                </div>
                <div className="book__pageno book__pageno--right">
                  {String(contentPos * 2 + 2).padStart(2, "0")}
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
