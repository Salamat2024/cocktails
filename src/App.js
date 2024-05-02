
import { useState } from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Details from './pages/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import Modal from './components/Modal';
import Card from './components/Card';
import Ingredients from './components/Ingredients';



function App() {
  const [detail, setDetail] = useState({})
  const [isToken, setIsToken] = useState({})
  const [isDark,setIsDark]=useState(false)
  

  if (isToken.token) {
    return (
      <>
        {<BrowserRouter>
          <Header setIsDark={setIsDark} />
          <Routes>
            <Route path='/' element={<Main setDetail={setDetail} isDark={isDark} />} />
            <Route path='/details' element={<Details detail={detail} />}
            />
            <Route path='/recipe' element={<Recipe detail={detail} />}
            />
            <Route path='/ingredients'element={<Ingredients/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
        }

      </>
    );
  } else {
    return (
      <>
        <Modal setIsToken={setIsToken} />
      </>
    )
  }


}

export default App;
