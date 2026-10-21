const makeSkills = (items, proficiency, color) => items.map(([n, full = n], index) => ({ n, full, p: `${Math.max(55, proficiency - (index % 4) * 5)}%`, c: color }));

const content = {
  about: "I build practical AI systems, data products, and production-ready applications using Python, LLMs, machine learning, cloud platforms, and modern APIs. My work focuses on turning complex data and research problems into reliable tools that people can actually use.\n\nI completed my Master of Science in Information Systems at The University of Texas at Arlington and previously earned my Bachelor of Science in Computer Science. Outside of coding, I enjoy going for morning runs and getting lost in a good book.",
  experience: [
    {mark:"A", title:"Applied AI/ML Engineer", company:"American College of Emergency Physicians (ACEP), Irving, Texas", date:"DATES NOT PROVIDED", tech:"Python · Claude · Amazon Bedrock · Azure · Azure Data Factory · Azure Synapse · SQL", bullets:["Built AskEMDI, an LLM-powered natural-language-to-SQL platform using Amazon Bedrock and Anthropic Claude, allowing emergency physicians and researchers to query structured medical data without writing SQL.","Engineered ETL/ELT pipelines using Azure Data Factory and Azure Synapse Analytics to process and validate a 23M+ encounter dataset.","Built Python and SQL data-quality validation workflows to identify missing values, inconsistent records, and clinical coding issues.","Partnered with clinicians and operations stakeholders to convert real-world research questions into usable AI workflows."]},
    {mark:"S", title:"Research Assistant — Machine Learning", company:"SEAR LAB, Arlington, Texas", date:"DATES NOT PROVIDED", tech:"Python · SQL · XGBoost · ARIMA · Power BI · Matplotlib · Machine Learning", bullets:["Built Python and SQL pipelines for 500K+ time-series sensor records.","Developed XGBoost and ARIMA models for predictive analysis and operational performance.","Contributed to a 15% improvement in production efficiency within the research environment.","Automated data workflows and created Matplotlib visualizations and Power BI dashboards.","Reduced KPI reporting time by 40% and improved access to operational insights."]},
    {mark:"A", title:"Operations Analyst", company:"AIESEC", date:"DATES NOT PROVIDED", tech:"Excel · SQL · Power BI · GCP", bullets:["Analyzed operational performance data and KPIs using Excel and SQL, identifying process inefficiencies that improved productivity by 15% and reduced operational costs by 10% through data-driven process optimization.","Built KPI dashboards and automated reporting workflows, collaborating with cross-functional teams to achieve 95% KPI attainment and align analytics insights with organizational performance objectives.","Maintained cloud-based operational datasets on Google Cloud Platform (GCP), ensuring data accuracy, improving accessibility for analytics reporting, and supporting Agile-driven operational initiatives."]}
  ],
  skills: [
    {name:"AI/ML & LLM ENGINEERING", items:makeSkills([["PY","Python"],["LLM","LLMs"],["GenAI","Generative AI"],["OpenAI","OpenAI API"],["Claude","Claude API"],["RAG"],["Agents","AI Agents"],["Embed","Embeddings"],["Vector","Vector Search"],["Tools","Tool Calling"],["JSON","Structured Outputs"],["Eval","LLM Evaluation"],["Guard","Guardrails"]],95,"#4b91b8")},
    {name:"AI APPLICATION ENGINEERING", items:makeSkills([["NL→SQL","Natural Language-to-SQL"],["RAG","RAG Pipelines"],["Agentic","Agentic Workflows"],["HITL","Human-in-the-Loop Systems"],["Eval","Model Evaluation"],["FastAPI"],["REST","REST APIs"],["Schema","JSON Schema"],["API","API Integration"],["Contract","Contract Validation"]],90,"#7c8bd3")},
    {name:"MACHINE LEARNING & DATA SCIENCE", items:makeSkills([["XGB","XGBoost"],["ARIMA"],["Predict","Predictive Modeling"],["Features","Feature Engineering"],["TS","Time-Series Forecasting"],["Stats","Statistical Analysis"],["EDA","Exploratory Data Analysis"]],85,"#69b8aa")},
    {name:"CLOUD & PRODUCTION ENGINEERING", items:makeSkills([["AWS"],["Azure"],["ADF","Azure Data Factory"],["Synapse","Azure Synapse Analytics"],["Docker"],["K8s","Kubernetes"],["CI/CD"],["ETL","ETL/ELT"],["Model","Data Modeling"],["PG","PostgreSQL"]],85,"#e9a53b")},
    {name:"ANALYTICS & VISUALIZATION", items:makeSkills([["BI","Power BI"],["DAX"],["PQ","Power Query"],["KPI","KPI Analysis"],["Dash","Dashboard Development"]],80,"#e77e62")},
    {name:"ENGINEERING & COLLABORATION", items:makeSkills([["Git"],["GitHub"],["Reqs","Requirements Gathering"],["Discovery","Technical Discovery"],["Stake","Stakeholder Collaboration"],["Proto","Technical Prototyping"],["Systems","Systems Integration"],["Design","Solution Design"]],90,"#ed7165")}
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
document.querySelector('#experience-track').innerHTML = content.experience.map((x, index) => `<article class="experience-card"><div class="card-number" aria-label="Experience ${String(index + 1).padStart(2, '0')}">${String(index + 1).padStart(2, '0')}</div><div class="company-mark">${x.mark}</div><h3>${x.title}</h3><div class="company">${x.company}</div><div class="techs">${x.tech}</div><div class="date">${x.date}</div><ul>${x.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></article>`).join('');
const allSkills = content.skills.flatMap(category => category.items);
document.querySelector('#skill-grid').innerHTML = allSkills.map(x => `<div class="skill" title="${x.full}" style="--skill:${x.c}"><strong>${x.n}</strong><span>${x.p}</span></div>`).join('');
document.querySelector('#project-stack').innerHTML = content.projects.map((x, index) => `<article class="project-card"><div class="card-number" aria-label="Project ${String(index + 1).padStart(2, '0')}">PROJECT ${String(index + 1).padStart(2, '0')}</div><h3>${x.title}</h3><p class="project-overview">${x.overview}</p><ul class="project-points">${x.points.map(point => `<li>${point}</li>`).join('')}</ul><div class="project-tech">${x.tech}</div><a class="project-link" href="${x.url}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></article>`).join('');
const phrases = ["I’m Lokesh","I like morning runs","I turn ideas into working tools","I get lost in a good book","Always curious. Always building."];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let phrase=0, char=0, deleting=false;
function type(){const el=document.querySelector('#typed-line'); if(!el)return; if(prefersReducedMotion){el.textContent=phrases[0];return;} const current=phrases[phrase]; el.textContent=current.slice(0,char); if(!deleting&&char<current.length){char++;setTimeout(type,85)}else if(!deleting){deleting=true;setTimeout(type,1500)}else if(char>0){char--;setTimeout(type,42)}else{deleting=false;phrase=(phrase+1)%phrases.length;setTimeout(type,300)}}
type();
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
