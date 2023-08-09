📋 Lekcja 5.1.: Motion and normal mode actions
-----

W poprzedniej lekcji nauczyliśmy się, czym są textobjects. Vim posiada też coś
co nazywa się `motions`. Motions to są po prostu komendy, dzięki którym możemy się 

poruszać, czyli: `w`, `b` `j` `k` itp.

-----

Wykonywanie akcji w normal mode.
Zamiast używania visual mode, możemy wykonać akcję od razu na textobject
albo na motion.

Aby to zrobić 
1. wyobraź sobie, że chcesz wykonać akcję w visual mode np. `vi(d`
2. a następnie zamień `v` na akcję - w naszym przykładzie `d`.

`vi(d` -> `di(`
`vi"y` -> `yi"`

Podstawowy wzór na wykonywanie akcji w normal mode to:
<number><command><text object or motion>

Przykłady:
- `diw` (delete inner word)
- `di(` (delete inner `(` )
- `da{` (delete around `{` )
- `dit` (delete inside tag )
- `dw` (delete word)
- `dj` (delete down)
- `de` (delete end)
itp. Dzięki temu będziecie trochę szybciej wykonywać dane akcje i 
te akcje będą `dot-repeatable` (o tym później).

Przykład
```tsx
function foo(parameter1, parameter2) {
    const test  = 10;
    return test;
}
```

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

export function formatMoney(value: string | number | null, options: MoneyOptions = {}): string {
    if (=== null) {
        // ^ paste: 'value' 
        return '';
    }

    const { keepDecimalZeros = true, addCurrencySymbol = true, currencyFromUser } = options;

    const currency = getCurrencyFromStore({ currencyFromUser });
    //                                      ^ - paste: 'currencyFromUser'

    const number = toNumber(value);
    let priceParts = priceFormatter({ , locale: _currentLanguage }).formatToParts(number);
    //                               ^ paste: 'currency'

    const hasDecimalZeros = priceParts.some(
        //                      ^ paste - 'priceParts'
        (part) => .type === 'fraction' && toNumber(.value) === 0,
    //           ^ paste: 'part'                    ^ - paste: 'part'
);

    if (!) {
        //   ^ - paste 'addCurrencySymbol'
        priceParts = priceParts.filter((part) => part.type !== 'currency');
    }

    if (! && hasDecimalZeros) {
        //   ^ - paste 'keepDecimalZeros'
        priceParts = priceParts.filter((part) => part.type !== 'fraction' && part.type !== 'decimal');
    }

    return priceParts.map((part) => (part.value === NBSP ? ' ' : part.value)).join('');
}
```

⚡️ Ćwiczenie:

Zamien zgodnie z komentarzami
```tsx
    <Dialog onClose={onClose} actions={null} disableOverlayClickClose closeIcon open>
      <form className={style.wrapper} onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={style.form}>
          <Heading size="md" level={3}>
            {i18n('Hello world')} {/* change to: 'Uzupełnij dane' */}
          </Heading>
          <Field
            name="name"
            control={helloWorld} {/* change to: 'control' */}
            placeholder={i18n('Wpisz nazwę marki')} {/* change to: 'Wpisz nazwę' */}
            wrapperClassName={style.input}
          />
          <Choice type="checkbox" id="brandForm_foreign" {...register('foreign')}>
            {i18n('Właściciel marki nie ma polskiego NIPu (nie ma oddziału w Polsce)')}
          </Choice>
          <Field
            name="nip"
            control={control}
            placeholder={i18n('Wpisz NIP właściciela marki')}
            wrapperClassName={style.input}
            disabled={foreignValue}
          />
          <Heading size="md" level={3} className={style.logotypesHeader}>
            {i18n('Dodaj logotypy ({currentLogotypesCount}/{maxLogotypesCount})', {
              hello: world, // change to: 'currentLogotypesCount: logotypesCount,' 
            })}
          </Heading>
          <p>
            {i18n(
              'Poprawnie przygotowane logo: wymiary 400x400px, maksymalny rozmiar pliku {maxSize}, obrazek zapisany w formacie JPEG lub PNG.',
              { maxSize: formatFileSize(MAX_SIZE) },
            )}
          </p>
          <Logotypes name="logotypes" control={control} />
          <div className={style.buttonsRow}>
            <Button 
                buttonProps={{ type: 'button' }} {/* change to: 'button' (without parenthesis) */}
                type="secondary" 
                onClick={onClose}
            > 
              {i18n('Anuluj')}
            </Button>
            <Button buttonProps={{ type: 'submit' }} type="secondary" disabled={!formState.isValid}>
              {i18n('Zapisz')}
            </Button>
          </div>
        </div>
        <div className={style.tips}>
          <BrandFormHelp /> {/* change to: '<Tips />' */}
        </div>
      </form>
    </Dialog>
```

-----
📋 Operacje na całych liniach w normal mode
W visual mode mieliśmy skrót `V` który zawsze zaznaczał całe linie. W normal mode też mamy odpowiednik 
operowania na całych liniach.
Są dwa główne skróty o których powinniście pamiętać:
- dd (delete entire line)
- yy (yank entire line)

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
-----
