const projects = [
  {
    title: "AR and MR Geometry Learning",
    years: "2024 - present",
    summary: "Video coding frameworks and comparative studies of physical, augmented reality, and mixed reality manipulatives for geometric reasoning.",
    meta: ["Embodied learning", "Geometry", "Video coding", "Mixed reality"],
    checks: ["design", "data", "share"],
    links: [
      ["TEI 2026 DOI", "https://doi.org/10.1145/3731459.3779036"]
    ]
  },
  {
    title: "SimTEACHER",
    years: "2018 - 2022",
    summary: "VR/AR classroom-management simulations for preservice teacher training, including 15 scenarios designed with in-service teachers around problematic student behaviors and teacher communication.",
    meta: ["Unity 3D", "Vuforia", "DAZ 3D", "iClone", "Classroom management"],
    checks: ["design", "build", "data", "share"],
    links: [
      ["Project page", "https://sites.google.com/view/chaeny/research-projects/simteacher?authuser=0"],
      ["Book chapter DOI", "https://doi.org/10.1007/978-3-030-85078-4_18"]
    ]
  },
  {
    title: "SimSEAH",
    years: "2016 - 2020",
    summary: "Simulation of Strabismus Emulation Avatar Humanoid, a VR training simulation for ophthalmologists' strabismus diagnosis performance, conducted with Chonnam National University Medical School and Hospital's Ophthalmology department.",
    meta: ["Virtual reality", "Ocular motility", "13 diagnosis types", "Medical education", "Patent"],
    checks: ["design", "build", "data", "share"],
    links: [
      ["Project page", "https://sites.google.com/view/chaeny/research-projects/simseah?authuser=0"],
      ["Scientific Reports DOI", "https://doi.org/10.1038/s41598-021-85265-8"]
    ]
  },
  {
    title: "SimDANVI",
    years: "2017 - 2020",
    summary: "A virtual reality simulation for dental and clinical-skills training, developed through collaborative research with dental education partners and evaluated through mixed-method learner experience studies.",
    meta: ["Virtual reality", "Clinical skills", "Communication training", "Mixed methods"],
    checks: ["design", "build", "data"],
    links: [
      ["Project page", "https://sites.google.com/view/chaeny/research-projects/simdanvi?authuser=0"]
    ]
  },
  {
    title: "Career Interest Test Game",
    years: "2019",
    summary: "An augmented reality career interest test game for elementary students, built around stealth assessment and evidence-centered design with real-time Firebase log data.",
    meta: ["Augmented reality", "Stealth assessment", "Firebase", "Evidence-centered design"],
    checks: ["design", "build", "data", "share"],
    links: [
      ["Project page", "https://sites.google.com/view/chaeny/research-projects/career-interest-test-game?authuser=0"]
    ]
  },
  {
    title: "ARAM Bot",
    years: "2020 - 2021",
    summary: "Two AI chatbot prototypes built with Google Dialogflow to study informative and argumentative interaction, including intent classification, response design, and early work on automatic evaluation models.",
    meta: ["AI chatbot", "Dialogflow", "NLP", "Argumentative interaction"],
    checks: ["design", "build", "data", "share"],
    links: []
  },
  {
    title: "MARVEL",
    years: "2019",
    summary: "A motion capture-based VR rehabilitation simulation using Perception Neuron hardware, Firebase linkage, mobile rater interfaces, and real-time performance feedback.",
    meta: ["Motion capture", "Virtual reality", "Firebase", "Rehabilitation"],
    checks: ["design", "build", "data"],
    links: []
  }
];

const lab = document.querySelector("[data-project-lab]");

if (lab) {
  let activeIndex = 0;
  const title = lab.querySelector("[data-project-title]");
  const years = lab.querySelector("[data-project-years]");
  const summary = lab.querySelector("[data-project-summary]");
  const meta = lab.querySelector("[data-project-meta]");
  const links = lab.querySelector("[data-project-links]");
  const tabs = Array.from(lab.querySelectorAll("[data-project-index]"));
  const checks = Array.from(lab.querySelectorAll("[data-project-check]"));
  const prev = lab.querySelector("[data-project-prev]");
  const next = lab.querySelector("[data-project-next]");

  function render(index) {
    activeIndex = (index + projects.length) % projects.length;
    const project = projects[activeIndex];

    years.textContent = project.years;
    title.textContent = project.title;
    summary.textContent = project.summary;
    meta.innerHTML = project.meta.map((item) => `<span>${item}</span>`).join("");
    links.innerHTML = project.links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");

    tabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === activeIndex;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      if (selected) tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });

    checks.forEach((check) => {
      check.checked = project.checks.includes(check.dataset.projectCheck);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => render(Number(tab.dataset.projectIndex)));
  });

  prev.addEventListener("click", () => render(activeIndex - 1));
  next.addEventListener("click", () => render(activeIndex + 1));
  render(0);
}
