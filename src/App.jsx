import './app.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import JournalEntry from './pages/journalentry/JournalEntry';
import Results from './pages/results/Results';


function App() {

    return (
        <>
            <Navbar />

            <Router>
                <Routes>
                    
                    <Route path='/' element={ <Home /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/register' element={ <Register /> } />
                    <Route path='/dashboard' element={ <Dashboard /> } />
                    <Route path='/:id' element={ <JournalEntry /> } />
                    <Route path='/new' element={ <JournalEntry /> } />
                    <Route path='/results/:id' element={ <Results /> } />
                    
                </Routes>
            </Router>
        </>
    )
    
}


export default App