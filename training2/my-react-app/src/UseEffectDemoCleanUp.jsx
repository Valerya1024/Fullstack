import { useEffect, useState } from "react";

function UseEffectDemoCleanUp() {
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
       window.addEventListener("resize", handleResize);
       console.log("resize listener added")

       return () => {
        window.removeEventListener("resize", handleResize);
        console.log("resize listener removed")
       }
    }, [])

    useEffect(()=> {
        document.title = `size: ${width}x${height}`
    }, [width, height])

    return ( <>
    <p>Window width: {width}</p>
    <p>Window height: {height}</p>
    </>)


}

export default UseEffectDemoCleanUp;