import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Popup } from "./Enum";

class Notify {
    success(message, duration = 6000, position = Popup.TOPRIGHT) {
        toast.success(message, {
            position: position,
            autoClose: duration,
        });
    }

    error(message, duration = 6000, position = Popup.TOPRIGHT) {
        toast.error(message, {
            position: position,
            autoClose: duration,
        });
    }

    info(message, duration = 6000, position = Popup.TOPRIGHT) {
        toast.info(message, {
            position: position,
            autoClose: duration,
        });
    }

    warning(message, duration = 6000, position = Popup.TOPRIGHT) {
        toast.warning(message, {
            position: position,
            autoClose: duration,
        });
    }

    loading(action, pending, error, success, duration = 6000) {
        toast.promise(action, {
            pending: pending,
            error: error,
            success: success,
        });
    }
}

const notify = new Notify();
export default notify;
