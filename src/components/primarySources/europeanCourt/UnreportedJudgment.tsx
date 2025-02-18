import React from 'react'

function UnreportedJudgment() {
    return(
        <>

            <form action="">
                <h3>Unreported Judgments from the European Court of Human Rights and European Human Rights Report</h3>

                <label htmlFor="">Case Name</label> <br />
                <input type="number" /> <br />

                <label htmlFor="">Application number</label> <br />
                <input type="number" /> <br />

                <label htmlFor="">name of court</label> <br />
                <input type="text" /><br />

                <label htmlFor="">date of judgment</label><br />
                <input type="date" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of Cases</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default UnreportedJudgment;