import React from 'react'

function Facebook() {
    return(
        <>
            <form action="">

                <h3>Facebook</h3>

                <label htmlFor="">Contributor(s)</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Short description of post</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">The name of the facebook page</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Date of post</label><br />
                <input type="date" /><br />

                <label htmlFor="">URL/web address of facebook page</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date you accessed the post</label> <br />
                <input type="date" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Facebook;