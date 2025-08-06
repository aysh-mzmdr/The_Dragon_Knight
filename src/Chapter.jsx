import { useState } from "react"
import style from "./Chapter.module.css"

function Chapter(props){

    const[size,setSize]=useState(18)
    const[backgroundcolor,setBackgroundcolor]=useState("#111")
    const[fontcolor,setFontcolor]=useState("white")
    const[bordercolor,setBordercolor]=useState("white")
    const[shadowcolor,setShadowcolor]=useState("white")

    return(
        <>
            <div className={style.head}>
                <h1 className={style.heading}>Chapter {props.chapterNo}:</h1>
                <h2 className={style.subheading}>{props.chapterName}</h2>
            </div>

            <div className={style.bookBackground}>
                <div style={{backgroundColor:`${backgroundcolor}`,border:`1px solid ${shadowcolor}`,boxShadow:`0px 0px 25px ${shadowcolor}`}} className={style.book}>

                    <div className={style.navbar}>
                        <div className={style.fontSizeAdjuster}>
                            <button className={style.size} onClick={() => setSize(15)} onFocus={(e)=> {e.target.style.border=`2px solid ${bordercolor}`;e.target.style.boxShadow=`0px 0px 10px ${bordercolor}`}} onBlur={(e)=> {e.target.style.border=`none`;e.target.style.boxShadow=`none`}}>A-</button>
                            <button className={style.size} onClick={() => setSize(18)} onFocus={(e)=> {e.target.style.border=`2px solid ${bordercolor}`;e.target.style.boxShadow=`0px 0px 10px ${bordercolor}`}} onBlur={(e)=> {e.target.style.border=`none`;e.target.style.boxShadow=`none`}}>A</button>
                            <button className={style.size} onClick={() => setSize(20)} onFocus={(e)=> {e.target.style.border=`2px solid ${bordercolor}`;e.target.style.boxShadow=`0px 0px 10px ${bordercolor}`}} onBlur={(e)=> {e.target.style.border=`none`;e.target.style.boxShadow=`none`}}>A+</button>
                        </div>
                        <div className={style.theme}>
                            <button style={{backgroundColor:"#111",color:"white"}} className={style.themeButton} onClick={() => {setBackgroundcolor("#111");setFontcolor("white");setBordercolor("white");setShadowcolor("white")}}>Dark</button>
                            <button style={{backgroundColor:"#f7e6e6",color:"#915757"}} className={style.themeButton} onClick={() => {setBackgroundcolor("#f7e6e6");setFontcolor("#915757");setBordercolor("#915757");setShadowcolor("#915757")}}>Read</button>
                            <button style={{backgroundColor:"white",color:"black"}} className={style.themeButton} onClick={() => {setBackgroundcolor("white");setFontcolor("black");setBordercolor("black");setShadowcolor("white")}}>Light</button>
                        </div>
                    </div>
                    <div style={{fontSize:`${size}px`,color:`${fontcolor}`,borderTop:`1px solid ${bordercolor}`}} className={style.readingArea}>
                        {props.chapter}
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <p>© 2025 The Dragon Knight. All Rights Reserved.</p>
                <p>A story by aysh_mzmdr</p>
            </div>
        </>
    )
}

export default Chapter