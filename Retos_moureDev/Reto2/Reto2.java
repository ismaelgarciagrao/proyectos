package Retos_moureDev.Reto2;

import java.util.Arrays;

public class Reto2 {
    /*
    * Escribe una función que reciba dos palabras (String) y retorne
    * verdadero o falso (Bool) según sean o no anagramas.
    * - Un Anagrama consiste en formar una palabra reordenando TODAS
    *   las letras de otra palabra inicial.
    * - NO hace falta comprobar que ambas palabras existan.
    * - Dos palabras exactamente iguales no son anagrama.
    */
    public static boolean esAnagrama( String palabra1, String palabra2 )
    {
        if( palabra1.equalsIgnoreCase( palabra2 ) )
        {
            return false;
        }

        char[] arrayPalabraUno = palabra1.toLowerCase().toCharArray();
        Arrays.sort( arrayPalabraUno );

        char[] arrayPalabraDos = palabra2.toLowerCase().toCharArray();
        Arrays.sort( arrayPalabraDos );

        return Arrays.equals( arrayPalabraUno , arrayPalabraDos );
    }

    public static void main(String[] args) 
    {
        System.out.println( esAnagrama( "amor", "mora" ) );
    }
}
