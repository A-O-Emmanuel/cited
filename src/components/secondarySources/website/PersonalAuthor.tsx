import React from 'react'

function PersonalAuthor() {
    return (
        <>
            <form action="">
                <h3>Personal Author</h3>

                <label htmlFor="">does the website have an author</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">author's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Add author</label> <br />
                <div>+</div><br />

                <label htmlFor="">Title of page/section</label><br />
                <input type="text" /><br />

                <label htmlFor="">title of the website</label><br />
                <input type="text" /><br />

                <label htmlFor="">date of publication</label><br />
                <input type="date" /><br />

                <label htmlFor="">URL/web address</label><br />
                <input type="text" /><br />

                <label htmlFor="">date accessed</label><br />
                <input type="date" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default PersonalAuthor;