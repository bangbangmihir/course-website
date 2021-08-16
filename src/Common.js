import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css"


const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10  mx-auto">
                            <div className="row mt-3">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 mt-5 order-lg-1">
                                    <h2> <strong>{props.name}</strong></h2>
                                    <h3 className="my-3"> just help me to build website...</h3>
                                    <div className="mt-5">
                                        <NavLink type="button" to={props.visit} class="btn btn-danger border border-warning rounded-pill">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">

                                    <img src={props.imgsrc} className="img-fluid" alt="home"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Common;