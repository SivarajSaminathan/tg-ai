import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { Career } from "./page/Career";
import { Img } from "./page/Img";
import { Vid } from "./page/Vid";
import { Txt } from "./page/Txt";
import { Aud } from "./page/Aud";
import { Sen } from "./page/Sen";
import { Pro } from "./page/Pro";
import { Imgsg } from "./page/Imgsg";
import { Lid } from "./page/Lid";
import { Cont } from "./page/Cont";
import { ResumeUp } from "./page/ResumeUp";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/img" element={<Img />} />
          <Route path="/vid" element={<Vid />} />
          <Route path="/text" element={<Txt />} />
          <Route path="/aud" element={<Aud />} />   
          <Route path="/sen" element={<Sen />} />
          <Route path="/conmon" element={<Cont />} />
          <Route path="/procat" element={<Pro />} />
          <Route path="/imgseg" element={<Imgsg />} />
          <Route path="/lidanno" element={<Lid />} />
          <Route path="/career" element={<Career />} />
          <Route path="/resume" element={<ResumeUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;