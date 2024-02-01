import "./DestinationStyle.css"
function DestinationDynamic(props)
{
    return(
        <>
             <div className={props.className}>
                <div className='dest-text'>
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
                <div className='dest-image'>
                    <img src={props.image1}></img>
                    <img src={props.image2}></img>
                </div>
            </div>
        </>
    )
}
export default DestinationDynamic