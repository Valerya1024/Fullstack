import { useEffect, useState } from "react";

function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    function changeColor() {
        setColor(c=> c === "green" ? "red": "green")
    }

    function addCount() {
        setCount(c => c+1);
    }

    function subCount() {
        setCount(c => c-1);
    }

    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // })

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count])

    // useEffect(() => {
    //     document.title = `My counter`
    // }, [])

    return ( <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subCount}>Subtract</button><br/>
    <button onClick={changeColor}> Change Color</button>
    </>)


}

export default UseEffectDemo;