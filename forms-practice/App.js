import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState({
        email: "", password: "", confirmPassword: "", checked: false
    })
    
    function handleChange(event){
        const {name, value, type, checked} = event.target;
        // console.log(event.target)
        setFormData(prevData=>{
            return {
                ...prevData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmPassword) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
        }
        
        if(formData.checked) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name = "email"
                    value = {formData.email}
                    onChange = {handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name = "password"
                    value = {formData.password}
                    onChange = {handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name = "confirmPassword"
                    value={formData.confirmPassword}
                    onChange = {handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name = "checked"
                        checked = {formData.checked}
                        onChange = {handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
