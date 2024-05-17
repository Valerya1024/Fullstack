import { useState } from "react";

function UpdateListObjects() {
    const [cars, setCars]= useState([]);
    const [carYear, setCarYear]= useState(new Date().getFullYear());
    const [carMake, setCarMake]= useState("");
    const [carModel,setcarModel]= useState("");

    function handleYearChange(event){setCarYear(event.target.value);}
    function handleMakeChange(event){setCarMake(event.target.value);}
    function handleModelChange(event){setcarModel(event.target.value);}

    function handleAddcar(){
        const newcar = {year:carYear,
            make: carMake,
            model: carModel};
        
        console.log(cars);
        setCars(c =>[...c, newcar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setcarModel("");

    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }

    return(<div>
        <h2>List of Car objects</h2>
        <ul>
            {cars.map((car, i) => 
                <li key={i} onClick={() => handleRemoveCar(i)} >
                    {car.year} {car.make} {car.model}
                </li>
            )}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} /><br/>
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br/>
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br/>
        
        <button onClick={handleAddcar}>Add Car</button>
        
        </div>);
}

export default UpdateListObjects;