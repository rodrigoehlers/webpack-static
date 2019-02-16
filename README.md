# webpack-static

This is a simple demonstration of how webpack and babel work together to bundle a very simple static react page that should be compatible with old browsers.

## Installation

Clone and install all dependencies with `npm i`.

## Running dev mode

Run `npm run dev` to run development mode.

This will bundle the source files and start a webpack-dev-server which serves the complete dist folder at http://localhost:9898/.

## Building

Run `npm run build` to bundle the source files without serving the dist folder.

Run `npm run build:prod` to do the same while adding minification to the process.
