import { useNavigate } from "react-router-dom"
import style from "./App.module.css"

function Home() {
  
    const navigate=useNavigate()

  return (
    <>
      <div className={style.head}>
        <h1>The Dragon Knight</h1>
        <h3>The Warrior with a Flaming Heart</h3>
      </div>
      
      <div className={style.summary}>
        <div className={style.separator1}><p></p></div>
        <h2>Summary</h2>
        <div className={style.summaryBox}>
          <p>The story of a warrior, who has the ability to transform into a ferocious dragon at will. Join him in his journey full of adrenaline battles and medieval fort seiges, and confrontation with various mythological creatures and blessed individuals.</p>
        </div>
        <div className={style.separator2}><p></p></div>
      </div>

      <div className={style.chapters}>
        <h2>Chapters</h2>
        <div className={style.chaptersBox}>
          <button className={style.chapter} onClick={()=> navigate("/chapter1",{state:{path:"1"}})}>Chapter 1: Vritrahantas</button>
        </div>
      </div>

      <div className={style.footer}>
        <p>© 2025 The Dragon Knight. All Rights Reserved.</p>
        <p>A story by aysh_mzmdr</p>
      </div>
    </>
  )
}

export default Home
