import './App.css';
import MenuBar from './components/menu/menu'
import {onScroll} from "./utils/windowProps";
import store from "./store/store";
import {changeActiveSection} from "./store/sectionStore";

function App() {
    return (
        <MenuBar></MenuBar>
    );
}

window.onscroll = onScroll(
    store,
    changeActiveSection
)

export default App;
