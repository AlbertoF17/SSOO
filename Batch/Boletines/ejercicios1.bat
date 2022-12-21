echo "A. Escriba un directorio como el de la imagen"
cd
mkdir Desktop
cd Desktop
mkdir DAM
mkdir PERSONAL
cd DAM
mkdir sistemas
PAUSE

echo "B. En la carpeta DAM cree un archivos local.txt con la ubicación actual suya (te la da el comando cd)"
::cd Desktop/DAM
cd > local.txt
PAUSE

echo "C. Mueve local.txt a la carpeta 'sistemas'"
move local.txt sistemas
PAUSE

echo "D. Copie local.txt a la carpeta 'PERSONAL'"
copy sistemas\local.txt ..\..\Desktop\PERSONAL
PAUSE

echo "E. Cree un documento con la información que sale en pantalla del comando XCOPY cuando usas 'help'. Este archivo se llamará 'infoxcopy' y aparecerá en una carpeta nueva en el directorio sistemas"
mkdir sistemas\nuevaCarpeta
help xcopy > sistemas\nuevaCarpeta\infoxcopy.txt
PAUSE

echo "F. Cree una carpeta “NOTAS” en el directorio PERSONAL"
mkdir ..\PERSONAL\NOTAS
PAUSE

echo "G. Busque las opciones para copiar directorios y subdirectorios, excepto los vacíos.Haga la prueba con el directorio PERSONAL"
cd ..\..\
xcopy Desktop\PERSONAL DESKTOP /S
PAUSE

echo "H. Busque las opciones para copiar directorios y subdirectorios, incluido los vacíos.Haga la prueba con el directorio PERSONAL"
xcopy Desktop\PERSONAL DESKTOP /E
PAUSE

echo "I. Cree una carpeta DAM en el escritorio"
mkdir Desktop\DAM2
PAUSE

echo "J. Copie el directorio entero DAM al escritorio ¿Que pasa?"
xcopy Desktop\DAM Desktop\DAM2 /E
echo "Respuesta. Por defecto xcopy copia archivos, no directorios. Hay que usar /E. Tambien hace un cambio de atributos por defecto (System y Hidden)"
PAUSE

echo "K. Copie del directorio entero DAM a otra carpeta en el escritorio que NO ESTE CREADA. Esta carpeta se llamará COPIA"
echo "Tras el siguiente comando, pulse d y enter"
xcopy Desktop\DAM Desktop\COPIADAM /E
PAUSE

echo "L. Copie un archivo que no existe de la ubicación COPIA al escritorio. NOTA : que no se te olvide la extensión."
xcopy Desktop\COPIADAM\noexiste.txt Desktop\PERSONAL\NOTAS
echo "No se puede copiar un archivo que no existe"
PAUSE

echo "M. Cree un documento con la información que sale en pantalla del comando ROBOCOPY cuando usas 'help'. Este archivo se llamará 'inforobocopy' y aparecerá en una carpeta nueva en el directorio sistemas"
mkdir Desktop\DAM\sistemas\ROBOCOPY
help robocopy > Desktop\DAM\sistemas\ROBOCOPY\inforobocopy.txt
PAUSE

echo "N. Realice los ejercicios j), k) y l) de nuevo con el comando ROBOCOPY"
echo "j)"
robocopy Desktop\DAM Desktop\DAM2 /E
echo "k)"
robocopy Desktop\DAM Desktop\DAM2 /E
echo "l)"
robocopy Desktop\COPIADAM\noexiste.txt Desktop\PERSONAL\NOTAS
echo "No se puede copiar un archivo que no existe"
PAUSE

echo "O. Cree un documento con la información que sale en pantalla del comando DEL cuando usas 'help'. Este archivo se llamará 'infodel' y aparecerá en una carpeta nueva en el directorio sistemas"
mkdir Desktop\DAM\sistemas\INFODEL
help del > Desktop\DAM\sistemas\INFODEL\infodel.txt
PAUSE

echo "P. Cree dos carpeta dentro de la carpeta NOTAS. Una con el nombre 'prac' y otra con 'exam'." 
mkdir Desktop\PERSONAL\NOTAS\prac Desktop\PERSONAL\NOTAS\exam
PAUSE

echo "Q. Cree una copia del directorio sistemas en la carpeta exam."
robocopy Desktop\DAM\sistemas Desktop\PERSONAL\NOTAS\exam /E
PAUSE

echo "R. Renombre la carpeta NOTAS a notasbasura"
rename Desktop\NOTAS notasbasura
PAUSE

echo "S. Borre la carpeta NOTAS"
rd /S Desktop\NOTAS
echo "No se puede borrar porque ya no existe con ese nombre"
rd /S Desktop\notasbasura
PAUSE

echo "T. Cree un documento con la información que sale en pantalla del comando REN o RENAME cuando usas 'help'. Este archivo se llamará 'inforen' y aparecerá en una carpeta nueva en el directorio sistemas"
mkdir Desktop\DAM\sistemas\RENAME
help ren > Desktop\DAM\sistemas\RENAME\inforen.txt
PAUSE

echo "U. Cree un documento con la información que sale en pantalla del comando TYPE cuando usas 'help'. Este archivo se llamará 'infotype' y aparecerá en una carpeta nueva en el directorio sistemas"
mkdir Desktop\DAM\sistemas\INFOTYPE
help type > Desktop\DAM\sistemas\INFOTYPE\infotype.txt
PAUSE

echo "V. Visualice el contenido del achivo infodel de la carpeta sistemas en consola. No es lo mismo que abrir el archivo. "
type Desktop\DAM\sistemas\INFODEL\infodel.txt
PAUSE

echo "W. Visualice el contenido de los archivos “inforobocopy” e inforen de la carpeta sistemas en consola. No es lo mismo que abrir el archivo."
type Desktop\DAM\sistemas\ROBOCOPY\inforobocopy.txt
type Desktop\DAM\sistemas\RENAME\inforen.txt
PAUSE