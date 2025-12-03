import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {

  const [adviceId, setAdviceId] = useState();
  const [advice, setAdvice] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false);

  // let trigger = false;

  const handleClick = useCallback(() => {
    console.log(advice);
    console.log(data);
    // setAdvice(advice);
    // setAdvice(data.slip.advice);
    // setAdviceId(data.slip.id);
    // setAdvice(dataJson.slip.advice);
    // console.log(advice);
    setTrigger(true);
    console.log(trigger);
  }, [trigger]);

  console.log(trigger);

  const fetchData = useCallback(async () => {
        const res = await fetch("https://api.adviceslip.com/advice");

        // if (!res.ok) {
        //   throw new Error("Network response was not ok");
        // }

        // console.log(res);
        // console.log(res.json());

        const dataJson = await res.json();
        console.log(dataJson);
        // console.log(data.advice);
        // console.log(data[advice]);
        // setData(dataJson.slip.advice);
        // setData(dataJson);
        console.log(data);
        setAdvice(dataJson.slip.advice);
        // setAdvice(dataJson.slip.advice);
        // console.log(data);
        setAdviceId(dataJson.slip.id);
        // console.log(data);
        // console.log(data.slip.id);
        // console.log(data["id"]);
        // console.log(data.slip.advice);
        // console.log(data[advice]);
      // } catch (err) {
      //   // setError(err);
      // } finally {
      //   setLoading(false);
      // }
    }, [trigger]);

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
    // const fetchData = async () => {
    //   try {
    //     const res = await fetch("https://api.adviceslip.com/advice");

    //     if (!res.ok) {
    //       throw new Error("Network response was not ok");
    //     }

    //     // console.log(res);
    //     // console.log(res.json());

    //     const dataJson = await res.json();
    //     console.log(dataJson);
    //     // console.log(data.advice);
    //     // console.log(data[advice]);
    //     setData(dataJson);
    //     console.log(data);
    //     setAdvice(data.slip.advice);
    //     // setAdvice(dataJson.slip.advice);
    //     console.log(data);
    //     // setAdviceId(data.slip.id);
    //     // console.log(data);
    //     // console.log(data.slip.id);
    //     // console.log(data["id"]);
    //     // console.log(data.slip.advice);
    //     // console.log(data[advice]);
    //   } catch (err) {
    //     // setError(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // const handleClick = () => {
    // setAdvice(data.slip.advice);
    // }

  //   const handleClick = useCallback(() => {
  //   console.log(advice);
    console.log(data);
  //   // setAdvice(advice);
  //   // setAdvice(data.slip.advice);
  //   console.log(advice);
  // }, [])

    fetchData();
  }, [fetchData]);

  // function addingAdvice() {
  //   setAdvice(data.slip.advice);
  // }

  // addingAdvice();

  // const handleClick = () => {
  //   setAdvice(data.slip.advice);
  // }

  //   const handleClick = useCallback(() => {
  //   console.log(advice);
  //   console.log(data);
  //   // setAdvice(advice);
  //   setAdvice(data.slip.advice);
  //   console.log(advice);
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  if (trigger) {
    setTrigger(false);
  }

  // const handleClick = useCallback(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div>
      <div>

        <p>Advice #{adviceId}</p>

        <p>"{advice}"</p>

        <img src="./images/pattern-divider-mobile.svg" alt="pattern divider" />

        <button type='button' className='bg-[url("./images/icon-dice.svg")] w-[1.5rem] h-[1.5rem] cursor-pointer' onClick={handleClick}></button>

        {/* <img src="./images/icon-dice.svg" alt="icon dice" /> */}

        <div className="attribution text-[11px] text-center">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name  Here</a>.
        </div>
      </div>
    </div>
    
  )
}

export default App
