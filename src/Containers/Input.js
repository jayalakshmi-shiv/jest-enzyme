import React from 'react'
import PropTypes from 'prop-types'


function Input(prop){
    const [currentGuess, setCurrentGuess] = React.useState("")
    return(
        <div data-test="component-input">
            <form className="form-inline">
                <input data-test="input-box" 
                className="mb-2 mx-sm-3" 
                type="text" 
                placeholder="enter guess"
                value={currentGuess}
                onChange={(e)=>setCurrentGuess(e.target.value)}/> 
                <button
                    data-test="submit-button"
                    className="btn btn-primary bb-2"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

Input.proptype = {
    secretWord:PropTypes.string.isRequired
}
export default Input


