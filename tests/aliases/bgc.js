import assertTransform from '../helpers/assertTransform.js';

describe( 'bgc', () => {
	it( 'generates background-color declaration', () => {
		const input = `div {
			bgc: red;
		}`;
		const output = `div {
			background-color: red;
		}`;

		return assertTransform( input, output );
	} );
} );
