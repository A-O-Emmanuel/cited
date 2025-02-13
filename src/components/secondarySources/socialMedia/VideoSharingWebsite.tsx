import React from 'react'

function VideoSharingWebsite() {
    return(
        <>
            <form action="">

                <h3>Video sharing websites</h3>

                <label htmlFor="">Is there an author</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Contributor(s) firsname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Contributor(s) lastname</label> <br />
                <input type="text" /><br />
                
                <label htmlFor="">add contributor</label> <br />
                <div>+</div><br />

                <label htmlFor="">Title of video</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Title of the website</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Date the video was uploaded if available</label><br />
                <input type="date" /><br />

                <label htmlFor="">URL/web address</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date you accessed the video</label> <br />
                <input type="date" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default VideoSharingWebsite;