import React from 'react'

function Judgment() {
    return(
        <>

            <form action="">
                <h3>European court of Justice and Court of First Instance</h3>

                <label htmlFor="">Case number</label> <br />
                <input type="number" /> <br />

                <label htmlFor="">Case name</label> <br />
                <input type="number" /><br />

                <label htmlFor="">European Case Law Identifier(if applicable)</label><br />
                <input type="number" /><br />

                <label htmlFor="">Law report citation(if applicable)</label><br />
                <input type="text" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of Legislation</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Judgment;