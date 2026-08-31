export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS = [
  {
    name: "Scout",
    icon: "outbound",
    account: "Sample prospect",
    signal: "Target account added",
    work: "I reviewed public company pages, organized the relevant account context, and drafted a first note for the seller to check.",
    result: "Illustrative outreach draft ready",
    user: "show me the draft",
    bot: "ready. nothing has been sent.",
  },
  {
    name: "Brief",
    icon: "research",
    account: "Sample buyer meeting",
    signal: "Meeting added to the calendar",
    work: "I assembled a short brief from the available account notes and public pages, with open questions called out for review.",
    result: "Illustrative meeting brief ready",
    user: "put the open questions first",
    bot: "updated. the brief is ready to review.",
  },
  {
    name: "Recap",
    icon: "follow-up",
    account: "Sample category review",
    signal: "Customer call ended",
    work: "I captured the discussion, decisions, and open follow-ups, then drafted a recap with owners left generic.",
    result: "Illustrative recap ready",
    user: "keep it as a draft",
    bot: "saved as a draft. nothing has been sent.",
  },
  {
    name: "Paper",
    icon: "deal-desk",
    account: "Sample CPG account",
    signal: "Procurement question received",
    work: "I gathered the available internal context connected to the question and prepared a response for the seller to verify.",
    result: "Illustrative answer draft ready",
    user: "flag anything that needs review",
    bot: "flagged. the draft is waiting for review.",
  },
  {
    name: "Pipeline",
    icon: "pipeline",
    account: "Sample opportunity list",
    signal: "Weekly review started",
    work: "I organized recent activity and missing next steps into a clean review list without assigning outcomes or forecasts.",
    result: "Illustrative review list ready",
    user: "sort by next action",
    bot: "sorted. the list is ready.",
  },
  {
    name: "Renewal",
    icon: "renewal",
    account: "Sample renewal",
    signal: "Review date approaching",
    work: "I collected the existing notes, open questions, and draft follow-ups so the seller can decide what needs attention.",
    result: "Illustrative renewal brief ready",
    user: "leave the questions open",
    bot: "done. no answers were assumed.",
  },
  {
    name: "Signal",
    icon: "competitive",
    account: "Sample account",
    signal: "Public company update detected",
    work: "I summarized the public update and drafted a neutral account note without inferring buyer intent.",
    result: "Illustrative signal note ready",
    user: "add it to the account brief",
    bot: "added as context, not as a claim.",
  },
  {
    name: "Chief",
    icon: "chief-of-staff",
    account: "Seller work queue",
    signal: "Daily review started",
    work: "I grouped open drafts, pending reviews, and follow-ups into one queue so the seller can choose what moves next.",
    result: "Illustrative work queue ready",
    user: "show me what needs approval",
    bot: "ready. approval items are listed first.",
  },
] as const satisfies readonly HeroJob[];
