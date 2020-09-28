import assertTransform from './assertTransform.js';

function generateTestsForAliases( aliasesMap ) {
	const aliases = [ ...aliasesMap ];

	aliases.forEach( ( [ alias, declarations ] ) => {
		describe( alias, () => {
			if ( !Array.isArray( declarations ) ) {
				declarations = [ declarations ];
			}

			const commonOutput = generateOutput( declarations );

			it( `${ declarations.join( ',' ) } declarations are generated from ${ alias } declaration`, () => {
				const input = `div { ${ alias }: hublabubla; }`;
				const output = commonOutput;

				return assertTransform( input, output );
			} );

			it( `${ alias } declaration is case insensitive`, () => {
				const input = `div { ${ shuffleCase( alias ) }: hublabubla; }`;
				const output = commonOutput;

				return assertTransform( input, output );
			} );

			it( `${ declarations.join( ',' ) } declarations are generated from @${ alias } at-rule`, () => {
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

function generateOutput( expected ) {
	const rules = expected.map( ( declaration ) => {
		return `${ declaration }: hublabubla`;
	} );

	return `div { ${ rules.join( '; ' ) }; }`;
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
