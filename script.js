const makeSkills = (items, proficiency, color) => items.map(([n, full = n], index) => ({ n, full, p: `${Math.max(55, proficiency - (index % 4) * 5)}%`, c: color }));

const content = {
  about: "I build practical AI systems, data products, and production-ready applications using Python, LLMs, machine learning, cloud platforms, and modern APIs. My work focuses on turning complex data and research problems into reliable tools that people can actually use.\n\nI completed my Master of Science in Information Systems at The University of Texas at Arlington and previously earned my Bachelor of Science in Computer Science. Outside of coding, I enjoy going for morning runs and getting lost in a good book.",
  experience: [
    {title:"Applied AI/ML Engineer", company:"American College of Emergency Physicians (ACEP), Irving, Texas", tech:"Python · Claude · Amazon Bedrock · Azure · Azure Data Factory · Azure Synapse · SQL", bullets:["Built AskEMDI, an LLM-powered natural-language-to-SQL platform using Amazon Bedrock and Anthropic Claude, allowing emergency physicians and researchers to query structured medical data without writing SQL.","Engineered ETL/ELT pipelines using Azure Data Factory and Azure Synapse Analytics to process and validate a 23M+ encounter dataset.","Built Python and SQL data-quality validation workflows to identify missing values, inconsistent records, and clinical coding issues.","Partnered with clinicians and operations stakeholders to convert real-world research questions into usable AI workflows."]},
    {title:"Research Assistant — Machine Learning", company:"SEAR LAB, Arlington, Texas", tech:"Python · SQL · XGBoost · ARIMA · Power BI · Matplotlib · Machine Learning", bullets:["Built Python and SQL pipelines for 500K+ time-series sensor records.","Developed XGBoost and ARIMA models for predictive analysis and operational performance.","Contributed to a 15% improvement in production efficiency within the research environment.","Automated data workflows and created Matplotlib visualizations and Power BI dashboards.","Reduced KPI reporting time by 40% and improved access to operational insights."]},
    {title:"Operations Analyst", company:"AIESEC", tech:"Excel · SQL · Power BI · GCP", bullets:["Analyzed operational performance data and KPIs using Excel and SQL, identifying process inefficiencies that improved productivity by 15% and reduced operational costs by 10% through data-driven process optimization.","Built KPI dashboards and automated reporting workflows, collaborating with cross-functional teams to achieve 95% KPI attainment and align analytics insights with organizational performance objectives.","Maintained cloud-based operational datasets on Google Cloud Platform (GCP), ensuring data accuracy, improving accessibility for analytics reporting, and supporting Agile-driven operational initiatives."]}
  ],
  skills: [
    {name:"AI & MACHINE LEARNING", items:makeSkills([["PY","Python"],["Torch","PyTorch"],["ML","Machine Learning"],["NLP","Natural Language Processing (NLP)"],["LLM","Large Language Models (LLMs)"],["RAG","Retrieval-Augmented Generation (RAG)"],["Agents","AI Agents"],["Eval","LLM Evaluation"]],90,"#4b91b8")},
    {name:"CLOUD & AI PLATFORMS", items:makeSkills([["AWS","Amazon Web Services (AWS)"],["Azure","Microsoft Azure"],["GCP","Google Cloud Platform (GCP)"],["Bedrock","Amazon Bedrock"]],85,"#e9a53b")},
    {name:"DATA ENGINEERING", items:makeSkills([["SQL"],["ETL","ETL/ELT Pipelines"],["ADF","Azure Data Factory"],["Synapse","Azure Synapse Analytics"],["Databricks","Azure Databricks"],["Spark","Apache Spark"],["PG","PostgreSQL"],["Airflow","Apache Airflow"]],90,"#69b8aa")},
    {name:"SOFTWARE & ANALYTICS", items:makeSkills([["C++"],["Docker"],["CI/CD"],["GitHub","Git & GitHub"],["BI","Power BI"],["FastAPI"],["sklearn","Scikit-learn"],["REST","REST APIs"]],85,"#7c8bd3")}
  ],
  projects: [
    {title:"IncidentIQ", url:"https://github.com/lokeshram1/IncidentIQ", overview:"Evidence-driven AI platform for production incident investigation and root-cause analysis.", points:["Collects and analyzes logs, metrics, and deployment history.","Generates competing root-cause hypotheses using LLM reasoning.","Validates model conclusions using deterministic evidence and scoring.","Produces traceable investigation reports with supporting and contradicting evidence."], tech:"Python · LLMs · FastAPI · React · Docker · PostgreSQL"},
    {title:"Customer Data Onboarding Agent", url:"https://github.com/lokeshram1/customer-data-onboarding-agent", overview:"AI-powered workflow for profiling, mapping, validating, and transforming uploaded customer data.", points:["Profiles CSV files and detects data-quality issues.","Suggests schema mappings using AI and observed data patterns.","Uses deterministic validation and human approval before transformation.","Exports clean datasets together with mapping and validation reports."], tech:"Python · FastAPI · Next.js · TypeScript · OpenAI API · Pydantic"},
    {title:"E-Commerce Pricing Risk Detection", url:"https://github.com/lokeshram1/ecommerce-pricing-risk-detection", overview:"End-to-end machine-learning system that identifies unusual product prices and prioritizes listings for review.", points:["Engineers category-level, pricing, product, and semantic text features.","Uses XGBoost to generate explainable pricing-risk scores.","Provides FastAPI scoring endpoints and PostgreSQL persistence.","Includes a Streamlit dashboard for investigation and human review.","Evaluates performance using precision, recall, F1, PR-AUC, and review volume."], tech:"Python · XGBoost · Sentence Transformers · FastAPI · PostgreSQL · Streamlit · Docker"},
    {title:"ContractPilot", url:"https://github.com/lokeshram1/ContractPilot", overview:"AI-powered API contract testing platform for generating, diagnosing, repairing, and verifying integrations.", points:["Accepts OpenAPI contracts and natural-language integration requests.","Generates inspectable API clients and request mappings.","Executes requests against a test API and validates responses deterministically.","Diagnoses failures such as incorrect parameters, missing fields, and schema mismatches.","Records repair attempts, evidence, unresolved failures, and verification results."], tech:"Python · Claude API · OpenAPI · FastAPI · HTTPX · Docker · JSON Schema"},
    {title:"Concert Ticket Analytics Platform", url:"https://github.com/lokeshram1/Concert-price-tracking", overview:"Data engineering and analytics platform for tracking ticket prices, availability, and buying opportunities.", points:["Collects event and ticket data through the Ticketmaster API.","Tracks price and availability changes over time.","Detects unusual price movements and potential buying windows.","Uses scheduled pipelines for automated data processing.","Provides interactive dashboards and email alerts."], tech:"Python · Ticketmaster API · Dagster · DuckDB · dbt · Streamlit"}
  ]
};
document.querySelector('#about-text').innerHTML = content.about.replace(/\n\n/g, '<br><br>');
document.querySelector('#experience-track').innerHTML = content.experience.map((x, index) => `<article class="experience-card"><div class="card-number" aria-label="Experience ${String(index + 1).padStart(2, '0')}">${String(index + 1).padStart(2, '0')}</div><h3>${x.title}</h3><div class="company">${x.company}</div><div class="techs">${x.tech}</div><ul>${x.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></article>`).join('');
const skillExplanations = {
  "Python":"Used for machine learning, automation, data analysis, and backend development.",
  "PyTorch":"Used to build, train, and evaluate deep-learning models.",
  "Machine Learning":"Used to develop predictive models and data-driven applications.",
  "Natural Language Processing (NLP)":"Used to process, analyze, and model human language.",
  "Large Language Models (LLMs)":"Used to build language-based reasoning, generation, and automation workflows.",
  "Retrieval-Augmented Generation (RAG)":"Used to ground model responses in relevant source information.",
  "AI Agents":"Used to coordinate model reasoning, tools, and multi-step tasks.",
  "LLM Evaluation":"Used to compare model behavior against quality and reliability criteria.",
  "Amazon Web Services (AWS)":"Used to build and operate cloud-based application and data workflows.",
  "Microsoft Azure":"Used to support cloud data and application engineering workflows.",
  "Google Cloud Platform (GCP)":"Used to maintain cloud-based operational data and analytics workflows.",
  "Amazon Bedrock":"Used to build managed generative-AI applications with foundation models.",
  "SQL":"Used to query, validate, transform, and analyze structured data.",
  "ETL/ELT Pipelines":"Used to move, transform, and validate data for analytics and AI systems.",
  "Azure Data Factory":"Used to orchestrate data movement and transformation pipelines.",
  "Azure Synapse Analytics":"Used to work with large-scale analytical data and SQL workflows.",
  "Azure Databricks":"Used for collaborative large-scale data engineering and machine-learning workloads.",
  "Apache Spark":"Used for distributed processing of large datasets.",
  "PostgreSQL":"Used for reliable relational storage, querying, and application persistence.",
  "Apache Airflow":"Used to schedule and monitor repeatable data workflows.",
  "C++":"Used for performance-oriented programming and core computer-science work.",
  "Docker":"Used to package applications and services with consistent environments.",
  "CI/CD":"Used to automate checks, builds, and delivery steps for software changes.",
  "Git & GitHub":"Used for version control, collaboration, code review, and project history.",
  "Power BI":"Used to build interactive dashboards for operational and business analysis.",
  "FastAPI":"Used to build lightweight Python APIs for data and AI applications.",
  "Scikit-learn":"Used to train, evaluate, and compare classical machine-learning models.",
  "REST APIs":"Used to expose application capabilities through predictable HTTP endpoints."
};
const allSkills = content.skills.flatMap(category => category.items.map(item => ({...item, category: category.name})));
const skillGrid = document.querySelector('#skill-grid');
skillGrid.innerHTML = allSkills.map((x, index) => `<button class="skill" type="button" title="${x.full}" aria-label="${x.full}" aria-expanded="false" aria-controls="skill-popover" data-skill-index="${index}" style="--skill:${x.c}"><strong>${x.n}</strong><span>${x.p}</span></button>`).join('');
let skillDragStart = 0;
let skillDragScrollStart = 0;
let skillDragging = false;
let suppressSkillClick = false;
skillGrid.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'mouse' || event.button !== 0) return;
  skillDragStart = event.clientX;
  skillDragScrollStart = skillGrid.scrollLeft;
  skillDragging = false;
  skillGrid.setPointerCapture(event.pointerId);
});
skillGrid.addEventListener('pointermove', event => {
  if (event.pointerType !== 'mouse' || !skillGrid.hasPointerCapture(event.pointerId)) return;
  const distance = event.clientX - skillDragStart;
  if (Math.abs(distance) < 5 && !skillDragging) return;
  skillDragging = true;
  event.preventDefault();
  skillGrid.scrollLeft = skillDragScrollStart - distance;
});
const finishSkillDrag = event => {
  if (!skillGrid.hasPointerCapture(event.pointerId)) return;
  skillGrid.releasePointerCapture(event.pointerId);
  if (!skillDragging) return;
  suppressSkillClick = true;
  skillDragging = false;
};
skillGrid.addEventListener('pointerup', finishSkillDrag);
skillGrid.addEventListener('pointercancel', finishSkillDrag);
const skillPrevious = document.querySelector('[data-skill-prev]');
const skillNext = document.querySelector('[data-skill-next]');
const skillStep = () => {
  const firstSkill = skillGrid.querySelector('.skill');
  if (!firstSkill) return Math.max(1, skillGrid.clientWidth * .5);
  const styles = getComputedStyle(skillGrid);
  const columnGap = parseFloat(styles.columnGap || styles.gap || '0');
  return Math.max(1, firstSkill.getBoundingClientRect().width + columnGap);
};
const updateSkillControls = () => {
  const maxScroll = Math.max(0, skillGrid.scrollWidth - skillGrid.clientWidth);
  const currentScroll = Math.max(0, Math.min(maxScroll, skillGrid.scrollLeft));
  skillPrevious.disabled = currentScroll <= 1;
  skillNext.disabled = maxScroll <= 1 || currentScroll >= maxScroll - 1;
};
const moveSkills = direction => {
  skillGrid.scrollBy({left: direction * skillStep(), behavior: prefersReducedMotion ? 'auto' : 'smooth'});
  skillGrid.focus({preventScroll:true});
};
skillPrevious.addEventListener('click', () => moveSkills(-1));
skillNext.addEventListener('click', () => moveSkills(1));
skillGrid.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); moveSkills(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); moveSkills(1); }
  if (event.key === 'Home') { event.preventDefault(); skillGrid.scrollTo({left:0, behavior:prefersReducedMotion ? 'auto' : 'smooth'}); }
  if (event.key === 'End') { event.preventDefault(); skillGrid.scrollTo({left:skillGrid.scrollWidth, behavior:prefersReducedMotion ? 'auto' : 'smooth'}); }
});
skillGrid.addEventListener('scroll', updateSkillControls, {passive:true});
window.addEventListener('resize', updateSkillControls);
requestAnimationFrame(updateSkillControls);
const skillPopover = document.querySelector('#skill-popover');
const skillPopoverName = skillPopover.querySelector('.skill-popover-name');
const skillPopoverLevel = skillPopover.querySelector('.skill-popover-level');
const skillPopoverDescription = skillPopover.querySelector('.skill-popover-description');
const skillPopoverClose = skillPopover.querySelector('.skill-popover-close');
let activeSkillIndex = null;
let skillCloseTimer;
const skillLevel = proficiency => Number.parseInt(proficiency, 10) >= 90 ? 'Advanced' : Number.parseInt(proficiency, 10) >= 80 ? 'Proficient' : 'Developing';
const closeSkillDetails = () => {
  if (activeSkillIndex === null) return;
  activeSkillIndex = null;
  skillGrid.querySelectorAll('.skill').forEach(skill => skill.setAttribute('aria-expanded', 'false'));
  skillPopover.classList.remove('is-open');
  clearTimeout(skillCloseTimer);
  skillCloseTimer = setTimeout(() => skillPopover.hidden = true, 180);
};
const openSkillDetails = index => {
  const skill = allSkills[index];
  if (!skill) return;
  clearTimeout(skillCloseTimer);
  activeSkillIndex = index;
  skillGrid.querySelectorAll('.skill').forEach(button => button.setAttribute('aria-expanded', button.dataset.skillIndex === String(index) ? 'true' : 'false'));
  skillPopoverName.textContent = skill.full;
  skillPopoverLevel.textContent = `${skillLevel(skill.p)} · ${skill.p} proficiency`;
  skillPopoverDescription.textContent = skillExplanations[skill.full] || `Used in ${skill.category.toLowerCase()} work and software-engineering projects.`;
  skillPopover.hidden = false;
  requestAnimationFrame(() => skillPopover.classList.add('is-open'));
};
skillGrid.addEventListener('click', event => {
  if (suppressSkillClick) {
    suppressSkillClick = false;
    return;
  }
  const button = event.target.closest('.skill');
  if (!button) return;
  const index = Number(button.dataset.skillIndex);
  if (activeSkillIndex === index) closeSkillDetails();
  else openSkillDetails(index);
});
skillPopoverClose.addEventListener('click', closeSkillDetails);
document.addEventListener('click', event => {
  if (!event.target.closest('#skill-grid, #skill-popover')) closeSkillDetails();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeSkillDetails();
});
document.querySelector('#project-stack').innerHTML = content.projects.map((x, index) => `<article class="project-card"><div class="card-number" aria-label="Project ${String(index + 1).padStart(2, '0')}">PROJECT ${String(index + 1).padStart(2, '0')}</div><h3>${x.title}</h3><p class="project-overview">${x.overview}</p><ul class="project-points">${x.points.map(point => `<li>${point}</li>`).join('')}</ul><div class="project-tech">${x.tech}</div><a class="project-link" href="${x.url}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></article>`).join('');
const phrases = ["Hi, I’m Lokesh.","I like to run 🏃","I turn ideas into tools.","I get lost in books 📖","Always curious.","Always building."];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typedLine = document.querySelector('#typed-line');
const typingCursor = document.querySelector('.caret');
let phraseIndex = 0;
let characterIndex = 0;
let deletingPhrase = false;

