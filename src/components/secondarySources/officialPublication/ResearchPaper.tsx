import React from 'react'

function ResearchPaper() {
    return(
        <>
            
            <form action="">
                <h3>Research Papers</h3>

                <label htmlFor="">Author's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">add author</label> <br />
                <div>+</div><br />

                <label htmlFor="">Title of the report</label><br />
                <input type="text" /><br />

                <label htmlFor="">Series (if applicable)</label><br />
                <input type="text" /><br />

                <label htmlFor="">Publisher (publisher)</label><br />
                <input type="text" /><br />

                <label htmlFor="">the year of publication</label><br />
                <input type="text" /><br />


                <label htmlFor="">Is it accessed online?</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />


                <label htmlFor="">URL/Web address</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">date accessed</label><br />
                <input type="date" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default ResearchPaper;