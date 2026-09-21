import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="site-shell">
      <header class="nav" [class.nav-scrolled]="scrolled()">
        <a class="brand" href="#top" aria-label="Mahender home">
          <span class="brand-mark">M</span>
          <span>MAHENDER<span class="brand-dot">.</span></span>
        </a>

        <nav class="desktop-nav" aria-label="Primary navigation">
          @for (item of navItems; track item.id) {
            <a [href]="'#' + item.id">{{ item.label }}</a>
          }
        </nav>

        <a class="nav-cta" href="#contact">Let's connect <span>↗</span></a>
      </header>

      <main id="top">
        <section class="hero section">
          <div class="hero-copy">
            <p class="eyebrow"><span class="status-dot"></span> SENIOR SOFTWARE ENGINEER · AI-NATIVE ENGINEERING</p>
            <h1>Engineering the<br><span>next generation</span><br>of enterprise software.</h1>
            <p class="hero-lead">
              I'm <strong>Mahender Chakali</strong> — a software engineer focused on
              Angular, TypeScript, Java, microservices and AI-native engineering.
              I build scalable products where enterprise engineering meets modern AI.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="#work">Explore my work <span>↓</span></a>
              <a class="button button-ghost" href="#contact">Get in touch <span>↗</span></a>
            </div>
            <div class="hero-proof">
              <div><strong>7+</strong><span>Years engineering<br>experience</span></div>
              <div><strong>4+</strong><span>Organizations &<br>enterprise teams</span></div>
              <div><strong>∞</strong><span>Curiosity for<br>better technology</span></div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="portrait-card">
              <div class="portrait-placeholder">
                <span>MC</span>
                <small>PROFILE PHOTO</small>
              </div>
              <div class="floating-chip chip-one">Angular</div>
              <div class="floating-chip chip-two">AI + LLMs</div>
              <div class="floating-chip chip-three">Java / Spring</div>
              <div class="orbit orbit-one"></div>
              <div class="orbit orbit-two"></div>
            </div>
            <div class="visual-caption">HYDERABAD · INDIA</div>
          </div>
        </section>

        <section class="marquee-band" aria-label="Core technology">
          <div class="marquee-track">
            <span>ANGULAR</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>JAVA</span><i>✦</i>
            <span>MICROSERVICES</span><i>✦</i><span>LLMs</span><i>✦</i><span>AI AGENTS</span><i>✦</i>
            <span>ANGULAR</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>JAVA</span><i>✦</i>
            <span>MICROSERVICES</span><i>✦</i><span>LLMs</span><i>✦</i><span>AI AGENTS</span>
          </div>
        </section>

        <section id="about" class="section split-section">
          <div class="section-label">01 / ABOUT</div>
          <div class="section-content">
            <h2>Enterprise engineering with an <em>AI-native</em> mindset.</h2>
            <p class="large-copy">
              I am an experienced software engineer from Hyderabad with a strong foundation
              in front-end engineering and enterprise application development. My work has
              evolved from Angular-heavy product delivery toward full-stack, distributed
              systems and AI-native development.
            </p>
            <p>
              I enjoy turning complex requirements into clean, maintainable user experiences
              and dependable backend services. Today my learning and delivery focus includes
              LLM applications, RAG, AI agents, tool calling, context engineering and
              production-minded AI architecture.
            </p>
            <div class="principles">
              <div><span>01</span><strong>Build with intent</strong><p>Simple architecture, clear UX and measurable outcomes.</p></div>
              <div><span>02</span><strong>Engineer for scale</strong><p>Performance, maintainability, observability and reliability.</p></div>
              <div><span>03</span><strong>Stay AI-native</strong><p>Use AI as an engineering capability, not just a feature.</p></div>
            </div>
          </div>
        </section>

        <section id="experience" class="section dark-section">
          <div class="section-label light">02 / CAREER</div>
          <div class="section-heading-row">
            <h2>Career <em>journey.</em></h2>
            <p>A progression from web development to senior enterprise and AI-native engineering.</p>
          </div>

          <div class="timeline">
            @for (item of experience; track item.company) {
              <article class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-period">{{ item.period }}</div>
                <div class="timeline-main">
                  <p class="company">{{ item.company }}</p>
                  <h3>{{ item.role }}</h3>
                  <p>{{ item.description }}</p>
                  <div class="tag-row">
                    @for (tag of item.highlights; track tag) { <span>{{ tag }}</span> }
                  </div>
                </div>
              </article>
            }
          </div>
        </section>

        <section id="work" class="section">
          <div class="section-label">03 / SELECTED WORK</div>
          <div class="section-heading-row">
            <h2>Work that <em>matters.</em></h2>
            <p>Selected enterprise and AI-oriented work that represents my engineering interests.</p>
          </div>

          <div class="project-grid">
            <article class="project-card featured">
              <div class="project-top"><span>01</span><span>FINANCIAL SERVICES</span></div>
              <h3>Global Pricing Server</h3>
              <p>
                Enterprise pricing platform supporting global currency rates, prime rates,
                money-market rates, maintenance, profiles and reporting workflows.
              </p>
              <div class="project-tech">Angular · TypeScript · AG Grid · REST · Enterprise UI</div>
              <div class="project-number">GPS</div>
            </article>

            <article class="project-card">
              <div class="project-top"><span>02</span><span>MEDIA & ENTERTAINMENT</span></div>
              <h3>ACCESS</h3>
              <p>Enterprise application work for a global media and entertainment brand portfolio, with emphasis on modern Angular experiences.</p>
              <div class="project-tech">Angular · TypeScript · RxJS · SCSS</div>
              <div class="project-number">A+E</div>
            </article>

            <article class="project-card">
              <div class="project-top"><span>03</span><span>AI-NATIVE</span></div>
              <h3>AI Engineering Copilot</h3>
              <p>A portfolio concept exploring AI-assisted development, code understanding, retrieval, tool use and developer workflows.</p>
              <div class="project-tech">LLMs · RAG · Agents · Tool Calling · Vector Search</div>
              <div class="project-number">AI</div>
            </article>
          </div>
        </section>

        <section id="skills" class="section skills-section">
          <div class="section-label">04 / CAPABILITIES</div>
          <div class="skills-layout">
            <div>
              <h2>The <em>toolkit.</em></h2>
              <p class="large-copy">A practical engineering stack spanning modern front-end, backend, cloud-native and AI application development.</p>
            </div>
            <div class="skill-groups">
              <div class="skill-group">
                <h3>Frontend</h3>
                <div class="skill-pills"><span>Angular</span><span>TypeScript</span><span>JavaScript</span><span>HTML</span><span>SCSS</span><span>RxJS</span><span>NgRx</span><span>Signals</span><span>AG Grid</span><span>PrimeNG</span></div>
              </div>
              <div class="skill-group">
                <h3>Backend & Platform</h3>
                <div class="skill-pills"><span>Java</span><span>Spring Boot</span><span>REST APIs</span><span>Microservices</span><span>Kafka</span><span>Redis</span><span>PostgreSQL</span><span>Docker</span><span>Kubernetes</span><span>CI/CD</span></div>
              </div>
              <div class="skill-group">
                <h3>AI Engineering</h3>
                <div class="skill-pills"><span>LLMs</span><span>RAG</span><span>Embeddings</span><span>Vector Databases</span><span>AI Agents</span><span>Tool Calling</span><span>MCP</span><span>Context Engineering</span><span>Evaluation</span><span>AI Security</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="magenta" class="section magenta-section">
          <div class="section-label">05 / CURRENT PROJECT</div>
          <div class="section-heading-row">
            <h2>Magenta <em>DMS.</em></h2>
            <p>T-Systems · Dealer Management System · May 2026 — Present</p>
          </div>
          <div class="magenta-intro">
            <p><strong>Magenta DMS</strong> is a dealer management system delivered as a fleet of microservices and micro frontends rather than one application. Each business capability is its own service + UI pair, composed at runtime by the Shell Application.</p>
          </div>
          <div class="architecture">
            <div class="shell-node"><span>HOST APPLICATION</span><strong>Shell App</strong><small>Runtime composition</small></div>
            <div class="architecture-grid">
              @for (module of magentaModules; track module.ui) {
                <article class="micro-card"><span>MICRO FRONTEND</span><h3>{{ module.ui }}</h3><div>↕</div><strong>{{ module.service }}</strong><small>Independent UI + Service pair</small></article>
              }
            </div>
          </div>
          <div class="architecture-note"><span>ARCHITECTURE</span><strong>Micro Frontends + Microservices</strong><p>Shell application hosts and composes independent business capabilities at runtime.</p></div>
        </section>

        <section id="education" class="section education-section">
          <div class="section-label">05 / EDUCATION</div>
          <div class="education-card">
            <div class="edu-year">B.TECH</div>
            <div>
              <p class="company">RGUKT BASAR · TELANGANA</p>
              <h2>Computer Science Engineering</h2>
              <p>Engineering education that established the foundation for a career in software development, systems thinking and technology.</p>
            </div>
            <div class="edu-icon">CSE</div>
          </div>
        </section>

        <section id="certifications" class="section certifications-section">
          <div class="section-label">06 / CERTIFICATIONS</div>
          <div class="cert-grid">
            @for (cert of certifications; track cert.title) {
              <article class="cert-card">
                <span class="cert-icon">✓</span>
                <div><span class="company">{{ cert.type }}</span><h3>{{ cert.title }}</h3><p>{{ cert.detail }}</p></div>
              </article>
            }
          </div>
        </section>

        <section id="services" class="section services-section">
          <div class="section-label">06 / WHAT I DO</div>
          <div class="services-grid">
            <article><span>01</span><h3>Angular Engineering</h3><p>Scalable enterprise UI, architecture, performance optimization, migrations and component systems.</p></article>
            <article><span>02</span><h3>AI-Native Development</h3><p>AI-assisted engineering, LLM applications, RAG, agents, tool calling and practical AI workflows.</p></article>
            <article><span>03</span><h3>Full-Stack Systems</h3><p>Java/Spring services, REST APIs, microservices, messaging and data-backed enterprise platforms.</p></article>
            <article><span>04</span><h3>Technical Delivery</h3><p>Turning business requirements into maintainable software with clean delivery, documentation and engineering discipline.</p></article>
          </div>
        </section>

        <section id="contact" class="contact-section">
          <div class="contact-inner">
            <p class="eyebrow">07 / CONTACT</p>
            <h2>Let's build something<br><em>meaningful.</em></h2>
            <p>For professional opportunities, engineering collaborations or product discussions, reach out through the channels below.</p>
            <div class="contact-actions">
              <a class="button button-primary" href="mailto:mahenderemrstechie@gmail.com">Email me ↗</a>
              <a class="button button-outline-light" href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn ↗</a>
              <a class="button button-outline-light" href="https://github.com/" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
            <div class="contact-footer">
              <span>MAHENDER CHAKALI</span>
              <span>HYDERABAD · INDIA</span>
              <span>© {{ year }}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    :host { display:block; }
  `]
})
export class AppComponent {
  readonly year = new Date().getFullYear();
  readonly scrolled = signal(false);

  readonly navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Career' },
    { id: 'work', label: 'Work' },
    { id: 'magenta', label: 'Current Project' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  readonly experience: Experience[] = [
    { company: 'Virtusa Consultancy Services', role: 'Senior Software Engineer', period: 'SEP 2022 — PRESENT', description: 'Enterprise software engineering across modern Angular applications, production support and current work on Magenta DMS micro frontends and microservices.', highlights: ['Angular', 'Micro Frontends', 'Microservices', 'T-Systems'] },
    { company: 'Tata Consultancy Services (TCS)', role: 'Angular Developer', period: 'AUG 2021 — SEP 2022', description: 'Angular development in enterprise application environments with reusable components, REST integration and responsive UI development.', highlights: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'] },
    { company: 'TeamLease Services Limited', role: 'Software Engineer', period: 'NOV 2020 — AUG 2021', description: 'Software engineering and web application development, including UI enhancements and application maintenance.', highlights: ['Web Development', 'JavaScript', 'Frontend'] },
    { company: 'Carbynetech India Pvt Ltd', role: 'Software Engineer', period: 'OCT 2018 — JUN 2020', description: 'Developed and maintained web applications while building strong front-end engineering fundamentals.', highlights: ['Angular', 'JavaScript', 'Web Applications'] },
    { company: 'Vahaami Solutions LLP', role: 'Software Engineer', period: 'NOV 2017 — AUG 2018', description: 'Started professional software development career building web interfaces and application features.', highlights: ['HTML', 'CSS', 'JavaScript', 'Web Development'] }
  ];

  readonly magentaModules = [
    { ui: 'Labor Master UI', service: 'Labor Master Service' },
    { ui: 'Customer Master UI', service: 'Customer Master Service' },
    { ui: 'DMS Admin UI', service: 'DMS Admin Service' },
    { ui: 'Vehicle Master UI', service: 'Vehicle Master Service' }
  ];

  readonly certifications = [
    { type: 'AI / PROFESSIONAL DEVELOPMENT', title: 'AI Native Engineer Training Program', detail: 'Course Completion Certificate — completed in 2026' },
    { type: 'ANGULAR', title: 'Certified Angular Developer Level 2', detail: 'Angular Training (Google)' },
    { type: 'ANGULAR', title: 'Certified Angular Developer Intermediate Level', detail: 'HackerRank' }
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.scrolled.set(window.scrollY > 20), { passive: true });
    }
  }
}
