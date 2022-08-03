import React from 'react'
import { NavLink } from 'react-router-dom'
const Form = () => {
    return (
        <>
            <section className="form">
                <div className="row container">
                    <div className="formDiv">
                        <form method='POST' action='https://formspree.io/f/xoqbanoq'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                <input required autoComplete='off' name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Enter College name</label>
                                <input required autoComplete='off' name='college' type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Enter stream of your course</label>
                                <input required autoComplete='off' name='stream' type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Enter year of passout</label>
                                <input required autoComplete='off' name='year' type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Enter currently what you are doing?</label>
                                <input required autoComplete='off' name='current' type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Mobile number</label>
                                <input required autoComplete='off' name='number' type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Enter email id</label>
                                <input required autoComplete='off' name='email' type="text" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="d-flex">
                                <button type="submit" value='send' className="btn btn-primary">Next</button>
                                <NavLink to='/'>
                                    <button type="submit" className="btn btn-primary mx-2">Cancel</button>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form