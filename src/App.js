import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [notification, setNotification] = useState('');
  const [buttonValues, setButtonValues] = useState([]);

  const handleCounter = (e) => {
    setCount(count + (Number(e.target.value) * 3));
    setButtonValues(buttonValues.concat(e.target.value * 3));
  }
  const handleSideCouner = (e) => {
    setCount(count + Number(e.target.value));
    setButtonValues(buttonValues.concat(e.target.value));
  }

  const undoCounter = (e) => {
    setButtonValues(buttonValues.slice(0, -1));
    setCount(count - Number(buttonValues[buttonValues.length - 1]));
  }

  const enabled = count

  useEffect(() => {
    if (count >= 101) {
      setNotification('Acabiliyorsun hadi yine iyisin :)')
    } else if (count < 101 && count >= 90) {
      setNotification('Umut var ama acamiyorsun hala!')
    } else if (count < 90 && count >= 60) {
      setNotification('Bu elin isi zor haci!')
    } else if (count < 60 && count > 20) {
      setNotification('Daha yolun basindasin, belki bir umut acarsin!')
    } else {
      setNotification('')
    }
  }, [count])

  const resetCount = () => {
    setCount(0)
    setButtonValues([])
  }

  console.log("button values", buttonValues)
  console.log("last element", Number(buttonValues[buttonValues.length - 1]))


  return (
    <div className="container">
      <div className="counter-box">
        <h1>101 Hesaplayici</h1>
        <p>Elinin Toplami:</p>
        <p>{count}</p>
        <p>{notification}</p>
      </div>
      <div className="pieces-box">
        <div className="pieces-box__heading">
          <h3>Orta gir</h3>
          <button disabled={!enabled} onClick={resetCount}>Sifirla</button>
          <button disabled={!enabled} onClick={undoCounter}>Geri Al</button>
        </div>
        <div className="pieces">
          <button value={1} onClick={handleCounter}>1</button>
          <button value={2} onClick={handleCounter}>2</button>
          <button value={3} onClick={handleCounter}>3</button>
          <button value={4} onClick={handleCounter}>4</button>
          <button value={5} onClick={handleCounter}>5</button>
          <button value={6} onClick={handleCounter}>6</button>
          <button value={7} onClick={handleCounter}>7</button>
          <button value={8} onClick={handleCounter}>8</button>
          <button value={9} onClick={handleCounter}>9</button>
          <button value={10} onClick={handleCounter}>10</button>
          <button value={11} onClick={handleCounter}>11</button>
          <button value={12} onClick={handleCounter}>12</button>
          <button value={13} onClick={handleCounter}>13</button>
        </div>
        <div className="pieces-box__heading">
          <h3>Yan gir</h3>
        </div>
        <div className="pieces">
          <button value={1} onClick={handleSideCouner}>1</button>
          <button value={2} onClick={handleSideCouner}>2</button>
          <button value={3} onClick={handleSideCouner}>3</button>
          <button value={4} onClick={handleSideCouner}>4</button>
          <button value={5} onClick={handleSideCouner}>5</button>
          <button value={6} onClick={handleSideCouner}>6</button>
          <button value={7} onClick={handleSideCouner}>7</button>
          <button value={8} onClick={handleSideCouner}>8</button>
          <button value={9} onClick={handleCounter}>9</button>
          <button value={10} onClick={handleSideCouner}>10</button>
          <button value={11} onClick={handleSideCouner}>11</button>
          <button value={12} onClick={handleSideCouner}>12</button>
          <button value={13} onClick={handleSideCouner}>13</button>
        </div>
      </div>

    </div>
  );
}

export default App;
