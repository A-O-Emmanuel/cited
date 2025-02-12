import React from 'react'

function Broadcast() {
    return(
        <>

            <form action="">
                <h3>Broadcast</h3>

                <label htmlFor="">Interviewer's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <sup>+</sup> <br />

                <label htmlFor="">Interviewee's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Interviewee's surname</label> <br />
                <input type="text" /><br />

                <sup>+</sup>

                <label htmlFor="">Programme Name (if applicable)</label><br />
                <input type="text" /><br />

                <label htmlFor="">Broadcast Location</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date of Broadcast</label><br />
                <input type="date" /><br />
                
                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Broadcast;