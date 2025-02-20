import React from 'react'

function ScResolution() {
    return(
        <>

            <form action="">
                <h3>Security Council Resolutions</h3>

                <label htmlFor="">Body</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Title</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">date</label> <br />
                <input type="date" /><br />

                <label htmlFor="">document reference number or press release followed by the number</label><br />
                <input type="text" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Bibliography</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default ScResolution;