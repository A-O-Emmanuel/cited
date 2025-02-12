import React from 'react'

function CommandPaper() {
    return(
        <>
            <form action="">
                <h3>Command Papers</h3>

                <label htmlFor="">Name of the department or body that produced the paper</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Title of the Paper</label> <br />
                <input type="text" /><br />

                <label htmlFor="">any additional information</label><br />
                <input type="text" /><br />

                <label htmlFor="">command paper number</label><br />
                <input type="text" /><br />

                <label htmlFor="">the year</label><br />
                <input type="text" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default CommandPaper;