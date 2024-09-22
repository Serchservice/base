const Util = {
    formatDate(dateString) {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
    }
};

export default Util;