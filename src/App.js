import './App.css';
import Navigation from './components/navigation.component';
import ImageLinkForm from './components/imageLinkForm.component';
import FaceRecognition from './components/faceRecognisiton.component';
import ParticlesBg from 'particles-bg';
import Rank from './components/rank.component';
import { useState, useEffect } from 'react';

function App() {
  const [input, setInput ] = useState('https://samples.clarifai.com/metro-north.jpg');
  const [imageURL, setImageURL] = useState('');
  const [box, setBox] = useState({})

  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onSubmit = () => {
    console.log('Setting image url')
    setImageURL(input);
    
  }
 const calculateFaceLocation = (data) => {
    const clarifiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    setBox({
      leftCol: clarifiFace.left_col * width,
      topRow: clarifiFace.top_row * height,
      rightCol: width - (clarifiFace.right_col * width),
      bottomRow: height - (clarifiFace.bottom_row * height)
    })
  }

  return (
    <>
    <ParticlesBg type="polygon" bg={true} />
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Rank />
        <ImageLinkForm 
        input={input}
         onInputChange={onInputChange} 
         onSubmit={onSubmit}
         calculateFaceLocation={calculateFaceLocation}/>
        <FaceRecognition box={box} imageURL={imageURL} />
      </header>
    </div>
    </>
  );
}

export default App;
