/*
    whisper: cadena de texto que representa lo que la víctima intentó decir antes de morir

    suspects: lista de cadenas que representa los nombres de todos los sospechosos.

    Hay que tener que el susurro whisper tiene algunas reglas:

    - Cada ~ representa una letra incierta en el susurro.
    - Cada posición del susurro es una posición del nombre del asesino.
    - La longitud del whisper no siempre representa la longitud completa del nombre, 
      ya que la víctima pudo haber muerto antes de terminar de decirlo.
    - Pero si el último carácter del susurro es una $, entonces el nombre del asesino terminaba ahí.
    - ¡Tu objetivo es descubrir quién pudo ser el asesino! 
    
    Debes devolver:
    - Si solo un nombre encaja con el patrón del susurro, retorna ese nombre.
    - Si hay varios nombres que encajan, retorna todos los nombres separados por comas.
    - Si ningún nombre encaja, retorna una cadena vacía ("").
    
    Las mayúsculas y minúsculas de las letras no importan.
*/

function findTheKiller( whisper, suspects ) 
{
  return '';
}