# Kadanco Website Project

Design files for the new kadanco.com website, stored in `design/` of the website repo. Migrated to a new Claude account on 15 October 2026.

## Folder overview

| Folder | What is in it |
|---|---|
| `01_design-system/` | Brand colours, type and components |
| `02_pages/` | Full page designs and wireframes |
| `03_docs/` | Context notes from earlier work sessions |
| `04_sections/` | Section designs with several options each, to pick from |

## 01_design-system

- **Kadanco_Brand_System-20261015-0848.html**: The brand reference. Fira Sans, light and dark modes, colour tokens, type scale and components. Department colours: Product Blue #3B38DF, Marketing Lime #DAFF02, Sales Lilac #B2B1FF, Accent/PLG #7270FF. Orange #FE572A is for CTAs only.

## 02_pages

- **Kadanco_Home-20261015-0850.html**: Homepage design. Hero "Stop Buying Advice. Start Buying Execution.", then the three offers (Product, Marketing, Sales Engineering) and a team section.
- **Kadanco_Category_Pages-20261015-0850.html**: The 3 service pages (Product Design Engineering, Product Marketing Engineering, Sales Engineering) with tabs to switch between them. Each has symptoms, a method, before/after, deliverables and a case study.
- **Kadanco_Wireframes-20261015-0850.html**: Low-detail map of all 12 pages. Each block is a section, colour tint shows the department.

## 03_docs

- **Kadanco_Category_Pages_Context-20261015-0843.md**: Handoff notes from 12 October. Covers the 7-step task list, the 12-page sitemap, the category page structure, locked style rules, open items and GDPR/security notes for the build.

## 04_sections

Each section folder is a small exported design mockup. The main file ends in `.dc.html`. The folder also holds `assets/`, `vendor/` (React) and `support.js`, which are only needed to display it. Open them through a local server (see "How to view" below).

### homepage/
- **Homepage heroes (8 options)** `HomeHeroes.dc.html`: 8 hero versions for the homepage with an engineering-led message, for example "Built By Engineers. Bought By Humans." Option 1 has a switch: "Is your product easy to explain?"

### concepts/
- **Two-door concept, interactive flow + 3 variations** `TwoDoorFlow.dc.html`: Clickable flow. Visitors pick a door ("Hard To Sell? Start With The Product." or "Easy To Sell? Start Selling.") and walk through a short path with questions.
- **Two doors concept, 4 versions** `DoorHeroes.dc.html`: 4 static looks for the door idea: 3D doors, doors that show what is behind them on hover, light spilling from the doors, and more.
- **Before After, 3 versions** `BeforeAfterHeroes.dc.html`: Before/after comparison ("Hard To Sell." vs "Easy To Buy."). Split screen, comparison wipe and a third layout.
- **Engineering terminal concept, 4 versions** `TerminalHeroes.dc.html`: Hero aimed at CTOs: "Shipping Isn't The Problem. Explaining It Is." with a code terminal showing `product.works() true`, `users.understand_it() false`. Light and dark versions.

### use-cases/
- **Use case heroes, 3 alternatives each** `UseCaseHeroes.dc.html`: 3 hero layouts per use case (centered dark, proof card, big type with ticker).
- **DACH market entry (route matrix)** `UseCaseDach.dc.html`: "A German-Language Presence. Built And Run End To End." Matrix comparing English campaigns, translation agency, German hire, freelancers and Kadanco.
- **Founder-led content (loop)** `UseCaseFounder.dc.html`: "Your Point Of View. Published. Until It Produces Pipeline." Weekly publishing loop that runs without the founder.
- **Conversion rebuild (leak funnel)** `UseCaseConversion.dc.html`: "Your Site Describes The Company You Used To Be." Repositioning, site rebuild and a funnel that shows where visitors drop off.
- **Event pipeline (3D runway icons)** `UseCaseEvents.dc.html`: "Most Event Budgets Buy A Booth. Yours Should Buy Meetings." Event selection, 4-week warm-up and same-day follow-up shown as a runway.

### glossary/
- **Glossary, filter by department** `Glossary.dc.html`: Glossary page with plain definitions and operator notes. Filter by department and category. English and German switch.

## Open points to check

1. **Colour mapping differs between files.** The brand system says Orange #FE572A is CTA only and PLG is #7270FF. The context doc (03_docs) says PLG is Orange #FE572A.
2. **Font weights differ.** Brand system uses 400 / 500 / 800. Context doc says 400 and 500 only.
3. **Homepage hero not picked yet.** Step 1 of the task list. Options are in `04_sections/homepage/` and `04_sections/concepts/`.
4. All metrics and quotes in case studies are placeholders. About 25 image placeholders need real photos.
5. The context doc mentions three docs that are not in this project: `Kadanco_Chat_Summary_2026-10-10.md`, `Kadanco_Website_Blueprint_2026-10-12.md`, `Kadanco_Finanzen_Chat_Summary_2026-10-10.md`.

## How to view

Files in `01` to `03` open directly in the browser. Section mockups in `04` need a local server:

```bash
cd design/04_sections
python3 -m http.server 8000
```

Then open http://localhost:8000 and click into a folder.
