'use client'
import Landing from "./components/Landing/landing"
import Portfolio from "./components/Portfolio/portfolio-page"
import Second from "./components/Second/second"
import Third from "./components/Third/third"

export default function Page() {

  return(
    <>
    <div className="First-page" >
      <Landing/>
    </div>

    <div className="Second-page" >
      <Second/>
    </div>

    <div className="Third-page" >
      <Third/>
    </div>
    
      <div className="portfolio-page" >
      <Portfolio />
      </div>
    </>
    
  )
}
