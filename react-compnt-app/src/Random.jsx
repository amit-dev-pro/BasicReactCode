function Random() {
    let number=Math.random()*100;
    return <h2 style={{'background-color':'brown'}}>Random number is: {Math.round(number)}</h2>
}

export default Random;