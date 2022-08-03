import React from 'react'
const About = () => {
    return (
        <>
            <section className='minBanner'>
                <div className="row container">
                    <div className="menBanner">
                        <h1 className='ourMen'>About us</h1>
                        <img src="/aboutBanner.png" alt="aboutBanner" />
                    </div>
                </div>
            </section>

            <section className='aboutPara'>
                <div className="row container">
                    <p className='aboutChildPara'>
                        Udeline was started for the core purpose of eliminating student problems related to choice of colleges and courses. We saw a huge gap of understanding in students about what choices they have and in order to excel their potential what could be the best course for them. A course plays a very crucial role in shaping a person’s career and their life. Taking you through each and every option available in the future right in front of you. Not only do we provide you with details, but we also provide a special feature where you can connect with people from your dream college. Get a completely genuine review of your college. Get all your answers at one place. We will be guiding you throughout your admission journey.


                    </p>
                </div>
            </section>

            <section className='midSection'>
                <div className="row container">
                    <h1 className='midHead'>Our Mission & Vision</h1>
                    <div className="mid">
                        <img src="/castle.png" alt="castle" />
                        <p className='midPara'>Udeline envisions a world where anyone, anywhere, anytime can transform their lives by choosing colleges, courses, and city with a complete understanding of it. Our vision is to create an environment where students can judge better through greater understanding of what they will be getting into. We want to take off pressure from students and ensure a good mental health. </p>
                    </div>
                </div>
            </section>

            <section className='layerText'><h1>Our Motto</h1>
                <p>The One Behind Everey Great One <span className='spanText'>#ToBeGo</span></p></section>
            <section className='layer'></section>

            <section className="founder">
                <div className="row container">
                    <h1>Our Founders</h1>
                    <div className="founderImg">
                        <img className='childImg' src="/jaoy.png" alt="joyshreeImg" />
                        <img className='childImg' src="/ritwik.png" alt="ritwikImg" />

                    </div>
                </div>
            </section>


        </>
    )
}

export default About