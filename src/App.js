import './App.css';
import Navigation from './components/navigation.component';
import ImageLinkForm from './components/imageLinkForm.component';
import FaceRecognition from './components/faceRecognisiton.component';
import ParticlesBg from 'particles-bg';
import Rank from './components/rank.component';
import { useState } from 'react';

function App() {
  const [input, setInput ] = useState('https://samples.clarifai.com/metro-north.jpg');
  const [imageURL, setImageURL] = useState('');
  const [box, setBox] = useState({})

  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onSubmit = () => {
    setImageURL(input);
  }
  const calculateFaceLocation = (data) => {
    //console.log('calc data', data)
    setBox(data)
    console.log('Box', box)
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log('W&H', width, height)
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
        <FaceRecognition imageURL={imageURL} />
      </header>
    </div>
    </>
  );
}

export default App;
