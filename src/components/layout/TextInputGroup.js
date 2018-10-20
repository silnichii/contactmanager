import React from 'react'
import PropTypes from 'prop-types'
import classnames from "classnames"


const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error,
    pattern
}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
            value={value}
            type={type} 
            name={name}
            className={classnames("form-control form-control-lg", {
                "is-invalid" : error
            })}
            placeholder={placeholder}
            onChange={onChange}
            pattern={pattern}
        />
        {error && <div className="invalid-feedback">{error}</div>}
        
    </div>
  )
}

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    pattern: PropTypes.string
}


TextInputGroup.defaultProps = {
    type: "text"
}

export default TextInputGroup;
