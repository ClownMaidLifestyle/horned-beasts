import './App.css';
import Header from './header.js'
import Main from './main.js' 
import Footer from './footer.js'
import Beast from './beast.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Beast title="The Rhino Beetle" imageUrl="images/Beetle.jpg" description="These insects use their horns to fight rivals and display their prowess to mates"/>
      <Beast title="The Elk" imageUrl="images/Elk.jpg" description="The majestic stag's antlers are a kind of horn that cna grow up to 9kg in weight each"/> 
    </div>
  );
}

export default App;
