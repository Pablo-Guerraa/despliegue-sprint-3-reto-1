import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import '../style/_app.scss'


function App() {
  return (
    <div className="app">
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;