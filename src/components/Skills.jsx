
function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C/C++", "C#", "SwiftUI/UIKit", "HTML/CSS", "SQL"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["React", "React Native", "Node.js", "Express", "LangChain", "OpenAI API", "MongoDB", "Spring Boot", "Kafka", "AWS", "Azure", "Firebase", "Docker", "Git", "Figma"]
    },
    {
      category: "Concepts",
      skills: ["Agentic AI Frameworks", "REST APIs", "LLM Integration", "Cloud Deployment", "UI/UX Design", "Data Structures & Algorithms", "Agile", "Software Design Principles"]
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
