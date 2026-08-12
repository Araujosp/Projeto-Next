import Image from "next/image";
import styles from "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <img src="/img/AWS.png" className={styles.imgLogo} alt="AWS"/>
        <nav className={styles.menu}>
          <ul>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Solutions</li>
            <li>Learn</li>
          </ul>
        </nav>
        <div className={styles.botoes}>
          <p className={styles.btn2}>Log In</p>
          <p className={styles.btn}>Start My Free Trial</p>
        </div>
      </header>

      <main className={styles.main}>

        <div className={styles.textServices}>
          <h2>Cloud Computing</h2>

          <div className={styles.subText}>
            <p>
              <strong>Seu futuro começa aqui.</strong>
              <br />
              Conheça as principais tecnologias de computação em nuvem.
            </p>

            <ul>
              <li>EC2</li>
              <li>Lambda</li>
              <li>Cloud Vision</li>
              <li>Cloud Config</li>
            </ul>
          </div>
        </div>

        <img
          src="/img/mulher.png"
          className={styles.mulher}
          alt="Profissional utilizando serviços de computação em nuvem"
        />

      </main>
    </>
  );
}