import { useState, useEffect, useRef } from 'react'

function App() {

  const [adviceId, setAdviceId] = useState();
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const loadingRef = useRef(null);
  
    const fetchData = async () => {
      try {
        setLoading(true);
        handleFadeIn();
        setError(false);
        
        const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const dataJson = await res.json();

        // micro-delay: at least 200ms
        await new Promise(resolve => setTimeout(resolve, 200));

        setAdvice(dataJson.slip.advice);
        setAdviceId(dataJson.slip.id);
      } catch (err) {
          console.error(err);    
          setError(true);
        } finally {
          setLoading(false);
      }
    };

  const handleFadeIn = () => {
    // if (!loadingRef.current) return;
    
      // loadingRef.current.style.opacity = 0;
    
  }

  const HandleClick = () => {
    fetchData();
    handleFadeIn();
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // setVisible(false);
          //  new Promise(resolve => setTimeout(resolve, 50));
    setVisible(true);
  }, [advice]);

  return (
    <div className="container min-h-screen bg-[#1f2632] flex flex-col items-center relative">
      <main className='card h-[19.7rem] bg-[#323a49] flex flex-col items-center justify-center mt-[7.5rem] w-[21.4rem] rounded-[.5rem] relative max-w-[95%]'>

        {loading ? (
            <p ref={loadingRef} className='loading text-[#cee3e9] text-[1.55rem] font-[800] text-center relative bottom-[.7rem] opacity-100 transition-opacity'>Thinking...</p>
            
          
        ) : error ? (
          <p className='text-[#cee3e9] text-[1.55rem] font-[800] text-center relative bottom-[.7rem] mx-[1rem]'>Sorry, I couldn’t come up with a good piece of advice. Please try again...
          </p>
        ) : (
          <>
            <p className='advice-id text-[#00FFA0] text-[.64rem] tracking-[.23rem] text-center font-[500] '>ADVICE #{adviceId}</p>
            <p className={`advice text-[#cee3e9] text-[1.55rem]  text-center relative bottom-[15px] max-w-[90%] font-[800] ${!visible ? 'opacity-0 transition-opacity duration-200' : 'opacity-100'}`}>"{advice}"</p>
          </>
        )}
        
        <img src="/images/pattern-divider-mobile.svg" alt="pattern divider" className='pattern-divider relative bottom-[30px] ' />

        {/* <div onClick={!loading ? fetchData : undefined} className={`button-container rounded-[50%] bg-[#00FFA0] absolute p-[1.25rem] flex top-[283px] ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_1.8rem_0.001rem_#37f1ad] hover:bg-[#25ffaf] cursor-pointer'}`}> */}
          <button onClick={!loading ? HandleClick : undefined} type='button' className={`${loading ? 'cursor-not-allowed' : 'cursor-pointer '}`} disabled={loading} aria-label='Get new advice'></button>
        {/* </div> */}

      </main>

      <footer className="attribution text-[0.688rem] text-center text-[#cee3e9] mt-auto pt-[3rem] ">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/Juan122113" target="_blank">Ammiel Juan Latorre</a>.
      </footer>

    </div>
    
  )
}

export default App
