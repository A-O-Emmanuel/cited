import React from 'react'

function GeneralSource() {
    return(
        <>

            <form action="">
                <h3>when referencing other general sources of reports on interantional case</h3>

                <label htmlFor="">Title of case</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Year</label> <br />
                <input type="number" /><br />

                <label htmlFor="">Volume number</label><br />
                <input type="number" /><br />

                <label htmlFor="">Abbreviation of law report series</label><br />
                <input type="text" /><br />

                <label htmlFor="">first page of the report</label><br />
                <input type="number" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of International Cases</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default GeneralSource;