import React, { useState } from 'react';


const Contact = () => {
    const [data,setdata]=useState({
        fullname :'',
        email :'',
        phone :'',
        query : '',
        msg : '',
    })
    const InputEvent=(e)=>{
        const {name,value} = e.target;
        setdata((preVal)=>{
            return{
                ...preVal,[name]:value,
            }
        })

    };
    const formSubmit= (e)=>
    {
        e.preventDefault();
        alert(`${data.fullname}`)
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <form onSubmit={formSubmit
            }>
                <div className="container">
                    <div className="col-md-6 col-10 mx-auto">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Enter Your Name:-</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter Your Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address:-</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                             placeholder="Enter Your Email" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone No:-</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1"
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                             placeholder="Enter Your phone" />
                        </div>
                       
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Query Regarding:-</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            name="query"
                            value={data.query}
                            onChange={InputEvent}
                            placeholder="Write Your Query in Short" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message:-</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" 
                            name="msg"
                            value={data.msg}
                            onChange={InputEvent}
                            placeholder="Write Your Messages" rows="3"></textarea>
                        </div>
                        <div class= "mb-2">
                            <button class="btn btn-primary col-12" type="submit">Submit </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );

}

export default Contact;