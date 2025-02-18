import React from 'react'

function EuJudgment() {
    return(
        <>

            <form action="">
                <h3>Reported Judgments from the European Court of Human Rights and European Human Rights Report</h3>

                <label htmlFor="">Case number</label> <br />
                <input type="number" /> <br />

                <label htmlFor="">year</label> <br />
                <input type="number" /><br />

                <label htmlFor="">Volume number(if applicable)</label><br />
                <input type="number" /><br />

                <label htmlFor="">abbreviation of the series of the law report</label><br />
                <input type="text" /><br />

                <label htmlFor="">page or case or application number</label><br />
                <input type="number" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of Legislation</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default EuJudgment;