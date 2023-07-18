import './App.css';
import Header from './header.js'
import Main from './main.js' 
import Footer from './footer.js'
import Beast from './beast.js'
import Beetle from './images/Beetle.jpg'
import Elf from './images/Elk.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Beast title="The Rhino Beetle" imageUrl={Beetle} description="These insects use their horns to fight rivals and display their prowess to mates"/>
      <Beast title="The Elk" imageUrl={Elf} description="The majestic stag's antlers are a kind of horn that can grow up to 9kg in weight each"/> 
    </div>
  );
}

export default App;
