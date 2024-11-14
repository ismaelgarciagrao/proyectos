/*
    Dadas dos cadenas de texto zombies y humans, donde cada dígito (del 1 al 9) 
    representa el poder de ataque de un combatiente, determina quién queda al final y 
    con cuánto poder de ataque.

    Importante: Las dos cadenas siempre tendrán la misma longitud.

    La salida es una cadena de texto que representa el resultado final de la batalla.

    Si queda un zombie, devuelve su poder seguido de "z", por ejemplo "3z".
    Si queda un humano, devuelve su poder seguido de "h", por ejemplo "2h".
    Si hay un empate y ninguno queda con poder al final, devuelve "x".
*/
const zombies = '242';
const humans = '334';

function battleHorde( zombies, humans ) 
{
    // comprobamos longitud de cadenas
    if ( zombies.length !== humans.length ) 
    {
        return 'x';
    }

    let diferencia = 0;

    for ( let i = 0; i < humans.length; i++ )
    {
        // aumentamos diferencia ( si ganan los humanos aumentará, de lo contrarió, se reducirá )
        diferencia += humans[i] - zombies[i];
    }

    return diferencia === 0 ? 'x' :
            Math.abs( diferencia ) + ( diferencia > 0 ? 'h' : 'z' );
}

const result = battleHorde(zombies, humans);

console.log(result);