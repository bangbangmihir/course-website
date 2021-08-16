import React from 'react';
import Card from './Card';
import Sdata from './Sdata'


const Service = () => {
    return (
        <>
            <div className="my-5">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-10  mx-auto">
                            <h1 className="text-center mb-5">Our Services</h1>
                            <div className="row gy-4 ">
                                {
                                    Sdata.map((val,index) =>{
                                        return <Card 
                                            key = {index}
                                            imgsrc = {val.imgsrc}
                                            title = {val.title}
                                        />
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Service;