function typeHeadline() {
  if (!typedLine) return;
  if (prefersReducedMotion) {
    typedLine.textContent = phrases[0];
    typingCursor?.classList.add('is-static');
    return;
  }

  const currentPhrase = phrases[phraseIndex];
  const currentCharacters = Array.from(currentPhrase);
  typedLine.textContent = currentCharacters.slice(0, characterIndex).join('');

  if (!deletingPhrase && characterIndex < currentCharacters.length) {
    characterIndex += 1;
    setTimeout(typeHeadline, 78);
    return;
  }
  if (!deletingPhrase) {
    deletingPhrase = true;
    setTimeout(typeHeadline, 1350);
    return;
  }
  if (characterIndex > 0) {
    characterIndex -= 1;
    setTimeout(typeHeadline, 38);
    return;
  }

  deletingPhrase = false;
  phraseIndex = (phraseIndex + 1) % phrases.length;
  setTimeout(typeHeadline, 260);
}

typeHeadline();
function setupCarousel(selector) {
  const wrap = document.querySelector(`[data-carousel="${selector}"]`);
  if (!wrap) return;
  const track = wrap.querySelector('.experience-track, .project-track');
  const cards = [...track.children];
  const previous = wrap.querySelector('[data-carousel-prev]');
  const next = wrap.querySelector('[data-carousel-next]');
  const dots = wrap.parentElement.querySelector('[data-carousel-dots]');
  let active = 0;
  let frame = 0;
  let dragging = false;
  let dragStart = 0;
  let dragScrollStart = 0;

  const targetFor = index => Math.max(0, cards[index].offsetLeft - parseFloat(getComputedStyle(track).paddingLeft || 0));
  const nearestCard = () => {
    const current = track.scrollLeft;
    return cards.reduce((closest, card, index) => Math.abs(targetFor(index) - current) < Math.abs(targetFor(closest) - current) ? index : closest, 0);
  };
  const update = index => {
    active = Math.max(0, Math.min(cards.length - 1, index));
    previous.disabled = active === 0;
    next.disabled = active === cards.length - 1;
    [...dots.children].forEach((dot, dotIndex) => {
      const selected = dotIndex === active;
      dot.classList.toggle('is-active', selected);
      dot.setAttribute('aria-current', selected ? 'true' : 'false');
    });
    const progress = wrap.parentElement.querySelector('.scroll-progress span');
    if (progress) progress.style.width = `${((active + 1) / cards.length) * 100}%`;
  };
  const sync = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => update(nearestCard()));
  };
  const move = delta => {
    const target = Math.max(0, Math.min(cards.length - 1, active + delta));
    track.scrollTo({ left: targetFor(target), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    update(target);
  };

  cards.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `${selector === 'experience' ? 'Experience' : 'Project'} ${index + 1}`);
    dot.addEventListener('click', () => {
      track.scrollTo({ left: targetFor(index), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      update(index);
    });
    dots.append(dot);
  });

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', sync, { passive: true });
  track.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  });

  // Native touch scrolling remains available; mouse dragging adds the same affordance on desktop.
  track.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    dragging = true;
    dragStart = event.clientX;
    dragScrollStart = track.scrollLeft;
    track.classList.add('is-dragging');
    track.setPointerCapture(event.pointerId);
  });
  track.addEventListener('pointermove', event => {
    if (!dragging) return;
    event.preventDefault();
    track.scrollLeft = dragScrollStart - (event.clientX - dragStart);
  });
  const stopDragging = event => {
    if (!dragging) return;
    dragging = false;
    track.classList.remove('is-dragging');
    if (event.pointerId !== undefined && track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    sync();
  };
  track.addEventListener('pointerup', stopDragging);
  track.addEventListener('pointercancel', stopDragging);
  track.addEventListener('lostpointercapture', stopDragging);

  update(0);
}

