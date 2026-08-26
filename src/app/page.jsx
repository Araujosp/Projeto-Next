import Image from "next/image";
import styles from "./globals.css";
import Link from "next/link";
import { resolve } from "styled-jsx/css";
import BannerCta from "@/components/bannerCTA";




const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  
  await sleep(2000);
  /* throw new Error("Erro de teste!");*/
  

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
        <BannerCta/>
    </>
  );
}