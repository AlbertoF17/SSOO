@echo off

echo Apartado A

pause

set listaA= Uno Dos Tres Cuatro Cinco

for %%x in (%listaA%) do (
    echo %%x
)

echo Done



echo Apartado B

pause

for /l %%x in (0,2,100) do (
    echo %%x
)

echo Done



echo Apartado C

pause

for /l %%x in (1,2,100) do (
    echo %%x
)

echo Done



echo Apartado D

pause

for /l %%x in (10,-1,1) do (
    echo %%x
)

echo Done



echo Apartado E

pause

for /F %%x in (ejemplo.txt) do (
  echo %%x
)

echo Done



echo Apartado F

pause

set listaF= 2 3 4 5 13 23 52 65

for %%x in (%listaF%) do (
    if %%x==13 (echo Existe el numero 13)
)

echo Done



echo Apartado G

pause

set listaG= a e f g h j r v y

for %%x in (%listaG%) do (
    if %%x==h (echo Existe la letra h)
)

echo Done



echo Apartado H

pause

Set Carpeta=%C:\batchprueba%
 
PUSHD %CARPETA%
For /f %%x in ('Dir /B "*.txt" ^| Find /v /C ""') do (
   echo %%x
)

echo Done



echo Apartado I

pause

for /d %%x in (*) do (
    set /a cont+=1
)

echo Numero de carpetas: %cont%

echo Done


echo Apartado J

pause

for /f "tokens=2,5" %%x in (for.txt) do (
    echo %%x %%y
)

echo Done

echo Apartado K

pause

for /f "tokens=3*" %%x in (for.txt) do (
    echo %%x %%y
)

echo Done


echo Apartado L

TITLE Bienvenid@ %USERNAME% a @lm_blog menu


:inicio
SET var=0
echo ------------------------------------------------------------------------------
echo  %DATE% ^| %TIME%
echo ------------------------------------------------------------------------------
echo  1    Opcion 1  
echo  2    Opcion 2  
echo  3    Opcion 3  
echo  4    Salir
echo ------------------------------------------------------------------------------
SET /p var= ^> Seleccione una opcion [1-4]:

if "%var%"=="1" goto op1
if "%var%"=="2" goto op2
if "%var%"=="3" goto op3
if "%var%"=="4" goto salir

::Mensaje de error, validación cuando se selecciona una opción fuera de rango
echo. El numero "%var%" no es una opcion valida, por favor intente de nuevo.
echo.
pause
echo.
goto:inicio

:op1
    echo Ha elegido el apartado J
    echo
        color 08
        for /f "tokens=2,5" %%x in (for.txt) do (
            echo %%x %%y
        )
    echo
    pause
    goto:inicio

:op2
    echo
    echo Ha elegido el apartado K
    echo
        color 09
        for /f "tokens=3*" %%x in (for.txt) do (
            echo %%x %%y
        )
    echo
    pause
    goto:inicio

:op3
    echo
    echo Ha elegido for.txt
    echo
        color 0A
        type for.txt
    echo
    pause
    goto:inicio

:salir
echo Done


echo Apartado M

msg * Joaquin apruebame no uso BRs

pause

echo Done