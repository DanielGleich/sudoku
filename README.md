1. Schuljahr (Ausbildung als staatlich geprüfter informationstechnischer Assistent)

Da wir im Unterricht TicTacToe programmiert haben, interessierte mich kurz draufhin der Algorithmus zum Erstellen eines Sudoku-Spiels.
Scripttechnisch wollte ich zuerst zufällig ein fertiges Feld generieren lassen und dann Zahlen rausnehmen und das Spiel kann beginnen.

Das Array numberPool enthält alle Zahlen in einem Sudoku-Spiel (9x jeweils 1 bis 9)
Die Zahl numberPoolIndex ist dafür da, um Zahlen einzeln aus dem Pool zu ziehen.

printSdkField( fieldNbr ) Die Funktion erstellt ein 3x3 Feld ("SdkField") und returnt es dementsprechend. Die felder bekommen eine id von 0 bis 8

printSdkGame() erstellt das ganze Spielfeld und es wird auf die Seite geprintet.

generateNumberPool() befüllt das Array numberPool

pickNumberOutPool() nimmt eine Zahl aus dem Pool bis das Ende des Pools erreicht ist

Da die IDs von den einzelnen Zellen umständlich gehandhabt sind wurden returnRow und returnCol erstellt um die "globale ID" zu ermitteln

Die Ids setzen sich zusammen aus "g0r0c0" G = group (3x3 Feld; möglich 0-8), R = row (Reihe in der Group; möglich 0-2); C = column (Spalte in der Group; möglich 0-2)

returnGroup(row, cell) returnt die Gruppe, wenn man die "globale" ID angibt.

returnFieldID(row, cell) returnt den ID-Namen von den gebenennen "globalen" IDs

isCellFilledWith(id,number) guckt bei gegebener ID nach ob gegebene Nummer eingetragen ist

fillSingleSdkField(group,row,cell,nbr) nbr wird in Feld abhängig von group, row und cell (column) eingetragen

isGroupReadyForFill(group, nbr) guckt nach ob in der Gruppe group die Nummer nbr ist (returnt bool)

isCellReadyForFill(group, row, col, nbr) guckt nach ob die Zahl in der ganzen Reihe/Spalte vorhanden ist (returnt bool)

fillWholeField() soll dann das ganze Feld ausfüllen, wird aber im Projekt nicht benutzt.


Auf der Seite ist ein Fill-Button, wo eine einzige Zahl ins Sudoku-Feld eingetragen wird, aber irgendwann wird der Algorithmus zu rechenintensiv als dass wirklich alles ausgefüllt werden könnte. Da mir noch eine Lösung für dieses Problem eingefallen ist, wird das Projekt pausiert.