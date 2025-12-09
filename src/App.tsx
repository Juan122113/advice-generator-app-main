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
    <main className="min-h-screen bg-[#1f2632] flex flex-col items-center relative lg:justify-center">
      <div className='card h-[19.7rem] bg-[#323a49] flex flex-col items-center justify-center mt-[7.5rem] w-[21.4rem] rounded relative max-w-[95%] lg:mt-[200px] md:mt-15rem md:bg-red-500 lg:bg-red-500'>

        {loading ? (
          // <div className="text-[#cee3e9] text-center ">
            <p className='text-[#cee3e9] text-[1.55rem] font-[800] text.center'>Thinking...</p>
            
          
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <p className='advice-id text-[#00FFA0] text-[.64rem] tracking-[.23rem] text-center font-[500] lg:mt-[2rem]'>ADVICE #{adviceId}</p>
            <p className='advice text-[#cee3e9] text-[1.55rem]  text-center relative bottom-[10px] max-w-[90%] font-[800]'>"{advice}"</p>
          </>
        )}
        
        <img src="/images/pattern-divider-mobile.svg" alt="pattern divider" className='pattern-divider relative bottom-[15px] ' />

        <div onClick={fetchData} className='button-container rounded-[50%] bg-[#00FFA0] absolute p-[1.25rem] flex top-[283px] cursor-pointer '>
          <button type='button' className='bg-[url("/images/icon-dice.svg")] w-[1.5rem] h-[1.5rem] cursor-pointer bg-[#00FFA0] bg-contain bg-no-repeat border-none m-auto' disabled={loading}></button>
        </div>

      </div>

      <footer className="attribution text-[0.688rem] text-center text-[#cee3e9] mt-auto pt-[3rem] ">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Ammiel Juan Latorre</a>.
      </footer>

    </main>
    
  )
}

export default App
