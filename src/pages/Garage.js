function Garage() {
    const cars = ['benz', 'bmw', 'ferrari']

    return(
        <>
        <h1>Garage</h1>
        {cars.length > 0 &&
            <h2>
                We have {cars.length} cars in our garage.
            </h2>
        }
        <ul>
            {cars.map((car, index) => <Listcars key={index} car={car} />)}
        </ul>
        </>
    )
}

function Listcars(props) {
    return (
        <>
        <h2> i have a {props.car}</h2>
        </>
    )
}

export default Garage;