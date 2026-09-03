# Ten things you could build

Pick one. Each card names the **exact file and table**, so you don't spend ten
minutes hunting. The route column points at
[`EXTRACTING-DATA.md`](../EXTRACTING-DATA.md).

**Bring your own idea instead if you have one.** These exist so nobody stares at
a blank page at 0:25.

**No idea yet, and none of these grab you?** Open
[`prompts/00-start-here.md`](../prompts/00-start-here.md) and take **Path 3**.
It names the exact three files to attach and gives you the paste. Ten minutes,
then commit to something.

---

## Once you've picked a card, go here

Every card below ends with a **Next** line telling you which prompt file to open
first. The full sequence is the same for everyone:

| Order | Prompt | When |
|---|---|---|
| 1 | [`prompts/00-start-here.md`](../prompts/../prompts/00-start-here.md) | Start of sprint 1. Describe the table before extracting anything |
| 2 | [`prompts/01-extract.md`](../prompts/01-extract.md) | Sprint 1. Get a CSV or JSON you can open |
| 3 | [`prompts/02-verify.md`](../prompts/02-verify.md) | About 6:55. Every number traces to a row, or it comes off the screen |
| 4 | [`prompts/03-build.md`](../prompts/03-build.md) | Sprint 2, after the 1:05 data gate |
| 5 | [`prompts/04-deploy.md`](../prompts/04-deploy.md) | About 7:25. Deploy before you polish, not after |

Two things that change per card:

- **Route 3 cards (prose, no tables) skip steps 1 and 2 entirely.** Go straight
  to [`prompts/03-build.md`](../prompts/03-build.md).
- **Stuck at 6:55?** Take the safety net CSV named on your card, skip the rest of
  extraction, and move to [`prompts/03-build.md`](../prompts/03-build.md).
  This is a normal outcome, not a failure.

---

## Easy

### 1. Cost of Living Calculator
Pick the closest of nine published household scenarios, see your net disposable
income change from 2025-26 to 2026-27, split into the five taxes and five
concessions that caused it.

