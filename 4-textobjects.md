📋 Lekcja 4.1.: Textobjects

Textobject to część tekstu.
Vim posiada wiele typów textobject-ów. To jest lista najpopularniejszych typów:
- `"` – double-quoted string
- `'` – single quoted string
- ``` – back quoted string
- `(` – parenthesized block
- `[` – bracketed block
- `{` – brace block
- `w` – word (includes text between white space)
- `t` – single tag

Cały textobject składa się qualifiera (`a` (around) oraz `i` (inside)) oraz typu textobjectu.
Czyli np. 
- żeby zaznaczyć wewnątrz nawiasów okrągłych - `vi(` (visual inside ()) (someVeryLongTextToProveThatYouCanEasilySelectVeryLongText)
- żeby zaznaczyć wewnątrz klamer - `vi{` (visual inside {}) {someVeryLongTextToProveThatYouCanEasilySelectVeryLongText}
- żeby zaznaczyć wewnątrz taga - `vit` (visual inside tag) <button>someVeryLongTextToProveThatYouCanEasilySelectVeryLongText</button>
- żeby zaznaczyć wewnątrz słowa (inner word) - `viw` (visual inside word)

- żeby zaznaczyć cały cudzysłów - `va"` (visual around ()) ("someVeryLongTextToProveThatYouCanEasilySelectVeryLongText")
- żeby zaznaczyć całe klamry - `va{` (visual around {}) {someVeryLongTextToProveThatYouCanEasilySelectVeryLongText}
- żeby zaznaczyć cały tag - `vat` (visual around tag) <button>someVeryLongTextToProveThatYouCanEasilySelectVeryLongText</button>
- żeby zaznaczyć wewnątrz słowa (around word) - `vaw` (visual inside word)

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
Skopiuj zawartość pierwszej kolumny (<Column />) do każdej kolumny w gridzie, zmieniając numer na końcu
na numer kolumny.
Usuń całą ostatnią kolumnę

```tsx
const HomePage: React.FC = () => {
  return <Grid>
      <Column size="12" xlSize="8" className={style.mainColumn}>
        1. Copy this text to every column in the grid and change number.
        This text should be copied to at the same time
      </Column>
      <Column size="12" xlSize="4">
        <HomePageArticleTile />
      </Column>
      <Column size="12" lgSize="4">
        <HomePageCommonTile
          icon="illustrationSmallChart"
          title={i18n('Allegro Ads w Czechach')}
          description={i18n(
            'Poznaj dostępne formy reklamy, z których możesz skorzystać na allegro.cz.',
          )}
          buttonText={i18n('Przejdź do artykułu')}
          buttonLink="https://allegro.pl/dla-sprzedajacych/allegro-ads-na-rynku-czeskim-K6YroKlvdsB"
        />
      </Column>
      <Column size="12" lgSize="4">
        <HomePageCommonTile
          icon="illustrationSmallAllegroCommunity"
          title={i18n('Kurs online w Akademii Allegro')}
          description={i18n(
            'Poszerzaj wiedzę o Allegro Ads za pomocą bezpłatnego kursu online w Akademii Allegro.',
          )}
          buttonText={i18n('Przejdź do kursu')}
          buttonLink="https://allegro.pl/academy/increasing-sales-with-allegro-ads"
        />
      </Column>
      {/* DELETE COLUMN BELOW */}
      <Column size="12" lgSize="4">
        <HomePageCommonTile
          icon="illustrationSmallUserConnected"
          title={i18n('Potrzebujesz pomocy?')}
          description={i18n(
            'Poznaj odpowiedzi na najpopularniejsze pytania dotyczące działania Allegro Ads.',
          )}
          buttonText={i18n('Przejdź do Allegro Pomoc')}
          buttonLink="https://allegro.pl/pomoc/dla-sprzedajacych/allegro-ads"
        />
      </Column>
    </Grid>
};

```

⚡️ Ćwiczenie:

I trochę JSON-a

1. Usuń wszystko w tablicy z klucza `extends`
2. Zmień nazwę klucza `blablabla` na `parser`
3. Usuń cały klucz `parserOptions`
4. Usuń wszystkie elementy w tablicy `plugins`
5. Zamień wartość klucza ze stringa na `{}`
```json
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "@allegro/opbox",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:testing-library/react",
    "prettier"
  ],
  "blablabla": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
      "legacyDecorators": true
    }
  },
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "testing-library",
    "simple-import-sort",
    "@allegro/teal",
    "jest-dom",
    "jest"
  ],
  "rules": "REPLACE THIS STRING TO AN EMPTY OBJECT",
}
```
