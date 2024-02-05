import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation.component';
import ParticlesBg from 'particles-bg';
import Rank from './components/rank.component';
import { useState } from 'react';
import SignInForm from './components/signin/signin.component';
import RegisterForm from './components/signin/register.component';

function App() {
  const [input, setInput ] = useState('https://samples.clarifai.com/metro-north.jpg');
  const [imageURL, setImageURL] = useState('');
  const [box, setBox] = useState({});
  const [signIn, setSignIn] = useState(false);
  const [user, setUser] = useState({});

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
    <BrowserRouter>
    <Navigation signIn={signIn} setSignIn={setSignIn} setUser={setUser} />
    <Routes>
      <Route path='/' element={<RegisterForm
      user={user} setUser={setUser} signIn={signIn} setSignIn={setSignIn}
      />}></Route>

      <Route path='/signin' element={<SignInForm 
      user={user} setUser={setUser} signIn={signIn} setSignIn={setSignIn}
      />}></Route>

      <Route path='/faceID' element={<Rank 
      user={user} onInputChange={onInputChange} onSubmit={onSubmit} calculateFaceLocation={calculateFaceLocation} imageURL={imageURL} box={box} signIn={signIn} input={input}
      />}></Route>

    </Routes>
    </BrowserRouter>
   </>
   )
}

export default App;


