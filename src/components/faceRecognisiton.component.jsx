
const FaceRecognition = ({imageURL}) => {
    console.log('Image URL Face Rec', imageURL)
    
    return ( 
    <>
    {imageURL ? 
    <div className="middle" style={{width: 'auto', height: 'auto', }}>
        <img id="inputImage" src={imageURL} alt="moon"/>
    </div> 
     : 
     null}
    </>
    
    )
}
 
export default FaceRecognition;
