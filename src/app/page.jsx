import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <header className="header">
        <img src="/img/AWS.png" className="img-logo"/>
    <div>
      <ul>
        <li>Product</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li>Solutions</li>
        <li>Learn</li>
      </ul>
    </div>  
    <div className="botoes">
        <p className="btn2">log In</p>
        <p className="btn">Start My Free Trial</p>
    </div>
    </header>
   <main className="main">
    
   </main>
    
    </>
  );
}
