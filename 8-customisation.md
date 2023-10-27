📋 Lekcja 8.1.: Konfiguracja vim-a

Na samym początku kopiowaliśmy pewne ustawienia do waszych edytorów.

Jetbrains:

```
set number
set clipboard

" faster movement to end and beggining of the line
noremap H ^
noremap L $

" faster movement to down and up
noremap J 9j
noremap K 9k
...
```

W tym pliku możemy zmieniać zachowanie samego edytora, jak i różne skróty klawiszowe.

📋 1. `set`
Vim ma ogromną liczbę różnych konfiguracji zachowania edytora. Zmieniamy je dodając do
pliku konfiguracyjnego linie zaczynające się od `set` jak np. `set clipboard` które kontroluje to
czy `y` powinien kopiować zawartość do globalnego rejestru czy nie. `set smartcase` kontroluje to,
jak wyszukiwane będą słowa przy użyciu `/`.
Jeżeli by was denerwowało jakieś zachowanie vim-a, możecie sprawdzić w internecie czy przypadkiem
nie ma opcji, która by to kontrolowała

📋 2. Skróty klawiszowe
Jeżeli nie podoba nam się jakiś wbudowany skrót klawiszowy, możemy go zmienić na każdy inny.
W powyższym przykładzie mam kilka skrótów klawiszowych, np. `noremap J 9j`.
`noremap J 9j` -> (`normal no recursive map J to 9j`) czyli za każdym razem gdy wciśniemy `J` wykonaj 9j
`vnoremap p "_dP` -> (`visual no recursive map p to "_dP`) czyli po wklejeniu w visual mode nie nadpisuj rejestru
Można też nadpisywać skróty w insert mode, np.
`inoremap jk <esc>` - (`insert no recursive map jk to <esc>`) czyli jeżeli w normal mode wciśniemy `jk` przejdź do normal mode.

No plugins
dd i yy do sekcji kopiowania
skrot do nastepnego errora
📋 3. Rozszerzenia

https://github.com/JetBrains/ideavim/wiki/IdeaVim-Plugins
