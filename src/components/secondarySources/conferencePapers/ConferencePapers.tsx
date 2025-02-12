import React from 'react'

function ConferencePaper() {
    return(
        <>
            <form action="">
                <h3>Published Conference Paper</h3>

                <label htmlFor="">Author's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Title of the Book</label><br />
                <input type="text" /><br />

                <label htmlFor="">Edition (if not the first)</label><br />
                <input type="text" /><br />

                <label htmlFor="">The publisher</label><br />
                <input type="text" /><br />

                <label htmlFor="">the year of publication</label><br />
                <input type="text" /><br />

                <label htmlFor="">Paragraph Number (e.g 3, if applicable)</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Page Number(s) (e.g 61-89, or 61)</label><br />
                <input type="text" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default ConferencePaper;