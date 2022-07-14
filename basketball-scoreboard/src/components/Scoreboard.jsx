import React, { useState } from "react";

function Scoreboard() {
    const [homeScore, setScore] = useState(0)
    function addOneHome() {
        setScore(prevScore => prevScore + 1)
    }
    function addTwoHome() {
        setScore(prevScore => prevScore + 2)
    }
    function addThreeHome() {
        setScore(prevScore => prevScore + 3)
    }
    const [guestScore, setGuestScore] = useState(0)
    function addOneGuest() {
        setGuestScore(prevScore => prevScore + 1)
    }
    function addTwoGuest() {
        setGuestScore(prevScore => prevScore + 2)
    }
    function addThreeGuest() {
        setGuestScore(prevScore => prevScore + 3)
    }


    return (
        < div className="score-board" >
            <div className="home" >
                HOME
                <div className="score">{homeScore}</div>
                <div className="add-points">
                    <button className="points" onClick={addOneHome} >+1</button>
                    <button className="points" onClick={addTwoHome}>+2</button>
                    <button className="points" onClick={addThreeHome}>+3</button>
                </div>
            </div >
            <div className="Guest">
                GUEST
                <div className="score">{guestScore}</div>
                <div className="add-points">
                    <button className="points" onClick={addOneGuest} >+1</button>
                    <button className="points" onClick={addTwoGuest} >+2</button>
                    <button className="points" onClick={addThreeGuest} >+3</button>
                </div>
            </div>

        </div >
    )
}

export default Scoreboard