# countless

**countless** is a lightweight browser extension that removes distractions from your Twitter (now X) experience. By stripping away unnecessary elements like view counts, analytics buttons, and sidebar clutter, Countless lets you enjoy a cleaner, more focused social media feed.

## Features

- **Distraction-Free Interface:**  
  Removes view counters, analytics labels, and other distracting elements from your feed.

- **Targeted Element Removal:**  
  - **Views Counter:** Automatically removes any element displaying "Views".  
  - **Grok Elements:** Eliminates buttons and actions related to "Grok", including actions buttons and floating drawers.  
  - **Unwanted Links:** Strips out links leading to explore pages, premium sign-ups, community notes, and more.

- **Clean Layout:**  
  Removes sidebar columns and direct message drawers for a streamlined browsing experience.

- **Supports X.com:**  
  Updated to work with the rebranded [X](https://x.com/) domain, ensuring compatibility with the latest version of Twitter.

- **Real-Time Cleaning:**  
  Uses rapid interval checks (every 50ms) to continuously monitor and remove unwanted elements as you navigate the site.

## How It Works

Countless injects a content script into every page on [x.com](https://x.com). This script scans for and removes specific elements based on their text content, ARIA labels, or data attributes. With functions like `removeViewsElement`, `removeGrokElements`, and others, the extension keeps your interface uncluttered in real time.

## Installation

### Clone the Repository

```bash
git clone https://github.com/mayur57/countless.git
cd countless
```

### Install the Extension

#### For Chrome (or other Chromium-based browsers):

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer Mode** (toggle in the top right).
3. Click **Load unpacked** and select the project directory.

## Usage

Once installed, navigate to [x.com](https://x.com) and enjoy a distraction-free experience. The extension works in the background to remove unwanted elements, giving you a cleaner, more focused interface.

### Popup Interface

When you click on the extension icon, you'll see a simple popup that features:
- A clean, minimalistic design with a transparent background.
- A **Source Code** button that links to the project repository.
- A **Twitter** (X) button for quick navigation.

## Contributing

Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, please follow these steps:

1. Fork the repository.
2. Create a new branch with your feature or fix.
3. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Developed by [Mayur Bhoi](https://mayurbhoi.com/?ref=countless). Feel free to reach out with any questions, feedback, or suggestions.

Enjoy a cleaner, distraction-free browsing experience with **Countless**!

### Donate
<a href="https://www.buymeacoffee.com/mayurbhoi" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
