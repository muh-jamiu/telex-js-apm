(function (global) {
    class ErrorMonitor {
        constructor(config) {
            this.api_url = config.api_url || null;
            this.app_name = config.app_name || null;

            this.init();
        }

        init() {
            window.onerror = (message, source, lineno, colno, error) => {
                var msg = `Message: ${message} \n Source: ${source} \n Line Number: ${lineno} \n Colno: ${colno} \n Stack: ${error?.stack} \n`
                this.sendError({
                    event_name: 'Js Error',
                    message: msg,                    
                    status: "error",
                    username: this.app_name || "No Name",
                });
            };

            window.addEventListener(
                'error',
                (event) => {
                    if (event.target && (event.target.src || event.target.href)) {                        
                        var msg = `Source: ${event.target.src} \n URL: ${event.target.href} \n Tag: ${event.target.tagName}`
                        this.sendError({
                            event_name: 'Resource Error',
                            message: msg,
                            status: "error",
                            username: this.app_name || "No Name",
                        });
                    }
                },
                true
            );

            window.addEventListener('unhandledrejection', (event) => {
                var msg = `Message: ${event.reason?.message || event.reason} \n Stack: ${event.reason?.stack }`
                this.sendError({
                    event_name: 'Promise Rejection',
                    message: msg,
                    status: "error",
                    username: this.app_name || "No Name",
                });
            });
        }

        sendError(errorData) {
            if (!this.api_url) {
                console.warn('ErrorMonitor: api_url is not configured.');
                return;
            }
        
            const payload = {
                ...errorData,
                timestamp: new Date().toISOString(),
            };
        
            const queryString = new URLSearchParams(payload).toString();

        
            axios.get(`${this.api_url}?${queryString}`)
                .then(response => {
                    // console.log('Error data sent successfully', response);
                })
                .catch(error => {
                    // console.error('Error sending data:', error);
                });
        }
        
        
    }

    global.ErrorMonitor = ErrorMonitor;
})(window);
