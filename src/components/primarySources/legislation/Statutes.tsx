import React from 'react'

function Statutes() {
    return(
        <>

            <form action="">
                <h3>Statutes</h3>

                <label htmlFor="">title of the legislation</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">year</label> <br />
                <input type="number" /><br />

                <label htmlFor="">section/subsection/part</label><br />
                <input type="number" /><br />

                <label htmlFor="">relevant abbreviation (e.g (b))</label><br />
                <input type="text" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of Legislation</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Statutes;