# Vad ska vi laga idag?

En webbapp som håller reda på vad man lagat och när, och föreslår vad
som är dags att laga igen. Gjord som inlämningsuppgift i Labb 2.

## Om appen

Temat är matförslag. Tanken är inte att samla recept utan att slippa
fundera: appen minns när du senast lagade varje rätt och föreslår sådant
du inte ätit på ett tag.

Startsidan visar dagens förslag. Trycker man på knappen kommer ett nytt,
annars ligger det kvar. Under Alla recept finns hela listan, som går att
sortera på mognad, namn, tid eller kategori. Där lägger man också till
nya rätter och tar bort gamla.

Uppe i menyn finns en inställning för hur många dagar en rätt ska vila
innan den föreslås igen. Ändrar man den räknas hela listan om direkt.

## Mognadsmätaren

Varje rätt har en stapel som växer ju längre sedan den lagades. Stapelns
bredd och färg sätts från JavaScript med hjälp av style binding, utifrån
antal dagar sedan senaste gången i förhållande till inställningen. Grått
betyder nyss lagad, orange att det börjar bli dags, grönt att det är dags.
Bara rätter som kommit tillräckligt långt kan dyka upp som dagens förslag.

Koden ligger i src/components/ReadinessMeter.vue och src/store.js.

## Teknik

Vue 3 med Composition API, Vue Router och Vite. All CSS är egenskriven,
med Grid för korten, Flexbox för rader och media queries för mobil.

## Köra projektet

Kräver Node.js.

```bash
npm install
npm run dev