setupCarousel('experience');
setupCarousel('projects');

// Keep navigation precise while leaving wheel, trackpad, touch, and carousel scrolling native.
(() => {
  const pageScroller = document.querySelector('main');
  const sections = [...document.querySelectorAll('main > .section')];
  let activeIndex = 0;

  const nearestSection = () => {
    let index = 0;
    sections.forEach((section, i) => { if (section.offsetTop <= pageScroller.scrollTop + 40) index = i; });
    return index;
  };
  const goToSection = index => {
    activeIndex = Math.max(0, Math.min(sections.length - 1, index));
    pageScroller.scrollTo({ top: sections[activeIndex].offsetTop, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    const targetId = link.getAttribute('href').slice(1);
    const targetIndex = sections.findIndex(section => section.id === targetId);
    if (targetIndex < 0) return;
    link.addEventListener('click', event => {
      event.preventDefault();
      history.replaceState(null, '', `#${targetId}`);
      goToSection(targetIndex);
    });
  });

  pageScroller.addEventListener('scroll', () => { activeIndex = nearestSection(); }, { passive: true });

  window.addEventListener('keydown', event => {
    if (event.target.matches('input, textarea, select, [contenteditable="true"]')) return;
    if (event.target.closest('.experience-track, .project-track') && ['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    const actions = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1, Home: -Infinity, End: Infinity };
    if (!(event.key in actions)) return;
    event.preventDefault();
    const move = actions[event.key];
    goToSection(move === Infinity ? sections.length - 1 : move === -Infinity ? 0 : activeIndex + move);
  });
})();
