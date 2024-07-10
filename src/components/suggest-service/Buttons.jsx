import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, IconButton, Tooltip } from "@mui/material";
import React from "react";

const ActionButton = ({
    onClick, state = false, open = false, size = "medium",
    icon = '', title = "Click me", padding = "8px 12px",
    backgroundColor, color, iconSize = 1.2, link, actionText = 'Submitting...'
}) => {
    return (
        <Button
            size={size}
            onClick={onClick}
            id="basic-button"
            href={link}
            disabled={state}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            startIcon={
                icon && <Icon
                    icon={state ? "svg-spinners:90-ring-with-bg" : icon}
                    width={`${iconSize}em`}
                    height={`${iconSize}em`}
                    style={{ color: color ?? "#030003" }}
                />
            }
            sx={{
                [`&.MuiButton-root`]: {
                    textTransform: "none",
                    color: color ?? "#030001",
                    fontSize: "13px",
                    padding: padding,
                    borderRadius: "16px",
                    backgroundColor: backgroundColor ?? "#0300003"
                },
                backgroundColor: backgroundColor ?? "#f2f2f2"
            }}
        >
            {state ? actionText : title}
        </Button>
    )
}

const CircularIconButton = ({
    size = 0.7,
    color = '',
    title = 'Click me',
    backgroundColor = "",
    icon = "solar:copy-line-duotone",
    loading = false,
    onClick = () => { }
}) => {
    const iconColor = color ? color : "#f2f2f2"
    const bgColor = backgroundColor ? backgroundColor : "#030303"
    const buttonStyle = { backgroundColor: bgColor, padding: "6px" };

    const iconIcon = loading ? "svg-spinners:90-ring-with-bg" : icon;

    return (
        <Tooltip title={title}>
            <IconButton style={buttonStyle} onClick={onClick}>
                <Icon icon={iconIcon} width={`${size}em`} height={`${size}em`} style={{ color: iconColor }} />
            </IconButton>
        </Tooltip>
    );
}

export { ActionButton, CircularIconButton };
