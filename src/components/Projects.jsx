
function Projects() {
  const projects = [
    {
      title: "VoFlo",
      date: "Feb 2026 – Present",
      description: "Cross-platform React Native app interfacing with a wearable sEMG device via Bluetooth, delivering real-time AI-powered vocal muscle monitoring for clinical and consumer use cases. Engineered a real-time data pipeline with on-device ML inference achieving 5ms end-to-end latency, with session recording, calibration workflows, and strain-based replay validated with 50+ users. Integrated with AWS (Cognito, API Gateway, DynamoDB) for authentication, secure session storage, and data syncing.",
      tech: ["React Native", "BLE", "AWS", "Node.js", "ML Inference", "OpenAI API"],
      links: [
        { label: "GitHub →", href: "https://github.com/poben2002/VoFlo-Monorepo/tree/echou", primary: false }
      ]
    },
    {
      title: "U-Wick",
      date: "Jan 2026 – Present",
      description: "Capstone project designing and prototyping an AI chatbot-centered academic planning assistant for UW students, integrated with the Wick Study Planner platform. MVP features conversational onboarding to collect academic context and extract syllabus deadlines, AI-generated study scheduling that adapts dynamically to workload and priorities, and proactive guidance with deadline alerts, prerequisite eligibility checks, and structured planning checklists.",
      tech: ["React Native", "AI/LLM Integration", "Chatbot", "UI/UX Design"],
      links: []
    },
    {
      title: "Famtry",
      date: "Jan 2026 – Mar 2026",
      description: "Full-stack iOS household pantry sharing platform with SwiftUI client and Node.js/Express REST backend. Supports family membership management, pantry CRUD operations, and multi-owner approval workflows for 50+ users. Features expiration tracking with local push notifications and a centralized async/await state layer for consistent, responsive UI updates.",
      tech: ["SwiftUI", "Node.js", "Express.js", "MongoDB", "REST APIs", "Async/Await"],
      links: [
        { label: "iOS Repo →", href: "https://github.com/echou0321/Famtry-iOS-App", primary: false },
        { label: "Backend →", href: "https://github.com/echou0321/Famtry-Backend-Server", primary: false }
      ]
    },
    {
      title: "WattWise",
      date: "Sep 2025 – Dec 2025",
      description: "Energy efficiency web app empowering Washington homeowners to understand utility usage and savings. Features interactive quiz, personalized recommendations with estimated annual savings, and actionable checklist with progress tracking.",
      tech: ["React", "Firebase", "Firestore", "Vite", "React Router"],
      links: [
        { label: "View Site →", href: "https://wattwise-cd2b2.web.app/", primary: true },
        { label: "GitHub →", href: "https://github.com/echou0321/WattWise", primary: false }
      ]
    },
    {
      title: "Sublease UW",
      date: "Sep 2025 – Dec 2025",
      description: "Housing transfer platform for UW students to find, transfer, and take over leases safely. Features UW NetID authentication for verified student access, listing creation and management, advanced search and filtering, favorites system, interactive comments, and direct messaging between verified users.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Azure AD", "Vite"],
      links: [
        { label: "View Site →", href: "https://final-project-e2bucjbvdjg7dxaw.westus3-01.azurewebsites.net/", primary: true },
        { label: "GitHub →", href: "https://github.com/echou0321/Sublease-UW", primary: false }
      ]
    },
    {
      title: "Project Forage Midas",
      date: "Aug 2025 – Sep 2025",
      description: "Resilient payment pipeline backend that consumes transactions from Kafka, validates sender balances, enriches with external incentive calculations, and exposes a REST API for balance queries. Built with SQL database for financial data integrity and BigDecimal precision for monetary calculations.",
      tech: ["Spring Boot", "Apache Kafka", "Hibernate", "Java", "Docker"],
      links: [
        { label: "GitHub →", href: "https://github.com/echou0321/forage-midas", primary: false }
      ]
    },
    {
      title: "MyNBAList",
      date: "Mar 2026 – Jun 2026",
      description: "React and Firebase web app for browsing, rating, and personalizing NBA player lists with live database updates. Features player search and filtering, ratings system, trending and top players leaderboards, customizable user profiles with drag-and-drop Top 10 lists, and profile picture uploads.",
      tech: ["React", "Firebase", "Node.js", "JavaScript"],
      links: [
        { label: "View Site →", href: "https://mynbalist.web.app/home", primary: true },
        { label: "GitHub →", href: "https://github.com/echou0321/myNBAList", primary: false }
      ]
    }
  ]

  return (
    <section id="projects" className="projects fade-in">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              {project.date && <span className="project-date">{project.date}</span>}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-link ${link.primary ? 'project-link-website' : 'project-link-repo'}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
