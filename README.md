# @dGUIJS/postcss-rezimota

[![Build Status](https://github.com/dGUIJS/postcss-rezimota/workflows/CI/badge.svg)](https://github.com/dGUIJS/postcss-rezimota/actions) [![Dependency Status](https://david-dm.org/dGUIJS/postcss-rezimota.svg)](https://david-dm.org/dGUIJS/postcss-rezimota) [![devDependencies Status](https://david-dm.org/dGUIJS/postcss-rezimota/dev-status.svg)](https://david-dm.org/dGUIJS/postcss-rezimota?type=dev) [![codecov](https://codecov.io/gh/dGUIJS/postcss-rezimota/branch/master/graph/badge.svg)](https://codecov.io/gh/dGUIJS/postcss-rezimota) [![npm (scoped)](https://img.shields.io/npm/v/@dguijs/postcss-rezimota.svg)](https://npmjs.com/package/@dguijs/postcss-rezimota)

[PostCSS](https://postcss.org/) plugin for generating your CSS using [ACSS](https://acss.io/) classes.

## Example

Input:

```css
.container {
	@Bgc(red);
	p: 20px;
}
```

Output:

```css
.container {
	background-color: red;
	padding: 20px;
}
```

## Installation

```bash
npm install @dguijs/postcss-rezimota --save-dev
```

## Usage

You can use the plugin with [PostCSS CLI](https://github.com/postcss/postcss-cli).

1. Install the plugin alongside `postcss-cli`:

	```bash
	npm install postcss-cli @dguijs/postcss-rezimota --save-dev
	```

2. Add script for compiling CSS to your `package.json`:

	```json
	"scripts": {
		"build:css": "postcss input.css -u @dguijs/postcss-rezimota -o output.css"
	}
	```

3. Call `npm run build:css`.

## Configuration

No configuration. Consider it a feature.

## License

See [LICENSE](./LICENSE) file for details.
