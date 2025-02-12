import React from 'react'

function Debate() {
    return(
        <>
            <form action="">
                <h3>Debates</h3>

                <h4>When referring to debates on the floor of the House of Commons or the House of Lords.</h4>

               
                <label htmlFor=""> HL Deb</label>
                <input type="radio" /><br />

                <label htmlFor="">HC Deb</label>
                <input type="radio" /> <br />

                <label htmlFor="">Date</label> <br />
                <input type="date" /><br />

                <label htmlFor="">volume number</label> <br />
                <input type="text" /><br />

                <label htmlFor="">more than one colume:</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Is it a written answer in the House of Lords?:</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />


                <label htmlFor="">column number</label><br />
                <input type="text" /><br />

                <label htmlFor="">Is it a written answer in the House of Commons?:</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Debate;