import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { Img} from "./page/Img";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/img" element={<Img />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;