import type { Artifact, CroJob, SlideCard } from "./types";

export const ACME_TAIL_SLIDES: SlideCard[] = [
  {
    n: 4,
    kicker: "Open question",
    title: "Category review",
    body: "The room is still deciding how to compare last quarter to this one. Name the comparison. Do not add a product tour.",
  },
  {
    n: 5,
    kicker: "Next step",
    title: "Start with one team",
    body: "Same team that owns the review. Start there this quarter. Hold the second workstream.",
  },
  {
    n: 6,
    kicker: "Open question",
    title: "Access path",
    body: "Security will not open another tool without SSO and an audit trail. Put that on the slide before any extra ask.",
  },
  {
    n: 7,
    kicker: "Next step",
    title: "SSO, then the trial",
    body: "Name SSO on this call. One team. Trial after they see a cleaner review, not a catalog.",
  },
];

export const ACME_PROCUREMENT: Extract<Artifact, { kind: "redlines" }> = {
  kind: "redlines",
  title: "Acme procurement · overnight questions",
  paperTitle: "Their questions",
  from: "Acme procurement · 5:27am your time",
  marks: [
    {
      text: "Who can approve access for the pilot team?",
      note: "Pilot access is owned by the named admin on the order. IT can add the rest after SSO is on.",
      take: true,
    },
    {
      text: "When does the sample trial end, and what happens to the data?",
      note: "Trial follows the date on the order form. Export stays available for 30 days after. Nothing is deleted without a written ask.",
      take: true,
    },
    {
      text: "Can we invoice annually instead of monthly?",
      note: "Annual invoicing is on the enterprise paper. Do not re-trade that from this inbox.",
      take: false,
    },
    {
      text: "How many seats can the pilot add without a new form?",
      note: "The pilot cap is the seat count already on the form. Adds above that need a change order.",
      take: true,
    },
  ],
  reply: {
    to: "Acme procurement",
    subject: "Acme pilot questions. Answers you can send today",
    body: "Hi,\n\nPilot access sits with the named admin on the order. IT can add the rest after SSO is on.\n\nThe trial follows the date on the form. Export stays available for 30 days after. Nothing is deleted without a written ask.\n\nAnnual invoicing is on the enterprise paper. That stays on the order form, not this thread.\n\nThe pilot cap is the seat count already on the form. Adds above that need a change order.\n\nHappy to jump on a call before these are processed.\n\nBest,",
  },
};

