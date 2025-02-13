import React from 'react'

function Speech() {
    return(
        <>
            <form action="">
                <h3>Speech</h3>

                <label htmlFor="">was the speech delivered by a corporate author?</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">author's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">corporate author</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Add author</label> <br />
                <div>+</div><br />

                <label htmlFor="">Title of speech</label><br />
                <input type="text" /><br />

                <label htmlFor="">location</label><br />
                <input type="text" /><br />

                <label htmlFor="">date</label><br />
                <input type="date" /><br />
                
                <label htmlFor="">was the speech accessed online?</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">URL/web address</label><br />
                <input type="number" /><br />

                <label htmlFor="">date accessed</label><br />
                <input type="date" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliography</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Speech;