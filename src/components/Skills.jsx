import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C/C++", "C#", "Swift", "Bash", "HTML/CSS", "SQL", "R"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["React", "Node.js", "Express", "Firebase", "MongoDB", "Spring Boot", "Kafka", "Hibernate", "Azure", "Bootstrap", "Git", "Figma", "JUnit", "MySQL", "DynamoDB", "Docker"]
    },
    {
      category: "Concepts",
      skills: ["REST APIs", "Cloud Deployment", "Data Structures & Algorithms", "UI/UX Design", "Agile", "Server-side Development", "Low-Level Design", "DB Integration", "Networking", "Software Design Principles", "SDLC"]
    }
  ]

  return (
    <section id="skills" className="skills fade-in">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.category}</h3>
            <div className="skill-items">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
