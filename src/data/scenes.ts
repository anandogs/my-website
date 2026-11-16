// One simulated day, and the single place to tune it. A clock runs through the
// day faster than real time (it is only ever shown as the wall clock over his desk); each scene starts when the clock reaches its `from`
// and the light, sky and page palette follow the clock continuously (`sky`).
// Character3D.astro reads all of this and never hard-codes a scene or a time.
//
// Clock times are hours on a 24 h dial: 13 is 1:00 pm, 17.5 is 5:30 pm.
export type SceneId = "work" | "farm" | "surf";

export interface SceneConfig {
  id: SceneId;
  /** Clock time this scene starts. It ends when the next one starts (or at `night.from`). */
  from: number;
  /** Real seconds the scene lasts; the clock is paced to cover its hours in that time. */
  seconds: number;
  /** This scene's character, in its own clothes, with its props. */
  model: string;
  /** Looping clip in the model; `${clip}_Hi` is the matching one-shot wave. */
  clip: string;
  /** Every prop node for this scene starts with this name. */
  props: string;
  /** A second activity he switches to between two clock times, if the model has
   *  the clip. `tiles`: nodes named `${tiles}0..N` float up while it lasts (and
   *  it only runs if they exist). `talks`: his mouth moves as on a call. */
  also?: { clip: string; from: number; to: number; tiles?: string; talks?: boolean };
  /** Resting yaw in radians (0 = facing the camera). Chosen so props don't hide him. */
  homeYaw: number;
  /** What the camera must show: metres across, metres above the ground, and how
   *  many degrees it looks down. It eases between scenes. */
  frame: { width: number; height: number; pitch: number };
  /** Finishes the sentence "A low-poly 3D figure of Anando …" for screen readers. */
  alt: string;
}

export const scenes: SceneConfig[] = [
  {
    id: "work",
    from: 9,
    seconds: 24,
    model: "/models/anando_work.glb",
    clip: "Laptop",
    props: "Prop_Laptop",
    // types for the first 8 s or so, then a mid-morning video call
    also: { clip: "Laptop_Call", from: 10.33, to: 12.5, tiles: "Prop_Laptop_CallTile", talks: true },
    homeYaw: 0.6,
    // tall enough for the wall clock above his head
    frame: { width: 2.4, height: 2.12, pitch: 9 },
    alt: "working at his laptop",
  },
  {
    id: "farm",
    from: 13,
    seconds: 17,
    model: "/models/anando_farm.glb",
    clip: "Farm",
    props: "Prop_Farm",
    // waters first, then pulls a vegetable mid-afternoon
    also: { clip: "Farm_Pull", from: 15, to: 16.5 },
    homeYaw: -0.45,
    frame: { width: 2.7, height: 2.0, pitch: 9 },
    alt: "watering a bed of seedlings",
  },
  {
    id: "surf",
    from: 17.5,
    seconds: 15,
    model: "/models/anando_surf.glb",
    clip: "Surf",
    props: "Prop_Surf",
    homeYaw: -0.55,
    // the board is 2.1 m long and can be spun through any angle
    frame: { width: 3.0, height: 2.05, pitch: 13 },
    alt: "surfing a small wave at sunset",
  },
];

/** After the last scene the stage empties and the clock sweeps round to the
 *  first scene's `from` in this many real seconds. */
export const night = { from: 19.25, seconds: 4 };

export interface SkyKey {
  /** Clock time; values past 24 are the small hours of the next morning. */
  at: number;
  /** The key light on the 3D scene. */
  sun: { color: number; intensity: number; position: [number, number, number] };
  /** Fill light: sky colour from above, ground bounce from below. */
  fill: { color: number; ground: number; intensity: number };
  /** Where the sun sits behind the stage, in % of its width and height (y > 100 is below it). */
  disc: { x: number; y: number };
  /** Page colours. Text (`ink`, `inkSoft`, `accent`) must stay ≥ 4.5:1 on both
   *  `paper` and `paperDeep` at every key, which keeps the blends between keys AA too. */
  page: {
    paper: number;
    paperDeep: number;
    glow: number;
    sunCore: number;
    ink: number;
    inkSoft: number;
    accent: number;
  };
}

/** Light and colour through the day, blended linearly between neighbouring keys.
 *  Must start at the first scene's `from` and end exactly 24 h later with the same look. */
