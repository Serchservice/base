import { Modal, Backdrop } from "@mui/material";
import { ActionButton, CircularIconButton } from "./Buttons";
import React, { useState } from "react";
import { Axios } from "../../api/Axios";
import notify from "../../config/Notify";
import Field from "./Field";

const styles = {
    body: {
        gap: '12px',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        display: 'flex',
        padding: '16px',
        position: 'absolute',
        alignItems: 'flex-start',
        flexDirection: 'column',
        overflow: 'auto',
    },
    header: {
        gap: '12px',
        flex: '0 0 auto',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: "12px"
    },
    headerContent: {
        flex: '1',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
    },
};

const SuggestBox = ({ isOpen, handleClose }) => {
    const [service, setService] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function suggest() {
        setIsLoading(true);
        try {
            const response = await Axios.post("/company/suggest", {
                service: service,
                platform: "Web"
            });
            setIsLoading(false);
            if (response.status === 200 && response.data["code"] === 200) {
                notify.success("Thanks for your suggestion. We appreciate and hope to serve you better with this.");
                handleClose()
            } else {
                notify.error(response.data["message"] ?? "We couldn't log the suggestion you gave. Please try again.");
            }
        } catch (error) {
            setIsLoading(false);
            notify.error(error);
        }
    }

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <div style={{
                ...styles.body,
                backgroundColor: "#ffffff",
                height: "250px",
                width: `${500}px`,
                borderRadius: `${4}px`
            }}>
                <div style={styles.header}>
                    <div style={styles.headerContent}>
                        <span style={{ color: "#050404" }}>Which service would you like us to add?</span>
                    </div>
                    <CircularIconButton
                        icon="lets-icons:close-round"
                        size={1.2}
                        title='Close'
                        onClick={handleClose}
                    />
                </div>
                <Field
                    type="text"
                    isRequired={true}
                    needLabel={true}
                    label="Service"
                    placeHolder="Mechanic"
                    onChange={e => setService(e)}
                />
                <ActionButton
                    onClick={suggest}
                    state={isLoading}
                    title="Submit"
                    icon="solar:arrow-right-up-broken"
                />
            </div>
        </Modal>
    )
}

export default SuggestBox;
