

function CurrentCityDetails({forecast}){

    return(
        <>
        <div>
            <img src={forecast.src} alt={forecast.alt} />
            <p>{forecast.description}</p>
            <p>{forecast.details}</p>
        </div>
        </>
    )
}

export default CurrentCityDetails;