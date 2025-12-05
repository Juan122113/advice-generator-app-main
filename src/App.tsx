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
    <main className="min-h-screen bg-[#1f2632] flex flex-col items-center relative">
      <div className='card h-[19.7rem] bg-[#323a49] flex flex-col items-center justify-center mt-[7.5rem] w-[21.4rem]'>

        {loading ? (
          <div className="loading text-[#cee3e9]">
            <p className='text-[#00FFA0]'>Thinking...</p>
            <p>"..."</p>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <p className='text-[#00FFA0]'>Advice #{adviceId}</p>
            <p className='text-[#cee3e9]'>"{advice}"</p>
          </>
        )}
        
        <img src="./images/pattern-divider-mobile.svg" alt="pattern divider" />

        <button type='button' className='bg-[url("./images/icon-dice.svg")] w-[1.5rem] h-[1.5rem] cursor-pointer' onClick={fetchData} disabled={loading}></button>

      </div>

      <div className="attribution text-[11px] text-center text-[#cee3e9] absolute bottom-0">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Ammiel Juan Latorre</a>.
      </div>

    </main>
    
  )
}

export default App
