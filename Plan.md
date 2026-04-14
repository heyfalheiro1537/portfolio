# Resume Changelog — Heyder Falheiro

## LaTeX Fixes

### Compile Errors
- Fixed missing `\resumeItemListEnd` on Selvia block (was causing silent compile failure)
- Fixed missing closing `}` on research `\resumeItem`
- Removed extra arguments passed to `\resumeSubheading` (takes 4 args, not 6)

### Spacing
- Font: `11pt` → `10.5pt`
- Margins: `1.4cm` → `1.1cm`
- Removed `\\[1mm]` after `\section{Education}` (unnecessary)
- Tightened all `\vspace` between sections: `-12pt` → `-10pt`
- Added `topsep=0pt` to `\resumeItemListStart` to eliminate extra list padding
- Removed manual `\vspace{-10pt}` between project entries (handled by list environment)
- Fixed `\resumeSubHeadingListEnd` — added missing `\vspace{0pt}` after `\end{itemize}`

### Structure
- Added `\resumeSubheadingDouble` command to preamble for dual-degree ITA entry:
  ```latex
  \newcommand{\resumeSubheadingDouble}[6]{
    \vspace{-2pt}\item
      \begin{tabular*}{1.0\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textbf{\small #2} \\
        \textit{\small#3} & \textit{\small #4} \\
        \textit{\small#5} & \textit{\small #6} \\
      \end{tabular*}\vspace{-7pt}
  }
  ```
- Cleaned up heading block — removed nested brace mess, now a flat single-line layout

---

## Content Changes

### Education
- Reordered: Bachelor (2026) listed before Master (2027)
- "Civil-Engineering" → "Civil-Aeronautical Engineering"
- "Eletronics" → "Electronics" (typo)
- Merged two ITA entries into one block using `\resumeSubheadingDouble`
- Added research line: *Reliability and fault tolerance in distributed AI systems, with emphasis on multi-agent LLM pipeline design.* (intentionally vague — still in literature review)

### SumUp
- Start date: February 2025 → **February 2026**
- Title: "Software Engineer I Program" → **Software Engineer I** (dropped "Program")
- Full bullet rewrite based on actual work done:
  - Shipping to production from day one across Elixir and Go
  - PIX key service: OTel instrumentation + SLO definition + refactoring plan
  - AWS SQS/SNS pipeline management
  - Greenfield DDA service (boleto lookup) in Elixir
  - Production incident RCA with preventive measures adopted by team

### Selvia
- Dates corrected: November 2024 – May 2025
- Dropped weakest bullet (vague metric about pipeline execution time)
- Kept: AWS Lambda architecture + LLM agent development

### VTEX
- "quadrant leader and go-to engineer" → "technical lead" (cleaner for international readers)

### Projects
- Removed `\vspace{-10pt}` between InfraSegura and Postman API Sync
- "postman-enricher" → **Postman API Sync** (more descriptive)
- Removed AISWEB/DECEA from tech stack tag (kept in bullet body)

### Technical Skills
- Added **Kotlin**
- Added **OpenTelemetry**
- Expanded AWS entry: `AWS` → `AWS (Lambda, SQS, SNS)`
- Added **SLO/SLA** to Concepts
- Renamed "Libraries/Frameworks" → "Frameworks" (shorter)

---

## Decisions Made

| Topic | Decision | Reason |
|---|---|---|
| Selvia overlap with SumUp | Kept Selvia, corrected dates | Adds AWS + LLM signal |
| Thesis research line | Kept vague | Still in literature review, overclaiming would backfire |
| 3× metric on Selvia | Removed | Fabricated — can't defend in interview |
| "Hidden Markov" in thesis | Corrected (then removed specifics) | Wrong model type; absorbing Markov ≠ Hidden Markov |
| Two-page overflow | Fixed via font + margin + spacing | No content was cut except one weak Selvia bullet |
| Target audience | Google internship | All tone/framing decisions optimized for this |