"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

const CONTACTS: ReadonlyArray<readonly [string, string]> = [
  ["Email", "hi@mreza.dev"],
  ["Telegram", "@mreza_jt"],
  ["GitHub", "github.com/mrezajt"],
  ["LinkedIn", "linkedin.com/in/mrezajt"],
  ["Phone", "+98 ··· ··· 49 17"],
  ["Based in", "Tehran, IR"],
] as const;

export function ContactSpread() {
  const { copiedKey, copy } = useCopyToClipboard();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <section className="page page--left">
        <div className="chapter" style={{ marginTop: 30 }}>
          <span className="chapter__label">
            Epilogue<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <span className="chapter__rule" />
        </div>
        <h2 className="section-title">Contact</h2>
        <p className="mono-p" style={{ maxWidth: 480 }}>
          Pen-pals welcome. I read every message, usually within a day,
          occasionally with a cup of cardamom tea nearby. Pick whichever channel
          suits you.
        </p>

        <div className="contact-grid">
          {CONTACTS.map(([k, v]) => (
            <div className="contact-row" key={k}>
              <span className="k">{k}</span>
              <span className="v">{v}</span>
              <Button
                variant={copiedKey === k ? "default" : "outline"}
                size="sm"
                onClick={() => copy(k, v)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                }}
              >
                {copiedKey === k ? "Copied" : "Copy"}
              </Button>
            </div>
          ))}
        </div>

        <div className="signature">
          <em>— Yours in shipped pixels,</em>
          <br />
          <b
            style={{
              fontFamily: "var(--font-slab)",
              fontSize: 22,
              letterSpacing: ".02em",
            }}
          >
            M. Jahantalab
          </b>
        </div>

        <div className="stamp">READ · SIGNED · POSTED</div>
      </section>

      <section className="page page--right">
        <div className="chapter" style={{ marginTop: 30 }}>
          <span className="chapter__label">
            Write back<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <span className="chapter__rule" />
        </div>
        <p className="mono-p" style={{ maxWidth: 460 }}>
          A short note is plenty — what you&rsquo;re working on, what would
          help, when you&rsquo;d like to chat. I&rsquo;ll reply with a calendar
          link or a draft of ideas, whichever fits.
        </p>

        <form
          onSubmit={onSubmit}
          style={{
            marginTop: 30,
            background: "#fff",
            padding: "26px",
            boxShadow: "0 18px 40px -16px rgba(20,30,55,.28)",
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-slab)",
              fontWeight: 800,
              fontSize: 24,
              margin: "0 0 14px",
            }}
          >
            A letter to Mohammadreza
          </h4>

          <Label htmlFor="contact-name" className="mt-3">
            Your name
          </Label>
          <Input
            id="contact-name"
            placeholder="e.g. Sara from Acme"
            className="font-mono"
          />

          <Label htmlFor="contact-email" className="mt-3">
            Reply-to
          </Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@studio.com"
            className="font-mono"
          />

          <Label htmlFor="contact-note" className="mt-3">
            The note
          </Label>
          <Textarea
            id="contact-note"
            placeholder="Tell me about the project, the team, the dream…"
            className="font-mono min-h-[90px]"
          />

          <Button
            type="submit"
            style={{
              marginTop: 18,
              background: sent ? "var(--accent)" : "var(--ink)",
              color: "var(--paper)",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              letterSpacing: ".04em",
            }}
          >
            {sent ? "Sealed & sent ✓" : "Seal & send"}
          </Button>
        </form>

        <p
          className="mono-p"
          style={{
            marginTop: 22,
            color: "var(--ink-mute)",
            fontStyle: "italic",
            fontSize: 12,
          }}
        >
          P.S. — if your project ships before mine, I demand a copy of the
          book.
        </p>
      </section>
    </>
  );
}
