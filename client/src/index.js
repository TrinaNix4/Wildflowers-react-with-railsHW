import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import About from "./pages/About"
import Home from "./pages/Home"
import DataProvider from "./providers/DataProvider"
import Wildflowers from "./pages/Wildflowers"
import WildflowerShow from './pages/WildflowerShow';
import WildflowerForm from './pages/WildflowerForm'


const NotFound = ()=> {
  return <p>Path Not Found</p>
}


ReactDOM.render(
<DataProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wildflowers" element={<Wildflowers />} />
        <Route path="/wildflowers/new" element={<WildflowerForm />} />
        <Route path="/wildflowers/:id" element={<WildflowerShow />} />
        <Route path="/wildflowers/:id/edit" element={<WildflowerForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
</DataProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
