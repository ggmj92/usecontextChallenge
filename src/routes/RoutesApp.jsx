import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from '../themes/ThemeContext';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';
import Button from '../components/Button';
import { ThemeContext } from '../themes/ThemeContext'

const RoutesApp = () => {
    return (
        <>
            <ThemeProvider>
                <Router>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/my-job">My Job</Link>
                    </nav>
                    <Button />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/my-job" element={<MyJob />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default RoutesApp;