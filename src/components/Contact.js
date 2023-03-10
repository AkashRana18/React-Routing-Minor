import React from 'react';
function Contact() {
  return (
    <>
    <h1 className='text-center mt-5'>Welcome to Contact Us Page</h1>
    <div className="container-fluid md-10">

      <form id="contact-form ">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary mt-2">Submit</button>
</form>
    </div>

    </>
  );
}

export default Contact;