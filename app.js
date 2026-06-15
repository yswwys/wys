const ASSET = "./assets/";
const ASSET_VERSION = "20260615-modalfix";

function assetUrl(file) {
  return `${ASSET}${file}?v=${ASSET_VERSION}`;
}

const TOP_MODES = ["main", "party", "talent", "broadcast"];
const TOP_TAB_BOXES = {
  main: { x: 1926, y: 229, w: 147, h: 38 },
  party: { x: 2071, y: 229, w: 147, h: 38 },
  talent: { x: 2218, y: 229, w: 147, h: 38 },
  broadcast: { x: 2365, y: 229, w: 147, h: 38 },
};

const INDUSTRY_TAB_BOXES = {
  lemon: { x: 1913, y: 888, w: 194, h: 32 },
  lemonWide: { x: 1905, y: 882, w: 206, h: 50 },
  oil: { x: 2115, y: 888, w: 194, h: 32 },
};

const INDUSTRY_BRAIN_BOXES = {
  lemon: { x: 1912, y: 990, w: 338, h: 180 },
  oil: { x: 1912, y: 990, w: 338, h: 190 },
};

const LEMON_SCENES = {
  main: "district-main",
  party: "district-party",
  talent: "district-talent",
  broadcast: "district-broadcast",
};

const OIL_SCENES = {
  main: "district-oil-main",
  party: "district-oil-party",
  talent: "district-oil-talent",
  broadcast: "district-oil-broadcast",
};

const SCENES = {
  "district-main": {
    image: "screen-main.webp",
    w: 2560,
    h: 1440,
    kind: "district",
    industry: "lemon",
    topMode: "main",
  },
  "district-party": {
    image: "screen-party.webp",
    w: 2560,
    h: 1440,
    kind: "district",
    industry: "lemon",
    topMode: "party",
  },
  "district-talent": {
    image: "screen-talent.webp",
    w: 2560,
    h: 1440,
    kind: "district",
    industry: "lemon",
    topMode: "talent",
  },
  "district-broadcast": {
    image: "screen-broadcast.webp",
    w: 2560,
    h: 1440,
    kind: "district",
    industry: "lemon",
    topMode: "broadcast",
  },
  "district-oil-main": {
    image: "screen-oil-main.webp",
    w: 2560,
    h: 1440,
    kind: "district",
    industry: "oil",
    topMode: "main",
  },
  "district-oil-party": {
    image: "screen-oil-party.webp",
    w: 2560,
    h: 1440,
    kind: "district",
    industry: "oil",
    topMode: "party",
  },
  "district-oil-talent": {
    image: "screen-oil-talent.webp",
    w: 2560,
    h: 1440,
    kind: "district",
    industry: "oil",
    topMode: "talent",
  },
  "district-oil-broadcast": {
    image: "screen-oil-broadcast.webp",
    w: 2560,
    h: 1440,
    kind: "district",
    industry: "oil",
    topMode: "broadcast",
  },
  "baizi-platform": {
    image: "screen-baizi-platform.webp",
    w: 2560,
    h: 1440,
    kind: "baiziPlatform",
  },
  "lemon-scene": {
    image: "screen-lemon-scene.webp",
    w: 2560,
    h: 1440,
    kind: "lemonScene",
  },
  "lemon-brain": {
    image: "screen-lemon-brain.webp",
    w: 2880,
    h: 1530,
    kind: "lemonBrain",
  },
  "oil-brain": {
    image: "screen-oil-brain.webp",
    w: 2870,
    h: 1616,
    kind: "oilBrain",
  },
};

const KPI_MODALS = {
  agriGrowth: { image: "modal-kpi-agri-growth.webp", w: 820, h: 560 },
  investment: { image: "modal-kpi-investment.webp", w: 820, h: 560 },
  civilization: { image: "modal-kpi-civilization.webp", w: 820, h: 560 },
  talent: { image: "modal-kpi-talent.webp", w: 820, h: 560 },
  localJob: { image: "modal-kpi-local-job.webp", w: 820, h: 560 },
  povertyJob: {
    image: "modal-kpi-poverty-job.webp",
    w: 820,
    h: 560,
    tabs: [{ x: 594, y: 265, w: 98, h: 225, to: "povertyJob2026" }],
  },
  povertyJob2026: {
    image: "modal-kpi-poverty-job-2026.webp",
    w: 820,
    h: 560,
    tabs: [{ x: 636, y: 20, w: 110, h: 32, to: "povertyJob" }],
  },
  partyOrg: { image: "modal-kpi-party-org.webp", w: 820, h: 560 },
  dispute: { image: "modal-kpi-dispute.webp", w: 820, h: 560 },
};

