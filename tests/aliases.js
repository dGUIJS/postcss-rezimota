import generateTestsForAliases from './helpers/generateTestsForAliases.js';
import aliases from '../src/aliases.js';
import assertTransform from './helpers/assertTransform.js';

describe( 'aliases', () => {
	generateTestsForAliases( aliases );

	describe( 'unknown alias', () => {
		it( 'is left unchanged in declaration form', () => {
			const input = 'div { totallyunknownalias: hublabubla; }';
			const output = input;

			return assertTransform( input, output );
		} );

		it( 'is left unchanged in at-rule form', () => {
			const input = 'div { @totallyunknownalias( hublabubla ); }';
			const output = input;

			return assertTransform( input, output );
		} );
	} );
} );
