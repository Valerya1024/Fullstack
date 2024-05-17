function ButtonClick() {
    let count =0;
    // const handleclick = (name) => {
    //     if(count< 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     } else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    const handleclick = (e) => {
        console.log(e);
        e.target.textContent = "Ouch";
    }

    return(
        <>
            <button onDoubleClick={(e) => handleclick(e)}>Click me</button>
        </>
    
    );
}

export default ButtonClick;