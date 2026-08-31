import type { Clip, ClipId } from "./types";

function clip(
  id: ClipId,
  title: string,
  caption: string,
): Clip {
  return {
    id,
    file: `/api/media/krista-clips/${id}.mp4`,
    poster: `/media/krista-clips/${id}.jpg`,
    title,
    caption,
  };
}

export const CLIPS: Record<ClipId, Clip> = {
  "01-morning-inbox": clip(
    "01-morning-inbox",
    "Morning inbox",
    "Weekday scan. Flags what needs a reply. Quiet if the inbox is empty.",
  ),
  "02-prospecting-pg": clip(
    "02-prospecting-pg",
    "Prospecting",
    "Drafted outreach. None send until the seller says so.",
  ),
  "03-slides-granola": clip(
    "03-slides-granola",
    "Slides from the room",
    "Granola is in. Slides rewrites the last cards while the call is still live.",
  ),
  "04-engineer-bugbot": clip(
    "04-engineer-bugbot",
    "Engineer",
    "Wired to the repo. Answers a setup question without leaving the thread.",
  ),
  "05-forecast-sfdc": clip(
    "05-forecast-sfdc",
    "Forecast",
    "Demo notes in. Next steps in the format the manager wants.",
  ),
  "06-customer-expert": clip(
    "06-customer-expert",
    "Account expert",
    "Who is in the account, what they use, questions in Slack.",
  ),
  "07-customer-exec-brief": clip(
    "07-customer-exec-brief",
    "Exec brief",
    "Turns what it just watched the seller do into a short note upstairs.",
  ),
  "08-chief-groupchat": clip(
    "08-chief-groupchat",
    "Chief group chat",
    "Opens a group channel. Chief, Slides, Engineer. Splits the work.",
  ),
};

export const ALL_CLIPS: Clip[] = Object.values(CLIPS);
