import {Routes, Route} from 'react-router-dom';

import Layout from '../../pages/Layout/Layout';
import Home from '../../pages/Home/Home';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrPage from '../../pages/RegistrPage/RegistrPage';

import './App.css';


function App() {
    return (
       <Routes>
            <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path='api/login' element={<LoginPage></LoginPage>}></Route>
                <Route path='api/registr' element={<RegistrPage></RegistrPage>}></Route>
            </Route>    
       </Routes>
    );
}

export default App;
