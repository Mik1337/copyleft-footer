# copyleft-footer

A simple npm package that returns the current year for use in copyright footers.

## Installation

```bash
npm install copyleft-footer
```

## Usage

```javascript
const getCurrentYear = require("copyleft-footer");

// Get the current year
const year = getCurrentYear(); // Returns current year as a number (e.g., 2024)

// Example usage in a copyright footer
console.log(`© ${getCurrentYear()} Your Company Name`);
```

## License

MIT
