import React from 'react'

function Ebook() {
    return(
        <>

            <form action="">
                <h3>Ebook</h3>
                <h4>Note: When referring to ebooks you do not need to provide the URL/web address or the date the book was accessed online.</h4>

                <label htmlFor="">Author's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">is the book edited:</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Is there more than one editor:</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Title of the Book</label><br />
                <input type="text" /><br />

                <label htmlFor="">Edition (if not the first)</label><br />
                <input type="text" /><br />

                <label htmlFor="">The publisher</label><br />
                <input type="text" /><br />

                <label htmlFor="">the year of publication</label><br />
                <input type="text" /><br />

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

export default Ebook;