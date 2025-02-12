import React from 'react'

function JournalArticle() {
    return(
        <>
            <form action="">
                <h3>Journal Articles</h3>

                <label htmlFor="">Author's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Does the Article have an author?</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Title of the article</label><br />
                <input type="text" /><br />

                <label htmlFor="">Year</label><br />
                <input type="text" /><br />

                <label htmlFor="">Volume Number (If applicable)</label><br />
                <input type="text" /><br />

                <label htmlFor="">Issue Number (If applicable)</label><br />
                <input type="text" /><br />

                <label htmlFor="">Journal Abbrevation</label><br />
                <input type="text" /><br />

                <label htmlFor="">First page of article</label><br />
                <input type="text" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default JournalArticle;