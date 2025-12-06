import { useState, useEffect } from 'react'
// import './App.css'

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
      <div className='card h-[19.7rem] bg-[#323a49] flex flex-col items-center justify-center mt-[7.5rem] w-[21.4rem] rounded'>

        {loading ? (
          <div className="loading text-[#cee3e9]">
            <p className='text-[#00FFA0]'>Thinking...</p>
            <p>"..."</p>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <p className='text-[#00FFA0] relative top-[1.58rem] text-[.64rem] tracking-[.23rem] text-center'>ADVICE #{adviceId}</p>
            <p className='text-[#cee3e9] text-[1.6rem] px-[2rem] text-center relative top-[.8rem]'>"{advice}"</p>
          </>
        )}
        
        <img src="./images/pattern-divider-mobile.svg" alt="pattern divider" className='relative top-[.3rem] ' />

        <div className='rounded-[50%] bg-[#00FFA0] relative top-[1.85rem] p-[1.25rem] flex'>
          <button type='button' className='bg-[url("./images/icon-dice.svg")] w-[1.5rem] h-[1.5rem] cursor-pointer bg-[#00FFA0] bg-contain bg-no-repeat border-none m-auto' onClick={fetchData} disabled={loading}></button>
        </div>

      </div>

      <footer className="attribution text-[11px] text-center text-[#cee3e9] relative bottom-0 mt-auto">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Ammiel Juan Latorre</a>.
      </footer>

    </main>
    
  )
}

export default App
