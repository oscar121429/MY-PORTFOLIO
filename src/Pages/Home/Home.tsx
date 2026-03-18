import { About } from "../../components/About/About"
import { Contact } from "../../components/Contact/Contact"
import { Experience } from "../../components/Experience/Experience"
import { Footer } from "../../components/Footer/Footer"
import { Hero } from "../../components/Hero/Hero"
import { Navbar } from "../../components/Navbar/Navbar"
import { Projects } from "../../components/Projects/Projects"
import { Skill } from "../../components/Skill/Skill"


export const Home = () => {
  return (
   <>
   <div className="layout">
     <header>
      <Navbar />
     </header>
     <main>
       <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skill />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
     </main>
     <footer>
      <Footer/>
     </footer>
   </div>
   </>
  )
}
