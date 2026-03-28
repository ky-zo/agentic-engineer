/**
 * Boop sounds for the ASCII cloud.
 * Preloads WAV files as AudioBuffers for instant, overlap-friendly playback.
 */

const SOUND_URLS = [
  "/sounds/boop-1.wav",
  "/sounds/boop-2.wav",
  "/sounds/boop-3.wav",
  "/sounds/boop-4.wav",
];

let ctx: AudioContext | null = null;
let buffers: AudioBuffer[] = [];
let loaded = false;

function getCtx(): AudioContext | null {
  if (ctx) return ctx;
  try {
    ctx = new AudioContext();
  } catch {
    return null;
  }
  return ctx;
}

async function loadBuffers(ac: AudioContext) {
  if (loaded) return;
  loaded = true;
  buffers = await Promise.all(
    SOUND_URLS.map(async (url) => {
      const res = await fetch(url);
      const arr = await res.arrayBuffer();
      return ac.decodeAudioData(arr);
    }),
  );
}

function playBuffer(ac: AudioContext, buf: AudioBuffer, volume: number) {
  const src = ac.createBufferSource();
  const gain = ac.createGain();
  gain.gain.value = volume;
  src.buffer = buf;
  // Slight random playback rate shift so repeated sounds feel organic
  src.playbackRate.value = 0.9 + Math.random() * 0.2;
  src.connect(gain).connect(ac.destination);
  src.start();
}

// boop-4 is the last buffer — plays 50% less often and at 50% volume
function pickWeighted(): { index: number; volumeScale: number } {
  const last = buffers.length - 1;
  // Give boop-4 half the weight of the others
  // Others: weight 2 each, boop-4: weight 1
  const roll = Math.random() * (2 * last + 1);
  if (roll < 2 * last) {
    return { index: Math.floor(roll / 2), volumeScale: 1 };
  }
  return { index: last, volumeScale: 0.5 };
}

/**
 * Play a random boop. Call this throttled from mousemove over the cloud.
 */
export function playHoverSound() {
  const ac = getCtx();
  if (!ac) return;
  if (ac.state === "suspended") ac.resume();
  loadBuffers(ac).then(() => {
    if (!buffers.length) return;
    const { index, volumeScale } = pickWeighted();
    playBuffer(ac, buffers[index], 0.3 * volumeScale);
  });
}

/**
 * Play a boop for clicks — slightly louder.
 */
export function playClickSound() {
  const ac = getCtx();
  if (!ac) return;
  if (ac.state === "suspended") ac.resume();
  loadBuffers(ac).then(() => {
    if (!buffers.length) return;
    const { index, volumeScale } = pickWeighted();
    playBuffer(ac, buffers[index], 0.5 * volumeScale);
  });
}
