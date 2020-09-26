import aliases from './aliases.js';

function plugin() {
	return {
		postcssPlugin: 'postcss-rezimota',
		Declaration( declaration ) {
			if ( !aliases.has( declaration.prop ) ) {
				return;
			}

			declaration.prop = aliases.get( declaration.prop );
		}
	};
}

plugin.postcss = true;

export default plugin;
