import React from 'react'

function NgReport() {
    return(
        <>

            <form action="">
                <h3>Book with  three authors</h3>

                <label htmlFor="">does the report have a named author:</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">is the author a corporate author?</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Author/editor's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Author/editor's surname</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">add author/editor</label> <br />
                <div>+</div><br />

                <label htmlFor="">title of the report</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">is the report accessed online</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">title of the website</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">date of publication (if available)</label> <br />
                <input type="text" /><br />

                <label htmlFor="">page number(if referring to a particular page)</label> <br />
                <input type="number" /> <br />

                <label htmlFor="">URL/web address(if accessed online)</label> <br />
                <input type="text" /> <br />

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

export default NgReport;