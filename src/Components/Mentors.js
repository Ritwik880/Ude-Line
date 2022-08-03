import React from 'react'
import { JOINDATA as data } from '../utils/constants'

const Mentors = () => {
    return (
        <>
            <section className='minBanner'>
                <div className="row container">
                    <div className="menBanner">
                        <h1 className='ourMen'>Our Mentor’s</h1>
                        <img src="/aboutBanner.png" alt="aboutBanner" />
                    </div>
                </div>
            </section>

            <section className="mentos">
                <div className="row container">

                    {
                        data.map((curElem, id) => {
                            const { img } = curElem;
                            return (
                                <div className="col-lg-4 col-md-12 my-2" key={id}>

                                    <img src={img} alt="img" />

                                </div>
                            )
                        })
                    }

                </div>
            </section>

        </>
    )
}

export default Mentors