export const ACME_OUTBOUND: Extract<Artifact, { kind: "outbound" }> = {
  kind: "outbound",
  title: "Acme outbound",
  account: "Acme",
  hypothesis: [
    {
      k: "Why us",
      body: "The category team still builds the quarterly review in three spreadsheets. A single comparison is the start, not a catalog pitch.",
    },
    {
      k: "Why now",
      body: "Careers lists a category insights role this month. The annual note says the store set grew. The review is current.",
    },
    {
      k: "Why them",
      body: "The category lead owns the review. The ops partner lives in the spreadsheet stitch. They feel the next cycle.",
    },
  ],
  evidence: [
    {
      source: "Careers · category insights",
      finding:
        "Open role this month. The job asks for someone who can rebuild the quarterly comparison across banners.",
    },
    {
      source: "Annual note",
      finding:
        "Store set grew. No named replacement for the review process. That is the gap.",
    },
    {
      source: "Category page",
      finding:
        "Public page still points at last year's review format. No new method named.",
    },
  ],
  targets: [
    {
      name: "Acme category lead",
      role: "Category",
      why: "Owns the quarterly review. Named in the hiring chain.",
    },
    {
      name: "Acme ops partner",
      role: "Ops",
      why: "Team is the one stitching the spreadsheets today.",
    },
  ],
  page: {
    headline: "Acme's review is a comparison problem",
    body: "The open role and the annual note say the same thing. Start with one comparison in the category team. Trial after that team has a cleaner cycle. Not a product tour.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Update decks in real time",
    trigger: "A customer call starts",
    backgroundAction: "Listening to the room + updating the open deck",
    problem:
      "A generic deck is a pitch they have already sat through. The useful move is naming the open question and the next step for this team, while they are still on.",
    botJob:
      "Granola is in while you are on. The last slides become the open question and a next step that fits this room. Not last quarter's story.",
    storyboard: [
      {
        when: "Minute 8",
        label: "The call starts. Room is already listening. No prompt needed.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Sample call · Acme",
          people: [
            { initials: "YOU", name: "You" },
            { initials: "BY", name: "Buyer" },
            { initials: "OP", name: "Ops" },
          ],
        },
      },
      {
        when: "Minute 22",
        label: "Room flags the open question in the live notes.",
        scene: "demo",
        visual: {
          kind: "live-transcript",
          timestamp: "14:31",
          speaker: "Agent note",
          note: "Open question: how the team will compare last quarter to this one.",
          signals: ["Category review", "One team"],
        },
      },
      {
        when: "Minute 31",
        label: "Slides maps it and rewrites the open deck.",
        scene: "notes",
        visual: {
          kind: "deck-update",
          eyebrow: "Open question",
          headline: "The review is a comparison problem",
          product: "Start with one team",
          status: "3 slides updated",
        },
      },
      {
        when: "Minute 35",
        label: "Present the new slides before the call ends.",
        scene: "deck",
        slides: ACME_TAIL_SLIDES,
      },
    ],
    unlock:
      "The open question on the slide, plus a next step for this team, while they are still on.",
    outcome:
      "One live call becomes a room-specific deck before the call ends.",
    clips: [],
    demo: {
      title: "Room",
      subtitle: "Live call · slides for this room",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "room",
          name: "Room",
          role: "bot",
          persona: "Turns the live call into slides that fit this room",
          color: "#C8F04A",
        },
        {
          id: "slides",
          name: "Slides",
          role: "bot",
          persona: "Maps the open question to a next step for this team",
          color: "#4A6B0A",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "room",
          kind: "routine",
          body: "Customer call started. I am following Granola and watching for the open question, blockers, and a next step. The open deck stays untouched until there is something worth changing.",
        },
        {
          id: "m2",
          from: "room",
          kind: "text",
          body: "Room just flagged the category review and the access path. Mapping both to the last slides now while the call is still live.",
        },
        {
          id: "m3",
          from: "room",
          kind: "text",
          body: "Still on. Granola 14:31. The open question is the slide. Category review and the access path, then the next step that fits this team. They should feel known, not pitched.",
        },
        {
          id: "m4",
          from: "slides",
          kind: "draft",
          draftLabel: "Last slides of the open deck · still on",
          artifact: {
            kind: "slides",
            title: "Acme next slides",
            cards: ACME_TAIL_SLIDES,
          },
        },
        {
          id: "m5",
          from: "room",
          kind: "draft",
          draftLabel: "One-pager they can forward",
          artifact: {
            kind: "one-pager",
            title: "Acme one-pager",
            eyebrow: "One-pager",
            sections: [
              {
                heading: "What we covered",
                body: "Start with one comparison in the category team. Security needs SSO and an audit trail. Trial as a one-team start, not a company-wide rollout.",
              },
              {
                heading: "Access path",
                body: "SSO and audit trail named before any extra products. The security lead from this call stays on the next meeting.",
              },
              {
                heading: "Trial",
                body: "One team that owns the review. A cleaner next cycle is the gate. Add seats only after that.",
              },
              {
                heading: "What we need from you",
                body: "Tuesday with your contact plus a security co-owner. Bring the contract owner if legal will slow SSO.",
              },
            ],
          },
        },
        {
          id: "m6",
          from: "room",
          kind: "draft",
          draftLabel: "Note they can send inside",
          artifact: {
            kind: "packet",
            title: "Forward this inside Acme",
            fields: [
              {
                label: "Problem in the room",
                value:
                  "The quarterly comparison still lives in three spreadsheets, and security will not open another tool without SSO and an audit trail.",
              },
              {
                label: "Why now",
                value:
                  "The team already agreed to start with one comparison. The trial is useful in that same cycle, not after a product tour next quarter.",
              },
              {
                label: "Risks already named",
                value:
                  "SSO and audit trail. Legal may slow the contract. Cost came up once and is not in this ask.",
              },
              {
                label: "Exact ask for next Tuesday",
                value:
                  "30 minutes. Your contact plus a security co-owner. Dated SSO path. Written trial scope for one team.",
              },
            ],
          },
        },
        {
          id: "m7",
          from: "room",
          kind: "draft",
          draftLabel: "Gmail to your contact",
          artifact: {
            kind: "gmail",
            title: "Forward to your contact",
            to: "Acme contact",
            subject: "Acme Tuesday packet (SSO, one-team trial)",
            body: "Forwarding the internal note from today's room. The open question is on the page. Tuesday ask is your contact plus a security co-owner, a dated SSO path, and a one-team trial. Nothing else is in the ask.",
          },
        },
        {
          id: "m8",
          from: "room",
          kind: "system",
          body: "Nothing sent. Deck, one-pager, note, and Gmail stay drafts until you tap Send.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Find product and internal answers fast",
    trigger: "A customer question lands",
    backgroundAction: "Searching product knowledge + internal company context",
    problem:
      "A customer question can turn into a week of Slack across product, billing, finance, and legal. The seller waits, the customer waits, and internal experts lose time repeating answers.",
    botJob:
      "Paper watches for the question, searches product knowledge and internal company context, and drafts a sourced reply. The seller reviews instead of chasing teams.",
    storyboard: [
      {
        when: "5:27am your time",
        label: "Four questions land. Paper starts while you are asleep.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Acme procurement",
          subject: "Questions on the pilot order",
          questions: 4,
        },
      },
      {
        when: "7:42am",
        label: "Paper has already found and checked every answer.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Access", answer: "Admin path named" },
            { name: "Trial", answer: "End date checked" },
            { name: "Paper", answer: "Annual hold confirmed" },
          ],
          status: "4 / 4 answered",
        },
      },
      {
        when: "7:44am",
        label: "A sourced reply is waiting for one-click approval.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "Acme procurement",
          subject: "Pilot order · answers",
          status: "Ready to approve",
        },
      },
      {
        when: "Ready for your click",
        label: "Questions, answers, and a reply. Nothing sent.",
        scene: "send",
        artifact: ACME_PROCUREMENT,
      },
    ],
    unlock:
      "Inbox questions in. A sendable draft out. No week of internal delay.",
    outcome:
      "Paper finds the product and internal context, then drafts the answer. No Slack chase and no seller time wasted.",
    clips: [],
    demo: {
      title: "Paper",
      subtitle: "Procurement questions · draft waiting",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "paper",
          name: "Paper",
          role: "bot",
          persona: "Reads overnight procurement mail and drafts the reply so you do not chase billing",
          color: "#111111",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "paper",
          kind: "routine",
          body: "New Acme procurement thread detected at 5:27am. One order, four questions. Checking access, trial terms, and packaging while you are offline.",
        },
        {
          id: "m2",
          from: "paper",
          kind: "text",
          body: "Already read it overnight. Four questions. Draft is waiting. You do not need to ping billing, finance, or legal for this one. Nothing sent.",
        },
        {
          id: "m3",
          from: "paper",
          kind: "draft",
          draftLabel: "Questions + reply",
          artifact: ACME_PROCUREMENT,
        },
        {
          id: "m4",
          from: "paper",
          kind: "draft",
          draftLabel: "Gmail reply · not sent",
          artifact: {
            kind: "gmail",
            title: "Reply to Acme procurement",
            to: ACME_PROCUREMENT.reply.to,
            subject: ACME_PROCUREMENT.reply.subject,
            body: ACME_PROCUREMENT.reply.body,
          },
        },
        {
          id: "m5",
          from: "paper",
          kind: "system",
          body: "Nothing sent. The reply stays a draft until you tap Send.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Pipeline generation is now easier than ever",
    trigger: "A target account enters your list",
    backgroundAction: "Researching signals + building personalized outreach",
    problem:
      "Cold outbound is a generic sequence. No research, no hypothesis, no evidence, and a name from a list. Pipeline that lands starts with why this account, why now, and who would care.",
    botJob:
      "When an account enters your target list, Scout researches it, writes a 3-why, finds evidence of the pain, names who cares, then drafts LinkedIn, email, and a page. Draft only. You send.",
    storyboard: [
      {
        when: "No meeting yet",
        label: "Acme hits your target list. Scout starts without a prompt.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Acme",
          sources: ["Careers", "Annual note", "Category"],
          signal: "Open insights role",
        },
      },
      {
        when: "90 seconds later",
        label: "It turns public evidence into a sharp 3-why.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why us", answer: "One comparison" },
            { label: "Why now", answer: "Open role this month" },
            { label: "Why them", answer: "Own the review" },
          ],
        },
      },
      {
        when: "Campaign ready",
        label: "The right buyer gets three personalized drafts.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Acme category lead",
          channels: ["LinkedIn", "Email", "Acme page"],
          status: "3 drafts · 0 sent",
        },
      },
      {
        when: "Ready for your click",
        label: "Research, message, and account page. All built from public pages.",
        scene: "send",
        artifact: ACME_OUTBOUND,
      },
    ],
    unlock:
      "Research, a 3-why, evidence, named buyers, and sendable drafts. Nothing fires until you tap.",
    outcome:
      "One account in. Research, a 3-why, named buyers, and personalized outreach out.",
    clips: [],
    demo: {
      title: "Scout",
      subtitle: "Research to a first meeting",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "attach",
          name: "Scout",
          role: "bot",
          persona: "Researches the account, writes the 3-why, and drafts the outreach",
          color: "#6B8F12",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "attach",
          kind: "routine",
          body: "Acme entered your target-account list. No meeting yet. Researching the account, building the 3-why, and finding the people who would feel the pain. Drafts only.",
        },
        {
          id: "m2",
          from: "attach",
          kind: "text",
          body: "In the account. Careers, annual note, category page. The insights role is asking for someone who can rebuild the quarterly comparison. Writing the 3-why from that, not from a persona.",
        },
        {
          id: "m3",
          from: "attach",
          kind: "draft",
          draftLabel: "3-why hypothesis",
          artifact: {
            kind: "packet",
            title: "Acme 3-why",
            fields: ACME_OUTBOUND.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m4",
          from: "attach",
          kind: "draft",
          draftLabel: "Evidence + who cares",
          artifact: {
            kind: "packet",
            title: "Proof, then the people",
            fields: [
              ...ACME_OUTBOUND.evidence.map((item) => ({
                label: item.source,
                value: item.finding,
              })),
              ...ACME_OUTBOUND.targets.map((person) => ({
                label: `${person.name} · ${person.role}`,
                value: person.why,
              })),
            ],
          },
        },
        {
          id: "m5",
          from: "attach",
          kind: "draft",
          draftLabel: "LinkedIn · not sent",
          artifact: {
            kind: "linkedin",
            title: "LinkedIn to Acme category lead",
            to: "Acme category lead",
            role: "Category, Acme",
            body: "Your careers page and annual note point at the same thing: the quarterly review still lives in a spreadsheet stitch. 90 seconds on how one comparison in the category team would change the next cycle. Draft only. Nothing sent.",
          },
        },
        {
          id: "m6",
          from: "attach",
          kind: "draft",
          draftLabel: "Gmail · not sent",
          artifact: {
            kind: "gmail",
            title: "Email to Acme category lead",
            to: "Acme category lead",
            subject: "Acme's quarterly review and the open insights role",
            body: "The open insights role and the annual note both point at the quarterly comparison. I put a one-page note on how we would start in that category team, not a product tour. Happy to walk the ops partner through it too. Nothing else in the ask. Draft only until you tap Send.",
          },
        },
        {
          id: "m7",
          from: "attach",
          kind: "draft",
          draftLabel: "Page for this account · not live",
          artifact: {
            kind: "one-pager",
            title: ACME_OUTBOUND.page.headline,
            eyebrow: "Page for Acme",
            sections: [
              {
                heading: "What we saw",
                body:
                  ACME_OUTBOUND.evidence[0]?.finding ??
                  "Public pages. The review is still the story.",
              },
              {
                heading: "Why this team",
                body:
                  ACME_OUTBOUND.hypothesis.find((item) => item.k === "Why them")
                    ?.body ?? "Category owns the review.",
              },
              {
                heading: "How the next step maps",
                body: ACME_OUTBOUND.page.body,
              },
            ],
          },
        },
        {
          id: "m8",
          from: "attach",
          kind: "system",
          body: "Nothing sent. LinkedIn, Gmail, and the page stay drafts until you tap Send.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
