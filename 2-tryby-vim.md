📋 2. Tryby w VIM

### Normal mode
Normal mode to domyślny tryb w Vim.
W normal mode możesz nawigować, wyszukiwać i edytować tekst.
W poprzedniej lekcji cały czas znajdowaliśmy cały czas w normal mode.
Aby przejść do normal mode, naciśnij klawisz Esc.
Możesz również używać poleceń Vim do manipulacji tekstem, takich jak usuwanie, kopiowanie lub wklejanie tekstu.

### Visual Mode
W visual mode możesz zaznaczać i manipulować tekst. Zupełnie jak myszką.
Visual mode jest bardzo pomocnym narzędziem żeby szybko zacząć używać vima
ponieważ praca w visual mode jest bardzo podobna do używania myszki.
Aby przejść do visual mode, naciśnij klawisz `v` lub `V` z normal mode.
Gdy jesteś w visual mode, używaj klawiszy poruszania się (h,j,k,l,w,e,b...), aby wybrać odpowiedni tekst.
Możesz również użyć visual mode do wyboru tekstu w prostokącie, naciskając Ctrl+v.
Następnie możesz użyć poleceń Vim do manipulacji wybranym tekstem, takich jak kopiowanie, wycinanie lub wklejanie.
Aby wyjść z visual mode, naciśnij klawisz Esc.

Ćwiczenie w następnym rozdziale.

### Insert mode
Insert mode służy do wstawiania nowego tekstu do dokumentu.
Aby przejść do insert mode, naciśnij klawisz `i`, `a` lub `A` z normal mode.
Gdy jesteś w insert mode, możesz wprowadzać nowy tekst bezpośrednio do dokumentu.
Możesz użyć klawisza Esc, aby wyjść z insert mode i powrócić do normal mode.

⚡️ Ćwiczenie:

Wpisz tekst w odpowiednie miejsca wskazane przez komentarze. Aby wejść do 
insert mode, wciśnij `i` albo `a`. Gdy wpiszesz odpowiedni tekst wyjdź z insert 
mode `esc` i przejdź do następnego miejsca.

- i (insert) - przechodzi do insert mode **W** kolumnie w której jest kursor
- a (append) - przechodzi do insert mode **ZA** kolumną w której jest kursor
- A (append end of line) - przechodzi do insert mode na końcu linii

```tsx
const languageIntl = new Intl.DisplayNames(_currentLanguage, { type: '' });
//                                                                   ^ - wpisz tu `language`
const regionIntl = new Intl.DisplayNames(_currentLanguage, { type: '' });
//                                                                 ^ - wpisz tu `region`

export function trimAccentFromLocale(locale: string):
//                                                   ^ - wpisz tu `string {`
  const dashIndex = locale?.indexOf('-');

  if (!dashIndex || dashIndex === -1) {
    locale;
//  ^ - wpisz tu `return `
  }

  return locale?.slice(0, dashIndex).trimEnd();
}

export function (locale: string): string | number {
//              ^ - wpisz tu `localeToLanguageName`
  return languageIntl.of(locale) ?? '';
}

export function countryCodeToCountryName(countryCode: string): string {
  return regionIntl.of(countryCode) ?? '';
}

export const operationalCountryToSVG: Record<OperationalCountry, string> = {
  PL: 
//    ^ - wpisz tu `polishFlag,`
  CZ: 
//    ^ - wpisz tu `czechFlag,`
  SK: 
//    ^ - wpisz tu `slovakiaFlag`
};

export const getSafeTranslation = (key: string, defaultTranslation?: string): string
//                                                                                  ^ - wpisz tu ` => {`
  try {
    return i18n
//             ^ - wpisz tu `(key);`
  } catch {
    return defaultTranslation
//                           ^ - wpisz tu ` ?? key;`
  }
};
```

### `o` oraz `O`
Dosyć częstą czynnością którą wykonujemy podczas kodowania jest rozpoczynaie pisania
w kolejnej linii.
- `o` - tworzy nową linię pod spodem naszego kursora, przechodzi na początek nowo utworzonej
        linii oraz zmienia nasz tryb na insert
- `O` - tworzy nową linię nad linią naszego kursora, przechodzi na początek nowo utworzonej
        linii oraz zmienia nasz tryb na insert

Obie te komendy otwierają nową linię nie zależnie od tego gdzie w linni się aktualnie znajdujemy.

⚡️ Ćwiczenie:
Popraw błędy w kodzie zgodnie z komentarzami

```tsx
export interface CreateAdgroupMutationArgs {
  campaignId: string | null; // ↓ add new type `adGroup: AdGroupModel`
}

export interface EditAdgroupMutationArgs {
  campaignId: string | null;
  adGroupId: string | null;
  adGroup: AdGroupModel;
}

export const CREATE_ADGROUP_KEY = 'createAdGroup'; // ↓ add new variable `export const REMOVE_ADGROUP_KEY = '';`
export const EDIT_ADGROUP_KEY = 'editAdGroup';

const DEFAULT_HEADERS = {
  [HttpHeader.ACCEPT]: APPLICATION_JSON,
  [HttpHeader.CONTENT_TYPE]: APPLICATION_JSON, // ^ add line above `[HttpHeader.VIM]: APPLICATION_VIM`
};

const adGroupRequestMapper = new AdGroupRequestMapper();
const BASE_QUERY = '/campaigns';
export const wizardAdGroupsApi = rootApi.injectEndpoints({
  endpoints: (build) => ({ // ↓ add new key `removeAdgroup: {},`
    createAdGroup: build.mutation<Promise<void>, CreateAdgroupMutationArgs>({
      query: ({ campaignId, adGroup }) => ({
        url: `${BASE_QUERY}/${campaignId}/adgroups`,
        method: 'POST',
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(adGroupRequestMapper.toRequest(adGroup)), // ↓ add new key `cache: true`
      }),
    }),
    editAdGroup: build.mutation<Promise<void>, EditAdgroupMutationArgs>({
      query: ({ campaignId, adGroup, adGroupId }) => ({
        url: `${BASE_QUERY}/${campaignId}/adgroups/${adGroupId}`,
        method: 'PUT',
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(adGroupRequestMapper.toRequest(adGroup)),// ↓ add new key `cache: true`
      }),
    }),
  }),
}); // ^ add new line with new key `overrideExisting: true,`

export const { useCreateAdGroupMutation, useEditAdGroupMutation } = wizardAdGroupsApi;
```

