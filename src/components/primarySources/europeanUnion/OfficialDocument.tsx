import React from 'react'

function OfficialDocument() {
    return(
        <>

            <form action="">
                <h3>Official documents from the European Union</h3>

                <label htmlFor="">Name of the body tha produced the document</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Title of the Document</label> <br />
                <input type="number" /><br />

                <label htmlFor="">Unique document number</label><br />
                <input type="text" /><br />

                <label htmlFor="">paper abbreviation</label><br />
                <input type="text" /><br />

                <label htmlFor="">number(if applicable)</label><br />
                <input type="number" /><br />

                <label htmlFor="">Date</label><br />
                <input type="date" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Bibilography</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default OfficialDocument;