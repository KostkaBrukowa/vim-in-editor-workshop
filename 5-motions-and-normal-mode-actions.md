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
```

⚡️ Ćwiczenie:

Zamieńcie funkcję `currency` na zwykłą zmienną i poprawcie kod.
```tsx
const currency = (market) => {
    return marketToCurrency(market);
};

export const Input: FunctionComponent<Props> = ({
  value,
  buttonAfter,
  clear,
  hint,
  errorText,
  invalid,
  className,
  onClear,
  onFocus,
  onBlur,
  onChange,
  placeholder,
  type,
  disabled,
  autoFocus,
  errorsVisibleOnFocus = false,
  errorsSpacing = false,
}) => {
  const [localValue, setLocalValue] = useState(getValue(value));
  const [focused, setFocused] = useState(false);

  const handleChange = (val: string | number): void => {
    const parsedValue = parseValue(val, currency());

    setLocalValue(parsedValue);
    onChange?.(parsedValue);
  };

  const fieldProps = {
    value: localValue,
    placeholder,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    unit,
    disabled,
    autoFocus,
    valid: !invalidInput,
    currency: currency(),
    pristine: false,
    className: style.field,
    unitClassName: style.unit,
    inputProps: { type, maxLength: currency ? CURRENCY_MAX_LENGTH : null },
  };

  return (
    <div className={className}>
      {unit ? <LocalCurrencyField {...fieldProps} /> : <Field {...fieldProps} />}
      {hint && (typeof hint === 'string' ? <Hint message={hint} /> : <Hint>{hint}</Hint>)}
      <ErrorMessage className={style.error(invalidInput, errorsSpacing)} message={errorText} currency={currency()}/>
    </div>
  );
};

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
