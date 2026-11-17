import type { SceneId } from "./scenes";

// `scene` ties a nickname to the part of the day it belongs to; untagged ones
// can turn up anywhere.
export interface Nickname {
  text: string;
  scene?: SceneId;
}

export const nicknames: Nickname[] = [
  { text: "an automation sage", scene: "work" },
  { text: "a surf n00b", scene: "surf" },
  { text: "a dashboard whisperer", scene: "work" },
  { text: "a tree-hugger.dev", scene: "farm" },
  { text: "an agent wrangler", scene: "work" },
  { text: "an aquadreamer", scene: "surf" },
  { text: "a qr gardener", scene: "farm" },
  { text: "a loop closer" },
  { text: "a farm cloud builder", scene: "farm" },
  { text: "a zen coder" },
  { text: "a manual minimizer", scene: "work" },
  { text: "a solenoid romantic", scene: "farm" },
  { text: "a template rebel" },
  { text: "a langgraph gardener", scene: "work" },
  { text: "the voice of the trees", scene: "farm" },
  { text: "a side quest guru" },
  { text: "a dev herder", scene: "work" },
  { text: "an out-of-office expert", scene: "surf" },
  { text: "a drip line engineer", scene: "farm" },
  { text: "a fast-fail evangelist" },
  { text: "a pipeline plumber", scene: "work" },
  { text: "a seedling sysadmin", scene: "farm" },
  { text: "a problem collector" },
  { text: "a terminal therapist", scene: "work" },
  { text: "a tree namer", scene: "farm" },
  { text: "a wifi dependent" },
  { text: "a flowchart scribbler", scene: "work" },
  { text: "a mud debugger", scene: "farm" },
  { text: "a banana-based decision-maker" },
  { text: "an alt-tab sprinter", scene: "work" },
  { text: "a pedal-powered thinker" },
  { text: "a low-key cybermonk" },
  { text: "a newbie, again" },
  { text: "wolf and imly's map guy", scene: "farm" },
  { text: "an error message composer", scene: "work" },
  { text: "an infra plumber", scene: "work" },
];
