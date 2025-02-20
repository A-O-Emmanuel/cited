import React from 'react'

function InternationalCase() {
    return(
        <>

            <form action="">
                <h3>International Cases and Decisions</h3>

                <label htmlFor="">Case name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">type of case (e.g advisory opinion, application for intervention)</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Are you refering to the ICJ reports</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Year</label><br />
                <input type="text" /><br />

                <label htmlFor="">First page number of the report</label><br />
                <input type="text" /><br />

                <label htmlFor="">Are you refering to the PCIJ reports</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">relevant letter</label><br />
                <input type="text" /><br />

                <label htmlFor="">case number</label><br />
                <input type="number" /><br />

                <label htmlFor="">Are you refering to a website</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">URL/web address</label><br />
                <input type="text" /><br />

                <label htmlFor="">date accessed</label><br />
                <input type="date" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of International Cases</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default InternationalCase;