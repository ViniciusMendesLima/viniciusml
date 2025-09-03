import styles from "./styles/About.module.css";
import foto from "../assets/foto.png";
import { AboutInformation } from "../components/AboutInformation";
import { useEffect, useState } from "react";
const About = () => {
  const [showInfo, setshowInfo] = useState(false);

  const handleClick = () => {
    setshowInfo((prev) => !prev);
  };

  useEffect(() => {
    if (showInfo) {
      document.body.style.overflow = "hidden"; 
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showInfo]);
  return (
    <section id="About" className={`${styles.SectionAbout} Container`} >
      <img src={foto} alt="Foto" />
      <div className={styles.AboutResum}>
        <h2>Sobre</h2>
        <p>
          Sou Vinícius Mendes Lima, formado em Sistemas de Informação e em transição para a área de Desenvolvimento Web. Tenho experiência em atendimento, auditoria e suporte, onde aprendi a ouvir, resolver problemas e trabalhar em equipe. Hoje me dedico a criar sites e aplicações modernas com HTML, CSS, JavaScript, React e TypeScript, sempre buscando unir criatividade e lógica para entregar soluções que realmente fazem diferença.
        </p>
        <button className={styles.BtnOpenInfo} onClick={handleClick}>Saiba Mais</button>
      </div>
      {showInfo && (
        <div className={styles.BackBlack}>
            <button className={styles.BtnClouseInfo} onClick={handleClick}>
              <span className={styles.ClouseInfoX}></span>
            </button>
          <div className={styles.AboutInformation}>
            <AboutInformation />
          </div>
        </div>
      )}
    </section>
  );
};

export { About };