- **Source:** Cost of Living Statement, Table 3.3.2 (29 x 14)
- **Route:** 1 (it's in the official spreadsheet, sheet `Chapter 3.3`)
- **Safety net:** [`data/extracted/household-scenarios.csv`](../data/extracted/household-scenarios.csv)
- **Why it works:** already clean, 9 rows, real suburbs, and the numbers are personal
- **Worked example in this repo:** [`examples/cost-of-living-calculator/`](../examples/cost-of-living-calculator/)
- **Next:** [`prompts/00-start-here.md`](../prompts/00-start-here.md), then [`01-extract.md`](../prompts/01-extract.md)

### 2. Am I Missing Money?
Answer six questions, get the concessions you probably qualify for, with dollar
values and how many households already claim them.

- **Source:** Cost of Living Statement, Table 3.3.1 (10 x 5)
- **Route:** 1
- **Safety net:** [`data/extracted/concessions.csv`](../data/extracted/concessions.csv)
- **Why it works:** 8 rows. Highest emotional payoff per row in the whole Budget
- **Next:** [`prompts/00-start-here.md`](../prompts/00-start-here.md), then [`01-extract.md`](../prompts/01-extract.md)

### 3. Who Do I Call?
Type a problem in plain English, get the directorate, output class and budget
line responsible for it.

- **Source:** the "Purpose" and "Output Class" sections of any statement
- **Route:** 3 (it's prose, just ask)
- **Why it works:** mostly text matching, very demo-able, no numbers to get wrong
- **Next:** straight to [`prompts/03-build.md`](../prompts/03-build.md). No extraction step

### 4. Housing Pathway
Renter, first home buyer, or waiting on social housing. Show only the measures
on that person's path.

- **Source:** Housing Statement (1,903 words, zero tables) [`data/markdown/02-housing.md`](../data/markdown/02-housing.md)
- **Route:** 3
- **Why it works:** no spreadsheet crutch, forces you to design for text
- **Next:** straight to [`prompts/03-build.md`](../prompts/03-build.md). No extraction step

### 5. Wellbeing Lens
Show the seven budget categories mapped to wellbeing domains, and be honest
about what that framing hides.

- **Source:** Wellbeing Budget Statement, the "Wellbeing Domains" section [`data/markdown/03-wellbeing.md`](../data/markdown/03-wellbeing.md)
- **Route:** 3
- **Watch out:** these totals are quoted in **$ million** in prose, while the
  Statements are in `$'000`. Don't mix them
- **Next:** straight to [`prompts/03-build.md`](../prompts/03-build.md). No extraction step

---

## Medium

### 6. Promise Tracker
Every accountability indicator where the 2025-26 estimated outcome missed its
target, flagged automatically.

- **Source:** 53 Accountability Indicator tables across Statements A to H
- **Route:** 4 (too many tables to paste)
- **Safety net:** [`data/extracted/accountability-indicators.csv`](../data/extracted/accountability-indicators.csv) (365 rows)
- **Watch out:** 115 rows are missing a target. That's normal, indicators get
  added and discontinued. Filter, don't assume a bug
- **Next:** [`prompts/00-start-here.md`](../prompts/00-start-here.md), then [`01-extract.md`](../prompts/01-extract.md) Ask for a script, not a paste

### 7. What's Being Built, and When
A timeline of infrastructure projects by value and physical completion date.

- **Source:** Statement G Table 9 (65 rows), plus 20 more across the statements
- **Route:** 2 for one table (5,663 characters, pastes fine), 4 for all of them
- **Safety net:** [`data/extracted/infrastructure-program.csv`](../data/extracted/infrastructure-program.csv) (254 rows)
- **Why it works:** completion dates make a view nobody has published
- **Next:** [`prompts/00-start-here.md`](../prompts/00-start-here.md), then [`01-extract.md`](../prompts/01-extract.md)

### 8. Budget Diff
Every initiative added or removed since the 2025-26 Budget, biggest first.

- **Source:** 54 Changes to Appropriation tables, or Table 3.2.2 in the spreadsheet
- **Route:** 1 for the summary, 4 for the per-agency detail
- **Safety net:** [`data/extracted/changes-to-appropriation.csv`](../data/extracted/changes-to-appropriation.csv) (1,081 rows)
- **Why it works:** the negative numbers are the story and nobody reads them
- **Next:** [`prompts/00-start-here.md`](../prompts/00-start-here.md), then [`01-extract.md`](../prompts/01-extract.md)

### 9. Education Explainer
What the Budget funds per output class across public primary, high, secondary
college and disability education.

- **Source:** Statement F (39 tables) [`data/markdown/15-statement-f-education.md`](../data/markdown/15-statement-f-education.md)
- **Route:** 2 or 4
- **Why it works:** parent audience, immediate relevance
- **Next:** [`prompts/00-start-here.md`](../prompts/00-start-here.md), then [`01-extract.md`](../prompts/01-extract.md)

### 10. Plain English Translator
Paste any budget line or indicator, get a human explanation with a link to the
anchored source heading.

- **Source:** any statement in `data/markdown/`
- **Route:** 3, no extraction at all
- **Why it works:** almost pure prompt design. A good landing spot if the
  extraction step is stressing you out
- **Next:** straight to [`prompts/03-build.md`](../prompts/03-build.md). No extraction step

---

## Two ideas we're asking you not to build

The **Aboriginal and Torres Strait Islander Statement** and the **Women's Budget
Statement** are in this repo and you're welcome to use them. But they are not
datasets to score or rank, and the Women's Statement case studies describe real
people.

**Present, don't rank.** Make the content findable and readable, preserve the
framing and the acknowledgements, link to the source. Don't build a relevance
score over either of them.
