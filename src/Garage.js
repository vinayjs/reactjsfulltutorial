function Garage(props) {
    const cars = props.cars;
    
    return(
        <>
        <h1>Garage</h1>
        {cars.length > 0 &&
            <h2>
                We have {cars.length} cars in our garage.
            </h2>
        }
        </>
    )
}

export default Garage;