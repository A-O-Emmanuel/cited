import React from 'react'

function CouncilOfEurope() {
    return(
        <>

            <form action="">
                <h3>Council Of Europe treaty</h3>

                <label htmlFor="">title of Treaty</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">date adopted(if available)</label> <br />
                <input type="date" /> <br />

                <label htmlFor="">date the treaty entered into force</label> <br />
                <input type="date" /><br />

                <label htmlFor="">number of the treaty</label><br />
                <input type="text" /><br />

                <label htmlFor="">number of the treaty</label><br />
                <input type="text" /><br />

                <label htmlFor="">article number(if applicable)</label><br />
                <input type="text" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of International Treaties and Conventions</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default CouncilOfEurope;