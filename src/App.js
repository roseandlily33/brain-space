import './App.css';
import Navigation from './components/navigation.component';
import Logo from './components/logo.component';
import ImageLinkForm from './components/imageLinkForm.component';
import FaceRecognition from './components/faceRecognisiton.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <FaceRecognition />
      </header>
    </div>
  );
}

export default App;
