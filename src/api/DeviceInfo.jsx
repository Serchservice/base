import platform from 'platform';
import axios from 'axios';
import detect from 'detect.js';

const DeviceInfo = async () => {
    // Get platform information
    const platformInfo = platform.parse(navigator.userAgent);
    const detectInfo = detect.parse(navigator.userAgent);

    // Get IP address using an external service
    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    const ipAddress = ipResponse.data.ip;

    const deviceDetails = {
        name: detectInfo.device.family,
        id: null, // You may need a custom logic or unique identifier for this
        ip_address: ipAddress,
        platform: platformInfo.name,
        sdk: null, // SDK information might not be directly accessible from a browser
        host: window.location.hostname,
        operating_system: platformInfo.os.family,
        operating_system_version: platformInfo.os.version,
        local_host_name: window.location.hostname,
    };

    return deviceDetails;
};

export default DeviceInfo;