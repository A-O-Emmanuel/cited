import React from 'react'

function GaResolution() {
    return(
        <>

            <form action="">
                <h3>General Assembly Resolutions</h3>

                <label htmlFor="">Title</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">date</label> <br />
                <input type="date" /><br />

                <label htmlFor="">document reference number</label><br />
                <input type="text" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Bibliography</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default GaResolution;