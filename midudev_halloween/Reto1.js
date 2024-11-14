/*
    Durante la noche de Halloween 🎃, una bruja 🧙‍♀️ está preparando una mezcla mágica. 
    Tiene una lista de pociones, cada una con un poder asociado, y quiere combinar 
    dos de ellas para obtener un poder total específico.

    Dada una lista de enteros donde cada número representa el poder de una poción 🧪 
    y un número entero que representa el poder objetivo, debes encontrar el índice 
    de las dos primeras pociones que sumen exactamente el poder objetivo.

    Si no se encuentra ninguna combinación, devuelve undefined.

    En el caso que haya más de una combinación posible, 
    selecciona la combinación cuya segunda poción aparezca primero en la lista.
*/

const potions = [ 4, 5, 6, 2 ];
const goal = 8;

function createMagicPotion( potions, target ) 
{
    const seen = new Map();

    for( let i = 0 ; i < potions.length ; i++ )
    {
        const currentPotion = potions[i];
        const complement = target - currentPotion;

        if( seen.has( complement ) )
        {
            return [seen.get( complement ), i];
        }

        seen.set( currentPotion, i );
    }
}

createMagicPotion( potions, goal );