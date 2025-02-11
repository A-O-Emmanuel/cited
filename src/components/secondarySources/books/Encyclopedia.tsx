import React from 'react'

function SingleAuthor() {
    return(
        <>

            <form action="">
                <h3>Encyclopedia</h3>

                <label htmlFor="">Title of Encyclopedia</label><br />
                <input type="text" /><br />

                <label htmlFor="">Edition</label><br />
                <input type="text" /><br />

                <label htmlFor="">Year of issue/reissue</label><br />
                <input type="text" /><br />

                <label htmlFor="">Volume Number</label><br />
                <input type="text" /> <br />

                <label htmlFor="">Paragraph Number</label><br />
                <input type="text" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default SingleAuthor;