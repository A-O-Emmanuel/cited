import React from 'react'

function Newspaper() {
    return(
        <>
            <form action="">
                <h3>Newspaper Articles</h3>

                <label htmlFor="">Author's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Title of the article</label><br />
                <input type="text" /><br />

                <label htmlFor="">Name of the Newspaper</label><br />
                <input type="text" /><br />

                <label htmlFor="">City of Publication</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date of Publication</label><br />
                <input type="date" /><br />

                <label htmlFor="">Section name (If applicable)</label><br />
                <input type="text" /><br />

                <label htmlFor="">Page Number (If known)</label><br />
                <input type="text" /><br />
                
                <label htmlFor="">Is the newspaper accessed online?</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">URL/web address</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date accessed</label><br />
                <input type="date" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Newspaper;