import { useEffect, useState } from "react"

export default function QuestionTimer({MAX_TIME,onTimeOut}){
    const [reminingTime,setReminingTime] = useState(MAX_TIME)
    
    useEffect(()=>{
            const ref = setTimeout(onTimeOut,MAX_TIME)

            return ()=>{
                clearTimeout(ref)
            }
    },[MAX_TIME,onTimeOut]);
    const ref = useEffect(()=>{
            setInterval(()=>{
        setReminingTime(prev=>prev-100)
    },100)

    return clearTimeout(ref)

    },[])
    return <progress id="question-time" max={MAX_TIME} value={reminingTime} />
}