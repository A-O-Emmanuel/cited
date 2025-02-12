import React from 'react'

function Letter() {
    return(
        <>

            <form action="">
                <h3>Letter</h3>
                <h4>You should seek permission fromt the sender/recipient before referring to personal letters in your academic work.</h4>

                <label htmlFor="">Sender's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Sender's surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Are you the sender:</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Recipients' First Name</label><br />
                <input type="text" /><br />

                <label htmlFor="">Recipients' Surname</label><br />
                <input type="text" /><br />

                <label htmlFor="">Are you the recipient:</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">When was the email sent or recieved</label><br />
                <input type="date" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Letter;