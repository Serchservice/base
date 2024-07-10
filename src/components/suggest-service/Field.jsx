import React, { useState, useEffect } from "react";

const Field = ({
    needLabel = true,
    placeHolder = '',
    type = 'text',
    autoComplete = "",
    label = "",
    needSpacer = true,
    isDisabled = false,
    isRequired = true,
    value = '',
    onClick,
    onKeyDown,
    onChange = () => {}
}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };

    const inputStyle = {
        color: "#030001",
        width: '100%',
        height: '50px',
        transition: '0.3s',
        paddingTop: '10px',
        borderColor: "#141b1b",
        borderWidth: '1px',
        paddingLeft: '12px',
        borderRadius: '18px',
        outlineStyle: 'none',
        paddingRight: '12px',
        paddingBottom: '10px',
        backgroundColor: "inherit",
        cursor: onClick ? 'pointer' : 'auto',
    };

    const inputFocusStyle = {
        borderColor: "#030001",
        borderWidth: '2px',
    };

    return (
        <div style={{
            flex: '0 0 auto',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: needSpacer ? '20px' : "0",
            flexDirection: 'column',
        }} onClick={onClick}>
            {(needLabel && label !== '') && <label style={{
                fill: "#030001",
                color: "#030001",
                marginBottom: '8px',
                width: '100%',
            }}>{label}</label>}
            <input
                type={type}
                required={isRequired}
                placeholder={placeHolder}
                autoComplete={autoComplete}
                style={inputStyle}
                disabled={isDisabled}
                readOnly={!!onClick}
                onKeyDown={onKeyDown}
                value={inputValue}
                onChange={handleChange}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
        </div>
    );
}

export default Field;
