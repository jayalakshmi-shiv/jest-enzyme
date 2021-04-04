import React from 'react'
import PropTypes from 'prop-types'


function Input(prop){
    return(
        <div data-test="component-input"/>
    )
}

Input.proptype = {
    secretWord:PropTypes.string.isRequired
}
export default Input


