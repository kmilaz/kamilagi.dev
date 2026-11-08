---
title: "One form, four desks"
order: 1
year: "2025"
context: "Course project · Interaction design studio"
summary: "Students were chasing one PDF across four desks. The fix was not a prettier form — it was showing people where their request had got to."
question: "How might a student see the state of an internship request without asking an administrator?"
role: "Research, requirements, interaction design, front-end prototype"
timeline: "5 weeks · 2025"
team: "Solo, with one lecturer as critic"
status: "Prototype tested with 5 students · Not deployed"
tools:
  - "Figma"
  - "HTML / CSS"
  - "Notion"
cover: "../../assets/images/case-internship-cover.png"
coverAlt: "Editorial diagram of the internship request moving between a student, a lecturer, an administrator and a company."
ogImage: "../../assets/og/og-internship.png"
outcome: "5 of 5 testers found the current step; 4 of 5 could name what to do next without help."
draft: false
---

## The context

The department's internship course has a sound process on paper: download the request form, collect two signatures, hand it to the office, wait for a placement letter. In practice the form lives in three WhatsApp groups and a shared drive. Students don't know which version is current, whether their file arrived, or who signs next. The administrator answers the same three questions all week.

I picked this because it was small, real, and within reach. I was not redesigning the faculty's systems. I was trying to understand one loop that everybody complained about.

## Who I listened to

- **7 students** who had completed the course in the previous year. Twenty-minute interviews; each walked me through their last request, screen by screen.
- **1 department administrator**, thirty minutes, at her desk.
- **1 lecturer** who signs placement forms.

I asked what happened, not what they wanted. "Show me the last time you checked on this" produced better material than "what features would you like".

## What I heard

Nobody struggled to fill in the form. The pain started after submission.

- "I sent it twice because I wasn't sure the first one went through." — 4 of 7 students
- "I don't know if it's with my lecturer or already at the office." — 5 of 7 students
- Administrator: "Most of my morning is answering 'has it arrived yet?'"

So the problem was not data entry. It was **state**: where is my request, what is missing, and who has it now. That reframed the project. A wizard would have made the wrong part faster.

## What the requirements became

**Must have**

- Show the current stage and the next action, in plain language, on a phone.
- Keep one canonical copy of the uploaded document and show when it was replaced.
- Produce the printable placement letter that partner companies still require.
- Work on a slow connection and an older Android phone.

**Should have**

- Show office hours and who to contact at each stage.
- Send one notification when the stage changes.

**Won't have, in this version**

- Online signatures.
- Integration with the university's academic system.
- A staff dashboard.

Priority came from frequency in the interviews plus the cost of failure. "Where is it?" was universal. "Notify me" was secondary because students already check WhatsApp constantly.

## What I cut, and why

**A chat feature.** Students asked for it, but the conversation already happens in WhatsApp. A second inbox would split the record and give the administrator another place to monitor. I recorded it as a rejected request with the reason, not as a missing feature.

**Online approval signatures.** This needs a policy decision above my pay grade and would have made the prototype a legal fiction. I kept a signed-copy upload and a printable letter instead.

**A staff dashboard.** It would have been the most impressive screen to show. It also required the administrator to change her workflow before she had a reason to trust the tool. Out of scope until the student side proved useful.

## The trade-off I made

I chose a status-first page over a guided submission flow.

A wizard would have looked more finished and would test better in a five-minute demo. But the research said submission was not the bottleneck, and a wizard adds steps to a task people already understood. The status page is less impressive and more honest. It also forced a useful constraint: every stage has to be explainable in one sentence, or the process itself is too complicated.

The cost: the prototype depends on the administrator updating a status by hand. That is a real operational dependency, not a detail to wave away. I designed the update as one tap from a list, but I could not test it with her because the faculty had no sandbox.

## What happened

I built a clickable Figma flow and a static HTML version of the student view. I tested the HTML version with five students: find your current request, then say what you would do next.

- 5 of 5 found the current stage.
- 4 of 5 correctly named the next action.
- One tester read "verified" as "finished". That was my wording, not her mistake. I changed the label to "Checked by your lecturer — next: hand the original to the office", then retested with two more students. Both got it.

No real users. The prototype was never deployed: the department would need to own the status updates and approve a new process, and that conversation is still open. The honest outcome is "tested with five students, not used in production", not "redesigned the faculty's internship system".

## What I'd do differently

- Talk to a partner company in week one. The paper letter requirement shaped the design more than anything else, and I learned about it late.
- Test the administrator's update flow with the administrator, not on paper.
- Write down rejected requests from the start. Half of the thinking happened in conversations I did not record properly.

## Next, if I continued

1. Sit with the administrator for a week and log every status update in real time.
2. Ask two partner companies what the letter must contain.
3. Test a paper fallback for students who submit in person.
