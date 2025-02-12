import React from 'react'

function OnlineConferencePaper() {
    return(
        <>
            <form action="">
                <h3>Published Conference Paper</h3>

                <label htmlFor="">Author's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <sup>+</sup> <br />

                <label htmlFor="">Title of Paper</label><br />
                <input type="text" /><br />

                <label htmlFor="">Conference Title</label><br />
                <input type="text" /><br />

                <label htmlFor="">The publisher</label><br />
                <input type="text" /><br />

                <label htmlFor="">Location</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date of the Conference</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">url(s)</label><br />
                <input type="text" /> <br />

                <label htmlFor="">Date you accessed the url</label><br />
                <input type="date" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default OnlineConferencePaper;