/*
    La pesadilla está representada por una matriz dream de tamaño n x m 
    donde cada celda es un número positivo que representa el nivel de peligro 
    de esa celda en el sueño.

    Y tienes que devolver el valor total de peligro del camino más seguro 
    de la esquina superior izquierda (posición [0][0]) 
    a la esquina inferior derecha (posición [n-1][m-1]).

    solo puedes moverte hacia la derecha o hacia abajo 
    (no puedes retroceder ni moverte en diagonal) y 
    debes calcular el nivel total de peligro del camino más seguro.
*/
const dream = [
                [1, 3, 1],
                [1, 5, 1],
                [4, 2, 1],
              ];

function findSafestPath( dream )
{
    let rows = dream.length;
    let cols = dream[0].length;

    let damageLevels = [];
    damageLevels[0] = dream[0][0];

    // movimiento a la derecha
    for( let col = 1 ; col < cols ; col++ )
    {
        damageLevels[col] = damageLevels[col - 1] + dream[0][col];
    }

    // movimiento hacia abajo
    for( let row = 1 ; row < rows ; row++ )
    {
        damageLevels[0] += dream[row][0];

        // movimiento hacia la derecha
        for( let col = 1 ; col < cols ; col++ )
        {
            // comparamos menor para camino con menos daño
            damageLevels[col] = Math.min( damageLevels[col], damageLevels[col - 1] ) + dream[row][col];
        }
    }

    return damageLevels[cols - 1];
}