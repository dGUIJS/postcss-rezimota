import { Declaration } from 'postcss';
import { Rule } from 'postcss';
import aliases from './aliases.js';

function plugin() {
	return {
		postcssPlugin: 'postcss-rezimota',

		Declaration( declaration ) {
			const alias = getAlias( declaration.prop, aliases );

			if ( !alias ) {
				return;
			}

			const newDeclarations = createDeclarations( alias, declaration.value );

			declaration.replaceWith( ...newDeclarations );
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
			const declarations = createDeclarations( alias, value );

			atRule.replaceWith( ...declarations );
		}
	};
}

plugin.postcss = true;

function getAlias( name, aliases ) {
	name = name.toLowerCase();
	const alias = aliases.get( name );

	if ( alias && !Array.isArray( alias ) ) {
		return [ alias ];
	}

	return alias;
}

function createDeclarations( aliases, value ) {
	return aliases.map( ( prop ) => {
		return new Declaration( {
			prop,
			value
		} );
	} );
}

function parseParams( params ) {
	return params.replace( /[()]/g, '' ).trim();
}

export default plugin;
