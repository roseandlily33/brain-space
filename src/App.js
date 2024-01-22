import './App.css';
import Navigation from './components/navigation.component';
import Logo from './components/logo.component';
import ImageLinkForm from './components/imageLinkForm.component';
import FaceRecognition from './components/faceRecognisiton.component';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <>
    <ParticlesBg type="polygon" bg={true} />
    <div className="App">
     
      <header className="App-header">
        <Navigation />

        <ImageLinkForm />
        <FaceRecognition />
      </header>
    </div>
    </>
  );
}

export default App;