const BAIZI_MODALS = {
  newArea: { image: "modal-baizi-new-area.webp", w: 820, h: 560 },
  standardArea: { image: "modal-baizi-standard-area.webp", w: 820, h: 560 },
  yield: { image: "modal-baizi-yield.webp", w: 820, h: 560 },
  futureOrchard: { image: "modal-baizi-future-orchard.webp", w: 820, h: 560 },
};

const ASSISTANT_MODALS = {
  growth: {
    image: "modal-assistant-growth.webp",
    w: 1707,
    h: 987,
    tabs: [
      { x: 800, y: 86, w: 260, h: 50, to: "psyllid" },
      { x: 1080, y: 86, w: 260, h: 50, to: "pest" },
    ],
  },
  psyllid: {
    image: "modal-assistant-psyllid.webp",
    w: 1707,
    h: 987,
    tabs: [
      { x: 520, y: 86, w: 260, h: 50, to: "growth" },
      { x: 1080, y: 86, w: 260, h: 50, to: "pest" },
    ],
  },
  pest: {
    image: "modal-assistant-pest.webp",
    w: 1707,
    h: 987,
    tabs: [
      { x: 520, y: 86, w: 260, h: 50, to: "growth" },
      { x: 800, y: 86, w: 260, h: 50, to: "psyllid" },
    ],
  },
};

const DISTRICT_KPI_BOXES = [
  { x: 758, y: 162, w: 205, h: 78, modal: "agriGrowth" },
  { x: 752, y: 248, w: 205, h: 78, modal: "investment" },
  { x: 1004, y: 162, w: 205, h: 78, modal: "civilization" },
  { x: 1004, y: 250, w: 205, h: 78, modal: "talent" },
  { x: 1290, y: 162, w: 205, h: 78, modal: "localJob" },
  { x: 1288, y: 244, w: 205, h: 78, modal: "povertyJob" },
  { x: 1603, y: 162, w: 205, h: 78, modal: "partyOrg" },
  { x: 1609, y: 250, w: 205, h: 78, modal: "dispute" },
];

const BAIZI_KPI_BOXES = [
  { x: 694, y: 119, w: 282, h: 94, modal: "newArea" },
  { x: 991, y: 119, w: 282, h: 94, modal: "standardArea" },
  { x: 1288, y: 119, w: 282, h: 94, modal: "yield" },
  { x: 1585, y: 119, w: 282, h: 94, modal: "futureOrchard" },
];

const stage = document.querySelector("#stage");
const screenImage = document.querySelector("#screen");
const hotspots = document.querySelector("#hotspots");
const modalLayer = document.querySelector("#modalLayer");

let currentSceneId = "district-main";
let activeModal = null;

function setStageSize(scene) {
  document.documentElement.style.setProperty("--stage-width", `${scene.w}px`);
  document.documentElement.style.setProperty("--stage-height", `${scene.h}px`);
  updateScale();
}

function updateScale() {
  const scene = SCENES[currentSceneId];
  const scale = Math.min(window.innerWidth / scene.w, window.innerHeight / scene.h);
  document.documentElement.style.setProperty("--stage-scale", `${scale}`);
}

function makeButton(box, label, handler, parent = hotspots, className = "hotspot") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.setAttribute("aria-label", label);
  button.title = label;
  button.style.left = `${box.x}px`;
  button.style.top = `${box.y}px`;
  button.style.width = `${box.w}px`;
  button.style.height = `${box.h}px`;
  button.addEventListener("click", handler);
  parent.appendChild(button);
  return button;
}

function showScene(sceneId) {
  if (!SCENES[sceneId]) return;
  currentSceneId = sceneId;
  activeModal = null;
  const scene = SCENES[sceneId];
  setStageSize(scene);
  screenImage.src = assetUrl(scene.image);
  screenImage.onload = updateScale;
  screenImage.alt = sceneId;
  clearModal();
  renderHotspots();
  history.replaceState(null, "", `#${sceneId}`);
}

function renderHotspots() {
  hotspots.replaceChildren();
  const scene = SCENES[currentSceneId];
  if (scene.kind === "district") renderDistrictHotspots(scene);
  if (scene.kind === "baiziPlatform") renderBaiziPlatformHotspots();
  if (scene.kind === "lemonScene") renderLemonSceneHotspots();
  if (scene.kind === "lemonBrain") {
    makeButton({ x: 1844, y: 25, w: 190, h: 48 }, "return to district", () => showScene("district-main"));
  }
  if (scene.kind === "oilBrain") {
    makeButton({ x: 2215, y: 25, w: 190, h: 48 }, "return to oil dashboard", () => showScene("district-oil-main"));
  }
}

