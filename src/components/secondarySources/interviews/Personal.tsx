import React from 'react'

function Personal() {
    return(
        <>

            <form action="">
                <h3>Personal</h3>
                <h4>You should seek permission from the interviewee/interviewer before referring to a personal interview in your academic work</h4>

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

                <label htmlFor="">Position of the interviewee</label><br />
                <input type="text" /><br />


                <label htmlFor="">Institution (if applicable)</label><br />
                <input type="text" /><br />

                <label htmlFor="">Interview Location</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date of Interview</label><br />
                <input type="date" /><br />
                
                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Personal;