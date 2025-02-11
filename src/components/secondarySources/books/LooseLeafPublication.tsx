import React from 'react'

function LooseLeafPublication() {
    return(
        <>
            <form action="">
                <h3>Loose-leaf Publication</h3>

                <label htmlFor="">Title of loose-leaf</label><br />
                <input type="text" /><br />

                <label htmlFor="">Volume (e.g 1 or 2, if applicable)</label><br />
                <input type="text" /><br />

                <label htmlFor="">Paragraph Number (e.g 3, if applicable)</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Issue Number(s) (e.g 234, or 61)</label><br />
                <input type="text" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default LooseLeafPublication;