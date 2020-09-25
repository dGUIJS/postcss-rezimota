import { expect } from 'chai';
import postCSS from 'postcss';
import plugin from '../../src/index.js';

async function assertTransform( input, output, {
	pluginOptions = {}
} = {} ) {
	const result = await postCSS( [
		plugin( pluginOptions )
	] ).process( input, {
		from: undefined
	} );

	expect( result.css, 'transformed CSS' ).to.equal( output );
	expect( result.warnings(), 'compilation warnings' ).to.have.lengthOf( 0 );
}

export default assertTransform;
