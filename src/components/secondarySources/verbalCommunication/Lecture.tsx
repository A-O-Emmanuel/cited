import React from 'react'

function Lecture() {
    return(
        <>
            <form action="">
                <h3>Lecture, Seminar</h3>

                <h4>Before citing a lecture or seminar, you should idealy seek permission  from your lecturer.</h4>

                <label htmlFor="">Lecture's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Add lecturer</label> <br />
                <div>+</div><br />

                <label htmlFor="">Title of lecture</label><br />
                <input type="text" /><br />

                <label htmlFor="">qualification level</label><br />
                <input type="text" /><br />

                <label htmlFor="">the module title and code</label><br />
                <input type="text" /><br />

                <label htmlFor="">name of Higher Educcation institution</label><br />
                <input type="number" /><br />

                <label htmlFor="">date of lecture</label><br />
                <input type="date" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Lecture;