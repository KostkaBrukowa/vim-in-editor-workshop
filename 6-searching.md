📋 Lekcja 6.1.: wyszukiwanie

Ważnym elementem poruszania się po kodzie jest wyszukiwanie fraz,
zmiennych czy po prostu tekstu. Aby wyszukać dane słowo w dokumencie,
wciskamy przycisk

`/`
lub
`?`.

`/` będzie wyszukiwało nam frazy od kursora w dół a
`?` od kursora w górę. Po wciśnięciu pojawi się nam w lewym dolnym rogu
input, do którego od razu będziemy mogli wpisywać wyszukiwaną frazę.
Wyszukane frazy zostaną podkreślone na inny kolor. Aby przejść do następnego
wyszukania, wciskamy przycisk `n` (next) lub `N` (previous).
W przygotowanej konfiguracji włączyliśmy opcję `smartcase`. Oznacza ona że jeżeli
w wyszukiwaniu nie wpiszemy żadnej dużej litery to vim wyszuka nam tekst `case insensitive`,
a jeżeli w wyszukiwaniu pojawi się duża litera to wyszukiwanie będzie `case sensitive`. Możecie
spróbować wyszukać `lorem` i `Lorem` i zobaczyć różnicę.

Aby usunąć podświetlenie wyszukiwanego słowa, macie dwie opcje:

- `:nohl<enter>`
  lub
- `/xxx<enter>`
  wtedy podświetlenie zniknie

⚡️ Ćwiczenie:

1. Ile razy w poniższym tekście znajdują się dane słowa:

- [lorem]: _
- [dolor]: _
- [in]: _

2. Zamień wszystkie powyższe słowa na ich odwrocone odpowiedniki:

- lorem -> merol
- dolor -> rolod
- in -> ni

```
merol ipsum dolor sit amet, consectetur adipiscing elit. In ut est in urna sagittis pellentesque vel a felis.
Donec mollis lacinia sapien a hendrerit. Fusce quis posuere ipsum, dictum volutpat nisi.
Cras dolor lectus, dictum ac lacinia ac, scelerisque ac neque. Aenean feugiat, libero et venenatis blandit,
felis tellus consequat augue, sit amet condimentum massa ligula ut tellus. Quisque auctor, urna vel tincidunt blandit,
ipsum augue pulvinar nulla, id tincidunt turpis nulla in mi. Fusce posuere merol quis lorem maximus pulvinar.
Donec in egestas lorem. Nullam vestibulum nisi at eros porttitor ullamcorper. Vestibulum eget orci vel risus accumsan
interdum id at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sem ut tempus eleifend, eros ipsum viverra odio,
non gravida turpis nisi non nunc.
Morbi ullamcorper tristique porttitor. Donec pharetra neque pellentesque suscipit pretium. Interdum et malesuada fames
ac ante ipsum primis in faucibus. Nulla a dapibus lectus, et maximus ex. Suspendisse potenti. Donec imperdiet ligula at mauris vestibulum gravida. Curabitur mattis interdum ex. Sed sodales risus mauris, ut rhoncus risus dignissim quis. Phasellus consequat malesuada ante sed maximus.
Mauris ut blandit augue, at scelerisque turpis. Curabitur pharetra interdum sodales. Nunc pretium euismod aliquam.
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut rutrum dignissim purus eu fermentum. Sed massa arcu,
fringilla a augue at, semper hendrerit risus. Nullam luctus sapien eget libero finibus, eget sagittis diam venenatis. Duis lorem erat,
faucibus sit amet mi nec, sodales vestibulum enim. Curabitur vel dui sed orci ultrices dictum. Pellentesque pharetra risus eu malesuada lacinia.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vitae quam metus.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a fermentum dolor,
nec finibus ipsum. Nam congue ultrices lacinia.
Donec ultrices, nulla nec luctus gravida, odio turpis auctor nisl, eu tristique nulla lacus et enim. Aenean tincidunt
neque volutpat dolor fermentum ullamcorper. Nam sagittis aliquet auctor. Nulla venenatis, justo sit amet tincidunt pulvinar,
leo erat lobortis enim, ut elementum felis elit in nisi. Phasellus a magna massa. Sed et dui sodales, auctor odio at, fringilla massa.
Vivamus eu sem ipsum. Aenean condimentum mauris ac gravida pretium.
Fusce eget felis at sapien lobortis rhoncus eu eget leo. Aliquam euismod elementum lorem at tempus. Nam ut magna lorem.
Suspendisse ut augue vulputate, gravida mauris eget, suscipit metus. Ut ornare cursus orci, et facilisis ligula pretium at.
Curabitur fringilla mollis arcu ac aliquam. In hac habitasse platea dictumst. Sed ultricies lobortis enim sit amet faucibus.
Nam in erat non dui posuere convallis non et ligula. Nam nec nisl quis felis auctor ullamcorper non fermentum ligula. Vivamus
auctor rhoncus lacus. Phasellus eget porta augue. Maecenas nec imperdiet justo.
```

Ćwiczenie
Zamieńcie funkcję `currency` na zwykłą zmienną i poprawcie kod.

```tsx
const currency = () => "zł"; // zamień na `'zł'` i popraw kod

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
    const parsedValue = parseValue(val, currency);

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
      {unit ? (
        <LocalCurrencyField {...fieldProps} />
      ) : (
        <Field {...fieldProps} />
      )}
      {hint &&
        (typeof hint === "string" ? (
          <Hint message={hint} />
        ) : (
          <Hint>{hint}</Hint>
        ))}
      <ErrorMessage
        className={style.error(invalidInput, errorsSpacing)}
        message={errorText}
        currency={currency()}
      />
    </div>
  );
};
```

📋 (pro tip: jeżeli najedziecie na słowo i wciśniecie `*` lub `#` od razu zacznie wam się wyszukiwać słowo pod kursorem)

📋 Kolejnym pomocnym narzędziem w wyszukiwaniu jest znak `%`. Przesuwa on nasz kursor na znak,
który jest `match`-em tego, na którym aktualnie się znajdujemy. Np. `match`-em `(` jest `)`,
`{` jest `}` itd.

Aby poćwiczyć ten znak, spróbuj usunąć całe it-y w pierwszym describe.
`describe` używając visual mode.
Usuń wszystko we wszystkich nawiasach (`{}`)w drugim describe.

```tsx
describe("i18n utils", () => {
  describe("getSafeTranslation", () => {
    it("should return a key for non-existent key if no default value is specified", () => {
      // given
      const key = "Non-existent key";

      mockedI18n.mockImplementationOnce(() => {
        throw new Error();
      });

      // when
      const translation = getSafeTranslation(key);

      // then
      expect(translation).toEqual(key);
    });

    it("should return a default value for non-existent key if default value is specified", () => {
      // given
      const key = "Non-existent key";
      const defaultTranslation = "Default translation";

      mockedI18n.mockImplementationOnce(() => {
        throw new Error();
      });

      // when
      const translation = getSafeTranslation(key, defaultTranslation);

      // then
      expect(translation).toEqual(defaultTranslation);
    });
  });

  describe("localeToLanguageNameWithoutCountryName", () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    it("should remove accent", () => );

    it("should return whole string if no parenthesis are in returned language", () => {
      // when
      const result = trimAccentFromLocale("pl");

      // then
      expect(result).toEqual("pl");
    });

    it("should return empty string if returned language is empty", () => {
      // when
      const result = trimAccentFromLocale("");

      // then
      expect(result).toEqual("");
    });
  });
});
```
