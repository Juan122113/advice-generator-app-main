import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [adviceId, setAdviceId] = useState();
  const [advice, setAdvice] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch("https://api.adviceslip.com/advice")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     setLoading(false);
    //   });
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.adviceslip.com/advice");

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setData(data);
        console.log(data);
        console.log(data.advice);
        console.log(data[advice]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>

        <p>Advice {adviceId}</p>

        <p>"{advice}"</p>

        <img src="./images/pattern-divider-mobile.svg" alt="pattern divider" />

        <img src="./images/icon-dice.svg" alt="icon dice" />

        <div className="attribution text-[11px] text-center">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name  Here</a>.
        </div>
      </div>
    </div>
    
  )
}

export default App