function renderDistrictHotspots(scene) {
  TOP_MODES.forEach((mode) => {
    if (mode === scene.topMode) return;
    const map = scene.industry === "oil" ? OIL_SCENES : LEMON_SCENES;
    makeButton(TOP_TAB_BOXES[mode], `top tab ${mode}`, () => showScene(map[mode]));
  });

  if (scene.industry === "oil") {
    makeButton(INDUSTRY_TAB_BOXES.lemonWide, "switch to lemon", () => {
      showScene(LEMON_SCENES[scene.topMode]);
    });
    makeButton(INDUSTRY_BRAIN_BOXES.oil, "open oil brain", () => showScene("oil-brain"));
  } else {
    makeButton(INDUSTRY_TAB_BOXES.oil, "switch to oil", () => {
      showScene(OIL_SCENES[scene.topMode]);
    });
    makeButton(INDUSTRY_BRAIN_BOXES.lemon, "open lemon brain", () => showScene("lemon-brain"));
  }

  makeButton({ x: 1080, y: 519, w: 156, h: 125 }, "open Baizi platform", () => showScene("baizi-platform"));

  DISTRICT_KPI_BOXES.forEach((box) => {
    makeButton(box, `open KPI modal ${box.modal}`, () => showModal("kpi", box.modal));
  });
}

function renderBaiziPlatformHotspots() {
  makeButton({ x: 1774, y: 720, w: 104, h: 62 }, "open lemon scene", () => showScene("lemon-scene"));
  makeButton({ x: 1750, y: 22, w: 128, h: 40 }, "return to district", () => showScene("district-main"));
}

function renderLemonSceneHotspots() {
  BAIZI_KPI_BOXES.forEach((box) => {
    makeButton(box, `open Baizi KPI modal ${box.modal}`, () => showModal("baizi", box.modal));
  });
  makeButton({ x: 1641, y: 825, w: 230, h: 209 }, "open lemon assistant", () => showModal("assistant", "growth"));
  makeButton({ x: 2053, y: 58, w: 138, h: 40 }, "return to Baizi platform", () => showScene("baizi-platform"));
}

function showModal(type, id) {
  activeModal = { type, id };
  modalLayer.classList.add("is-open");
  modalLayer.setAttribute("aria-hidden", "false");
  modalLayer.replaceChildren();

  const scene = SCENES[currentSceneId];
  const config = getModalConfig(type, id);
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.width = `${config.w}px`;
  modal.style.height = `${config.h}px`;
  modal.style.left = `${Math.round((scene.w - config.w) / 2)}px`;
  modal.style.top = `${Math.round((scene.h - config.h) / 2)}px`;

  const image = document.createElement("img");
  image.alt = id;
  image.draggable = false;
  image.src = assetUrl(config.image);
  modal.appendChild(image);
  modalLayer.appendChild(modal);

  if (type === "assistant") {
    makeButton({ x: 1635, y: 24, w: 52, h: 52 }, "close assistant", clearModal, modal, "modal-hotspot");
    config.tabs.forEach((tab) => {
      makeButton(tab, `assistant tab ${tab.to}`, () => showModal("assistant", tab.to), modal, "modal-hotspot");
    });
  } else {
    makeButton({ x: config.w - 60, y: 14, w: 48, h: 48 }, "close modal", clearModal, modal, "modal-hotspot");
    if (config.tabs) {
      config.tabs.forEach((tab) => {
        makeButton(tab, `modal detail ${tab.to}`, () => showModal(type, tab.to), modal, "modal-hotspot");
      });
    }
  }
}

function getModalConfig(type, id) {
  if (type === "kpi") return KPI_MODALS[id];
  if (type === "baizi") return BAIZI_MODALS[id];
  if (type === "assistant") return ASSISTANT_MODALS[id];
  return null;
}

function clearModal() {
  activeModal = null;
  modalLayer.classList.remove("is-open");
  modalLayer.setAttribute("aria-hidden", "true");
  modalLayer.replaceChildren();
}

window.addEventListener("resize", updateScale);
window.addEventListener("hashchange", () => {
  const sceneId = location.hash.slice(1);
  if (SCENES[sceneId] && sceneId !== currentSceneId) showScene(sceneId);
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeModal) clearModal();
});

const initialScene = SCENES[location.hash.slice(1)] ? location.hash.slice(1) : "district-main";
showScene(initialScene);

