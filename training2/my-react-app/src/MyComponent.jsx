import { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const updateName = () => {
        setName("SpongeBob")
    }

    const [age, setAge] = useState(0);
    const incrementAge = () => {
        setAge(age+1);
    }

    const [isEmployed, setIsEmployed] = useState(false);
    const toggleIsEmployed = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name :{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age :{age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>IsEmployed :{isEmployed ? " Yes": " No"}</p>
            <button onClick={toggleIsEmployed}>Toggle Is Employed</button>
        </div>
    )
}

export default MyComponent;