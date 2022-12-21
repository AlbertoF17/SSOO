echo "A. Realice el comando find /? y guarde el resultado en un documento de texto"
find /? > find.txt
PAUSE
echo "B. Realice el comando dir para su actual ubicación y guarde el resultado en un documento de texto"
dir > dir.txt
PAUSE
echo "C. Visualice el documento del apartado b) , vea si hay alguna línea que contenga la palabra <DIR>. Si es correcto, ejecute el comando “find” para que salga por pantalla las líneas que contenga la palabra DIR. "
type dir.txt
find "DIR" dir.txt
PAUSE
echo "D. Visualice el documento del apartado b) , vea si hay alguna línea que contenga un formato de hora( por ejemplo 12:30; 0 12:00) . Si es correcto, ejecute el comando “find” para que salga por pantalla las líneas que contenga este formato"
type dir.txt
findstr ":[0-5][0-9]" dir.txt
PAUSE
echo "E. Guarde el resultado del apartado d) en un archivo"
findstr ":[0-5][0-9]" dir.txt > findHora.txt
PAUSE
echo "F. Pruebe que puede hacer los pasos del apartado d) y e) en una única línea"
type dir.txt & findstr ":[0-5][0-9]" dir.txt > findHora.txt
PAUSE
echo "G. En un ejercicio te dicen que uses “find” con el atributo que cuente líneas. Tu no te acuerdas en ese momento. Pero sabes que el apartado a) creaste un documento con la ayuda de cmd de este comando . Busque con el comando find y usando la palabra “línea” dicho atributo."
find "linea" find.txt
PAUSE
echo "H. Ya sabes resolver el ejercicio para contar líneas: Cuenta las líneas del archivo del apartado b)  que contengan la palabra 'dir'."
find /C "DIR" dir.txt
PAUSE
echo "I. Desde el departamento de seguridad te piden que guardes en un documento de texto los datos detallados de tu configuración IP. Después, que a este documento le agregues al final del documento, el número de líneas que contiene. A continuación, debes crear otro documento SÓLO con la dirección IPv4 de tu ordenador. Para asegurarte que ambos documentos se han creado, use el comando TYPE para visualizarlos. "
ipconfig /all > ipconfig.txt
find /V /C "" ipconfig.txt >> ipconfig.txt
find "IPv4" ipconfig.txt > IPv4.txt
type ipconfig.txt
type IPv4.txt
PAUSE
echo "J. ¿Cuántas líneas de código has usado en el ejercicio anterior? Mejora  tu programación para que sea eficiente. NOTA: use el símbolo “|” tubería."
ipconfig /all > ipconfig.txt 
find /V /C "" ipconfig.txt >> ipconfig.txt | find "IPv4" ipconfig.txt > IPv4.txt | type ipconfig.txt
type IPv4.txt
PAUSE
echo "K. Cree un documento con el contenido que sale por pantalla ejecutando el comando “help” y busque todos los comandos relacionados con la palabra 'directorio'"
help > help.txt
find "directorio" help.txt
PAUSE