export const sky: SkyKey[] = [
  {
    // morning: low warm sun through a window on his right
    at: 9,
    sun: { color: 0xffe3bd, intensity: 2.0, position: [-3.2, 3.6, 2.6] },
    fill: { color: 0xfff1dc, ground: 0xb89468, intensity: 1.9 },
    disc: { x: 58, y: 26 },
    page: { paper: 0xf1e7d6, paperDeep: 0xecdfc8, glow: 0xfbf4e6, sunCore: 0xfff9ea, ink: 0x2b1c12, inkSoft: 0x6a5443, accent: 0xb23026 },
  },
  {
    // midday: high, white, bright
    at: 13,
    sun: { color: 0xffffff, intensity: 2.7, position: [0.8, 6.5, 2.2] },
    fill: { color: 0xf2fbff, ground: 0x9fb26a, intensity: 2.3 },
    disc: { x: 69, y: 7 },
    page: { paper: 0xeaf0d2, paperDeep: 0xd9e5ba, glow: 0xfbfde9, sunCore: 0xffffff, ink: 0x1f2614, inkSoft: 0x4b5535, accent: 0xa3301f },
  },
  {
    // golden hour: the sun starts down
    at: 17.5,
    sun: { color: 0xffbe7a, intensity: 2.6, position: [3.6, 2.6, 2.4] },
    fill: { color: 0xffe2c2, ground: 0x4aa7a8, intensity: 1.8 },
    disc: { x: 82, y: 34 },
    page: { paper: 0xf9e2c0, paperDeep: 0xf2c79d, glow: 0xfff1cf, sunCore: 0xfff3c2, ink: 0x2b1810, inkSoft: 0x664531, accent: 0xa02820 },
  },
  {
    // sunset: orange, close to the horizon
    at: 18.6,
    sun: { color: 0xff9a5a, intensity: 2.3, position: [4.2, 1.5, 2.0] },
    fill: { color: 0xffc9b0, ground: 0x3f8f9a, intensity: 1.5 },
    disc: { x: 85, y: 62 },
    page: { paper: 0xf8cfa8, paperDeep: 0xf0aa8c, glow: 0xffd49a, sunCore: 0xffa24d, ink: 0x2b1510, inkSoft: 0x5c3327, accent: 0x8f1d1a },
  },
  {
    // last light: pink over mauve as he heads in
    at: 19.25,
    sun: { color: 0xff7a55, intensity: 1.4, position: [4.5, 0.8, 1.8] },
    fill: { color: 0xeab4c0, ground: 0x3a6f8a, intensity: 1.2 },
    disc: { x: 87, y: 80 },
    page: { paper: 0xecb9a8, paperDeep: 0xcd9cab, glow: 0xf7b08a, sunCore: 0xf2714a, ink: 0x24121a, inkSoft: 0x4a2936, accent: 0x76141f },
  },
  {
    // the middle of the night, passed through in a second or two
    at: 26,
    sun: { color: 0x8f9cff, intensity: 0.4, position: [-2, 4, 2] },
    fill: { color: 0x9a9ac8, ground: 0x55557a, intensity: 0.8 },
    disc: { x: 40, y: 130 },
    page: { paper: 0xbdbcd4, paperDeep: 0x9c9dbf, glow: 0xcfcee6, sunCore: 0xcfcee6, ink: 0x14132a, inkSoft: 0x2c2b48, accent: 0x551228 },
  },
  {
    at: 33,
    sun: { color: 0xffe3bd, intensity: 2.0, position: [-3.2, 3.6, 2.6] },
    fill: { color: 0xfff1dc, ground: 0xb89468, intensity: 1.9 },
    disc: { x: 58, y: 26 },
    page: { paper: 0xf1e7d6, paperDeep: 0xecdfc8, glow: 0xfbf4e6, sunCore: 0xfff9ea, ink: 0x2b1c12, inkSoft: 0x6a5443, accent: 0xb23026 },
  },
];

export const timing = {
  /** Blend between two clips of the same scene (typing ↔ call, loop ↔ wave). */
  crossfade: 0.5,
  /** He and his props shrink away … */
  propsOut: 0.45,
  /** … and the next him and his props pop in, */
  propsIn: 0.7,
  /** once the outgoing ones have cleared, */
  propsInDelay: 0.5,
  /** spread over this long, ground up. */
  stagger: 0.4,
};
