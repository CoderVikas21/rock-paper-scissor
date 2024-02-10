import React, { useState } from 'react'
import { PiHandFistBold } from "react-icons/pi";
import { FaRegHandScissors } from "react-icons/fa";
import { PiHandPalmBold } from "react-icons/pi";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const tools = [<PiHandFistBold />,<PiHandPalmBold />,<FaRegHandScissors />]
  const [N , setN] = useState(-1)
  const [won , setWon] = useState("")
  const [mytool , setMytool] = useState("")
  const [pctool , setpctool] = useState("")
  const [rebegin ,setRebegin] = useState(true)
  const [score , setScore] = useState(0)
  const [high ,setHigh] = useState(0)
  const [play , setPlay] = useState(false)


  function toolhandler(n){
    if(rebegin===false){
      return
    }
    setN(n)
    setMytool(tools[n])
  }

  function go_handler(){
    if(rebegin===false){
      return
    }
    if(N===-1){
      toast.error("Please select a tool first")
      return
    }
    let randint = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    setpctool(tools[randint])
    if(N===randint){
      setWon("DRAW")
      setPlay(true)
      setRebegin(false)
      console.log(N,randint)
      return
    }
    if(N==0){
      setRebegin(false)
      randint===1 ? (setWon("You Lost"),setPlay(true)) :  (setWon("You Won"),setScore(score+1),setRebegin(true),hightscore(score))
      
    }
    if(N==1){
      setRebegin(false)
      randint===2 ? (setWon("You Lost"),setPlay(true)) :  (setWon("You Won"),setScore(score+1),setRebegin(true),hightscore(score))
      
    }
    if(N==2){
      setRebegin(false)
      randint===0 ? (setWon("You Lost"),setPlay(true)) :  (setWon("You Won"),setScore(score+1),setRebegin(true),hightscore(score))
    
    }
    setTimeout(()=>{
      setMytool("")
      setpctool("")
      setWon("")
    },2000)
    return
  }

  function hightscore(s){
    if(s > high){
      setHigh(s+1)
    }
    return
  }

  function restart(){
    setPlay(false)
    setRebegin(true)
    setScore(0)
    setN(-1)
    setMytool("")
    setWon("")
    setpctool("")
  }

  return (
   <>
      <div className="container">
        <h2>Select your Tool</h2>
        <h3>Score: {score}</h3>
        <h3>High Score: {high}</h3>
        <div className="game_box">
              <div className="left">
                  {
                    pctool
                  }
                  <h6>PC</h6>
              </div>
              <div className="center">
              <h3>{won}</h3>
              <button onClick={go_handler}>Go</button>
              </div>
              <div className="right">
                  {
                    mytool
                  }
                  <h6>You</h6>
              </div>
        </div>
        <div className="select">
          <div className="tool" onClick={()=>{toolhandler(0)}}>
            <PiHandFistBold />
            <p>Rock</p>
          </div>
          <div className="tool" onClick={()=>{toolhandler(1)}}>
            <PiHandPalmBold />
            <p>Paper</p>
          </div>
          <div className="tool" onClick={()=>{toolhandler(2)}}>
          <FaRegHandScissors />    
            <p>Scissor</p>
          </div>
        </div>
        {
          play &&
          <button className='restart' onClick={restart}>Play Again</button>
        }
      </div>
      <div className="end">
        Made With ❤ by Vikas
       <a href=" https://github.com/CoderVikas21" target="_blank">Github</a> 
      </div>
   </>
  )
}

export default App
