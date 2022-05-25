import './App.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import MainScreen from '../Main-screen/MainScreen';
import Description from '../Description/Description';
import Triggers from '../Triggers/Triggers';
import Review from '../Review/Review';
import Design from '../Design/Design';
import TextBlock from '../TextBlock/TextBlock';
import Portfolio from '../Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      {/* <Preloader /> */}
      <Header />
      <main className='content'>
        <MainScreen />
        <Description />
        <Triggers />
        <Review />
        <Design />
        <TextBlock />
        <Portfolio />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
