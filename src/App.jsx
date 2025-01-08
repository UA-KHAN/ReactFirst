import './App.css'
import Navbar from '../components/Navbar'
import TextForm from '../components/TextForm'
import About from '../components/About'
import { Route, Routes } from 'react-router-dom'



function App() {
  return(
    <>
      <Navbar title="TextUtils" aboutText="About"/>

      {/* <div className="container my-3"> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter Your Text below To Analyze" />} />
        </Routes>
      {/* </div>   */}
  </>
  )                       
}

export default App

