import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "WattWise",
      description: "Energy efficiency web app empowering Washington homeowners to understand utility usage and savings. Features interactive quiz, personalized recommendations with estimated annual savings, and actionable checklist with progress tracking.",
      tech: ["React", "Firebase", "Firestore", "Vite", "React Router"],
      website: "https://wattwise-cd2b2.web.app/",
      repo: "https://github.com/echou0321/WattWise"
    },
    {
      title: "Sublease UW",
      description: "Housing transfer platform for UW students to find, transfer, and take over leases safely. Features UW NetID authentication for verified student access, listing creation and management, advanced search and filtering, favorites system, interactive comments, and direct messaging between verified users.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Azure AD", "Vite"],
      website: "https://final-project-e2bucjbvdjg7dxaw.westus3-01.azurewebsites.net/",
      repo: "https://github.com/echou0321/Sublease-UW"
    },
    {
      title: "Project Forage Midas",
      description: "Resilient payment pipeline backend that consumes transactions from Kafka, validates sender balances, enriches with external incentive calculations, and exposes a REST API for balance queries. Built with SQL database for financial data integrity and BigDecimal precision for monetary calculations.",
      tech: ["Spring Boot", "Apache Kafka", "Hibernate", "Java", "Docker"],
      website: null,
      repo: "https://github.com/echou0321/forage-midas"
    },
    {
      title: "MyNBAList",
      description: "React and Firebase web app for browsing, rating, and personalizing NBA player lists with live database updates. Features player search and filtering, ratings system, trending and top players leaderboards, customizable user profiles with drag-and-drop Top 10 lists, and profile picture uploads.",
      tech: ["React", "Firebase", "Node.js", "JavaScript"],
      website: "https://mynbalist.web.app/home",
      repo: "https://github.com/echou0321/myNBAList"
    }
  ]

  return (
    <section id="projects" className="projects fade-in">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link project-link-website">
                  View Site →
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link project-link-repo">
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
