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
document.querySelector('#experience-track').innerHTML = content.experience.map(x => `<article class="experience-card"><div class="company-mark">${x.mark}</div><h3>${x.title}</h3><div class="company">${x.company}</div><div class="techs">${x.tech}</div><div class="date">${x.date}</div><ul>${x.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></article>`).join('');
const allSkills = content.skills.flatMap(category => category.items);
document.querySelector('#skill-grid').innerHTML = allSkills.map(x => `<div class="skill" title="${x.full}" style="--skill:${x.c}"><strong>${x.n}</strong><span>${x.p}</span></div>`).join('');
document.querySelector('#project-stack').innerHTML = content.projects.map(x => `<article class="project-card"><h3>${x.title}</h3><p class="project-overview">${x.overview}</p><ul class="project-points">${x.points.map(point => `<li>${point}</li>`).join('')}</ul><div class="project-tech">${x.tech}</div><a class="project-link" href="${x.url}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></article>`).join('');
const phrases = ["Hi, I'm Alex.","I build useful things.","And I love good coffee."];
let phrase=0, char=0, deleting=false;
function type(){const el=document.querySelector('#typed-line'); if(!el)return; const current=phrases[phrase]; el.textContent=current.slice(0,char); if(!deleting&&char<current.length){char++;setTimeout(type,85)}else if(!deleting){deleting=true;setTimeout(type,1500)}else if(char>0){char--;setTimeout(type,42)}else{deleting=false;phrase=(phrase+1)%phrases.length;setTimeout(type,300)}}
type();
const track=document.querySelector('.experience-track'), progress=document.querySelector('.scroll-progress span'); track.addEventListener('scroll',()=>{progress.style.width=`${Math.max(24,Math.min(100,track.scrollLeft/(track.scrollWidth-track.clientWidth)*100+24))}%`});
const projectTrack=document.querySelector('.project-track'), projectProgress=document.querySelector('.project-progress span'); projectTrack.addEventListener('scroll',()=>{projectProgress.style.width=`${Math.max(24,Math.min(100,projectTrack.scrollLeft/(projectTrack.scrollWidth-projectTrack.clientWidth)*100+24))}%`});

// Move one page section per gesture while leaving tall content and horizontal carousels alone.
(() => {
  const sections = [...document.querySelectorAll('main > .section')];
  let activeIndex = 0;
  let snapLocked = false;
  let touchStart = null;
  const lockDuration = 760;

  const carouselFor = target => target instanceof Element ? target.closest('.experience-track, .project-track') : null;
  const nearestSection = () => {
    let index = 0;
    sections.forEach((section, i) => { if (section.offsetTop <= window.scrollY + 40) index = i; });
    return index;
  };
  const isTallSectionInterior = section => {
    if (!section) return false;
    const maxInnerOffset = section.scrollHeight - window.innerHeight;
    const offset = window.scrollY - section.offsetTop;
    return maxInnerOffset > 24 && offset > 24 && offset < maxInnerOffset - 24;
  };
  const goToSection = index => {
    activeIndex = Math.max(0, Math.min(sections.length - 1, index));
    snapLocked = true;
    window.scrollTo({ top: sections[activeIndex].offsetTop, behavior: 'smooth' });
    window.setTimeout(() => { snapLocked = false; activeIndex = nearestSection(); }, lockDuration);
  };

  window.addEventListener('scroll', () => { if (!snapLocked) activeIndex = nearestSection(); }, { passive: true });

  window.addEventListener('wheel', event => {
    const carousel = carouselFor(event.target);
    if (carousel && carousel.scrollWidth > carousel.clientWidth) {
      const horizontalDelta = event.deltaX || event.deltaY;
      if (horizontalDelta) { carousel.scrollLeft += horizontalDelta; event.preventDefault(); }
      return;
    }
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX) || Math.abs(event.deltaY) < 10) return;
    if (snapLocked) { event.preventDefault(); return; }
    const section = sections[activeIndex] || sections[nearestSection()];
    if (isTallSectionInterior(section)) return;
    event.preventDefault();
    goToSection(activeIndex + (event.deltaY > 0 ? 1 : -1));
  }, { passive: false });

  window.addEventListener('keydown', event => {
    if (event.target.matches('input, textarea, select, [contenteditable="true"]')) return;
    if (event.target.closest('.experience-track, .project-track') && ['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    const actions = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1, Home: -Infinity, End: Infinity };
    if (!(event.key in actions)) return;
    event.preventDefault();
    const move = actions[event.key];
    goToSection(move === Infinity ? sections.length - 1 : move === -Infinity ? 0 : activeIndex + move);
  });

  window.addEventListener('touchstart', event => {
    if (!carouselFor(event.target)) touchStart = [event.touches[0].clientX, event.touches[0].clientY];
  }, { passive: true });
  window.addEventListener('touchend', event => {
    if (!touchStart || snapLocked || carouselFor(event.target)) { touchStart = null; return; }
    const [startX, startY] = touchStart;
    const deltaX = event.changedTouches[0].clientX - startX;
    const deltaY = event.changedTouches[0].clientY - startY;
    touchStart = null;
    if (Math.abs(deltaY) < 48 || Math.abs(deltaY) < Math.abs(deltaX)) return;
    const section = sections[activeIndex] || sections[nearestSection()];
    if (isTallSectionInterior(section)) return;
    goToSection(activeIndex + (deltaY < 0 ? 1 : -1));
  }, { passive: true });
})();
