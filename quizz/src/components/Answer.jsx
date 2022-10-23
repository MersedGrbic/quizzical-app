import React from "react";
export default function Answer(props){
    const [on , setOn] = React.useState(props.on)
    let color = props.correctAnswer===props.answer ? '#94D7A2' : '#F8BCBC'
    function changeColor(){
       
        setOn(prevState=> !prevState)
    }
    const styles = {
        backgroundColor: on ? '#FFFFFF' : color
    }
    return (
        <div style={styles} className="answer" onClick={changeColor}>
        {props.answer} 
        </div>
    )
}