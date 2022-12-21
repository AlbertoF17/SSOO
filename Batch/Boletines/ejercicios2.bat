echo "A. Mover los directorios que empiezan por A en 'destino'"
mkdir Desktop\destino
echo "hola" > Desktop\A.txt
echo "hola" > Desktop\AA.txt
echo "hola" > Desktop\AAA.txt
move Desktop\A* Desktop\destino
PAUSE

echo "B. Copiar los directorios archivos que acaban en s en 'destino'"
echo "hola" > Desktop\s.txt
echo "hola" > Desktop\as.txt
echo "hola" > Desktop\sa.txt
echo "hola" > Desktop\asa.txt
echo "hola" > Desktop\aas.txt
copy Desktop\*s.* Desktop\destino
PAUSE

echo "C. Saque por pantalla solo los directorios que empiezan por D en 'destino'"
echo "hola" > Desktop\destino\D.txt
echo "hola" > Desktop\destino\De.txt
dir Desktop\destino\D*
PAUSE

echo "D. Copie solo aquellos que directorios que tengan sólo 5 caracteres, en 'destino'"
echo "hola" > Desktop\bbb.txt
echo "hola" > Desktop\bbbbb.txt
echo "hola" > Desktop\bbbbbbbb.txt
xcopy Desktop\?????.* Desktop\destino
PAUSE

echo "E. Eliminar los archivos que acaben en .txt"
del Desktop\destino\*.txt
PAUSE

echo "F. Copiar todos los directorios cuyo nombre al menos tenga 4 caracteres."
xcopy Desktop\???* Desktop\destino
PAUSE