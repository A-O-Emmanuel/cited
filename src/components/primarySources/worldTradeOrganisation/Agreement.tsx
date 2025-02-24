import React from 'react'

function Agreement() {
    return(
        <>

            <form action="">
                <h3>World Trade Organisation agreement</h3>

                <label htmlFor="">Title of agreement</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">date of the agreement</label> <br />
                <input type="date" /><br />

                <label htmlFor="">agreement reference number</label><br />
                <input type="text" /><br />

                <label htmlFor="">article number (if applicable)</label><br />
                <input type="number" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of International Treaties and Conventions</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Agreement;