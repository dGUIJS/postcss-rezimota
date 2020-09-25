import { expect } from 'chai';
import plugin from '../src/index.js';

describe( 'plugin', () => {
	it( 'is a function', () => {
		expect( plugin ).to.be.a( 'function' );
	} );

	it( 'returns object with name property set to postcss-rezimota', () => {
		const pluginObject = plugin();

		expect( pluginObject ).to.be.an( 'object' );
		expect( pluginObject.postcssPlugin ).to.equal( 'postcss-rezimota' );
	} );
} );
