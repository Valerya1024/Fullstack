import { useEffect, useRef } from "react";

function UseRefDemo() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    useEffect(()=> {
        console.log("Component rendered")
    })

    function handleClick1() {
        ref1.current.focus();
        ref1.current.style.backgroundColor = "yellow";
        ref2.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "";
        ref4.current.style.backgroundColor = "";
    }

    function handleClick2() {
        ref2.current.focus();
        ref1.current.style.backgroundColor = "";
        ref2.current.style.backgroundColor = "yellow";
        ref3.current.style.backgroundColor = "";
        ref4.current.style.backgroundColor = "";
    }
    function handleClick3() {
        ref3.current.focus();
        ref1.current.style.backgroundColor = "";
        ref2.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "yellow";
        ref4.current.style.backgroundColor = "";
    }
    function handleClick4() {
        ref4.current.focus();
        ref1.current.style.backgroundColor = "";
        ref2.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "";
        ref4.current.style.backgroundColor = "yellow";
    }

    return (<>
        <button onClick={handleClick1}>Click me 1!</button>
        <input ref={ref1} /> <br/>

        <button onClick={handleClick2}>Click me 2!</button>
        <input ref={ref2} /> <br/>

        <button onClick={handleClick3}>Click me 3!</button>
        <input ref={ref3} /> <br/>

        <button onClick={handleClick4}>Click me 4!</button>
        <input ref={ref4} /> <br/>
    </>)
}

export default UseRefDemo;