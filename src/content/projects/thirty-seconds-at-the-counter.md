---
title: "Thirty seconds at the counter"
order: 2
year: "2026"
context: "Independent project · Small business research"
summary: "Three warung owners, one notebook, and a sales log designed to be finished before the next customer arrives."
question: "Can a daily sales record take less time than writing it in a notebook?"
role: "Field research, requirements, UI design, front-end prototype"
timeline: "6 weeks · 2026"
team: "Solo"
status: "Prototype tested with 3 owners · Not in daily use"
tools:
  - "Figma"
  - "HTML / CSS"
  - "localStorage"
cover: "../../assets/images/case-warung-cover.png"
coverAlt: "Editorial composition with a large thirty-second timer, a receipt-shaped sales card and a quote from a warung owner."
ogImage: "../../assets/og/og-warung.png"
outcome: "Two owners used it alongside their notebook for five days; one stopped after two. Median entry time was 9 seconds."
draft: false
---

## The context

A warung near my campus records its day in a small notebook. Items are ticked as they are sold; the total is worked out at closing, sometimes from memory. The record matters for restocking and for knowing whether the day made money. It is also the first thing dropped when the queue is long.

I wanted to know whether a sales log could be faster than the notebook, not whether it could have more features. That is a different brief, and a harder one.

## Who I listened to

Three warung owners in Tangerang, two visits each at closing time. I used contextual inquiry: I asked them to record a real day while I watched and timed it, then interviewed them afterwards. I also spoke to one family member who helps at weekends.

I did not ask "would you use an app?" Everyone says yes to that. I asked them to show me the last page of their notebook and explain what they wrote, and why.

## What I heard

- Recording happens in gaps: 20 to 60 seconds between customers.
- Item names are spoken, not read. Typing "nasi goreng" is slower than writing a tick.
- The number that matters at closing is cash against sales, not revenue by item.
- Two of three used a calculator app for totals; one did sums in the notebook margin.
- Nobody wanted a report. They wanted to know: enough for tomorrow?

## What the requirements became

**Must have**

- Record a sale in three taps or fewer, with one hand.
- Six fixed product buttons based on each owner's top sellers, plus "other".
- A running daily total and a cash check at closing.
- Readable in daylight, with large labels in Indonesian.
- Work without a signal and survive a closed tab.

**Should have**

- Undo the last entry.
- Export the day as text for backup.

**Won't have**

- Inventory, staff accounts, customer data, receipts, charts, or payment integration.

## What I cut, and why

**Inventory.** It was the first thing every owner asked for after seeing a prototype. It also doubles the data entry: every sale becomes a stock movement. Without reliable stock counts, the feature would produce confident wrong numbers. I wrote it into a "later, only with stocktaking" note.

**Charts and monthly reports.** The owners never asked for them. I wanted them because they look like a product. The useful summary is one line: today's sales, cash on hand, the difference.

**Multi-user and cloud sync.** A stall has one person at the counter. Sync adds accounts, conflicts and connectivity failure for a problem they do not have. Offline local storage is enough for a prototype.

**Customer names.** Nobody records them. Asking would add a step and create data the owner would never use.

## The trade-offs

Fixed product buttons are faster but rigid. I chose six buttons per owner after a week of their notebook, with "other" as the escape hatch. The cost is setup: someone has to configure the six items, and the list drifts when the menu changes. A searchable catalogue would scale better and be slower every single time.

Offline-first is reliable at the counter but fragile as a record. Local storage can disappear when a browser is cleared. I added a one-tap text export as a backup and told testers it is not a ledger. A proper app would need a server and a recovery plan; that is a bigger promise than a prototype should make.

Big buttons and one screen meant cutting the confirmation step. To compensate, I made undo visible and kept the last five entries on screen. Mistakes are recoverable rather than prevented.

## What happened

I tested with three owners over one week. Two used it alongside their notebook for five days. One stopped after two days because "other" slowed her down whenever the menu changed. That was the most useful failure in the project.

In 12 observed entries, the median time from tap to updated total was 9 seconds. At closing, two owners used the cash check without prompting.

No payments, no accounts, no real deployment. The data lived in a browser on my laptop during tests. Calling this "used by three businesses" would be misleading. It was used next to their notebook for five days, and one owner kept the notebook as the source of truth.

## What I'd do differently

- Design the item setup first, not last. The six-button idea only works if changing a button takes seconds.
- Test with an owner who wears glasses. Two of three held the phone farther away than my prototype assumed.
- Ask for a week of notebook pages before designing anything. I understood the rhythm of the stall after the first visit, not before.

## Next, if I continued

Validate the setup flow with five owners, then test a printed daily summary. If the record cannot survive a cleared browser, it is not ready to replace a notebook.
