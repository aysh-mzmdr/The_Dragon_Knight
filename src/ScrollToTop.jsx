import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(){

    const location = useLocation()
    const path=location.state

    useEffect(() => {
        document.documentElement.scrollTo({
            top:0,
            left:0,
            behavior:"instant"
        })
    },[path])
}

export default ScrollToTop