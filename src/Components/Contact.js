import React from 'react'

function Contact() {
    return (
        <div className="ct1 align-center d-flex ">
            <form>
                <div>
                    <label for="EmailId" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="InputEmailId"></input>
                </div>

                
                <div>
                    <label for="Password" className="form-label">Enter your password</label>
                    <input type="password" className="form-control" id="InputPassword"></input>
                </div>

                
                <div>
                    <label for="form-check-label" className="form-label">Check me out</label>
                    <input type="checkbox" className="form-control" id="InputEmailId"></input>
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Contact;
