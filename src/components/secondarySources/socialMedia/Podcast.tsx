import React from 'react'

function Podcast() {
    return(
        <>
            <form action="">

                <h3>Podcasts, vidcasts, vodcasts</h3>

                <label htmlFor="">Does the podcast, vidcasts, or vodcast have an author or broadcaster?</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">is the podcast, vidcasts, or vodcast hosted by a corporate author? e.g BBC</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Broadcaster's First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Add Broadcaster </label> <br />
                <div>+</div><br />

                <label htmlFor="">Title of podcast/vidcast/vodcast</label><br />
                <input type="text" /><br />

                <label htmlFor="">title of the website</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date of broadcast(if available)</label><br />
                <input type="date" /><br />

                <label htmlFor="">URL/web address</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date you accessed the podcast/vidcast/vodcast</label> <br />
                <input type="date" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Podcast;