const DESIGN_WIDTH = 2560;
const DESIGN_HEIGHT = 1440;

const modalDefs = {
  tonanPrimaryGrowth: {
    src: "./assets/modal-tonan-primary-growth.png",
    width: 820,
    height: 560,
    alt: "第一产业增加值同比增长弹窗",
  },
  tonanFixedInvestment: {
    src: "./assets/modal-tonan-fixed-investment.png",
    width: 820,
    height: 560,
    alt: "农业固定资产投资增速达到弹窗",
  },
  tonanCivilization: {
    src: "./assets/modal-tonan-civilization.png",
    width: 820,
    height: 560,
    alt: "全市文明实践活动累计数弹窗",
  },
  tonanTalent: {
    src: "./assets/modal-tonan-talent.png",
    width: 820,
    height: 560,
    alt: "全年培育乡村各类人才弹窗",
  },
  tonanNearbyEmployment: {
    src: "./assets/modal-tonan-nearby-employment.png",
    width: 820,
    height: 560,
    alt: "新增农民工就近就业弹窗",
  },
  tonanPovertyEmploymentYear: {
    src: "./assets/modal-tonan-poverty-employment-year.png?v=2",
    width: 820,
    height: 560,
    alt: "脱贫就业人口规模达到年度弹窗",
    hotspots: [
      { x: 596, y: 250, width: 112, height: 210, action: "open-modal", modal: "tonanPovertyEmploymentMonth", label: "查看2026年1-6月明细" },
    ],
  },
  tonanPovertyEmploymentMonth: {
    src: "./assets/modal-tonan-poverty-employment-month.png",
    width: 820,
    height: 560,
    alt: "脱贫就业人口规模达到月度明细弹窗",
    hotspots: [
      { x: 628, y: 16, width: 130, height: 44, action: "open-modal", modal: "tonanPovertyEmploymentYear", label: "返回年度" },
    ],
  },
  tonanPartyRectification: {
    src: "./assets/modal-tonan-party-rectification.png",
    width: 820,
    height: 560,
    alt: "软弱涣散村党组织按期整顿弹窗",
  },
  tonanDispute: {
    src: "./assets/modal-tonan-dispute.png",
    width: 820,
    height: 560,
    alt: "矛盾纠纷弹窗",
  },
  lemonNewArea: {
    src: "./assets/modal-lemon-new-area.png",
    width: 820,
    height: 560,
    alt: "新增柠檬种植面积弹窗",
  },
  lemonStandardArea: {
    src: "./assets/modal-lemon-standard-area.png",
    width: 820,
    height: 560,
    alt: "标准化种植面积弹窗",
  },
  lemonYield: {
    src: "./assets/modal-lemon-yield.png",
    width: 820,
    height: 560,
    alt: "平均单产提升弹窗",
  },
  lemonFutureOrchard: {
    src: "./assets/modal-lemon-future-orchard.png",
    width: 820,
    height: 560,
    alt: "建设未来果园弹窗",
  },
  assistantGrowth: {
    src: "./assets/assistant-growth.png",
    width: 1707,
    height: 960,
    alt: "柠檬助手柠檬生长模型",
    assistantTab: "growth",
  },
  assistantPsyllid: {
    src: "./assets/assistant-psyllid.png",
    width: 1707,
    height: 960,
    alt: "柠檬助手木虱识别监控",
    assistantTab: "psyllid",
  },
  assistantControl: {
    src: "./assets/assistant-control.png",
    width: 1707,
    height: 960,
    alt: "柠檬助手病虫害防控",
    assistantTab: "control",
  },
};

const assistantModalByTab = {
  growth: "assistantGrowth",
  psyllid: "assistantPsyllid",
  control: "assistantControl",
};

const closeHotspots = {
  small: { x: 744, y: 10, width: 64, height: 56 },
  assistant: { x: 1624, y: 14, width: 72, height: 64 },
};

const assistantTabs = [
  { tab: "growth", x: 520, y: 86, width: 260, height: 50, label: "柠檬生长模型" },
  { tab: "psyllid", x: 800, y: 86, width: 260, height: 50, label: "木虱识别监控" },
  { tab: "control", x: 1080, y: 86, width: 260, height: 50, label: "病虫害防控" },
];

const stage = document.getElementById("stage");
const stageWrap = document.getElementById("stageWrap");
const views = [...document.querySelectorAll(".view")];
const modalLayer = document.getElementById("modalLayer");
const modalShell = document.getElementById("modalShell");
const modalImage = document.getElementById("modalImage");
const modalHotspots = document.getElementById("modalHotspots");

function fitStage() {
  const viewportWidth = window.visualViewport?.width || window.innerWidth;
  const viewportHeight = window.visualViewport?.height || window.innerHeight;
  const scale = Math.min(viewportWidth / DESIGN_WIDTH, viewportHeight / DESIGN_HEIGHT);
  stage.style.transform = `scale(${scale})`;
  stageWrap.style.width = `${DESIGN_WIDTH * scale}px`;
  stageWrap.style.height = `${DESIGN_HEIGHT * scale}px`;
}

function showView(name) {
  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === name);
  });
  closeModal();
}

function addModalHotspot(hotspot) {
  const button = document.createElement("button");
  button.className = "modal-hotspot";
  button.style.left = `${hotspot.x}px`;
  button.style.top = `${hotspot.y}px`;
  button.style.width = `${hotspot.width}px`;
  button.style.height = `${hotspot.height}px`;
  button.dataset.action = hotspot.action;
  if (hotspot.modal) button.dataset.modal = hotspot.modal;
  if (hotspot.tab) button.dataset.tab = hotspot.tab;
  button.setAttribute("aria-label", hotspot.label || hotspot.action);
  modalHotspots.appendChild(button);
}

function renderModalHotspots(def) {
  modalHotspots.replaceChildren();

  const close = def.assistantTab ? closeHotspots.assistant : closeHotspots.small;
  addModalHotspot({ ...close, action: "close-modal", label: "关闭弹窗" });

  if (def.assistantTab) {
    assistantTabs.forEach((tab) => {
      addModalHotspot({
        ...tab,
        action: "switch-assistant",
      });
    });
  }

  (def.hotspots || []).forEach(addModalHotspot);
}

function openModal(id) {
  const def = modalDefs[id];
  if (!def) return;

  modalShell.style.width = `${def.width}px`;
  modalShell.style.height = `${def.height}px`;
  modalImage.src = def.src;
  modalImage.alt = def.alt;
  renderModalHotspots(def);
  modalLayer.hidden = false;
}

function closeModal() {
  modalLayer.hidden = true;
  modalImage.removeAttribute("src");
  modalHotspots.replaceChildren();
}

function openAssistant(tab) {
  openModal(assistantModalByTab[tab] || "assistantGrowth");
}

function switchAssistant(tab) {
  openAssistant(tab);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const { action } = target.dataset;
  if (action === "show-view") showView(target.dataset.view);
  if (action === "open-modal") openModal(target.dataset.modal);
  if (action === "close-modal") closeModal();
  if (action === "open-assistant") openAssistant(target.dataset.tab);
  if (action === "switch-assistant") switchAssistant(target.dataset.tab);
});

window.addEventListener("resize", fitStage);
window.visualViewport?.addEventListener("resize", fitStage);
window.visualViewport?.addEventListener("scroll", fitStage);
fitStage();
