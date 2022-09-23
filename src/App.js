import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Wrapper from './pages/Wrapper/Wrapper';
import Input from './pages/Input/Input';
import Update from './pages/Update/Update';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Home />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/Update/:id" element={<Update />} />

      </Route>
      <Route path="*" element={<h1>Page 404 Not Found</h1>} />
    </Routes>
  );



  // return (
  //   <Routes>
  //     <Route path="/" element={<Wrapper />}>
  //       <Route index element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/detail/:id" element={<Detail />} />
  //     </Route>
  //     <Route path="*" element={<h1>Page 404 Not Found</h1>} />
  //   </Routes>
  // );
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //   </Routes>
  // );
};

export default App;

