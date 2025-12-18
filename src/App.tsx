import { useState, useEffect } from 'react'

function App() {

  const [adviceId, setAdviceId] = useState();
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
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
          if (err) {
            setError(true);
          
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
      <div className='card h-[19.7rem] bg-[#323a49] flex flex-col items-center justify-center mt-[7.5rem] w-[21.4rem] rounded-[.5rem] relative max-w-[95%]'>

        {loading ? (
            <p className='text-[#cee3e9] text-[1.55rem] font-[800] text-center relative bottom-[.7rem]'>Thinking...</p>
            
          
        ) : error ? (
          <p className='text-[#cee3e9] text-[1.55rem] font-[800] text-center relative bottom-[.7rem] mx-[1rem]'>Sorry, I couldn’t come up with a good piece of advice. Please try again..
          </p>
        ) : (
          <>
            <p className='advice-id text-[#00FFA0] text-[.64rem] tracking-[.23rem] text-center font-[500] '>ADVICE #{adviceId}</p>
            <p className='advice text-[#cee3e9] text-[1.55rem]  text-center relative bottom-[15px] max-w-[90%] font-[800]'>"{advice}"</p>
          </>
        )}
        
        <img src="/images/pattern-divider-mobile.svg" alt="pattern divider" className='pattern-divider relative bottom-[30px] ' />

        <div onClick={fetchData} className='button-container rounded-[50%] bg-[#00FFA0] absolute p-[1.25rem] flex top-[283px] cursor-pointer '>
          <button type='button' className='bg-[url("/images/icon-dice.svg")] w-[1.5rem] h-[1.5rem] cursor-pointer bg-[#00FFA0] bg-contain bg-no-repeat border-none m-auto' disabled={loading} aria-label='Get new advice'></button>
        </div>

      </div>

      <footer className="attribution text-[0.688rem] text-center text-[#cee3e9] mt-auto pt-[3rem] ">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/Juan122113" target="_blank">Ammiel Juan Latorre</a>.
      </footer>

    </main>
    
  )
}

export default App
