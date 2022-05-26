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
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


function App() {

  const [positionY, setPositionY] = useState(0)

  window.addEventListener('scroll', function(evt) {
    setPositionY(this.scrollY)
  })

  return (
    <div className="App">
      {/* <Preloader /> */}
      <Header />
      <main className='content'>
        <MainScreen positionY={positionY}/>
        <Description positionY={positionY}/>
        <Triggers positionY={positionY}/>
        <Review positionY={positionY}/>
        <Design positionY={positionY}/>
        <TextBlock positionY={positionY}/>
        <Portfolio positionY={positionY}/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
