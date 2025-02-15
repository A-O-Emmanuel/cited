import React from 'react'

function StatutoryInstrument() {
    return(
        <>

            <form action="">
                <h3>Statutory Instruments</h3>

                <label htmlFor="">name of statutory instrument</label> <br />
                <input type="text" /> <br />

                <label htmlFor="">year</label> <br />
                <input type="number" /><br />

                <label htmlFor="">SI number year e.g SI 2014/1291</label><br />
                <input type="number" /><br />

                <label htmlFor="">SI number serial number e.g SI 2014/1291</label><br />
                <input type="number" /><br />

                <label htmlFor="">Copy Citation</label> <br />
                <textarea name="" id=""></textarea><br />

                <label htmlFor="">Table of Legislation</label> <br />
                <textarea name="" id=""></textarea>
            </form>
        </>
    )
}

export default StatutoryInstrument;