import Styles from "./styles/Skills.module.css";
const Skills = () => {
  return (
    <section id="Skills">
      <h2>Tecnologias</h2>
      <div className={`${Styles.Container} Container`}>
        <div className={Styles.Skill}>
          <div>
            <i className="devicon-html5-plain"></i>
          </div>
          <p>HTML5</p>
        </div>

        <div className={Styles.Skill}>
          <div>
            <i className="devicon-css3-plain"></i>
          </div>
          <p>CSS3</p>
        </div>

        <div className={Styles.Skill}>
          <div>
            <i className="devicon devicon-javascript-plain"></i>
          </div>
          <p>JavaScript</p>
        </div>

        <div className={Styles.Skill}>
          <div>
            <i className="devicon devicon-react-original"></i>
          </div>
          <p>React</p>
        </div>

        <div className={Styles.Skill}>
          <div>
            <i className="devicon-typescript-plain"></i>
          </div>
          <p>TypeScript</p>
        </div>

        <div className={Styles.Skill}>
          <div>
            <i className="devicon-redux-original"></i>
          </div>
          <p>Redux</p>
        </div>

        <div className={Styles.Skill}>
          <div>
            <i className="devicon-jest-plain"></i>
          </div>
          <p>Jest</p>
        </div>

        <div className={Styles.Skill}>
          <div>
            <i className="devicon devicon-github-original"></i>
          </div>
          <p>GitHub</p>
        </div>

        <div className={Styles.Skill}>
          <div>
            <i className="devicon devicon-git-plain"></i>
          </div>
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export { Skills };
