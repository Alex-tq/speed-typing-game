import React, {useState, useEffect, useRef} from "react"

function App() {
    
    
    const [text, setText] = useState("")
    const [startingTime, setStartingTime] = useState(30)
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
    const startingTimeRef = useRef(null)
    
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    function handleStartTimeInput(e){
        const {value} = e.target
        setStartingTime(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(startingTime)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
        //startingTimeRef.current.styles = {display: 'none'}
    }
    
    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            {isTimeRunning
                ? <h4>{`Time Remaining: ${timeRemaining}`}</h4>
                :<h4><input type='number' placeholder='Starting Time' value={startingTime} onChange={handleStartTimeInput} ref={startingTimeRef}></input></h4>}
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App