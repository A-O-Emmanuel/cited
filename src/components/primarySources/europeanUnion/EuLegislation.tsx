import React from 'react'

function EuLegislation() {
    return(
        <>

            <form action="">
                <h3>EU Legislation</h3>

                <label htmlFor="">Title of the legislation including amendments (if applicable)</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">year of publication</label> <br />
                <input type="number" /><br />

                <label htmlFor="">series</label><br />
                <input type="text" /><br />

                <label htmlFor="">issue number</label><br />
                <input type="number" /><br />

                <label htmlFor="">first page number</label><br />
                <input type="number" /><br />

                <label htmlFor=""> paragraph number</label><br />
                <input type="number" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of Legislation</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default EuLegislation;