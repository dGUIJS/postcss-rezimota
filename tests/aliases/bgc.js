import assertTransform from '../helpers/assertTransform.js';

describe( 'bgc', () => {
	it( 'generates background-color declaration from bgc declaration', () => {
		const input = `div {
			bgc: red;
		}`;
		const output = `div {
			background-color: red;
		}`;

		return assertTransform( input, output );
	} );

	it( 'generates background-color declaration from Bgc at-rule', () => {
		const input = `div {
			@Bgc( red );
		}`;
		const output = `div {
			background-color: red;
		}`;

		return assertTransform( input, output );
	} );

	it( 'leaves Bgc at-rule unchanged if it is outside a declaration', () => {
		const input = '@Bgc( red )';
		const output = input;

		return assertTransform( input, output );
	} );
} );
