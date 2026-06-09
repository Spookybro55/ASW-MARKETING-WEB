<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Primary workflow

**Claude Code is the primary development workflow** for this repo (implementation,
refactor, QA, small commits). The mandatory AI/design tool chain is defined in
`CLAUDE.md` §12.1 and `docs/tool-decisions.md`:

Claude Code → Motion (`motion` + `motion/react`) → `impeccable` (mandatory UI/UX
quality skill) → 21st.dev Magic MCP (UI generation/inspiration, user-env API key)
→ Chrome DevTools MCP (browser debug / network / performance) → Playwright
screenshot loop (visual QA at 1440 / 768 / 390).

**Visual QA is required:** do not change UI based on a textual impression only. For
significant UI changes run at least the screenshot workflow; for
runtime/performance/browser issues also use Chrome DevTools MCP.
