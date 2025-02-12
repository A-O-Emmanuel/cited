import React from 'react'

function Report() {
    return(
        <>
            <form action="">
                <h3>Report</h3>

                <label htmlFor="">Name of Committee</label> <br />
                <input type="date" /><br />

                <label htmlFor="">Title of the report</label> <br />
                <input type="text" /><br />

                <label htmlFor=""> HL Deb</label>
                <input type="radio" /><br />

                <label htmlFor="">HC Deb</label>
                <input type="radio" /> <br />

                <label htmlFor="">the session</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Paper number</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Volume number</label>
                <input type="text" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Report;