import FaceRecognition from "./faceRecognisiton.component";
import ImageLinkForm from "./imageLinkForm.component";

const Rank = (props) => {
    const {user, signIn} = props;
    const{ name, entries} = user;
    return (
       <>
        {signIn ? <div className="rank middle">
            <h2>{name}, your current rank is...</h2>
            <h2>#{entries}</h2>
        </div>
        : 
        <div className="rank middle">
            <h2>Sign in to see your current ranking</h2>
        </div>
        }
        <ImageLinkForm {...props}/>
        <FaceRecognition {...props}/>
       </>
      );
}
 
export default Rank;