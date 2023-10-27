📋 Lekcja 7.1.: Zaawansowane rzeczy

Do tej pory nauczyliśmy się wszystkiego co potrzebne nam jest
do normalnej pracy (a nawet trochę więcej). W tej lekcji pokażę kilka technik,
których używam na codzień i przyspieszają pracę, ale nie są niezbędne do używania vim motions.

📋 1. `f` `t` `;` `,`
`f` oraz `t` pozwalają nam szybko poruszać się kursorem w ramach jednej
linii.

- `f<char>` przesuwa nasz kursor w PRAWO do najbliższego znaku `<char>`
- `F<char>` przesuwa nasz kursor w LEWO do najbliższego znaku `<char>`
- `t<char>` przesuwa nasz kursor w PRAWO do jednego znaku PRZED najbliższym znakiem `<char>`
- `T<char>` przesuwa nasz kursor w LEWO do jednego znaku PRZED najbliższym znakiem `<char>`
- `;` przechodzi do następnego znaku który wyszukaliśmy powyższymi komendami
- `,` przechodzi do poprzedniego znaku który wyszukaliśmy powyższymi komendami

Uwaga!
`f<char>` to jest `motion`, więc możemy używać z nim normalnych manipulacji tekstem.
Np. możemy wykonać `dt)` (delete till `)` ) czyli usunąć wszystko do zamkniętego nawiasu

⚡️ Ćwiczenie:

```
1. () - - - - - - - - - (move this to other parenthesis, but not this)

2. ( but not this) - - - - - - - - - ()

3. {} - - - - - - - - - {move this to other brackets, but not this}

4. {move this to other brackets, but not this} - - - - - - - - - {}

5. '' - - - - - - - - - 'move this to other quotes, but not this'

6. 'move this to other quotes, but not this' - - - - - - - - - ''

```

Często jest tak, że w danej linii jest wiele liter, które chcemy wyszukać, przez co
czasem szybciej jest po prostu użyć `w`, dlatego najefektywniejsze wyszukiwanie
tymi znakami będzie wtedy, gdy będziemy szukać znaków specjalnych `(` `{` itp, bo zazwyczaj
nie ma ich więcej niż jeden per linia.

📋 2. `c`
Komenda `change` pozwala nam na szybsze zmienianie części tekstu. `c` jest zamiennikiem `d`,
czyli w każdej komendzie gdzie używaliśmy `d` możemy zamiast tego użyć `c`. Różnica między `d` a `c`
polega na tym, że `c` od razu wchodzi do insert mode po wykonaniu akcji.

Przykład:
Jeżeli chcemy zmienić poniższy typ z `number` na string, możemy albo wykonać:
`diwi` (delete inner word, insert mode) i wpisać `string`, lub możemy to zrobić szybciej
bez wciskania klawisza `i`, czyli: `ciw` i wpisać string. Oszczędzamy przez to jeden keystroke.

```ts
const foo: string = "string";
```

⚡️ Ćwiczenie:
Zamień tekst zgodnie z komentarzami

```tsx
// zamień wartość stringa na `easy to learn`
const vimIs = "very hard to learn";

// zamień wnętrze nawiasów na `value: string`
function addOne(parameter: string) {
  return parameter + 1;
}

// zamień wtętrze testu na `expect(true).toBeTruthy()`
it("should return whole string if no parenthesis are in returned language", () => {
  // when
  const result = trimAccentFromLocale("pl");

  // then
  expect(result).toEqual("pl");
});

const Component = () => {
  // zamień wnętrze buttona na `I will learn vim motions`
  return <button>You will fail learning vim motions</button>;
};
```

Mamy też podobne klucze: `s` i `r`.

- `s` (substitute) - usuwa aktualny znak pod kursorem i przechodzi w insert mode
- `r<char>` (replace) - zastępuje aktualny znak pod kursorem znakiem `<char>`
  które też zmniejszają wymaganą liczbę wciśniętych przycisków o 1.

📋 3. `.` - kropka
Bardzo potężny operator. Pozwala nam wykonać ponownie ostatnią akcję. Wspomniałem
wcześniej o tym, że niektóre akcje mogą być `dot-repeatable`. I tu nauczymy się, co to znaczy.
Powiedzmy, że chcemy zamienić wszystkie poniższe stringi na tę samą wartość `10`. Możemy wchodzić
do wszystkich `''` i po kolei wykonywać `ci'10` (change in '' 10). Ale jak możecie zauważyć,
robilibyśmy tę samą akcję kilkukrotnie. Tu na pomoc przychodzi nam `.` (dot). Po wykonaniu pojedynczej
akcji, możemy wcisnąć tę `.` i ta sama akcja wykona nam się ponownie. Spróbujcie

```ts
const obj = {
  a: "4",
  b: "4",
  c: "4",
  d: "4",
};
```

Uwaga!
Akcje wykonane w visual mode nie są dot-repeatable. Dlatego też `ciw`, `dt(` itp. są
bardzo pożyteczne, bo możemy je łatwo powtarzać

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
    currency: currency()
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

📋 4. Relative jumps
Ciekawym sposobem na poruszanie się w górę i w dół po dokumencie jest technika
relative jumps. Relative jumps pozwala nam ruszyć kursor o dokładną liczbę linii
w górę lub w dół. Robimy to według wzoru.
<liczba linii>j
lub
<liczba linii>k

W konfiguracji została włączona opcja relative numbers. Zamienia ona wszystkie linie
poniżej i powyżej na relatywną liczbę linii od aktualnej linii. Oznacza to że jeżeli chcemy
przejść do danej linii musimy po prostu wpisać linię która jest wpisana w danej linii.

⚡️ Ćwiczenie:
Przejdź po liczbach w kolejność od 0 do 9

```
0

5

9



8




6


3


2


7
4

1
```

Pro tip!
Np. `9j` to jest motion, czyli możemy też usuwać lub kopiować używając tego motiona.
Takie komendy jak `y2j` skopiują dwie całe linie (plus aktualną w dół `y3k` skopiuje linie w górę (plus aktualną) itp
