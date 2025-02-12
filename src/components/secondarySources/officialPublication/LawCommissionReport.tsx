import React from 'react'

function LawCommissionReport() {
    return(
        <>
            <form action="">
                <h3>Law Commission Report</h3>

                <label htmlFor="">Title</label> <br />
                <input type="date" /><br />

                <label htmlFor="">Law Commission Number</label> <br />
                <input type="text" /><br />

                <label htmlFor="">Report Number</label>
                <input type="text" /><br />

                <label htmlFor="">Year</label>
                <input type="number" /> <br />
                
                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Copy Bibliograpy</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default LawCommissionReport;