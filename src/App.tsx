import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [adviceId, setAdviceId] = useState();
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const dataJson = await res.json()

        setAdvice(dataJson.slip.advice);
        setAdviceId(dataJson.slip.id);
      } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Unknown error");
          }
      } finally {
          setLoading(false);
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="h-[100vh]">
      <div className='card m-auto h-[7rem] bg-blue-900'>

        {loading ? (
          <div className="text-white">
            <p>Thinking...</p>
            <p>"..."</p>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <p className='text-green-300'>Advice #{adviceId}</p>
            <p className='text-white'>"{advice}"</p>
          </>
        )}
        
        <img src="./images/pattern-divider-mobile.svg" alt="pattern divider" />

        <button type='button' className='bg-[url("./images/icon-dice.svg")] w-[1.5rem] h-[1.5rem] cursor-pointer' onClick={fetchData} disabled={loading}></button>

      </div>

      <div className="attribution text-[11px] text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Ammiel Juan Latorre</a>.
      </div>

    </main>
    
  )
}

export default App
