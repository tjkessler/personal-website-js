import styles from "../assets/styles/Projects.module.css"

function Projects() {

    const projects = [
      { url: "https://www.uml.edu/engineering/research/engineering-solutions/student-research.aspx", text: "Project Starfish - A Smart, Cost-Effective and Non-Invasive Prosthetic Hand" },
    ]

    return (
        <>
          <h2>Projects</h2>
          <ul className={styles.pub_pres_ul}>
            {projects.map((item, index) => (
              <li key={index} className={styles.pub_pres_li}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a>
              </li>
            ))}
          </ul>
        </>
    )
}

export default Projects
