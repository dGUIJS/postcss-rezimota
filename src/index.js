import { Declaration, Rule } from 'postcss';
import aliases from './aliases.js';

function plugin() {
	return {
		postcssPlugin: 'postcss-rezimota',

		Declaration( declaration ) {
			const alias = getAlias( declaration.prop, aliases );

			if ( !alias ) {
				return;
			}

			declaration.prop = alias;
		},

		AtRule( atRule ) {
			if ( !( atRule.parent instanceof Rule ) ) {
				return;
			}

			const alias = getAlias( atRule.name, aliases );

			if ( !alias ) {
				return;
			}

			const value = parseParams( atRule.params );
			const declaration = new Declaration( {
				prop: alias,
				value
			} );

			atRule.replaceWith( declaration );
		}
	};
}

plugin.postcss = true;

function getAlias( name, aliases ) {
	name = name.toLowerCase();

	return aliases.get( name );
}

function parseParams( params ) {
	return params.replace( /[()]/g, '' ).trim();
}

export default plugin;
