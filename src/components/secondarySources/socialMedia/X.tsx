import React from 'react'

function X() {
    return(
        <>
            <form action="">

                <h3>Twitter now called X</h3>

                <label htmlFor="">Contributor</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Add Contributor</label> <br />
                <div>+</div><br />

                <label htmlFor="">Short description of X post</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Date of X post</label><br />
                <input type="date" /><br />

                <label htmlFor="">URL/web address of X post</label><br />
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

export default X;