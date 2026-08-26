export default function header(){
  return(
    <>
       <header className="header">
              <img src="/img/AWS.png" className="imgLogo" alt="AWS"/>
              <nav className="menu">
                <ul>
                  <li> <Link href = {"/sobre/empresa"}>Product</Link></li>
                  <li>Pricing</li>
                  <li><Link href = {"/"}>Página Inicial</Link></li>
                  <li><Link href = {"/sobre"}> Sobre AWS </Link> </li>
                  <li>Learn</li>
                </ul>
              </nav>
              <div className="botoes">
                <p className="btn2">Log In</p>
                <p className="btn">Start My Free Trial</p>
              </div>
            </header>
    </>
  )
}