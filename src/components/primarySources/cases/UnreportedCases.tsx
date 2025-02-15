import React from 'react'

function UnreportedCases() {
    return(
        <>

            <form action="">
                <h3>Unreported Cases</h3>

                <label htmlFor="">does the case have a neutral citation</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Case name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Neutral Citation (if applicable)</label> <br />
                <input type="text" /><br />

                <label htmlFor="">the court</label> <br />
                <input type="text" /><br />

                <label htmlFor="">date of the judgment</label> <br />
                <input type="date" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of Cases</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default UnreportedCases;