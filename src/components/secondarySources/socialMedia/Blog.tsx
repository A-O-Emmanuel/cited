import React from 'react'

function Blog() {
    return(
        <>
            <form action="">

                <h3>Blogs</h3>

                <label htmlFor="">does the blog have an author/editor</label> <br />
                <label htmlFor=""> yes</label>
                <input type="radio" /><br />

                <label htmlFor="">No</label>
                <input type="radio" /> <br />

                <label htmlFor="">Author/Editor(s)' First Name</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">Followed by their surname</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Add Author/Editor</label> <br />
                <div>+</div><br />

                <label htmlFor="">Title of blog entry</label><br />
                <input type="text" /><br />

                <label htmlFor="">Name of blog</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date of blog entry</label><br />
                <input type="date" /><br />

                <label htmlFor="">URL/web address of the blog post</label><br />
                <input type="text" /><br />

                <label htmlFor="">Date you accessed the blog entry</label> <br />
                <input type="date" /> <br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default Blog;