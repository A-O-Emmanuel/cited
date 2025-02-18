import React from 'react'

function Treaties() {
    return(
        <>

            <form action="">
                <h3>Treaties</h3>

                <label htmlFor="">Title of the Treaty</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">date adopted</label> <br />
                <input type="date" /><br />

                <label htmlFor="">date the treaty entere in force</label><br />
                <input type="date" /><br />

                <label htmlFor="">volume number</label><br />
                <input type="number" /><br />

                <label htmlFor="">abbreviation of the Treaty series</label><br />
                <input type="text" /><br />

                <label htmlFor="">Page number</label><br />
                <input type="number" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of International Treaties and Conventions</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Treaties;