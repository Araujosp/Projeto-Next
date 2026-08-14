import Image from "next/image";
import styles from "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <main className="main">

        <div className="textServices">
          <h2>Cloud Computing</h2>

          <div className="subText">
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
          className="mulher"
          alt="Profissional utilizando serviços de computação em nuvem"
        />

      </main>
    </>
  );
}