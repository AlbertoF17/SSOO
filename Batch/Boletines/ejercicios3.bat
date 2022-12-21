echo "A. Relice el comando IPCONFIG"
ipconfig
PAUSE
echo "B. Rellene la tabla con datos de otro compañero"
ipconfig /all
PAUSE
echo "C. Realice el comando IPCONFIG que filtre solo las IPv4"
ipconfig /all | find "IPv4"
PAUSE
echo "D. Haga lo mismo filtrando por subred"
ipconfig /all | find "subred"
PAUSE
echo "E. Vuelva a hacer ipconfig pero con información más detallada"
ipconfig /all
PAUSE
echo "F. Extraeremos la descripción de cada adaptador de red"
ipconfig /all | find "Descripción"
PAUSE
echo "G. IPCONFIG es muy potente. Realice ejercicios de práctica con los siguientes atributos del comando:"
echo "/all"
ipconfig /all
::echo "/release"
::ipconfig /release
::echo "/renew"
::ipconfig /renew
echo "/displaydns"
ipconfig /displaydns
echo "/flushdns"
ipconfig /flushdns
::echo "/registerdns"
::ipconfig /registerdns
echo "/showclassid"
ipconfig /showclassid
::echo "/setclassid"
::ipconfig /setclassid
echo "/allcompartments /all"
ipconfig /allcompartments /all
PAUSE
echo "PING"
echo "A. Realice el comando ping para 6 saltos a dos de las dns que se facilitan en el artículo"
ping -i 6 1.1.1.1
ping -i 6 64.6.64.6
::ping -i 6 as.com
PAUSE
echo "B.Realice ahora el comando ping a localhost"
ping localhost
PAUSE
echo "C. Encuentre una DNS que de error al ejecutar el comando ping"
ping 1.2.3.4
PAUSE
echo "D. Haga ping directamente a una web"
ping as.com
PAUSE
echo "E. Saque por pantalla el nombre de su host"
hostname
PAUSE
echo "F. Saque por pantalla el dominio de su pc"
echo %userdomain%
PAUSE
echo "G. Saque por pantalla las direcciones mac de sus adaptadores"
getmac
PAUSE
echo "K. Muestre las estadísticas de sus conexiones"
netstat -e -s
PAUSE
echo "L. Realice el comando tracert a dos webs, una muy conocida y otra cualquiera. Compare resultado"
tracert www.google.com
tracert tiradepapel.com
PAUSE