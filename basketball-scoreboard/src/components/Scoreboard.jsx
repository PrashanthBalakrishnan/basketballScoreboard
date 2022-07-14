import React from "react";

function Scoreboard() {
    return (
        < div className="score-board" >
            <div className="home" >
                HOME
                <div className="score">10</div>
                <div className="add-points">
                    <p>+1</p>
                    <p>+2</p>
                    <p>+3</p>
                </div>
            </div >
            <div className="Guest">
                GUEST
                <div className="score">10</div>
                <div className="add-points">
                    <p>+1</p>
                    <p>+2</p>
                    <p>+3</p>
                </div>
            </div>

        </div >
    )
}

export default Scoreboard