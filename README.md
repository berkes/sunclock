# Sun Clock

A clockface visualising the sunup, sundown, twighlight times.

Intended as clock face for my fitbit.

## SVG

## HTML

For debugging and visualising, the SVG is embedded in HTML so that we can use
CSS, Javascript and open it in a browser.

## Tools

* `just` — wraps all dev, build, and deploy steps (see Quickstart).
* `esbuild` — bundles TypeScript into a single JavaScript file; no minification in dev.
* `browser-sync` — local dev server with live reload.
* `typescript` — for type checking and editor tooling (`tsc --noEmit`).

## Quickstart

Requirements:

* A modern web browser — recent Firefox (June 2026)
* A POSIX-compliant OS — Windows is not currently supported as a development platform
* Common dev tools: `git`, editor, etc.
* [Node.js](https://nodejs.org/) v20+ and [Yarn](https://classic.yarnpkg.com/) 1.x
* [just](https://just.systems/) command runner

### Install

In order to install the platform on development machine, run

    just install

This installs and configures the dependencies.


### Run

After installing the dependencies, on the development machine, run

    just

This builds the project once and starts the dev server with live reload at
`http://localhost:3000`.

For all available recipes and their descriptions, run

    just --list

### Release

TODO

After finishing the changes, a release can be prepared with

    just release

This uses amongst others, git-flow to create and tag a new release. It
bumps the version number. Add `VERSION=x.y.z-special` to set a specific
version, instead of incrementing the next minor version (1.2.3 -> 1.3.0)

### Deploy

TODO

## Roadmap

- [x] Boilerplate HTML, CSS, TS With TS builder
  - [x] Initialise yarn project (`package.json`)
  - [x] Add `esbuild` and `browser-sync` as dev dependencies
  - [x] Create project structure (`src/`, `dist/`)
  - [x] Add boilerplate TypeScript entry point (`src/main.ts`)
  - [x] Add boilerplate HTML (`src/index.html` / served from `dist/`)
  - [x] Add boilerplate CSS (`src/style.css`)
  - [x] Configure esbuild to bundle TS into a single JS with `--watch`
  - [x] Add `just` recipes: `install`, `build`, `watch`, `dev` (serve + reload)
  - [x] Verify dev server serves on localhost with hot reload
  - [x] Update README Quickstart/Tools to reflect esbuild + browser-sync
- [x] Initial SVG drawing a simple clock
- [ ] Add date
- [ ] Add a sun-dial visual
- [ ] Calculate sunup, sundown, etc based on lat/lon location
- [ ] Allow setting of location manually
- [ ] Click to toggle sunup/sundown times
