import assertTransform from './assertTransform.js';

function generateTestsForAliases( aliasesMap ) {
	const aliases = [ ...aliasesMap ];

	aliases.forEach( ( [ alias, declaration ] ) => {
		describe( alias, () => {
			const commonOutput = `div { ${ declaration }: hublabubla; }`;

			it( `${ declaration } declaration is generated from ${ alias } declaration`, () => {
				const input = `div { ${ alias }: hublabubla; }`;
				const output = commonOutput;

				return assertTransform( input, output );
			} );

			it( `${ alias } declaration is case insensitive`, () => {
				const input = `div { ${ shuffleCase( alias ) }: hublabubla; }`;
				const output = commonOutput;

				return assertTransform( input, output );
			} );

			it( `${ declaration } declaration is generated from @${ alias } at-rule`, () => {
				const input = `div { @${ alias }( hublabubla ); }`;
				const output = commonOutput;

				return assertTransform( input, output );
			} );

			it( `@${ alias } at-rule is case insensitive`, () => {
				const input = `div { ${ shuffleCase( alias ) }: hublabubla; }`;
				const output = commonOutput;

				return assertTransform( input, output );
			} );

			it( `@${ alias } at-rule is left unchanged if it is outside a rule`, () => {
				const input = `@${ alias }( hublabubla );`;
				const output = input;

				return assertTransform( input, output );
			} );
		} );
	} );
}

function shuffleCase( string ) {
	return [ ...string ].map( ( char, i ) => {
		const isEven = i % 2 === 0;

		if ( isEven ) {
			return char.toUpperCase();
		}

		return char.toLowerCase();
	} ).join( '' );
}

export default generateTestsForAliases;
