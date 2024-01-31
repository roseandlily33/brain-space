
const FaceRecognition = ({imageURL, box}) => {
    console.log('Image URL Face Rec', imageURL);
    console.log('Box', box)
    
    return ( 
    <>
    {imageURL ? 
    <div className="middle" style={{width: 'auto', height: 'auto', }}>
        <img id="inputImage" src={imageURL} alt="moon"/>
        <div className="face-box" style={{left: box.leftCol, right:box.rightCol, bottom: box.bottomRow, top: box.topRow }}>

        </div>
    </div> 
     : 
     null}
    </>
    
    )
}
 
export default FaceRecognition;
