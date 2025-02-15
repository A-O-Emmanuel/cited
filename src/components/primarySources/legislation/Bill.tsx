import React from 'react'

function Bill() {
    return(
        <>

            <form action="">
                <h3>Bills</h3>

                <label htmlFor="">title of the Bill</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">the house it originated e.g HL or HC</label> <br />
                <input type="text" /><br />

                <label htmlFor="">the Parliamentary session</label><br />
                <input type="number" /><br />

                <label htmlFor="">running number</label><br />
                <input type="text" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of Legislation</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Bill;