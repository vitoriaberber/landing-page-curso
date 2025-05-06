import React, {useState, useEffect} from "react";
import Links from "./Links";
import styles from "./Header.module.css";
import { DiJavascript1 } from "react-icons/di";
import { IoMdMenu } from "react-icons/io";

const Header = (props) => {
  const [aberto, setAberto] = useState(false);
  const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTamanhoTela(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (tamanhoTela > 590) {
      setAberto(true);
    } else {
      setAberto(false); 
    }
  }, [tamanhoTela]);

  return (
    <header className={styles.header}>
      <DiJavascript1 className={styles.icon} />
      <IoMdMenu
        className={styles.iconMenu}
        onClick={() => setAberto(!aberto)}
      />
      {aberto && (
        <nav>
          <ul className={styles.lista}>
            <li className={styles.item}>
              <Links to="/" texto="Home" />
            </li>
            <li className={styles.item}>
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  props.aoClicarEmSobre();
                }}
              >
                Sobre
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="#depoimentos"
                onClick={(e) => {
                  e.preventDefault();
                  props.aoClicarEmDepoimentos();
                }}
              >
                Depoimentos
              </a>
            </li>
            <li className={`${styles.item} ${styles[props.btn]} `}>
              <Links to="/inscrever" texto="Inscreva-se grátis" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
