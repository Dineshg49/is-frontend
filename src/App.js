import "./App.css"

import Footer from "./components/Footer"
import Home from "./pages/Home"
import Catalogue from "./pages/Catalogue"
import Patent from "./pages/Patent"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/Searchbar';
import Navbar1 from "./components/Navbar"
import Navbar2 from "./components/Navbar2"
import Patents from "./pages/Patents"
import Publications from "./pages/Publications"
import Randomtry from "./pages/use"
import LoginPage from "./Chatbot/Login"
import HomePage from "./Chatbot/Home"
import Footbar from "./Footer/Footbar"


function App() {
    return (

        <div className="App" style={{ minWidth: "800px" }}>
            <Router>

                <Navbar1/>
                <Navbar2/> 
                 {/* <Footer/> */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/brief" exact component={Catalogue} />
                    <Route path="/patent/:id" exact component={Patent} />
                    <Route path="/canvas" exact component={Patents} />
                    <Route path="/publications" exact component={Publications} />
                    <Route path="/try" exact component={Randomtry} />
                    <Route path="/chat" exact component={LoginPage} />
                    <Route path="/chathome" exact component={HomePage} />

                    <h1>asDada</h1>
                </Switch>

                <Footbar/>

            </Router>

        </div>



    );
}
export default App;