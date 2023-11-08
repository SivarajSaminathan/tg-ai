import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { Career } from "./page/Career";
import { Img } from "./page/Img";
import { Vid } from "./page/Vid";
import { Txt } from "./page/Txt";
import { Aud } from "./page/Aud";



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
          <Route path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;