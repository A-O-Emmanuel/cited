import React from 'react'

function Theses() {
    return(
        <>
            <form action="">
                <h3>Theses, dissertation</h3>

                <label htmlFor="">Author's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Title of theses/dissertation</label><br />
                <input type="text" /><br />

                <label htmlFor="">qualification level</label><br />
                <input type="text" /><br />

                <label htmlFor="">the Higher Education institution</label><br />
                <input type="text" /><br />

                <label htmlFor="">the year of completion</label><br />
                <input type="number" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Theses;