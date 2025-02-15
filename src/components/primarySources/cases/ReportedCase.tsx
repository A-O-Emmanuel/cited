import React from 'react'

function ReportedCases() {
    return(
        <>

            <form action="">
                <h3>Reported Cases</h3>

                <label htmlFor="">Case name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Neutral Citation (if applicable)</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Law report citation</label><br />
                <input type="text" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of Cases</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default ReportedCases;