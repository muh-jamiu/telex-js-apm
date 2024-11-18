# Javascript Telex APM

**Javascript Telex APM** is a lightweight JavaScript package designed to capture and report runtime errors in your web applications. This package simplifies error monitoring by collecting error details and sending them to your specified endpoint or logging them locally for debugging purposes.


## Features

- Capture JavaScript Errors: Automatically listen for global errors and unhandled promise rejections.
- Custom Error Reporting: Configure your own reporting endpoint.
- Contextual Information: Collect error stack traces, browser details, and timestamps.
- Lightweight: Minimal impact on performance.


## Requirements

- Node.js and npm/yarn:


## Installation

- To install the package in your Laravel project, follow these steps:

### 1. Install via npm or yarn

- Run the following command in your project root directory:

```bash
npm install telex-js-apm
# OR
yarn add telex-js-apm
```

- Install via importing jsdelivr CDN.

```bash
<script src="https://cdn.jsdelivr.net/npm/telex-js-apm@1.0.4/src/error-monitor.js"></script>
```


## Usage

- Import and initialize the error monitor in your application base layout:

```bash
new ErrorMonitor({
    api_url: 'your_api_url',
    app_name: 'your_appname',
});
```


## Reporting Endpoint

- If api_url is specified, the package sends a POST request with the following JSON payload:

```bash
{
  "message": "Formatted error message",
  "event_name": "Error type",
  "username": "your_app_name",
  "status": "error",
}
```


## Deployment

To contribute or modify the package:

### 1. Clone the Repository

```bash
git clone https://github.com/muh-jamiu/telex-js-apm
cd telex-js-apm
```

### 2. Install Dependencies

Install dependencies using Composer:

```bash
npm install
```

### 3. Build the package

```bash
npm run build
```


## View package on npm platform.

Visit [here](https://www.jsdelivr.com/package/npm/telex-js-apm)


## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.


## Issues

If you encounter any issues, please feel free to [open an issue](https://github.com/muh-jamiu/telex-js-apm/issues) on GitHub.


## License

This package is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).


## Contact

For more information or support, please reach out to:

- **Email:** [ganiujamiu03@gmail.com](mailto:ganiujamiu03@example.com)
- **GitHub:** [Ganiu Jamiu](https://github.com/muh-jamiu)
