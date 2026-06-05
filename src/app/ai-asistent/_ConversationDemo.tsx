"use client";

/*
 * /ai-asistent — modelová ukázka konverzace (audit Phase B 2026-05-25
 * + MCP refresh 2026-05-26). Client component izolovaný kvůli motion/react.
 *
 * Není to live demo. Je to vizuální ilustrace toho, jak vypadá zachycení
 * dotazu po pracovní době. Texty jsou statické a v kódu — žádný backend
 * volání, žádný AI request, žádný typing loop.
 *
 * 21st.dev MCP patterny (search „chat conversation bubbles"):
 *  - AIChatCard (sim 0.578): adopted bottom input row s placeholder + Send
 *    ikona jako vizuální uzavření panelu („takhle vypadá interface"). Vstup
 *    je explicitně disabled + aria-disabled → není pochyb, že nejde o live
 *    demo. REJECTED z AIChatCard: rotating border, floating particles,
 *    typing dots indicator, gradient background animation (AI-hype).
 *  - Conversation/Message (sim 0.476): potvrzen pattern bubble alignment
 *    podle `from="customer"|"assistant"`. Adoptováno jako semantic role.
 *
 * Animace: jednotlivé bubliny nabíhají postupně (stagger ~340 ms) s
 * fade + jemným translateY. Reduced motion → vše viditelné od první frame.
 */

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Icon } from "@/components/asw/icons";

type Message = { from: "customer" | "assistant"; text: string };

type Props = {
  timestamp: string;
  messages: readonly Message[];
  note: string;
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.34, delayChildren: 0.2 } },
};

const bubbleVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function ConversationDemo({ timestamp, messages, note }: Props) {
  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";

  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <div className="rounded-2xl border border-white/10 bg-[#0B1322] shadow-[0_28px_60px_-30px_rgba(13,71,161,0.45)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft text-brand-light">
              <Icon name="bot" className="h-3.5 w-3.5" />
            </span>
            <div className="leading-tight">
              <p className="text-[0.85rem] font-semibold text-white">
                AI asistent
              </p>
              <p className="text-[0.7rem] text-white/45">{timestamp}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-[#1976D2]/45 bg-[#1976D2]/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9FC6FF]">
            Modelová ukázka
          </span>
        </div>

        {/* Bubbles */}
        <motion.ol
          role="list"
          aria-label="Modelová konverzace zákazník a AI asistent"
          className="space-y-3 px-5 py-5 sm:px-6"
          initial={initial}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {messages.map((m, i) => {
            const isAssistant = m.from === "assistant";
            return (
              <motion.li
                key={i}
                variants={bubbleVariants}
                className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}
              >
                <div className="flex max-w-[85%] flex-col gap-1">
                  <span
                    className={`text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${
                      isAssistant
                        ? "text-brand-light"
                        : "text-white/45 text-right"
                    }`}
                  >
                    {isAssistant ? "AI asistent" : "Zákazník"}
                  </span>
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      isAssistant
                        ? "rounded-bl-sm border border-[#1976D2]/35 bg-[#1976D2]/[0.12] text-white/90"
                        : "rounded-br-sm border border-white/10 bg-white/[0.06] text-white/80"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Disabled input bar (MCP pattern: AIChatCard bottom input row,
            adapted as visual closure. Explicitní „Ukázka není interaktivní"
            caption pod barem potvrzuje vizuálně, že nejde o live chat —
            aria-hidden + pointer-events-none ošetří input technicky). */}
        <div className="border-t border-white/8 px-5 pt-3 pb-2 sm:px-6">
          <div
            aria-hidden="true"
            className="pointer-events-none flex items-center gap-2"
          >
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/35">
              Napsat zprávu…
            </div>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/45">
              <Icon name="arrow-right" className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-2 text-center text-[0.7rem] uppercase tracking-[0.14em] text-white/35">
            Ukázka není interaktivní
          </p>
        </div>
      </div>

      <p className="mt-5 px-2 text-center text-xs leading-relaxed text-fg-soft">
        {note}
      </p>
    </div>
  );
}
