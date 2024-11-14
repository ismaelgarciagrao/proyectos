const readFile = async ( file ) => {
    // read file using fetch
    const response = await fetch( file );
    const data = await response.text();

    // separate lines
    const lines = data.split( '\n' );
    
    let validLines = 0;
    let invalidLines = 0;

    lines.forEach( line => {

        // check line is lowercase and only have letters and digits
        if( !/[a-z0-9]/.test( line ) )
        {
            invalidLines++;
        }

        let hasSeenLetter = false;
        let hasSeenDigit = false;
        let previousChar = '';
        let previousDigit = -1;
        let isValid = true;

        for( let char of line )
        {
            // check char is a number
            if( /[0-9]/.test( char ) )
            {
                hasSeenDigit = true;

                // if we see a letter, find a number is invalid
                if( hasSeenLetter )
                {
                    isValid = false;
                    break;
                }

                // convert to decimal
                const digit = parseInt( char, 10 );
                // check if the digits are ordenated numerically
                if( digit < previousDigit )
                {
                    isValid = false;
                    break;
                }

                previousDigit = digit;
            }
            else if( /[a-z]/.test( char ) ) // check char is a letter
            {
                hasSeenLetter=true;

                if( hasSeenDigit )
                {
                    isValid = false;
                    break;
                }

                // check the letters are ordenated alphabetically
                if( char < previousChar )
                {
                    isValid = false;
                    break;
                }

                previousChar = char;
            }
        }

        isValid ? validLines++ : invalidLines++;
        console.log( `${line} ${validLines}true${invalidLines}false` );

    });

    console.log( `${validLines}true${invalidLines}false` );
}

readFile( './log.txt' );