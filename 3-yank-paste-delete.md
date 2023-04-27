📋 Lekcja 3.1.: Kopiowanie usuwanie wklejanie

*****

- p - paste
- d - delete
- y - yank (copy) (c jest zarezerwowane dla czegoś innego)

*****

- Jak kopiujemy i wklejamy rzeczy?
1. Upewnij się że jesteś w normal mode - `<esc>` lub wybrany przez ciebie skrót
2. Wciśnij przycisk `v` (wejście do visual mode)
3. Przenieś swój kursor do ostatniego znaku który chcesz skopiować 
4. Wciśnij przycisk `y` (yank)
5. Przejdź do miejsca do którego chciałbyś wklejić skopiowany text.
6. Wciśnij przysisk `p` (paste)

Gratulacje! Właśnie skopiowałeś i wkleiłeś text.

⚡️ Ćwiczenie:
Dodaj `marketplace` do definicji funkcji i użyj jej w samej funkcji.
Użyj do tego visual mode, kopiowania i usuwania. Dodaj typ `: string`
do parametrów

```tsx
const marketplace = 'pl-PL';
const currency = 'zł';
const currencySymbol = getCurrencySymbol(); // dodaj `marketplace` i `currency` do wywołania tej funkcji

export function getCurrencySymbol(): string {
  return (0)
    .toLocaleString(_currentLanguage, {
      style: 'currency',
      currency: 'zł', // <---------------------- zamień stringa na parametr i usuń komentarz
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      locale: 'pl-PL' // <---------------------- zamień stringa na parametr i usuń komentarz
    })
    .replace(/\d/g, '')
    .trim();
}
```

📋 Pro tip: możecie skopiowany text zastąpić zaznaczone słowo. Aby to zrobić:
1. Skopiujcie zaznaczony tekst.
2. Zaznaczcie tekst który chcecie zasąpić
3. Wciśnijcie `p`
I tyle tekst zostanie zasąpiony

```tsx
const marketplace = 'pl-PL';
const currency = 'zł';
const currencySymbol = getCurrencySymbol(); // dodaj `marketplace` i `currency` do wywołania tej funkcji

export function getCurrencySymbol(marketplace: string, currency: string): string {
  return (0)
    .toLocaleString(_currentLanguage, {
      style: 'currency',
      currency: 'zł', // <---------------------- wklej zastępując zaznaczony tekst
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      locale: 'pl-PL' // <---------------------- wklej zastępując zaznaczony tekst
    })
    .replace(/\d/g, '')
    .trim();
}
```

📋 UWAGA!
Gdy usuniecie tekst on automatycznie zostaje skopiowany! Należy na to bardzo uważać
żeby to co znalazło się w waszym schowku nie zostało nadpisane przez usuwanie.

Visual line mode:
Gdy wciśniemy przycisk `V` zaczniemy zaznaczać całe linie. Dzięki temu będziemy mogli
w łatwy i szybki sposób usuwać całe linie, kopiować całe linie, usuwać całe bloki linii.

⚡️ Ćwiczenie:
- usunąć unusedVariables
- przenieść wywołanie metody `pageViewed` do useEffect
- inline title do komponentu `ModuleHeader`

```tsx
const HomePage: React.FC = () => {
  const unusedVariable1 = 1;
  const { type } = useHomePageUserType();
  const location = useLocation();
  const unusedVariable2 = 2;
  const unusedVariable3 = 3;
  const unusedVariable4 = 4;
  const unusedVariable5 = 5;
  const { marketplaceId } = useSelector(selectMarketplace);

  const title = i18n('Witaj w Allegro Ads!'); // <------ inline the variable into ModuleHeader

  HomePageEvents.pageViewed(location, marketplaceId, type);
  useEffect(() => {
  }, [location, marketplaceId, type]);

  return (
    <>
      <ModuleHeader>{title}</ModuleHeader>
      <MarketSwitcher className={style.marketSwitcher} />
      <HomePageContent />
    </>
  );
};

```

📋 Różnica między `p` a `P`.
`p` wkleja przed kursorem, a `P` wkleja za kursorem.

```ts
const ten = 10;
twelve = 12;
thirteen = 13;
fourteen = 14;
fifteen = 15;

function foo(firstArgument, ) {}
```

📋 Rejestr VIM-owy i rejestr globalny.
Używając vim-owych pluginów zazwyczaj dostajemy w prezencie dodatkowy schowek. Ten schowek przechowuje
wszystkie rzeczy które skopiowaliśmy w instancji pluginu. Czyli jeżeli teraz skopiujemy całą linię `yy` (yank line)
używając vimowego skrótu ten skopiowany tekst znajdzie się w schowku pluginu. wykonanie skrótu systemowego
`cmd+v` nie wklei tej linii. Aby skopiować coś do schowka systemowego używamy po prostu `cmd+c` a żeby wkleić `cmd+v`.

-------------------------------

Po tej lekcji powinniście moc już normalnie wykonywać większość rzeczy związanych z edytowaniem tekstu.
Teraz jeszcze raz zmierzymy szybkość edytowania tekstu, ale tym razem używając visual mode i vim motions.