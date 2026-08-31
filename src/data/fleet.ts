import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "you",
    name: "You",
    blurb: "You stay in control. Named agents keep the surrounding work moving on their own computers.",
    color: "#E8E2D4",
    mark: "YOU",
    seat: true,
  },
  {
    id: "room",
    name: "Room",
    blurb: "Joins the call. Watches the open deck and rewrites the last slides while you are still on.",
    jobId: "standardize-room",
    color: "#C8F04A",
  },
  {
    id: "slides",
    name: "Slides",
    blurb: "Owns the deck file. Turns Room's notes into cards you can present before the call ends.",
    jobId: "standardize-room",
    color: "#4A6B0A",
  },
  {
    id: "paper",
    name: "Paper",
    blurb: "Watches the inbox. Finds internal answers overnight and parks a reply for you to send.",
    jobId: "legal-redlines",
    color: "#111111",
  },
  {
    id: "scout",
    name: "Scout",
    blurb: "Watches the target list. Builds a 3-why and queues LinkedIn, email, and a page. Drafts only.",
    jobId: "attach-engine",
    color: "#6B8F12",
  },
  {
    id: "brief",
    name: "Brief",
    blurb: "Keeps a one-page leave-behind current so you can forward something specific after the room.",
    color: "#2A2A2A",
  },
  {
    id: "atlas",
    name: "Atlas",
    blurb: "Reads public pages on its own computer and hands Scout the sources, not a persona guess.",
    color: "#9BB82E",
  },
];
