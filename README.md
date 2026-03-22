# Hello Skoop - Digital Signage App

A simple "Hello World" application designed for Skoop digital signage, demonstrating the data-driven architecture.

## Features
- **Data-Driven**: All content and styles (colors, logos, text) are managed via `data.json`.
- **Signage-Optimized**: Implements the `opacity: 0` pattern to prevent style flashing on hardware.
- **Responsive**: Adapts to various screen dimensions.
- **Cache-Aware**: Uses versioning and meta tags to ensure content stays fresh.

## File Structure
- `index.html`: Entry point.
- `data.json`: Schema and content definitions.
- `styles.css`: Layout and visual styling using CSS variables.
- `script.js`: Data fetching and rendering logic.
- `assets/`: Directory for binary files (logos, etc.).

## Customization
To change the appearance or content, modify `data.json`. The application will automatically reflect these changes on reload.
