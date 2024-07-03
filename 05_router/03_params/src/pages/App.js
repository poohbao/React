import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../layouts/layout';
import Main from './pages/Main';
import About from './pages/About'
import Menu from './pages/Menu';
import MenuDetail from './pages/MenuDetails';
import MenuSearchResult from './pages/MenuSearchResult';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Main/>}/>
      <Route path='main' element={<Main/>}/>
      <Route path='about' element={<About/>}/>
      {/*<Route path='menu' element={<Menu/>}/> */}    
        <Route Path='menu'>
          <Route index element={<Menu/>}/>
          <Route path=':menuCode' element={<MenuDetail/>}/>
          <Route path='search' element={<MenuSearchResult/>}/>
        </Route>
      </Route>
    </Routes> 
  </BrowserRouter>   
    
    
    
  )
}
