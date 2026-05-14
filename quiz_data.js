const QUIZ_DATA = [
  {
    "id": "pq1",
    "fact": "Ireland has won the Eurovision Song Contest 7 times — 1970, 1980, 1987, 1992, 1993, 1994, and 1996. Sweden holds the record with 8 wins, including Loreen's second victory in 2023. Ireland's three consecutive wins (1992–94) remain unmatched by any country.",
    "question": "Which country has won the Eurovision Song Contest 7 times, the second most of any country behind Sweden's record 8 wins?",
    "answers": {
      "A": "Ireland",
      "B": "Norway",
      "C": "Finland",
      "D": "Denmark"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq2",
    "fact": "Michael Jackson's Thriller (1982) is the best-selling album of all time at 66–70 million copies. The Beatles hold the record for best-selling band (~600 million records). Elvis Presley holds the record for most singles sold.",
    "question": "Which album holds the record for best-selling album of all time with approximately 66-70 million copies sold?",
    "answers": {
      "A": "Thriller by Michael Jackson",
      "B": "The White Album by The Beatles",
      "C": "Blue Hawaii by Elvis Presley",
      "D": "Physical by Dua Lipa"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq3",
    "fact": "Mount Chimborazo in Ecuador is the point on Earth's surface furthest from Earth's centre — and therefore closest to space — because Earth bulges at the equator. Everest is the highest above sea level (8,849m) but Chimborazo wins by ~2km of Earth-radius advantage.",
    "question": "Which mountain is the point on Earth's surface closest to space?",
    "answers": {
      "A": "Mount Chimborazo, Ecuador",
      "B": "Mount Everest, Nepal/Tibet",
      "C": "Mount Denali, Alaska",
      "D": "Mount Kilimanjaro, Tanzania"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq4",
    "fact": "Nepal is the only country with a non-quadrilateral flag. It's a double-pennant shape — two stacked triangles — making it unique among all 195 national flags. All other countries use rectangles or squares.",
    "question": "Which country is the only one in the world with a non-quadrilateral national flag?",
    "answers": {
      "A": "Nepal",
      "B": "Switzerland",
      "C": "Vatican City",
      "D": "Denmark"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq5",
    "fact": "The Great Wall is too narrow (5–8 metres wide) to be seen from orbit with the naked eye. Chinese astronaut Yang Liwei confirmed this in 2003. City lights and highways are actually visible from low orbit.",
    "question": "In 2003, Chinese astronaut Yang Liwei confirmed that the Great Wall of China cannot be seen from orbit with the naked eye. What is the primary reason for this?",
    "answers": {
      "A": "The Great Wall is too narrow, measuring only 5-8 metres wide",
      "B": "The Great Wall is obscured by clouds and atmospheric pollution",
      "C": "The Great Wall's stone construction blends in with the surrounding mountains",
      "D": "Modern spacecraft orbit too high to see such small structures"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq6",
    "fact": "The mosquito kills approximately 725,000 people per year — the world's deadliest animal to humans. It transmits malaria, dengue, yellow fever, and Zika. Sharks kill fewer than 10 people per year.",
    "question": "Which animal is responsible for the most human deaths per year worldwide?",
    "answers": {
      "A": "Mosquito",
      "B": "Snake",
      "C": "Shark",
      "D": "Hippopotamus"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq7",
    "fact": "William Shakespeare coined or first recorded over 1,700 English words including 'bedroom', 'lonely', 'generous', 'swagger', 'uncomfortable', 'luggage', and 'eyeball'. He wrote 37 plays and 154 sonnets.",
    "question": "Which of the following words did William Shakespeare NOT coin or first record in English?",
    "answers": {
      "A": "telephone",
      "B": "bedroom",
      "C": "swagger",
      "D": "eyeball"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq8",
    "fact": "The Eiffel Tower grows up to 15cm taller in summer due to thermal expansion. Built in 1889 by Gustave Eiffel for the Paris World's Fair, it was originally intended to be demolished after 20 years. It was saved because it made a useful radio antenna.",
    "question": "By how much does the Eiffel Tower grow taller in summer due to thermal expansion?",
    "answers": {
      "A": "Up to 15cm",
      "B": "Up to 30cm",
      "C": "Up to 5cm",
      "D": "Up to 25cm"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq9",
    "fact": "Cleopatra VII ruled around 50 BC. The Great Pyramid was built around 2560 BC — 2,500 years before her. The Moon landing was 1969 AD — only ~2,000 years after Cleopatra. The pyramids are ancient even by ancient standards.",
    "question": "By how many years was the Great Pyramid older than Cleopatra's reign?",
    "answers": {
      "A": "Approximately 2,500 years",
      "B": "Approximately 1,500 years",
      "C": "Approximately 3,500 years",
      "D": "Approximately 2,000 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq10",
    "fact": "Venus rotates so slowly that one Venusian day (243 Earth days) is longer than its year (225 Earth days). Venus also rotates backwards — the Sun rises in the west and sets in the east. It's the hottest planet despite Mercury being closer to the Sun.",
    "question": "Which of these unusual facts about Venus is TRUE?",
    "answers": {
      "A": "Venus's day is longer than its year, and it rotates backwards",
      "B": "Venus is the hottest planet because it is closest to the Sun",
      "C": "Venus rotates faster than Earth, completing one rotation every 24 hours",
      "D": "Venus has the shortest day of any planet in our solar system"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq11",
    "fact": "The Anglo-Zanzibar War of 27 August 1896 lasted between 38 and 45 minutes — the shortest recorded war in history. Britain shelled the Sultan of Zanzibar's palace and won in under an hour. The Hundred Years' War actually lasted 116 years.",
    "question": "Which war is officially recorded as the shortest in history, lasting less than an hour?",
    "answers": {
      "A": "The Anglo-Zanzibar War of 1896",
      "B": "The Hundred Years' War",
      "C": "The Falkland Islands War",
      "D": "The Six-Day War"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq12",
    "fact": "Honey never spoils when sealed and kept dry. Its low moisture, acidic pH, and natural hydrogen peroxide make it inhospitable to bacteria. Other foods with indefinite shelf life include salt, pure vanilla extract, white rice, and hard liquor.",
    "question": "Which of the following foods has an indefinite shelf life when properly stored?",
    "answers": {
      "A": "Honey",
      "B": "Olive oil",
      "C": "Peanut butter",
      "D": "Whole wheat flour"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq13",
    "fact": "Russia covers 11 time zones and ~17.1 million km², making it the world's largest country. When it's 6am in Kaliningrad, it's already 5pm in Kamchatka. Canada is second largest but spans only 6 time zones.",
    "question": "How many time zones does Russia span across its vast territory?",
    "answers": {
      "A": "11",
      "B": "9",
      "C": "6",
      "D": "15"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq14",
    "fact": "Alexander Graham Bell patented the telephone in 1876. His mother and wife Mabel were both deaf, which drove his obsession with sound and communication. Bell considered the telephone an intrusion and refused to have one in his personal study.",
    "question": "Alexander Graham Bell, who patented the telephone in 1876, had a notable personal quirk regarding his own invention. What was it?",
    "answers": {
      "A": "He refused to have a telephone in his personal study",
      "B": "He only used telephones made of silver",
      "C": "He would only take calls during specific hours of the day",
      "D": "He required all callers to speak in a particular accent"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq15",
    "fact": "KLM Royal Dutch Airlines, founded in October 1919, is the world's oldest airline still operating under its original name. Qantas (Australia, 1920) is the second oldest.",
    "question": "Which airline holds the distinction of being the world's oldest airline still operating under its original name?",
    "answers": {
      "A": "KLM Royal Dutch Airlines",
      "B": "Qantas Airways",
      "C": "Air France",
      "D": "British Airways"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq16",
    "fact": "Botanically, a berry is a fruit produced from a single flower's ovary. Bananas, grapes, tomatoes and watermelons all qualify. Strawberries and raspberries are 'aggregate fruits' — formed from multiple ovaries, so they don't make the cut.",
    "question": "According to botanical definitions, which of the following is NOT classified as a true berry?",
    "answers": {
      "A": "Strawberry",
      "B": "Banana",
      "C": "Grape",
      "D": "Tomato"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq17",
    "fact": "Australia is approximately 4,000 km wide east to west. The Moon's diameter is about 3,474 km. So yes — Australia is wider than the Moon, though obviously much less massive.",
    "question": "Which of the following is wider east to west than the Moon's diameter?",
    "answers": {
      "A": "Australia",
      "B": "The United States",
      "C": "Russia",
      "D": "The Atlantic Ocean"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq18",
    "fact": "Octopuses have three hearts: two pump blood through the gills, one pumps it through the body. Their blood is blue because it uses copper-based hemocyanin instead of iron-based hemoglobin to carry oxygen — more efficient in cold, low-oxygen water.",
    "question": "Why is an octopus's blood blue rather than red like humans?",
    "answers": {
      "A": "It uses copper-based hemocyanin instead of iron-based hemoglobin to carry oxygen",
      "B": "It contains a higher concentration of blue-colored minerals from the ocean",
      "C": "The copper in seawater stains the blood as it flows through the gills",
      "D": "It uses chlorophyll-based proteins similar to plants for oxygen transport"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq19",
    "fact": "It's called a 'tittle'. The word comes from the Latin 'titulus' meaning 'inscription' or 'label'. The dot was added in medieval manuscripts to distinguish 'i' from neighbouring vertical strokes.",
    "question": "What is the name of the dot that appears above a lowercase 'i' or 'j'?",
    "answers": {
      "A": "A tittle",
      "B": "A diacritic",
      "C": "A serif",
      "D": "A punctum"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq20",
    "fact": "Wombats are the only animals on Earth that produce cube-shaped faeces. The shape is created by the elasticity of their intestinal walls, which contract in patterns that form flat sides. Cubes don't roll, helping wombats mark territory effectively.",
    "question": "Wombats are unique for producing faeces with an unusual shape. What shape is it?",
    "answers": {
      "A": "Cube-shaped",
      "B": "Pyramid-shaped",
      "C": "Disc-shaped",
      "D": "Spiral-shaped"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq21",
    "fact": "The Shannon number estimates ~10¹²⁰ possible chess games. The observable universe contains ~10⁸⁰ atoms. Chess has 40 orders of magnitude more possible games than there are atoms in everything we can see.",
    "question": "The Shannon number estimates the number of possible chess games at approximately 10¹²⁰. How many orders of magnitude more is this compared to the number of atoms in the observable universe (approximately 10⁸⁰)?",
    "answers": {
      "A": "40",
      "B": "10",
      "C": "80",
      "D": "120"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq22",
    "fact": "A pineapple plant takes 18–24 months to produce its first fruit. After harvesting, it can produce another one — but it takes another year. Each plant produces only one pineapple at a time.",
    "question": "How long does it typically take for a pineapple plant to produce its first fruit?",
    "answers": {
      "A": "18-24 months",
      "B": "6-12 months",
      "C": "2-3 years",
      "D": "3-4 months"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq23",
    "fact": "The Wright Brothers' first powered flight on 17 December 1903 lasted 12 seconds and covered 37 metres. A Boeing 747's wingspan alone is 68 metres — so their entire first flight would have fit inside the wingspan of a modern jumbo jet.",
    "question": "The Wright Brothers' first powered flight in 1903 covered 37 metres. Which modern aircraft has a wingspan longer than this entire historic flight?",
    "answers": {
      "A": "Boeing 747",
      "B": "Airbus A380",
      "C": "Concorde",
      "D": "Boeing 787"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq24",
    "fact": "McDonald's pulled out of Iceland in 2009 after the financial crisis made imports too expensive. The last burger ever sold in Iceland is on display in a museum — and it has barely decomposed in over 15 years.",
    "question": "Which fast food chain pulled out of Iceland in 2009 following the financial crisis, leaving behind a remarkably well-preserved burger now displayed in a museum?",
    "answers": {
      "A": "McDonald's",
      "B": "Burger King",
      "C": "Wendy's",
      "D": "KFC"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq25",
    "fact": "The five Olympic rings represent the five inhabited continents (the Americas count as one), not specific countries. The colours — blue, yellow, black, green, red on white — were chosen because every national flag in 1913 contained at least one of them.",
    "question": "What was the original reason the five Olympic rings were designed with their specific colours (blue, yellow, black, green, and red)?",
    "answers": {
      "A": "They were chosen because every national flag in 1913 contained at least one of these colours",
      "B": "They represent the five most powerful nations in the Olympic movement",
      "C": "They were selected to match the colours of the ancient Greek Olympic Games",
      "D": "They were chosen to be visible from any distance in any weather conditions"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq26",
    "fact": "Scotland's national animal is the unicorn — chosen because in Celtic mythology unicorns symbolised purity, power, and innocence. It has been a Scottish heraldic symbol since the 12th century. Scotland is fond of unusual choices.",
    "question": "What is Scotland's national animal?",
    "answers": {
      "A": "Unicorn",
      "B": "Lion",
      "C": "Eagle",
      "D": "Stag"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq27",
    "fact": "Saudi Arabia has no permanent rivers — the only large country in this position. It relies on desalination for most fresh water. Bahrain, Kuwait, Qatar, the UAE, Oman, Yemen and the Vatican City are also river-free.",
    "question": "Which of the following is the only large country in the world with no permanent rivers?",
    "answers": {
      "A": "Saudi Arabia",
      "B": "Egypt",
      "C": "Australia",
      "D": "Libya"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq28",
    "fact": "The Hawaiian alphabet contains 13 letters: 5 vowels (a, e, i, o, u) and 8 consonants (h, k, l, m, n, p, w, plus the glottal stop ʻokina). Compare to English with 26.",
    "question": "How many letters are in the Hawaiian alphabet?",
    "answers": {
      "A": "13",
      "B": "26",
      "C": "18",
      "D": "21"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq29",
    "fact": "Studies have shown cows form close social bonds with specific other cows, behave more calmly when paired with their preferred companion, and show physiological stress markers when separated from them.",
    "question": "Research has shown that cows exhibit behaviors similar to humans when it comes to friendships. What happens to a cow when it is separated from its preferred companion?",
    "answers": {
      "A": "It shows physiological stress markers",
      "B": "It becomes more aggressive toward other cows",
      "C": "It stops producing milk temporarily",
      "D": "It loses its ability to recognize other herd members"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq30",
    "fact": "Africa straddles the equator (north + south hemispheres) and the Prime Meridian (east + west hemispheres) — making it the only continent in all four hemispheres. Most maps don't make this obvious.",
    "question": "Which continent is the only one to span all four hemispheres (north, south, east, and west)?",
    "answers": {
      "A": "Africa",
      "B": "Asia",
      "C": "South America",
      "D": "Antarctica"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq31",
    "fact": "The Statue of Liberty is made of copper and was originally a shiny reddish-brown when unveiled in 1886. It oxidised over decades, turning green by 1920. The green coating (patina) actually protects the copper from further corrosion.",
    "question": "What color was the Statue of Liberty when it was first unveiled in 1886?",
    "answers": {
      "A": "Shiny reddish-brown",
      "B": "Bright silver",
      "C": "Dark gray",
      "D": "Green"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq32",
    "fact": "The letter Q is the only one that doesn't appear in the name of any U.S. state. Every other letter shows up at least once across the 50 names. Pub quiz favourite.",
    "question": "Which letter of the alphabet does NOT appear in the name of any U.S. state?",
    "answers": {
      "A": "Q",
      "B": "X",
      "C": "Z",
      "D": "J"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq33",
    "fact": "Sharks evolved around 450 million years ago. Trees didn't appear until about 390 million years ago. Sharks also predate Saturn's rings, the North Star, and Mount Everest.",
    "question": "By approximately how many million years did sharks predate the first trees on Earth?",
    "answers": {
      "A": "60 million years",
      "B": "30 million years",
      "C": "90 million years",
      "D": "120 million years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq34",
    "fact": "Studies of military history rank France as having fought in more wars than any other modern state — over 180 major conflicts. The 'cheese-eating surrender monkeys' stereotype is wildly inaccurate historically.",
    "question": "According to military history studies, which modern state has fought in the most major conflicts?",
    "answers": {
      "A": "France, with over 180 major wars",
      "B": "Britain, with over 200 major wars",
      "C": "Germany, with over 150 major wars",
      "D": "Russia, with over 180 major wars"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq35",
    "fact": "Antarctica is the largest desert on Earth at ~14 million km². A desert is defined by precipitation, not temperature — Antarctica gets less than 200mm/year. The Sahara is the largest hot desert at ~9 million km².",
    "question": "What is the largest desert on Earth by area?",
    "answers": {
      "A": "Antarctica",
      "B": "The Sahara",
      "C": "The Arabian Desert",
      "D": "The Gobi Desert"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq36",
    "fact": "Earth has approximately 3 trillion trees. The Milky Way contains an estimated 100–400 billion stars. Earth's tree count exceeds the high estimate of Milky Way stars by roughly 7-fold.",
    "question": "Approximately how many more trees are on Earth compared to the estimated number of stars in the Milky Way (using the high estimate)?",
    "answers": {
      "A": "About 2.1 trillion more trees",
      "B": "About 500 billion more trees",
      "C": "Trees are actually fewer than stars",
      "D": "About 5 trillion more trees"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq37",
    "fact": "Leonardo da Vinci sold the Mona Lisa to King Francis I of France around 1518. It was hung in the king's private bathroom at Fontainebleau. It later moved to Versailles, then Napoleon's bedroom, before settling in the Louvre after the French Revolution.",
    "question": "Where was the Mona Lisa originally hung after Leonardo da Vinci sold it to King Francis I of France around 1518?",
    "answers": {
      "A": "The king's private bathroom at Fontainebleau",
      "B": "The main gallery at Versailles",
      "C": "Napoleon's personal bedroom",
      "D": "The chapel at the Palace of Fontainebleau"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq38",
    "fact": "Polar bear skin is black — it absorbs heat better. Their fur is actually colourless and translucent; it scatters light to look white. Underneath: black skin, transparent hairs, brilliant camouflage.",
    "question": "What color is a polar bear's skin underneath its fur?",
    "answers": {
      "A": "Black",
      "B": "White",
      "C": "Pink",
      "D": "Gray"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq39",
    "fact": "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu — a hill in New Zealand — has 85 letters. It's a Maori name meaning 'the place where Tamatea climbed and played his flute to his loved one'.",
    "question": "What is the name of the 85-letter hill in New Zealand, famous for being one of the longest place names in the world?",
    "answers": {
      "A": "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu",
      "B": "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanataho",
      "C": "Taumatawhakatangihangaroauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu",
      "D": "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatalu"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq40",
    "fact": "Tromsø, Norway, sits inside the Arctic Circle. From late November to mid-January, the Sun doesn't rise above the horizon — polar night. In summer it doesn't set for weeks — the midnight Sun.",
    "question": "Tromsø, Norway experiences two unique phenomena due to its location inside the Arctic Circle. During winter, the Sun doesn't rise for weeks (polar night), while in summer it doesn't set. What is the period when Tromsø experiences polar night?",
    "answers": {
      "A": "Late November to mid-January",
      "B": "September to October",
      "C": "December to February",
      "D": "October to April"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq41",
    "fact": "Vatican City covers 0.49 km² and is home to one Pope. That's a population density of 2 popes per km² — the highest concentration of any head of state on Earth, by an absurd margin.",
    "question": "What is the population density of Popes per km² in Vatican City?",
    "answers": {
      "A": "2 popes per km²",
      "B": "1 pope per km²",
      "C": "5 popes per km²",
      "D": "0.5 popes per km²"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq42",
    "fact": "In 1957, engineers Alfred Fielding and Marc Chavannes tried to create a textured plastic wallpaper. It flopped. They then pitched it as greenhouse insulation — also a flop. Finally IBM used it to ship the new IBM 1401 computer in 1960. Bubble wrap was born.",
    "question": "What was bubble wrap originally invented for in 1957 by Alfred Fielding and Marc Chavannes?",
    "answers": {
      "A": "Textured plastic wallpaper",
      "B": "Protective packaging material",
      "C": "Insulation for refrigerators",
      "D": "Sound dampening panels"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq43",
    "fact": "Mr Potato Head debuted in 1952 and became the first toy advertised directly to children on TV (rather than to parents). The campaign tripled sales overnight and changed toy marketing forever.",
    "question": "Which toy became the first to be advertised directly to children on television in 1952, rather than to parents?",
    "answers": {
      "A": "Mr Potato Head",
      "B": "Barbie",
      "C": "Slinky",
      "D": "Yo-Yo"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq44",
    "fact": "The Sun emits all visible wavelengths roughly equally — making it actually white. Earth's atmosphere scatters blue light more than red, so what reaches our eyes is biased toward yellow/orange. Astronauts in space see a white Sun.",
    "question": "Why does the Sun appear yellow or orange from Earth, when its actual color is white?",
    "answers": {
      "A": "Earth's atmosphere scatters blue light more than red light, biasing what we see toward yellow and orange",
      "B": "The Sun's surface temperature causes it to emit more yellow and orange wavelengths than other colors",
      "C": "Earth's magnetic field filters out blue light before it reaches our eyes",
      "D": "The Sun only appears white to astronauts because they are closer to it in space"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq45",
    "fact": "The Library of Congress (US) holds ~170 million items on shelves stretching ~1,349 km — longer than the distance from London to Edinburgh and back. It receives ~12,000 new items per day.",
    "question": "Approximately how long would the shelves in the Library of Congress stretch if laid end to end?",
    "answers": {
      "A": "1,349 kilometers",
      "B": "897 kilometers",
      "C": "2,100 kilometers",
      "D": "845 kilometers"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq46",
    "fact": "To produce one pound (~450g) of honey, bees visit roughly 2 million flowers and fly about 90,000 km — more than twice around the Earth. A single worker bee makes about 1/12 of a teaspoon of honey in her entire life.",
    "question": "How far do bees fly to produce just one pound of honey?",
    "answers": {
      "A": "About 90,000 km — more than twice around the Earth",
      "B": "About 45,000 km — roughly once around the Earth",
      "C": "About 180,000 km — four times around the Earth",
      "D": "About 9,000 km — a quarter of the way around the Earth"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq47",
    "fact": "In Mexico, Coca-Cola is sweetened with cane sugar instead of high-fructose corn syrup used in the US. Many drinkers claim 'Mexican Coke' tastes noticeably better. Glass bottles also help preserve carbonation and flavour.",
    "question": "Why do many people claim that Coca-Cola tastes better in Mexico compared to the United States?",
    "answers": {
      "A": "Mexican Coca-Cola is sweetened with cane sugar instead of high-fructose corn syrup, and is often sold in glass bottles",
      "B": "Mexico uses a secret recipe that includes vanilla extract not found in US versions",
      "C": "Mexican Coca-Cola is carbonated at higher pressure levels during production",
      "D": "Cane sugar in Mexico is sourced from a specific region that produces a unique flavor profile"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq48",
    "fact": "'Rhythms' (7 letters) is the longest commonly used English word with no traditional vowels (a, e, i, o, u). The 'y' here functions as a vowel substitute. 'Crwth' (5 letters, a Welsh stringed instrument) is also vowel-free.",
    "question": "Which of these is the longest commonly used English word that contains no traditional vowels (a, e, i, o, u)?",
    "answers": {
      "A": "Rhythms",
      "B": "Syzygy",
      "C": "Nymph",
      "D": "Pygmy"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq49",
    "fact": "Saturn's average density is 0.687 g/cm³ — less than water's 1.0 g/cm³. So in theory, Saturn would float. Of course you'd need a tub with a diameter of 120,000 km — and the planet would shed a Moon-sized chunk by tidal forces.",
    "question": "What is unique about Saturn's density compared to water?",
    "answers": {
      "A": "Saturn is less dense than water and would theoretically float",
      "B": "Saturn is denser than water and would sink immediately",
      "C": "Saturn has exactly the same density as water",
      "D": "Saturn's density varies too much to make any comparison"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq50",
    "fact": "The modern necktie evolved from neck cloths worn by Croatian soldiers in 17th-century French service. King Louis XIV admired the look. The French word 'cravate' comes from 'Croate' (Croatian). Croatia celebrates Cravat Day on 18 October.",
    "question": "The modern necktie evolved from neck cloths worn by soldiers from which country in 17th-century French service, inspiring King Louis XIV and giving us the French word 'cravate'?",
    "answers": {
      "A": "Croatia",
      "B": "Serbia",
      "C": "Poland",
      "D": "Hungary"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq51",
    "fact": "Sydney and Melbourne both wanted to be Australia's capital. Neither would accept the other, so in 1908 they agreed to build a new city, Canberra, halfway between them. It officially became the capital in 1927.",
    "question": "Why was Canberra built as Australia's capital city in 1908?",
    "answers": {
      "A": "Sydney and Melbourne both wanted to be the capital, so a compromise city was built halfway between them",
      "B": "It was chosen for its natural resources and proximity to the coast",
      "C": "The British government mandated a new capital city be constructed in the interior",
      "D": "Brisbane and Perth refused to share government functions with the southern cities"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq52",
    "fact": "Both William Shakespeare and Miguel de Cervantes (author of Don Quixote) died on 23 April 1616. But England used the Julian calendar and Spain the Gregorian — so the actual days were 10 days apart. Same date, different days.",
    "question": "William Shakespeare and Miguel de Cervantes both died on 23 April 1616, yet their deaths were actually 10 days apart. Why?",
    "answers": {
      "A": "England used the Julian calendar while Spain used the Gregorian calendar",
      "B": "England used the Gregorian calendar while Spain used the Julian calendar",
      "C": "They died in different time zones which were 10 hours apart",
      "D": "Shakespeare died in the morning and Cervantes died 10 days later in the evening"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq53",
    "fact": "The Mpemba effect: under certain conditions, hot water freezes faster than cold water. Named after Tanzanian student Erasto Mpemba in the 1960s, it's been observed for centuries (Aristotle noted it) but is still not fully explained.",
    "question": "The Mpemba effect describes a counterintuitive phenomenon where hot water freezes faster than cold water under certain conditions. Which historical figure first documented this effect?",
    "answers": {
      "A": "Aristotle",
      "B": "Erasto Mpemba",
      "C": "Isaac Newton",
      "D": "Galileo Galilei"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq54",
    "fact": "Argentina takes its name from the Latin 'argentum' meaning silver. Early European explorers believed (incorrectly) the region was rich in silver. The Río de la Plata literally means 'River of Silver'.",
    "question": "What does the name 'Argentina' derive from, and what did early European explorers incorrectly believe about the region?",
    "answers": {
      "A": "The Latin word 'argentum' meaning silver; they believed it was rich in silver deposits",
      "B": "The Spanish word 'plata' meaning silver; they believed it contained vast gold reserves",
      "C": "The Latin word 'argentus' meaning white; they believed it had white mineral mountains",
      "D": "The Portuguese word 'prata' meaning treasure; they believed it held ancient Incan artifacts"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq55",
    "fact": "Male Gentoo and Adélie penguins search beaches for the perfect smooth pebble, then present it to a desired female. If she accepts, they place it in their nest together — a courtship ritual that pairs many penguins for life.",
    "question": "In a courtship ritual, male Gentoo and Adélie penguins present females with what gift to establish a lifelong pair bond?",
    "answers": {
      "A": "A smooth pebble",
      "B": "A freshly caught fish",
      "C": "A strand of seaweed",
      "D": "A piece of ice"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq56",
    "fact": "In 1952, Israel's first president Chaim Weizmann died. Israel offered the presidency to Einstein, the world's most famous Jew. He politely declined, saying he lacked the natural aptitude and experience to deal with people.",
    "question": "In 1952, after the death of Israel's first president Chaim Weizmann, which famous scientist was offered the presidency of Israel but declined?",
    "answers": {
      "A": "Albert Einstein",
      "B": "Niels Bohr",
      "C": "Erwin Schrödinger",
      "D": "Max Planck"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq57",
    "fact": "In physics, a jiffy is the time light takes to travel one fermi (a unit roughly the size of a proton) — about 3 × 10⁻²⁴ seconds. In computing, it usually means a tick of the system clock (1/100 second).",
    "question": "In physics, what is a 'jiffy' defined as?",
    "answers": {
      "A": "The time light takes to travel one fermi, approximately 3 × 10⁻²⁴ seconds",
      "B": "The time it takes light to travel one nanometer",
      "C": "One millionth of a second",
      "D": "The time light takes to cross the diameter of an atom"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq58",
    "fact": "Oman is the only country whose English name starts with 'O'. It's located on the southeastern coast of the Arabian Peninsula. Historic, oil-rich, and frequently overlooked in geography quizzes.",
    "question": "Which country is the only one whose English name starts with the letter 'O'?",
    "answers": {
      "A": "Oman",
      "B": "Oceania",
      "C": "Orkney Islands",
      "D": "Odisha"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq59",
    "fact": "Earth's only permanent natural satellite is the Moon. But Earth occasionally captures small near-Earth asteroids — 'mini-moons' — that orbit briefly before drifting away. Examples: 2006 RH120 and 2020 CD3.",
    "question": "Besides the Moon, what are 'mini-moons'?",
    "answers": {
      "A": "Small near-Earth asteroids temporarily captured in Earth's orbit",
      "B": "Artificial satellites launched by space agencies for research",
      "C": "Natural moons of other planets that pass close to Earth",
      "D": "Fragments of the Moon that broke off billions of years ago"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq60",
    "fact": "Antarctica is too cold for reptiles or snakes — they're cold-blooded and can't survive its sub-zero climate. The largest land animal native to Antarctica is the wingless midge, just 6mm long.",
    "question": "What is the largest land animal native to Antarctica?",
    "answers": {
      "A": "A wingless midge measuring 6mm long",
      "B": "A small penguin species weighing less than 1kg",
      "C": "An Antarctic seal pup",
      "D": "A cold-resistant lizard species"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq61",
    "fact": "The Greenland shark is the longest-living vertebrate on Earth. Scientists have estimated lifespans of 250–500 years using eye lens dating. They reach sexual maturity at around 150 years old. Some living today were swimming when Galileo was alive.",
    "question": "Which animal is the longest-living vertebrate on Earth, with some individuals estimated to be over 500 years old?",
    "answers": {
      "A": "Greenland shark",
      "B": "Giant tortoise",
      "C": "Bowhead whale",
      "D": "Immortal jellyfish"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq62",
    "fact": "Sony was founded in 1946 in war-ravaged Tokyo. Their first consumer product was an electric rice cooker — which mostly burned the rice. They pivoted to electronics, eventually launching the iconic transistor radio in 1955.",
    "question": "What was Sony's first consumer product after being founded in 1946?",
    "answers": {
      "A": "An electric rice cooker",
      "B": "A transistor radio",
      "C": "A portable cassette player",
      "D": "A television set"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq63",
    "fact": "King Penguin Sir Nils Olav III is a real, knighted penguin in Edinburgh Zoo. He serves as Colonel-in-Chief of the Norwegian King's Guard. Each promotion comes with a formal ceremony attended by hundreds of soldiers. He was knighted in 2008.",
    "question": "Sir Nils Olav III, a real penguin at Edinburgh Zoo, holds what military rank?",
    "answers": {
      "A": "Colonel-in-Chief of the Norwegian King's Guard",
      "B": "General of the British Royal Navy",
      "C": "Admiral of the Scottish Maritime Forces",
      "D": "Captain of the Edinburgh Castle Guard"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq64",
    "fact": "Nauru, the world's third-smallest country, has no official capital. The government offices are in Yaren District, often listed as the de facto capital — but it has no legal status as one.",
    "question": "Which country, the world's third-smallest, has no official capital despite having government offices in Yaren District?",
    "answers": {
      "A": "Nauru",
      "B": "Tuvalu",
      "C": "Palau",
      "D": "San Marino"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq65",
    "fact": "Percy Spencer was working with radar magnetrons at Raytheon in 1945 when a chocolate bar in his pocket melted. He realised microwaves cooked food and patented the microwave oven. The first commercial unit (1947) was 1.8m tall and weighed 340kg.",
    "question": "In 1945, Percy Spencer discovered the microwave oven by accident while working with radar magnetrons at Raytheon. What melted in his pocket, leading to this invention?",
    "answers": {
      "A": "A chocolate bar",
      "B": "A stick of butter",
      "C": "A packet of crisps",
      "D": "A block of cheese"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq66",
    "fact": "The cheetah can hit ~100 km/h, but only for 20–30 seconds before overheating. Their bodies generate heat faster than they can dissipate it. After a sprint they need 30+ minutes to recover before they can run again.",
    "question": "What is the maximum distance a cheetah can maintain its top speed of ~100 km/h before it risks overheating?",
    "answers": {
      "A": "20-30 seconds",
      "B": "1-2 minutes",
      "C": "5-10 minutes",
      "D": "30+ minutes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq67",
    "fact": "From 1886 to 1903, Coca-Cola contained trace amounts of cocaine derived from coca leaves. The company switched to 'spent' coca leaves (with cocaine extracted) in 1903 due to growing concerns. Coca leaf extract is still used today — without the cocaine.",
    "question": "In what year did Coca-Cola stop using coca leaves containing cocaine and switch to 'spent' coca leaves without the drug?",
    "answers": {
      "A": "1903",
      "B": "1886",
      "C": "1920",
      "D": "1895"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq68",
    "fact": "The US has approximately 17,000 public libraries (including branches) and around 13,500 McDonald's locations. So when you're in America, you're statistically closer to a library than to a Big Mac.",
    "question": "Approximately how many public library locations (including branches) are there in the United States?",
    "answers": {
      "A": "Around 17,000",
      "B": "Around 13,500",
      "C": "Around 8,500",
      "D": "Around 25,000"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq69",
    "fact": "Wat Pa Maha Chedi Kaew (Temple of a Million Bottles) in Sisaket, Thailand, is built from over 1.5 million Heineken and Chang beer bottles. Started in 1984 to clean up litter, monks expanded the project for decades.",
    "question": "What was the original purpose behind building Wat Pa Maha Chedi Kaew (Temple of a Million Bottles) in Thailand?",
    "answers": {
      "A": "To clean up litter",
      "B": "To create a tourist attraction",
      "C": "To recycle industrial waste",
      "D": "To build a memorial monument"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq70",
    "fact": "While the famous 'Space Pen' (developed privately, sold to NASA for ~$2.95 each) does work in zero gravity, US astronauts initially used pencils. Soviets used grease pencils. The myth that NASA spent millions developing a pen while Russians used pencils is wrong.",
    "question": "What writing instruments did US astronauts and Soviet cosmonauts initially use in space before the 'Space Pen' was developed?",
    "answers": {
      "A": "US astronauts used pencils; Soviet cosmonauts used grease pencils",
      "B": "US astronauts used grease pencils; Soviet cosmonauts used regular pencils",
      "C": "Both used regular wooden pencils",
      "D": "Both used specially designed space pens developed by their respective governments"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq71",
    "fact": "The Maldives, by area, is Asia's smallest country (~298 km²) — but the actual smallest by population is Brunei, much larger physically. Walking across any single Maldivian island takes well under an hour; the country is just spread across 1,200 islands.",
    "question": "The Maldives is Asia's smallest country by area at approximately 298 km². What is notable about its geography?",
    "answers": {
      "A": "It consists of around 1,200 islands, with each island taking less than an hour to walk across",
      "B": "It is the smallest country in Asia by both area and population",
      "C": "It is larger in area than Brunei, Asia's smallest country by population",
      "D": "It has only 12 major islands spread across a vast ocean territory"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq72",
    "fact": "Olympic gold medals are mostly silver — typically 92.5% silver with just 6 grams of gold plating (about 1.2%). The last solid-gold Olympic medals were awarded in Stockholm 1912.",
    "question": "What is the primary metal composition of modern Olympic gold medals?",
    "answers": {
      "A": "92.5% silver with gold plating",
      "B": "92.5% gold with silver plating",
      "C": "50% gold and 50% silver",
      "D": "100% solid gold"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq73",
    "fact": "Genetic studies estimate that approximately 8% of men in the former Mongol Empire region — about 0.5% of all men globally, or 1 in 200 — descend in a direct male line from Genghis Khan or his close male relatives.",
    "question": "According to genetic studies, approximately what percentage of all men globally are estimated to be direct male descendants of Genghis Khan or his close male relatives?",
    "answers": {
      "A": "0.5%",
      "B": "8%",
      "C": "2%",
      "D": "5%"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq74",
    "fact": "The seven colours of the rainbow (Newton's classification): red, orange, yellow, green, blue, indigo, violet. Indigo is the one most people forget. Mnemonic: ROY G BIV.",
    "question": "According to Newton's classification, which of these is NOT one of the seven colours of the rainbow?",
    "answers": {
      "A": "Magenta",
      "B": "Indigo",
      "C": "Violet",
      "D": "Orange"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq75",
    "fact": "Horses kill more Australians per year than sharks, snakes, and spiders combined — through riding accidents and falls. Around 20 deaths a year. The country's deadliest reputation lies more with bees and horses than crocs.",
    "question": "Which animal is responsible for the most deaths in Australia per year?",
    "answers": {
      "A": "Horses",
      "B": "Sharks",
      "C": "Crocodiles",
      "D": "Snakes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq76",
    "fact": "Nepal's flag is a double-pennant shape — two stacked triangles. All 194 other national flags are rectangular or square. It's been Nepal's official flag since 1962.",
    "question": "Which country has the only non-rectangular or non-square national flag in the world?",
    "answers": {
      "A": "Nepal",
      "B": "Switzerland",
      "C": "Vatican City",
      "D": "Denmark"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq77",
    "fact": "Tim Berners-Lee invented the WWW in 1989 at CERN and deliberately chose not to patent it, giving it freely to the world. He was knighted in 2004. He has expressed concerns about how the web has evolved.",
    "question": "Tim Berners-Lee invented the World Wide Web at which scientific organization in 1989?",
    "answers": {
      "A": "CERN",
      "B": "MIT",
      "C": "Stanford University",
      "D": "Bell Labs"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq78",
    "fact": "The collective noun for flamingos is a 'flamboyance'. Other unusual animal group names: a murder of crows, a parliament of owls, a crash of rhinos, an ambush of tigers.",
    "question": "What is the collective noun for a group of flamingos?",
    "answers": {
      "A": "A flamboyance",
      "B": "A spectacle",
      "C": "A parade",
      "D": "A display"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq79",
    "fact": "A 2014 Science study found humans can distinguish at least 1 trillion different odours — far more than the previously assumed 10,000. The nose has ~400 types of smell receptors that combine to detect vast variety.",
    "question": "According to a 2014 Science study, how many different odours can humans distinguish?",
    "answers": {
      "A": "At least 1 trillion",
      "B": "Approximately 10,000",
      "C": "Around 100 million",
      "D": "Roughly 400,000"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq80",
    "fact": "The Great Fire of London burned for 4 days (2–6 September 1666), destroying ~13,200 houses, 87 churches, and St Paul's Cathedral. Official death toll: just 6 people — though historians suspect more perished undocumented.",
    "question": "The Great Fire of London in 1666 burned for how many days and destroyed approximately how many houses?",
    "answers": {
      "A": "4 days and approximately 13,200 houses",
      "B": "3 days and approximately 10,000 houses",
      "C": "5 days and approximately 15,000 houses",
      "D": "4 days and approximately 8,500 houses"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq81",
    "fact": "Loganair's flight between Westray and Papa Westray in Orkney, Scotland, officially lasts 1 minute 14 seconds in still air conditions — the world's shortest scheduled commercial flight. Distance: about 2.7 km.",
    "question": "What is the world's shortest scheduled commercial flight, and approximately how long does it take?",
    "answers": {
      "A": "Westray to Papa Westray in Orkney, Scotland - 1 minute 14 seconds",
      "B": "Skye to Raasay in Scotland - 45 seconds",
      "C": "Isle of Man to Liverpool - 2 minutes 30 seconds",
      "D": "Guernsey to Jersey in the Channel Islands - 90 seconds"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq82",
    "fact": "In physics, a jiffy = the time light takes to travel one centimetre — about 33.4 picoseconds. In electronics it's 1/60 of a second. In computing, 1/100 of a second. Casual usage = unspecified short time.",
    "question": "In physics, a 'jiffy' is defined as the time it takes light to travel one centimetre. Approximately how long is this?",
    "answers": {
      "A": "33.4 picoseconds",
      "B": "33.4 nanoseconds",
      "C": "33.4 microseconds",
      "D": "33.4 milliseconds"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq83",
    "fact": "Alfred Nobel invented dynamite in 1867 and became enormously wealthy from munitions. Horrified by a premature obituary calling him 'the merchant of death', he left his fortune to fund the Nobel Prizes. He died in 1896.",
    "question": "What event inspired Alfred Nobel to establish the Nobel Prizes with his fortune?",
    "answers": {
      "A": "Reading a premature obituary that called him 'the merchant of death'",
      "B": "Pressure from the Swedish government to fund scientific research",
      "C": "A deadly accident at one of his dynamite factories",
      "D": "A request from his dying wife to leave a charitable legacy"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq84",
    "fact": "Cleopatra VII was Macedonian Greek — a descendant of Ptolemy I, one of Alexander the Great's generals. She was reportedly the first ruler of her dynasty to actually learn the Egyptian language. Her family ruled Egypt for ~300 years.",
    "question": "Which ancient ruler was notably the first of her dynasty to learn the Egyptian language?",
    "answers": {
      "A": "Cleopatra VII",
      "B": "Nefertiti",
      "C": "Hatshepsut",
      "D": "Cleopatra II"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq85",
    "fact": "The Colosseum had an elaborate drainage system and could be flooded with water for 'naumachiae' — staged naval battles. This practice was common in the early years but was later abandoned when the underground hypogeum was constructed.",
    "question": "What were 'naumachiae' that were staged in the Colosseum using its elaborate drainage and flooding systems?",
    "answers": {
      "A": "Staged naval battles",
      "B": "Gladiator combat tournaments",
      "C": "Public executions by drowning",
      "D": "Religious fertility ceremonies"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq86",
    "fact": "Teaching at Oxford began around 1096–1167 AD. The Aztec city of Tenochtitlan was founded in 1325. Oxford predates the Aztec civilisation by roughly 200 years.",
    "question": "By approximately how many years did teaching at Oxford predate the founding of the Aztec city of Tenochtitlan?",
    "answers": {
      "A": "200 years",
      "B": "100 years",
      "C": "300 years",
      "D": "150 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq87",
    "fact": "Crocodilians have a membrane that holds their tongue firmly to the roof of their mouth — they physically cannot extend it. Alligators have the same constraint. This is one of the few anatomical limits unique to this group.",
    "question": "Which anatomical feature prevents crocodilians and alligators from extending their tongues?",
    "answers": {
      "A": "A membrane that holds the tongue firmly to the roof of the mouth",
      "B": "Extremely short tongue muscles that never developed",
      "C": "Teeth that grow over and pin down the tongue",
      "D": "A specialized bone structure called the lingual lock"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq88",
    "fact": "In 1971–72, Stanford students used ARPANET (the internet's predecessor) to arrange a marijuana deal with MIT students. The transaction predates the first 'official' e-commerce by over 20 years. The first legal online sale was a Sting CD in 1994.",
    "question": "In 1971-72, students from Stanford and MIT famously used ARPANET (the internet's predecessor) to arrange a transaction that predated the first official e-commerce by over 20 years. What were they attempting to buy?",
    "answers": {
      "A": "Marijuana",
      "B": "Computer equipment",
      "C": "Vinyl records",
      "D": "Concert tickets"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq89",
    "fact": "Research shows honey bees can learn to identify human faces using the same 'configural processing' technique humans use — recognising the overall arrangement of features rather than individual parts. They can be trained to match faces to rewards.",
    "question": "What technique do honey bees use to identify and recognize human faces?",
    "answers": {
      "A": "Configural processing - recognizing the overall arrangement of features",
      "B": "Feature detection - analyzing individual facial features separately",
      "C": "Color spectrum analysis - identifying unique skin tone patterns",
      "D": "Motion tracking - following facial movements and expressions"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq90",
    "fact": "The last guillotine execution in France was on 10 September 1977 — the same year Star Wars Episode IV was released (May 1977). France abolished the death penalty in 1981.",
    "question": "In what year was the last guillotine execution carried out in France?",
    "answers": {
      "A": "1977",
      "B": "1981",
      "C": "1975",
      "D": "1979"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq91",
    "fact": "The Anglo-Zanzibar War (27 August 1896) lasted between 38 and 45 minutes. Britain demanded the new Sultan stand down; he refused. British ships shelled the palace; the Sultan surrendered in under an hour.",
    "question": "What is notable about the Anglo-Zanzibar War of 1896?",
    "answers": {
      "A": "It was one of the shortest wars in history, lasting less than an hour",
      "B": "It lasted for three days before the Sultan agreed to British demands",
      "C": "It resulted in a stalemate between British and Zanzibari forces",
      "D": "It was fought entirely on land with no naval involvement"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq92",
    "fact": "The Shannon Number estimates ~10^120 possible chess games. Observable universe atoms: ~10^80. Chess has 40 orders of magnitude more possible games than atoms in everything we can see.",
    "question": "The Shannon Number estimates approximately how many possible chess games exist compared to the number of atoms in the observable universe?",
    "answers": {
      "A": "About 10^40 times more chess games than atoms",
      "B": "About 10^20 times more chess games than atoms",
      "C": "About the same number of chess games as atoms",
      "D": "About 10^40 times fewer chess games than atoms"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq93",
    "fact": "A shrimp's heart is located in its thorax — which is part of what we'd consider its 'head' region (the cephalothorax). Similarly, a shrimp's brain wraps around its oesophagus, so technically it thinks around its throat.",
    "question": "Where is a shrimp's heart located?",
    "answers": {
      "A": "In its thorax, which is part of its head region (cephalothorax)",
      "B": "In its abdomen, below its digestive system",
      "C": "Distributed throughout its entire body with no central organ",
      "D": "In its tail, where it pumps blood backward"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq94",
    "fact": "Armillaria ostoyae (honey fungus) in Malheur National Forest, Oregon, covers ~9.6 km² and is estimated to be 2,000–8,000 years old. It exists mostly underground. Blue whales are the largest animals but this fungus dwarfs them in mass.",
    "question": "What is the largest living organism on Earth by mass?",
    "answers": {
      "A": "Armillaria ostoyae (honey fungus) in Oregon",
      "B": "Blue whale",
      "C": "Giant sequoia tree in California",
      "D": "African elephant"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq95",
    "fact": "'Nerd' first appeared in Dr. Seuss's 1950 book 'If I Ran the Zoo' as the name of a fictional creature. By the 1960s it had become slang for an unfashionable, studious person. Seuss coined the word entirely by accident.",
    "question": "In which Dr. Seuss book did the word 'nerd' first appear as the name of a fictional creature?",
    "answers": {
      "A": "If I Ran the Zoo",
      "B": "The Cat in the Hat",
      "C": "Green Eggs and Ham",
      "D": "One Fish Two Fish Red Fish Blue Fish"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq96",
    "fact": "Built for the 1889 Paris World's Fair, the Eiffel Tower was intended as a temporary structure, to be torn down in 1909. It survived because it was repurposed as a radio transmission tower — making it militarily and commercially valuable.",
    "question": "The Eiffel Tower was originally built for the 1889 Paris World's Fair as a temporary structure scheduled for demolition in 1909. What saved it from being torn down?",
    "answers": {
      "A": "Its repurposing as a radio transmission tower made it militarily and commercially valuable",
      "B": "The French government decided it had become too iconic to destroy",
      "C": "It was converted into a luxury hotel that generated significant revenue",
      "D": "Engineering studies proved it was structurally superior to all other monuments"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq97",
    "fact": "Adult elephants are the only mammals physically incapable of jumping. Their bone structure and weight (~6 tonnes) make it impossible. They can run up to 25 km/h but all four feet never leave the ground simultaneously.",
    "question": "Which of the following mammals is physically incapable of jumping?",
    "answers": {
      "A": "Adult elephants",
      "B": "Adult rhinoceroses",
      "C": "Adult hippopotamuses",
      "D": "Adult giraffes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq98",
    "fact": "Nintendo was founded on 23 September 1889 in Kyoto by Fusajiro Yamauchi, making hand-crafted Hanafuda playing cards. It didn't enter the video game business until the 1970s. The company is over 130 years old.",
    "question": "In what year was Nintendo originally founded, and what was its initial product?",
    "answers": {
      "A": "1889, making hand-crafted Hanafuda playing cards",
      "B": "1923, manufacturing wooden toys",
      "C": "1951, producing novelty items and games",
      "D": "1975, entering the video game market"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq99",
    "fact": "A lightning bolt carries approximately 1–5 billion joules of energy. However, it lasts only microseconds, so the usable power is tiny. The total energy could toast about 100,000 slices but the delivery speed makes it impractical.",
    "question": "A single lightning bolt carries enough energy to toast approximately how many slices of bread?",
    "answers": {
      "A": "100,000 slices",
      "B": "10,000 slices",
      "C": "1 million slices",
      "D": "50,000 slices"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq100",
    "fact": "Saffron costs £5,000–£10,000 per kilogram, exceeding gold (~£50,000/kg by weight — though gold wins overall). Each saffron crocus produces just 3 stigmas, and they must be hand-harvested. 150,000 flowers yield ~1 kg of saffron.",
    "question": "Approximately how many saffron crocus flowers are needed to produce just 1 kilogram of saffron?",
    "answers": {
      "A": "150,000 flowers",
      "B": "50,000 flowers",
      "C": "300,000 flowers",
      "D": "75,000 flowers"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq101",
    "fact": "The founders intended to name the search engine 'Googol' (10^100, representing vast amounts of data). When checking if the domain was available, investor Sean Anderson misspelled it as 'Google' — and the name stuck.",
    "question": "What mathematical term was originally intended to be the name of Google, before a misspelling by investor Sean Anderson led to the name that stuck?",
    "answers": {
      "A": "Googol",
      "B": "Gigabyte",
      "C": "Algorithm",
      "D": "Logarithm"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq102",
    "fact": "Ancient Egyptians worshipped the cat goddess Bastet from around 2900 BC. Killing a cat was punishable by death. When a household cat died, the family shaved off their eyebrows in mourning. Thousands of mummified cats have been found.",
    "question": "In ancient Egypt, what was the punishment for killing a cat?",
    "answers": {
      "A": "Death",
      "B": "Enslavement for life",
      "C": "Amputation of the hand",
      "D": "Banishment from the kingdom"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq103",
    "fact": "The Pacific Ocean spans approximately 19,800 km at its widest point. The Moon's diameter is 3,474 km. The Pacific is about 5.7 times wider than the Moon's full diameter.",
    "question": "Approximately how many times wider is the Pacific Ocean at its widest point compared to the Moon's diameter?",
    "answers": {
      "A": "5.7 times",
      "B": "3.2 times",
      "C": "8.9 times",
      "D": "4.1 times"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq104",
    "fact": "One theory traces 'rule of thumb' to an 18th-century legal principle allowing men to beat their wives with a stick no thicker than their thumb. Historians dispute this origin, but it remains one of the most debated etymologies in English.",
    "question": "What is one disputed theory about the origin of the phrase 'rule of thumb'?",
    "answers": {
      "A": "An 18th-century legal principle allegedly allowing men to beat their wives with a stick no thicker than their thumb",
      "B": "A medieval cooking instruction to stir porridge with your thumb instead of a spoon",
      "C": "A 16th-century naval regulation limiting the thickness of wooden ship masts",
      "D": "A Victorian-era tailor's measurement technique for fitting clothes without formal tools"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq105",
    "fact": "Vending machines kill approximately 13 people per year in the US — usually from people rocking them to dislodge stuck items. Sharks kill 5–10 people globally per year. Vending machines are statistically more dangerous.",
    "question": "According to US statistics, which of the following causes more deaths per year?",
    "answers": {
      "A": "Vending machine accidents",
      "B": "Shark attacks worldwide",
      "C": "Lightning strikes in the US",
      "D": "Bee stings in the US"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq106",
    "fact": "An adult body contains roughly 3–4 grams of iron — mostly in red blood cells as haemoglobin. That's enough iron to forge a small nail of about 7–8 cm. Other metals in your body: ~2g zinc, ~0.2g copper.",
    "question": "Approximately how much iron is contained in an adult human body, and what could this amount theoretically forge?",
    "answers": {
      "A": "3-4 grams of iron, enough to forge a small nail of 7-8 cm",
      "B": "5-6 grams of iron, enough to forge a small nail of 10-12 cm",
      "C": "2-3 grams of iron, enough to forge a small nail of 5-6 cm",
      "D": "1-2 grams of iron, enough to forge a small nail of 3-4 cm"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq107",
    "fact": "Churchill was born prematurely on 30 November 1874 at Blenheim Palace during a party. His mother went into labour unexpectedly, and the nearest available room was a small ladies' cloakroom. The rest is history.",
    "question": "Where was Winston Churchill born?",
    "answers": {
      "A": "In a ladies' cloakroom at Blenheim Palace during a party",
      "B": "In a hospital in London",
      "C": "In a bedroom at Blenheim Palace",
      "D": "In a carriage on the way to the hospital"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq108",
    "fact": "The electrons in motion carrying internet data have a collective mass of approximately 50 grams — roughly the weight of a strawberry. This was calculated by physicist Russell Seitz based on the energy/mass of moving electrons.",
    "question": "According to physicist Russell Seitz's calculations, what is the approximate collective mass of all electrons in motion carrying internet data around the world?",
    "answers": {
      "A": "About 50 grams, roughly the weight of a strawberry",
      "B": "About 500 grams, roughly the weight of a loaf of bread",
      "C": "About 5 kilograms, roughly the weight of a small dog",
      "D": "About 50 kilograms, roughly the weight of an adult human"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq109",
    "fact": "Alaska contains the westernmost point of the US (Attu Island) and — because the Aleutian Islands cross the 180° meridian — also the easternmost point. It's also the northernmost. Alaska holds three directional records simultaneously.",
    "question": "Which US state holds the records for being simultaneously the westernmost, easternmost, and northernmost point in the country?",
    "answers": {
      "A": "Alaska",
      "B": "Hawaii",
      "C": "Maine",
      "D": "Washington"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq110",
    "fact": "Walter Morrison invented the Frisbee in the 1940s. When he died in 2010, his family honoured his wishes and had his ashes mixed into a batch of Frisbees, which were distributed to friends and family.",
    "question": "In what decade did Walter Morrison invent the Frisbee?",
    "answers": {
      "A": "The 1940s",
      "B": "The 1930s",
      "C": "The 1950s",
      "D": "The 1960s"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq111",
    "fact": "The collective noun for porcupines is a 'prickle'. Other unusual animal group names: a bloat of hippos, a tower of giraffes, a conspiracy of lemurs, a flamboyance of flamingos, a murder of crows.",
    "question": "What is the collective noun for a group of porcupines?",
    "answers": {
      "A": "A prickle",
      "B": "A quill",
      "C": "A spike",
      "D": "A needle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq112",
    "fact": "Elizabeth Magie patented 'The Landlord's Game' in 1903 to demonstrate how landlords enrich themselves while tenants get poorer. Charles Darrow later claimed credit for a similar game, which became Monopoly in 1935. Magie received $500 and no royalties.",
    "question": "Elizabeth Magie patented 'The Landlord's Game' in 1903 as a critique of wealth inequality. However, which man later claimed credit for a similar game that became the board game 'Monopoly' in 1935?",
    "answers": {
      "A": "Charles Darrow",
      "B": "George Parker",
      "C": "Milton Bradley",
      "D": "Alfred Mosher Butts"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq113",
    "fact": "Try it — the moment you close your nostrils, humming stops. Humming requires air to flow through the nasal passage. When you block the nose, airflow stops and the sound can't be produced.",
    "question": "What happens to humming when you close your nostrils?",
    "answers": {
      "A": "It stops because air can no longer flow through the nasal passage",
      "B": "It becomes quieter but continues at a lower volume",
      "C": "It changes pitch but continues normally",
      "D": "It transfers to sound produced only by the vocal cords"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq114",
    "fact": "Sections of the Great Wall that have fallen into disrepair have trees and plants growing through the stonework — their roots breaking up the structure. Conservation teams actively manage vegetation on protected sections but many remote areas are reclaimed by nature.",
    "question": "What natural process is actively damaging disrepaired sections of the Great Wall of China?",
    "answers": {
      "A": "Tree and plant roots breaking through the stonework",
      "B": "Erosion from monsoon rainfall washing away mortar",
      "C": "Animal burrows destabilizing the foundation",
      "D": "Freeze-thaw cycles cracking the stone blocks"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq115",
    "fact": "The Galápagos penguin lives near the equator on the Galápagos Islands — slightly north of it in places, making it the only penguin species that lives (partially) in the Northern Hemisphere.",
    "question": "Which penguin species is unique for living partially in the Northern Hemisphere?",
    "answers": {
      "A": "The Galápagos penguin",
      "B": "The Adelie penguin",
      "C": "The Emperor penguin",
      "D": "The Rockhopper penguin"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq116",
    "fact": "Both Amelia Earhart and Walt Disney were born in 1901. Earhart became the first woman to fly solo across the Atlantic in 1932. Disney founded his studio in 1923. Two cultural icons, same birth year.",
    "question": "Amelia Earhart and Walt Disney shared the same birth year. In what year were both of these cultural icons born?",
    "answers": {
      "A": "1901",
      "B": "1899",
      "C": "1903",
      "D": "1905"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq117",
    "fact": "The collective noun for cats is a 'clowder'. A group of kittens is a 'kindle'. A group of wild cats is a 'destruction'. Most people only know 'litter' for kittens, but 'kindle' is the correct collective noun.",
    "question": "What is the correct collective noun for a group of kittens?",
    "answers": {
      "A": "Kindle",
      "B": "Litter",
      "C": "Clowder",
      "D": "Destruction"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq118",
    "fact": "Robert Kearns invented intermittent windscreen wipers in the 1960s. Ford and Chrysler copied his design without credit or payment. He sued and eventually won ~$30 million in settlements — but spent decades fighting and the stress cost him his marriage and mental health.",
    "question": "Robert Kearns invented intermittent windscreen wipers in the 1960s and sued major car manufacturers for copying his design. Approximately how much did he eventually win in settlements?",
    "answers": {
      "A": "~$30 million",
      "B": "~$5 million",
      "C": "~$100 million",
      "D": "~$15 million"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq119",
    "fact": "The # symbol is officially called an octothorpe. 'Octo' = eight (for its eight points), 'thorpe' = obscure origin. It was used on telephone keypads before Twitter made it a cultural phenomenon in 2007.",
    "question": "What is the official name for the # symbol, and what does the 'octo' prefix refer to?",
    "answers": {
      "A": "Octothorpe; the eight points of the symbol",
      "B": "Octogram; the eight angles it creates",
      "C": "Octohash; the eight-sided shape",
      "D": "Octopoint; the eight directions it faces"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq120",
    "fact": "Rome sits at ~41.9°N. Beijing sits at ~39.9°N. They're less than 2 degrees of latitude apart — putting two of history's greatest capital cities at virtually the same distance from the equator, despite being vastly different culturally.",
    "question": "Rome and Beijing are separated by less than 2 degrees of latitude. Approximately how many degrees north of the equator are both cities located?",
    "answers": {
      "A": "Between 39-42 degrees north",
      "B": "Between 45-48 degrees north",
      "C": "Between 35-38 degrees north",
      "D": "Between 50-53 degrees north"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq121",
    "fact": "Jack Dorsey sent the first ever tweet: 'just setting up my twttr' on 21 March 2006. The original tweet sold as an NFT in 2021 for $2.9 million. By 2023 its value had dropped to offers of under $20,000.",
    "question": "In 2021, Jack Dorsey's first-ever tweet 'just setting up my twttr' sold as an NFT for how much money?",
    "answers": {
      "A": "$2.9 million",
      "B": "$5.2 million",
      "C": "$1.4 million",
      "D": "$8.7 million"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq122",
    "fact": "The stapes (ear bone): ~3mm. The femur (thigh bone): ~50cm. Ratio: roughly 1:200. One is critical for hearing, the other supports your entire body weight and connects to the most powerful muscles.",
    "question": "What is the approximate ratio in size between the stapes (the smallest bone in the human body) and the femur (the largest)?",
    "answers": {
      "A": "1:200",
      "B": "1:100",
      "C": "1:500",
      "D": "1:50"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq123",
    "fact": "Cats have 32 muscles controlling each ear, allowing them to rotate their ears 180° independently of each other to pinpoint sounds. Humans have about 6 ear muscles and most people can barely move them at all.",
    "question": "How many muscles does a cat have controlling each ear, giving them the ability to rotate their ears 180° independently?",
    "answers": {
      "A": "32 muscles",
      "B": "16 muscles",
      "C": "48 muscles",
      "D": "24 muscles"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq124",
    "fact": "Before entering politics, Lincoln co-owned a tavern called Berry and Lincoln in New Salem, Illinois, in 1833. He was issued a tavern keeper's licence and served alcohol. The business failed within a year.",
    "question": "In 1833, Abraham Lincoln co-owned a tavern in New Salem, Illinois. What was the name of this establishment?",
    "answers": {
      "A": "Berry and Lincoln",
      "B": "Lincoln and Sons",
      "C": "The New Salem Inn",
      "D": "Lincoln's Tavern"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq125",
    "fact": "QWERTY top row: Q, W, E, R, T, Y, U, I, O, P. 'Typewriter' (10 letters) uses only those keys and is the longest common English word achievable. This is sometimes called one of the original typewriter marketing demonstrations.",
    "question": "What is the longest common English word that can be typed using only the top row of a QWERTY keyboard?",
    "answers": {
      "A": "typewriter",
      "B": "perpetual",
      "C": "queueing",
      "D": "territory"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq126",
    "fact": "Walter Arnold of East Peckham, Kent, was fined for speeding on 28 January 1896 — going 8 mph (13 km/h) in a 2 mph zone. He was caught by a policeman who had to chase him on a bicycle.",
    "question": "In 1896, Walter Arnold of East Peckham, Kent became a speeding law pioneer when he was fined for exceeding the speed limit. How fast was he going in a 2 mph zone?",
    "answers": {
      "A": "8 mph",
      "B": "12 mph",
      "C": "15 mph",
      "D": "20 mph"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq127",
    "fact": "All planets rotate counter-clockwise when viewed from above the North Pole — except Venus, which rotates clockwise (retrograde). Uranus also has an unusual rotation, tilted almost 98° on its side.",
    "question": "Which of the following statements about planetary rotation is correct?",
    "answers": {
      "A": "Venus rotates clockwise when viewed from above the North Pole, unlike all other planets",
      "B": "All planets in our solar system rotate counter-clockwise when viewed from above the North Pole",
      "C": "Mars rotates on its side at a 98-degree tilt, similar to Uranus",
      "D": "Jupiter is the only planet besides Venus that rotates in a retrograde direction"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq128",
    "fact": "The 1918–1919 influenza pandemic was dubbed 'Spanish Flu' not because it started there but because Spain — neutral in WW1 — had a free press that reported deaths openly. Warring nations censored their own outbreaks. True origin is disputed (possibly USA, China, or France).",
    "question": "Why was the 1918-1919 influenza pandemic called 'Spanish Flu' when it likely didn't originate in Spain?",
    "answers": {
      "A": "Spain was neutral in WW1 and had a free press that openly reported deaths, while warring nations censored their outbreaks",
      "B": "The virus was first identified by Spanish scientists in Madrid",
      "C": "Spain had the highest death toll from the pandemic",
      "D": "Spanish explorers had brought a similar virus back from South America decades earlier"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq129",
    "fact": "A Martian day (sol) = 24 hours, 39 minutes, 35 seconds — just 40 minutes longer than an Earth day. This is one of the most convenient similarities between the two planets for potential future colonists.",
    "question": "How much longer is a Martian day (sol) compared to an Earth day?",
    "answers": {
      "A": "Approximately 40 minutes",
      "B": "Approximately 2 hours",
      "C": "Approximately 1 hour",
      "D": "Approximately 90 minutes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq130",
    "fact": "On 22 September 1955, the UK's first commercial TV broadcast (ITV) aired its first advertisement — for Gibbs SR toothpaste. The advert showed a block of ice with a tube of toothpaste and urged viewers to keep their teeth 'tingling fresh'.",
    "question": "What was the first product advertised on ITV when UK commercial television launched on 22 September 1955?",
    "answers": {
      "A": "Gibbs SR toothpaste",
      "B": "Colgate toothpaste",
      "C": "Cadbury chocolate",
      "D": "Persil washing powder"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq131",
    "fact": "The average person takes about 7,500 steps per day. Over 80 years, that's roughly 216 million steps — equivalent to walking ~177,000 km or about 4.5 times around the Earth's circumference.",
    "question": "If the average person takes about 7,500 steps per day over a lifetime of 80 years, approximately how many times around Earth's circumference would that distance equal?",
    "answers": {
      "A": "4.5 times",
      "B": "2.8 times",
      "C": "7.2 times",
      "D": "1.9 times"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq132",
    "fact": "During the Black Death, Venice required ships arriving from infected ports to anchor offshore for 40 days before landing. The Italian 'quarantina' or 'quaranta giorni' = forty days. The specific 40-day period has Biblical and medical roots.",
    "question": "What is the origin of the word 'quarantine', and how long was the isolation period used by Venice during the Black Death?",
    "answers": {
      "A": "From the Italian 'quarantina' meaning forty days, the period Venice required ships to anchor offshore before landing",
      "B": "From the Latin 'quartus' meaning fourth, referring to the fourth day of illness symptoms in plague victims",
      "C": "From the French 'quatre' meaning four, as Venice isolated ships at four different ports around the city",
      "D": "From the Spanish 'cuarentena' meaning isolation, a term Venice adopted from Mediterranean trade partners"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq133",
    "fact": "The water boatman (Micronecta scholtzi) produces sound at 99.2 decibels relative to its body size — the loudest animal on Earth proportionally. It creates noise by rubbing its penis against its abdomen. The blue whale is louder in absolute terms.",
    "question": "Which animal produces the loudest sound relative to its body size?",
    "answers": {
      "A": "The water boatman",
      "B": "The blue whale",
      "C": "The sperm whale",
      "D": "The pistol shrimp"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq134",
    "fact": "'Project X-Ray' (1943): the US Army attached tiny incendiary bombs to thousands of Mexican free-tailed bats, planning to release them over Japanese cities to roost in wooden buildings and start fires. The project was cancelled when the atomic bomb took priority.",
    "question": "In 1943, the US Army developed 'Project X-Ray,' an unusual weapon that involved attaching tiny incendiary bombs to which animal?",
    "answers": {
      "A": "Mexican free-tailed bats",
      "B": "Carrier pigeons",
      "C": "Arctic foxes",
      "D": "Flying squirrels"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq135",
    "fact": "Butterflies have chemoreceptors (taste sensors) on their tarsi (feet). When they land on a surface, they immediately taste it — helping them identify food sources and suitable plants for laying eggs. They 'taste' before they eat.",
    "question": "Where are a butterfly's taste sensors (chemoreceptors) located?",
    "answers": {
      "A": "On their feet (tarsi)",
      "B": "On their proboscis (tongue)",
      "C": "On their antennae",
      "D": "On their wings"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq136",
    "fact": "The longest officially recorded flight of a chicken is 13 seconds. Despite having wings, chickens are too heavy relative to their wing size for sustained flight. They can briefly flutter to escape predators or reach low roosts.",
    "question": "What is the longest officially recorded flight time of a chicken?",
    "answers": {
      "A": "13 seconds",
      "B": "45 seconds",
      "C": "2 minutes",
      "D": "8 seconds"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq137",
    "fact": "Hasbro prints approximately $30 billion in Monopoly money per year. The US Bureau of Engraving and Printing produces about $700 million to $1.5 billion in new bills annually. Monopoly outprints the Fed in dollar terms.",
    "question": "Approximately how much Monopoly money does Hasbro print annually, compared to the US Bureau of Engraving and Printing?",
    "answers": {
      "A": "About $30 billion in Monopoly money, more than the Fed's $700 million to $1.5 billion",
      "B": "About $5 billion in Monopoly money, less than the Fed's annual production",
      "C": "About $30 billion in Monopoly money, but still less than the Fed's total output",
      "D": "About $100 billion in Monopoly money, roughly equal to all US currency in circulation"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq138",
    "fact": "Ancient Roman dental hygiene included recipes using powdered mouse brain, rabbit heads, urine, and ground oyster shells. Urine (containing ammonia) was actually somewhat effective for cleaning. Crushed charcoal was also common.",
    "question": "Which of these ingredients was NOT commonly used in ancient Roman toothpaste recipes?",
    "answers": {
      "A": "Powdered mouse brain",
      "B": "Crushed charcoal",
      "C": "Ground oyster shells",
      "D": "Volcanic pumice"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq139",
    "fact": "In early computing, a 'jiffy' was standardised at 1/100 of a second (10 milliseconds) — the interval between system clock ticks on many operating systems. Unix systems later used 1/60 or 1/1000 of a second depending on the platform.",
    "question": "In early computing, what was the standardised duration of a 'jiffy'?",
    "answers": {
      "A": "10 milliseconds (1/100 of a second)",
      "B": "1 millisecond (1/1000 of a second)",
      "C": "16.67 milliseconds (1/60 of a second)",
      "D": "100 milliseconds (1/10 of a second)"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq140",
    "fact": "The Pythagorean cup (or Tantalus cup) looks normal but contains a hidden siphon. Fill it to the line — fine. Fill it past the line — all the liquid drains out through the bottom. Pythagoras allegedly used them to enforce moderation.",
    "question": "The Pythagorean cup, also known as a Tantalus cup, is a novelty drinking vessel with a hidden mechanism. What happens if you fill it beyond a certain line?",
    "answers": {
      "A": "All the liquid drains out through the bottom",
      "B": "The cup becomes too heavy to lift safely",
      "C": "A buzzer alarm sounds to warn you to stop drinking",
      "D": "The excess liquid overflows from the top in a controlled manner"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq141",
    "fact": "E accounts for approximately 11–13% of all letters in standard English text. This is why the letter E is given the highest frequency in Scrabble and why Morse code assigns E the shortest signal (a single dot).",
    "question": "Approximately what percentage of all letters in standard English text is the letter E?",
    "answers": {
      "A": "11-13%",
      "B": "8-10%",
      "C": "15-17%",
      "D": "5-7%"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq142",
    "fact": "Japan's vending machine culture is legendary — estimated 5 million machines nationwide. Beyond drinks, they dispense: fresh ramen, canned bread, umbrellas, ties, live crabs, and yes — used schoolgirl underwear (now largely illegal but still occasionally found).",
    "question": "Approximately how many vending machines are estimated to operate throughout Japan?",
    "answers": {
      "A": "5 million",
      "B": "2 million",
      "C": "10 million",
      "D": "500,000"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq143",
    "fact": "Shigetaka Kurita designed the original 176 emoji in 1999 for NTT DoCoMo's mobile internet service. Each was 12x12 pixels. The original set is now in the Museum of Modern Art (MoMA) collection in New York.",
    "question": "Who designed the original set of 176 emoji in 1999 for NTT DoCoMo's mobile internet service?",
    "answers": {
      "A": "Shigetaka Kurita",
      "B": "Masaya Doi",
      "C": "Ken Sakamura",
      "D": "Shigeru Miyamoto"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq144",
    "fact": "The world's first traffic light was installed in London in December 1868 outside the Houses of Parliament. It used gas lamps (red and green). It exploded on 2 January 1869, injuring the police officer operating it, and wasn't used again for decades.",
    "question": "Where was the world's first traffic light installed in December 1868?",
    "answers": {
      "A": "Outside the Houses of Parliament in London",
      "B": "At Piccadilly Circus in London",
      "C": "Outside Westminster Abbey in London",
      "D": "At Tower Bridge in London"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq145",
    "fact": "In colonial New England, lobsters were so abundant they washed ashore in piles. Feeding servants lobster more than 3 times a week was considered cruel and unusual. Laws were passed against it. Today a single lobster costs more than a day's minimum wage.",
    "question": "In colonial New England, there were laws against feeding servants lobster more than 3 times a week. Why?",
    "answers": {
      "A": "It was considered cruel and unusual punishment because lobsters were so abundant they were seen as a low-status food",
      "B": "Lobster was believed to cause disease and illness if consumed too frequently",
      "C": "The colonial government wanted to preserve lobster populations for export to Europe",
      "D": "Lobster shells were toxic and caused poisoning when eaten more than three times weekly"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq146",
    "fact": "The oldest recorded joke comes from ancient Sumer (~1900 BC): 'Something which has never occurred since time immemorial; a young woman did not fart in her husband's lap.' The second oldest (1600 BC Egyptian) is also scatological.",
    "question": "What is considered the oldest recorded joke in history, originating from ancient Sumer around 1900 BC?",
    "answers": {
      "A": "A joke about a young woman not farting in her husband's lap",
      "B": "A pun about the flooding of the Nile River",
      "C": "A riddle about the construction of the Great Pyramid",
      "D": "A joke about a merchant losing his donkey at the market"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq147",
    "fact": "The blue whale's heart weighs ~180 kg and is the size of a small car. Its main aorta is wide enough for a human to crawl through. The heart beats 4–8 times per minute and pumps blood through the 30-metre, 150-tonne body.",
    "question": "Approximately how much does a blue whale's heart weigh?",
    "answers": {
      "A": "180 kg",
      "B": "280 kg",
      "C": "80 kg",
      "D": "380 kg"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq148",
    "fact": "The Sun constantly produces sound waves from its convecting plasma — 'solar music'. These waves are at around 0.003 mHz — far below human hearing range (20 Hz minimum). Scientists can speed up the recordings to make them audible.",
    "question": "What frequency range do the sound waves produced by the Sun's convecting plasma typically occupy?",
    "answers": {
      "A": "Around 0.003 mHz",
      "B": "Around 3 Hz",
      "C": "Around 20 Hz",
      "D": "Around 200 Hz"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq149",
    "fact": "Painted turtles and some other species can absorb oxygen through their cloaca (posterior opening) during winter hibernation — a process called cloacal bursae respiration. It allows them to stay submerged under ice for months without breathing.",
    "question": "How do painted turtles survive being frozen under ice for months without surfacing to breathe?",
    "answers": {
      "A": "They absorb oxygen through their cloaca, a process called cloacal bursae respiration",
      "B": "They store enough air in their lungs to last the entire winter",
      "C": "They enter a state of suspended animation where they require no oxygen at all",
      "D": "They periodically break through the ice to take quick breaths"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq150",
    "fact": "Kopi Luwak is made from coffee beans that have been eaten and excreted by Asian palm civets. The digestive process supposedly alters the beans' flavour. It sells for $100–$600 per kg. Elephant-processed Black Ivory Coffee from Thailand is even more expensive.",
    "question": "Kopi Luwak, one of the world's most expensive coffees, is distinctive because the coffee beans have been eaten and digested by which animal?",
    "answers": {
      "A": "Asian palm civets",
      "B": "African elephants",
      "C": "Indonesian monkeys",
      "D": "Thai water buffalo"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq151",
    "fact": "The Anglo-Zanzibar War of 27 August 1896 lasted between 38 and 45 minutes. Britain demanded the new Sultan stand down. He refused. British ships shelled the palace and the Sultan surrendered.",
    "question": "The Anglo-Zanzibar War of 1896 is notable for being one of the shortest wars in history. Approximately how long did it last?",
    "answers": {
      "A": "Between 38 and 45 minutes",
      "B": "Between 2 and 3 hours",
      "C": "Between 1 and 2 days",
      "D": "Between 3 and 5 days"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq152",
    "fact": "Nintendo was founded on 23 September 1889 in Kyoto by Fusajiro Yamauchi, making hand-crafted Hanafuda playing cards. It did not enter the video game business until the 1970s.",
    "question": "In what year was Nintendo originally founded, and what was its initial product?",
    "answers": {
      "A": "1889 in Kyoto, making hand-crafted Hanafuda playing cards",
      "B": "1902 in Tokyo, manufacturing wooden toys",
      "C": "1875 in Osaka, producing silk fabrics",
      "D": "1912 in Kyoto, creating board games"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq153",
    "fact": "'Nerd' first appeared in 'If I Ran the Zoo' (1950) as the name of a fictional creature. By the 1960s it had become slang for an unfashionable, studious person. Seuss coined it accidentally.",
    "question": "In which Dr. Seuss book did the word 'nerd' first appear as the name of a fictional creature?",
    "answers": {
      "A": "If I Ran the Zoo",
      "B": "The Cat in the Hat",
      "C": "Green Eggs and Ham",
      "D": "One Fish Two Fish Red Fish Blue Fish"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq154",
    "fact": "Built for the 1889 Paris World's Fair as a temporary structure, it was to be torn down in 1909. It survived because it was repurposed as a radio transmission tower.",
    "question": "Which famous Parisian landmark was originally built as a temporary structure for the 1889 World's Fair but was saved from demolition by being repurposed as a radio transmission tower?",
    "answers": {
      "A": "Eiffel Tower",
      "B": "Arc de Triomphe",
      "C": "Sacré-Cœur Basilica",
      "D": "Palais Garnier"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq155",
    "fact": "Adult elephants are the only mammals physically incapable of jumping. Their bone structure and weight (up to 6 tonnes) make it impossible. They can run up to 25 km/h but all four feet never leave the ground together.",
    "question": "Which of the following is the only mammal physically incapable of jumping?",
    "answers": {
      "A": "Adult elephants",
      "B": "Adult rhinoceroses",
      "C": "Adult hippopotamuses",
      "D": "Adult giraffes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq156",
    "fact": "The Pacific Ocean spans approximately 19,800 km at its widest point. The Moon is 3,474 km in diameter. The Pacific is about 5.7 times wider than the Moon.",
    "question": "Approximately how many times wider is the Pacific Ocean at its widest point compared to the diameter of the Moon?",
    "answers": {
      "A": "5.7 times",
      "B": "3.2 times",
      "C": "8.4 times",
      "D": "2.1 times"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq157",
    "fact": "Vending machines kill approximately 13 people per year in the US — usually from rocking them to dislodge stuck items. Sharks kill 5-10 people globally per year.",
    "question": "According to US statistics, which of the following causes approximately 13 deaths per year in America?",
    "answers": {
      "A": "Vending machine accidents",
      "B": "Shark attacks",
      "C": "Lightning strikes",
      "D": "Bee stings"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq158",
    "fact": "Teaching at Oxford began around 1096-1167 AD. The Aztec city of Tenochtitlan was founded in 1325. Oxford predates the Aztec civilisation by roughly 200 years.",
    "question": "By approximately how many years did teaching at Oxford predate the founding of the Aztec city of Tenochtitlan?",
    "answers": {
      "A": "200 years",
      "B": "100 years",
      "C": "300 years",
      "D": "150 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq159",
    "fact": "The collective noun for flamingos is a 'flamboyance'. Other unusual animal group names: a murder of crows, a parliament of owls, a crash of rhinos.",
    "question": "What is the collective noun for a group of flamingos?",
    "answers": {
      "A": "A flamboyance",
      "B": "A spectacle",
      "C": "A parade",
      "D": "A display"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq160",
    "fact": "The fire burned for 4 days (2-6 September 1666), destroying ~13,200 houses and 87 churches. Official death toll: just 6 people — though historians suspect more perished undocumented.",
    "question": "The Great Fire of London (1666) burned for how many days and destroyed approximately how many houses?",
    "answers": {
      "A": "4 days and ~13,200 houses",
      "B": "3 days and ~13,200 houses",
      "C": "4 days and ~8,500 houses",
      "D": "5 days and ~15,000 houses"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq161",
    "fact": "Jack Dorsey sent the first ever tweet: 'just setting up my twttr' on 21 March 2006. The original tweet sold as an NFT in 2021 for $2.9 million.",
    "question": "Jack Dorsey's first-ever tweet, 'just setting up my twttr', was posted in what year and later sold as an NFT for how much money?",
    "answers": {
      "A": "2006 and $2.9 million",
      "B": "2006 and $1.5 million",
      "C": "2007 and $2.9 million",
      "D": "2006 and $5.2 million"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq162",
    "fact": "Cleopatra VII was a descendant of Ptolemy I, one of Alexander the Great's generals. She was reportedly the first ruler of her dynasty to learn the Egyptian language.",
    "question": "Cleopatra VII was notably the first ruler of her dynasty to do what?",
    "answers": {
      "A": "Learn the Egyptian language",
      "B": "Rule without a male co-regent",
      "C": "Build a major library in Alexandria",
      "D": "Marry a Roman general"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq163",
    "fact": "A shrimp's heart is located in its cephalothorax — what we would consider its head region. Its brain wraps around its oesophagus — it literally thinks around its throat.",
    "question": "Where is a shrimp's heart located?",
    "answers": {
      "A": "In its cephalothorax (head region)",
      "B": "In its abdomen",
      "C": "Distributed throughout its body",
      "D": "In its tail"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq164",
    "fact": "The Shannon Number estimates ~10^120 possible chess games. Observable universe atoms: ~10^80. Chess has 40 orders of magnitude more possible games than atoms in everything we can see.",
    "question": "The Shannon Number estimates the number of possible chess games at approximately 10^120. How does this compare to the estimated number of atoms in the observable universe (10^80)?",
    "answers": {
      "A": "Chess has roughly 40 orders of magnitude more possible games than atoms in the observable universe",
      "B": "Chess has roughly 10 orders of magnitude more possible games than atoms in the observable universe",
      "C": "Atoms in the observable universe outnumber possible chess games by 40 orders of magnitude",
      "D": "Both numbers are approximately equal in scale"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq165",
    "fact": "Research shows honey bees can learn to identify human faces using configural processing — recognising the overall arrangement of features rather than individual parts. They can be trained to match faces to rewards.",
    "question": "According to research, how are honey bees able to recognize and distinguish between different human faces?",
    "answers": {
      "A": "By recognizing the overall arrangement of facial features rather than individual parts",
      "B": "By detecting the unique scent signature produced by each person's skin",
      "C": "By memorizing the specific wavelength of light reflected from each face",
      "D": "By using their compound eyes to focus on and identify individual facial features one at a time"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq166",
    "fact": "The last guillotine execution in France was on 10 September 1977 — the same year Star Wars Episode IV was released (May 1977). France abolished the death penalty in 1981.",
    "question": "In what year was the last guillotine execution carried out in France?",
    "answers": {
      "A": "1977",
      "B": "1981",
      "C": "1975",
      "D": "1979"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq167",
    "fact": "Cats have 32 muscles controlling each ear, allowing them to rotate ears 180° independently to locate sounds. Humans have about 6 ear muscles and most people can barely move them.",
    "question": "How many muscles does each cat ear contain, allowing them to rotate independently up to 180 degrees?",
    "answers": {
      "A": "32 muscles",
      "B": "16 muscles",
      "C": "24 muscles",
      "D": "48 muscles"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq168",
    "fact": "Robert Kearns invented intermittent windscreen wipers in the 1960s. Ford and Chrysler copied his design. He sued and eventually won ~$30 million in settlements but spent decades fighting and lost his marriage.",
    "question": "Robert Kearns invented intermittent windscreen wipers in the 1960s and sued major car manufacturers for copying his design. Approximately how much did he eventually win in settlements?",
    "answers": {
      "A": "~$30 million",
      "B": "~$5 million",
      "C": "~$100 million",
      "D": "~$15 million"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq169",
    "fact": "The # symbol is officially called an octothorpe. 'Octo' = eight (for its eight points). It was used on telephone keypads before Twitter made it a cultural phenomenon in 2007.",
    "question": "What is the official name for the # symbol, and what does the 'octo' prefix refer to?",
    "answers": {
      "A": "Octothorpe; the eight points of the symbol",
      "B": "Octogram; the eight angles it creates",
      "C": "Octohash; the eight directions it points",
      "D": "Octonumber; the eight segments it contains"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq170",
    "fact": "Walter Arnold of Kent was fined for speeding on 28 January 1896 — going 8 mph in a 2 mph zone. He was caught by a policeman who chased him on a bicycle.",
    "question": "In 1896, Walter Arnold of Kent became the first person to be convicted of speeding. What was his speed when caught in a 2 mph zone?",
    "answers": {
      "A": "8 mph",
      "B": "12 mph",
      "C": "15 mph",
      "D": "20 mph"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq171",
    "fact": "All planets rotate counter-clockwise when viewed from above the North Pole — except Venus, which rotates clockwise. Uranus is also unusual, tilted almost 98° on its side.",
    "question": "Which of the following statements about planetary rotation is correct?",
    "answers": {
      "A": "Venus rotates clockwise when viewed from above the North Pole, unlike all other planets",
      "B": "All planets in our solar system rotate counter-clockwise when viewed from above the North Pole",
      "C": "Jupiter rotates clockwise and is tilted 98° on its side",
      "D": "Mercury is the only planet that rotates in the opposite direction to Venus"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq172",
    "fact": "A Martian day (sol) is 24 hours 39 minutes and 35 seconds — just 40 minutes longer than an Earth day. This is the most convenient overlap between the two planets for potential colonists.",
    "question": "How much longer is a Martian day (sol) compared to an Earth day?",
    "answers": {
      "A": "40 minutes",
      "B": "2 hours and 15 minutes",
      "C": "1 hour and 30 minutes",
      "D": "3 hours"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq173",
    "fact": "About 7,500 steps per day over 80 years equals roughly 216 million steps — equivalent to walking ~177,000 km or about 4-5 times around the Earth.",
    "question": "If someone walks approximately 7,500 steps per day for 80 years, roughly how many times around the Earth would that distance equal?",
    "answers": {
      "A": "4-5 times",
      "B": "2-3 times",
      "C": "7-8 times",
      "D": "10-12 times"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq174",
    "fact": "During the Black Death, Venice required ships to anchor offshore for 40 days before landing. The Italian 'quarantina' means forty days. The period had Biblical and medical roots.",
    "question": "The word 'quarantine' originates from an Italian word meaning 'forty days.' During which historical pandemic was this practice first implemented in Venice?",
    "answers": {
      "A": "The Black Death",
      "B": "The Spanish Flu",
      "C": "The Great Plague of London",
      "D": "The Justinian Plague"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq175",
    "fact": "Butterflies have taste sensors (chemoreceptors) on their tarsi (feet). When they land, they immediately taste the surface — helping identify food sources and suitable plants for laying eggs.",
    "question": "Where do butterflies have taste sensors that allow them to identify food sources when they land?",
    "answers": {
      "A": "On their feet (tarsi)",
      "B": "On their antennae",
      "C": "On their proboscis (tongue)",
      "D": "On their wings"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq176",
    "fact": "Saffron costs up to £10,000 per kilogram. Each saffron crocus produces just 3 stigmas which must be hand-harvested. About 150,000 flowers are needed to yield 1 kg of saffron.",
    "question": "Approximately how many saffron crocus flowers are needed to produce just 1 kilogram of saffron?",
    "answers": {
      "A": "150,000",
      "B": "50,000",
      "C": "500,000",
      "D": "1,000,000"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq177",
    "fact": "The founders intended to name it 'Googol' (10^100). When checking domain availability, investor Sean Anderson misspelled it as 'Google' — and the name stuck.",
    "question": "What was the original name the Google founders intended to use before a misspelling led to the company's actual name?",
    "answers": {
      "A": "Googol",
      "B": "Giggle",
      "C": "Goggle",
      "D": "Globus"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq178",
    "fact": "The oldest recorded joke: 'Something which has never occurred since time immemorial; a young woman did not fart in her husband's lap.' Scatological humour is apparently universal and eternal.",
    "question": "According to historical records, what is the subject of the oldest recorded joke, dating back to ancient times?",
    "answers": {
      "A": "A young woman breaking wind in her husband's lap",
      "B": "A merchant losing his donkey at the marketplace",
      "C": "A king being outsmarted by a peasant",
      "D": "A man slipping on a banana peel"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq179",
    "fact": "The blue whale's heart weighs ~180 kg and is the size of a small car. Its main aorta is wide enough for a human to crawl through. The heart beats 4-8 times per minute.",
    "question": "How many times per minute does a blue whale's heart beat?",
    "answers": {
      "A": "4-8 times",
      "B": "12-20 times",
      "C": "25-40 times",
      "D": "60-80 times"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq180",
    "fact": "Kopi Luwak is made from coffee beans eaten and excreted by Asian palm civets. The digestive process alters the beans. It sells for $100-600 per kg. Elephant-processed Black Ivory Coffee costs even more.",
    "question": "Kopi Luwak, one of the world's most expensive coffees, is unique because the coffee beans are processed through the digestive system of which animal?",
    "answers": {
      "A": "Asian palm civets",
      "B": "Ethiopian wildcats",
      "C": "Indonesian macaques",
      "D": "Vietnamese weasels"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq181",
    "fact": "Walter Morrison invented the Frisbee in the 1940s. When he died in 2010, his ashes were mixed into a batch of Frisbees and distributed to friends and family.",
    "question": "What unique tribute was paid to Walter Morrison, the inventor of the Frisbee, after his death in 2010?",
    "answers": {
      "A": "His ashes were mixed into a batch of Frisbees and distributed to friends and family",
      "B": "A memorial Frisbee tournament was held annually in his name",
      "C": "His childhood home was converted into a Frisbee museum",
      "D": "A statue of him was erected at the Frisbee World Championships"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq182",
    "fact": "Elizabeth Magie patented 'The Landlord's Game' in 1903 to show how landlords enrich themselves while tenants get poorer. Charles Darrow later claimed credit and became a millionaire. Magie received $500.",
    "question": "Elizabeth Magie invented a board game in 1903 called 'The Landlord's Game' to demonstrate economic inequality. However, another person later took credit for the game and became wealthy from it. Who was this person, and how much did Magie receive for her invention?",
    "answers": {
      "A": "Charles Darrow took credit and became a millionaire; Magie received $500",
      "B": "Parker Brothers' founder took credit and became a millionaire; Magie received $5,000",
      "C": "Alfred Baldwin Fisher took credit and became a millionaire; Magie received $1,000",
      "D": "George S. Parker took credit and became a millionaire; Magie received $500"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq183",
    "fact": "Try it — the moment you close your nostrils, humming stops. Humming requires airflow through the nasal passage. When you block the nose, the sound cannot be produced.",
    "question": "What happens to humming when you close your nostrils?",
    "answers": {
      "A": "It stops because airflow through the nasal passage is required",
      "B": "It becomes louder as the sound is forced through your mouth instead",
      "C": "It continues unchanged since humming only uses mouth vibrations",
      "D": "It transforms into a whistling sound"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq184",
    "fact": "In colonial New England, lobsters were so abundant they washed ashore in piles. Feeding servants lobster more than 3 times a week was considered cruel. Laws were passed against it.",
    "question": "In colonial New England, what creature was once so abundant that laws had to be passed to prevent servants from being fed it more than 3 times a week?",
    "answers": {
      "A": "Lobster",
      "B": "Cod",
      "C": "Oyster",
      "D": "Herring"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq185",
    "fact": "E accounts for approximately 11-13% of all letters in standard English text. This is why the letter E gets the highest frequency in Scrabble and Morse code assigns E the shortest signal — a single dot.",
    "question": "Why does the letter E have the highest frequency value in Scrabble and receive the shortest signal (a single dot) in Morse code?",
    "answers": {
      "A": "Because E accounts for approximately 11-13% of all letters in standard English text",
      "B": "Because E is the first vowel in the alphabet",
      "C": "Because E is the easiest letter to pronounce in English",
      "D": "Because E appears most frequently in the most commonly used English words"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq186",
    "fact": "The world's first traffic light was installed in London in December 1868 outside the Houses of Parliament. Using gas lamps, it exploded on 2 January 1869, injuring the police officer operating it.",
    "question": "What happened to the world's first traffic light, installed in London in December 1868?",
    "answers": {
      "A": "It exploded on 2 January 1869, injuring the police officer operating it",
      "B": "It was stolen by vandals within a week of installation",
      "C": "It malfunctioned and caused a major traffic accident in 1869",
      "D": "It was removed after complaints from local residents about the noise"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq187",
    "fact": "Painted turtles can absorb oxygen through their cloaca during winter hibernation — a process called cloacal bursae respiration. It allows them to stay submerged under ice for months without breathing.",
    "question": "How do painted turtles survive being frozen under ice for months without surfacing to breathe?",
    "answers": {
      "A": "They absorb oxygen through their cloaca in a process called cloacal bursae respiration",
      "B": "They enter a death-like state where their heart stops beating completely",
      "C": "They store enough oxygen in their lungs to last the entire winter",
      "D": "They absorb oxygen directly through their shell, which is porous like a sponge"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq188",
    "fact": "It was called the Spanish Flu not because it started there but because Spain — neutral in WW1 — had a free press that reported deaths openly. Warring nations censored their own outbreaks. True origin is disputed.",
    "question": "Why was the 1918 flu pandemic called the 'Spanish Flu' despite not originating in Spain?",
    "answers": {
      "A": "Spain was neutral in WWI and had a free press that openly reported deaths, while warring nations censored their outbreaks",
      "B": "The virus was first identified by Spanish scientists in Madrid",
      "C": "It spread to Europe primarily through Spanish ports and trading routes",
      "D": "Spain had the highest death toll from the pandemic of any country"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq189",
    "fact": "Loganair's flight between Westray and Papa Westray in Orkney, Scotland, officially lasts about 74 seconds in still air conditions. Distance: about 2.7 km.",
    "question": "What is the shortest scheduled commercial flight in the world, operated by Loganair between two Scottish islands?",
    "answers": {
      "A": "Westray to Papa Westray in Orkney, lasting about 74 seconds",
      "B": "Skye to Raasay in the Inner Hebrides, lasting about 90 seconds",
      "C": "Islay to Colonsay in Argyll and Bute, lasting about 60 seconds",
      "D": "Fair Isle to Sumburgh in Shetland, lasting about 2 minutes"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq190",
    "fact": "Armillaria ostoyae (honey fungus) in Malheur National Forest, Oregon, covers ~9.6 km2 and is estimated to be 2,000-8,000 years old. It exists mostly underground.",
    "question": "What is the name of the world's largest known organism by area, a fungus found in Oregon's Malheur National Forest that covers approximately 9.6 km² and is mostly underground?",
    "answers": {
      "A": "Armillaria ostoyae",
      "B": "Ganoderma lucidum",
      "C": "Cordyceps militaris",
      "D": "Leccinum scutiger"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq191",
    "fact": "In physics, a jiffy equals the time light takes to travel one centimetre — about 33 picoseconds. In computing it is 1/100 of a second. Casual usage just means a short time.",
    "question": "In physics, what does a 'jiffy' measure?",
    "answers": {
      "A": "The time light takes to travel one centimetre, approximately 33 picoseconds",
      "B": "The time light takes to travel one metre, approximately 3.3 nanoseconds",
      "C": "One hundredth of a second in duration",
      "D": "The time it takes sound to travel one centimetre in air"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq192",
    "fact": "Electricity had been observed for centuries. Franklin's famous 1752 kite experiment proved that lightning was electrical in nature, allowing the invention of the lightning rod.",
    "question": "Benjamin Franklin's 1752 kite experiment demonstrated that lightning was what?",
    "answers": {
      "A": "Electrical in nature",
      "B": "A form of magnetic energy",
      "C": "Caused by friction in the atmosphere",
      "D": "A divine punishment from the heavens"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq193",
    "fact": "Collective nouns: porcupines = a prickle. Hippos = a bloat. Giraffes = a tower. Lemurs = a conspiracy. Flamingos = a flamboyance. Crows = a murder.",
    "question": "What is the collective noun for a group of flamingos?",
    "answers": {
      "A": "A flamboyance",
      "B": "A spectacle",
      "C": "A colony",
      "D": "A parade"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq194",
    "fact": "Hasbro prints approximately $30 billion in Monopoly money per year. The US Bureau of Engraving and Printing produces about $1-1.5 billion in new bills annually.",
    "question": "Approximately how much Monopoly money does Hasbro print annually, and how does this compare to real US currency production?",
    "answers": {
      "A": "$30 billion in Monopoly money, which is about 20-30 times more than the US Bureau of Engraving and Printing produces",
      "B": "$15 billion in Monopoly money, slightly less than real US currency production",
      "C": "$50 billion in Monopoly money, roughly equal to real US currency production",
      "D": "$5 billion in Monopoly money, a fraction of what the US government prints"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq195",
    "fact": "Collective nouns: cats = clowder. Kittens = kindle. Wild cats = destruction. Most people know 'litter' for kittens but 'kindle' is the proper term.",
    "question": "What is the proper collective noun for a group of kittens?",
    "answers": {
      "A": "Kindle",
      "B": "Litter",
      "C": "Clowder",
      "D": "Destruction"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq196",
    "fact": "Churchill was born prematurely on 30 November 1874 at Blenheim Palace during a party. His mother went into labour unexpectedly and the nearest available room was a small ladies' cloakroom.",
    "question": "At which famous palace was Winston Churchill born prematurely on 30 November 1874?",
    "answers": {
      "A": "Blenheim Palace",
      "B": "Hampton Court Palace",
      "C": "Windsor Castle",
      "D": "Buckingham Palace"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq197",
    "fact": "Shigetaka Kurita designed the original 176 emoji in 1999 for NTT DoCoMo's mobile internet service. Each was 12x12 pixels. The original set is now in MoMA in New York.",
    "question": "Who designed the original 176 emoji in 1999 for NTT DoCoMo's mobile internet service?",
    "answers": {
      "A": "Shigetaka Kurita",
      "B": "Masayuki Yamamoto",
      "C": "Kazuhiro Kasuga",
      "D": "Takeshi Natsuno"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq198",
    "fact": "Rome sits at ~41.9°N. Beijing sits at ~39.9°N. Less than 2 degrees apart — two of history's greatest capitals at virtually the same distance from the equator.",
    "question": "Approximately how many degrees of latitude separate Rome and Beijing, two of history's greatest capitals?",
    "answers": {
      "A": "Less than 2 degrees",
      "B": "Between 3 and 5 degrees",
      "C": "Between 8 and 10 degrees",
      "D": "Between 15 and 20 degrees"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq199",
    "fact": "An adult body contains roughly 3-4 grams of iron — mostly in red blood cells as haemoglobin. That is enough to forge a small nail of about 7-8 cm.",
    "question": "Approximately how much iron is contained in an adult human body?",
    "answers": {
      "A": "3-4 grams",
      "B": "10-15 grams",
      "C": "0.5-1 gram",
      "D": "20-25 grams"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq200",
    "fact": "Project X-Ray (1943): the US Army attached tiny incendiary bombs to thousands of Mexican free-tailed bats, planning to release them over Japanese cities to start fires. Cancelled when the atomic bomb took priority.",
    "question": "What was Project X-Ray, a classified US military program from 1943?",
    "answers": {
      "A": "A plan to attach incendiary bombs to bats and drop them over Japanese cities",
      "B": "A secret program to develop laser weapons against enemy aircraft",
      "C": "An attempt to create a radar system to detect Japanese submarines",
      "D": "A biological warfare initiative using infected insects"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq201",
    "fact": "Roman soldiers were sometimes paid in salt or given an allowance to buy it. The Latin word salarium from sal meaning salt became our word salary. Salt was once as valuable as gold.",
    "question": "The modern word 'salary' derives from a Latin word meaning which commodity that Roman soldiers were sometimes paid with?",
    "answers": {
      "A": "Salt",
      "B": "Gold",
      "C": "Grain",
      "D": "Silver"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq202",
    "fact": "Botanically a berry develops from a single flower with one ovary. Bananas, grapes and kiwis qualify. Strawberries develop from flowers with multiple ovaries making them aggregate fruits.",
    "question": "Which of the following is botanically classified as a berry?",
    "answers": {
      "A": "Banana",
      "B": "Strawberry",
      "C": "Raspberry",
      "D": "Blackberry"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq203",
    "fact": "The dot over a lowercase i or j is called a tittle. It comes from the Latin titulus meaning inscription. The phrase to a T may derive from to a tittle meaning precisely.",
    "question": "What is the name of the dot placed over a lowercase i or j?",
    "answers": {
      "A": "Tittle",
      "B": "Diacritic",
      "C": "Serif",
      "D": "Accent"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq204",
    "fact": "Venus rotates so slowly that it takes 243 Earth days to complete one rotation but only 225 Earth days to orbit the Sun. A Venusian day is longer than a Venusian year.",
    "question": "Which planet in our solar system has a day that is longer than its year?",
    "answers": {
      "A": "Venus",
      "B": "Mercury",
      "C": "Mars",
      "D": "Jupiter"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq205",
    "fact": "The unicorn has been a Scottish heraldic symbol since the 12th century. In Celtic mythology unicorns represented purity and power. The Scottish royal coat of arms features two unicorns.",
    "question": "Which animal appears twice on the Scottish royal coat of arms and has been a Scottish heraldic symbol since the 12th century?",
    "answers": {
      "A": "Unicorn",
      "B": "Lion",
      "C": "Dragon",
      "D": "Eagle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq206",
    "fact": "The Shannon Number estimates around 10 to the power of 120 possible chess games. Observable universe atoms: around 10 to the power of 80. Chess has 40 orders of magnitude more possibilities.",
    "question": "The Shannon Number estimates the number of possible chess games at approximately 10^120. How does this compare to the number of atoms in the observable universe (around 10^80)?",
    "answers": {
      "A": "Chess has about 40 orders of magnitude more possibilities than atoms in the universe",
      "B": "Chess has about 10 orders of magnitude more possibilities than atoms in the universe",
      "C": "Atoms in the universe outnumber possible chess games by 40 orders of magnitude",
      "D": "Chess has about 200 orders of magnitude more possibilities than atoms in the universe"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq207",
    "fact": "Metal expands when heated. In summer the Eiffel Tower can grow up to 15 cm taller due to thermal expansion of its iron structure. It also leans slightly away from the sun.",
    "question": "By approximately how much can the Eiffel Tower grow taller during summer due to thermal expansion of its iron structure?",
    "answers": {
      "A": "Up to 15 cm",
      "B": "Up to 30 cm",
      "C": "Up to 5 cm",
      "D": "Up to 25 cm"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq208",
    "fact": "Archaeologists found 3000 year old honey in Egyptian tombs that was still edible. Honey lasts indefinitely due to its low moisture content, acidic pH and natural hydrogen peroxide.",
    "question": "Archaeologists discovered edible honey in Egyptian tombs dating back 3000 years. Which of the following is NOT a reason why honey can last indefinitely?",
    "answers": {
      "A": "Its high water content prevents bacterial growth",
      "B": "Its acidic pH inhibits microbial life",
      "C": "Its low moisture content prevents spoilage",
      "D": "It naturally contains hydrogen peroxide"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq209",
    "fact": "Male Adelie and Gentoo penguins search for the perfect pebble to present to a female. If she accepts it she places it in the nest. Pebbles are so valuable that penguins steal them from each other.",
    "question": "In Adelie and Gentoo penguin courtship, what do males present to females as gifts?",
    "answers": {
      "A": "Pebbles",
      "B": "Fish",
      "C": "Feathers",
      "D": "Shells"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq210",
    "fact": "A typical cumulus cloud contains around 500,000 kg of water droplets about 1.1 million pounds. The water is spread over such a large volume that it floats on less dense air below.",
    "question": "Approximately how much water is contained in a typical cumulus cloud?",
    "answers": {
      "A": "500,000 kg (about 1.1 million pounds)",
      "B": "250,000 kg (about 550,000 pounds)",
      "C": "1,000,000 kg (about 2.2 million pounds)",
      "D": "100,000 kg (about 220,000 pounds)"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq211",
    "fact": "On 9 September 1947 Grace Hopper found a moth causing problems in the Harvard Mark II computer. She taped it into the logbook with the note: first actual case of bug being found.",
    "question": "In 1947, Grace Hopper famously found a moth in the Harvard Mark II computer and taped it into the logbook. What year did this incident occur?",
    "answers": {
      "A": "1947",
      "B": "1945",
      "C": "1949",
      "D": "1951"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq212",
    "fact": "Walt Disney had musophobia, a fear of mice, which makes his creation of Mickey Mouse particularly ironic. He was supposedly inspired to create the character while watching a mouse in his studio.",
    "question": "What was the ironic aspect of Walt Disney creating Mickey Mouse, given his personal phobia?",
    "answers": {
      "A": "He had musophobia, a fear of mice",
      "B": "He had arachnophobia, a fear of spiders",
      "C": "He had nomophobia, a fear of being without his phone",
      "D": "He had cynophobia, a fear of dogs"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq213",
    "fact": "Olympus Mons on Mars is 21 km high and 600 km wide, roughly the size of France. It is nearly 3 times taller than Everest. Its slopes are so gentle you could drive up without realising.",
    "question": "Olympus Mons on Mars is notable for having extremely gentle slopes. Why is this significant?",
    "answers": {
      "A": "You could theoretically drive up it without realizing you were ascending",
      "B": "It is the only volcano in the solar system with gentle slopes",
      "C": "It prevents any erosion from occurring on the mountain",
      "D": "It makes it visible from Earth with the naked eye"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq214",
    "fact": "The original Coca-Cola bottles were green because the glass used by the Biedenharn Candy Company naturally had a greenish tint. The drink itself has always been the same brown colour.",
    "question": "Why were the original Coca-Cola bottles green?",
    "answers": {
      "A": "The glass used by the Biedenharn Candy Company naturally had a greenish tint",
      "B": "Green glass was cheaper to produce than clear glass in the early 1900s",
      "C": "The company deliberately chose green to make the drink appear more refreshing",
      "D": "Green glass protected the drink from sunlight better than other colours"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq215",
    "fact": "The average person takes about 7,500 steps per day. Over 80 years that totals roughly 177,000 km or about 110,000 miles, more than 4 times around the Earth.",
    "question": "If the average person takes about 7,500 steps per day, approximately how far would they walk over an 80-year lifetime?",
    "answers": {
      "A": "177,000 km (roughly 4 times around the Earth)",
      "B": "89,000 km (roughly 2 times around the Earth)",
      "C": "265,000 km (roughly 6 times around the Earth)",
      "D": "354,000 km (roughly 8 times around the Earth)"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq216",
    "fact": "During the Black Death Venice required ships to anchor offshore for 40 days before landing. The Italian quarantina means 40 days. The 40 day period has Biblical and medical roots.",
    "question": "What is the origin of the word 'quarantine'?",
    "answers": {
      "A": "From the Italian 'quarantina', meaning 40 days, based on Venice's Black Death port protocols",
      "B": "From the Latin 'quartus', meaning fourth, referring to the fourth stage of disease",
      "C": "From the French 'quatre', meaning four, for the four main symptoms of plague",
      "D": "From the Spanish 'cuarentena', meaning isolation chamber used in medieval hospitals"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq217",
    "fact": "Most cats have 5 toes on each front paw and 4 on each back paw totalling 18. Polydactyl cats can have more. The extra front toe helps with gripping and climbing.",
    "question": "How many toes does a typical cat have in total across all four paws?",
    "answers": {
      "A": "18",
      "B": "20",
      "C": "16",
      "D": "22"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq218",
    "fact": "Shakespeare coined or first recorded words like bedroom, lonely, generous, obscene, champion and critical. About 1700 words in modern English are attributed to him.",
    "question": "Approximately how many words in modern English are attributed to Shakespeare having coined or first recorded them?",
    "answers": {
      "A": "Around 1700 words",
      "B": "Around 3000 words",
      "C": "Around 500 words",
      "D": "Around 5000 words"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq219",
    "fact": "This is a popular myth. The Great Wall is only about 5 to 8 metres wide, far too narrow to see from orbit with the naked eye. No astronaut has reliably confirmed seeing it from space.",
    "question": "Is it actually possible to see the Great Wall of China from space with the naked eye?",
    "answers": {
      "A": "No, it's too narrow at 5-8 metres wide and no astronaut has reliably confirmed it",
      "B": "Yes, it's clearly visible from low Earth orbit on a clear day",
      "C": "Only from the Moon, not from orbiting spacecraft",
      "D": "Yes, but only during daylight hours from altitudes above 400 kilometres"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq220",
    "fact": "Napoleon was about 5 feet 7 inches tall, average for his time. The myth arose from confusion between French and English inches and British propaganda. His nickname Le Petit Caporal was affectionate.",
    "question": "Why did the myth persist that Napoleon Bonaparte was extremely short?",
    "answers": {
      "A": "Confusion between French and English inches, combined with British propaganda",
      "B": "He was actually quite short, around 5 feet 2 inches tall",
      "C": "French historical records were poorly translated in the 19th century",
      "D": "He always wore lifts in his boots, creating an illusion of shortness"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq222",
    "fact": "The Anglo-Zanzibar War of 27 August 1896 lasted between 38 and 45 minutes. Britain demanded the Sultan stand down. He refused. Ships shelled the palace and it was over.",
    "question": "The Anglo-Zanzibar War of 1896 is famous for being one of the shortest wars in history. Approximately how long did it last?",
    "answers": {
      "A": "Between 38 and 45 minutes",
      "B": "Between 2 and 3 hours",
      "C": "Between 6 and 8 hours",
      "D": "Between 1 and 2 days"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq223",
    "fact": "Wombats are the only animals known to produce cube-shaped faeces. Scientists discovered in 2018 that the intestinal walls of wombats are elastic and vary in thickness, shaping the droppings.",
    "question": "Which animal is the only known species to produce cube-shaped faeces?",
    "answers": {
      "A": "Wombat",
      "B": "Beaver",
      "C": "Porcupine",
      "D": "Badger"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq224",
    "fact": "Alexander Graham Bell refused to have a telephone in his study. He found it an intrusion on his scientific work. The man who invented the telephone considered it a nuisance.",
    "question": "Which famous inventor refused to have a telephone installed in his study because he found it distracting?",
    "answers": {
      "A": "Alexander Graham Bell",
      "B": "Thomas Edison",
      "C": "Nikola Tesla",
      "D": "Benjamin Franklin"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq225",
    "fact": "Octopuses have three hearts: two branchial hearts pump blood through the gills and one systemic heart pumps it through the body. Their blood is blue due to copper-based haemocyanin.",
    "question": "How many hearts does an octopus have, and what color is their blood?",
    "answers": {
      "A": "Three hearts and blue blood",
      "B": "Two hearts and red blood",
      "C": "Four hearts and blue blood",
      "D": "Three hearts and purple blood"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq226",
    "fact": "The word robot was coined by Czech writer Karel Capek in his 1920 play RUR. It comes from the Czech robota meaning forced labour or drudgery. The play featured artificial workers.",
    "question": "Which Czech writer coined the word 'robot' in his 1920 play featuring artificial workers?",
    "answers": {
      "A": "Karel Capek",
      "B": "Franz Kafka",
      "C": "Bohumil Hrabal",
      "D": "Milan Kundera"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq227",
    "fact": "Adult elephants are the only mammals physically incapable of jumping. Their bone structure and weight of up to 6 tonnes make it impossible. They can run 25 km/h but never go fully airborne.",
    "question": "Which of the following is the only mammal physically incapable of jumping?",
    "answers": {
      "A": "Adult elephants",
      "B": "Adult rhinoceroses",
      "C": "Adult hippopotamuses",
      "D": "Adult giraffes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq228",
    "fact": "Mercury rotates very slowly, taking 59 Earth days to complete one rotation. But it orbits the Sun in just 88 Earth days. Due to its orbital mechanics, a solar day on Mercury is 176 Earth days.",
    "question": "How long is a solar day on Mercury (the time between successive sunrises)?",
    "answers": {
      "A": "176 Earth days",
      "B": "59 Earth days",
      "C": "88 Earth days",
      "D": "118 Earth days"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq229",
    "fact": "Ray Tomlinson sent the first email in 1971 between two computers sitting side by side. He also chose the at symbol to separate the user from the machine. He could not remember what he wrote.",
    "question": "Who sent the first email in 1971, and what symbol did they choose to separate the user from the machine?",
    "answers": {
      "A": "Ray Tomlinson used the @ symbol",
      "B": "Tim Berners-Lee used the # symbol",
      "C": "Vint Cerf used the $ symbol",
      "D": "Bob Metcalfe used the & symbol"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq230",
    "fact": "Sloths can slow their heart rate to reduce oxygen consumption and hold their breath for up to 40 minutes underwater. Dolphins typically hold their breath for 8 to 10 minutes.",
    "question": "Which animal can hold its breath underwater for significantly longer than a dolphin by slowing its heart rate and reducing oxygen consumption?",
    "answers": {
      "A": "Sloth",
      "B": "Seal",
      "C": "Manatee",
      "D": "Beaver"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq231",
    "fact": "Charles Osborne of Iowa hiccupped continuously from 1922 to 1990, a total of 68 years. He hiccupped an estimated 430 million times. He finally stopped hiccupping a year before he died.",
    "question": "Charles Osborne from Iowa holds the world record for the longest hiccupping spell. For how many years did he hiccup continuously?",
    "answers": {
      "A": "68 years",
      "B": "42 years",
      "C": "55 years",
      "D": "73 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq232",
    "fact": "Snails can enter a state of extended dormancy called estivation when conditions are too hot or dry. They seal themselves inside their shell with a layer of mucus and can remain dormant for up to three years.",
    "question": "What is the name of the dormancy state that snails enter during hot or dry conditions, during which they can remain inactive for up to three years?",
    "answers": {
      "A": "Estivation",
      "B": "Hibernation",
      "C": "Diapause",
      "D": "Torpor"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq233",
    "fact": "Golf is one of the most repeated false acronym myths. The word golf appears in Scottish records from the 15th century. Acronym names were extremely rare before the 20th century.",
    "question": "What is the true origin of the word 'golf'?",
    "answers": {
      "A": "It comes from Scottish records dating back to the 15th century",
      "B": "It is an acronym standing for 'Gentlemen Only, Ladies Forbidden'",
      "C": "It is an acronym standing for 'Great Open Land Formation'",
      "D": "It was invented in the 20th century as a marketing term"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq234",
    "fact": "Research from the University of Northampton found that cows form close bonds with specific other cows. When separated from their best friend their heart rate increases and they show signs of stress.",
    "question": "According to research from the University of Northampton, what happens to a cow's heart rate when it is separated from its best friend?",
    "answers": {
      "A": "It increases and they show signs of stress",
      "B": "It decreases as they become more relaxed",
      "C": "It remains completely stable and unchanged",
      "D": "It fluctuates randomly throughout the day"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq235",
    "fact": "The Great Fire of London started in Thomas Farriner bakery on Pudding Lane on 2 September 1666. It burned for four days destroying most of the medieval city.",
    "question": "On which street did the Great Fire of London start in 1666?",
    "answers": {
      "A": "Pudding Lane",
      "B": "Baker Street",
      "C": "Fleet Street",
      "D": "Cheapside"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq236",
    "fact": "The collective noun for puffins is a circus. A group of them on land is a colony, at sea a raft. Puffins can hold up to 10 fish in their beaks at once thanks to backward-facing spines.",
    "question": "What is the collective noun for a group of puffins flying together at sea?",
    "answers": {
      "A": "A raft",
      "B": "A circus",
      "C": "A colony",
      "D": "A flock"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq237",
    "fact": "Nintendo was founded in 1889, the same year the Eiffel Tower was built. Nintendo originally made hanafuda playing cards and did not enter the video game business until the 1970s.",
    "question": "In what year was Nintendo founded, and what was its original product before entering the video game industry?",
    "answers": {
      "A": "1889, hanafuda playing cards",
      "B": "1889, wooden toys",
      "C": "1875, hanafuda playing cards",
      "D": "1902, traditional board games"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq238",
    "fact": "Loganair flight between Westray and Papa Westray in the Orkney Islands takes about 74 seconds in favourable conditions. The distance is just 2.7 km. It has operated since 1967.",
    "question": "What is the world's shortest commercial flight, operating between Westray and Papa Westray in the Orkney Islands, estimated to take in favorable conditions?",
    "answers": {
      "A": "About 74 seconds",
      "B": "About 2 minutes",
      "C": "About 90 seconds",
      "D": "About 45 seconds"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq239",
    "fact": "The collective noun for jellyfish is a smack. Other unusual collective nouns: a bloat of hippos, a tower of giraffes, a prickle of porcupines, a destruction of wild cats.",
    "question": "What is the collective noun for a group of jellyfish?",
    "answers": {
      "A": "A smack",
      "B": "A bloom",
      "C": "A swarm",
      "D": "A colony"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq240",
    "fact": "Louis XIII pizza in Salerno Italy costs 12000 euros. It takes 72 hours to make, is delivered by chef, and topped with three types of caviar, lobster and buffalo mozzarella.",
    "question": "What is the price of the luxury 'Louis XIII' pizza served in Salerno, Italy?",
    "answers": {
      "A": "€12,000",
      "B": "€8,500",
      "C": "€15,000",
      "D": "€5,000"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq241",
    "fact": "The collective noun for sharks is a shiver. Other unusual ones: a flamboyance of flamingos, a murder of crows, a parliament of owls, a bloat of hippos.",
    "question": "What is the collective noun for a group of sharks?",
    "answers": {
      "A": "A shiver",
      "B": "A bloom",
      "C": "A pod",
      "D": "A school"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq242",
    "fact": "The average human body contains about 7 kg of carbon. This is enough to make roughly 900 pencil leads. You also contain enough iron for a 3 inch nail and enough fat for 7 bars of soap.",
    "question": "Approximately how many pencil leads could be made from the carbon found in an average human body?",
    "answers": {
      "A": "900",
      "B": "450",
      "C": "1,500",
      "D": "200"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq243",
    "fact": "One popular theory says posh stands for Port Out Starboard Home, the shaded side of ships travelling to India. Most etymologists dispute this. The true origin of posh remains unknown.",
    "question": "What does a popular but disputed theory claim the word 'posh' stands for?",
    "answers": {
      "A": "Port Out Starboard Home, referring to shaded cabins on ships to India",
      "B": "Pricey Officers' Sleek Housing, a nautical luxury term",
      "C": "Passengers' Outbound Star Harbor, a Victorian shipping route",
      "D": "Premium Officers' Ship's Headquarters, a naval ranking system"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq244",
    "fact": "Research shows crows remember specific human faces and can hold grudges for years. They have been observed warning other crows about dangerous humans and even leaving gifts for kind ones.",
    "question": "Which of the following abilities have crows been observed to demonstrate towards humans?",
    "answers": {
      "A": "Remembering specific human faces, holding grudges, and leaving gifts for kind people",
      "B": "Using tools to build nests and communicating through complex song patterns",
      "C": "Migrating thousands of miles and navigating using the Earth's magnetic field",
      "D": "Hunting in coordinated packs and teaching their young to fish"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq245",
    "fact": "The USA has about 17,000 public libraries compared to about 13,000 McDonalds restaurants. Public libraries outnumber McDonalds, Starbucks and Walmarts combined in some calculations.",
    "question": "Approximately how many public libraries are there in the USA?",
    "answers": {
      "A": "17,000",
      "B": "13,000",
      "C": "9,000",
      "D": "21,000"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq246",
    "fact": "The probability of your specific parents meeting, conceiving you, with the exact sperm and egg that created you, stretching back through all your ancestors, is so small it is effectively impossible.",
    "question": "What is the probability of you being born with your exact genetic makeup, considering the specific sperm and egg that created you and all your ancestors meeting?",
    "answers": {
      "A": "So astronomically small it is effectively impossible",
      "B": "About 1 in a million, which is quite unlikely but plausible",
      "C": "Roughly 50/50, since conception is a binary outcome",
      "D": "Virtually certain, since evolution has optimized human reproduction"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq247",
    "fact": "Polar bears are predominantly left-handed or left-pawed. This makes them one of the few animals with a consistent paw preference. However some research questions whether this is truly universal.",
    "question": "Which paw do most polar bears prefer to use?",
    "answers": {
      "A": "Left paw",
      "B": "Right paw",
      "C": "Both paws equally",
      "D": "It varies by region"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq248",
    "fact": "A Posidonia oceanica seagrass meadow in Shark Bay Australia is estimated to be 200,000 years old, making it the oldest known living organism on Earth. It covers 180 square km.",
    "question": "What is the world's oldest known living organism, found in Shark Bay, Australia?",
    "answers": {
      "A": "A Posidonia oceanica seagrass meadow estimated to be 200,000 years old",
      "B": "A Great Basin bristlecone pine tree estimated to be 5,000 years old",
      "C": "A giant sequoia tree estimated to be 3,500 years old",
      "D": "An Antarctic sponge estimated to be 11,000 years old"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq249",
    "fact": "A sneeze expels air at speeds between 145 and 165 km per hour. It releases up to 40,000 droplets that can travel up to 8 metres. The eyes close involuntarily to protect them.",
    "question": "At what speed does a sneeze expel air from the human body?",
    "answers": {
      "A": "Between 145 and 165 km per hour",
      "B": "Between 100 and 120 km per hour",
      "C": "Between 200 and 220 km per hour",
      "D": "Between 80 and 100 km per hour"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq250",
    "fact": "The Moon experiences moonquakes caused by the gravitational pull of Earth, meteorite impacts and cooling of the lunar interior. Apollo seismometers recorded them lasting up to 10 minutes.",
    "question": "According to data from Apollo seismometers, what is the maximum duration that moonquakes can last?",
    "answers": {
      "A": "Up to 10 minutes",
      "B": "Up to 5 minutes",
      "C": "Up to 30 minutes",
      "D": "Up to 2 minutes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq251",
    "fact": "When you put a grape in the microwave and cut it almost in half leaving a skin bridge, it creates plasma fire. The bridge acts as an antenna concentrating microwave energy into hot ionised gas.",
    "question": "What phenomenon occurs when you cut a grape almost in half and microwave it, leaving a small skin bridge connecting the two halves?",
    "answers": {
      "A": "It creates plasma fire, with the skin bridge acting as an antenna that concentrates microwave energy",
      "B": "It causes the grape to explode due to rapid water evaporation inside the microwave",
      "C": "It produces a bright purple light as the grape's natural pigments react with microwave radiation",
      "D": "It generates a small electromagnetic pulse that temporarily disables the microwave's sensors"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq252",
    "fact": "Disaster comes from the Italian disastro combining dis meaning bad and astro meaning star. It reflected the ancient belief that catastrophes were caused by unfavourable positions of stars.",
    "question": "The word 'disaster' comes from Italian 'disastro'. What do the two parts of this word literally mean?",
    "answers": {
      "A": "Bad star",
      "B": "Bad luck",
      "C": "Bad weather",
      "D": "Bad timing"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq253",
    "fact": "Dolphins practise unihemispheric slow-wave sleep: one half of the brain sleeps while the other remains awake. This allows them to breathe, watch for predators and stay in contact with their group.",
    "question": "What is the term for the type of sleep dolphins use, where only half of their brain sleeps at a time?",
    "answers": {
      "A": "Unihemispheric slow-wave sleep",
      "B": "Bilateral rapid-eye-movement sleep",
      "C": "Polyphasic segmented sleep",
      "D": "Dichotic dormancy sleep"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq254",
    "fact": "The Great Barrier Reef stretches over 2300 km and covers about 344,400 square km. It is the worlds largest coral reef system and is visible from space. It is home to over 9000 species.",
    "question": "Approximately how many species call the Great Barrier Reef home?",
    "answers": {
      "A": "Over 9000",
      "B": "Over 5000",
      "C": "Over 15000",
      "D": "Over 20000"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq255",
    "fact": "The collective noun for ravens is an unkindness or a conspiracy. Rooks gather in a parliament and crows in a murder. Ravens are among the most intelligent birds.",
    "question": "What is the collective noun for a group of ravens?",
    "answers": {
      "A": "An unkindness or a conspiracy",
      "B": "A murder",
      "C": "A parliament",
      "D": "A conspiracy or a murder"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq256",
    "fact": "Hippos secrete a reddish oily fluid from their skin that acts as a sunscreen, moisturiser and antibiotic. Scientists initially thought it was blood giving rise to the blood sweat nickname.",
    "question": "Hippos secrete a reddish oily fluid from their skin. What are the three main functions of this secretion?",
    "answers": {
      "A": "Sunscreen, moisturiser and antibiotic",
      "B": "Sunscreen, insect repellent and temperature regulation",
      "C": "Moisturiser, antibiotic and waterproofing",
      "D": "Sunscreen, camouflage and wound healing"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq257",
    "fact": "The Nahuatl word ahuacatl meant both avocado and testicle. Avocados grow in pairs and the Aztecs thought they resembled the male anatomy. The Spanish renamed them aguacate.",
    "question": "The Nahuatl word 'ahuacatl' referred to both avocados and what else, because the Aztecs thought avocados resembled this anatomical feature?",
    "answers": {
      "A": "Testicles",
      "B": "Hearts",
      "C": "Kidneys",
      "D": "Eyes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq258",
    "fact": "Russia spans 11 time zones from UTC+2 to UTC+12. When it is midnight on Russias western border it is already 9am the next day on its eastern coast.",
    "question": "How many time zones does Russia span across its territory?",
    "answers": {
      "A": "11 time zones",
      "B": "9 time zones",
      "C": "12 time zones",
      "D": "8 time zones"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq259",
    "fact": "The pleasant smell of cut grass is caused by chemicals called green leaf volatiles released by damaged plant cells. These chemicals alert neighbouring plants and insects that damage is occurring.",
    "question": "What causes the pleasant smell of freshly cut grass?",
    "answers": {
      "A": "Chemicals called green leaf volatiles released by damaged plant cells",
      "B": "Natural oils produced by grass roots in response to sunlight",
      "C": "A combination of grass pollen and moisture from the lawn",
      "D": "Bacterial decomposition of dead grass clippings"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq261",
    "fact": "Horses are obligate nasal breathers. Unlike humans they cannot breathe through their mouths. This is why choking is so dangerous for horses and why they cannot vomit.",
    "question": "Why is choking particularly dangerous for horses compared to humans?",
    "answers": {
      "A": "Horses can only breathe through their noses and cannot breathe through their mouths",
      "B": "Horses have weaker throat muscles that cannot expel blockages",
      "C": "Horses' windpipes are narrower and more easily obstructed",
      "D": "Horses panic more easily when choking, restricting blood flow"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq262",
    "fact": "Muscle comes from the Latin musculus meaning little mouse. Romans thought flexing muscles looked like mice moving under the skin. The word mussel from the shellfish has the same origin.",
    "question": "The word 'muscle' comes from the Latin 'musculus', which means what?",
    "answers": {
      "A": "Little mouse",
      "B": "Small strength",
      "C": "Moving fiber",
      "D": "Latin warrior"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq263",
    "fact": "Starfish or sea stars are echinoderms, more closely related to sea urchins and sea cucumbers than to fish. Marine biologists now prefer the term sea star. They have no brain, no blood and no fins.",
    "question": "What type of animal is a starfish more closely related to than to actual fish?",
    "answers": {
      "A": "Sea urchins and sea cucumbers",
      "B": "Dolphins and whales",
      "C": "Crabs and lobsters",
      "D": "Jellyfish and sea anemones"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq264",
    "fact": "Antimatter costs an estimated 62.5 trillion dollars per gram to produce at CERN. By comparison gold costs about 60,000 dollars per gram. Antimatter is a million billion times more expensive than gold.",
    "question": "Approximately how many times more expensive is antimatter than gold, based on production costs at CERN?",
    "answers": {
      "A": "One million billion times",
      "B": "One hundred million times",
      "C": "One billion times",
      "D": "One trillion times"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq265",
    "fact": "Flamingos have a uniquely shaped beak designed to filter food from water when held upside down. They eat with their heads inverted, using their tongue as a pump to suck water through the beak.",
    "question": "How do flamingos uniquely filter food from water?",
    "answers": {
      "A": "By holding their heads upside down and using their tongue as a pump",
      "B": "By using their feet to stir up sediment and trap food particles",
      "C": "By swimming in circles to create a whirlpool that concentrates food",
      "D": "By extending their long necks to reach food on the lake bottom"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq266",
    "fact": "The collective noun for baboons is a congress or a troop. This has led to many jokes. Other unusual collective nouns: a business of ferrets, an army of frogs, a tower of giraffes.",
    "question": "What is the collective noun for baboons?",
    "answers": {
      "A": "A congress or a troop",
      "B": "A tower or a climb",
      "C": "A business or a colony",
      "D": "An army or a battalion"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq267",
    "fact": "In colonial New England lobsters were so common they washed ashore in piles up to 60 cm deep. They were used as fertiliser and fish bait. Feeding servants lobster more than three times a week was considered cruel.",
    "question": "In colonial New England, lobsters were so abundant that they washed ashore in large piles. What was a common use for these lobsters?",
    "answers": {
      "A": "As fertiliser and fish bait",
      "B": "As a delicacy served at fancy banquets",
      "C": "Exported to Europe as a luxury food",
      "D": "Used to make lobster oil for lamps"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq268",
    "fact": "Leonardo da Vinci painted the Mona Lisa without visible eyebrows or eyelashes. This was fashionable in 15th century Florence where women plucked their eyebrows. High-resolution scans confirm this.",
    "question": "Why does the Mona Lisa famously lack visible eyebrows and eyelashes in Leonardo da Vinci's painting?",
    "answers": {
      "A": "It was fashionable in 15th century Florence for women to pluck their eyebrows",
      "B": "Leonardo deliberately omitted them to create an air of mystery and ambiguity",
      "C": "The paint used for facial hair details faded over the centuries",
      "D": "Da Vinci believed eyebrows distracted from the subject's mysterious smile"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq269",
    "fact": "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu in New Zealand has 85 letters. It is a hill in Hawkes Bay. The name tells the story of Tamatea.",
    "question": "What is the name of the 85-letter hill located in Hawkes Bay, New Zealand?",
    "answers": {
      "A": "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu",
      "B": "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahy",
      "C": "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatano",
      "D": "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahi"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq270",
    "fact": "The Great Pyramid was built around 2560 BC. Cleopatra died in 30 BC, about 2530 years after the pyramid. The Moon landing was in 1969, about 2000 years after Cleopatra. She is closer to us.",
    "question": "Which historical figure is closer in time to the Moon landing in 1969 than to the Great Pyramid's construction around 2560 BC?",
    "answers": {
      "A": "Cleopatra (died 30 BC)",
      "B": "Julius Caesar (died 44 BC)",
      "C": "King Tutankhamun (died 1323 BC)",
      "D": "Ramesses II (died 1213 BC)"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq271",
    "fact": "The collective noun for giraffes is a tower. Groups can also be called a herd or a journey. Giraffes have the same number of vertebrae in their necks as humans: seven.",
    "question": "What is the collective noun for a group of giraffes?",
    "answers": {
      "A": "A tower",
      "B": "A herd",
      "C": "A journey",
      "D": "A pride"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq272",
    "fact": "Terrible originally meant causing terror or awe, similar to terrific. Both come from the Latin terrere. Only in recent centuries did terrible shift to meaning very bad and terrific to very good.",
    "question": "What is the original meaning of the word 'terrible', before it shifted to mean 'very bad'?",
    "answers": {
      "A": "Causing terror or awe",
      "B": "Extremely ugly or repulsive",
      "C": "Physically painful or harmful",
      "D": "Morally wrong or evil"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq273",
    "fact": "Koala fingerprints are so similar to human fingerprints they have confused crime scene investigators. They have similar ridge patterns, whorls and loops. This is a remarkable example of convergent evolution.",
    "question": "Which animal's fingerprints are so similar to human fingerprints that they have sometimes confused crime scene investigators?",
    "answers": {
      "A": "Koala",
      "B": "Chimpanzee",
      "C": "Orangutan",
      "D": "Gorilla"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq274",
    "fact": "The Titanic carried 20 lifeboats with capacity for 1178 people. There were 2224 people aboard. The law required only enough lifeboats for 962 people. 1517 died in the disaster.",
    "question": "How many people died when the Titanic sank in 1912?",
    "answers": {
      "A": "1517",
      "B": "1206",
      "C": "962",
      "D": "2224"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq275",
    "fact": "Seahorses are the only species where males become pregnant and give birth. The female deposits eggs in the males pouch. He fertilises them and carries the young for 10 to 25 days before birth.",
    "question": "In which species do males become pregnant and give birth to live young?",
    "answers": {
      "A": "Seahorses",
      "B": "Pipefish",
      "C": "Sea dragons",
      "D": "All of the above"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq276",
    "fact": "The first known vending machine was invented by Hero of Alexandria around 50 AD. Worshippers inserted a coin which fell onto a pan, tipping a lever to dispense holy water before a counterweight reset it.",
    "question": "What did the first known vending machine, invented by Hero of Alexandria around 50 AD, dispense?",
    "answers": {
      "A": "Holy water",
      "B": "Wine",
      "C": "Bread",
      "D": "Coins"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq277",
    "fact": "The collective noun for hedgehogs is a prickle. A single hedgehog can have up to 7000 spines. They are immune to many snake venoms and can survive bites that would kill other animals.",
    "question": "What is the collective noun for a group of hedgehogs?",
    "answers": {
      "A": "A prickle",
      "B": "A quill",
      "C": "A spine",
      "D": "A bristle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq278",
    "fact": "For the movie E.T. sound designer Ben Burtt created the walking sounds by squishing his hands through a wet T-shirt filled with jelly. Film sound design is famously creative in unexpected ways.",
    "question": "In the 1982 film E.T. the Extra-Terrestrial, sound designer Ben Burtt created the alien's walking sounds using an unconventional method. What did he use?",
    "answers": {
      "A": "A wet T-shirt filled with jelly that he squished his hands through",
      "B": "Recordings of wet footsteps played backwards at different speeds",
      "C": "Rubber gloves filled with water dragged across a metal surface",
      "D": "His own footsteps recorded while walking through a mud pit"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq279",
    "fact": "A 2015 project to create a Scottish Gaelic thesaurus identified 421 words for snow and blizzard conditions in Scots and Scottish Gaelic. These reflect centuries of precise observation of weather.",
    "question": "In 2015, a project to create a Scottish Gaelic thesaurus identified how many words for snow and blizzard conditions in Scots and Scottish Gaelic?",
    "answers": {
      "A": "421",
      "B": "214",
      "C": "612",
      "D": "389"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq280",
    "fact": "Annie Edson Taylor went over Niagara Falls in a barrel on 24 October 1901, her 63rd birthday. She survived with only minor injuries and became the first person to survive this feat.",
    "question": "In what year did Annie Edson Taylor become the first person to survive going over Niagara Falls in a barrel?",
    "answers": {
      "A": "1901",
      "B": "1895",
      "C": "1912",
      "D": "1898"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq281",
    "fact": "Penguins swimming at speed can launch themselves up to 9 feet or about 2.7 metres out of the water onto ice. They build up speed underwater then angle upward to breach the surface.",
    "question": "When swimming at speed, how high can penguins launch themselves out of the water onto ice?",
    "answers": {
      "A": "Up to 9 feet (2.7 metres)",
      "B": "Up to 6 feet (1.8 metres)",
      "C": "Up to 12 feet (3.7 metres)",
      "D": "Up to 4 feet (1.2 metres)"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq282",
    "fact": "Ludwig van Beethoven had lost virtually all his hearing by the time he composed his 9th Symphony premiered in 1824. He reportedly had to be turned around to see the applauding audience he could not hear.",
    "question": "When Beethoven's 9th Symphony premiered in 1824, what was notable about his ability to experience the performance?",
    "answers": {
      "A": "He was almost completely deaf and had to be turned around to see the audience applauding",
      "B": "He could hear the orchestra but not the audience reactions",
      "C": "He conducted the entire premiere despite being partially blind",
      "D": "He listened from a private box so the noise wouldn't disturb him"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq283",
    "fact": "Wang is the most common surname globally with over 90 million people sharing it in China alone. Li follows with about 93 million. In the US the most common surname is Smith.",
    "question": "Which of the following is the most common surname in the United States?",
    "answers": {
      "A": "Smith",
      "B": "Wang",
      "C": "Johnson",
      "D": "Williams"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq284",
    "fact": "A lightning bolt heats the surrounding air to about 30,000 Kelvin. The surface of the Sun is about 5,778 Kelvin. Lightning is roughly five times hotter than the solar surface.",
    "question": "How many times hotter is a lightning bolt compared to the surface of the Sun?",
    "answers": {
      "A": "Approximately 5 times hotter",
      "B": "Approximately 10 times hotter",
      "C": "Approximately 2 times hotter",
      "D": "Approximately 15 times hotter"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq285",
    "fact": "Ants do not sleep in the conventional sense. They take hundreds of brief 1-minute power naps throughout the day totalling about 4 to 5 hours of rest. Worker ants rest more than queens.",
    "question": "How do ants typically rest during the day?",
    "answers": {
      "A": "They take hundreds of brief 1-minute power naps totalling 4-5 hours of rest",
      "B": "They sleep for one continuous 8-hour period at night",
      "C": "They don't need any rest and work continuously",
      "D": "They hibernate for several hours each afternoon"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq286",
    "fact": "Pope Urban VII reigned from 15 to 27 September 1590, just 13 days, the shortest pontificate in history. He died of malaria before even being formally consecrated.",
    "question": "Pope Urban VII holds the record for the shortest papal reign in history. How long did he serve as Pope in 1590?",
    "answers": {
      "A": "13 days",
      "B": "3 months",
      "C": "6 months",
      "D": "1 year"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq287",
    "fact": "Crocodilians have a membrane that holds their tongue firmly to the roof of their mouth. They cannot extend their tongue at all. Alligators have the same constraint.",
    "question": "What unique anatomical feature prevents crocodilians and alligators from extending their tongues?",
    "answers": {
      "A": "A membrane that holds their tongue firmly to the roof of their mouth",
      "B": "Specially evolved throat muscles that lock the tongue in place",
      "C": "A rigid bone structure called the glossal rod that fuses the tongue to the jaw",
      "D": "An underdeveloped tongue that never fully formed during evolution"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq288",
    "fact": "Arturo Di Modica installed the Charging Bull sculpture in front of the New York Stock Exchange without permission on 15 December 1989. Police confiscated it but public demand led to its relocation to Bowling Green.",
    "question": "In what year did artist Arturo Di Modica illegally install the famous Charging Bull sculpture in front of the New York Stock Exchange?",
    "answers": {
      "A": "1989",
      "B": "1987",
      "C": "1991",
      "D": "1985"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq289",
    "fact": "Rabbits lack the ability to vomit. Their digestive system only moves in one direction. This is why hairballs and toxic substances are so dangerous to rabbits and why diet is so important for them.",
    "question": "Why is it particularly dangerous for rabbits to ingest hairballs or toxic substances?",
    "answers": {
      "A": "Rabbits cannot vomit because their digestive system only moves in one direction",
      "B": "Rabbits have a weaker immune system than other animals and cannot fight off toxins",
      "C": "Rabbits produce excessive stomach acid that breaks down their digestive tract",
      "D": "Rabbits lack teeth that are strong enough to break down foreign materials"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq290",
    "fact": "The Louvre was built in the late 12th century by King Philip II as a fortress to protect Paris. It was converted into a royal palace in the 14th century. It became a public museum in 1793.",
    "question": "In what year did the Louvre become a public museum?",
    "answers": {
      "A": "1793",
      "B": "1789",
      "C": "1804",
      "D": "1815"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq291",
    "fact": "The Eiffel Tower was built in 1889 for the Paris World Fair and was the worlds tallest structure until 1930 when the Chrysler Building in New York was completed at 319 metres.",
    "question": "In what year did the Eiffel Tower cease to be the world's tallest structure?",
    "answers": {
      "A": "1930",
      "B": "1925",
      "C": "1935",
      "D": "1928"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq292",
    "fact": "Research shows honeybees can learn to identify human faces using holistic processing, similar to how humans do it. They can be trained to match faces to rewards in laboratory conditions.",
    "question": "Research has shown that honeybees are capable of learning to identify human faces. Which of the following best describes how they do this?",
    "answers": {
      "A": "Using holistic processing, similar to how humans identify faces",
      "B": "By memorizing individual facial features in sequence",
      "C": "By detecting heat signatures from human skin",
      "D": "By recognizing the unique scent patterns of each person"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq293",
    "fact": "The collective noun for kangaroos is a mob, troop or herd. Male kangaroos are called bucks or boomers, females are does or flyers and young ones are joeys.",
    "question": "What is the collective noun for a group of kangaroos?",
    "answers": {
      "A": "A mob, troop or herd",
      "B": "A pack, colony or swarm",
      "C": "A pride, gang or crew",
      "D": "A pod, school or army"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq294",
    "fact": "The Hawaiian alphabet has 12 consonants H K L M N P W and the okina glottal stop, plus 5 vowels A E I O U. Despite only 13 letters it can express a rich and complete language.",
    "question": "How many letters are in the Hawaiian alphabet?",
    "answers": {
      "A": "13",
      "B": "26",
      "C": "18",
      "D": "21"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq295",
    "fact": "Venice is built on 118 small islands connected by about 400 bridges and separated by 177 canals. The islands rest on millions of timber piles driven into the mudflat. It is sinking about 1-2mm per year.",
    "question": "Venice is built on how many small islands connected by approximately 400 bridges?",
    "answers": {
      "A": "118",
      "B": "156",
      "C": "203",
      "D": "89"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq296",
    "fact": "I am is considered the shortest grammatically complete sentence with both a subject and a predicate. Go is also complete but as an imperative it has an implied subject of you.",
    "question": "Which of these is considered the shortest grammatically complete sentence in English?",
    "answers": {
      "A": "I am",
      "B": "Go",
      "C": "Yes",
      "D": "No"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq297",
    "fact": "The collective noun for owls is a parliament, reflecting their association with wisdom. A group of owls roosting together is a parliament. Other collective nouns: a wisdom of owls is also used.",
    "question": "What is the collective noun for a group of owls roosting together?",
    "answers": {
      "A": "A parliament",
      "B": "A congress",
      "C": "A tribunal",
      "D": "A council"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq298",
    "fact": "Giraffes are the tallest animals on Earth, reaching up to 5.8 metres. Their necks alone can be up to 1.8 metres long. Despite this they have the same number of vertebrae as humans: seven.",
    "question": "How many neck vertebrae do giraffes have compared to humans?",
    "answers": {
      "A": "The same number - seven",
      "B": "Significantly more - around fifteen",
      "C": "Fewer - only five",
      "D": "Twice as many - fourteen"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq299",
    "fact": "Adult elephants are the only mammals that physically cannot jump. Their anatomy and weight of up to 6 tonnes make it impossible. They can run at up to 25 km per hour but never go airborne.",
    "question": "Which of these mammals is physically unable to jump, regardless of how hard it tries?",
    "answers": {
      "A": "Adult elephants",
      "B": "Adult hippos",
      "C": "Adult rhinos",
      "D": "Adult giraffes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq300",
    "fact": "Assassin comes from the Arabic Hashshashin, a name given to followers of Hassan-i Sabbah who carried out political murders in the Middle Ages. The hashish connection is disputed by historians.",
    "question": "The word 'assassin' is derived from the Arabic 'Hashshashin,' referring to followers of which historical figure?",
    "answers": {
      "A": "Hassan-i Sabbah",
      "B": "Saladin",
      "C": "Al-Mansur",
      "D": "Harun al-Rashid"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq301",
    "fact": "Criminologists estimate that statistically the average person walks past about 36 murderers during their lifetime without knowing it. Most murderers are never caught or look entirely ordinary.",
    "question": "According to criminologists, how many murderers does the average person statistically walk past during their lifetime without knowing it?",
    "answers": {
      "A": "Approximately 36",
      "B": "Approximately 12",
      "C": "Approximately 50",
      "D": "Approximately 72"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq302",
    "fact": "Honey badgers have been documented using sticks, stones and mud to climb out of enclosures. They are considered among the most intelligent and tenacious animals and are almost impossible to contain.",
    "question": "Honey badgers are known for their remarkable escape abilities. Which of the following have they been documented using to climb out of enclosures?",
    "answers": {
      "A": "Sticks, stones, and mud",
      "B": "Digging tunnels and sharpening claws",
      "C": "Jumping up to 10 feet high and breaking locks",
      "D": "Coordinating in groups to create ladders"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq303",
    "fact": "The first mechanical alarm clock was invented by Levi Hutchins of New Hampshire in 1787. It had one fixed alarm time: 4am, because he needed to wake for work at that hour.",
    "question": "Who invented the first mechanical alarm clock, and in what year?",
    "answers": {
      "A": "Levi Hutchins of New Hampshire in 1787",
      "B": "Benjamin Franklin of Pennsylvania in 1782",
      "C": "Samuel Morse of Massachusetts in 1795",
      "D": "Eli Whitney of Connecticut in 1793"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq304",
    "fact": "Ancient texts describe Cleopatra as using elaborate perfumes. Plutarch wrote that her perfumes were detectable before her barge came into sight. Egypt was a centre of perfumery in the ancient world.",
    "question": "According to Plutarch, what notable characteristic did Cleopatra's perfumes have?",
    "answers": {
      "A": "They could be detected before her barge came into sight",
      "B": "They were made exclusively from lotus flowers",
      "C": "They were so strong they caused temporary blindness",
      "D": "They could only be afforded by the richest pharaohs"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq305",
    "fact": "Breakfast derives from breaking the overnight fast. The word has been used in English since the 15th century. In many languages the equivalent word also literally means breaking of the fast.",
    "question": "The word 'breakfast' comes from the concept of breaking the overnight fast. Since which century has this word been used in English?",
    "answers": {
      "A": "15th century",
      "B": "12th century",
      "C": "18th century",
      "D": "13th century"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq306",
    "fact": "Pluto rotates very slowly, taking about 6.4 Earth days or 153 hours to complete one rotation. Pluto and its moon Charon are tidally locked, always showing the same face to each other.",
    "question": "How long does it take Pluto to complete one full rotation on its axis?",
    "answers": {
      "A": "Approximately 6.4 Earth days",
      "B": "Approximately 2.5 Earth days",
      "C": "Approximately 12.8 Earth days",
      "D": "Approximately 24 Earth hours"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq307",
    "fact": "The yo-yo originated in the Philippines where it was reportedly used as a hunting weapon with a 6-metre cord. The word yo-yo means come-come in Filipino. It became a toy in the West in the 1920s.",
    "question": "The yo-yo originated in the Philippines, where it was used as a hunting weapon with a cord of what length?",
    "answers": {
      "A": "6 metres",
      "B": "3 metres",
      "C": "10 metres",
      "D": "4 metres"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq308",
    "fact": "Leonardo da Vinci was famously ambidextrous. He primarily wrote with his left hand in mirror script, wrote Latin texts with his right hand and could reportedly work with both hands simultaneously.",
    "question": "Leonardo da Vinci was known for an unusual ability with his hands. Which of the following is NOT true about Leonardo's writing habits?",
    "answers": {
      "A": "He could only write with his left hand and was unable to use his right hand for writing",
      "B": "He primarily wrote in mirror script using his left hand",
      "C": "He wrote Latin texts with his right hand",
      "D": "He could reportedly work with both hands simultaneously"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq309",
    "fact": "Cheese is the most stolen food globally according to the Centre for Retail Research. About 4 percent of all cheese produced worldwide is stolen. It is stolen more than meat, alcohol or infant formula.",
    "question": "According to the Centre for Retail Research, what is the most stolen food globally?",
    "answers": {
      "A": "Cheese",
      "B": "Meat",
      "C": "Alcohol",
      "D": "Infant formula"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq310",
    "fact": "Teaching began at Oxford around 1096-1167. The Aztec Empire rose to dominance around 1428. Oxford predates the Aztecs by about 260 to 330 years depending on which dates you use.",
    "question": "By approximately how many years did Oxford University predate the rise of the Aztec Empire?",
    "answers": {
      "A": "260-330 years",
      "B": "150-200 years",
      "C": "400-450 years",
      "D": "100-150 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq311",
    "fact": "If you shaved a tiger its skin would still show the same stripe pattern as its fur. The pigmentation goes all the way to the skin. No two tigers have the same stripe pattern.",
    "question": "If you shaved a tiger completely bald, what would you see underneath?",
    "answers": {
      "A": "The same stripe pattern as its fur, since the pigmentation is in the skin itself",
      "B": "Completely plain pink skin with no markings at all",
      "C": "Faint stripes that would fade within a few weeks",
      "D": "Only stripes on certain parts of the body, not the entire surface"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq312",
    "fact": "Sound designer Ben Burtt created the iconic Darth Vader breathing sound by recording himself breathing through a ScubaPro Pilot regulator in an echo chamber. Simple solution for iconic sound.",
    "question": "How did sound designer Ben Burtt create the iconic breathing sound for Darth Vader?",
    "answers": {
      "A": "By recording himself breathing through a ScubaPro Pilot regulator in an echo chamber",
      "B": "By slowing down and layering recordings of a Darth Vader actor's actual breathing",
      "C": "By synthesizing the sound electronically using early 1970s synthesizer equipment",
      "D": "By recording the sounds of a vacuum cleaner motor and processing it with reverb"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq313",
    "fact": "Many shark species are obligate ram ventilators: they must keep swimming with their mouths open to force water over their gills. If they stop moving they suffocate. Some species can pump water while still.",
    "question": "What is an 'obligate ram ventilator' in the context of sharks?",
    "answers": {
      "A": "A shark that must continuously swim with its mouth open to breathe, or it will suffocate",
      "B": "A shark that uses a special pump in its mouth to extract oxygen from saltwater",
      "C": "A shark that can only breathe when swimming backwards through the water",
      "D": "A shark that must visit the surface of the water every few minutes to gulp air"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq314",
    "fact": "The oldest known written recipe dates to around 1800 BC in ancient Sumer. It is a recipe for beer, written on a clay tablet. Beer was central to Sumerian culture and economy.",
    "question": "What is the oldest known written recipe in human history, dating back to around 1800 BC in ancient Sumer?",
    "answers": {
      "A": "A recipe for beer",
      "B": "A recipe for bread",
      "C": "A recipe for wine",
      "D": "A recipe for cheese"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq315",
    "fact": "A moving group of flamingos is called a flamboyance. When they are standing together they are called a stand. A flamingo can eat only when its head is upside down.",
    "question": "What is a group of flamingos called when they are moving together?",
    "answers": {
      "A": "A flamboyance",
      "B": "A flutter",
      "C": "A flock",
      "D": "A colony"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq316",
    "fact": "Marie Curie was moved to the Pantheon in Paris in 1995, becoming the first woman to be buried there on her own merit. Her husband Pierre was also reinterred alongside her.",
    "question": "In what year was Marie Curie moved to the Pantheon in Paris, becoming the first woman honored there on her own merit?",
    "answers": {
      "A": "1995",
      "B": "1985",
      "C": "1906",
      "D": "2000"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq317",
    "fact": "A 2001 study from the University of Leicester found that cows listening to slow music like Beethoven produced 3 percent more milk than those in silence. Fast music had no positive effect.",
    "question": "According to a 2001 University of Leicester study, what type of music increased milk production in cows?",
    "answers": {
      "A": "Slow classical music like Beethoven",
      "B": "Fast-paced rock and pop music",
      "C": "Country and folk music",
      "D": "Heavy metal and loud noise"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq318",
    "fact": "The marathon commemorates Pheidippides running from Marathon to Athens in 490 BC to announce victory over Persia. However ancient sources do not mention this run. The story may be legendary.",
    "question": "According to historical records, what is the main issue with the popular story of Pheidippides running from Marathon to Athens in 490 BC to announce victory over Persia?",
    "answers": {
      "A": "Ancient sources do not actually mention this run, and the story may be legendary",
      "B": "Pheidippides died during the run before reaching Athens",
      "C": "He ran from Athens to Marathon, not the other way around",
      "D": "The victory was over the Egyptians, not the Persians"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq319",
    "fact": "Japan is an archipelago of 6852 islands. Only about 421 of these are inhabited. The four main islands of Honshu, Hokkaido, Kyushu and Shikoku contain 97 percent of the population.",
    "question": "Approximately how many of Japan's 6,852 islands are inhabited?",
    "answers": {
      "A": "Around 421",
      "B": "Around 800",
      "C": "Around 1,200",
      "D": "Around 2,100"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq320",
    "fact": "The texture, shape and surface pattern of the human tongue is unique to each individual. Tongue prints have been proposed as biometric identifiers. They are protected inside the mouth and hard to fake.",
    "question": "Which part of the human body has been proposed as a biometric identifier because its texture, shape and surface pattern are unique to each individual?",
    "answers": {
      "A": "The tongue",
      "B": "The earlobe",
      "C": "The palm",
      "D": "The collarbone"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq321",
    "fact": "The collective noun for butterflies is a kaleidoscope or a swarm. A roost or cluster when they are gathered on trees. A single butterfly scales number in the thousands per square kilometre in migration.",
    "question": "What is the collective noun for a group of butterflies?",
    "answers": {
      "A": "A kaleidoscope or a swarm",
      "B": "A flutter or a cloud",
      "C": "A garden or a bouquet",
      "D": "A flight or a colony"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq322",
    "fact": "The inaugural FIFA World Cup was held in Uruguay in 1930. Only 13 teams participated. Uruguay won the final against Argentina 4-2. The USA reached the semi-finals in that first tournament.",
    "question": "In which country was the inaugural FIFA World Cup held in 1930?",
    "answers": {
      "A": "Uruguay",
      "B": "Argentina",
      "C": "Brazil",
      "D": "Italy"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq323",
    "fact": "Charlie Chaplin said a day without laughter is a day wasted. Research backs this up: laughter releases endorphins, reduces stress hormones, boosts immunity and increases pain tolerance.",
    "question": "According to research, which of the following is NOT a benefit of laughter?",
    "answers": {
      "A": "Increases pain tolerance",
      "B": "Reduces stress hormones",
      "C": "Releases endorphins",
      "D": "Decreases bone density"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq324",
    "fact": "The dot or tittle on the lowercase i was added in the 11th century to distinguish the letter from adjacent minims in handwriting, making texts faster and easier to read.",
    "question": "In which century was the dot (tittle) added to the lowercase letter 'i' to help distinguish it from other letters in handwriting?",
    "answers": {
      "A": "11th century",
      "B": "9th century",
      "C": "13th century",
      "D": "15th century"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq325",
    "fact": "Sharks first appeared about 450 million years ago. Pangaea began breaking apart about 200 million years ago. Sharks predate the separation of the continents by about 250 million years.",
    "question": "By approximately how many million years did sharks predate the breakup of the supercontinent Pangaea?",
    "answers": {
      "A": "250 million years",
      "B": "200 million years",
      "C": "450 million years",
      "D": "50 million years"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq326",
    "fact": "In microgravity tears do not fall. They accumulate around the eye as a blob of water. Crying in space produces what astronaut Chris Hadfield described as quivering balls of liquid that sting the eyes.",
    "question": "According to astronaut Chris Hadfield, what happens when an astronaut cries in microgravity?",
    "answers": {
      "A": "Tears accumulate around the eye as quivering balls of liquid that sting the eyes",
      "B": "Tears freeze instantly and fall like ice crystals",
      "C": "Tears evaporate immediately due to the vacuum of space",
      "D": "Tears float away from the face in straight lines"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq327",
    "fact": "The Eiffel Tower was built as a temporary structure for the 1889 Paris World Fair. It was scheduled for demolition in 1909. It survived because it was a useful radio transmission tower.",
    "question": "Why was the Eiffel Tower saved from demolition in 1909, despite being built as a temporary structure for the 1889 Paris World Fair?",
    "answers": {
      "A": "It proved to be a useful radio transmission tower",
      "B": "The French government decided it had become a national symbol",
      "C": "Visitor numbers were so high that it generated too much revenue to demolish",
      "D": "Structural engineers discovered it was too expensive to take down safely"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq328",
    "fact": "North Korea and Finland share no borders but are separated by only one country: Russia. Norway and Finland border Russia in the north. Russia borders North Korea in the far east.",
    "question": "Which country is the only nation that separates North Korea and Finland?",
    "answers": {
      "A": "Russia",
      "B": "Mongolia",
      "C": "Kazakhstan",
      "D": "Belarus"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq329",
    "fact": "Ants live in colonies that can range from dozens to millions of individuals. The largest ant colony ever discovered was a supercolony of Argentine ants stretching 6000 km across Europe.",
    "question": "What is the approximate length of the largest ant supercolony ever discovered, which consists of Argentine ants across Europe?",
    "answers": {
      "A": "6,000 km",
      "B": "2,000 km",
      "C": "10,000 km",
      "D": "600 km"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq330",
    "fact": "On 26 June 1974 a 10-pack of Wrigley Juicy Fruit chewing gum was the first product to be scanned using a barcode at a Marsh supermarket in Troy Ohio. The gum is now in the Smithsonian.",
    "question": "What was the first product ever to be scanned using a barcode in a retail store?",
    "answers": {
      "A": "A 10-pack of Wrigley Juicy Fruit chewing gum",
      "B": "A bottle of Coca-Cola",
      "C": "A loaf of Wonder Bread",
      "D": "A can of Campbell's soup"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq331",
    "fact": "The collective noun for cats is a clowder. A group of kittens is a kindle. A group of wild cats is a destruction. Most people only know litter for kittens but kindle is the correct term.",
    "question": "What is the correct collective noun for a group of kittens?",
    "answers": {
      "A": "Kindle",
      "B": "Litter",
      "C": "Clowder",
      "D": "Destruction"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq332",
    "fact": "The X in Xmas comes from the Greek letter Chi, which is the first letter of Christos, the Greek word for Christ. Xmas has been used as an abbreviation since the 1500s.",
    "question": "What does the 'X' in 'Xmas' represent?",
    "answers": {
      "A": "The Greek letter Chi, first letter of 'Christos'",
      "B": "A Roman numeral representing the number 10",
      "C": "An abbreviation for the word 'cross'",
      "D": "A placeholder used by illiterate scribes in medieval times"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq333",
    "fact": "Octopuses have three hearts: two pump blood through the gills and one pumps it through the body. Their blood is blue because it uses copper-based haemocyanin instead of iron-based haemoglobin.",
    "question": "How many hearts does an octopus have, and what makes their blood blue?",
    "answers": {
      "A": "Three hearts; copper-based haemocyanin in their blood",
      "B": "Two hearts; copper-based haemocyanin in their blood",
      "C": "Three hearts; iron-based haemoglobin in their blood",
      "D": "Four hearts; copper-based haemocyanin in their blood"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq334",
    "fact": "Me at the zoo was uploaded by YouTube co-founder Jawed Karim on 23 April 2005. The 18-second video shows him at San Diego Zoo talking about elephants. It is still available to watch.",
    "question": "Which YouTube co-founder uploaded 'Me at the zoo', the platform's first ever video, on 23 April 2005?",
    "answers": {
      "A": "Jawed Karim",
      "B": "Steve Chen",
      "C": "Chad Hurley",
      "D": "Evan Williams"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq335",
    "fact": "A lightning bolt carries roughly 1 to 5 billion joules of energy. A typical toaster uses about 800 watts. One bolt could theoretically toast around 100,000 slices of bread if the energy could be captured.",
    "question": "Theoretically, how many slices of bread could a single lightning bolt toast if its energy could be captured? (Assuming a toaster uses 800 watts)",
    "answers": {
      "A": "Around 100,000 slices",
      "B": "Around 50,000 slices",
      "C": "Around 250,000 slices",
      "D": "Around 10,000 slices"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq336",
    "fact": "Paradise derives from the Old Persian pairi-daeza meaning around wall or enclosed garden. It referred to the beautiful walled gardens of Persian royalty. The concept spread through Greek and then Latin.",
    "question": "The word 'paradise' originates from Old Persian and originally referred to what?",
    "answers": {
      "A": "Walled gardens of Persian royalty",
      "B": "A mountainous region in ancient Persia",
      "C": "A Persian religious ceremony or ritual",
      "D": "A type of precious Persian textile"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq337",
    "fact": "Kangaroos cannot walk backwards due to their large tail and the anatomy of their hind legs. Their powerful legs are built for forward movement only. This is why they appear on the Australian coat of arms.",
    "question": "Why do kangaroos appear on the Australian coat of arms?",
    "answers": {
      "A": "Because they cannot walk backwards, symbolizing Australia's forward progress",
      "B": "Because they are the fastest land animals in Australia",
      "C": "Because they are found nowhere else in the world",
      "D": "Because they are the largest marsupials in Australia"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq338",
    "fact": "Uranus has an axial tilt of 97.77 degrees, meaning it essentially rotates on its side. Its poles experience 42 years of continuous sunlight followed by 42 years of darkness. Origin of tilt is unclear.",
    "question": "Which planet in our solar system rotates so extremely on its side that its poles experience 42 years of continuous sunlight followed by 42 years of darkness?",
    "answers": {
      "A": "Uranus",
      "B": "Neptune",
      "C": "Saturn",
      "D": "Venus"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq339",
    "fact": "Blue whale vocalisations travel at up to 188 decibels and can travel thousands of kilometres through ocean. Before human noise pollution whales could communicate across entire ocean basins.",
    "question": "At what decibel level can blue whale vocalisations travel through the ocean?",
    "answers": {
      "A": "Up to 188 decibels",
      "B": "Up to 120 decibels",
      "C": "Up to 155 decibels",
      "D": "Up to 210 decibels"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq340",
    "fact": "Martin Cooper of Motorola made the first handheld mobile phone call on 3 April 1973 in New York. He called his rival at Bell Labs. The phone weighed 1.1 kg and took 10 hours to charge for 30 minutes of use.",
    "question": "In what year did Martin Cooper of Motorola make the first handheld mobile phone call?",
    "answers": {
      "A": "1973",
      "B": "1975",
      "C": "1971",
      "D": "1976"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq341",
    "fact": "The collective noun for dolphins is a pod. Other marine collective nouns: a school or shoal of fish, a bloom of jellyfish, a smack of jellyfish, a bed of oysters, a bale of turtles.",
    "question": "What is the collective noun for dolphins?",
    "answers": {
      "A": "A pod",
      "B": "A school",
      "C": "A bloom",
      "D": "A bale"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq342",
    "fact": "The worlds first cash machine was installed by Barclays Bank in Enfield London on 27 June 1967. It was invented by John Shepherd-Barron. It dispensed 10 notes against pre-issued tokens.",
    "question": "Which bank installed the world's first cash machine at Enfield, London on 27 June 1967?",
    "answers": {
      "A": "Barclays Bank",
      "B": "HSBC",
      "C": "Lloyds Bank",
      "D": "National Westminster Bank"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq343",
    "fact": "Iceland is one of the few countries in the world with no standing army. It has a small coast guard and a police force. It relies on NATO membership for its defence. It has been at peace since 1944.",
    "question": "Iceland has been at peace since 1944. Which of the following best describes Iceland's military setup?",
    "answers": {
      "A": "It has no standing army and relies on NATO for defence",
      "B": "It has a small standing army but no navy or air force",
      "C": "It is militarily independent with a full armed forces",
      "D": "It has a standing army but is not a NATO member"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq344",
    "fact": "Leonardo da Vincis Salvator Mundi sold at Christie s New York on 15 November 2017 for 450.3 million dollars, the highest price ever paid for a painting at auction.",
    "question": "In November 2017, Leonardo da Vinci's 'Salvator Mundi' set a record for the highest price ever paid for a painting at auction. What was the sale price?",
    "answers": {
      "A": "$450.3 million",
      "B": "$380.5 million",
      "C": "$520.7 million",
      "D": "$405.2 million"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq345",
    "fact": "Finland has the highest concentration of heavy metal bands per capita in the world with about 53 bands per 100,000 people. The country also has one of the highest literacy rates and happiness scores.",
    "question": "Which country has the highest concentration of heavy metal bands per capita in the world, with approximately 53 bands per 100,000 people?",
    "answers": {
      "A": "Finland",
      "B": "Sweden",
      "C": "Germany",
      "D": "Norway"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq346",
    "fact": "The average human body contains about 0.2 milligrams of gold, mostly dissolved in blood. At current gold prices this is worth less than a cent. The body also contains trace amounts of many metals.",
    "question": "Approximately how much gold is contained in the average human body?",
    "answers": {
      "A": "0.2 milligrams",
      "B": "2 milligrams",
      "C": "0.02 milligrams",
      "D": "20 milligrams"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq347",
    "fact": "The Great Wall was built, rebuilt and extended over many dynasties from about 7th century BC to the 17th century AD. What we see today is mostly the Ming Dynasty wall built between 1368 and 1644.",
    "question": "The Great Wall of China that tourists see today was primarily built during which dynasty?",
    "answers": {
      "A": "Ming Dynasty",
      "B": "Han Dynasty",
      "C": "Qin Dynasty",
      "D": "Tang Dynasty"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq348",
    "fact": "The USA, Liberia and Myanmar are the only three countries that have not officially adopted the metric system. The USA uses the imperial system while Liberia and Myanmar are transitioning.",
    "question": "Which three countries have not officially adopted the metric system?",
    "answers": {
      "A": "USA, Liberia, and Myanmar",
      "B": "USA, Canada, and Australia",
      "C": "USA, UK, and India",
      "D": "USA, Liberia, and Thailand"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq349",
    "fact": "Sloths have extremely slow metabolisms and descend from trees to defecate only about once a week. Each bathroom visit can involve expelling up to a third of their body weight in waste.",
    "question": "How often do sloths typically descend from trees to defecate?",
    "answers": {
      "A": "Once a week",
      "B": "Once a day",
      "C": "Once a month",
      "D": "Once every three days"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq350",
    "fact": "The Eiffel Tower was hugely controversial when built for the 1889 World Fair. Artists and writers called it an eyesore and a blot on the city. Guy de Maupassant famously ate lunch in it daily to avoid seeing it.",
    "question": "Why did the author Guy de Maupassant famously eat lunch in the Eiffel Tower every day when it was first built for the 1889 World Fair?",
    "answers": {
      "A": "To avoid having to look at it, as he considered it an eyesore",
      "B": "Because it was the only restaurant in Paris he could afford",
      "C": "To secretly help promote the tower to other writers and artists",
      "D": "Because he was conducting research for a novel about the structure"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq351",
    "fact": "The collective noun for whales is a pod. A group of whales can also be called a gam, school or herd. Blue whales are mostly solitary. Orcas live in tight family pods that stay together for life.",
    "question": "Which of these is NOT a collective noun for whales?",
    "answers": {
      "A": "Colony",
      "B": "Pod",
      "C": "Gam",
      "D": "School"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq352",
    "fact": "The Colosseum was built between 70 and 80 AD using tens of thousands of Jewish prisoners of war captured during the siege of Jerusalem in 70 AD by Emperor Titus.",
    "question": "Which Roman Emperor oversaw the construction of the Colosseum between 70 and 80 AD?",
    "answers": {
      "A": "Titus",
      "B": "Nero",
      "C": "Vespasian",
      "D": "Domitian"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq353",
    "fact": "Bagpipes are ancient instruments found across Europe, Asia and North Africa. The earliest bagpipes may have originated in the Middle East. They were played in ancient Egypt and Rome before Scotland.",
    "question": "Which of the following regions is NOT mentioned as an ancient area where bagpipes were played?",
    "answers": {
      "A": "Ancient China",
      "B": "Ancient Egypt",
      "C": "Ancient Rome",
      "D": "The Middle East"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq354",
    "fact": "ARPANET was created in 1969 by DARPA for research purposes. It connected universities and research labs. The myth that it was designed to survive nuclear war was a later rationalization.",
    "question": "In what year was ARPANET, the precursor to the modern internet, created by DARPA?",
    "answers": {
      "A": "1969",
      "B": "1972",
      "C": "1965",
      "D": "1971"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq355",
    "fact": "Research by a Somerset farmers group found that cows moo in regional dialects influenced by their herd. Cows in different areas of Britain produce slightly different moo sounds.",
    "question": "According to research by a Somerset farmers group, what influences the regional variations in cow moos across Britain?",
    "answers": {
      "A": "Their local herd environment",
      "B": "The breed of the cow",
      "C": "The type of grass they eat",
      "D": "The age of the cow"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq356",
    "fact": "Albert Alexander was the first patient treated with penicillin in February 1941. He had a severe infection after scratching his face on a rose thorn. He improved dramatically but supplies ran out and he died.",
    "question": "In February 1941, Albert Alexander became the first patient treated with penicillin. How did he originally sustain the infection that led to this historic medical treatment?",
    "answers": {
      "A": "He scratched his face on a rose thorn",
      "B": "He cut his hand during surgery",
      "C": "He was bitten by an infected animal",
      "D": "He stepped on a contaminated nail"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq357",
    "fact": "Most hummingbirds weigh between 2 and 20 grams. The Bee Hummingbird weighs just 1.6 grams, less than a US penny at 2.5 grams. They are the smallest birds in the world.",
    "question": "What is the weight of a Bee Hummingbird, the world's smallest bird?",
    "answers": {
      "A": "1.6 grams",
      "B": "2.5 grams",
      "C": "5.2 grams",
      "D": "12 grams"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq358",
    "fact": "Your microbiome contains about 8 million unique bacterial genes compared to approximately 20,000 human genes. By gene count you are more bacteria than human by a ratio of about 400 to 1.",
    "question": "By gene count, how many times more bacterial genes does your microbiome contain compared to human genes?",
    "answers": {
      "A": "Approximately 400 to 1",
      "B": "Approximately 100 to 1",
      "C": "Approximately 200 to 1",
      "D": "Approximately 50 to 1"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq359",
    "fact": "Gorillas share 98.3 percent of DNA with humans. Chimpanzees share about 98.7 percent. Bonobos also share about 98.7 percent. All great apes are remarkably close relatives of Homo sapiens.",
    "question": "Which of the following great apes shares the highest percentage of DNA with humans?",
    "answers": {
      "A": "Chimpanzees and bonobos (approximately 98.7%)",
      "B": "Gorillas (approximately 98.3%)",
      "C": "Orangutans (approximately 97.2%)",
      "D": "All great apes share exactly the same percentage"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq360",
    "fact": "Despite being the worlds greatest river by volume the Amazon has no bridges crossing it anywhere along its 6400 km length. The jungle terrain and shifting channels make bridge construction impractical.",
    "question": "Which of the following rivers has NO bridges crossing it along its entire length, despite being the world's largest river by volume?",
    "answers": {
      "A": "The Amazon River",
      "B": "The Congo River",
      "C": "The Nile River",
      "D": "The Yangtze River"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq361",
    "fact": "The collective noun for hippos is a bloat. Other collective nouns: a prickle of porcupines, a flamboyance of flamingos, a murder of crows, a parliament of owls, a tower of giraffes.",
    "question": "What is the collective noun for a group of hippos?",
    "answers": {
      "A": "A bloat",
      "B": "A crash",
      "C": "A pod",
      "D": "A thunder"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq362",
    "fact": "Roger Bannister broke the four-minute mile barrier on 6 May 1954 in Oxford running 3 minutes 59.4 seconds. Within 46 days John Landy broke his record showing the psychological barrier was the main obstacle.",
    "question": "Roger Bannister broke the four-minute mile barrier in 1954. How long did it take for another runner to break his record?",
    "answers": {
      "A": "46 days",
      "B": "6 months",
      "C": "2 years",
      "D": "18 months"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq363",
    "fact": "Polar bear fur is actually transparent and hollow, reflecting light to appear white. Their skin underneath is black to absorb heat from sunlight. The white fur provides camouflage in snow and ice.",
    "question": "What is the actual structure and color of polar bear fur?",
    "answers": {
      "A": "Transparent and hollow with black skin underneath to absorb heat",
      "B": "White pigmented fur with white skin underneath for insulation",
      "C": "Opaque white fur with white blubber layer for warmth",
      "D": "Translucent fur with brown skin underneath for UV protection"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq364",
    "fact": "Snow falls in parts of the Sahara, particularly in mountainous regions like the Atlas Mountains of Algeria. In January 2018 snow fell on the sand dunes of Ain Sefra Algeria for the first time in 37 years.",
    "question": "In January 2018, snow fell on the sand dunes of Ain Sefra in which country for the first time in 37 years?",
    "answers": {
      "A": "Algeria",
      "B": "Morocco",
      "C": "Tunisia",
      "D": "Libya"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq365",
    "fact": "Association football (soccer) has an estimated 4 billion fans globally making it the most popular sport in the world. Cricket is second with about 2.5 billion. Field hockey is third at about 2 billion.",
    "question": "Which sport has the most fans globally, with an estimated 4 billion supporters worldwide?",
    "answers": {
      "A": "Association football (soccer)",
      "B": "Cricket",
      "C": "Field hockey",
      "D": "Basketball"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq366",
    "fact": "Sharks have existed for about 450 million years. Saturns rings are estimated to be only 10 to 100 million years old according to recent Cassini mission data. Sharks predate Saturns rings.",
    "question": "Which of the following existed first?",
    "answers": {
      "A": "Sharks",
      "B": "Saturn's rings",
      "C": "They appeared at roughly the same time",
      "D": "Saturn's rings by about 200 million years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq367",
    "fact": "The tongue heals faster than almost any other tissue due to its rich blood supply and the presence of growth factors in saliva. Tongue wounds that would scar elsewhere heal with minimal scarring.",
    "question": "Why does the human tongue heal faster than most other body tissues?",
    "answers": {
      "A": "Its rich blood supply and growth factors in saliva",
      "B": "The tongue contains special antibacterial proteins that prevent infection",
      "C": "Tongue cells divide at twice the rate of other body cells",
      "D": "The mouth's acidic environment kills bacteria and accelerates healing"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq368",
    "fact": "The text content of the Library of Congress is estimated at about 10 terabytes. A modern hard drive can store this amount. However if you include audio, video and images the estimate rises to 3 petabytes.",
    "question": "If you include audio, video and images, how much data storage is estimated for the entire Library of Congress collection?",
    "answers": {
      "A": "3 petabytes",
      "B": "10 terabytes",
      "C": "50 petabytes",
      "D": "1 exabyte"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq369",
    "fact": "The canine nose has about 300 million olfactory receptors compared to about 6 million in humans. That is 300 ÷ 6 = 50 times more. The part of a dog brain devoted to smell is about 40 times greater proportionally than in humans.",
    "question": "Approximately how many times more olfactory receptors does a dog's nose have compared to a human's nose?",
    "answers": {
      "A": "50 times more",
      "B": "300 times more",
      "C": "6 times more",
      "D": "40 times more"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq370",
    "fact": "Captain Albert Berry made the first parachute jump from a moving aircraft on 1 March 1912 over Missouri. He jumped from a height of about 500 feet from a Benoist pusher biplane.",
    "question": "In what year did Captain Albert Berry make the first parachute jump from a moving aircraft?",
    "answers": {
      "A": "1912",
      "B": "1910",
      "C": "1915",
      "D": "1908"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq371",
    "fact": "Research suggests a sneeze expels air at speeds of 145 to 165 km per hour and releases up to 40,000 droplets. The mist can travel up to 8 metres. The eyes close involuntarily during sneezing.",
    "question": "At what speed does research suggest a sneeze expels air?",
    "answers": {
      "A": "145 to 165 km per hour",
      "B": "100 to 120 km per hour",
      "C": "200 to 220 km per hour",
      "D": "80 to 100 km per hour"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq372",
    "fact": "The Mona Lisa measures just 77 by 53 cm, roughly the size of a large poster. Most visitors at the Louvre are surprised by how small it is when they finally see it in person.",
    "question": "What are the dimensions of the Mona Lisa?",
    "answers": {
      "A": "77 by 53 cm",
      "B": "120 by 80 cm",
      "C": "150 by 100 cm",
      "D": "90 by 70 cm"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq373",
    "fact": "The Global Peace Index has ranked Iceland as the most peaceful country in the world every year since 2008. It has no army, virtually no crime and has been conflict-free since the 13th century.",
    "question": "Which country has been ranked as the most peaceful in the world by the Global Peace Index every year since 2008?",
    "answers": {
      "A": "Iceland",
      "B": "New Zealand",
      "C": "Switzerland",
      "D": "Denmark"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq374",
    "fact": "There are approximately 33 billion chickens alive at any given time compared to 8 billion humans. Chickens outnumber humans by about 4 to 1. More chickens are born each day than any other bird species.",
    "question": "Approximately how many chickens are alive at any given time on Earth?",
    "answers": {
      "A": "33 billion",
      "B": "8 billion",
      "C": "16 billion",
      "D": "50 billion"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq375",
    "fact": "The collective noun for fish swimming together is a school or a shoal. Technically a school moves together in synchrony while a shoal is a looser grouping. Both terms are commonly used.",
    "question": "What is the collective noun for fish swimming together in a tightly coordinated group?",
    "answers": {
      "A": "A school",
      "B": "A pod",
      "C": "A colony",
      "D": "A fleet"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq376",
    "fact": "For a standard shoe with 6 pairs of eyelets there are 43,200 different ways to lace it. A mathematician at the University of Sydney calculated this in 2002. Most people use just one method.",
    "question": "According to a 2002 calculation by a University of Sydney mathematician, how many different ways can a standard shoe with 6 pairs of eyelets be laced?",
    "answers": {
      "A": "43,200",
      "B": "28,800",
      "C": "86,400",
      "D": "21,600"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq377",
    "fact": "A quahog clam nicknamed Ming was found off the coast of Iceland in 2006. Scientists calculated its age at 507 years by counting growth rings on its shell, making it the oldest individual animal on record.",
    "question": "A quahog clam nicknamed Ming, discovered off Iceland in 2006, held the record as the oldest individual animal ever found. Approximately how old was it?",
    "answers": {
      "A": "507 years old",
      "B": "612 years old",
      "C": "423 years old",
      "D": "589 years old"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq378",
    "fact": "Pneumonoultramicroscopicsilicovolcanoconiosis is a lung disease caused by inhaling very fine silica dust from volcanoes. At 45 letters it is the longest word in major English dictionaries.",
    "question": "What is pneumonoultramicroscopicsilicovolcanoconiosis?",
    "answers": {
      "A": "A lung disease caused by inhaling fine silica dust from volcanoes",
      "B": "A breathing technique used by deep-sea divers",
      "C": "An inflammation of the throat caused by volcanic ash",
      "D": "A rare genetic disorder affecting the respiratory system"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq379",
    "fact": "Sea otters sleep floating on their backs and hold paws with other otters to form rafts and prevent drifting away. A group of otters resting together is called a raft.",
    "question": "What is a group of sea otters resting together called?",
    "answers": {
      "A": "A raft",
      "B": "A pod",
      "C": "A colony",
      "D": "A lodge"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq380",
    "fact": "The thumb has its own arterial blood supply separate from the fingers. This is why you should never use your thumb to take someone else pulse as you will feel your own pulse instead.",
    "question": "Why is it inadvisable to use your thumb when checking someone else's pulse?",
    "answers": {
      "A": "The thumb has its own separate arterial blood supply, so you'll feel your own pulse instead",
      "B": "The thumb is too thick to accurately detect pulse rates in other people",
      "C": "Thumb nerves are too sensitive and can cause discomfort to the person being examined",
      "D": "The thumb moves too much naturally, making it impossible to keep still enough for accurate readings"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq381",
    "fact": "The collective noun for ravens is an unkindness or a conspiracy. Rooks gather in a parliament, crows in a murder, and ravens in an unkindness. Ravens are among the most intelligent birds.",
    "question": "What is the collective noun for a group of ravens?",
    "answers": {
      "A": "An unkindness",
      "B": "A murder",
      "C": "A parliament",
      "D": "A conspiracy"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq382",
    "fact": "The Althing was established in 930 AD in Iceland making it the worlds oldest continuously operating parliament. It met at Thingvellir until 1798 and still operates today in Reykjavik.",
    "question": "In what year was the Althing, the world's oldest continuously operating parliament, established in Iceland?",
    "answers": {
      "A": "930 AD",
      "B": "1030 AD",
      "C": "1798 AD",
      "D": "1874 AD"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq383",
    "fact": "Penguins swimming at speed can launch themselves up to 2.7 metres out of the water onto ice. They build up underwater speed then angle sharply upward to breach the surface.",
    "question": "How high can penguins launch themselves out of the water onto ice when swimming at speed?",
    "answers": {
      "A": "Up to 2.7 metres",
      "B": "Up to 1.5 metres",
      "C": "Up to 4.2 metres",
      "D": "Up to 3.8 metres"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq384",
    "fact": "The Andromeda Galaxy is approaching the Milky Way at about 110 km per second. In about 4.5 billion years the two galaxies will collide and merge into a new elliptical galaxy sometimes called Milkomeda.",
    "question": "At what speed is the Andromeda Galaxy currently approaching the Milky Way?",
    "answers": {
      "A": "About 110 km per second",
      "B": "About 220 km per second",
      "C": "About 50 km per second",
      "D": "About 300 km per second"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq385",
    "fact": "The collective noun for crows is a murder. It may come from folklore about crows gathering to judge a fellow crow. Other unusual collective nouns: a parliament of owls, a tower of giraffes.",
    "question": "What is the collective noun for crows?",
    "answers": {
      "A": "A murder",
      "B": "A parliament",
      "C": "A tower",
      "D": "A conspiracy"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq386",
    "fact": "Q is followed by U in nearly all English words. Exceptions include: qat, qoph, qi, qigong, qintar, and proper nouns like Qatar and Iraq. Most exceptions are borrowed from Arabic or Hebrew.",
    "question": "Which of the following English words is a common exception to the rule that Q is almost always followed by U?",
    "answers": {
      "A": "qi",
      "B": "quad",
      "C": "quilt",
      "D": "queen"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq387",
    "fact": "Horses can doze standing up using a passive stay apparatus in their legs. However they need to lie down for REM sleep. Most horses lie down for about 30 minutes to 3 hours per day for deep sleep.",
    "question": "How long do horses typically lie down each day to achieve deep REM sleep?",
    "answers": {
      "A": "30 minutes to 3 hours",
      "B": "1 to 2 hours",
      "C": "4 to 6 hours",
      "D": "8 to 10 hours"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq388",
    "fact": "In Louis Daguerres 1838 photo of Boulevard du Temple the exposure was so long (10 minutes) that all moving traffic disappeared. Only a man having his shoes shined stayed still long enough to appear.",
    "question": "In Louis Daguerre's famous 1838 photograph of Boulevard du Temple in Paris, why did only one person appear in the image despite it being a busy street?",
    "answers": {
      "A": "The 10-minute exposure time was so long that all moving traffic disappeared, except for a man having his shoes shined who stayed still",
      "B": "Daguerre deliberately asked pedestrians to leave the street to create an empty urban landscape",
      "C": "A sudden rainstorm cleared the streets, leaving only one brave pedestrian",
      "D": "The photograph was taken at dawn before the city had woken up and traffic had started"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq389",
    "fact": "Cats can produce over 100 distinct vocal sounds compared to about 10 for dogs. This vocal range developed to communicate with humans. Wild cats communicate mostly through scent and body language.",
    "question": "Approximately how many distinct vocal sounds can cats produce, compared to dogs?",
    "answers": {
      "A": "Cats can produce over 100 sounds compared to about 10 for dogs",
      "B": "Cats can produce over 50 sounds compared to about 30 for dogs",
      "C": "Cats can produce about 50 sounds compared to about 40 for dogs",
      "D": "Cats can produce about 75 sounds compared to about 60 for dogs"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq390",
    "fact": "The Great Fire of London burned from 2 to 6 September 1666, destroying 87 churches including St Pauls Cathedral, 13,200 houses and most of the City of London. Official deaths were just 6.",
    "question": "In what year did the Great Fire of London occur?",
    "answers": {
      "A": "1666",
      "B": "1665",
      "C": "1667",
      "D": "1668"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq391",
    "fact": "Coffee derives from the Arabic qahwah which originally referred to wine or a type of dark drink. It became kahve in Turkish and coffee in English via Dutch koffie.",
    "question": "The word 'coffee' has an interesting etymological journey. Which language did it pass through before reaching English?",
    "answers": {
      "A": "Arabic, then Turkish, then Dutch",
      "B": "Arabic, then French, then Dutch",
      "C": "Turkish, then Persian, then Dutch",
      "D": "Arabic, then Italian, then Spanish"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq392",
    "fact": "Point Nemo is the most remote oceanic point on Earth at 2688 km from the nearest land. The International Space Station orbits at 408 km altitude, making astronauts aboard closer than any land.",
    "question": "Point Nemo is the most remote oceanic point on Earth. How far is it from the nearest land?",
    "answers": {
      "A": "2,688 km",
      "B": "1,850 km",
      "C": "3,200 km",
      "D": "2,100 km"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq393",
    "fact": "The myth that old window glass is thicker at the bottom because glass flows slowly is false. Glass is an amorphous solid that does not flow at room temperature. Old glass varied in thickness due to manufacturing.",
    "question": "Why is old window glass sometimes thicker at the bottom than the top?",
    "answers": {
      "A": "Due to uneven thickness from the manufacturing process, not because glass flows",
      "B": "Because glass slowly flows downward at room temperature over centuries",
      "C": "Because the weight of the glass causes it to gradually shift downward",
      "D": "Because older glass was intentionally made thicker at the bottom for strength"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq394",
    "fact": "Muscle derives from musculus in Latin meaning little mouse. Romans noticed that flexing muscles resembled mice moving under the skin. The word mussel for the shellfish has the same root.",
    "question": "The Latin word 'musculus' means 'little mouse.' Why did Romans choose this term for muscles?",
    "answers": {
      "A": "They noticed that flexing muscles resembled mice moving under the skin",
      "B": "They believed muscles were actually tiny mice living inside the body",
      "C": "They named muscles after the mouse because mice have the strongest bodies of all animals",
      "D": "They used the word to describe the sound muscles made when contracting"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq395",
    "fact": "Electric eels are not true eels at all. They belong to a South American fish order called Gymnotiformes and are more closely related to catfish and carp. True eels belong to the order Anguilliformes.",
    "question": "Electric eels are not true eels at all. Which of the following fish groups are they actually more closely related to?",
    "answers": {
      "A": "Catfish and carp",
      "B": "Salmon and trout",
      "C": "Sharks and rays",
      "D": "Seahorses and pipefish"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq396",
    "fact": "The Olympic flame is lit using a parabolic mirror to focus sunlight, a method reflecting ancient Greek practices of using mirrors and fire from the Sun as sacred. First used in modern Olympics in 1936 Berlin.",
    "question": "In which Olympic Games was the parabolic mirror method first used to light the Olympic flame?",
    "answers": {
      "A": "1936 Berlin Olympics",
      "B": "1924 Paris Olympics",
      "C": "1948 London Olympics",
      "D": "1952 Helsinki Olympics"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq397",
    "fact": "About 50 people die per year from bee stings in the US alone due to allergic reactions. Globally sharks kill about 5 to 10 people per year. Bees are far more deadly than sharks worldwide.",
    "question": "Which animal is responsible for more deaths per year in the United States: bees or sharks?",
    "answers": {
      "A": "Bees, by a significant margin",
      "B": "Sharks, by a significant margin",
      "C": "They kill roughly the same number of people",
      "D": "Neither - alligators kill more people than both"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq398",
    "fact": "Launched in 1977 Voyager 1 has travelled over 23 billion km from Earth as of 2024. It is the most distant human-made object. It crossed into interstellar space in 2012.",
    "question": "In what year did Voyager 1 cross into interstellar space?",
    "answers": {
      "A": "2012",
      "B": "2015",
      "C": "2018",
      "D": "2020"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq399",
    "fact": "Earth has approximately 3 trillion trees. The Milky Way has an estimated 200 to 400 billion stars. There are roughly 7 to 10 times more trees on Earth than stars in our galaxy.",
    "question": "Approximately how many times more trees are there on Earth compared to stars in the Milky Way?",
    "answers": {
      "A": "7 to 10 times more",
      "B": "2 to 3 times more",
      "C": "15 to 20 times more",
      "D": "100 times more"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq400",
    "fact": "Switzerland consumes about 10 to 11 kg of chocolate per person per year, the highest of any country. The UK and Germany follow. Switzerland also has some of the most famous chocolate brands.",
    "question": "Which country has the highest per capita chocolate consumption in the world, at approximately 10-11 kg per person per year?",
    "answers": {
      "A": "Switzerland",
      "B": "Germany",
      "C": "Belgium",
      "D": "Netherlands"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq401",
    "fact": "The collective noun for pandas is an embarrassment. Other unusual ones: a bloat of hippos, a murder of crows, a flamboyance of flamingos, a parliament of owls.",
    "question": "What is the collective noun for pandas?",
    "answers": {
      "A": "An embarrassment",
      "B": "A bloat",
      "C": "A flamboyance",
      "D": "A parliament"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq402",
    "fact": "Disaster comes from Italian disastro combining dis meaning bad and astro meaning star. It reflects the ancient belief that catastrophes were caused by unfavourable star positions.",
    "question": "The word 'disaster' comes from Italian 'disastro'. What do the two parts of this word literally mean?",
    "answers": {
      "A": "Bad star",
      "B": "Bad luck",
      "C": "Bad weather",
      "D": "Bad timing"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq403",
    "fact": "Flamingos have a uniquely shaped beak designed to filter food from water only when the head is inverted. They eat by sweeping the beak through water with the head completely upside down.",
    "question": "In what unique position do flamingos hold their heads while feeding?",
    "answers": {
      "A": "Completely upside down",
      "B": "Tilted at a 45-degree angle",
      "C": "Turned sideways",
      "D": "Held straight up vertically"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq404",
    "fact": "John Spilsbury, a London cartographer, created the first jigsaw puzzle around 1760 by mounting a map on wood and cutting around country borders so children could learn geography.",
    "question": "Who is credited with inventing the first jigsaw puzzle around 1760?",
    "answers": {
      "A": "John Spilsbury, a London cartographer",
      "B": "William Hogarth, a London artist",
      "C": "Thomas Chippendale, a furniture maker",
      "D": "James Cook, an explorer"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq405",
    "fact": "Wombats are the only animals known to produce cube-shaped faeces. Scientists discovered in 2018 the intestinal walls of wombats are elastic and vary in thickness, shaping the droppings into cubes.",
    "question": "Which animal is known for producing cube-shaped faeces?",
    "answers": {
      "A": "Wombats",
      "B": "Badgers",
      "C": "Porcupines",
      "D": "Hedgehogs"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq406",
    "fact": "The first roller coasters in 18th century Russia were ice slides built for winter entertainment. In 1817 Paris roller coasters with wheeled cars were built partly to provide wholesome entertainment as an alternative to gambling.",
    "question": "In which country were ice slides first used as roller coasters during the 18th century?",
    "answers": {
      "A": "Russia",
      "B": "France",
      "C": "Germany",
      "D": "Austria"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq407",
    "fact": "Both horses and cows can doze standing up using a stay apparatus in their legs. However both need to lie down for full REM sleep. Horses lie down for about 30 minutes to 3 hours per day.",
    "question": "How long do horses typically need to lie down for REM sleep each day?",
    "answers": {
      "A": "30 minutes to 3 hours",
      "B": "1 to 2 hours",
      "C": "4 to 6 hours",
      "D": "8 to 10 hours"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq408",
    "fact": "The Amazon discharges approximately 209,000 cubic metres of water per second into the Atlantic Ocean. This represents about 20 percent of all freshwater that rivers discharge into the worlds oceans.",
    "question": "Approximately what percentage of all freshwater discharged by rivers into the world's oceans comes from the Amazon River?",
    "answers": {
      "A": "20 percent",
      "B": "15 percent",
      "C": "30 percent",
      "D": "10 percent"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq409",
    "fact": "Yo-yos are depicted in ancient Greek art dating to about 500 BC. They were made from wood, metal or painted terracotta. The modern yo-yo craze began in the 1920s when Pedro Flores introduced it to the USA.",
    "question": "In what decade did Pedro Flores introduce the modern yo-yo craze to the United States?",
    "answers": {
      "A": "1920s",
      "B": "1890s",
      "C": "1940s",
      "D": "1950s"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq410",
    "fact": "Larry Page and Sergey Brin originally called their search engine BackRub because it analysed back links. They renamed it Google after the mathematical term googol (10 to the power of 100) misspelling it in the process.",
    "question": "What was Google's original name before its founders Larry Page and Sergey Brin renamed it?",
    "answers": {
      "A": "BackRub",
      "B": "WebCrawler",
      "C": "LinkAnalyzer",
      "D": "SearchBot"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq411",
    "fact": "Ray Tomlinson sent the first email in 1971 between two computers in the same room. He could not remember what he typed, probably something like QWERTYUIOP. He also introduced the at symbol for email addresses.",
    "question": "Who sent the first email in 1971, and what symbol did he introduce for email addresses?",
    "answers": {
      "A": "Ray Tomlinson, who introduced the @ symbol",
      "B": "Steve Jobs, who introduced the # symbol",
      "C": "Bill Gates, who introduced the @ symbol",
      "D": "Ray Tomlinson, who introduced the & symbol"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq412",
    "fact": "The Titanic wreck at 3800 metres depth is deteriorating. Iron-eating bacteria are consuming the hull. Scientists estimate the wreck may collapse completely within 30 years. It will eventually disappear entirely.",
    "question": "At what depth does the Titanic wreck sit on the ocean floor?",
    "answers": {
      "A": "3800 metres",
      "B": "2400 metres",
      "C": "5200 metres",
      "D": "3200 metres"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq413",
    "fact": "Research from Northampton University found cows form close bonds with specific other cows. Their heart rate and cortisol levels increase when separated from their preferred companion.",
    "question": "According to research from Northampton University, what happens to a cow's heart rate and cortisol levels when separated from their preferred companion?",
    "answers": {
      "A": "They increase",
      "B": "They decrease",
      "C": "They remain unchanged",
      "D": "They fluctuate unpredictably"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq414",
    "fact": "Pierre Omidyar sold a broken laser pointer on AuctionWeb (later eBay) in 1995 for 14.83 dollars. When he contacted the buyer to confirm he understood it was broken the buyer replied: I collect broken laser pointers.",
    "question": "In 1995, Pierre Omidyar sold a broken laser pointer on AuctionWeb (the early version of eBay) for how much money?",
    "answers": {
      "A": "$14.83",
      "B": "$24.95",
      "C": "$9.99",
      "D": "$19.50"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq415",
    "fact": "Sharks are cartilaginous fish. Their skeletons are made entirely of cartilage not bone. This makes them lighter and more flexible than bony fish. Shark teeth are the only hard calcified structures they have.",
    "question": "What is the primary material that makes up a shark's skeleton?",
    "answers": {
      "A": "Cartilage",
      "B": "Bone",
      "C": "Calcified keratin",
      "D": "A combination of bone and cartilage"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq416",
    "fact": "Portuguese sailors first encountered dodos on Mauritius around 1507. By 1681 they were extinct. A combination of hunting, habitat destruction and invasive species introduced by humans caused their rapid extinction.",
    "question": "When did the dodo bird become completely extinct?",
    "answers": {
      "A": "1681",
      "B": "1507",
      "C": "1642",
      "D": "1723"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq417",
    "fact": "Letter E accounts for approximately 12 to 13 percent of letters in standard English text. It is so dominant that a novel written without the letter E is called a lipogram. Gadsby by Ernest Wright (1939) has no E.",
    "question": "What is the name of a novel written without using the letter E?",
    "answers": {
      "A": "Gadsby by Ernest Wright",
      "B": "The Great Gatsby by F. Scott Fitzgerald",
      "C": "Brave New World by Aldous Huxley",
      "D": "1984 by George Orwell"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq418",
    "fact": "Captain Albert Berry made the first parachute jump from a moving aircraft on 1 March 1912 over St Louis Missouri. He jumped from 500 feet from a Benoist pusher biplane and landed safely.",
    "question": "In 1912, Captain Albert Berry made history by performing the first parachute jump from a moving aircraft. From what height did he jump, and over which city?",
    "answers": {
      "A": "500 feet over St Louis, Missouri",
      "B": "1000 feet over San Francisco, California",
      "C": "750 feet over New York, New York",
      "D": "500 feet over Chicago, Illinois"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq419",
    "fact": "Despite their slow movements sloths have incredibly strong muscles relative to their size. Their grip strength is about three times that of a human. They hang from branches for so long their organs are attached to ribs to reduce breathing effort.",
    "question": "Sloths are known for their incredibly slow movements, but what remarkable physical adaptation do they possess?",
    "answers": {
      "A": "Their grip strength is about three times that of a human, and their organs are attached to their ribs to reduce breathing effort while hanging",
      "B": "Their grip strength is about five times that of a human, allowing them to hang indefinitely without fatigue",
      "C": "They have hollow bones like birds, which makes them lighter and easier to suspend from branches",
      "D": "Their arms are twice as long as their legs, giving them superior leverage when gripping branches"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq420",
    "fact": "Built around 2560 BC the Great Pyramid of Giza at 146 metres was the tallest man-made structure in the world until the Lincoln Cathedral spire was completed around 1311 AD, a span of about 3800 years.",
    "question": "For approximately how many years was the Great Pyramid of Giza the tallest man-made structure in the world?",
    "answers": {
      "A": "3800 years",
      "B": "2500 years",
      "C": "1500 years",
      "D": "4200 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq421",
    "fact": "Charles Osborne of Iowa hiccupped continuously from 1922 to 1990, a total of 68 years and an estimated 430 million hiccups. He finally stopped about a year before he died.",
    "question": "Charles Osborne from Iowa holds the world record for the longest continuous hiccupping. For how many years did he hiccup non-stop?",
    "answers": {
      "A": "68 years",
      "B": "52 years",
      "C": "75 years",
      "D": "81 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq422",
    "fact": "Clue derives from clew, Old English for ball of yarn. In Greek myth Theseus used yarn from Ariadne to find his way out of the Minotaur labyrinth. The meaning shifted over centuries to mean hint.",
    "question": "The word 'clue' originally derives from 'clew', an Old English term. What did 'clew' originally mean?",
    "answers": {
      "A": "A ball of yarn",
      "B": "A piece of thread",
      "C": "A map or chart",
      "D": "A riddle or puzzle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq423",
    "fact": "The collective noun for a group of pandas is an embarrassment. A group of panda cubs is called a litter. Giant pandas are so notoriously difficult to breed in captivity the name seems fitting.",
    "question": "What is the collective noun for a group of giant pandas?",
    "answers": {
      "A": "An embarrassment",
      "B": "A shuffle",
      "C": "A conservation",
      "D": "A bamboo"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq424",
    "fact": "The de Havilland Comet made the first commercial jet airline flight on 2 May 1952 from London to Johannesburg carrying 36 passengers. It cut travel times dramatically but early models had fatal structural problems.",
    "question": "Which aircraft made the first commercial jet airline flight on 2 May 1952, traveling from London to Johannesburg?",
    "answers": {
      "A": "de Havilland Comet",
      "B": "Boeing 707",
      "C": "Avro Canada CF-100",
      "D": "Lockheed Constellation"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq425",
    "fact": "Sharks first appeared about 450 million years ago. They predate trees by 100 million years. They have survived five mass extinctions. They are one of Earths most successful and ancient predators.",
    "question": "Approximately how many million years ago did sharks first appear on Earth?",
    "answers": {
      "A": "450",
      "B": "350",
      "C": "550",
      "D": "300"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq426",
    "fact": "Octopuses have three hearts and a distributed nervous system with nine functional brain centres: one central brain and eight mini-brains in each arm. Each arm can act semi-independently.",
    "question": "How many functional brain centres does an octopus have in total?",
    "answers": {
      "A": "Nine - one central brain and eight mini-brains in each arm",
      "B": "Three - one in each heart",
      "C": "Five - one central brain and four distributed throughout the body",
      "D": "Eight - one mini-brain in each arm only"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq427",
    "fact": "Vincenzo Peruggia stole the Mona Lisa on 21 August 1911. It was missing for over two years. Peruggia was caught trying to sell it in Florence in 1913. The theft made the painting world famous.",
    "question": "In what year did Vincenzo Peruggia steal the Mona Lisa?",
    "answers": {
      "A": "1911",
      "B": "1909",
      "C": "1913",
      "D": "1915"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq428",
    "fact": "A typical cumulus cloud contains about 500,000 kg of water droplets. The water is spread over such a huge volume that it can float on less dense warm air beneath. Clouds are surprisingly heavy.",
    "question": "Approximately how much water does a typical cumulus cloud contain?",
    "answers": {
      "A": "500,000 kg",
      "B": "50,000 kg",
      "C": "5,000,000 kg",
      "D": "5,000 kg"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq429",
    "fact": "The Epic of Gilgamesh from ancient Sumeria dates to around 2100 BC and is considered the oldest known work of literature. It includes a flood narrative similar to the biblical story of Noah.",
    "question": "The Epic of Gilgamesh, one of the oldest known works of literature, originated from which ancient civilization?",
    "answers": {
      "A": "Sumeria",
      "B": "Ancient Egypt",
      "C": "Babylon",
      "D": "Assyria"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq430",
    "fact": "A single pound of honey requires about 2 million flower visits by bees. A single bee visits about 50 to 100 flowers per foraging trip and produces only about a twelfth of a teaspoon of honey in its lifetime.",
    "question": "Approximately how many flower visits are required to produce a single pound of honey?",
    "answers": {
      "A": "2 million",
      "B": "500,000",
      "C": "10 million",
      "D": "50,000"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq431",
    "fact": "The collective noun for foxes is a skulk or an earth. Other unusual ones: a crash of rhinos, a bloat of hippos, a tower of giraffes, a flamboyance of flamingos.",
    "question": "What is the collective noun for a group of foxes?",
    "answers": {
      "A": "A skulk or an earth",
      "B": "A crash or a tower",
      "C": "A bloat or a flamboyance",
      "D": "A den or a pack"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq432",
    "fact": "William Thompson took the first underwater photograph in 1856 off Weymouth England using a watertight box camera on a pole. The image was blurry but it proved underwater photography was possible.",
    "question": "Who took the first underwater photograph in 1856 using a watertight box camera on a pole?",
    "answers": {
      "A": "William Thompson off Weymouth, England",
      "B": "Jacques Cousteau off the coast of France",
      "C": "William Henry Fox Talbot off Brighton, England",
      "D": "John Wesley Hyatt off the coast of Cornwall, England"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq433",
    "fact": "Giraffes have exactly 7 cervical vertebrae, the same as humans and almost all other mammals. Each giraffe vertebra can be over 25 cm long. The neck can weigh up to 270 kg.",
    "question": "How many cervical vertebrae does a giraffe have in its neck?",
    "answers": {
      "A": "7",
      "B": "12",
      "C": "15",
      "D": "19"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq434",
    "fact": "Checkmate comes from the Arabic Shah mat meaning the king is dead. Chess originated in India, spread to Persia then the Arab world before reaching Europe. Many chess terms have Arabic or Persian roots.",
    "question": "The chess term 'checkmate' is derived from Arabic words meaning what?",
    "answers": {
      "A": "The king is dead",
      "B": "The king is trapped",
      "C": "The king surrenders",
      "D": "The king is defeated"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq435",
    "fact": "The collective noun for jellyfish is a smack. Groups can also be called a bloom or a swarm. Jellyfish have no brain, no heart, no bones and are 95 percent water.",
    "question": "What is the collective noun for a group of jellyfish?",
    "answers": {
      "A": "A smack",
      "B": "A swarm",
      "C": "A bloom",
      "D": "A school"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq436",
    "fact": "The Lego Group produces about 318 million small rubber tyres per year for its toy vehicles. This makes Lego larger than Michelin, Bridgestone or Goodyear in terms of units produced annually.",
    "question": "The Lego Group produces approximately how many rubber tyres per year, making it the world's largest tyre manufacturer by unit volume?",
    "answers": {
      "A": "318 million",
      "B": "218 million",
      "C": "418 million",
      "D": "218 billion"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq437",
    "fact": "Metal expands when heated. In summer the iron structure of the Eiffel Tower expands and the tower can grow up to 15 cm taller than in winter. It also leans slightly away from the sun.",
    "question": "By approximately how much can the Eiffel Tower grow taller during summer compared to winter due to thermal expansion?",
    "answers": {
      "A": "15 cm",
      "B": "5 cm",
      "C": "30 cm",
      "D": "50 cm"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq438",
    "fact": "The abbreviation OMG (Oh My God) was first recorded in a letter to Winston Churchill from Admiral John Fisher in 1917. The letter mentioned a new Order of the Admiralty he suggested calling OMG.",
    "question": "In which year was the abbreviation OMG first recorded in a letter to Winston Churchill from Admiral John Fisher?",
    "answers": {
      "A": "1917",
      "B": "1925",
      "C": "1903",
      "D": "1939"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq439",
    "fact": "Research shows crows remember specific human faces and hold grudges against people who have wronged them for years. They will dive-bomb, alert other crows and even pass information to offspring.",
    "question": "According to research, what remarkable ability do crows possess when it comes to human interactions?",
    "answers": {
      "A": "They can remember specific human faces and hold grudges for years, even passing this information to their offspring",
      "B": "They can learn to mimic human speech patterns and use them to communicate with other birds",
      "C": "They can navigate using magnetic fields and predict weather changes up to a week in advance",
      "D": "They can recognize individual humans by their voice alone and follow them to food sources"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq440",
    "fact": "The Great Wall of China is actually a series of walls built by different states and dynasties over centuries. There are gaps, parallel sections and dead ends. The total length of all sections is about 21,000 km.",
    "question": "What is the approximate total length of all sections of the Great Wall of China combined?",
    "answers": {
      "A": "About 21,000 km",
      "B": "About 10,000 km",
      "C": "About 50,000 km",
      "D": "About 5,000 km"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq441",
    "fact": "Sea otters sleep floating on their backs and hold paws with companions to avoid drifting apart. A group of resting sea otters is called a raft. They wrap themselves in kelp for extra anchorage.",
    "question": "What is a group of resting sea otters called?",
    "answers": {
      "A": "A raft",
      "B": "A pod",
      "C": "A colony",
      "D": "A bundle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq442",
    "fact": "Ada Lovelace wrote what is considered the first computer algorithm in 1843 for Charles Babbages Analytical Engine which was never built. She foresaw that computers could do far more than calculation.",
    "question": "In what year did Ada Lovelace write what is considered the first computer algorithm for Charles Babbage's Analytical Engine?",
    "answers": {
      "A": "1843",
      "B": "1838",
      "C": "1851",
      "D": "1847"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq443",
    "fact": "Studies estimate the average driver spends about 6 months of their lifetime waiting at red traffic lights. In congested cities this figure can be much higher.",
    "question": "According to studies, how much of their lifetime does the average driver spend waiting at red traffic lights?",
    "answers": {
      "A": "About 6 months",
      "B": "About 2 years",
      "C": "About 3 months",
      "D": "About 1 year"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq444",
    "fact": "Fredric Baur invented the Pringles can and tube design in 1966 and patented it in 1975. When he died in 2008 his family honored his wish to be buried in a Pringles can. Part of his ashes are inside one.",
    "question": "What year did Fredric Baur patent the iconic Pringles can and tube design?",
    "answers": {
      "A": "1975",
      "B": "1966",
      "C": "1982",
      "D": "1989"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq445",
    "fact": "Polar bear fur is transparent and hollow, scattering light to appear white. Their skin underneath is jet black to absorb solar radiation for warmth. The transparent hollow fur may also conduct UV light.",
    "question": "What color is a polar bear's skin underneath its fur?",
    "answers": {
      "A": "Jet black",
      "B": "Pink",
      "C": "White",
      "D": "Grey"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq446",
    "fact": "John 11:35 Jesus wept is the shortest verse in the Bible at just two words in English. It describes Jesus weeping at the tomb of Lazarus before raising him from the dead.",
    "question": "What is the shortest verse in the Bible, consisting of just two words in English?",
    "answers": {
      "A": "John 11:35 - Jesus wept",
      "B": "Luke 1:37 - Nothing impossible",
      "C": "Psalm 117:2 - Praise God",
      "D": "1 Thessalonians 5:16 - Rejoice always"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq447",
    "fact": "The original marathon in 1896 Athens Olympics was about 40 km. The modern distance of 26.2 miles (42.195 km) was standardised in 1921 based on the 1908 London Olympics route from Windsor Castle to the Olympic stadium.",
    "question": "The modern marathon distance of 26.2 miles (42.195 km) was standardised in which year, based on the route from Windsor Castle to the Olympic stadium?",
    "answers": {
      "A": "1921",
      "B": "1908",
      "C": "1896",
      "D": "1912"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq448",
    "fact": "The collective noun for meerkats is a mob, gang or band. Meerkats live in groups of 2 to 30 individuals and take turns as sentinels watching for predators while the rest forage.",
    "question": "What is the collective noun for a group of meerkats?",
    "answers": {
      "A": "A mob, gang or band",
      "B": "A pack, pride or clan",
      "C": "A colony, warren or burrow",
      "D": "A tribe, troop or congregation"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq449",
    "fact": "The larynx sits much lower in humans than in other primates. This lowered position creates a larger pharynx allowing more complex sound production for speech, but also increases choking risk.",
    "question": "What is a key anatomical difference between the human larynx and that of other primates?",
    "answers": {
      "A": "The human larynx is positioned much lower, creating a larger pharynx for complex speech but increasing choking risk",
      "B": "The human larynx is positioned higher, allowing for greater lung capacity and faster breathing",
      "C": "The human larynx is wider and flatter, enabling better sound resonance in the nasal cavity",
      "D": "The human larynx contains more vocal cords, giving us a wider range of pitch control"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq450",
    "fact": "Snails can enter extended dormancy called estivation when conditions are too hot or dry. They seal themselves inside their shell with a mucus membrane and can remain dormant for up to three years.",
    "question": "What is the name of the extended dormancy period that snails enter when conditions become too hot or dry?",
    "answers": {
      "A": "Estivation",
      "B": "Hibernation",
      "C": "Torpor",
      "D": "Diapause"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq451",
    "fact": "Ants live in colonies ranging from dozens to millions. The largest ant colony ever found was a supercolony of Argentine ants stretching 6000 km across Europe from Italy to Portugal.",
    "question": "What is the approximate length of the largest ant supercolony ever discovered, which stretches across Europe from Italy to Portugal?",
    "answers": {
      "A": "6,000 km",
      "B": "3,000 km",
      "C": "10,000 km",
      "D": "1,500 km"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq452",
    "fact": "The surface of the human tongue has a unique pattern of papillae, grooves and shape that is different in every person. Tongue prints have been proposed as biometric identifiers.",
    "question": "Which part of the human body has a unique pattern that is different in every person and has been proposed as a biometric identifier, similar to fingerprints?",
    "answers": {
      "A": "The tongue",
      "B": "The inner ear",
      "C": "The roof of the mouth",
      "D": "The vocal cords"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq452b",
    "fact": "Paradise derives from the Old Persian pairi-daeza meaning walled garden. It referred to the beautiful enclosed gardens of Persian royalty and spread through Greek and Latin into English.",
    "question": "The word 'paradise' originates from Old Persian 'pairi-daeza'. What did this term originally refer to?",
    "answers": {
      "A": "Walled gardens of Persian royalty",
      "B": "Sacred temples dedicated to Zoroastrianism",
      "C": "Mountainous regions in ancient Persia",
      "D": "Royal hunting grounds and forests"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq453",
    "fact": "Sir John Harington invented the first flushing toilet in 1596 and installed one for Queen Elizabeth I at Richmond Palace. The device was called the Ajax. Thomas Crapper later improved and marketed the design.",
    "question": "Sir John Harington invented the first flushing toilet in 1596 and installed one for Queen Elizabeth I. What was this early toilet device called?",
    "answers": {
      "A": "The Ajax",
      "B": "The Crapper",
      "C": "The Richmond",
      "D": "The Elizabethan"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq454",
    "fact": "The collective noun for monkeys is a troop or a barrel. Other primate collectives: a band of gorillas, a community of chimpanzees. Monkeys are divided into Old World and New World species.",
    "question": "What is the collective noun for a group of monkeys?",
    "answers": {
      "A": "A troop or a barrel",
      "B": "A band or a community",
      "C": "A pod or a pack",
      "D": "A colony or a congress"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq455",
    "fact": "Crown Prince Luis Filipe of Portugal was shot on 1 February 1908 along with his father King Carlos. Carlos died immediately. Luis Filipe technically reigned for about 20 minutes before dying of his wounds.",
    "question": "In 1908, Crown Prince Luis Filipe of Portugal was assassinated along with his father King Carlos. How long did Luis Filipe technically reign before dying from his wounds?",
    "answers": {
      "A": "Approximately 20 minutes",
      "B": "Approximately 2 hours",
      "C": "Approximately 8 hours",
      "D": "Approximately 1 day"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq456",
    "fact": "Elephants detect low-frequency seismic vibrations through their feet and sensitive skin. They can feel the footsteps of other elephants kilometres away through ground vibrations and communicate via infrasound.",
    "question": "How do elephants detect the presence of other elephants from kilometres away?",
    "answers": {
      "A": "Through low-frequency seismic vibrations felt in their feet and skin",
      "B": "By using echolocation similar to bats and dolphins",
      "C": "Through their highly developed sense of smell carried on wind currents",
      "D": "By observing dust clouds and visual signals from distant herds"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq457",
    "fact": "Charles Darwin suggested the appendix was a vestigial organ left over from plant-eating ancestors. Recent research shows it may serve as a reservoir for beneficial gut bacteria after illness and supports immune function.",
    "question": "What did Charles Darwin originally believe about the human appendix, and what does recent research suggest it actually does?",
    "answers": {
      "A": "Darwin thought it was vestigial from plant-eating ancestors; recent research suggests it stores beneficial gut bacteria and supports immunity",
      "B": "Darwin thought it produced digestive enzymes; recent research shows it's completely non-functional",
      "C": "Darwin thought it was essential for digestion; recent research proves it's only useful in herbivores",
      "D": "Darwin thought it filtered toxins; recent research indicates it's a remnant from our fish ancestors"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq458",
    "fact": "Owls have tubular eyes that are fixed in their sockets and cannot rotate. To compensate they can rotate their heads up to 270 degrees. Their binocular vision gives excellent depth perception.",
    "question": "Owls cannot rotate their eyes in their sockets, so how do they compensate for this limitation?",
    "answers": {
      "A": "They can rotate their heads up to 270 degrees",
      "B": "They have a third eyelid that provides extra vision",
      "C": "They rely entirely on their sense of hearing to navigate",
      "D": "They can move their entire body to change perspective"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq459",
    "fact": "The Great Plague of 1665-1666 killed about 100,000 people in London. The Great Fire of September 1666 burned through the worst-affected slums, destroying the rats and conditions that spread plague.",
    "question": "Approximately how many people died in London during the Great Plague of 1665-1666?",
    "answers": {
      "A": "About 100,000",
      "B": "About 50,000",
      "C": "About 250,000",
      "D": "About 500,000"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq460",
    "fact": "The collective noun for hedgehogs is a prickle. A single hedgehog has up to 7000 spines that are hollow and made of keratin. They shed and replace spines gradually throughout their lives.",
    "question": "What is the collective noun for a group of hedgehogs?",
    "answers": {
      "A": "A prickle",
      "B": "A quill",
      "C": "A spike",
      "D": "A bristle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq461",
    "fact": "John Joseph Merlin invented the first roller skates around 1760 and debuted them at a party in London. He skated in while playing the violin, crashed into a mirror and seriously injured himself.",
    "question": "In what year did John Joseph Merlin debut the first roller skates at a London party, famously crashing into a mirror while playing the violin?",
    "answers": {
      "A": "1760",
      "B": "1775",
      "C": "1745",
      "D": "1780"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq462",
    "fact": "Research shows bottlenose dolphins develop unique signature whistles that function like names. Other dolphins use these whistles to address specific individuals. This is one of very few non-human examples of naming.",
    "question": "Bottlenose dolphins are known to develop unique signature whistles that function similarly to what in human communication?",
    "answers": {
      "A": "Names",
      "B": "Warning calls",
      "C": "Mating songs",
      "D": "Territorial markers"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq463",
    "fact": "Robot was coined by Czech writer Karel Capek in his 1920 play RUR (Rossums Universal Robots). It comes from the Czech robota meaning drudgery or forced labour. The play featured artificial workers.",
    "question": "Which Czech writer coined the term 'robot' in his 1920 play featuring artificial workers?",
    "answers": {
      "A": "Karel Capek",
      "B": "Václav Havel",
      "C": "Bohumil Hrabal",
      "D": "Milan Kundera"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq464",
    "fact": "Starfish do not have blood. Instead they use seawater pumped through their bodies via a water vascular system to move their tube feet and transport nutrients. They also have no brain.",
    "question": "Which of the following is NOT true about starfish physiology?",
    "answers": {
      "A": "They have a brain located in their central disk",
      "B": "They use seawater pumped through their bodies to move their tube feet",
      "C": "They have no blood",
      "D": "They use a water vascular system to transport nutrients"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq465",
    "fact": "The Pontifical Swiss Guard was founded on 22 January 1506 and has protected the Pope ever since, making it one of the oldest military units in continuous existence. Members must be Swiss Catholic males.",
    "question": "In what year was the Pontifical Swiss Guard founded, and which Pope have they protected since then?",
    "answers": {
      "A": "1506, and every Pope since their establishment",
      "B": "1492, and every Pope since their establishment",
      "C": "1506, but only Popes from the 17th century onwards",
      "D": "1523, and every Pope since their establishment"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq466",
    "fact": "Pigs rank among the most intelligent animals, above dogs and comparable to chimpanzees in some cognitive tests. They can learn their own names, play video games and show empathy for other pigs.",
    "question": "In cognitive ability tests, pigs have been shown to be comparable to which of the following animals?",
    "answers": {
      "A": "Chimpanzees",
      "B": "Dolphins",
      "C": "Elephants",
      "D": "Orangutans"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq467",
    "fact": "George Washington Gale Ferris Jr designed the first Ferris wheel for the 1893 Chicago Worlds Columbian Exposition. It stood 80 metres tall and could carry 2160 passengers in 36 cars.",
    "question": "Who designed the first Ferris wheel, which was built for the 1893 Chicago World's Columbian Exposition?",
    "answers": {
      "A": "George Washington Gale Ferris Jr",
      "B": "Gustave Eiffel",
      "C": "Thomas Edison",
      "D": "Alexander Graham Bell"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq468",
    "fact": "Around 1.4 billion lightning bolts strike Earth each year, or about 44 per second on average. During peak thunderstorm activity globally the rate can reach 100 per second. About 2000 thunderstorms are active at any moment.",
    "question": "Approximately how many lightning bolts strike Earth each year?",
    "answers": {
      "A": "Around 1.4 billion",
      "B": "Around 440 million",
      "C": "Around 14 billion",
      "D": "Around 140 million"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq469",
    "fact": "Catch-22 was coined by Joseph Heller in his 1961 novel of the same name. The original Catch-22 was a military rule stating a pilot could be grounded for insanity but requesting to be grounded proved sanity.",
    "question": "In Joseph Heller's 1961 novel 'Catch-22', what was the paradoxical military rule concerning pilots and insanity?",
    "answers": {
      "A": "A pilot could be grounded for insanity, but requesting to be grounded proved they were sane",
      "B": "A pilot had to prove insanity to avoid flying dangerous missions",
      "C": "A pilot could only be grounded if they volunteered for extra missions",
      "D": "A pilot was considered insane for wanting to continue flying combat missions"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq470",
    "fact": "Ziad Fazah of Lebanon holds the Guinness World Record for speaking the most languages at 58. He can read and write in all of them. Polyglots who speak more than 10 languages fluently are called hyperpolyglots.",
    "question": "According to Guinness World Records, how many languages can Ziad Fazah of Lebanon speak?",
    "answers": {
      "A": "58",
      "B": "42",
      "C": "73",
      "D": "38"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq471",
    "fact": "Ants can carry objects 10 to 50 times their own body weight. The Asian weaver ant can lift up to 100 times its weight. Relative to size ants are among the strongest creatures on Earth.",
    "question": "Approximately how many times their own body weight can the average ant carry?",
    "answers": {
      "A": "10 to 50 times",
      "B": "5 to 15 times",
      "C": "100 to 200 times",
      "D": "2 to 5 times"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq472",
    "fact": "John William Draper took the first successful photograph of the Moon in March 1840 using a daguerreotype. The exposure took about 20 minutes. Lunar photography rapidly improved through the 19th century.",
    "question": "In what year did John William Draper take the first successful photograph of the Moon using a daguerreotype?",
    "answers": {
      "A": "1840",
      "B": "1835",
      "C": "1845",
      "D": "1850"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq473",
    "fact": "Bumblebees have been found at elevations of over 9000 metres in the Himalayas, above the altitude of Everest base camp. Scientists trained bees to fly in a simulated high-altitude chamber equivalent to Everest summit.",
    "question": "At what elevation have bumblebees been found in the Himalayas?",
    "answers": {
      "A": "Over 9,000 metres",
      "B": "Over 7,000 metres",
      "C": "Over 11,000 metres",
      "D": "Over 6,000 metres"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq474",
    "fact": "Gustave Eiffel built the tower for the 1889 Universal Exhibition in Paris. The contract specified it would be dismantled after 20 years. It survived because its antenna made it valuable for radio transmission.",
    "question": "Why did the Eiffel Tower survive beyond its original 20-year contract period after the 1889 Paris Universal Exhibition?",
    "answers": {
      "A": "Its antenna made it valuable for radio transmission",
      "B": "It became so popular with tourists that the French government decided to keep it permanently",
      "C": "Gustave Eiffel refused to dismantle it and successfully fought the decision in court",
      "D": "The French military wanted to use it as a lookout post during World War I"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq475",
    "fact": "Geese on the ground are called a gaggle. When flying in formation they are called a skein or a wedge. Other unusual collective nouns: a murder of crows, a parliament of owls, a bloat of hippos.",
    "question": "What is the collective noun for geese flying together in formation?",
    "answers": {
      "A": "A skein or a wedge",
      "B": "A gaggle",
      "C": "A murder",
      "D": "A parliament"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq476",
    "fact": "Armillaria ostoyae honey fungus in Malheur National Forest Oregon covers about 9.6 square km underground. It is estimated to be 2000 to 8000 years old and is the largest single living organism known.",
    "question": "What is the largest single living organism known to exist on Earth?",
    "answers": {
      "A": "Armillaria ostoyae honey fungus in Oregon's Malheur National Forest",
      "B": "A blue whale in the Antarctic Ocean",
      "C": "Giant sequoia tree in California's Sierra Nevada",
      "D": "Posidonia oceanica seagrass meadow in the Mediterranean Sea"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq477",
    "fact": "Snails can enter estivation, a prolonged dormancy, when conditions are too dry or cold. They seal their shell opening with a mucus membrane and can remain dormant for up to 3 years.",
    "question": "What is the name of the prolonged dormancy state that snails can enter during harsh conditions?",
    "answers": {
      "A": "Estivation",
      "B": "Hibernation",
      "C": "Diapause",
      "D": "Torpor"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq478",
    "fact": "Horace Walpole coined serendipity in a letter dated 28 January 1754. He based it on the Persian fairy tale The Three Princes of Serendip (Sri Lanka) whose heroes made fortunate discoveries by accident.",
    "question": "Which English writer coined the word 'serendipity' in a letter dated 28 January 1754?",
    "answers": {
      "A": "Horace Walpole",
      "B": "Samuel Johnson",
      "C": "Jonathan Swift",
      "D": "Daniel Defoe"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq479",
    "fact": "Penguins on land are called a waddle or a colony. When swimming together they are called a raft. A group of penguin chicks is called a creche. Penguins can swim up to 35 km per hour.",
    "question": "What is the term for a group of penguin chicks?",
    "answers": {
      "A": "A creche",
      "B": "A waddle",
      "C": "A pod",
      "D": "A nursery"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq480",
    "fact": "Titanic struck the iceberg at 11:40pm on 14 April 1912 and sank at 2:20am on 15 April: exactly 2 hours and 40 minutes. Of 2224 aboard 1517 died, most from hypothermia in the freezing North Atlantic.",
    "question": "How long did it take for the Titanic to sink after striking the iceberg on April 14, 1912?",
    "answers": {
      "A": "2 hours and 40 minutes",
      "B": "3 hours and 15 minutes",
      "C": "1 hour and 50 minutes",
      "D": "2 hours and 20 minutes"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq481",
    "fact": "The collective noun for lions is a pride. Other unusual ones: a crash of rhinos, a bloat of hippos, a tower of giraffes, a flamboyance of flamingos, a murder of crows.",
    "question": "What is the collective noun for a group of flamingos?",
    "answers": {
      "A": "A flamboyance",
      "B": "A spectacle",
      "C": "A cascade",
      "D": "A flourish"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq482",
    "fact": "Malaria derives from the Italian mala aria meaning bad air. Before germ theory people believed diseases came from foul air near swamps. Malaria does cluster near swamps but because of mosquitoes not air.",
    "question": "The word 'malaria' comes from Italian words meaning 'bad air.' Why do people mistakenly believe malaria clusters near swamps due to foul air?",
    "answers": {
      "A": "Malaria is actually spread by mosquitoes that breed in swamps, not by bad air",
      "B": "Swamp air contains toxic gases that directly cause the disease",
      "C": "People living near swamps have weaker immune systems from inhaling moisture",
      "D": "The disease spreads through water vapor that rises from swampy areas"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq483",
    "fact": "The myth that sharks cannot get cancer is false and has led to harmful trade in shark cartilage supplements. Sharks can and do get cancer including tumours of the cartilage. The myth has no scientific basis.",
    "question": "Is it true that sharks cannot get cancer?",
    "answers": {
      "A": "No, sharks can get cancer including cartilage tumours",
      "B": "Yes, sharks are immune to all forms of cancer",
      "C": "Yes, but only in their fins and not their cartilage",
      "D": "No scientific evidence exists either way"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq484",
    "fact": "James Clerk Maxwell demonstrated the first colour photograph in 1861 using three separate photographs taken through red, green and blue filters combined with three projectors. He used a tartan ribbon as the subject.",
    "question": "What object did James Clerk Maxwell use as the subject for the first colour photograph he demonstrated in 1861?",
    "answers": {
      "A": "A tartan ribbon",
      "B": "A red rose",
      "C": "A Union Jack flag",
      "D": "A bowl of fruit"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq485",
    "fact": "The collective noun for wolves is a pack. A family group of wolves is called a pack and typically consists of 5 to 10 individuals. The alpha male and female lead the pack.",
    "question": "What is the collective noun for a group of wolves, and how many individuals typically make up a pack?",
    "answers": {
      "A": "A pack, consisting of 5 to 10 individuals",
      "B": "A pride, consisting of 8 to 15 individuals",
      "C": "A colony, consisting of 3 to 6 individuals",
      "D": "A herd, consisting of 10 to 20 individuals"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq486",
    "fact": "Arthur Wynne created the first crossword puzzle for the New York World newspaper on 21 December 1913. He called it a word-cross puzzle. It had a diamond shape and was an immediate hit.",
    "question": "What was the name of the first crossword puzzle created by Arthur Wynne for the New York World newspaper in December 1913?",
    "answers": {
      "A": "Word-cross puzzle",
      "B": "Word-grid puzzle",
      "C": "Diamond puzzle",
      "D": "Letter-cross puzzle"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq487",
    "fact": "Elephants pass the mirror self-recognition test, one of the few animals to do so alongside great apes, dolphins and magpies. This suggests a level of self-awareness previously thought unique to humans.",
    "question": "Which of the following animals has been proven to pass the mirror self-recognition test, demonstrating self-awareness?",
    "answers": {
      "A": "Elephants, great apes, dolphins and magpies",
      "B": "Elephants, great apes, lions and parrots",
      "C": "Elephants, chimpanzees, whales and crows",
      "D": "Elephants, gorillas, seals and ravens"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq488",
    "fact": "The Colosseum in Rome had a massive awning system called the velarium operated by sailors from the Misenum fleet. It could shade up to two thirds of the seating area from sun and rain.",
    "question": "What was the name of the massive awning system used at the Colosseum in Rome to protect spectators from the sun and rain?",
    "answers": {
      "A": "The velarium",
      "B": "The atrium",
      "C": "The umbraculum",
      "D": "The porticus"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq489",
    "fact": "Disaster comes from the Italian disastro combining dis meaning bad and astro meaning star. It reflects the ancient belief that catastrophes were caused by unfavourable stellar alignments.",
    "question": "What is the etymological origin of the word 'disaster'?",
    "answers": {
      "A": "From Italian 'disastro', combining 'dis' (bad) and 'astro' (star), reflecting beliefs about unfavourable stellar alignments",
      "B": "From Latin 'dis' (divide) and 'astrum' (realm), referring to divided territories after catastrophes",
      "C": "From French 'désastre', meaning a sudden loss or defeat in battle",
      "D": "From Greek 'dys' (bad) and 'aster' (city), used to describe the fall of ancient cities"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq490",
    "fact": "Venus takes 243 Earth days to rotate once but only 225 Earth days to orbit the Sun. Therefore a day on Venus is longer than a year on Venus. It also rotates in the opposite direction to Earth.",
    "question": "Which statement about Venus is correct?",
    "answers": {
      "A": "A day on Venus is longer than a year on Venus",
      "B": "A year on Venus is longer than a day on Venus",
      "C": "Venus rotates in the same direction as Earth",
      "D": "Venus takes 225 Earth days to rotate once"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq491",
    "fact": "A 2014 study in Science magazine revised the estimate of human smell discrimination dramatically upward. The nose has about 400 different receptor types that combine to detect at least 1 trillion distinct odours.",
    "question": "According to a 2014 study in Science magazine, how many distinct odours can the human nose detect through approximately 400 different receptor types?",
    "answers": {
      "A": "At least 1 trillion",
      "B": "At least 100 billion",
      "C": "At least 10 million",
      "D": "At least 1 million"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq492",
    "fact": "Many sections of the Great Wall that have fallen into disrepair have trees and plants growing through the stonework. Conservation teams manage vegetation on protected sections but remote sections are reclaimed by nature.",
    "question": "What natural process affects many disrepaired sections of the Great Wall of China?",
    "answers": {
      "A": "Trees and plants grow through the stonework in unprotected areas",
      "B": "Erosion from heavy rainfall washes away the mortar between stones",
      "C": "Animal burrows undermine the structural integrity of the wall",
      "D": "Sand dunes gradually bury entire sections of the wall"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq493",
    "fact": "The collective noun for rhinos is a crash. Other unusual ones: a wisdom of wombats, a tower of giraffes, a flamboyance of flamingos, a parliament of owls, a murder of crows.",
    "question": "What is the collective noun for a group of rhinos?",
    "answers": {
      "A": "A crash",
      "B": "A tower",
      "C": "A stampede",
      "D": "A herd"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq494",
    "fact": "Erno Rubik created the cube in 1974 as a teaching tool for his students. He could not solve his own invention for over a month after creating it. He called it a beautiful problem.",
    "question": "How long did it take Erno Rubik to solve his own cube after inventing it in 1974?",
    "answers": {
      "A": "Over a month",
      "B": "Three weeks",
      "C": "Two days",
      "D": "He solved it immediately"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq495",
    "fact": "Bats are the only mammals that can truly fly rather than glide. Flying squirrels and sugar gliders glide but cannot sustain powered flight. Bats have been flying for at least 52 million years.",
    "question": "Which of the following statements about bat flight is true?",
    "answers": {
      "A": "Bats are the only mammals capable of true powered flight, unlike flying squirrels which can only glide",
      "B": "Flying squirrels can sustain powered flight just like bats can",
      "C": "Bats have only been flying for around 5 million years",
      "D": "Sugar gliders are capable of true powered flight similar to bats"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq496",
    "fact": "Loganair operates the flight between Westray and Papa Westray in the Orkney Islands. In favourable conditions the journey takes about 74 seconds and covers just 2.7 km.",
    "question": "Which Scottish airline operates the world's shortest scheduled flight, between Westray and Papa Westray in the Orkney Islands, taking just 74 seconds to cover 2.7 km?",
    "answers": {
      "A": "Loganair",
      "B": "Highlands Airways",
      "C": "Eastern Airways",
      "D": "Hebridean Air"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq497",
    "fact": "Koalas sleep 18 to 22 hours a day because their diet of eucalyptus leaves is extremely low in nutrition and calories. Digesting the toxic leaves requires enormous energy so they conserve energy by sleeping.",
    "question": "Why do koalas sleep between 18 to 22 hours per day?",
    "answers": {
      "A": "Their eucalyptus diet is low in nutrition and digesting its toxins requires enormous energy",
      "B": "They are nocturnal animals that hunt for food at night",
      "C": "Sleeping helps them regulate their body temperature in hot Australian climates",
      "D": "They need extended sleep to process the high levels of caffeine found in eucalyptus leaves"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq498",
    "fact": "Hazard derives from the Arabic az-zahr meaning dice. It was a popular dice game in medieval England and the Arab world. The risky nature of gambling gave hazard its modern meaning of danger.",
    "question": "The word 'hazard' derives from the Arabic word 'az-zahr'. What did this term originally refer to?",
    "answers": {
      "A": "Dice",
      "B": "Swords",
      "C": "Cards",
      "D": "Coins"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq499",
    "fact": "Leafcutter ants have been cultivating fungal gardens for about 50 million years. They cut leaves to feed their underground fungus crops which produce the food the colony actually eats. A form of agriculture.",
    "question": "Leafcutter ants have been practicing a form of agriculture for approximately how many million years?",
    "answers": {
      "A": "50 million years",
      "B": "25 million years",
      "C": "100 million years",
      "D": "10 million years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq500",
    "fact": "Rungrado 1st of May Stadium in Pyongyang North Korea has a capacity of 114,000 making it the largest stadium in the world. It is used for mass games, football and athletics events.",
    "question": "Which stadium holds the title of largest stadium in the world by capacity?",
    "answers": {
      "A": "Rungrado 1st of May Stadium in Pyongyang, North Korea",
      "B": "Michigan Stadium in Ann Arbor, USA",
      "C": "Beaver Stadium in Pennsylvania, USA",
      "D": "Tiger Stadium in Baton Rouge, USA"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq501",
    "fact": "Octopuses can change colour and pattern extremely rapidly despite having only one type of photoreceptor (making them colour-blind). They may detect colour through light-sensitive proteins in their skin.",
    "question": "Despite being colour-blind, octopuses can rapidly change their colour and pattern. How do scientists believe they detect colour?",
    "answers": {
      "A": "Through light-sensitive proteins in their skin",
      "B": "Using specialized colour-detecting organs in their eyes",
      "C": "By sensing electromagnetic waves from their surroundings",
      "D": "Through chemoreceptors that identify pigment molecules"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq502",
    "fact": "Sputnik 1 was launched by the Soviet Union on 4 October 1957 becoming the first artificial satellite to orbit Earth. It transmitted a simple radio beep. Its launch shocked the West and began the Space Race.",
    "question": "Which country launched Sputnik 1, the first artificial satellite to orbit Earth, on 4 October 1957?",
    "answers": {
      "A": "The Soviet Union",
      "B": "The United States",
      "C": "Nazi Germany",
      "D": "The United Kingdom"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq503",
    "fact": "The collective noun for bears is a sloth or a sleuth. Other unusual ones: a murder of crows, a parliament of owls, a tower of giraffes, a crash of rhinos.",
    "question": "What is the collective noun for bears?",
    "answers": {
      "A": "A sloth or a sleuth",
      "B": "A murder or a conspiracy",
      "C": "A parliament or a congress",
      "D": "A crash or a tumble"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq504",
    "fact": "Alfred Nobel established the original five Nobel Prizes in his 1895 will: Physics, Chemistry, Medicine, Literature and Peace. The Economics prize (Sveriges Riksbank Prize) was added in 1968 by the Swedish central bank.",
    "question": "In what year was the Nobel Prize in Economics first awarded?",
    "answers": {
      "A": "1968",
      "B": "1895",
      "C": "1901",
      "D": "1945"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq505",
    "fact": "All penguins except the Galapagos penguin live in the Southern Hemisphere. The Galapagos penguin lives near the equator and slightly north of it making it the only penguin species in the Northern Hemisphere.",
    "question": "Which penguin species is the only one found in the Northern Hemisphere?",
    "answers": {
      "A": "Galapagos penguin",
      "B": "Emperor penguin",
      "C": "Adelie penguin",
      "D": "Chinstrap penguin"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq506",
    "fact": "The first commercial mobile phone networks in the early 1980s charged about 50 cents per minute in todays money for calls but that is wrong. Early analog calls cost several dollars per minute making a one-hour call as expensive as a small car.",
    "question": "In the early 1980s, how much did a one-hour call cost on the first commercial mobile phone networks when adjusted for inflation to today's money?",
    "answers": {
      "A": "Several hundred dollars, roughly equivalent to the cost of a small car",
      "B": "About 50 cents, making it affordable for average users",
      "C": "Around $30 to $40, expensive but not prohibitively so",
      "D": "Approximately $5 to $10, similar to a modern international call"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq507",
    "fact": "Whether standing or walking flamingos are called a flamboyance. In flight they are called a skein or a pat. Flamingos get their pink colour from carotenoid pigments in the algae and shrimp they eat.",
    "question": "What gives flamingos their distinctive pink colour?",
    "answers": {
      "A": "Carotenoid pigments in the algae and shrimp they eat",
      "B": "A special pink pigment produced by their feathers",
      "C": "Iron oxide found in the water where they live",
      "D": "Natural dyes they absorb from pink flowers"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq508",
    "fact": "Legend says Richard Daly of Dublin bet he could make a nonsense word known across the city within 48 hours. He had quiz chalked on walls everywhere. The word spread and people began using it meaning odd person.",
    "question": "According to legend, Richard Daly of Dublin created which word by chalking it on walls across the city to win a bet, and it eventually came to mean 'an odd person'?",
    "answers": {
      "A": "Quiz",
      "B": "Quack",
      "C": "Quirk",
      "D": "Quell"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq509",
    "fact": "Modern crocodilians are remarkably similar to their Mesozoic ancestors. They have survived five mass extinctions. Their body plan has been so successful that evolution has barely modified it in 200 million years.",
    "question": "Crocodilians have remained virtually unchanged for approximately how long, having survived multiple mass extinctions due to their highly successful body plan?",
    "answers": {
      "A": "200 million years",
      "B": "65 million years",
      "C": "100 million years",
      "D": "50 million years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq510",
    "fact": "Mosquitoes kill about 725,000 people per year through diseases they carry: malaria, dengue, yellow fever, Zika. Humans kill about 400,000 people per year making us the second deadliest animal.",
    "question": "According to mortality statistics, which animal is responsible for the most human deaths per year?",
    "answers": {
      "A": "Mosquitoes",
      "B": "Humans",
      "C": "Snakes",
      "D": "Dogs"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq511",
    "fact": "The collective noun for tigers is an ambush or a streak. Tigers are solitary animals so seeing a group in the wild is extremely rare. They are the largest wild cat species in the world.",
    "question": "What is the collective noun for a group of tigers?",
    "answers": {
      "A": "An ambush or a streak",
      "B": "A pride or a coalition",
      "C": "A pack or a den",
      "D": "A troop or a congress"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq512",
    "fact": "The Great Wall is a series of walls built by different states and dynasties over 2000 years. Total length of all sections is about 21,196 km. The Ming Dynasty wall (1368-1644) is what most visitors see.",
    "question": "Which Chinese dynasty built the Great Wall section that most visitors see today?",
    "answers": {
      "A": "Ming Dynasty (1368-1644)",
      "B": "Han Dynasty (206 BCE-220 CE)",
      "C": "Qin Dynasty (221-206 BCE)",
      "D": "Tang Dynasty (618-907 CE)"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq513",
    "fact": "Camel humps store fat not water. The fat can be metabolised for energy and produces some water as a byproduct. Camels get water through food and drinking and can drink 150 litres in one session.",
    "question": "What do camel humps primarily store?",
    "answers": {
      "A": "Fat",
      "B": "Water",
      "C": "Salt",
      "D": "Protein"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq514",
    "fact": "The Code of Ur-Nammu from ancient Sumer around 2100 BC is the oldest known legal code predating the Code of Hammurabi by about 300 years. It established fines rather than execution for many offences.",
    "question": "Which ancient legal code is the oldest known, predating the Code of Hammurabi by approximately 300 years?",
    "answers": {
      "A": "The Code of Ur-Nammu from Sumer",
      "B": "The Code of Hammurabi from Babylon",
      "C": "The Laws of Manu from India",
      "D": "The Twelve Tables from Rome"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq515",
    "fact": "Cats lack the taste receptors for sweetness due to a genetic mutation affecting their sweet taste receptor gene. As obligate carnivores they have no evolutionary need to detect sugar.",
    "question": "Why are cats unable to taste sweetness?",
    "answers": {
      "A": "They lack taste receptors for sweetness due to a genetic mutation in their sweet taste receptor gene",
      "B": "Their taste buds are located at the back of their throat instead of on their tongue",
      "C": "They produce a special enzyme that breaks down sugar before it reaches their taste receptors",
      "D": "Sweetness tastes bitter to cats due to a reversed neural pathway in their brain"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq516",
    "fact": "The Battle of Waterloo on 18 June 1815 was fought near the town of Waterloo in present-day Belgium, then part of the United Kingdom of the Netherlands. Napoleon was fighting on foreign soil.",
    "question": "On what date was the Battle of Waterloo fought?",
    "answers": {
      "A": "18 June 1815",
      "B": "18 June 1814",
      "C": "18 July 1815",
      "D": "18 June 1816"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq517",
    "fact": "The collective noun for zebras is a dazzle or a herd. The black and white stripes of zebras may create visual confusion for predators when the herd moves together, hence the term dazzle.",
    "question": "What is the collective noun for a group of zebras that move together?",
    "answers": {
      "A": "A dazzle",
      "B": "A stampede",
      "C": "A stripe",
      "D": "A confusion"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq518",
    "fact": "The Dutch Tulip Mania of 1636-1637 saw tulip bulb prices rise to extraordinary heights before collapsing in February 1637. A single Semper Augustus bulb could cost more than a house on Amsterdam canal.",
    "question": "During the Dutch Tulip Mania of 1636-1637, what was the extraordinary value of a single Semper Augustus bulb comparable to?",
    "answers": {
      "A": "A house on an Amsterdam canal",
      "B": "A year's salary for a skilled worker",
      "C": "An entire merchant ship",
      "D": "A small village estate"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq519",
    "fact": "The collective noun for crows is a murder. This likely comes from folklore about crows gathering to judge and execute a fellow crow. Other unusual ones: a parliament of owls, a tower of giraffes.",
    "question": "What is the collective noun for a group of crows?",
    "answers": {
      "A": "A murder",
      "B": "A parliament",
      "C": "A tower",
      "D": "A conspiracy"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq520",
    "fact": "The Great Pyramid was built around 2560 BC. Cleopatra lived from 69 to 30 BC. The pyramids were already about 2500 years old when Cleopatra was born. They were ancient monuments to her too.",
    "question": "Approximately how many years old were the pyramids when Cleopatra was born?",
    "answers": {
      "A": "About 2,500 years old",
      "B": "About 1,500 years old",
      "C": "About 3,500 years old",
      "D": "About 500 years old"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq521",
    "fact": "Ravens collectively are called an unkindness or a conspiracy. These names reflect their association with ill omens and cunning in folklore. Ravens are among the most intelligent birds.",
    "question": "What is a collective group of ravens called?",
    "answers": {
      "A": "An unkindness or a conspiracy",
      "B": "A murder or a parliament",
      "C": "A conspiracy or a parliament",
      "D": "An unkindness or a murder"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq522",
    "fact": "Aleix Segura Vendrell set the static apnea world record of 24 minutes 3 seconds in 2016. Trained freedivers prepare with oxygen breathing beforehand. The record without prior oxygen breathing is about 11 minutes.",
    "question": "In 2016, Aleix Segura Vendrell set the static apnea world record. How long did he hold his breath?",
    "answers": {
      "A": "24 minutes 3 seconds",
      "B": "11 minutes",
      "C": "18 minutes 45 seconds",
      "D": "31 minutes 20 seconds"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq523",
    "fact": "Some starfish species can regenerate their entire body from a single arm that retains part of the central disc. This makes them extremely difficult to kill by cutting. Populations can actually grow this way.",
    "question": "Which of the following is a consequence of some starfish species being able to regenerate their entire body from a single arm?",
    "answers": {
      "A": "Populations can actually grow through this regeneration process",
      "B": "They can only regenerate if the arm is immediately reattached",
      "C": "They lose the ability to reproduce sexually",
      "D": "They become smaller with each regeneration cycle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq524",
    "fact": "The Great Sphinx is believed to have been built during the reign of Pharaoh Khafre around 2500 BC. It is the largest monolithic statue in the world at 73 metres long and 20 metres high.",
    "question": "During whose reign is the Great Sphinx of Giza believed to have been built around 2500 BC?",
    "answers": {
      "A": "Pharaoh Khafre",
      "B": "Pharaoh Khufu",
      "C": "Pharaoh Menkaure",
      "D": "Pharaoh Pepi II"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq525",
    "fact": "A group of elephants is called a herd. A herd is typically led by the oldest female called the matriarch. She holds generations of knowledge about food sources and safe routes vital for survival.",
    "question": "In a herd of elephants, what is the name given to the oldest female who leads the group and holds knowledge about food sources and migration routes?",
    "answers": {
      "A": "Matriarch",
      "B": "Patriarch",
      "C": "Dowager",
      "D": "Matron"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq526",
    "fact": "Clue derives from clew, Old English for a ball of yarn. Theseus used yarn from Ariadne to find his way out of the Minotaur labyrinth in Greek mythology. The meaning shifted to mean hint or guide.",
    "question": "The word 'clue' originates from 'clew', an Old English term. According to mythology, what did Ariadne give to Theseus that inspired this word's modern meaning?",
    "answers": {
      "A": "A ball of yarn to navigate the Minotaur's labyrinth",
      "B": "A sword to defeat the Minotaur",
      "C": "A map of the labyrinth's passages",
      "D": "A magical torch to light his way"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq527",
    "fact": "Completed in 1889 at 300 metres the Eiffel Tower was the worlds tallest structure until the Chrysler Building in New York was completed at 319 metres in 1930, a span of 41 years.",
    "question": "For how many years was the Eiffel Tower the world's tallest structure before being surpassed by the Chrysler Building?",
    "answers": {
      "A": "41 years",
      "B": "30 years",
      "C": "38 years",
      "D": "45 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq528",
    "fact": "Mount Erebus is an active volcano on Ross Island Antarctica. It has a persistent lava lake in its summit crater, one of only a few in the world. It erupts regularly with small explosions.",
    "question": "Mount Erebus, located on Ross Island in Antarctica, is notable for being home to one of the world's few persistent what?",
    "answers": {
      "A": "lava lakes",
      "B": "ice geysers",
      "C": "volcanic vents",
      "D": "sulfur springs"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq529",
    "fact": "Wolves live and hunt in family groups called packs typically consisting of a breeding pair and their offspring. Pack size ranges from 2 to 30 animals. They are highly cooperative hunters.",
    "question": "What is the term for a family group of wolves that hunt together?",
    "answers": {
      "A": "A pack",
      "B": "A pride",
      "C": "A pod",
      "D": "A colony"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq530",
    "fact": "Travel derives from the Old French travail meaning toil or suffering. Long journeys in medieval times were genuinely arduous and dangerous. The word reflects how different historical travel was from modern tourism.",
    "question": "The word 'travel' is derived from Old French. What did the original Old French word 'travail' mean?",
    "answers": {
      "A": "Toil or suffering",
      "B": "To cross or traverse",
      "C": "A long journey by foot",
      "D": "Adventure or exploration"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq531",
    "fact": "The collective noun for frogs is an army. Other unusual collective nouns: a parliament of owls, a murder of crows, a tower of giraffes, a crash of rhinos, a bloat of hippos.",
    "question": "What is the collective noun for a group of frogs?",
    "answers": {
      "A": "An army",
      "B": "A parliament",
      "C": "A murder",
      "D": "A crash"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq532",
    "fact": "Eugene Shoemaker, a planetary geologist, always dreamed of going to the Moon but was disqualified from Apollo astronaut training for medical reasons. When he died in 1997 NASA sent his ashes on the Lunar Prospector.",
    "question": "Planetary geologist Eugene Shoemaker was unable to travel to the Moon during his lifetime due to medical disqualification from astronaut training. How did NASA honor his lifelong dream after his death in 1997?",
    "answers": {
      "A": "His ashes were sent to the Moon aboard the Lunar Prospector spacecraft",
      "B": "A crater on the Moon was officially named after him",
      "C": "His personal belongings were displayed in the Smithsonian's space collection",
      "D": "A memorial plaque was left on the Moon by Apollo astronauts"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq533",
    "fact": "The average domestic cat sleeps between 12 and 16 hours per day, about 50 to 70 percent of their lives. Cats are crepuscular, most active at dawn and dusk when their natural prey is most active.",
    "question": "What percentage of their lives do domestic cats typically spend sleeping?",
    "answers": {
      "A": "50 to 70 percent",
      "B": "30 to 40 percent",
      "C": "70 to 80 percent",
      "D": "40 to 50 percent"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq534",
    "fact": "Soviet cosmonaut Alexei Leonov performed the first spacewalk on 18 March 1965 during the Voskhod 2 mission. He was outside for 12 minutes. His spacesuit inflated making it difficult to re-enter.",
    "question": "Which Soviet cosmonaut performed the first spacewalk on 18 March 1965 during the Voskhod 2 mission?",
    "answers": {
      "A": "Alexei Leonov",
      "B": "Yuri Gagarin",
      "C": "Vladimir Komarov",
      "D": "Georgy Beregovoy"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq535",
    "fact": "Honeybees fly at about 24 to 25 km per hour. They beat their wings about 200 times per second creating the characteristic buzzing sound. A single bee may fly 800 km in its lifetime.",
    "question": "How many times per second do honeybees beat their wings to create their characteristic buzzing sound?",
    "answers": {
      "A": "200 times per second",
      "B": "150 times per second",
      "C": "300 times per second",
      "D": "100 times per second"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq536",
    "fact": "The Nazca Lines are ancient geoglyphs in the Peruvian desert, many only visible from the air. They were created between 500 BC and 500 AD. The largest are about 370 metres long. Their purpose is unknown.",
    "question": "The Nazca Lines, ancient geoglyphs located in Peru, were primarily visible from which vantage point?",
    "answers": {
      "A": "The air",
      "B": "Mountain peaks",
      "C": "Underground tunnels",
      "D": "River valleys"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq537",
    "fact": "The collective noun for eagles is a convocation. In flight they are called a kettle. Other unusual bird collectives: a murder of crows, a parliament of owls, a murmuration of starlings.",
    "question": "What is the collective noun for eagles when they are flying together in the sky?",
    "answers": {
      "A": "A kettle",
      "B": "A convocation",
      "C": "A murder",
      "D": "A parliament"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq538",
    "fact": "The Great Sphinx originally had a ceremonial beard, fragments of which are now in the Egyptian Museum in Cairo and the British Museum in London. The beard was added after the original construction.",
    "question": "Where can fragments of the Great Sphinx's original ceremonial beard be found today?",
    "answers": {
      "A": "The Egyptian Museum in Cairo and the British Museum in London",
      "B": "The Louvre Museum in Paris and the Metropolitan Museum in New York",
      "C": "The Egyptian Museum in Cairo and the Smithsonian Institution in Washington D.C.",
      "D": "The British Museum in London and the Vatican Museums in Rome"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq539",
    "fact": "The collective noun for giant pandas is an embarrassment. Given how notoriously difficult pandas are to breed in captivity and how rarely they are seen together the name seems fitting.",
    "question": "What is the collective noun for a group of giant pandas?",
    "answers": {
      "A": "An embarrassment",
      "B": "A bamboo",
      "C": "A rarity",
      "D": "A sanctuary"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq540",
    "fact": "The Tower of Pisa began leaning during construction in 1173 due to soft soil on one side. Construction was halted for nearly 100 years. When resumed the builders tried to compensate making the tower slightly curved.",
    "question": "Why did the Tower of Pisa begin leaning during its construction in 1173?",
    "answers": {
      "A": "Soft soil on one side of the foundation",
      "B": "An earthquake during the early construction phase",
      "C": "Poor quality marble used in the lower levels",
      "D": "Intentional design by the architect to make it unique"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq541",
    "fact": "Elephants display mourning behaviour: they return to the bones of deceased herd members, touch them gently with their trunks and stand quietly nearby. They treat dead family members with apparent reverence.",
    "question": "Which behavior have elephants been observed displaying towards the remains of deceased herd members?",
    "answers": {
      "A": "Gently touching the bones with their trunks and standing quietly nearby in what appears to be a reverent manner",
      "B": "Quickly burying the bones underground and moving away from the area immediately",
      "C": "Vocalizing loudly and aggressively defending the bones from other animals",
      "D": "Ignoring the remains entirely and continuing normal herd activities without acknowledgment"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq542",
    "fact": "The five Olympic rings represent the five continents of the world: Africa, America, Asia, Europe and Oceania. The six colours (five ring colours plus white background) include at least one colour from every national flag.",
    "question": "What do the five Olympic rings represent?",
    "answers": {
      "A": "The five continents of the world",
      "B": "The five original Olympic host nations",
      "C": "The five ancient Greek city-states",
      "D": "The five pillars of Olympic philosophy"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq543",
    "fact": "Ants live in colonies that range from a few dozen to millions of individuals. The largest ant colony ever found was a supercolony of Argentine ants stretching 6000 km across Europe.",
    "question": "What is the approximate length of the largest ant colony ever found, which was a supercolony of Argentine ants stretching across Europe?",
    "answers": {
      "A": "6000 km",
      "B": "3000 km",
      "C": "12000 km",
      "D": "1500 km"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq544",
    "fact": "The ancient Olympic Games began at Olympia Greece in 776 BC as a religious festival honoring Zeus. They featured only one event at first: a foot race of about 192 metres called the stadion.",
    "question": "In what year did the ancient Olympic Games first begin at Olympia, Greece?",
    "answers": {
      "A": "776 BC",
      "B": "492 BC",
      "C": "1896 AD",
      "D": "323 BC"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq545",
    "fact": "In colonial New England lobsters were so abundant they washed ashore in huge piles and were used as fertiliser and fish bait. Feeding servants lobster more than three times a week was considered cruel.",
    "question": "In colonial New England, lobsters were so abundant that feeding servants this food more than three times a week was considered what?",
    "answers": {
      "A": "Cruel",
      "B": "Wasteful",
      "C": "Illegal",
      "D": "Unhealthy"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq546",
    "fact": "The Amazon Basin with its rainforest and river system contains approximately 10 percent of all species on Earth including about 40,000 plant species, 1,300 bird species and 3,000 fish species.",
    "question": "Approximately what percentage of all species on Earth are found in the Amazon Basin?",
    "answers": {
      "A": "10 percent",
      "B": "25 percent",
      "C": "5 percent",
      "D": "15 percent"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq547",
    "fact": "The collective noun for gorillas is a band or a troop. Gorillas live in family groups led by a dominant silverback male. Groups typically contain 5 to 30 individuals.",
    "question": "What is the collective noun for a group of gorillas?",
    "answers": {
      "A": "A band or a troop",
      "B": "A pack or a herd",
      "C": "A colony or a congregation",
      "D": "A mob or a warren"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq548",
    "fact": "Guglielmo Marconi sent and received the first transatlantic wireless telegraph signal on 12 December 1901 from Poldhu Cornwall to Signal Hill St Johns Newfoundland. The signal was the letter S in Morse code.",
    "question": "In 1901, Guglielmo Marconi successfully transmitted the first transatlantic wireless telegraph signal. Which letter in Morse code was transmitted, and between which two locations?",
    "answers": {
      "A": "The letter S, from Poldhu, Cornwall to Signal Hill, St Johns, Newfoundland",
      "B": "The letter A, from Poldhu, Cornwall to Cape Race, Newfoundland",
      "C": "The letter S, from Crookhaven, Ireland to Valentia Island",
      "D": "The letter M, from Land's End, Cornwall to Halifax, Nova Scotia"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq549",
    "fact": "Thousands of starlings flying together in swooping coordinated formations are called a murmuration. The spectacular aerial displays are thought to confuse predators and share information about roosting sites.",
    "question": "What is the term for thousands of starlings flying together in coordinated swooping formations?",
    "answers": {
      "A": "A murmuration",
      "B": "A parliament",
      "C": "A cacophony",
      "D": "A constellation"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq550",
    "fact": "Transit was the first operational satellite navigation system, developed by the US Navy and operational from 1964. It used Doppler shift to determine position. GPS replaced it in 1996.",
    "question": "Which satellite navigation system, developed by the US Navy, was the first operational system of its kind and used Doppler shift technology before being replaced by GPS in 1996?",
    "answers": {
      "A": "Transit",
      "B": "Navstar",
      "C": "Skynet",
      "D": "Compass"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq551",
    "fact": "The collective noun for sharks is a shiver. Other unusual ones: a murder of crows, a parliament of owls, a tower of giraffes, a crash of rhinos, a bloat of hippos.",
    "question": "What is the collective noun for sharks?",
    "answers": {
      "A": "A shiver",
      "B": "A crash",
      "C": "A bloat",
      "D": "A murder"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq552",
    "fact": "Hazard derives from the Arabic az-zahr meaning dice. It entered English via the Spanish azar. The game of hazard was popular in medieval England and the risky nature of gambling gave the word its modern meaning.",
    "question": "The word 'hazard' originates from an Arabic word meaning dice. Through which language did it enter English?",
    "answers": {
      "A": "Spanish",
      "B": "French",
      "C": "Italian",
      "D": "Portuguese"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq553",
    "fact": "Wombats are the only known animals to produce cube-shaped faeces. Scientists discovered in 2018 that elastic intestinal walls of varying thickness create this shape. The cubes do not roll away on flat ground.",
    "question": "Which animal is known for producing cube-shaped faeces?",
    "answers": {
      "A": "Wombats",
      "B": "Badgers",
      "C": "Porcupines",
      "D": "Hedgehogs"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq554",
    "fact": "Guinness Breweries managing director Hugh Beaver started the project in 1951 after a pub argument about the fastest game bird. The first Guinness Book of Records was published in 1955.",
    "question": "In what year was the first Guinness Book of Records published?",
    "answers": {
      "A": "1955",
      "B": "1951",
      "C": "1958",
      "D": "1960"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq555",
    "fact": "The collective noun for turkeys is a rafter or a flock. A group of baby turkeys is called a brood. Male turkeys are called toms or gobblers, females are called hens, and babies are called poults.",
    "question": "What is the collective noun for a group of turkeys?",
    "answers": {
      "A": "A rafter or a flock",
      "B": "A gaggle or a skein",
      "C": "A covey or a brood",
      "D": "A parliament or a pod"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq556",
    "fact": "The Venetian Patent Statute of 1474 is considered the first codified patent system in the world. It granted inventors 10-year exclusive rights to practice their inventions in Venice.",
    "question": "Which historical statute is widely recognized as the first codified patent system in the world?",
    "answers": {
      "A": "The Venetian Patent Statute of 1474",
      "B": "The British Statute of Monopolies of 1623",
      "C": "The French Patent Law of 1791",
      "D": "The U.S. Patent Act of 1790"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq557",
    "fact": "Hippos are classified as semi-aquatic mammals. They spend up to 16 hours per day submerged in water or mud to stay cool and prevent sunburn, but they cannot breathe underwater and must surface regularly. They emerge at night to graze on grass.",
    "question": "Despite spending up to 16 hours a day submerged in water, hippos are technically classified as which type of animal?",
    "answers": {
      "A": "Semi-aquatic mammals",
      "B": "Fully aquatic mammals",
      "C": "Terrestrial mammals that are excellent swimmers",
      "D": "Amphibians"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq558",
    "fact": "Honorificabilitudinitatibus from Love Labours Lost is the longest word in the works of Shakespeare at 27 letters. It means the state of being able to achieve honours. It appears once.",
    "question": "What is the longest word in Shakespeare's works, appearing in 'Love's Labour's Lost'?",
    "answers": {
      "A": "Honorificabilitudinitatibus",
      "B": "Uncharacteristically",
      "C": "Incomprehensibleness",
      "D": "Abominableness"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq559",
    "fact": "The collective noun for crows is a murder. It possibly derives from folklore about crow justice where crows would gather to judge and execute a fellow crow. Crows are among the most intelligent birds.",
    "question": "What is the collective noun for a group of crows, and what folklore possibly inspired this term?",
    "answers": {
      "A": "A murder; derived from folklore about crows gathering to judge and execute a fellow crow",
      "B": "A parliament; derived from crows' ability to make democratic decisions",
      "C": "A conspiracy; derived from medieval beliefs about crows plotting against humans",
      "D": "An execution; derived from the harsh punishments crows inflict on predators"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq560",
    "fact": "On 24 October 1946 a V-2 rocket launched from New Mexico captured the first photograph of Earth from space at an altitude of 105 km. The camera was recovered from the crashed rocket intact.",
    "question": "In 1946, a V-2 rocket launched from New Mexico captured the first photograph of Earth from space. At what altitude was this historic image taken?",
    "answers": {
      "A": "105 kilometers",
      "B": "85 kilometers",
      "C": "125 kilometers",
      "D": "150 kilometers"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq561",
    "fact": "The collective noun for owls is a parliament, reflecting their association with wisdom in folklore. A group of owls roosting together is also sometimes called a wisdom. They are among the most adaptable birds.",
    "question": "What is the collective noun for a group of owls, reflecting their association with wisdom in folklore?",
    "answers": {
      "A": "A parliament",
      "B": "A council",
      "C": "A convention",
      "D": "An assembly"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq562",
    "fact": "Muscle derives from the Latin musculus meaning little mouse. Romans thought flexing muscles looked like mice moving under the skin. The word mussel for the shellfish has exactly the same Latin root.",
    "question": "What Latin word meaning 'little mouse' is the origin of both the word 'muscle' and 'mussel'?",
    "answers": {
      "A": "musculus",
      "B": "mus",
      "C": "murinus",
      "D": "mouscelus"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq563",
    "fact": "Octopuses have three hearts: two branchial hearts pump blood through the gills and one systemic heart pumps oxygenated blood through the body. The systemic heart stops when the octopus swims, tiring them quickly.",
    "question": "How many hearts does an octopus have, and what happens to the systemic heart when it swims?",
    "answers": {
      "A": "Three hearts; the systemic heart stops, causing rapid fatigue",
      "B": "Two hearts; both hearts stop when swimming",
      "C": "Four hearts; one heart stops when swimming",
      "D": "Three hearts; all hearts work faster when swimming"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq564",
    "fact": "The de Havilland Comet inaugurated the first scheduled commercial jet airline service on 2 May 1952 operated by BOAC between London and Johannesburg. It revolutionised air travel despite early fatal accidents.",
    "question": "Which aircraft inaugurated the first scheduled commercial jet airline service in May 1952?",
    "answers": {
      "A": "de Havilland Comet",
      "B": "Boeing 707",
      "C": "Lockheed Constellation",
      "D": "Avro Canada CF-100"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq565",
    "fact": "The collective noun for butterflies is a kaleidoscope or a flutter. A group of caterpillars is called an army. Butterflies taste with their feet using taste sensors called chemoreceptors on their tarsi.",
    "question": "What is the collective noun for a group of butterflies?",
    "answers": {
      "A": "A kaleidoscope or a flutter",
      "B": "An army or a swarm",
      "C": "A colony or a cluster",
      "D": "A murder or a parliament"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq566",
    "fact": "The Rosetta Stone contains the same priestly decree in three scripts: Ancient Egyptian hieroglyphics, Demotic script and Ancient Greek. Champollion used the Greek text to decode hieroglyphics in 1822.",
    "question": "In 1822, which ancient language did Champollion use to help decode the hieroglyphics on the Rosetta Stone?",
    "answers": {
      "A": "Ancient Greek",
      "B": "Latin",
      "C": "Aramaic",
      "D": "Ancient Persian"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq567",
    "fact": "Research shows honeybees can learn to identify human faces using the same holistic face-processing strategy humans use. They can be trained to associate faces with rewards in laboratory experiments.",
    "question": "According to research, what facial recognition strategy do honeybees use to identify human faces?",
    "answers": {
      "A": "The same holistic face-processing strategy that humans use",
      "B": "They recognize individual facial features like eyes and noses separately",
      "C": "They identify people by the color of their skin only",
      "D": "They cannot actually recognize human faces at all"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1628",
    "fact": "The Amazon River discharges more water than the next seven largest rivers combined.",
    "question": "How does the water discharge of the Amazon River compare to other major rivers?",
    "answers": {
      "A": "It discharges more water than the next seven largest rivers combined",
      "B": "It discharges more water than the next three largest rivers combined",
      "C": "It discharges roughly the same amount as the next largest river",
      "D": "It discharges less water than the Nile River"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1629",
    "fact": "Vatican City is the smallest country in the world by both area and population.",
    "question": "Which country is the smallest in the world by both area and population?",
    "answers": {
      "A": "Vatican City",
      "B": "Monaco",
      "C": "San Marino",
      "D": "Liechtenstein"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1630",
    "fact": "Canada has more lakes than the rest of the world combined.",
    "question": "Which country contains more lakes than all other countries in the world combined?",
    "answers": {
      "A": "Canada",
      "B": "Finland",
      "C": "Sweden",
      "D": "Russia"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1631",
    "fact": "Russia spans eleven time zones.",
    "question": "How many time zones does Russia span across?",
    "answers": {
      "A": "Eleven",
      "B": "Nine",
      "C": "Thirteen",
      "D": "Eight"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1632",
    "fact": "Australia is wider than the Moon.",
    "question": "Which of the following statements about Australia's width compared to the Moon is true?",
    "answers": {
      "A": "Australia is wider than the Moon",
      "B": "The Moon is wider than Australia by approximately 1,000 km",
      "C": "Australia and the Moon are roughly the same width",
      "D": "The Moon is nearly twice as wide as Australia"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1633",
    "fact": "The Dead Sea is the lowest point on Earths surface.",
    "question": "What is the lowest point on Earth's surface?",
    "answers": {
      "A": "The Dead Sea",
      "B": "The Mariana Trench",
      "C": "The Dead Sea Valley",
      "D": "Lake Baikal"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1634",
    "fact": "The Mariana Trench is deeper than Mount Everest is tall.",
    "question": "By approximately how much is the Mariana Trench deeper than Mount Everest is tall?",
    "answers": {
      "A": "About 2,064 meters (the Trench is roughly 10,994m deep, Everest is roughly 8,849m tall)",
      "B": "The Mariana Trench is actually shallower than Mount Everest is tall",
      "C": "About 5,000 meters",
      "D": "They are approximately the same depth and height"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1635",
    "fact": "Finland has more saunas than cars.",
    "question": "Which country is known for having more saunas than cars?",
    "answers": {
      "A": "Finland",
      "B": "Sweden",
      "C": "Norway",
      "D": "Iceland"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1636",
    "fact": "Lake Baikal contains about 20% of the worlds unfrozen fresh surface water.",
    "question": "Approximately what percentage of the world's unfrozen fresh surface water is contained in Lake Baikal?",
    "answers": {
      "A": "20%",
      "B": "12%",
      "C": "35%",
      "D": "8%"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1637",
    "fact": "The city of Venice is built on 118 small islands.",
    "question": "How many small islands is the city of Venice built upon?",
    "answers": {
      "A": "118",
      "B": "142",
      "C": "96",
      "D": "156"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1638",
    "fact": "A bolt of lightning is five times hotter than the surface of the Sun.",
    "question": "How does the temperature of a lightning bolt compare to the surface of the Sun?",
    "answers": {
      "A": "A lightning bolt is approximately five times hotter than the Sun's surface",
      "B": "A lightning bolt is approximately two times hotter than the Sun's surface",
      "C": "A lightning bolt is approximately the same temperature as the Sun's surface",
      "D": "A lightning bolt is approximately ten times hotter than the Sun's surface"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1639",
    "fact": "Octopuses have three hearts and blue blood.",
    "question": "How many hearts does an octopus have, and what color is its blood?",
    "answers": {
      "A": "Three hearts and blue blood",
      "B": "Two hearts and red blood",
      "C": "Four hearts and blue blood",
      "D": "Three hearts and purple blood"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1640",
    "fact": "A day on Mercury lasts longer than a year on Mercury.",
    "question": "Which planet has a day that is longer than its year?",
    "answers": {
      "A": "Mercury",
      "B": "Venus",
      "C": "Mars",
      "D": "Jupiter"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1641",
    "fact": "Sound travels four times faster through water than through air.",
    "question": "How many times faster does sound travel through water compared to air?",
    "answers": {
      "A": "Four times faster",
      "B": "Two times faster",
      "C": "Eight times faster",
      "D": "Ten times faster"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1642",
    "fact": "A group of jellyfish is called a smack.",
    "question": "What is the collective noun for a group of jellyfish?",
    "answers": {
      "A": "A smack",
      "B": "A swarm",
      "C": "A bloom",
      "D": "A colony"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1643",
    "fact": "Butterflies taste with their feet.",
    "question": "Where do butterflies taste their food?",
    "answers": {
      "A": "On their feet",
      "B": "On their wings",
      "C": "On their antennae",
      "D": "On their tongue"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1644",
    "fact": "A snail can sleep for three years.",
    "question": "How long can a snail sleep for?",
    "answers": {
      "A": "Three years",
      "B": "Six months",
      "C": "One year",
      "D": "Two weeks"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1645",
    "fact": "Polar bears have black skin beneath their white fur.",
    "question": "What color is the skin of a polar bear beneath its white fur?",
    "answers": {
      "A": "Black",
      "B": "White",
      "C": "Pink",
      "D": "Gray"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1646",
    "fact": "A group of pandas is called an embarrassment.",
    "question": "What is the collective noun for a group of pandas?",
    "answers": {
      "A": "An embarrassment",
      "B": "A blunder",
      "C": "A tumble",
      "D": "A shuffle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1647",
    "fact": "Wombats produce cube-shaped droppings.",
    "question": "What distinctive shape are wombat droppings?",
    "answers": {
      "A": "Cube-shaped",
      "B": "Spiral-shaped",
      "C": "Disc-shaped",
      "D": "Pyramidal"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1648",
    "fact": "Mantis shrimp can punch with the force of a bullet.",
    "question": "Which sea creature is known for punching with the force of a bullet?",
    "answers": {
      "A": "Mantis shrimp",
      "B": "Pistol shrimp",
      "C": "Boxing crab",
      "D": "Stomatopod fish"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1649",
    "fact": "A group of cats is called a clowder.",
    "question": "What is the collective noun for a group of cats?",
    "answers": {
      "A": "A clowder",
      "B": "A pride",
      "C": "A colony",
      "D": "A pack"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1650",
    "fact": "Axolotls can regenerate their heart brain and limbs.",
    "question": "Which of the following body parts can an axolotl regenerate?",
    "answers": {
      "A": "Heart, brain, and limbs",
      "B": "Only limbs and tail",
      "C": "Heart and lungs only",
      "D": "Eyes, ears, and skin only"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1651",
    "fact": "Napoleon was not actually short — he was average height for his time.",
    "question": "What is the truth about Napoleon's height?",
    "answers": {
      "A": "He was average height for his time, not actually short",
      "B": "He was significantly shorter than most European men of his era",
      "C": "He was notably taller than average for the 19th century",
      "D": "His height varied depending on which historical source you consult"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1652",
    "fact": "Albert Einstein was offered the presidency of Israel in 1952 but declined.",
    "question": "In 1952, Albert Einstein was offered the presidency of which country but declined the position?",
    "answers": {
      "A": "Israel",
      "B": "Germany",
      "C": "Switzerland",
      "D": "United States"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1653",
    "fact": "The first flushing toilet was invented by John Harington in 1596.",
    "question": "In what year did John Harington invent the first flushing toilet?",
    "answers": {
      "A": "1596",
      "B": "1576",
      "C": "1616",
      "D": "1606"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1654",
    "fact": "Shakespeare invented over 1700 words still used in English today.",
    "question": "Approximately how many words that are still used in English today are believed to have been invented by Shakespeare?",
    "answers": {
      "A": "Over 1,700",
      "B": "Around 800",
      "C": "Roughly 3,000",
      "D": "Just over 500"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1655",
    "fact": "The first speeding ticket was issued in 1896 to a driver going 8mph in a 2mph zone.",
    "question": "In what year was the first speeding ticket issued?",
    "answers": {
      "A": "1896",
      "B": "1901",
      "C": "1889",
      "D": "1905"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1656",
    "fact": "Marie Curie is the only person to win Nobel Prizes in two different sciences.",
    "question": "Marie Curie is the only person to win Nobel Prizes in two different sciences. Which two sciences were these?",
    "answers": {
      "A": "Physics and Chemistry",
      "B": "Physics and Medicine",
      "C": "Chemistry and Physiology",
      "D": "Physics and Biology"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1657",
    "fact": "The Wright Brothers first flight was shorter than the wingspan of a Boeing 747.",
    "question": "How does the distance of the Wright Brothers' first flight compare to the wingspan of a Boeing 747?",
    "answers": {
      "A": "The flight was shorter than the Boeing 747's wingspan",
      "B": "The flight was longer than the Boeing 747's wingspan",
      "C": "The flight distance was equal to the Boeing 747's wingspan",
      "D": "The flight was twice as long as the Boeing 747's wingspan"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1658",
    "fact": "The first computer bug was an actual bug — a moth found in a Harvard computer in 1947.",
    "question": "In 1947, what was found inside a Harvard computer that became known as the first computer 'bug'?",
    "answers": {
      "A": "A moth",
      "B": "A cockroach",
      "C": "A spider",
      "D": "A beetle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1659",
    "fact": "Julius Caesar was once kidnapped by pirates who he later had crucified.",
    "question": "Which ancient Roman leader was kidnapped by pirates and later had them crucified?",
    "answers": {
      "A": "Julius Caesar",
      "B": "Marcus Antonius",
      "C": "Pompey the Great",
      "D": "Octavian"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1660",
    "fact": "Tutankhamun became Pharaoh of Egypt at age 9.",
    "question": "At what age did Tutankhamun become Pharaoh of Egypt?",
    "answers": {
      "A": "9 years old",
      "B": "13 years old",
      "C": "6 years old",
      "D": "16 years old"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1661",
    "fact": "Isaac Newton was born the same year Galileo died.",
    "question": "In what year was Isaac Newton born, which was also the year Galileo died?",
    "answers": {
      "A": "1642",
      "B": "1638",
      "C": "1645",
      "D": "1640"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1662",
    "fact": "Columbus never actually set foot on mainland North America.",
    "question": "Which of the following statements about Christopher Columbus is true?",
    "answers": {
      "A": "He never actually set foot on mainland North America",
      "B": "He was the first European to reach the mainland coast of North America",
      "C": "He established the first permanent European settlement on the North American mainland",
      "D": "He sailed along the entire eastern coast of North America during his voyages"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1663",
    "fact": "The guillotine was used as a method of execution in France until 1977.",
    "question": "In what year was the guillotine last used as an official method of execution in France?",
    "answers": {
      "A": "1977",
      "B": "1969",
      "C": "1985",
      "D": "1963"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1664",
    "fact": "Benjamin Franklin never patented any of his inventions.",
    "question": "Benjamin Franklin famously refused to patent his inventions. Which of the following best explains why he never patented any of them?",
    "answers": {
      "A": "He believed inventions should be freely available for the public good",
      "B": "He lacked the financial resources to pay for patent applications",
      "C": "Patent law didn't exist during his lifetime",
      "D": "He was too busy with his political career to handle the paperwork"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1665",
    "fact": "Ketchup was sold as medicine in the 1830s.",
    "question": "In which decade was ketchup actually sold as medicine?",
    "answers": {
      "A": "The 1830s",
      "B": "The 1920s",
      "C": "The 1750s",
      "D": "The 1950s"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1666",
    "fact": "Peanuts are not actually nuts — they are legumes.",
    "question": "What type of plant do peanuts actually belong to?",
    "answers": {
      "A": "Legumes",
      "B": "Tree nuts",
      "C": "Seeds",
      "D": "Tubers"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1667",
    "fact": "Carrots were originally purple before Dutch growers cultivated orange ones.",
    "question": "What colour were carrots originally before Dutch growers cultivated the orange variety we know today?",
    "answers": {
      "A": "Purple",
      "B": "White",
      "C": "Red",
      "D": "Yellow"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1668",
    "fact": "Chocolate was used as currency by the ancient Aztecs.",
    "question": "Which ancient civilization used chocolate as a form of currency?",
    "answers": {
      "A": "The Aztecs",
      "B": "The Maya",
      "C": "The Incas",
      "D": "The Egyptians"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1669",
    "fact": "A single strand of spaghetti is called a spaghetto.",
    "question": "What is a single strand of spaghetti called?",
    "answers": {
      "A": "A spaghetto",
      "B": "A spaghettini",
      "C": "A spaghetti noodle",
      "D": "A spaghettone"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1670",
    "fact": "Almonds are a member of the peach family.",
    "question": "Which of the following fruits is a member of the same family as almonds?",
    "answers": {
      "A": "Peaches",
      "B": "Walnuts",
      "C": "Cashews",
      "D": "Peanuts"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1671",
    "fact": "The Margherita pizza was named after Queen Margherita of Italy in 1889.",
    "question": "In what year was the Margherita pizza named after Queen Margherita of Italy?",
    "answers": {
      "A": "1889",
      "B": "1876",
      "C": "1901",
      "D": "1912"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1672",
    "fact": "Nutmeg is poisonous in large quantities.",
    "question": "At what level of consumption does nutmeg become toxic to humans?",
    "answers": {
      "A": "In large quantities",
      "B": "After just a single teaspoon",
      "C": "Only when consumed raw and uncooked",
      "D": "It is never toxic regardless of quantity"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1673",
    "fact": "Coca-Cola originally contained cocaine.",
    "question": "Which soft drink originally contained cocaine as one of its ingredients?",
    "answers": {
      "A": "Coca-Cola",
      "B": "Pepsi",
      "C": "Sprite",
      "D": "Fanta"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1674",
    "fact": "Cashews grow on the outside of the cashew apple fruit.",
    "question": "In what unusual location does the cashew nut grow?",
    "answers": {
      "A": "On the outside of the cashew apple fruit",
      "B": "Inside a pod beneath the ground like peanuts",
      "C": "In clusters on the trunk of the cashew tree",
      "D": "Within the flesh of the fruit like an apple seed"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1675",
    "fact": "Cheese is the most stolen food in the world.",
    "question": "Which food is the most stolen item from stores worldwide?",
    "answers": {
      "A": "Cheese",
      "B": "Chocolate",
      "C": "Coffee",
      "D": "Seafood"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1676",
    "fact": "White chocolate contains no cocoa solids and is not technically chocolate.",
    "question": "Why is white chocolate not technically considered chocolate?",
    "answers": {
      "A": "It contains no cocoa solids",
      "B": "It contains no cocoa butter",
      "C": "It is made from cocoa pods instead of cocoa beans",
      "D": "It lacks natural cocoa flavoring"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1677",
    "fact": "Worcestershire sauce is made from dissolved anchovies.",
    "question": "Which ingredient gives Worcestershire sauce its distinctive umami flavor?",
    "answers": {
      "A": "Dissolved anchovies",
      "B": "Fermented soy beans",
      "C": "Dissolved sardines",
      "D": "Anchovy paste mixed with vinegar"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1678",
    "fact": "Potatoes were the first food grown in space in 1995.",
    "question": "What was the first food ever grown in space?",
    "answers": {
      "A": "Potatoes",
      "B": "Lettuce",
      "C": "Tomatoes",
      "D": "Wheat"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1679",
    "fact": "The Olympic gold medal is mostly made of silver.",
    "question": "What is the primary metal used to make an Olympic gold medal?",
    "answers": {
      "A": "Silver",
      "B": "Gold",
      "C": "Bronze",
      "D": "Platinum"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1680",
    "fact": "Golf was banned in Scotland in 1457 because it distracted men from archery practice.",
    "question": "In what year did Scotland ban golf because it was distracting men from archery practice?",
    "answers": {
      "A": "1457",
      "B": "1347",
      "C": "1557",
      "D": "1387"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1681",
    "fact": "Tennis was originally played with bare hands before rackets were introduced.",
    "question": "Before modern tennis rackets were introduced, how was the game originally played?",
    "answers": {
      "A": "With bare hands",
      "B": "With wooden paddles",
      "C": "With strung rackets made from animal gut",
      "D": "With leather gloves only"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1682",
    "fact": "Usain Bolt ate 1000 chicken nuggets during the 2008 Beijing Olympics.",
    "question": "According to legend, how many chicken nuggets did Usain Bolt consume during the 2008 Beijing Olympics?",
    "answers": {
      "A": "1000",
      "B": "500",
      "C": "1500",
      "D": "2000"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1683",
    "fact": "The first World Cup was held in Uruguay in 1930.",
    "question": "In which country was the first FIFA World Cup held?",
    "answers": {
      "A": "Uruguay",
      "B": "Brazil",
      "C": "Italy",
      "D": "France"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1684",
    "fact": "Table tennis balls were originally made from champagne corks.",
    "question": "What were table tennis balls originally made from?",
    "answers": {
      "A": "Champagne corks",
      "B": "Rubber compounds",
      "C": "Celluloid plastic",
      "D": "Cork and leather combinations"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1685",
    "fact": "The maximum score in ten-pin bowling is 300.",
    "question": "What is the maximum possible score in ten-pin bowling?",
    "answers": {
      "A": "300",
      "B": "280",
      "C": "250",
      "D": "320"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1686",
    "fact": "Polo is the oldest team sport still played today.",
    "question": "Which of these is recognised as the oldest team sport still played today?",
    "answers": {
      "A": "Polo",
      "B": "Cricket",
      "C": "Ice Hockey",
      "D": "Lacrosse"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1687",
    "fact": "The Boston Marathon did not allow women to officially compete until 1972.",
    "question": "In what year did the Boston Marathon first officially allow women to compete?",
    "answers": {
      "A": "1972",
      "B": "1960",
      "C": "1968",
      "D": "1975"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1688",
    "fact": "Wayne Gretzky scored more assists alone than any other NHL player scored total points.",
    "question": "Wayne Gretzky's career assists total surpassed the career total points of which player, who holds the second-most points in NHL history?",
    "answers": {
      "A": "Jaromir Jagr",
      "B": "Mark Messier",
      "C": "Gordie Howe",
      "D": "Mario Lemieux"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1689",
    "fact": "Football was banned in England for over 300 years.",
    "question": "For approximately how long was football banned in England during the medieval period?",
    "answers": {
      "A": "Over 300 years",
      "B": "Over 100 years",
      "C": "Over 500 years",
      "D": "Over 200 years"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1690",
    "fact": "Cricket is the second most popular sport in the world after football.",
    "question": "After football, what is the second most popular sport in the world?",
    "answers": {
      "A": "Cricket",
      "B": "Basketball",
      "C": "Tennis",
      "D": "Volleyball"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1691",
    "fact": "More Monopoly money is printed each year than real money worldwide.",
    "question": "Which of the following is printed in greater quantities each year than actual currency?",
    "answers": {
      "A": "Monopoly money",
      "B": "Lottery tickets",
      "C": "Postage stamps",
      "D": "Playing cards"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1692",
    "fact": "The Lion King is based on Shakespeares Hamlet.",
    "question": "Which Shakespeare play is 'The Lion King' based on?",
    "answers": {
      "A": "Hamlet",
      "B": "Macbeth",
      "C": "Othello",
      "D": "King Lear"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1693",
    "fact": "James Bond has been played by six different actors in official films.",
    "question": "How many different actors have played James Bond in the official film series?",
    "answers": {
      "A": "Six",
      "B": "Seven",
      "C": "Five",
      "D": "Eight"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1694",
    "fact": "Mickey Mouse was the first cartoon character to have a star on the Hollywood Walk of Fame.",
    "question": "Which cartoon character was the first to receive a star on the Hollywood Walk of Fame?",
    "answers": {
      "A": "Mickey Mouse",
      "B": "Bugs Bunny",
      "C": "Donald Duck",
      "D": "Felix the Cat"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1695",
    "fact": "Alfred Hitchcock never won an Academy Award for directing.",
    "question": "How many Academy Awards for Best Director did Alfred Hitchcock win during his lifetime?",
    "answers": {
      "A": "None",
      "B": "One",
      "C": "Two",
      "D": "Three"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1696",
    "fact": "The word robot comes from the Czech word robota meaning forced labour.",
    "question": "The word 'robot' originates from a Czech word meaning what?",
    "answers": {
      "A": "Forced labour",
      "B": "Mechanical worker",
      "C": "Artificial being",
      "D": "Automated machine"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1697",
    "fact": "Instagram was originally called Burbn.",
    "question": "What was Instagram originally called before its launch?",
    "answers": {
      "A": "Burbn",
      "B": "Snapgram",
      "C": "Photobox",
      "D": "Picshare"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1698",
    "fact": "The Beatles were rejected by Decca Records in 1962.",
    "question": "Which record label famously rejected The Beatles in 1962?",
    "answers": {
      "A": "Decca Records",
      "B": "EMI Records",
      "C": "Capitol Records",
      "D": "RCA Records"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1699",
    "fact": "Charlie Chaplin once entered a Charlie Chaplin lookalike contest and came third.",
    "question": "In a famous anecdote, Charlie Chaplin entered a lookalike contest of himself. What place did he finish?",
    "answers": {
      "A": "Third",
      "B": "Second",
      "C": "First",
      "D": "He was disqualified for unfair advantage"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1700",
    "fact": "The first computer mouse was made of wood.",
    "question": "What material was used to make the first computer mouse?",
    "answers": {
      "A": "Wood",
      "B": "Plastic",
      "C": "Metal",
      "D": "Rubber"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1701",
    "fact": "Email is older than the World Wide Web.",
    "question": "Which of these technologies was invented first?",
    "answers": {
      "A": "Email",
      "B": "The World Wide Web",
      "C": "The Internet browser",
      "D": "Online chat systems"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1702",
    "fact": "Wi-Fi was never an acronym for Wireless Fidelity.",
    "question": "What is a common misconception about the term 'Wi-Fi'?",
    "answers": {
      "A": "That it stands for 'Wireless Fidelity' when it actually doesn't",
      "B": "That it was invented by Apple in 2003",
      "C": "That it requires a physical cable connection",
      "D": "That it can only work indoors"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1703",
    "fact": "The first text message ever sent said Merry Christmas in 1992.",
    "question": "What was the content of the first text message ever sent?",
    "answers": {
      "A": "Merry Christmas",
      "B": "Hello World",
      "C": "Happy New Year",
      "D": "Testing 123"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1704",
    "fact": "Google was originally called BackRub.",
    "question": "What was Google originally called before its famous name change?",
    "answers": {
      "A": "BackRub",
      "B": "WebCrawler",
      "C": "PageRank",
      "D": "SearchBot"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1705",
    "fact": "There are more stars in the universe than grains of sand on all of Earths beaches.",
    "question": "Which of the following comparisons is used to illustrate the vast number of stars in the observable universe?",
    "answers": {
      "A": "There are more stars in the universe than grains of sand on all of Earth's beaches",
      "B": "There are more stars in the universe than drops of water in all of Earth's oceans",
      "C": "There are more stars in the universe than blades of grass on all of Earth's land",
      "D": "There are more stars in the universe than atoms in the human body"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1706",
    "fact": "A teaspoon of neutron star material would weigh about 10 million tons.",
    "question": "Approximately how much would a teaspoon of neutron star material weigh?",
    "answers": {
      "A": "10 million tons",
      "B": "100,000 tons",
      "C": "1 billion tons",
      "D": "50,000 tons"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1707",
    "fact": "Pluto was reclassified as a dwarf planet in 2006.",
    "question": "In what year was Pluto reclassified from a planet to a dwarf planet?",
    "answers": {
      "A": "2006",
      "B": "2000",
      "C": "2008",
      "D": "2004"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1708",
    "fact": "Humans share 60% of their DNA with bananas.",
    "question": "What percentage of their DNA do humans share with bananas?",
    "answers": {
      "A": "60%",
      "B": "40%",
      "C": "75%",
      "D": "50%"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1709",
    "fact": "The dot over a lowercase i or j is called a tittle.",
    "question": "What is the name of the dot that appears over a lowercase i or j?",
    "answers": {
      "A": "tittle",
      "B": "jot",
      "C": "serif",
      "D": "apex"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1710",
    "fact": "A group of pugs is called a grumble.",
    "question": "What is the collective noun for a group of pugs?",
    "answers": {
      "A": "A grumble",
      "B": "A snort",
      "C": "A waddle",
      "D": "A mutter"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1711",
    "fact": "Oxford University is older than the Aztec Empire.",
    "question": "Which of these institutions or empires was established first?",
    "answers": {
      "A": "Oxford University",
      "B": "The Aztec Empire",
      "C": "The University of Cambridge",
      "D": "The Ottoman Empire"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1712",
    "fact": "Competitive art used to be an Olympic sport between 1912 and 1948.",
    "question": "In which years was competitive art an official Olympic sport?",
    "answers": {
      "A": "1912 to 1948",
      "B": "1900 to 1920",
      "C": "1920 to 1960",
      "D": "1896 to 1912"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1713",
    "fact": "Vending machines kill more people annually than sharks.",
    "question": "Which of the following causes more deaths annually in the United States?",
    "answers": {
      "A": "Vending machines",
      "B": "Shark attacks",
      "C": "Lightning strikes",
      "D": "Bee stings"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1714",
    "fact": "Humans are the only animals that blush.",
    "question": "Which of the following statements about blushing is true?",
    "answers": {
      "A": "Humans are the only animals that blush",
      "B": "Both humans and chimpanzees blush as a sign of embarrassment",
      "C": "Dogs blush through changes in their ear coloration",
      "D": "Blushing is a learned behavior found in most mammals"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1715",
    "fact": "The name for the space between your eyebrows is called the glabella.",
    "question": "What is the anatomical name for the space between your eyebrows?",
    "answers": {
      "A": "Glabella",
      "B": "Nasion",
      "C": "Bregma",
      "D": "Inion"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1716",
    "fact": "Sea otters hold hands while sleeping so they do not drift apart.",
    "question": "Sea otters have a particularly endearing behavior while sleeping. What is the main reason they hold hands with each other during sleep?",
    "answers": {
      "A": "To prevent drifting apart from one another",
      "B": "To maintain body heat in cold ocean waters",
      "C": "To protect themselves from predators",
      "D": "To establish social hierarchy within their group"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1717",
    "fact": "The longest hiccuping episode on record lasted 68 years.",
    "question": "What is the longest hiccuping episode ever recorded?",
    "answers": {
      "A": "68 years",
      "B": "42 years",
      "C": "51 years",
      "D": "35 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1718",
    "fact": "It rains diamonds on Neptune and Uranus.",
    "question": "On which two planets in our solar system does it rain diamonds?",
    "answers": {
      "A": "Neptune and Uranus",
      "B": "Jupiter and Saturn",
      "C": "Mars and Venus",
      "D": "Mercury and Neptune"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1719",
    "fact": "The word salary comes from Latin for salt as Roman soldiers were sometimes paid in salt.",
    "question": "The word 'salary' originates from the Latin word for which commodity that Roman soldiers were sometimes paid with?",
    "answers": {
      "A": "Salt",
      "B": "Gold",
      "C": "Grain",
      "D": "Silver"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1720",
    "fact": "Typewriter is the longest word typed using only the top row of a keyboard.",
    "question": "Which of these words is the longest that can be typed using only the top row of a keyboard?",
    "answers": {
      "A": "typewriter",
      "B": "quarter",
      "C": "territory",
      "D": "property"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1721",
    "fact": "The technical term for a hashtag symbol is an octothorpe.",
    "question": "What is the technical term for the hashtag symbol (#)?",
    "answers": {
      "A": "Octothorpe",
      "B": "Hexathorpe",
      "C": "Octagon",
      "D": "Hashtag"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1722",
    "fact": "Apple was briefly worth more than the entire GDP of Russia.",
    "question": "In recent years, Apple's market capitalization briefly exceeded the entire GDP of which country?",
    "answers": {
      "A": "Russia",
      "B": "India",
      "C": "Brazil",
      "D": "Mexico"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1723",
    "fact": "The United States penny costs more to make than it is worth.",
    "question": "Which U.S. coin costs more to manufacture than its face value?",
    "answers": {
      "A": "The penny",
      "B": "The nickel",
      "C": "The dime",
      "D": "The quarter"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1724",
    "fact": "The first ATM was installed in London in 1967.",
    "question": "In which year was the first ATM installed in London?",
    "answers": {
      "A": "1967",
      "B": "1960",
      "C": "1972",
      "D": "1975"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1725",
    "fact": "Amazon was originally going to be called Cadabra.",
    "question": "What was Amazon originally going to be called before founder Jeff Bezos changed it?",
    "answers": {
      "A": "Cadabra",
      "B": "Bazaar",
      "C": "Nexus",
      "D": "Omega"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1726",
    "fact": "The first credit card was introduced by Diners Club in 1950.",
    "question": "Which company introduced the first credit card in 1950?",
    "answers": {
      "A": "Diners Club",
      "B": "American Express",
      "C": "Visa",
      "D": "MasterCard"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1727",
    "fact": "The Mona Lisa has no eyebrows — it was fashionable to shave them in Renaissance Florence.",
    "question": "Why does the Mona Lisa famously have no eyebrows?",
    "answers": {
      "A": "It was fashionable to shave them in Renaissance Florence",
      "B": "Leonardo da Vinci believed eyebrows made portraits look less symmetrical",
      "C": "The painting was damaged and the eyebrows were lost over time",
      "D": "Da Vinci ran out of brown pigment while completing the portrait"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1728",
    "fact": "A group of hippos is called a bloat.",
    "question": "What is the collective noun for a group of hippos?",
    "answers": {
      "A": "A bloat",
      "B": "A pod",
      "C": "A crash",
      "D": "A thunder"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1729",
    "fact": "Pigs cannot look up at the sky.",
    "question": "Which of the following statements about pigs is true?",
    "answers": {
      "A": "Pigs are physically unable to look up at the sky",
      "B": "Pigs can see in color better than humans",
      "C": "Pigs have a wider field of vision than dogs",
      "D": "Pigs are the only farm animals that cannot see behind them"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1730",
    "fact": "A group of kangaroos is called a mob.",
    "question": "What is the collective noun for a group of kangaroos?",
    "answers": {
      "A": "A mob",
      "B": "A leap",
      "C": "A bound",
      "D": "A pouch"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1731",
    "fact": "Mosquitoes are the deadliest animals in the world killing more humans than any other creature.",
    "question": "Which animal is responsible for more human deaths than any other creature on Earth?",
    "answers": {
      "A": "Mosquitoes",
      "B": "Snakes",
      "C": "Sharks",
      "D": "Hippopotamuses"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1732",
    "fact": "Crocodiles cannot stick out their tongue.",
    "question": "Which of these reptiles is physically unable to stick out its tongue?",
    "answers": {
      "A": "Crocodile",
      "B": "Lizard",
      "C": "Snake",
      "D": "Turtle"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1733",
    "fact": "A group of sharks is called a shiver.",
    "question": "What is the collective noun for a group of sharks?",
    "answers": {
      "A": "A shiver",
      "B": "A school",
      "C": "A pod",
      "D": "A pack"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1734",
    "fact": "The shortest commercial flight in the world operates between Westray and Papa Westray in Scotland's Orkney Islands, lasting about 74 seconds. The record time with a tailwind is 47 seconds. The islands are only 2.7km apart.",
    "question": "What is the approximate duration of the world's shortest commercial flight, operating between Westray and Papa Westray in Scotland?",
    "answers": {
      "A": "About 74 seconds",
      "B": "2 minutes and 15 seconds",
      "C": "About 57 seconds",
      "D": "3 minutes and 30 seconds"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1735",
    "fact": "Hot water freezes faster than cold water — this is called the Mpemba effect.",
    "question": "What is the name of the phenomenon where hot water freezes faster than cold water?",
    "answers": {
      "A": "The Mpemba effect",
      "B": "The Joule-Thomson effect",
      "C": "The Leidenfrost effect",
      "D": "The Bernoulli effect"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1736",
    "fact": "A day on Mars is 24 hours and 37 minutes.",
    "question": "How long is a day on Mars (one complete rotation)?",
    "answers": {
      "A": "24 hours and 37 minutes",
      "B": "23 hours and 56 minutes",
      "C": "25 hours and 12 minutes",
      "D": "24 hours exactly"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1737",
    "fact": "The Empire State Building has its own postcode.",
    "question": "Which famous New York landmark has its own postcode?",
    "answers": {
      "A": "The Empire State Building",
      "B": "The Statue of Liberty",
      "C": "Central Park",
      "D": "Grand Central Terminal"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1738",
    "fact": "Pineapples take two years to grow.",
    "question": "How long does it typically take for a pineapple to grow from planting to harvest?",
    "answers": {
      "A": "Two years",
      "B": "Six months",
      "C": "One year",
      "D": "Three years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1739",
    "fact": "Lightning strikes the Earth about 100 times every second.",
    "question": "Approximately how many times per second does lightning strike the Earth?",
    "answers": {
      "A": "100 times",
      "B": "50 times",
      "C": "250 times",
      "D": "10 times"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1740",
    "fact": "A group of giraffes is called a tower.",
    "question": "What is the collective noun for a group of giraffes?",
    "answers": {
      "A": "A tower",
      "B": "A herd",
      "C": "A pod",
      "D": "A pride"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1741",
    "fact": "Lobsters were once considered so low-class they were fed to prisoners.",
    "question": "Historically, lobster was considered such a low-status food that it was commonly served to which group of people?",
    "answers": {
      "A": "Prisoners",
      "B": "Slaves",
      "C": "Soldiers",
      "D": "Peasants"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1742",
    "fact": "Babies are born with 300 bones but adults only have 206.",
    "question": "How many bones does a typical adult human have?",
    "answers": {
      "A": "206",
      "B": "300",
      "C": "252",
      "D": "186"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1743",
    "fact": "The Sahara Desert was green and lush just 6000 years ago.",
    "question": "Approximately how many years ago was the Sahara Desert a green and lush region rather than arid desert?",
    "answers": {
      "A": "6,000 years ago",
      "B": "12,000 years ago",
      "C": "3,000 years ago",
      "D": "25,000 years ago"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1744",
    "fact": "Saturn is the only planet in our solar system less dense than water.",
    "question": "Which planet in our solar system is the only one that would float in water because it's less dense than water?",
    "answers": {
      "A": "Saturn",
      "B": "Jupiter",
      "C": "Neptune",
      "D": "Uranus"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1745",
    "fact": "The worlds first university was founded in Bologna Italy in 1088.",
    "question": "In what year was the world's first university founded in Bologna, Italy?",
    "answers": {
      "A": "1088",
      "B": "1150",
      "C": "1215",
      "D": "1348"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1746",
    "fact": "Tigers have striped skin not just striped fur.",
    "question": "What unique feature do tigers possess that many people don't realize?",
    "answers": {
      "A": "They have striped skin underneath their fur, not just striped fur",
      "B": "They have completely orange skin with no stripes at all",
      "C": "They have spotted skin patterns that don't match their fur",
      "D": "They have solid colored skin with only the fur being striped"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1747",
    "fact": "Trees communicate with each other through underground fungal networks.",
    "question": "Through what underground network do trees communicate with each other?",
    "answers": {
      "A": "Fungal networks",
      "B": "Root systems intertwining directly",
      "C": "Electrical currents in the soil",
      "D": "Chemical signals in groundwater"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1748",
    "fact": "Cleopatra spoke nine languages.",
    "question": "How many languages did Cleopatra speak?",
    "answers": {
      "A": "Nine",
      "B": "Seven",
      "C": "Twelve",
      "D": "Five"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1749",
    "fact": "A group of rhinos is called a crash.",
    "question": "What is the collective noun for a group of rhinos?",
    "answers": {
      "A": "A crash",
      "B": "A stampede",
      "C": "A herd",
      "D": "A charge"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1750",
    "fact": "Polar bear fur is transparent not white.",
    "question": "What is the actual property of polar bear fur that makes it appear white?",
    "answers": {
      "A": "It is transparent and reflects light",
      "B": "It is white due to a pigment in each hair",
      "C": "It is naturally bleached by Arctic ice",
      "D": "It contains white melanin cells"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1751",
    "fact": "A group of zebras is called a dazzle.",
    "question": "What is the collective noun for a group of zebras?",
    "answers": {
      "A": "A dazzle",
      "B": "A stripe",
      "C": "A herd",
      "D": "A stampede"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1752",
    "fact": "The longest English word without a vowel is rhythms.",
    "question": "What is the longest English word that contains no traditional vowels (a, e, i, o, u)?",
    "answers": {
      "A": "rhythms",
      "B": "strength",
      "C": "syzygy",
      "D": "hymns"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1753",
    "fact": "The Sun makes up 99.86% of all the mass in our solar system.",
    "question": "Approximately what percentage of the total mass in our solar system does the Sun account for?",
    "answers": {
      "A": "99.86%",
      "B": "87.32%",
      "C": "94.21%",
      "D": "96.54%"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1754",
    "fact": "The Colosseum in Rome could hold up to 80000 spectators.",
    "question": "Approximately how many spectators could the Colosseum in Rome hold at its full capacity?",
    "answers": {
      "A": "80,000",
      "B": "50,000",
      "C": "120,000",
      "D": "35,000"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1755",
    "fact": "Goldfish have a memory span of at least three months not three seconds.",
    "question": "How long is the memory span of a goldfish?",
    "answers": {
      "A": "At least three months",
      "B": "Only three seconds",
      "C": "About one week",
      "D": "A few days at most"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1756",
    "fact": "The Great Pyramid of Giza was the tallest man-made structure for over 3800 years.",
    "question": "For approximately how many years was the Great Pyramid of Giza the tallest man-made structure in the world?",
    "answers": {
      "A": "Over 3,800 years",
      "B": "Over 2,500 years",
      "C": "Over 5,000 years",
      "D": "Over 1,500 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1757",
    "fact": "Cats have 32 muscles in each ear.",
    "question": "How many muscles does a cat have in each ear?",
    "answers": {
      "A": "32",
      "B": "16",
      "C": "48",
      "D": "24"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1758",
    "fact": "Ants do not sleep like humans. Instead, they take hundreds of brief micro-naps of about one minute each throughout the day, totalling around 4 to 5 hours of rest. Worker ants and queen ants have different rest patterns.",
    "question": "According to scientific research, which of the following statements about ant sleep patterns is true?",
    "answers": {
      "A": "Ants take hundreds of brief micro-naps throughout the day totalling about 4-5 hours of rest",
      "B": "Ants sleep for about 8 hours per day like humans",
      "C": "Ants only sleep during winter months",
      "D": "Ants never sleep or rest at all"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1759",
    "fact": "Angel Falls in Venezuela is the tallest waterfall in the world at 979 metres.",
    "question": "What is the tallest waterfall in the world?",
    "answers": {
      "A": "Angel Falls, Venezuela at 979 metres",
      "B": "Niagara Falls, Canada at 1,188 metres",
      "C": "Victoria Falls, Zimbabwe at 1,708 metres",
      "D": "Yosemite Falls, USA at 739 metres"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1760",
    "fact": "Honey bees can recognise human faces.",
    "question": "Which of the following animals has been scientifically proven to be able to recognise human faces?",
    "answers": {
      "A": "Honey bees",
      "B": "Goldfish",
      "C": "Chickens",
      "D": "Rabbits"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1761",
    "fact": "The Great Wall of China took over 1800 years to build.",
    "question": "Approximately how long did it take to construct the Great Wall of China?",
    "answers": {
      "A": "Over 1800 years",
      "B": "Over 800 years",
      "C": "Over 2500 years",
      "D": "Over 1200 years"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1762",
    "fact": "Sharks are older than Saturns rings.",
    "question": "Which of the following is older?",
    "answers": {
      "A": "Sharks as a species",
      "B": "Saturn's rings",
      "C": "The dinosaurs",
      "D": "The Moon"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1763",
    "fact": "The coldest temperature ever recorded on Earth was minus 89.2 degrees Celsius in Antarctica.",
    "question": "What is the coldest temperature ever recorded on Earth?",
    "answers": {
      "A": "-89.2°C in Antarctica",
      "B": "-78.5°C in Siberia",
      "C": "-95.1°C in Greenland",
      "D": "-82.3°C in Alaska"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1764",
    "fact": "Snow White and the Seven Dwarfs in 1937 was the first feature-length animated film.",
    "question": "Which film was the first feature-length animated movie?",
    "answers": {
      "A": "Snow White and the Seven Dwarfs (1937)",
      "B": "Fantasia (1940)",
      "C": "Cinderella (1950)",
      "D": "Sleeping Beauty (1959)"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq704",
    "question": "What is the capital of Australia?",
    "answers": {
      "A": "Sydney",
      "B": "Melbourne",
      "C": "Canberra",
      "D": "Brisbane"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq705",
    "question": "Which country has the most natural lakes?",
    "answers": {
      "A": "Russia",
      "B": "USA",
      "C": "Brazil",
      "D": "Canada"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq706",
    "question": "What is the longest river in Africa?",
    "answers": {
      "A": "Congo",
      "B": "Nile",
      "C": "Niger",
      "D": "Zambezi"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq707",
    "question": "Which country is home to the Patagonia region?",
    "answers": {
      "A": "Chile and Argentina",
      "B": "Brazil and Bolivia",
      "C": "Peru and Ecuador",
      "D": "Colombia and Venezuela"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq708",
    "question": "The Strait of Gibraltar connects the Atlantic Ocean to which sea?",
    "answers": {
      "A": "Red Sea",
      "B": "Black Sea",
      "C": "Mediterranean Sea",
      "D": "Caspian Sea"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq709",
    "question": "Which African country was formerly known as Rhodesia?",
    "answers": {
      "A": "Zambia",
      "B": "Mozambique",
      "C": "Zimbabwe",
      "D": "Malawi"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq710",
    "question": "What is the smallest country in South America by area?",
    "answers": {
      "A": "Guyana",
      "B": "Suriname",
      "C": "Uruguay",
      "D": "Ecuador"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq711",
    "question": "Which ocean is the deepest?",
    "answers": {
      "A": "Atlantic",
      "B": "Indian",
      "C": "Arctic",
      "D": "Pacific"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq712",
    "question": "Istanbul is located on which two continents?",
    "answers": {
      "A": "Europe and Asia",
      "B": "Africa and Asia",
      "C": "Europe and Africa",
      "D": "Asia and Oceania"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq713",
    "question": "Which country has the most official languages?",
    "answers": {
      "A": "India",
      "B": "South Africa",
      "C": "Bolivia",
      "D": "Switzerland"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq714",
    "question": "The Atacama Desert is located primarily in which country?",
    "answers": {
      "A": "Peru",
      "B": "Bolivia",
      "C": "Chile",
      "D": "Argentina"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq715",
    "question": "What is the capital of New Zealand?",
    "answers": {
      "A": "Auckland",
      "B": "Wellington",
      "C": "Christchurch",
      "D": "Dunedin"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq716",
    "question": "Which country does the island of Sardinia belong to?",
    "answers": {
      "A": "France",
      "B": "Spain",
      "C": "Italy",
      "D": "Greece"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq717",
    "question": "The Mekong River flows through how many countries?",
    "answers": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq718",
    "question": "Which country is known as the Land of the Rising Sun?",
    "answers": {
      "A": "South Korea",
      "B": "China",
      "C": "Japan",
      "D": "Thailand"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq719",
    "question": "What is the currency of Norway?",
    "answers": {
      "A": "Krone",
      "B": "Krona",
      "C": "Euro",
      "D": "Florin"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq720",
    "question": "Which desert is the largest hot desert in the world?",
    "answers": {
      "A": "Arabian Desert",
      "B": "Gobi Desert",
      "C": "Sahara Desert",
      "D": "Kalahari Desert"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq721",
    "question": "The Amazon Rainforest covers approximately what percentage of Earth's land surface?",
    "answers": {
      "A": "2%",
      "B": "4%",
      "C": "6%",
      "D": "8%"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq722",
    "question": "Which European country has the most castles per square kilometre?",
    "answers": {
      "A": "Germany",
      "B": "France",
      "C": "Wales",
      "D": "Czech Republic"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq723",
    "question": "What is the largest country in Africa by area?",
    "answers": {
      "A": "Sudan",
      "B": "Congo",
      "C": "Nigeria",
      "D": "Algeria"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq724",
    "question": "The element gold has which chemical symbol?",
    "answers": {
      "A": "Go",
      "B": "Gd",
      "C": "Au",
      "D": "Ag"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq725",
    "question": "What is the powerhouse of the cell?",
    "answers": {
      "A": "Nucleus",
      "B": "Ribosome",
      "C": "Mitochondria",
      "D": "Golgi apparatus"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq726",
    "question": "How many bones are in the adult human body?",
    "answers": {
      "A": "196",
      "B": "206",
      "C": "216",
      "D": "226"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq727",
    "question": "What is the speed of light in a vacuum (approximately)?",
    "answers": {
      "A": "200,000 km/s",
      "B": "250,000 km/s",
      "C": "300,000 km/s",
      "D": "350,000 km/s"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq728",
    "question": "Which planet has the most moons?",
    "answers": {
      "A": "Jupiter",
      "B": "Saturn",
      "C": "Uranus",
      "D": "Neptune"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq729",
    "question": "What is the most abundant gas in Earth's atmosphere?",
    "answers": {
      "A": "Oxygen",
      "B": "Carbon dioxide",
      "C": "Argon",
      "D": "Nitrogen"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq730",
    "question": "DNA stands for what?",
    "answers": {
      "A": "Deoxyribonucleic Acid",
      "B": "Diribonucleic Acid",
      "C": "Deoxyribonitric Acid",
      "D": "Dinitrogen Acid"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq731",
    "question": "Which scientist formulated the three laws of motion?",
    "answers": {
      "A": "Galileo Galilei",
      "B": "Albert Einstein",
      "C": "Isaac Newton",
      "D": "Nikola Tesla"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq732",
    "question": "What is the hardest natural substance on Earth?",
    "answers": {
      "A": "Quartz",
      "B": "Graphite",
      "C": "Diamond",
      "D": "Corundum"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq733",
    "question": "The human body has how many pairs of chromosomes?",
    "answers": {
      "A": "21",
      "B": "23",
      "C": "25",
      "D": "46"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq734",
    "question": "Which organ produces insulin?",
    "answers": {
      "A": "Liver",
      "B": "Kidney",
      "C": "Pancreas",
      "D": "Spleen"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq735",
    "question": "What is the chemical formula for water?",
    "answers": {
      "A": "HO",
      "B": "H2O",
      "C": "H3O",
      "D": "OH2"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq736",
    "question": "Which planet is known as the Red Planet?",
    "answers": {
      "A": "Venus",
      "B": "Jupiter",
      "C": "Mars",
      "D": "Mercury"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq737",
    "question": "How many chambers does the human heart have?",
    "answers": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "6"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq738",
    "question": "What type of animal is a Komodo dragon?",
    "answers": {
      "A": "Snake",
      "B": "Lizard",
      "C": "Crocodilian",
      "D": "Salamander"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq739",
    "question": "Which gas do plants absorb during photosynthesis?",
    "answers": {
      "A": "Oxygen",
      "B": "Nitrogen",
      "C": "Carbon monoxide",
      "D": "Carbon dioxide"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq740",
    "question": "What is the atomic number of carbon?",
    "answers": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "12"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq741",
    "question": "Which blood type is the universal donor?",
    "answers": {
      "A": "A positive",
      "B": "B negative",
      "C": "O negative",
      "D": "AB positive"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq742",
    "question": "A light year measures what?",
    "answers": {
      "A": "Time",
      "B": "Weight",
      "C": "Distance",
      "D": "Energy"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq743",
    "question": "What is the largest organ of the human body?",
    "answers": {
      "A": "Liver",
      "B": "Brain",
      "C": "Lungs",
      "D": "Skin"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq744",
    "question": "Which planet has a great red spot?",
    "answers": {
      "A": "Saturn",
      "B": "Neptune",
      "C": "Jupiter",
      "D": "Uranus"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq745",
    "question": "What is the boiling point of water at sea level in Celsius?",
    "answers": {
      "A": "90°C",
      "B": "95°C",
      "C": "100°C",
      "D": "105°C"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq746",
    "question": "Penicillin was discovered by which scientist?",
    "answers": {
      "A": "Louis Pasteur",
      "B": "Alexander Fleming",
      "C": "Joseph Lister",
      "D": "Robert Koch"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq747",
    "question": "Which animal has the largest brain relative to its body size?",
    "answers": {
      "A": "Dolphin",
      "B": "Chimpanzee",
      "C": "Human",
      "D": "Elephant"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq748",
    "question": "What is the name of the force that keeps planets in orbit?",
    "answers": {
      "A": "Magnetism",
      "B": "Gravity",
      "C": "Centrifugal force",
      "D": "Nuclear force"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq749",
    "question": "How many legs does a spider have?",
    "answers": {
      "A": "6",
      "B": "8",
      "C": "10",
      "D": "12"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq750",
    "question": "What is the most common element in the universe?",
    "answers": {
      "A": "Oxygen",
      "B": "Carbon",
      "C": "Helium",
      "D": "Hydrogen"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq751",
    "question": "Who was the first person to walk on the moon?",
    "answers": {
      "A": "Buzz Aldrin",
      "B": "Yuri Gagarin",
      "C": "Neil Armstrong",
      "D": "John Glenn"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq752",
    "question": "In which year did World War I begin?",
    "answers": {
      "A": "1912",
      "B": "1914",
      "C": "1916",
      "D": "1918"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq753",
    "question": "The Berlin Wall fell in which year?",
    "answers": {
      "A": "1987",
      "B": "1988",
      "C": "1989",
      "D": "1990"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq754",
    "question": "Which empire was ruled by Genghis Khan?",
    "answers": {
      "A": "Ottoman Empire",
      "B": "Mongol Empire",
      "C": "Roman Empire",
      "D": "Byzantine Empire"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq755",
    "question": "The French Revolution began in which year?",
    "answers": {
      "A": "1776",
      "B": "1783",
      "C": "1789",
      "D": "1799"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq756",
    "question": "Who was the first female Prime Minister of the UK?",
    "answers": {
      "A": "Theresa May",
      "B": "Margaret Thatcher",
      "C": "Hillary Clinton",
      "D": "Angela Merkel"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq757",
    "question": "The ancient wonder, the Colossus of Rhodes, was located in which country?",
    "answers": {
      "A": "Italy",
      "B": "Turkey",
      "C": "Greece",
      "D": "Egypt"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq758",
    "question": "Julius Caesar was assassinated in which year BC?",
    "answers": {
      "A": "23 BC",
      "B": "44 BC",
      "C": "63 BC",
      "D": "100 BC"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq759",
    "question": "The Titanic sank in which year?",
    "answers": {
      "A": "1910",
      "B": "1911",
      "C": "1912",
      "D": "1913"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq760",
    "question": "Which civilisation built Machu Picchu?",
    "answers": {
      "A": "Aztec",
      "B": "Maya",
      "C": "Inca",
      "D": "Olmec"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq761",
    "question": "In which century did the Black Death devastate Europe?",
    "answers": {
      "A": "12th",
      "B": "13th",
      "C": "14th",
      "D": "15th"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq762",
    "question": "The Cold War was primarily a conflict between which two nations?",
    "answers": {
      "A": "USA and China",
      "B": "USA and USSR",
      "C": "UK and Germany",
      "D": "France and Russia"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq763",
    "question": "Which country first gave women the right to vote?",
    "answers": {
      "A": "Australia",
      "B": "UK",
      "C": "New Zealand",
      "D": "USA"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq764",
    "question": "Who was the last pharaoh of ancient Egypt?",
    "answers": {
      "A": "Nefertiti",
      "B": "Cleopatra VII",
      "C": "Hatshepsut",
      "D": "Tutankhamun"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq765",
    "question": "The D-Day landings took place in which country?",
    "answers": {
      "A": "Belgium",
      "B": "Netherlands",
      "C": "France",
      "D": "Germany"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq766",
    "question": "Which ancient wonder was located in Alexandria?",
    "answers": {
      "A": "Hanging Gardens",
      "B": "Colossus",
      "C": "Temple of Artemis",
      "D": "Lighthouse"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq767",
    "question": "Napoleon Bonaparte was exiled to which island after his final defeat?",
    "answers": {
      "A": "Elba",
      "B": "Corsica",
      "C": "Saint Helena",
      "D": "Sardinia"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq768",
    "question": "The Great Wall of China was primarily built to defend against which people?",
    "answers": {
      "A": "Persians",
      "B": "Mongols",
      "C": "Japanese",
      "D": "Russians"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq769",
    "question": "Which country hosted the 2016 Summer Olympics?",
    "answers": {
      "A": "Argentina",
      "B": "Mexico",
      "C": "Brazil",
      "D": "Colombia"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq770",
    "question": "In football, how many players are on the pitch per team?",
    "answers": {
      "A": "10",
      "B": "11",
      "C": "12",
      "D": "13"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq771",
    "question": "Which country has won the most FIFA World Cups?",
    "answers": {
      "A": "Germany",
      "B": "Argentina",
      "C": "Italy",
      "D": "Brazil"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq772",
    "question": "In tennis, what is the term for a score of 40-40?",
    "answers": {
      "A": "Tie",
      "B": "Deuce",
      "C": "Love",
      "D": "Fault"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq773",
    "question": "The Tour de France is primarily a race involving which sport?",
    "answers": {
      "A": "Running",
      "B": "Swimming",
      "C": "Cycling",
      "D": "Triathlon"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq774",
    "question": "How many rings are on the Olympic flag?",
    "answers": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq775",
    "question": "In basketball, how many points is a shot worth from beyond the arc?",
    "answers": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "1"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq776",
    "question": "Which country invented the sport of rugby?",
    "answers": {
      "A": "Scotland",
      "B": "Australia",
      "C": "New Zealand",
      "D": "England"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq777",
    "question": "The Masters golf tournament is held annually in which US state?",
    "answers": {
      "A": "Florida",
      "B": "Georgia",
      "C": "South Carolina",
      "D": "Texas"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq778",
    "question": "How many players are on a cricket team?",
    "answers": {
      "A": "9",
      "B": "10",
      "C": "11",
      "D": "12"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq779",
    "question": "Which boxer was known as 'The Greatest'?",
    "answers": {
      "A": "Joe Frazier",
      "B": "George Foreman",
      "C": "Mike Tyson",
      "D": "Muhammad Ali"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq780",
    "question": "In which sport would you perform a slam dunk?",
    "answers": {
      "A": "Volleyball",
      "B": "Basketball",
      "C": "Handball",
      "D": "Netball"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq781",
    "question": "Which country won the first ever Rugby World Cup in 1987?",
    "answers": {
      "A": "Australia",
      "B": "England",
      "C": "New Zealand",
      "D": "South Africa"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq782",
    "question": "Usain Bolt is from which country?",
    "answers": {
      "A": "Trinidad and Tobago",
      "B": "Barbados",
      "C": "Jamaica",
      "D": "Bahamas"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq783",
    "question": "Which artist had a 2009 hit with 'Poker Face'?",
    "answers": {
      "A": "Katy Perry",
      "B": "Beyonce",
      "C": "Rihanna",
      "D": "Lady Gaga"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq784",
    "question": "Which band performed 'Bohemian Rhapsody'?",
    "answers": {
      "A": "Led Zeppelin",
      "B": "The Rolling Stones",
      "C": "Queen",
      "D": "The Who"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq785",
    "question": "Elvis Presley was nicknamed 'The King of...' what?",
    "answers": {
      "A": "Soul",
      "B": "Rock and Roll",
      "C": "Pop",
      "D": "Blues"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq786",
    "question": "Which instrument does a pianist play?",
    "answers": {
      "A": "Harpsichord",
      "B": "Organ",
      "C": "Piano",
      "D": "Clavichord"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq787",
    "question": "Glastonbury Festival takes place in which English county?",
    "answers": {
      "A": "Devon",
      "B": "Cornwall",
      "C": "Somerset",
      "D": "Wiltshire"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq788",
    "question": "Which music genre originated in Jamaica in the late 1960s?",
    "answers": {
      "A": "Calypso",
      "B": "Ska",
      "C": "Reggae",
      "D": "Dancehall"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq789",
    "question": "Michael Jackson's 'Thriller' was released in which year?",
    "answers": {
      "A": "1980",
      "B": "1981",
      "C": "1982",
      "D": "1983"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq790",
    "question": "Which British band released 'Wonderwall' in 1995?",
    "answers": {
      "A": "Blur",
      "B": "Oasis",
      "C": "Pulp",
      "D": "Suede"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq791",
    "question": "The Grammy Award is given for excellence in which field?",
    "answers": {
      "A": "Film",
      "B": "Television",
      "C": "Music",
      "D": "Theatre"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq792",
    "question": "Which singer is known as the 'Queen of Pop'?",
    "answers": {
      "A": "Mariah Carey",
      "B": "Celine Dion",
      "C": "Whitney Houston",
      "D": "Madonna"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq793",
    "question": "How many strings does a standard guitar have?",
    "answers": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq794",
    "question": "Which film won the first ever Academy Award for Best Picture?",
    "answers": {
      "A": "All Quiet on the Western Front",
      "B": "Wings",
      "C": "The Jazz Singer",
      "D": "Ben-Hur"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq795",
    "question": "The movie 'The Godfather' was based on a novel by whom?",
    "answers": {
      "A": "Stephen King",
      "B": "Mario Puzo",
      "C": "Francis Ford Coppola",
      "D": "Elmore Leonard"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq796",
    "question": "Which actor played Jack Sparrow in Pirates of the Caribbean?",
    "answers": {
      "A": "Orlando Bloom",
      "B": "Geoffrey Rush",
      "C": "Johnny Depp",
      "D": "Javier Bardem"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq797",
    "question": "Who directed the film 'Jurassic Park'?",
    "answers": {
      "A": "James Cameron",
      "B": "George Lucas",
      "C": "Steven Spielberg",
      "D": "Ron Howard"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq798",
    "question": "Which Disney film features the song 'Let It Go'?",
    "answers": {
      "A": "Tangled",
      "B": "Brave",
      "C": "Moana",
      "D": "Frozen"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq799",
    "question": "In which film does the character Hannibal Lecter first appear?",
    "answers": {
      "A": "Red Dragon",
      "B": "The Silence of the Lambs",
      "C": "Manhunter",
      "D": "Hannibal"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq800",
    "question": "The TV show 'Breaking Bad' is set in which US city?",
    "answers": {
      "A": "Phoenix",
      "B": "Denver",
      "C": "Albuquerque",
      "D": "El Paso"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq801",
    "question": "Which actor played Tony Stark / Iron Man in the Marvel Cinematic Universe?",
    "answers": {
      "A": "Chris Evans",
      "B": "Robert Downey Jr.",
      "C": "Chris Hemsworth",
      "D": "Mark Ruffalo"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq802",
    "question": "How many seasons does the TV show 'Game of Thrones' have?",
    "answers": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq803",
    "question": "Which film is set on the spaceship Nostromo?",
    "answers": {
      "A": "2001: A Space Odyssey",
      "B": "Predator",
      "C": "Interstellar",
      "D": "Alien"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq804",
    "question": "Who played the Terminator in the original 1984 film?",
    "answers": {
      "A": "Sylvester Stallone",
      "B": "Bruce Willis",
      "C": "Arnold Schwarzenegger",
      "D": "Dolph Lundgren"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq805",
    "question": "The phrase 'You talking to me?' is from which film?",
    "answers": {
      "A": "Goodfellas",
      "B": "Raging Bull",
      "C": "Taxi Driver",
      "D": "The Godfather"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq806",
    "question": "Which country produces Champagne?",
    "answers": {
      "A": "Italy",
      "B": "Spain",
      "C": "Germany",
      "D": "France"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq807",
    "question": "What type of pastry is used to make a croissant?",
    "answers": {
      "A": "Shortcrust",
      "B": "Choux",
      "C": "Filo",
      "D": "Laminated/puff"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq808",
    "question": "Sushi originates from which country?",
    "answers": {
      "A": "China",
      "B": "South Korea",
      "C": "Japan",
      "D": "Vietnam"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq809",
    "question": "Which spice is derived from the Crocus flower?",
    "answers": {
      "A": "Turmeric",
      "B": "Saffron",
      "C": "Paprika",
      "D": "Cardamom"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq810",
    "question": "What is the main ingredient in guacamole?",
    "answers": {
      "A": "Tomato",
      "B": "Lime",
      "C": "Onion",
      "D": "Avocado"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq811",
    "question": "Which country is the world's largest producer of coffee?",
    "answers": {
      "A": "Colombia",
      "B": "Ethiopia",
      "C": "Vietnam",
      "D": "Brazil"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq812",
    "question": "Haggis is the national dish of which country?",
    "answers": {
      "A": "Ireland",
      "B": "Wales",
      "C": "Scotland",
      "D": "Iceland"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq813",
    "question": "What is the main grain used in beer production?",
    "answers": {
      "A": "Wheat",
      "B": "Rye",
      "C": "Barley",
      "D": "Oats"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq814",
    "question": "A 'Margherita' pizza traditionally has which toppings?",
    "answers": {
      "A": "Pepperoni, olives, cheese",
      "B": "Tomato, mozzarella, basil",
      "C": "Ham, pineapple, cheese",
      "D": "Mushrooms, peppers, onions"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq815",
    "question": "Which fruit is used to make wine?",
    "answers": {
      "A": "Apple",
      "B": "Cherry",
      "C": "Grapes",
      "D": "Plum"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq816",
    "question": "What gives red wine its colour?",
    "answers": {
      "A": "Tannins",
      "B": "Grape juice",
      "C": "Grape skins",
      "D": "Yeast"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq817",
    "question": "Which country is famous for its Gouda cheese?",
    "answers": {
      "A": "France",
      "B": "Belgium",
      "C": "Netherlands",
      "D": "Denmark"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq818",
    "question": "What is sake brewed from?",
    "answers": {
      "A": "Barley",
      "B": "Rice",
      "C": "Corn",
      "D": "Wheat"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq819",
    "question": "Stilton is a variety of which type of food?",
    "answers": {
      "A": "Bread",
      "B": "Meat",
      "C": "Cheese",
      "D": "Wine"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq820",
    "question": "Which cocktail is made with vodka, tomato juice and spices?",
    "answers": {
      "A": "Screwdriver",
      "B": "Cosmopolitan",
      "C": "Bloody Mary",
      "D": "Harvey Wallbanger"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq821",
    "question": "What is the main ingredient in hummus?",
    "answers": {
      "A": "Lentils",
      "B": "Chickpeas",
      "C": "Broad beans",
      "D": "Black beans"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq822",
    "question": "Which country is the largest producer of olive oil?",
    "answers": {
      "A": "Italy",
      "B": "Greece",
      "C": "Tunisia",
      "D": "Spain"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq823",
    "question": "Which author wrote 'Pride and Prejudice'?",
    "answers": {
      "A": "Charlotte Bronte",
      "B": "Jane Austen",
      "C": "George Eliot",
      "D": "Emily Bronte"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq824",
    "question": "In Shakespeare's 'Romeo and Juliet', what are the two feuding families?",
    "answers": {
      "A": "Capulet and Montague",
      "B": "Verona and Mantua",
      "C": "Capulet and Benvolio",
      "D": "Montague and Tybalt"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq825",
    "question": "Who wrote '1984'?",
    "answers": {
      "A": "Aldous Huxley",
      "B": "Ray Bradbury",
      "C": "George Orwell",
      "D": "Arthur Koestler"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq826",
    "question": "What is the name of the whale in 'Moby-Dick'?",
    "answers": {
      "A": "Moby",
      "B": "Leviathan",
      "C": "The White Whale",
      "D": "Moby Dick is the whale's name"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq827",
    "question": "J.K. Rowling published Harry Potter and the Philosopher's Stone in which year?",
    "answers": {
      "A": "1995",
      "B": "1996",
      "C": "1997",
      "D": "1998"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq828",
    "question": "Which fictional detective lived at 221B Baker Street?",
    "answers": {
      "A": "Hercule Poirot",
      "B": "Miss Marple",
      "C": "Sherlock Holmes",
      "D": "Inspector Morse"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq829",
    "question": "Franz Kafka wrote which novel featuring a man who wakes as an insect?",
    "answers": {
      "A": "The Trial",
      "B": "Amerika",
      "C": "The Castle",
      "D": "The Metamorphosis"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq830",
    "question": "Which author created the character Atticus Finch?",
    "answers": {
      "A": "Truman Capote",
      "B": "Harper Lee",
      "C": "John Steinbeck",
      "D": "William Faulkner"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq831",
    "question": "Don Quixote was written by which author?",
    "answers": {
      "A": "Gabriel Garcia Marquez",
      "B": "Pablo Neruda",
      "C": "Miguel de Cervantes",
      "D": "Lope de Vega"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq832",
    "question": "What is the first book of the Bible?",
    "answers": {
      "A": "Exodus",
      "B": "Psalms",
      "C": "Leviticus",
      "D": "Genesis"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq833",
    "question": "Which Dickens novel features the character Ebenezer Scrooge?",
    "answers": {
      "A": "Oliver Twist",
      "B": "Great Expectations",
      "C": "A Christmas Carol",
      "D": "David Copperfield"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq834",
    "question": "The Booker Prize is awarded annually for fiction written in which language?",
    "answers": {
      "A": "French",
      "B": "English",
      "C": "Spanish",
      "D": "German"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq835",
    "question": "How many plays did Shakespeare write?",
    "answers": {
      "A": "27",
      "B": "37",
      "C": "47",
      "D": "57"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq836",
    "question": "Which element is represented by the symbol 'Fe'?",
    "answers": {
      "A": "Fluorine",
      "B": "Iron",
      "C": "Francium",
      "D": "Fermium"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq837",
    "question": "The Eiffel Tower is located in which city?",
    "answers": {
      "A": "Brussels",
      "B": "Lyon",
      "C": "Paris",
      "D": "Marseille"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq838",
    "question": "What does 'www' stand for in a website address?",
    "answers": {
      "A": "World Wide Web",
      "B": "Western Web Works",
      "C": "Wireless World Web",
      "D": "Web Wide World"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq839",
    "question": "Which company created the iPhone?",
    "answers": {
      "A": "Samsung",
      "B": "Google",
      "C": "Apple",
      "D": "Microsoft"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq840",
    "question": "How many sides does a hexagon have?",
    "answers": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "8"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq841",
    "question": "In Greek mythology, who flew too close to the sun?",
    "answers": {
      "A": "Prometheus",
      "B": "Daedalus",
      "C": "Hermes",
      "D": "Icarus"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq842",
    "question": "What is the largest planet in our solar system?",
    "answers": {
      "A": "Saturn",
      "B": "Neptune",
      "C": "Jupiter",
      "D": "Uranus"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq843",
    "question": "Which currency is used in Japan?",
    "answers": {
      "A": "Won",
      "B": "Yuan",
      "C": "Yen",
      "D": "Ringgit"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq844",
    "question": "How many continents are there on Earth?",
    "answers": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "8"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq845",
    "question": "What is the phobia of spiders called?",
    "answers": {
      "A": "Arachnophobia",
      "B": "Acrophobia",
      "C": "Agoraphobia",
      "D": "Ophidiophobia"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq846",
    "question": "Which gas makes up most of the air we breathe (by volume)?",
    "answers": {
      "A": "Oxygen",
      "B": "Carbon dioxide",
      "C": "Nitrogen",
      "D": "Hydrogen"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq847",
    "question": "What do bees collect from flowers to make honey?",
    "answers": {
      "A": "Pollen only",
      "B": "Nectar",
      "C": "Resin",
      "D": "Sap"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq848",
    "question": "A group of lions is called a what?",
    "answers": {
      "A": "Pack",
      "B": "Herd",
      "C": "Pride",
      "D": "Colony"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq849",
    "question": "Which planet is closest to the Sun?",
    "answers": {
      "A": "Venus",
      "B": "Earth",
      "C": "Mars",
      "D": "Mercury"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq850",
    "question": "What is two to the power of ten?",
    "answers": {
      "A": "512",
      "B": "1024",
      "C": "2048",
      "D": "256"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq851",
    "question": "The Louvre museum is located in which city?",
    "answers": {
      "A": "Rome",
      "B": "Madrid",
      "C": "London",
      "D": "Paris"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq852",
    "question": "Which US state has the most people?",
    "answers": {
      "A": "Texas",
      "B": "New York",
      "C": "Florida",
      "D": "California"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq853",
    "question": "The Great Barrier Reef is located off the coast of which country?",
    "answers": {
      "A": "New Zealand",
      "B": "Australia",
      "C": "Philippines",
      "D": "Indonesia"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq854",
    "question": "Which language is spoken in Brazil?",
    "answers": {
      "A": "Spanish",
      "B": "English",
      "C": "Portuguese",
      "D": "French"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq855",
    "question": "How many days are in a leap year?",
    "answers": {
      "A": "364",
      "B": "365",
      "C": "366",
      "D": "367"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq856",
    "question": "What shape is a stop sign?",
    "answers": {
      "A": "Circle",
      "B": "Hexagon",
      "C": "Octagon",
      "D": "Pentagon"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq857",
    "question": "Which country gifted the Statue of Liberty to the USA?",
    "answers": {
      "A": "UK",
      "B": "France",
      "C": "Italy",
      "D": "Spain"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq858",
    "question": "Which is the only mammal capable of true flight?",
    "answers": {
      "A": "Flying squirrel",
      "B": "Sugar glider",
      "C": "Bat",
      "D": "Colugos"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq859",
    "question": "How many zeros are in one million?",
    "answers": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "8"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq860",
    "question": "The tallest building in the world (as of 2024) is in which city?",
    "answers": {
      "A": "Shanghai",
      "B": "New York",
      "C": "Dubai",
      "D": "Kuala Lumpur"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq861",
    "question": "What is the name of the largest ocean current system?",
    "answers": {
      "A": "Gulf Stream",
      "B": "Thermohaline circulation",
      "C": "El Nino",
      "D": "Pacific Gyre"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq862",
    "question": "Which country has the longest coastline in the world?",
    "answers": {
      "A": "Russia",
      "B": "USA",
      "C": "Norway",
      "D": "Canada"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq863",
    "question": "The philosopher Socrates was from which ancient city?",
    "answers": {
      "A": "Sparta",
      "B": "Corinth",
      "C": "Athens",
      "D": "Thebes"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq864",
    "question": "Mahatma Gandhi led independence movement in which country?",
    "answers": {
      "A": "Pakistan",
      "B": "India",
      "C": "Bangladesh",
      "D": "Ceylon"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq865",
    "question": "In which decade was the internet made publicly available?",
    "answers": {
      "A": "1970s",
      "B": "1980s",
      "C": "1990s",
      "D": "2000s"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq866",
    "question": "What is the national animal of Scotland?",
    "answers": {
      "A": "Stag",
      "B": "Lion",
      "C": "Unicorn",
      "D": "Eagle"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq867",
    "question": "Which TV show features the Stark family?",
    "answers": {
      "A": "The Crown",
      "B": "Peaky Blinders",
      "C": "Game of Thrones",
      "D": "Vikings"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq868",
    "question": "A dodecagon has how many sides?",
    "answers": {
      "A": "10",
      "B": "11",
      "C": "12",
      "D": "13"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq869",
    "question": "Which country's flag features a maple leaf?",
    "answers": {
      "A": "Australia",
      "B": "New Zealand",
      "C": "Ireland",
      "D": "Canada"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq870",
    "question": "What does the 'E' stand for in E=mc²?",
    "answers": {
      "A": "Electrons",
      "B": "Entropy",
      "C": "Energy",
      "D": "Electromagnetism"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq871",
    "question": "Which country invented paper?",
    "answers": {
      "A": "Egypt",
      "B": "Greece",
      "C": "China",
      "D": "India"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq872",
    "question": "The Pyramids of Giza are located near which city?",
    "answers": {
      "A": "Luxor",
      "B": "Alexandria",
      "C": "Aswan",
      "D": "Cairo"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq873",
    "question": "What fraction of the Earth is covered by water?",
    "answers": {
      "A": "About 50%",
      "B": "About 61%",
      "C": "About 71%",
      "D": "About 81%"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq874",
    "question": "Which famous scientist was born on Pi Day (March 14)?",
    "answers": {
      "A": "Isaac Newton",
      "B": "Nikola Tesla",
      "C": "Stephen Hawking",
      "D": "Albert Einstein"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq875",
    "question": "Which sport uses a shuttlecock?",
    "answers": {
      "A": "Squash",
      "B": "Badminton",
      "C": "Racquetball",
      "D": "Pickleball"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq876",
    "question": "In which year did the first iPhone launch?",
    "answers": {
      "A": "2005",
      "B": "2006",
      "C": "2007",
      "D": "2008"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq877",
    "question": "Which programming language shares its name with a type of coffee?",
    "answers": {
      "A": "Python",
      "B": "Ruby",
      "C": "Java",
      "D": "Perl"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq878",
    "question": "What is the most spoken language in the world by number of native speakers?",
    "answers": {
      "A": "English",
      "B": "Spanish",
      "C": "Hindi",
      "D": "Mandarin Chinese"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq879",
    "question": "Which organ is affected by cirrhosis?",
    "answers": {
      "A": "Kidney",
      "B": "Heart",
      "C": "Liver",
      "D": "Lung"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq880",
    "question": "What is the tallest mountain in the world?",
    "answers": {
      "A": "K2",
      "B": "Kangchenjunga",
      "C": "Lhotse",
      "D": "Mount Everest"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq881",
    "question": "Which vitamin is produced by the skin in sunlight?",
    "answers": {
      "A": "Vitamin A",
      "B": "Vitamin B12",
      "C": "Vitamin C",
      "D": "Vitamin D"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq882",
    "question": "What is the largest internal organ in the human body?",
    "answers": {
      "A": "Heart",
      "B": "Lungs",
      "C": "Liver",
      "D": "Brain"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq883",
    "question": "Which gas is commonly called 'laughing gas'?",
    "answers": {
      "A": "Carbon dioxide",
      "B": "Nitrous oxide",
      "C": "Helium",
      "D": "Nitrogen"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq884",
    "question": "The speed of sound at sea level is approximately how many km/h?",
    "answers": {
      "A": "900 km/h",
      "B": "1100 km/h",
      "C": "1234 km/h",
      "D": "1500 km/h"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq885",
    "question": "What is the capital of Canada?",
    "answers": {
      "A": "Toronto",
      "B": "Montreal",
      "C": "Vancouver",
      "D": "Ottawa"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq886",
    "question": "Which country has the longest land border with Russia?",
    "answers": {
      "A": "China",
      "B": "Kazakhstan",
      "C": "Mongolia",
      "D": "Finland"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq887",
    "question": "The Amazon River flows into which ocean?",
    "answers": {
      "A": "Pacific",
      "B": "Caribbean Sea",
      "C": "Atlantic",
      "D": "Gulf of Mexico"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq888",
    "question": "Which country has the most UNESCO World Heritage Sites?",
    "answers": {
      "A": "France",
      "B": "China",
      "C": "Italy",
      "D": "Spain"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq889",
    "question": "What is pi (approximately) to two decimal places?",
    "answers": {
      "A": "3.12",
      "B": "3.14",
      "C": "3.16",
      "D": "3.18"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq890",
    "question": "How many keys are on a standard piano?",
    "answers": {
      "A": "76",
      "B": "80",
      "C": "84",
      "D": "88"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq891",
    "question": "Which artist painted 'The Starry Night'?",
    "answers": {
      "A": "Paul Gauguin",
      "B": "Claude Monet",
      "C": "Vincent van Gogh",
      "D": "Paul Cezanne"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq892",
    "question": "Which planet rotates on its side?",
    "answers": {
      "A": "Neptune",
      "B": "Saturn",
      "C": "Uranus",
      "D": "Venus"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq893",
    "question": "Which famous ship sank on its maiden voyage in 1912?",
    "answers": {
      "A": "Lusitania",
      "B": "Olympic",
      "C": "Britannic",
      "D": "Titanic"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq894",
    "question": "In the human body, where are red blood cells produced?",
    "answers": {
      "A": "Liver",
      "B": "Spleen",
      "C": "Bone marrow",
      "D": "Kidneys"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq895",
    "question": "Which war was fought between the North and South in the United States?",
    "answers": {
      "A": "The Revolutionary War",
      "B": "The Civil War",
      "C": "The War of 1812",
      "D": "The Spanish-American War"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq896",
    "question": "What is the currency of India?",
    "answers": {
      "A": "Rupee",
      "B": "Taka",
      "C": "Lira",
      "D": "Baht"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq897",
    "question": "Who wrote 'The Canterbury Tales'?",
    "answers": {
      "A": "William Shakespeare",
      "B": "John Milton",
      "C": "Geoffrey Chaucer",
      "D": "Edmund Spenser"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq898",
    "question": "Which country is the birthplace of the Olympic Games?",
    "answers": {
      "A": "Italy",
      "B": "Greece",
      "C": "Turkey",
      "D": "France"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq899",
    "question": "How many players are on a standard volleyball team on court?",
    "answers": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "8"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq900",
    "question": "What is the chemical symbol for sodium?",
    "answers": {
      "A": "So",
      "B": "Sd",
      "C": "Na",
      "D": "Nm"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq901",
    "question": "Which US president appears on the $100 bill?",
    "answers": {
      "A": "Abraham Lincoln",
      "B": "George Washington",
      "C": "Benjamin Franklin",
      "D": "Thomas Jefferson"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq902",
    "question": "A group of crows is called a what?",
    "answers": {
      "A": "Flock",
      "B": "Murder",
      "C": "Colony",
      "D": "Gaggle"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq903",
    "question": "Which vitamin is most associated with eyesight?",
    "answers": {
      "A": "Vitamin A",
      "B": "Vitamin B",
      "C": "Vitamin C",
      "D": "Vitamin E"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq904",
    "question": "Who painted the Sistine Chapel ceiling?",
    "answers": {
      "A": "Leonardo da Vinci",
      "B": "Raphael",
      "C": "Donatello",
      "D": "Michelangelo"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq905",
    "question": "What is the capital of Argentina?",
    "answers": {
      "A": "Montevideo",
      "B": "Santiago",
      "C": "Buenos Aires",
      "D": "Lima"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq906",
    "question": "Which monarch was known as the 'Virgin Queen'?",
    "answers": {
      "A": "Mary Queen of Scots",
      "B": "Queen Victoria",
      "C": "Queen Elizabeth I",
      "D": "Queen Anne"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq907",
    "question": "What is the main component of the Sun?",
    "answers": {
      "A": "Liquid lava",
      "B": "Helium plasma",
      "C": "Hydrogen plasma",
      "D": "Carbon gas"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq908",
    "question": "Which country is home to the Taj Mahal?",
    "answers": {
      "A": "Pakistan",
      "B": "Bangladesh",
      "C": "India",
      "D": "Nepal"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq909",
    "question": "How many planets are in our solar system?",
    "answers": {
      "A": "7",
      "B": "8",
      "C": "9",
      "D": "10"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq910",
    "question": "Which of these is NOT a primary colour (in traditional painting)?",
    "answers": {
      "A": "Red",
      "B": "Blue",
      "C": "Green",
      "D": "Yellow"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq911",
    "question": "In computing, what does CPU stand for?",
    "answers": {
      "A": "Central Processing Unit",
      "B": "Computer Power Unit",
      "C": "Core Processing Unit",
      "D": "Coded Program Utility"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq912",
    "question": "Which country gave us the word 'sauna'?",
    "answers": {
      "A": "Sweden",
      "B": "Norway",
      "C": "Finland",
      "D": "Iceland"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq913",
    "question": "What is the smallest prime number?",
    "answers": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq914",
    "question": "Which country has a flag with just one colour and one symbol (a cedar tree)?",
    "answers": {
      "A": "Jordan",
      "B": "Lebanon",
      "C": "Cyprus",
      "D": "Bahrain"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq915",
    "question": "Who invented the telephone?",
    "answers": {
      "A": "Thomas Edison",
      "B": "Nikola Tesla",
      "C": "Alexander Graham Bell",
      "D": "Guglielmo Marconi"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq916",
    "question": "How many sides does a pentagon have?",
    "answers": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq917",
    "question": "The battle of Waterloo took place in which modern-day country?",
    "answers": {
      "A": "France",
      "B": "Netherlands",
      "C": "Belgium",
      "D": "Germany"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq918",
    "question": "What is the most widely practiced religion in the world?",
    "answers": {
      "A": "Islam",
      "B": "Hinduism",
      "C": "Christianity",
      "D": "Buddhism"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq919",
    "question": "A horse with a mix of white and another colour coat is called what?",
    "answers": {
      "A": "Roan",
      "B": "Pinto",
      "C": "Bay",
      "D": "Dun"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq920",
    "question": "Which country is home to the Serengeti National Park?",
    "answers": {
      "A": "Kenya",
      "B": "South Africa",
      "C": "Tanzania",
      "D": "Botswana"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq921",
    "question": "Which country is home to the ancient city of Petra?",
    "answers": {
      "A": "Israel",
      "B": "Jordan",
      "C": "Saudi Arabia",
      "D": "Lebanon"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq922",
    "question": "What is the term for a baby kangaroo?",
    "answers": {
      "A": "Cub",
      "B": "Pup",
      "C": "Joey",
      "D": "Kit"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq923",
    "question": "Which famous wall runs across northern England?",
    "answers": {
      "A": "Offa's Dyke",
      "B": "Antonine Wall",
      "C": "Hardian's Wall",
      "D": "Hadrian's Wall"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq924",
    "question": "Who wrote 'The Divine Comedy'?",
    "answers": {
      "A": "Petrarch",
      "B": "Boccaccio",
      "C": "Dante Alighieri",
      "D": "Virgil"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq925",
    "question": "What is the rarest blood type?",
    "answers": {
      "A": "A negative",
      "B": "B negative",
      "C": "O negative",
      "D": "AB negative"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq926",
    "question": "The Great Sphinx of Giza has the head of what?",
    "answers": {
      "A": "A lion",
      "B": "A pharaoh",
      "C": "A ram",
      "D": "A falcon"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq927",
    "question": "Which US state is known as the 'Sunshine State'?",
    "answers": {
      "A": "California",
      "B": "Arizona",
      "C": "Florida",
      "D": "Hawaii"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq928",
    "question": "What is the national sport of Japan?",
    "answers": {
      "A": "Judo",
      "B": "Karate",
      "C": "Baseball",
      "D": "Sumo"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq929",
    "question": "Which French artist is famous for painting ballerinas?",
    "answers": {
      "A": "Edouard Manet",
      "B": "Paul Gauguin",
      "C": "Edgar Degas",
      "D": "Henri Matisse"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq930",
    "question": "What is the longest bone in the human body?",
    "answers": {
      "A": "Humerus",
      "B": "Tibia",
      "C": "Femur",
      "D": "Radius"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq931",
    "question": "The Nobel Peace Prize is awarded in which city?",
    "answers": {
      "A": "Stockholm",
      "B": "Copenhagen",
      "C": "Helsinki",
      "D": "Oslo"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq932",
    "question": "What is the hardest rock (geologically)?",
    "answers": {
      "A": "Granite",
      "B": "Obsidian",
      "C": "Basalt",
      "D": "Quartzite"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq933",
    "question": "In which country was the game of chess invented?",
    "answers": {
      "A": "Persia",
      "B": "China",
      "C": "India",
      "D": "Arabia"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq934",
    "question": "Which ocean is the smallest in the world?",
    "answers": {
      "A": "Indian",
      "B": "Southern",
      "C": "Atlantic",
      "D": "Arctic"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq935",
    "question": "Mandela served as President of South Africa from 1994 to which year?",
    "answers": {
      "A": "1997",
      "B": "1999",
      "C": "2001",
      "D": "2003"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq936",
    "question": "Which chemical element is a liquid at room temperature (besides mercury)?",
    "answers": {
      "A": "Phosphorus",
      "B": "Gallium",
      "C": "Bromine",
      "D": "Cesium"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq937",
    "question": "How many time zones does Russia span?",
    "answers": {
      "A": "9",
      "B": "10",
      "C": "11",
      "D": "12"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq938",
    "question": "What is the name of the largest moon of Saturn?",
    "answers": {
      "A": "Io",
      "B": "Europa",
      "C": "Ganymede",
      "D": "Titan"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq939",
    "question": "The word 'robot' originates from which language?",
    "answers": {
      "A": "German",
      "B": "Czech",
      "C": "Polish",
      "D": "Slovak"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq940",
    "question": "Which Hitchcock film features a shower scene that became iconic?",
    "answers": {
      "A": "Vertigo",
      "B": "The Birds",
      "C": "Psycho",
      "D": "Rear Window"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq941",
    "question": "What is the collective noun for a group of owls?",
    "answers": {
      "A": "A gaggle",
      "B": "A parliament",
      "C": "A murder",
      "D": "A shrewdness"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq942",
    "question": "Which two elements make up water?",
    "answers": {
      "A": "Hydrogen and Nitrogen",
      "B": "Oxygen and Nitrogen",
      "C": "Hydrogen and Oxygen",
      "D": "Helium and Oxygen"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq943",
    "question": "Which continent has the most countries?",
    "answers": {
      "A": "Asia",
      "B": "South America",
      "C": "Africa",
      "D": "Europe"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq944",
    "question": "The Colosseum is located in which city?",
    "answers": {
      "A": "Naples",
      "B": "Milan",
      "C": "Florence",
      "D": "Rome"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq945",
    "question": "Which was the first country to reach the South Pole?",
    "answers": {
      "A": "UK",
      "B": "USA",
      "C": "Norway",
      "D": "Sweden"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq946",
    "question": "In music, what does 'fortissimo' mean?",
    "answers": {
      "A": "Very slow",
      "B": "Very quiet",
      "C": "Very loud",
      "D": "Very fast"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq947",
    "question": "Which country is home to the Fjords?",
    "answers": {
      "A": "Sweden",
      "B": "Denmark",
      "C": "Iceland",
      "D": "Norway"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq948",
    "question": "Canine teeth are also known as what?",
    "answers": {
      "A": "Molars",
      "B": "Incisors",
      "C": "Fangs",
      "D": "Bicuspids"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq949",
    "question": "Which letter is worth 10 points in Scrabble?",
    "answers": {
      "A": "Q",
      "B": "Z",
      "C": "X",
      "D": "J"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq950",
    "question": "What is the most visited city in the world (by international tourists)?",
    "answers": {
      "A": "Paris",
      "B": "Bangkok",
      "C": "London",
      "D": "Dubai"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq951",
    "question": "Which country has the world's oldest monarchy still in existence?",
    "answers": {
      "A": "UK",
      "B": "Sweden",
      "C": "Japan",
      "D": "Denmark"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq952",
    "question": "What is the name of the layer of the atmosphere closest to Earth?",
    "answers": {
      "A": "Stratosphere",
      "B": "Mesosphere",
      "C": "Troposphere",
      "D": "Thermosphere"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq953",
    "question": "How many teeth does an adult human have (including wisdom teeth)?",
    "answers": {
      "A": "28",
      "B": "30",
      "C": "32",
      "D": "34"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq954",
    "question": "What is the capital of Turkey?",
    "answers": {
      "A": "Istanbul",
      "B": "Ankara",
      "C": "Izmir",
      "D": "Bursa"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq955",
    "question": "Which sport is played at Wimbledon?",
    "answers": {
      "A": "Cricket",
      "B": "Golf",
      "C": "Badminton",
      "D": "Tennis"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq956",
    "question": "What does DNA do in cells?",
    "answers": {
      "A": "Carries oxygen",
      "B": "Stores genetic information",
      "C": "Produces energy",
      "D": "Digests nutrients"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq957",
    "question": "Which country has the second largest population in the world?",
    "answers": {
      "A": "China",
      "B": "USA",
      "C": "India",
      "D": "Indonesia"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq958",
    "question": "Big Ben is the nickname for the bell in which tower?",
    "answers": {
      "A": "Tower of London",
      "B": "Elizabeth Tower",
      "C": "Victoria Tower",
      "D": "Westminster Abbey"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq959",
    "question": "Which country has red and white as its flag colours (just those two)?",
    "answers": {
      "A": "Poland",
      "B": "Austria",
      "C": "Switzerland",
      "D": "All of the above"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq960",
    "question": "What is the name of the fairy in Peter Pan?",
    "answers": {
      "A": "Silvermist",
      "B": "Rosetta",
      "C": "Tinker Bell",
      "D": "Periwinkle"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq961",
    "question": "In which country is the Uffizi Gallery?",
    "answers": {
      "A": "Spain",
      "B": "France",
      "C": "Italy",
      "D": "Portugal"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq962",
    "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    "answers": {
      "A": "Mercury",
      "B": "Venus",
      "C": "Mars",
      "D": "Jupiter"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq963",
    "question": "Which element has the atomic number 1?",
    "answers": {
      "A": "Helium",
      "B": "Lithium",
      "C": "Hydrogen",
      "D": "Carbon"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq964",
    "question": "In 'The Simpsons', what is the name of Homer's neighbour?",
    "answers": {
      "A": "Ned Flanders",
      "B": "Ned Hardy",
      "C": "Ted Flanders",
      "D": "Rod Flanders"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq965",
    "question": "What is the fastest land animal?",
    "answers": {
      "A": "Pronghorn antelope",
      "B": "Lion",
      "C": "Cheetah",
      "D": "Springbok"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq966",
    "question": "Which country is known as the 'Pearl of the Indian Ocean'?",
    "answers": {
      "A": "Maldives",
      "B": "Sri Lanka",
      "C": "Seychelles",
      "D": "Mauritius"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq967",
    "question": "The monetary unit of China is called what?",
    "answers": {
      "A": "Won",
      "B": "Yen",
      "C": "Baht",
      "D": "Yuan"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq968",
    "question": "Who was the first President of the United States?",
    "answers": {
      "A": "Benjamin Franklin",
      "B": "John Adams",
      "C": "George Washington",
      "D": "Thomas Jefferson"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq969",
    "question": "A decagon has how many sides?",
    "answers": {
      "A": "8",
      "B": "9",
      "C": "10",
      "D": "11"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq970",
    "question": "What is the most common type of star in the Milky Way?",
    "answers": {
      "A": "Blue giant",
      "B": "Yellow dwarf",
      "C": "White dwarf",
      "D": "Red dwarf"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq971",
    "question": "In which year did humans first land on the Moon?",
    "answers": {
      "A": "1967",
      "B": "1968",
      "C": "1969",
      "D": "1970"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq972",
    "question": "What is the capital of Egypt?",
    "answers": {
      "A": "Alexandria",
      "B": "Luxor",
      "C": "Cairo",
      "D": "Giza"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq973",
    "question": "The Amazon river is in which continent?",
    "answers": {
      "A": "Africa",
      "B": "Asia",
      "C": "South America",
      "D": "North America"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq974",
    "question": "What is measured in Decibels?",
    "answers": {
      "A": "Light intensity",
      "B": "Sound intensity",
      "C": "Temperature",
      "D": "Pressure"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq975",
    "question": "How many letters are in the English alphabet?",
    "answers": {
      "A": "24",
      "B": "25",
      "C": "26",
      "D": "27"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq976",
    "question": "Which philosopher wrote 'The Republic'?",
    "answers": {
      "A": "Aristotle",
      "B": "Socrates",
      "C": "Plato",
      "D": "Epicurus"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq977",
    "question": "What is the largest species of shark?",
    "answers": {
      "A": "Great White Shark",
      "B": "Bull Shark",
      "C": "Whale Shark",
      "D": "Tiger Shark"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq978",
    "question": "Which country invented the printing press?",
    "answers": {
      "A": "China",
      "B": "Germany",
      "C": "Italy",
      "D": "France"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq979",
    "question": "What is the largest continent by area?",
    "answers": {
      "A": "Africa",
      "B": "North America",
      "C": "Antarctica",
      "D": "Asia"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq980",
    "question": "What term describes a word that reads the same forwards and backwards?",
    "answers": {
      "A": "Anagram",
      "B": "Oxymoron",
      "C": "Palindrome",
      "D": "Homophone"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq981",
    "question": "Mount Kilimanjaro is in which country?",
    "answers": {
      "A": "Kenya",
      "B": "Ethiopia",
      "C": "Uganda",
      "D": "Tanzania"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq982",
    "question": "Which country has the longest written constitution in the world?",
    "answers": {
      "A": "USA",
      "B": "Germany",
      "C": "India",
      "D": "Brazil"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq983",
    "question": "What is the main ingredient in falafel?",
    "answers": {
      "A": "Lentils",
      "B": "Chickpeas",
      "C": "Kidney beans",
      "D": "Peas"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq984",
    "question": "Which band released the album 'Dark Side of the Moon'?",
    "answers": {
      "A": "Led Zeppelin",
      "B": "The Doors",
      "C": "Pink Floyd",
      "D": "Deep Purple"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq985",
    "question": "How many metres in a kilometre?",
    "answers": {
      "A": "100",
      "B": "500",
      "C": "1000",
      "D": "10000"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq986",
    "question": "What does the term 'teetotaller' mean?",
    "answers": {
      "A": "Someone who drinks only tea",
      "B": "Someone who abstains from alcohol entirely",
      "C": "Someone who only drinks beer",
      "D": "Someone who drinks very little"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq987",
    "question": "What sport involves yelling 'FORE!'?",
    "answers": {
      "A": "Cricket",
      "B": "Golf",
      "C": "Tennis",
      "D": "Polo"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq988",
    "question": "Which country is Mount Fuji located in?",
    "answers": {
      "A": "China",
      "B": "Japan",
      "C": "South Korea",
      "D": "Nepal"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq989",
    "question": "The constellation Orion is named after a figure from which mythology?",
    "answers": {
      "A": "Roman",
      "B": "Norse",
      "C": "Egyptian",
      "D": "Greek"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq990",
    "question": "Which number is considered unlucky in many Western cultures?",
    "answers": {
      "A": "11",
      "B": "12",
      "C": "13",
      "D": "14"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq991",
    "question": "In which city is the Sagrada Familia located?",
    "answers": {
      "A": "Madrid",
      "B": "Seville",
      "C": "Valencia",
      "D": "Barcelona"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq992",
    "question": "Which country was the first to use paper money?",
    "answers": {
      "A": "Egypt",
      "B": "India",
      "C": "China",
      "D": "Persia"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq993",
    "question": "Bram Stoker's 'Dracula' is set primarily in which country?",
    "answers": {
      "A": "Bulgaria",
      "B": "Hungary",
      "C": "Romania",
      "D": "Slovakia"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq994",
    "question": "What is the most popular sport in the world by participation and viewership?",
    "answers": {
      "A": "Basketball",
      "B": "Cricket",
      "C": "Football (Soccer)",
      "D": "Tennis"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq995",
    "question": "Which country has the highest number of Nobel Prize winners per capita?",
    "answers": {
      "A": "USA",
      "B": "UK",
      "C": "Sweden",
      "D": "Switzerland"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq996",
    "question": "What is the Beaufort scale used to measure?",
    "answers": {
      "A": "Earthquakes",
      "B": "Wind speed",
      "C": "Ocean depth",
      "D": "Rainfall"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq997",
    "question": "Which is the only vowel not on the top row of a standard QWERTY keyboard?",
    "answers": {
      "A": "A",
      "B": "I",
      "C": "O",
      "D": "E"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq998",
    "question": "What is the capital of Iceland?",
    "answers": {
      "A": "Akureyri",
      "B": "Hafnarfjordur",
      "C": "Reykjavik",
      "D": "Selfoss"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq999",
    "question": "Which element is used in thermometers (traditionally)?",
    "answers": {
      "A": "Tin",
      "B": "Lead",
      "C": "Silver",
      "D": "Mercury"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1000",
    "question": "How many strings does a standard violin have?",
    "answers": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1001",
    "question": "In which country is the Kremlin located?",
    "answers": {
      "A": "Ukraine",
      "B": "Belarus",
      "C": "Russia",
      "D": "Kazakhstan"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1002",
    "question": "What is the name of the ship in which the Pilgrims sailed to America in 1620?",
    "answers": {
      "A": "Santa Maria",
      "B": "Mayflower",
      "C": "Golden Hind",
      "D": "Discovery"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1003",
    "question": "Which bird is the symbol of peace?",
    "answers": {
      "A": "Swan",
      "B": "Crane",
      "C": "White Dove",
      "D": "Albatross"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1004",
    "fact": "Canberra was purpose-built as the capital of Australia as a compromise between rival cities Sydney and Melbourne, and was officially named in 1913.",
    "question": "What is the capital city of Australia?",
    "answers": {
      "A": "Sydney",
      "B": "Melbourne",
      "C": "Canberra",
      "D": "Perth"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1005",
    "fact": "The Nile flows northward through northeastern Africa for approximately 6,650 km and has historically been considered the longest river in the world.",
    "question": "Which river is traditionally regarded as the longest in the world?",
    "answers": {
      "A": "Amazon",
      "B": "Nile",
      "C": "Yangtze",
      "D": "Mississippi"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1006",
    "fact": "Mount Everest sits on the border between Nepal and the Tibet Autonomous Region of China and stands at 8,848.86 metres above sea level.",
    "question": "Mount Everest lies on the border between Nepal and which other country?",
    "answers": {
      "A": "India",
      "B": "Bhutan",
      "C": "China",
      "D": "Pakistan"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1007",
    "fact": "The Pacific Ocean is the largest and deepest of Earth's oceans, covering more than 30% of the planet's surface.",
    "question": "Which is the largest ocean on Earth?",
    "answers": {
      "A": "Atlantic",
      "B": "Indian",
      "C": "Arctic",
      "D": "Pacific"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1008",
    "fact": "Russia shares land borders with 14 countries, more than any other nation tied with China.",
    "question": "How many countries share a land border with Russia?",
    "answers": {
      "A": "10",
      "B": "12",
      "C": "14",
      "D": "16"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1009",
    "fact": "Greenland is the world's largest island that is not a continent, covering approximately 2.16 million square kilometres.",
    "question": "What is the largest island in the world?",
    "answers": {
      "A": "New Guinea",
      "B": "Borneo",
      "C": "Madagascar",
      "D": "Greenland"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1010",
    "fact": "Lake Baikal in Siberia is the world's deepest lake, reaching depths of 1,642 metres, and contains about 20% of the world's unfrozen freshwater.",
    "question": "Which is the deepest lake in the world?",
    "answers": {
      "A": "Lake Tanganyika",
      "B": "Lake Baikal",
      "C": "Caspian Sea",
      "D": "Lake Superior"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1011",
    "fact": "Quito, Ecuador's capital, sits at an elevation of about 2,850 metres and is officially the highest official capital city in the world (La Paz is the seat of government but not the constitutional capital of Bolivia).",
    "question": "What is the capital of Ecuador?",
    "answers": {
      "A": "Guayaquil",
      "B": "Lima",
      "C": "Quito",
      "D": "La Paz"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1012",
    "fact": "The Danube flows through more countries than any other river, passing through or bordering 10 nations including Germany, Austria, Hungary and Romania.",
    "question": "Which European river flows through 10 countries, more than any other river in the world?",
    "answers": {
      "A": "Rhine",
      "B": "Volga",
      "C": "Danube",
      "D": "Elbe"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1013",
    "fact": "The Atacama Desert in northern Chile is the driest non-polar desert on Earth, with some weather stations having never recorded any rainfall.",
    "question": "The Atacama Desert, the driest non-polar desert in the world, is located primarily in which country?",
    "answers": {
      "A": "Peru",
      "B": "Bolivia",
      "C": "Argentina",
      "D": "Chile"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1014",
    "fact": "Vatican City is an independent city-state of just 0.49 square kilometres surrounded entirely by Rome, Italy.",
    "question": "What is the smallest country in the world by area?",
    "answers": {
      "A": "Monaco",
      "B": "San Marino",
      "C": "Vatican City",
      "D": "Liechtenstein"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1015",
    "fact": "The Ural Mountains, running roughly north-south through western Russia, are traditionally considered the boundary between Europe and Asia.",
    "question": "Which mountain range is traditionally considered to divide Europe from Asia?",
    "answers": {
      "A": "Caucasus",
      "B": "Carpathians",
      "C": "Urals",
      "D": "Alps"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1016",
    "fact": "Lesotho is entirely surrounded by South Africa, making it one of only three countries in the world completely enclosed by another nation.",
    "question": "Which country is completely surrounded by South Africa?",
    "answers": {
      "A": "Eswatini",
      "B": "Botswana",
      "C": "Lesotho",
      "D": "Zimbabwe"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1017",
    "fact": "The Strait of Gibraltar separates Spain from Morocco and connects the Atlantic Ocean to the Mediterranean Sea, with a narrowest point of about 13 km.",
    "question": "The Strait of Gibraltar separates Spain from which African country?",
    "answers": {
      "A": "Algeria",
      "B": "Tunisia",
      "C": "Mauritania",
      "D": "Morocco"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1018",
    "fact": "Astana, renamed Nur-Sultan in 2019 and then back to Astana in 2022, is the capital of Kazakhstan, the world's largest landlocked country.",
    "question": "What is the capital of Kazakhstan?",
    "answers": {
      "A": "Almaty",
      "B": "Astana",
      "C": "Tashkent",
      "D": "Bishkek"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1019",
    "fact": "Aconcagua in the Argentine Andes reaches 6,961 metres, making it the highest peak in both the Western and Southern Hemispheres.",
    "question": "What is the highest mountain in South America?",
    "answers": {
      "A": "Chimborazo",
      "B": "Huascarán",
      "C": "Aconcagua",
      "D": "Ojos del Salado"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1020",
    "fact": "The Caspian Sea, bordered by Russia, Kazakhstan, Turkmenistan, Iran and Azerbaijan, is the largest enclosed inland body of water on Earth.",
    "question": "Which is the largest enclosed inland body of water in the world?",
    "answers": {
      "A": "Lake Superior",
      "B": "Caspian Sea",
      "C": "Lake Victoria",
      "D": "Aral Sea"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1021",
    "fact": "The Mariana Trench in the western Pacific contains the Challenger Deep, which at about 10,935 metres is the deepest known point on Earth.",
    "question": "In which ocean is the Mariana Trench, the deepest place on Earth, located?",
    "answers": {
      "A": "Atlantic",
      "B": "Indian",
      "C": "Pacific",
      "D": "Southern"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1022",
    "fact": "Suriname, on the northeastern coast of South America, was a Dutch colony until 1975 and Dutch remains its official language.",
    "question": "Which is the only country in South America where Dutch is the official language?",
    "answers": {
      "A": "Guyana",
      "B": "Suriname",
      "C": "French Guiana",
      "D": "Paraguay"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1023",
    "fact": "The Volga is the longest river in Europe at about 3,530 km, flowing through western Russia and emptying into the Caspian Sea.",
    "question": "What is the longest river in Europe?",
    "answers": {
      "A": "Danube",
      "B": "Rhine",
      "C": "Volga",
      "D": "Dnieper"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1024",
    "fact": "Honiara, located on the island of Guadalcanal, is the capital of the Solomon Islands in the southwestern Pacific.",
    "question": "Honiara is the capital of which Pacific island nation?",
    "answers": {
      "A": "Vanuatu",
      "B": "Fiji",
      "C": "Samoa",
      "D": "Solomon Islands"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq1025",
    "fact": "K2, on the China–Pakistan border in the Karakoram range, is the world's second-highest mountain at 8,611 metres and is notorious for being one of the most dangerous to climb.",
    "question": "What is the second-highest mountain in the world?",
    "answers": {
      "A": "Kangchenjunga",
      "B": "Lhotse",
      "C": "K2",
      "D": "Makalu"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1026",
    "fact": "The Bosporus Strait in Turkey separates the European and Asian parts of Istanbul and connects the Black Sea to the Sea of Marmara.",
    "question": "The Bosporus Strait runs through which city?",
    "answers": {
      "A": "Athens",
      "B": "Istanbul",
      "C": "Odesa",
      "D": "Sofia"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1027",
    "fact": "Tajikistan, Kyrgyzstan, Uzbekistan, Turkmenistan and Kazakhstan are the five Central Asian 'stans', all former Soviet republics that gained independence in 1991.",
    "question": "Which of these countries does NOT border Afghanistan?",
    "answers": {
      "A": "Tajikistan",
      "B": "Uzbekistan",
      "C": "Kyrgyzstan",
      "D": "Turkmenistan"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1028",
    "fact": "Cape Agulhas in South Africa, not the more famous Cape of Good Hope, is the true southernmost point of the African continent and marks the official dividing line between the Atlantic and Indian Oceans.",
    "question": "What is the southernmost point of the African continent?",
    "answers": {
      "A": "Cape of Good Hope",
      "B": "Cape Agulhas",
      "C": "Cape Point",
      "D": "Cape Hangklip"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1029",
    "fact": "The Rosetta Stone, discovered in 1799, contains a decree issued in 196 BC and is inscribed in hieroglyphic, Demotic, and Ancient Greek scripts.",
    "question": "How many different scripts appear on the Rosetta Stone?",
    "answers": {
      "A": "Two",
      "B": "Three",
      "C": "Four",
      "D": "Five"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1030",
    "fact": "The Battle of Marathon was fought in 490 BC between the Athenians (with Plataean allies) and the invading Persian forces of Darius I.",
    "question": "In which year was the Battle of Marathon fought?",
    "answers": {
      "A": "480 BC",
      "B": "490 BC",
      "C": "510 BC",
      "D": "431 BC"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1031",
    "fact": "Hammurabi, the sixth king of the First Babylonian Dynasty, created one of the earliest and most complete written legal codes, dating to around 1754 BC.",
    "question": "Which Mesopotamian ruler is famous for creating one of the earliest known written law codes?",
    "answers": {
      "A": "Sargon of Akkad",
      "B": "Nebuchadnezzar II",
      "C": "Hammurabi",
      "D": "Gilgamesh"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1032",
    "fact": "The Great Pyramid of Giza was built as a tomb for Pharaoh Khufu (also known as Cheops) during the Fourth Dynasty of the Old Kingdom.",
    "question": "For which pharaoh was the Great Pyramid of Giza built?",
    "answers": {
      "A": "Khafre",
      "B": "Khufu",
      "C": "Menkaure",
      "D": "Djoser"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1033",
    "fact": "Julius Caesar was assassinated on the Ides of March (15 March) in 44 BC by a group of Roman senators led by Brutus and Cassius.",
    "question": "On what date was Julius Caesar assassinated?",
    "answers": {
      "A": "15 March 44 BC",
      "B": "1 January 49 BC",
      "C": "1 March 44 BC",
      "D": "15 May 44 BC"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1034",
    "fact": "Qin Shi Huang, the first emperor of unified China, was buried with the Terracotta Army near modern-day Xi'an around 210 BC.",
    "question": "Which Chinese emperor was buried with the famous Terracotta Army?",
    "answers": {
      "A": "Han Wudi",
      "B": "Qin Shi Huang",
      "C": "Tang Taizong",
      "D": "Sui Wendi"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1035",
    "fact": "The Maya civilization developed a sophisticated writing system and is renowned for the Long Count calendar, which famously 'ended' a cycle on 21 December 2012.",
    "question": "The Maya Long Count calendar is most associated with which type of cycle?",
    "answers": {
      "A": "Lunar months",
      "B": "Solar equinoxes",
      "C": "Great cycles of approximately 5,125 years",
      "D": "Venus transits"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1036",
    "fact": "Cyrus the Great founded the Achaemenid Empire around 550 BC after defeating the Median king Astyages, becoming the first Persian emperor.",
    "question": "Who founded the Achaemenid Persian Empire?",
    "answers": {
      "A": "Darius I",
      "B": "Xerxes I",
      "C": "Cyrus the Great",
      "D": "Cambyses II"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1037",
    "fact": "The Hanging Gardens were said to be in Babylon, while the other six wonders include the Pyramid of Giza, the Statue of Zeus at Olympia, and the Lighthouse of Alexandria.",
    "question": "In which ancient city were the legendary Hanging Gardens located?",
    "answers": {
      "A": "Nineveh",
      "B": "Babylon",
      "C": "Ur",
      "D": "Persepolis"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1038",
    "fact": "The Peloponnesian War was fought between Athens (and the Delian League) and Sparta (with the Peloponnesian League) from 431 to 404 BC, ending in Spartan victory.",
    "question": "Which two Greek city-states were the main combatants in the Peloponnesian War?",
    "answers": {
      "A": "Athens and Thebes",
      "B": "Sparta and Corinth",
      "C": "Athens and Sparta",
      "D": "Thebes and Sparta"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1039",
    "fact": "Cleopatra VII, the last active pharaoh of Ptolemaic Egypt, died in 30 BC, traditionally said to be by the bite of an asp following Mark Antony's defeat at Actium.",
    "question": "Cleopatra VII was the last ruling pharaoh of which Egyptian dynasty?",
    "answers": {
      "A": "Ptolemaic Dynasty",
      "B": "Eighteenth Dynasty",
      "C": "Saite Dynasty",
      "D": "Kushite Dynasty"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1040",
    "fact": "The Battle of Thermopylae in 480 BC saw King Leonidas of Sparta lead a small Greek force against the massive Persian army of Xerxes I.",
    "question": "Which Persian king led the invasion that resulted in the Battle of Thermopylae?",
    "answers": {
      "A": "Cyrus the Great",
      "B": "Darius I",
      "C": "Xerxes I",
      "D": "Artaxerxes I"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1041",
    "fact": "The Han Dynasty, founded by Liu Bang in 202 BC, is considered a golden age of Chinese civilization and lasted (with a brief interruption) until 220 AD.",
    "question": "Who founded the Han Dynasty of China?",
    "answers": {
      "A": "Liu Bang",
      "B": "Sun Tzu",
      "C": "Confucius",
      "D": "Wang Mang"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1042",
    "fact": "Tikal was one of the largest and most powerful Maya cities, located in the Petén Basin of modern-day Guatemala.",
    "question": "The major Maya city of Tikal is located in which modern country?",
    "answers": {
      "A": "Mexico",
      "B": "Honduras",
      "C": "Guatemala",
      "D": "Belize"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1043",
    "fact": "Romulus, according to Roman legend, founded Rome in 753 BC after killing his twin brother Remus in a dispute over which hill to build the city on.",
    "question": "According to legend, in which year was Rome founded?",
    "answers": {
      "A": "509 BC",
      "B": "753 BC",
      "C": "476 BC",
      "D": "1000 BC"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1044",
    "fact": "Alexander the Great died in Babylon in June 323 BC at the age of 32, possibly from fever, poisoning, or alcohol-related causes; the exact cause remains debated.",
    "question": "In which city did Alexander the Great die in 323 BC?",
    "answers": {
      "A": "Alexandria",
      "B": "Pella",
      "C": "Persepolis",
      "D": "Babylon"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1045",
    "fact": "The cuneiform script, developed by the Sumerians around 3200 BC, used wedge-shaped marks pressed into clay tablets with a reed stylus.",
    "question": "Which ancient civilization is credited with developing the cuneiform writing system?",
    "answers": {
      "A": "Egyptians",
      "B": "Sumerians",
      "C": "Hittites",
      "D": "Phoenicians"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1046",
    "fact": "Mount Vesuvius erupted in 79 AD, burying Pompeii and Herculaneum under volcanic ash; the eruption is famously documented by Pliny the Younger.",
    "question": "In which year did Mount Vesuvius erupt and bury Pompeii?",
    "answers": {
      "A": "64 AD",
      "B": "79 AD",
      "C": "117 AD",
      "D": "212 AD"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1047",
    "fact": "The Behistun Inscription, ordered by Darius the Great around 522 BC, is a trilingual text in Old Persian, Elamite, and Babylonian that was key to deciphering cuneiform.",
    "question": "Which Persian king commissioned the trilingual Behistun Inscription?",
    "answers": {
      "A": "Cyrus the Great",
      "B": "Xerxes I",
      "C": "Darius I",
      "D": "Cambyses II"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1048",
    "fact": "Pharaoh Akhenaten, who ruled around 1353–1336 BC, attempted to replace Egypt's traditional polytheism with the worship of a single sun deity, the Aten.",
    "question": "Which pharaoh introduced a form of monotheism centered on the sun-disk Aten?",
    "answers": {
      "A": "Ramesses II",
      "B": "Tutankhamun",
      "C": "Akhenaten",
      "D": "Thutmose III"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1049",
    "fact": "The Battle of Cannae in 216 BC was a devastating defeat for Rome, in which Hannibal's Carthaginian army encircled and destroyed a much larger Roman force.",
    "question": "At which 216 BC battle did Hannibal famously encircle and destroy a Roman army?",
    "answers": {
      "A": "Cannae",
      "B": "Zama",
      "C": "Trebia",
      "D": "Lake Trasimene"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1050",
    "fact": "The Maya city of Chichén Itzá in the Yucatán features the famous step pyramid known as El Castillo, or the Temple of Kukulcán.",
    "question": "The pyramid known as El Castillo or the Temple of Kukulcán is located at which Maya site?",
    "answers": {
      "A": "Palenque",
      "B": "Tikal",
      "C": "Chichén Itzá",
      "D": "Copán"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1051",
    "fact": "Sargon of Akkad, who reigned around 2334–2279 BC, founded the Akkadian Empire, generally regarded as the world's first empire.",
    "question": "Who founded the Akkadian Empire, often called the world's first empire?",
    "answers": {
      "A": "Gilgamesh",
      "B": "Sargon of Akkad",
      "C": "Ur-Nammu",
      "D": "Naram-Sin"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1052",
    "fact": "The Western Roman Empire is traditionally said to have fallen in 476 AD when the Germanic chieftain Odoacer deposed the last emperor, Romulus Augustulus.",
    "question": "Who was the last emperor of the Western Roman Empire, deposed in 476 AD?",
    "answers": {
      "A": "Honorius",
      "B": "Valentinian III",
      "C": "Romulus Augustulus",
      "D": "Julius Nepos"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1053",
    "fact": "The Spring and Autumn period (roughly 771–476 BC) of Chinese history saw the lives of major philosophers including Confucius and Laozi, and preceded the Warring States period.",
    "question": "Confucius lived during which period of ancient Chinese history?",
    "answers": {
      "A": "Shang Dynasty",
      "B": "Spring and Autumn period",
      "C": "Han Dynasty",
      "D": "Three Kingdoms period"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1054",
    "fact": "Gold's chemical symbol Au comes from its Latin name 'aurum', meaning 'shining dawn'.",
    "question": "What is the chemical symbol for gold?",
    "answers": {
      "A": "Go",
      "B": "Gd",
      "C": "Au",
      "D": "Ag"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1055",
    "fact": "Isaac Newton formulated the three laws of motion, published in his 1687 work Principia Mathematica.",
    "question": "Who formulated the three classical laws of motion?",
    "answers": {
      "A": "Galileo Galilei",
      "B": "Isaac Newton",
      "C": "Albert Einstein",
      "D": "Johannes Kepler"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1056",
    "fact": "Hydrogen is the lightest and most abundant element in the universe, making up about 75% of all normal matter.",
    "question": "Which is the lightest chemical element?",
    "answers": {
      "A": "Helium",
      "B": "Lithium",
      "C": "Hydrogen",
      "D": "Carbon"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1057",
    "fact": "Marie Curie won the Nobel Prize in Physics (1903) and Chemistry (1911), making her the first person to win Nobels in two different sciences.",
    "question": "Marie Curie won Nobel Prizes in which two scientific fields?",
    "answers": {
      "A": "Physics and Chemistry",
      "B": "Chemistry and Medicine",
      "C": "Physics and Medicine",
      "D": "Physics and Mathematics"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1058",
    "fact": "The Michelson-Morley experiment in 1887 failed to detect the luminiferous aether, paving the way for Einstein's theory of special relativity.",
    "question": "The 1887 Michelson-Morley experiment failed to detect what?",
    "answers": {
      "A": "The neutrino",
      "B": "The luminiferous aether",
      "C": "Cosmic background radiation",
      "D": "Gravitational waves"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1059",
    "fact": "Mercury (Hg) and bromine (Br) are the only two elements that are liquid at standard room temperature and pressure.",
    "question": "Besides mercury, which element is liquid at standard room temperature?",
    "answers": {
      "A": "Bromine",
      "B": "Iodine",
      "C": "Gallium",
      "D": "Caesium"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1060",
    "fact": "Dmitri Mendeleev published his version of the periodic table in 1869, arranging elements by atomic weight and predicting undiscovered elements.",
    "question": "Who is credited with creating the first widely recognized periodic table of elements in 1869?",
    "answers": {
      "A": "Antoine Lavoisier",
      "B": "John Dalton",
      "C": "Dmitri Mendeleev",
      "D": "Henry Moseley"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1061",
    "fact": "Ohm's Law states that V = IR, relating voltage, current and resistance in an electrical circuit.",
    "question": "Ohm's Law relates voltage, resistance and which other quantity?",
    "answers": {
      "A": "Power",
      "B": "Current",
      "C": "Capacitance",
      "D": "Frequency"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1062",
    "fact": "Ernest Rutherford's 1909 gold foil experiment, conducted with Geiger and Marsden, revealed the atomic nucleus.",
    "question": "Rutherford's famous gold foil experiment led to the discovery of what?",
    "answers": {
      "A": "The electron",
      "B": "The neutron",
      "C": "The atomic nucleus",
      "D": "Radioactivity"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1063",
    "fact": "Element 118, oganesson (Og), is the heaviest element officially named on the periodic table as of 2024.",
    "question": "What is the name of element 118, the heaviest officially named element?",
    "answers": {
      "A": "Tennessine",
      "B": "Livermorium",
      "C": "Oganesson",
      "D": "Moscovium"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1064",
    "fact": "Wilhelm Röntgen received the first ever Nobel Prize in Physics in 1901 for his discovery of X-rays.",
    "question": "Who received the very first Nobel Prize in Physics in 1901?",
    "answers": {
      "A": "Albert Einstein",
      "B": "Wilhelm Röntgen",
      "C": "Henri Becquerel",
      "D": "J.J. Thomson"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1065",
    "fact": "The speed of light in a vacuum is exactly 299,792,458 metres per second, a defined constant since 1983.",
    "question": "Approximately how fast does light travel in a vacuum?",
    "answers": {
      "A": "300,000 km/s",
      "B": "150,000 km/s",
      "C": "1,080,000 km/s",
      "D": "30,000 km/s"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1066",
    "fact": "Albert Einstein won the 1921 Nobel Prize in Physics specifically for his explanation of the photoelectric effect, not for relativity.",
    "question": "For which discovery did Albert Einstein win the Nobel Prize in Physics?",
    "answers": {
      "A": "Special relativity",
      "B": "General relativity",
      "C": "The photoelectric effect",
      "D": "Brownian motion"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1067",
    "fact": "The second law of thermodynamics states that the entropy of an isolated system never decreases over time.",
    "question": "Which physical quantity is described by the second law of thermodynamics as never decreasing in an isolated system?",
    "answers": {
      "A": "Enthalpy",
      "B": "Entropy",
      "C": "Energy",
      "D": "Momentum"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1068",
    "fact": "Helium has atomic number 2 and is the second most abundant element in the universe after hydrogen.",
    "question": "What is the atomic number of helium?",
    "answers": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1069",
    "fact": "The Higgs boson was confirmed at CERN's Large Hadron Collider in 2012, earning Peter Higgs and François Englert the 2013 Nobel Prize in Physics.",
    "question": "At which facility was the Higgs boson discovered in 2012?",
    "answers": {
      "A": "Fermilab",
      "B": "SLAC",
      "C": "CERN",
      "D": "Brookhaven"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1070",
    "fact": "Avogadro's number, approximately 6.022 × 10²³, is the number of constituent particles in one mole of a substance.",
    "question": "Avogadro's number gives the number of particles in one what?",
    "answers": {
      "A": "Gram",
      "B": "Litre",
      "C": "Mole",
      "D": "Kilogram"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1071",
    "fact": "James Chadwick discovered the neutron in 1932 and was awarded the 1935 Nobel Prize in Physics for this work.",
    "question": "Who discovered the neutron in 1932?",
    "answers": {
      "A": "Niels Bohr",
      "B": "James Chadwick",
      "C": "Ernest Rutherford",
      "D": "Enrico Fermi"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1072",
    "fact": "The double-slit experiment, first performed by Thomas Young in 1801, demonstrated the wave nature of light through interference patterns.",
    "question": "Which classic experiment first demonstrated the wave nature of light through an interference pattern?",
    "answers": {
      "A": "The Stern-Gerlach experiment",
      "B": "Young's double-slit experiment",
      "C": "The Cavendish experiment",
      "D": "The Millikan oil drop experiment"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1073",
    "fact": "Tungsten (W) has the highest melting point of any pure metal at approximately 3,422°C, making it ideal for lightbulb filaments.",
    "question": "Which metallic element has the highest melting point?",
    "answers": {
      "A": "Platinum",
      "B": "Titanium",
      "C": "Tungsten",
      "D": "Osmium"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1074",
    "fact": "Robert Millikan's oil drop experiment (1909) measured the elementary electric charge of the electron, earning him the 1923 Nobel Prize.",
    "question": "Millikan's oil drop experiment measured the charge of which particle?",
    "answers": {
      "A": "Proton",
      "B": "Neutron",
      "C": "Electron",
      "D": "Positron"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1075",
    "fact": "Heisenberg's uncertainty principle states you cannot simultaneously know both the exact position and momentum of a particle.",
    "question": "Werner Heisenberg's famous principle concerns the uncertainty between a particle's position and what other property?",
    "answers": {
      "A": "Momentum",
      "B": "Spin",
      "C": "Charge",
      "D": "Mass"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1076",
    "fact": "Francium (Fr), atomic number 87, is the most chemically reactive of the alkali metals, though it's extremely rare and radioactive.",
    "question": "Which alkali metal is the most chemically reactive?",
    "answers": {
      "A": "Sodium",
      "B": "Potassium",
      "C": "Caesium",
      "D": "Francium"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq1077",
    "fact": "John Bardeen is the only person to have won the Nobel Prize in Physics twice — in 1956 for the transistor and 1972 for superconductivity theory.",
    "question": "Who is the only person to have won the Nobel Prize in Physics twice?",
    "answers": {
      "A": "John Bardeen",
      "B": "Linus Pauling",
      "C": "Frederick Sanger",
      "D": "Marie Curie"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq1078",
    "fact": "The Cavendish experiment, performed in 1798, measured the gravitational constant G and effectively allowed the mass of the Earth to be calculated.",
    "question": "What did Henry Cavendish's famous 1798 experiment measure?",
    "answers": {
      "A": "The speed of sound",
      "B": "The gravitational constant",
      "C": "The charge of the electron",
      "D": "The wavelength of light"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1079",
    "fact": "DNA stands for deoxyribonucleic acid, the molecule that carries genetic information in all living organisms.",
    "question": "What does DNA stand for?",
    "answers": {
      "A": "Deoxyribonucleic acid",
      "B": "Dinucleic ribose acid",
      "C": "Diribose nucleotide acid",
      "D": "Deoxyribose nuclear acid"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1080",
    "fact": "The mitochondria produce ATP through cellular respiration, earning their famous nickname as the cell's powerhouse.",
    "question": "Which organelle is commonly known as the powerhouse of the cell?",
    "answers": {
      "A": "Nucleus",
      "B": "Ribosome",
      "C": "Mitochondrion",
      "D": "Golgi apparatus"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1081",
    "fact": "Adult humans typically have 32 teeth, including 8 incisors, 4 canines, 8 premolars, and 12 molars (including wisdom teeth).",
    "question": "How many teeth does a typical adult human have?",
    "answers": {
      "A": "28",
      "B": "30",
      "C": "32",
      "D": "34"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1082",
    "fact": "Charles Darwin published 'On the Origin of Species' in 1859, presenting the theory of evolution by natural selection.",
    "question": "Who proposed the theory of evolution by natural selection?",
    "answers": {
      "A": "Gregor Mendel",
      "B": "Charles Darwin",
      "C": "Louis Pasteur",
      "D": "Carl Linnaeus"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1083",
    "fact": "Red blood cells, or erythrocytes, contain hemoglobin which binds to oxygen and transports it throughout the body.",
    "question": "Which type of blood cell is primarily responsible for transporting oxygen?",
    "answers": {
      "A": "White blood cells",
      "B": "Platelets",
      "C": "Red blood cells",
      "D": "Plasma cells"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1084",
    "fact": "Carl Linnaeus developed binomial nomenclature in the 18th century, creating the basis for modern biological classification.",
    "question": "Who is considered the father of modern taxonomy?",
    "answers": {
      "A": "Charles Darwin",
      "B": "Carl Linnaeus",
      "C": "Aristotle",
      "D": "Gregor Mendel"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1085",
    "fact": "The standard taxonomic hierarchy is Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species.",
    "question": "In biological classification, which rank comes immediately above 'Order'?",
    "answers": {
      "A": "Family",
      "B": "Genus",
      "C": "Class",
      "D": "Phylum"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1086",
    "fact": "The four bases in DNA are adenine (A), thymine (T), guanine (G), and cytosine (C). Uracil replaces thymine in RNA.",
    "question": "Which of the following bases is found in RNA but NOT in DNA?",
    "answers": {
      "A": "Adenine",
      "B": "Guanine",
      "C": "Uracil",
      "D": "Cytosine"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1087",
    "fact": "The stapes (or stirrup) in the middle ear is the smallest bone in the human body, measuring only about 3 mm long.",
    "question": "What is the smallest bone in the human body?",
    "answers": {
      "A": "Malleus",
      "B": "Incus",
      "C": "Stapes",
      "D": "Hyoid"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1088",
    "fact": "Humans have 23 pairs of chromosomes (46 total), including one pair of sex chromosomes.",
    "question": "How many pairs of chromosomes are in a typical human cell?",
    "answers": {
      "A": "21",
      "B": "22",
      "C": "23",
      "D": "24"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1089",
    "fact": "Watson and Crick published their double helix model of DNA in 1953, building on data from Rosalind Franklin and Maurice Wilkins.",
    "question": "In which year was the double helix structure of DNA published by Watson and Crick?",
    "answers": {
      "A": "1943",
      "B": "1953",
      "C": "1963",
      "D": "1973"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1090",
    "fact": "The medulla oblongata, part of the brainstem, controls autonomic functions like breathing, heart rate and blood pressure.",
    "question": "Which part of the brain controls breathing and heart rate?",
    "answers": {
      "A": "Cerebellum",
      "B": "Cerebrum",
      "C": "Medulla oblongata",
      "D": "Thalamus"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1091",
    "fact": "Gregor Mendel's pea plant experiments in the 1860s established the foundational laws of inheritance.",
    "question": "Which scientist is regarded as the father of modern genetics due to his work on pea plants?",
    "answers": {
      "A": "Charles Darwin",
      "B": "Gregor Mendel",
      "C": "Thomas Hunt Morgan",
      "D": "Francis Crick"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1092",
    "fact": "Humans belong to the species Homo sapiens, with 'Homo' being the genus and 'sapiens' the specific epithet.",
    "question": "What is the scientific (binomial) name for modern humans?",
    "answers": {
      "A": "Homo erectus",
      "B": "Homo habilis",
      "C": "Homo sapiens",
      "D": "Homo neanderthalensis"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1093",
    "fact": "Cytokinesis is the final stage where the cytoplasm divides; the four mitotic phases are prophase, metaphase, anaphase, and telophase.",
    "question": "During which phase of mitosis do chromosomes align along the cell's equator?",
    "answers": {
      "A": "Prophase",
      "B": "Metaphase",
      "C": "Anaphase",
      "D": "Telophase"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1094",
    "fact": "The loop of Henle in the kidney's nephron is crucial for concentrating urine through countercurrent multiplication.",
    "question": "In which organ would you find the loop of Henle?",
    "answers": {
      "A": "Liver",
      "B": "Pancreas",
      "C": "Kidney",
      "D": "Small intestine"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1095",
    "fact": "Golgi apparatus modifies, sorts, and packages proteins and lipids for secretion or use within the cell.",
    "question": "Which organelle is primarily responsible for modifying and packaging proteins in a eukaryotic cell?",
    "answers": {
      "A": "Lysosome",
      "B": "Ribosome",
      "C": "Golgi apparatus",
      "D": "Endoplasmic reticulum"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1096",
    "fact": "Neanderthals (Homo neanderthalensis) went extinct around 40,000 years ago and were close evolutionary relatives of modern humans.",
    "question": "Approximately how many years ago did Neanderthals become extinct?",
    "answers": {
      "A": "10,000 years ago",
      "B": "40,000 years ago",
      "C": "100,000 years ago",
      "D": "250,000 years ago"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1097",
    "fact": "The vagus nerve (cranial nerve X) is the longest cranial nerve and innervates organs of the chest and abdomen, including the heart and digestive tract.",
    "question": "Which cranial nerve is responsible for parasympathetic control of the heart and digestive tract?",
    "answers": {
      "A": "Trigeminal nerve",
      "B": "Optic nerve",
      "C": "Vagus nerve",
      "D": "Facial nerve"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1098",
    "fact": "The human body normally has four chambers in the heart: two atria and two ventricles.",
    "question": "How many chambers does a human heart have?",
    "answers": {
      "A": "Two",
      "B": "Three",
      "C": "Four",
      "D": "Five"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1100",
    "fact": "Charles Darwin published 'On the Origin of Species' in 1859, outlining the theory of evolution by natural selection.",
    "question": "Who published 'On the Origin of Species' in 1859?",
    "answers": {
      "A": "Gregor Mendel",
      "B": "Charles Darwin",
      "C": "Alfred Wallace",
      "D": "Thomas Huxley"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1102",
    "fact": "The skin is the largest organ overall, covering an area of about 1.5 to 2 square meters in adults.",
    "question": "What is the largest organ of the human body overall?",
    "answers": {
      "A": "Liver",
      "B": "Skin",
      "C": "Lungs",
      "D": "Intestines"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1103",
    "fact": "Red blood cells, or erythrocytes, contain hemoglobin which binds and carries oxygen throughout the body.",
    "question": "Which protein in red blood cells carries oxygen?",
    "answers": {
      "A": "Myoglobin",
      "B": "Albumin",
      "C": "Hemoglobin",
      "D": "Keratin"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1104",
    "fact": "Parasite, directed by Bong Joon-ho, made history in 2020 by becoming the first non-English language film to win the Academy Award for Best Picture.",
    "question": "Which South Korean film won the Academy Award for Best Picture in 2020?",
    "answers": {
      "A": "Oldboy",
      "B": "Parasite",
      "C": "Burning",
      "D": "The Handmaiden"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1105",
    "fact": "Released in 1982, Michael Jackson's Thriller is widely cited as the best-selling album of all time, with sales estimated at over 70 million copies worldwide.",
    "question": "Which Michael Jackson album is the best-selling album of all time?",
    "answers": {
      "A": "Bad",
      "B": "Off the Wall",
      "C": "Dangerous",
      "D": "Thriller"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1106",
    "fact": "Breaking Bad, created by Vince Gilligan, follows chemistry teacher Walter White as he turns to making methamphetamine after a cancer diagnosis.",
    "question": "Who created the American TV series Breaking Bad?",
    "answers": {
      "A": "David Chase",
      "B": "Vince Gilligan",
      "C": "Matthew Weiner",
      "D": "Shawn Ryan"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1107",
    "fact": "ABBA represented Sweden and won the 1974 Eurovision Song Contest in Brighton with 'Waterloo', launching their global career.",
    "question": "With which song did ABBA win the Eurovision Song Contest in 1974?",
    "answers": {
      "A": "Mamma Mia",
      "B": "Dancing Queen",
      "C": "Waterloo",
      "D": "Fernando"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1108",
    "fact": "Money Heist (La Casa de Papel) is a Spanish heist series created by Álex Pina that became one of Netflix's most-watched non-English series.",
    "question": "The hit Netflix series 'Money Heist' originated in which country?",
    "answers": {
      "A": "Mexico",
      "B": "Spain",
      "C": "Argentina",
      "D": "Italy"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1109",
    "fact": "Pink Floyd's 1973 album The Dark Side of the Moon features the famous prism cover art designed by Storm Thorgerson of Hipgnosis.",
    "question": "Which Pink Floyd album features a prism refracting light into a rainbow on its cover?",
    "answers": {
      "A": "Wish You Were Here",
      "B": "The Wall",
      "C": "Animals",
      "D": "The Dark Side of the Moon"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1110",
    "fact": "Studio Ghibli's Spirited Away, directed by Hayao Miyazaki, won the Academy Award for Best Animated Feature in 2003.",
    "question": "Who directed the Japanese animated film 'Spirited Away'?",
    "answers": {
      "A": "Isao Takahata",
      "B": "Mamoru Hosoda",
      "C": "Hayao Miyazaki",
      "D": "Makoto Shinkai"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1111",
    "fact": "Shakira is a Colombian singer who rose to international fame with hits like 'Hips Don't Lie' and 'Waka Waka', the official 2010 FIFA World Cup song.",
    "question": "Which country is pop star Shakira from?",
    "answers": {
      "A": "Mexico",
      "B": "Spain",
      "C": "Argentina",
      "D": "Colombia"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1112",
    "fact": "Squid Game, created by Hwang Dong-hyuk, became Netflix's most-watched series upon its 2021 release, featuring deadly versions of children's games.",
    "question": "Who created the South Korean Netflix series 'Squid Game'?",
    "answers": {
      "A": "Hwang Dong-hyuk",
      "B": "Park Chan-wook",
      "C": "Lee Jung-jae",
      "D": "Kim Jee-woon"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1113",
    "fact": "Queen's iconic 1975 single 'Bohemian Rhapsody' appears on the album A Night at the Opera and was written by Freddie Mercury.",
    "question": "On which Queen album does the song 'Bohemian Rhapsody' first appear?",
    "answers": {
      "A": "Sheer Heart Attack",
      "B": "A Day at the Races",
      "C": "A Night at the Opera",
      "D": "News of the World"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1114",
    "fact": "Cinema Paradiso, directed by Giuseppe Tornatore, won the Academy Award for Best Foreign Language Film in 1990 and is set in a small Sicilian village.",
    "question": "Who directed the Italian classic film 'Cinema Paradiso'?",
    "answers": {
      "A": "Federico Fellini",
      "B": "Giuseppe Tornatore",
      "C": "Roberto Benigni",
      "D": "Paolo Sorrentino"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1115",
    "fact": "BTS, the South Korean boy band, debuted in 2013 under Big Hit Entertainment and consists of seven members: RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook.",
    "question": "How many members are in the K-pop group BTS?",
    "answers": {
      "A": "Five",
      "B": "Six",
      "C": "Seven",
      "D": "Nine"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1116",
    "fact": "The Crown, a Netflix drama created by Peter Morgan, chronicles the reign of Queen Elizabeth II, with Claire Foy playing the young queen in seasons 1 and 2.",
    "question": "Who portrayed the young Queen Elizabeth II in the first two seasons of 'The Crown'?",
    "answers": {
      "A": "Olivia Colman",
      "B": "Imelda Staunton",
      "C": "Claire Foy",
      "D": "Helena Bonham Carter"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1117",
    "fact": "Rammstein is a German Neue Deutsche Härte band formed in Berlin in 1994, known for their pyrotechnic-heavy live shows and songs sung mostly in German.",
    "question": "The industrial metal band Rammstein originated in which country?",
    "answers": {
      "A": "Austria",
      "B": "Netherlands",
      "C": "Germany",
      "D": "Switzerland"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1118",
    "fact": "Amélie (Le Fabuleux Destin d'Amélie Poulain), directed by Jean-Pierre Jeunet in 2001, starred Audrey Tautou as the whimsical Parisian waitress.",
    "question": "Who starred as the title character in the 2001 French film 'Amélie'?",
    "answers": {
      "A": "Marion Cotillard",
      "B": "Audrey Tautou",
      "C": "Juliette Binoche",
      "D": "Léa Seydoux"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1119",
    "fact": "Fleetwood Mac's 1977 album Rumours is one of the best-selling albums of all time, featuring tracks like 'Go Your Own Way' and 'Dreams'.",
    "question": "In what year was Fleetwood Mac's landmark album 'Rumours' released?",
    "answers": {
      "A": "1975",
      "B": "1977",
      "C": "1979",
      "D": "1981"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1120",
    "fact": "Dark, a German sci-fi series on Netflix created by Baran bo Odar and Jantje Friese, follows time travel across multiple generations in the town of Winden.",
    "question": "The Netflix sci-fi series 'Dark' is set in a fictional small town in which country?",
    "answers": {
      "A": "Austria",
      "B": "Belgium",
      "C": "Germany",
      "D": "Denmark"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1121",
    "fact": "City of God (Cidade de Deus), released in 2002, was directed by Fernando Meirelles and Kátia Lund, depicting gang violence in Rio de Janeiro's favelas.",
    "question": "The acclaimed 2002 film 'City of God' is set in which Brazilian city?",
    "answers": {
      "A": "São Paulo",
      "B": "Salvador",
      "C": "Brasília",
      "D": "Rio de Janeiro"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1122",
    "fact": "Björk is an Icelandic singer-songwriter who first gained fame with the band The Sugarcubes before launching a successful solo career with albums like Debut and Homogenic.",
    "question": "Singer Björk hails from which country?",
    "answers": {
      "A": "Norway",
      "B": "Sweden",
      "C": "Iceland",
      "D": "Denmark"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1123",
    "fact": "Pedro Almodóvar's 1999 film 'All About My Mother' (Todo sobre mi madre) won the Academy Award for Best Foreign Language Film and the Best Director prize at Cannes.",
    "question": "Which Spanish director made the 1999 film 'All About My Mother'?",
    "answers": {
      "A": "Alejandro Amenábar",
      "B": "Pedro Almodóvar",
      "C": "Guillermo del Toro",
      "D": "Alfonso Cuarón"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1124",
    "fact": "The Beatles' album Abbey Road was released in 1969 and features the famous cover photo of the band crossing the zebra crossing outside Abbey Road Studios.",
    "question": "Which Beatles album features the iconic zebra crossing photograph on its cover?",
    "answers": {
      "A": "Let It Be",
      "B": "Help!",
      "C": "Abbey Road",
      "D": "Revolver"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1125",
    "fact": "The Bridge (Bron/Broen) is a Scandinavian noir crime series that begins with a body found exactly on the border between Sweden and Denmark on the Øresund Bridge.",
    "question": "The Scandinavian crime drama 'The Bridge' is a co-production between Sweden and which other country?",
    "answers": {
      "A": "Norway",
      "B": "Finland",
      "C": "Denmark",
      "D": "Iceland"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1126",
    "fact": "Daft Punk was a French electronic music duo consisting of Thomas Bangalter and Guy-Manuel de Homem-Christo, who announced their breakup in February 2021.",
    "question": "In what year did the French electronic duo Daft Punk officially announce their breakup?",
    "answers": {
      "A": "2019",
      "B": "2020",
      "C": "2021",
      "D": "2022"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1127",
    "fact": "Crouching Tiger, Hidden Dragon, directed by Ang Lee in 2000, won four Academy Awards including Best Foreign Language Film and is set during the Qing Dynasty.",
    "question": "Who directed the 2000 wuxia film 'Crouching Tiger, Hidden Dragon'?",
    "answers": {
      "A": "Zhang Yimou",
      "B": "Wong Kar-wai",
      "C": "John Woo",
      "D": "Ang Lee"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1128",
    "fact": "Radiohead's third studio album OK Computer was released in 1997 and is widely regarded as one of the greatest albums of all time, featuring tracks like 'Paranoid Android' and 'Karma Police'.",
    "question": "Which Radiohead album, released in 1997, includes the song 'Paranoid Android'?",
    "answers": {
      "A": "The Bends",
      "B": "OK Computer",
      "C": "Kid A",
      "D": "In Rainbows"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1129",
    "fact": "The modern Olympic Games were revived by Pierre de Coubertin and held in Athens in 1896, with 14 nations and 241 athletes competing.",
    "question": "In which city were the first modern Olympic Games held in 1896?",
    "answers": {
      "A": "Paris",
      "B": "Athens",
      "C": "London",
      "D": "Rome"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1130",
    "fact": "Usain Bolt set the 100m world record of 9.58 seconds at the 2009 World Championships in Berlin.",
    "question": "What is Usain Bolt's world record time in the men's 100 metres?",
    "answers": {
      "A": "9.58 seconds",
      "B": "9.69 seconds",
      "C": "9.63 seconds",
      "D": "9.72 seconds"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1131",
    "fact": "Brazil has won the FIFA World Cup five times: 1958, 1962, 1970, 1994, and 2002.",
    "question": "How many times has Brazil won the FIFA World Cup?",
    "answers": {
      "A": "Three",
      "B": "Four",
      "C": "Five",
      "D": "Six"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1132",
    "fact": "Roger Federer won his first Wimbledon singles title in 2003, defeating Mark Philippoussis in the final.",
    "question": "In which year did Roger Federer win his first Wimbledon singles title?",
    "answers": {
      "A": "2001",
      "B": "2002",
      "C": "2003",
      "D": "2004"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1133",
    "fact": "Muhammad Ali, born Cassius Clay, defeated Sonny Liston in 1964 to win the world heavyweight title for the first time.",
    "question": "Who did Muhammad Ali defeat in 1964 to win his first world heavyweight title?",
    "answers": {
      "A": "Joe Frazier",
      "B": "George Foreman",
      "C": "Sonny Liston",
      "D": "Floyd Patterson"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1134",
    "fact": "Michael Phelps has won 23 Olympic gold medals, the most of any athlete in Olympic history.",
    "question": "How many Olympic gold medals has Michael Phelps won?",
    "answers": {
      "A": "19",
      "B": "21",
      "C": "23",
      "D": "25"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1135",
    "fact": "The Tour de France typically covers around 3,500 km over 21 stages, but distances vary year to year.",
    "question": "How many stages does the Tour de France traditionally have?",
    "answers": {
      "A": "18",
      "B": "21",
      "C": "24",
      "D": "25"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1136",
    "fact": "Serena Williams has won 23 Grand Slam singles titles, the most in the Open Era.",
    "question": "How many Grand Slam singles titles has Serena Williams won?",
    "answers": {
      "A": "21",
      "B": "22",
      "C": "23",
      "D": "24"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1137",
    "fact": "Pelé scored his 1000th career goal in 1969 while playing for Santos against Vasco da Gama from a penalty kick.",
    "question": "For which club did Pelé spend the majority of his career?",
    "answers": {
      "A": "Flamengo",
      "B": "Santos",
      "C": "Corinthians",
      "D": "São Paulo"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1138",
    "fact": "Maria Sharapova won the Wimbledon title in 2004 at age 17, defeating Serena Williams in the final.",
    "question": "How old was Maria Sharapova when she won Wimbledon in 2004?",
    "answers": {
      "A": "16",
      "B": "17",
      "C": "18",
      "D": "19"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1139",
    "fact": "Mike Tyson became the youngest heavyweight world champion in history at age 20 years and 4 months when he defeated Trevor Berbick in 1986.",
    "question": "At what age did Mike Tyson become the youngest heavyweight boxing world champion?",
    "answers": {
      "A": "19",
      "B": "20",
      "C": "21",
      "D": "22"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1140",
    "fact": "The 2022 FIFA World Cup was hosted by Qatar, with Argentina winning the tournament after defeating France on penalties.",
    "question": "Which country hosted the 2022 FIFA World Cup?",
    "answers": {
      "A": "United Arab Emirates",
      "B": "Saudi Arabia",
      "C": "Qatar",
      "D": "Kuwait"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1141",
    "fact": "Nadia Comăneci of Romania scored the first perfect 10 in Olympic gymnastics at the 1976 Montreal Olympics.",
    "question": "Who scored the first perfect 10 in Olympic gymnastics history?",
    "answers": {
      "A": "Olga Korbut",
      "B": "Nadia Comăneci",
      "C": "Mary Lou Retton",
      "D": "Larisa Latynina"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1142",
    "fact": "Rafael Nadal has won the French Open a record 14 times between 2005 and 2022.",
    "question": "How many French Open singles titles has Rafael Nadal won?",
    "answers": {
      "A": "12",
      "B": "13",
      "C": "14",
      "D": "15"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1143",
    "fact": "Diego Maradona scored the infamous 'Hand of God' goal against England in the 1986 World Cup quarter-final in Mexico.",
    "question": "Against which country did Maradona score the 'Hand of God' goal?",
    "answers": {
      "A": "Brazil",
      "B": "Germany",
      "C": "England",
      "D": "Belgium"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1144",
    "fact": "The 1936 Olympic Games were held in Berlin, where Jesse Owens famously won four gold medals.",
    "question": "How many gold medals did Jesse Owens win at the 1936 Berlin Olympics?",
    "answers": {
      "A": "Two",
      "B": "Three",
      "C": "Four",
      "D": "Five"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1145",
    "fact": "Floyd Mayweather retired with a professional boxing record of 50 wins and 0 losses.",
    "question": "What was Floyd Mayweather's final professional boxing record?",
    "answers": {
      "A": "49-0",
      "B": "50-0",
      "C": "48-0",
      "D": "51-0"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1146",
    "fact": "Lionel Messi won his eighth Ballon d'Or in 2023, extending his record as the most decorated player in the award's history.",
    "question": "How many Ballon d'Or awards has Lionel Messi won (as of 2023)?",
    "answers": {
      "A": "Six",
      "B": "Seven",
      "C": "Eight",
      "D": "Nine"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1147",
    "fact": "The marathon distance was standardized at 26 miles, 385 yards (42.195 km) at the 1908 London Olympics.",
    "question": "What is the official distance of a marathon in kilometres?",
    "answers": {
      "A": "40.195 km",
      "B": "41.195 km",
      "C": "42.195 km",
      "D": "43.195 km"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1148",
    "fact": "Steffi Graf achieved the 'Golden Slam' in 1988, winning all four Grand Slam titles plus Olympic gold in the same year.",
    "question": "In which year did Steffi Graf achieve the Golden Slam?",
    "answers": {
      "A": "1986",
      "B": "1987",
      "C": "1988",
      "D": "1989"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1149",
    "fact": "Cristiano Ronaldo became the all-time top scorer in men's international football, surpassing Ali Daei's record.",
    "question": "Whose international goal-scoring record did Cristiano Ronaldo break?",
    "answers": {
      "A": "Pelé",
      "B": "Ali Daei",
      "C": "Ferenc Puskás",
      "D": "Miroslav Klose"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1150",
    "fact": "The 1968 Olympics in Mexico City saw Bob Beamon set a long jump world record of 8.90m that stood for 23 years.",
    "question": "Which city hosted the 1968 Summer Olympics?",
    "answers": {
      "A": "Munich",
      "B": "Mexico City",
      "C": "Montreal",
      "D": "Moscow"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1151",
    "fact": "Rocky Marciano is the only heavyweight world champion to retire undefeated, with a record of 49-0.",
    "question": "Which heavyweight boxing champion retired undefeated with a 49-0 record?",
    "answers": {
      "A": "Joe Louis",
      "B": "Rocky Marciano",
      "C": "Larry Holmes",
      "D": "Jack Dempsey"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1152",
    "fact": "Novak Djokovic won his 24th Grand Slam title at the 2023 US Open, tying Margaret Court's all-time record.",
    "question": "At which 2023 Grand Slam did Novak Djokovic win his 24th major title?",
    "answers": {
      "A": "Australian Open",
      "B": "French Open",
      "C": "Wimbledon",
      "D": "US Open"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq1154",
    "fact": "Archduke Franz Ferdinand of Austria was assassinated in Sarajevo on 28 June 1914 by Gavrilo Princip, a Bosnian Serb nationalist, triggering the chain of events that led to World War I.",
    "question": "Whose assassination in Sarajevo in June 1914 is widely considered the trigger for World War I?",
    "answers": {
      "A": "Kaiser Wilhelm II",
      "B": "Archduke Franz Ferdinand",
      "C": "Tsar Nicholas II",
      "D": "King Peter I of Serbia"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1155",
    "fact": "The Treaty of Versailles, signed on 28 June 1919, formally ended World War I and imposed harsh terms on Germany, including territorial losses and reparations.",
    "question": "In which year was the Treaty of Versailles signed?",
    "answers": {
      "A": "1918",
      "B": "1919",
      "C": "1920",
      "D": "1921"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1156",
    "fact": "The Bolshevik Revolution, led by Vladimir Lenin, took place in October 1917 (November by the Gregorian calendar) and overthrew the Russian Provisional Government.",
    "question": "Who led the Bolshevik Revolution of October 1917 in Russia?",
    "answers": {
      "A": "Joseph Stalin",
      "B": "Leon Trotsky",
      "C": "Vladimir Lenin",
      "D": "Alexander Kerensky"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1157",
    "fact": "The D-Day landings in Normandy began on 6 June 1944, marking the start of the Allied liberation of Western Europe from Nazi occupation.",
    "question": "On what date did the D-Day landings in Normandy take place?",
    "answers": {
      "A": "6 June 1944",
      "B": "8 May 1944",
      "C": "1 September 1944",
      "D": "7 December 1944"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1158",
    "fact": "The Berlin Wall, which had divided East and West Berlin since 1961, fell on 9 November 1989, symbolising the end of the Cold War division of Europe.",
    "question": "In which year did the Berlin Wall fall?",
    "answers": {
      "A": "1987",
      "B": "1988",
      "C": "1989",
      "D": "1991"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1159",
    "fact": "Mahatma Gandhi led the Salt March in 1930, a 240-mile protest against the British salt tax, becoming a pivotal moment in the Indian independence movement.",
    "question": "Who led the 1930 Salt March in protest against British rule in India?",
    "answers": {
      "A": "Jawaharlal Nehru",
      "B": "Subhas Chandra Bose",
      "C": "Mahatma Gandhi",
      "D": "Muhammad Ali Jinnah"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1160",
    "fact": "The Cuban Missile Crisis occurred in October 1962, when the US discovered Soviet nuclear missiles in Cuba, bringing the world to the brink of nuclear war.",
    "question": "In which year did the Cuban Missile Crisis occur?",
    "answers": {
      "A": "1959",
      "B": "1961",
      "C": "1962",
      "D": "1964"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1161",
    "fact": "The atomic bomb 'Little Boy' was dropped on Hiroshima on 6 August 1945, followed by 'Fat Man' on Nagasaki on 9 August 1945.",
    "question": "What was the codename of the atomic bomb dropped on Hiroshima on 6 August 1945?",
    "answers": {
      "A": "Fat Man",
      "B": "Little Boy",
      "C": "Trinity",
      "D": "Thin Man"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1162",
    "fact": "The Treaty of Brest-Litovsk was signed in March 1918 between the new Bolshevik government in Russia and the Central Powers, ending Russia's involvement in World War I.",
    "question": "Which 1918 treaty ended Russia's participation in World War I?",
    "answers": {
      "A": "Treaty of Versailles",
      "B": "Treaty of Saint-Germain",
      "C": "Treaty of Brest-Litovsk",
      "D": "Treaty of Sèvres"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1163",
    "fact": "Winston Churchill delivered his 'Iron Curtain' speech at Westminster College in Fulton, Missouri, on 5 March 1946, marking a key moment in the early Cold War.",
    "question": "In which US town did Winston Churchill deliver his famous 'Iron Curtain' speech in 1946?",
    "answers": {
      "A": "Fulton, Missouri",
      "B": "Independence, Missouri",
      "C": "Springfield, Illinois",
      "D": "Topeka, Kansas"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1164",
    "fact": "Ho Chi Minh led the Viet Minh against French colonial rule and later the North Vietnamese government during the Vietnam War; he declared Vietnamese independence in 1945.",
    "question": "Who declared Vietnamese independence from France in September 1945?",
    "answers": {
      "A": "Ngo Dinh Diem",
      "B": "Vo Nguyen Giap",
      "C": "Ho Chi Minh",
      "D": "Le Duan"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1165",
    "fact": "Operation Barbarossa, the German invasion of the Soviet Union, began on 22 June 1941 and was the largest military operation in history.",
    "question": "What was the codename for the German invasion of the Soviet Union in June 1941?",
    "answers": {
      "A": "Operation Sea Lion",
      "B": "Operation Barbarossa",
      "C": "Operation Market Garden",
      "D": "Operation Typhoon"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1166",
    "fact": "Ghana, led by Kwame Nkrumah, became the first sub-Saharan African colony to gain independence from European colonial rule, on 6 March 1957.",
    "question": "Which country was the first sub-Saharan African nation to gain independence from European colonial rule?",
    "answers": {
      "A": "Kenya",
      "B": "Nigeria",
      "C": "Ghana",
      "D": "Tanganyika"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1167",
    "fact": "The Warsaw Pact was established in 1955 as a Soviet-led military alliance in response to West Germany's integration into NATO.",
    "question": "In which year was the Warsaw Pact established?",
    "answers": {
      "A": "1949",
      "B": "1953",
      "C": "1955",
      "D": "1961"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1168",
    "fact": "Mikhail Gorbachev introduced the policies of 'glasnost' (openness) and 'perestroika' (restructuring) in the mid-1980s to reform the Soviet system.",
    "question": "Which Soviet leader introduced the policies of glasnost and perestroika?",
    "answers": {
      "A": "Leonid Brezhnev",
      "B": "Yuri Andropov",
      "C": "Konstantin Chernenko",
      "D": "Mikhail Gorbachev"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1169",
    "fact": "The Long March (1934–1935) was a military retreat undertaken by the Red Army of the Chinese Communist Party to evade the Kuomintang forces, cementing Mao Zedong's leadership.",
    "question": "In which decade did the Chinese Communists' Long March take place?",
    "answers": {
      "A": "1920s",
      "B": "1930s",
      "C": "1940s",
      "D": "1950s"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1170",
    "fact": "The Suez Crisis of 1956 was triggered when Egyptian President Gamal Abdel Nasser nationalised the Suez Canal, leading to military intervention by Britain, France, and Israel.",
    "question": "Which Egyptian leader nationalised the Suez Canal in 1956, triggering the Suez Crisis?",
    "answers": {
      "A": "Anwar Sadat",
      "B": "Gamal Abdel Nasser",
      "C": "Hosni Mubarak",
      "D": "Muhammad Naguib"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1171",
    "fact": "The Battle of Stalingrad lasted from August 1942 to February 1943 and ended with the surrender of the German 6th Army under Field Marshal Friedrich Paulus.",
    "question": "Which German Field Marshal surrendered to Soviet forces at Stalingrad in February 1943?",
    "answers": {
      "A": "Erwin Rommel",
      "B": "Heinz Guderian",
      "C": "Friedrich Paulus",
      "D": "Walther von Brauchitsch"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1172",
    "fact": "The Bay of Pigs Invasion in April 1961 was a failed CIA-backed attempt by Cuban exiles to overthrow Fidel Castro's government, occurring during the Kennedy administration.",
    "question": "Who was US President during the Bay of Pigs Invasion of April 1961?",
    "answers": {
      "A": "Dwight D. Eisenhower",
      "B": "John F. Kennedy",
      "C": "Lyndon B. Johnson",
      "D": "Richard Nixon"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1173",
    "fact": "The Treaty of Sèvres (1920) was the post-WWI peace treaty with the Ottoman Empire, although it was later replaced by the Treaty of Lausanne in 1923 after Turkish resistance.",
    "question": "Which 1920 treaty was the original post-WWI peace settlement imposed on the Ottoman Empire?",
    "answers": {
      "A": "Treaty of Trianon",
      "B": "Treaty of Sèvres",
      "C": "Treaty of Lausanne",
      "D": "Treaty of Neuilly"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1174",
    "fact": "Patrice Lumumba was the first Prime Minister of the independent Democratic Republic of the Congo in 1960 and was assassinated in January 1961 amid the Congo Crisis.",
    "question": "Who was the first Prime Minister of the independent Democratic Republic of the Congo?",
    "answers": {
      "A": "Mobutu Sese Seko",
      "B": "Joseph Kasa-Vubu",
      "C": "Patrice Lumumba",
      "D": "Moïse Tshombe"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1175",
    "fact": "The Prague Spring of 1968 was a period of liberalisation in Czechoslovakia led by Alexander Dubček, which was crushed by a Warsaw Pact invasion in August 1968.",
    "question": "Who led the Prague Spring reforms in Czechoslovakia in 1968?",
    "answers": {
      "A": "Gustáv Husák",
      "B": "Antonín Novotný",
      "C": "Alexander Dubček",
      "D": "Václav Havel"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1176",
    "fact": "The Lusitania, a British ocean liner, was sunk by a German U-boat on 7 May 1915, killing 1,198 people including 128 Americans, and contributing to US public opinion turning against Germany.",
    "question": "In which year was the British ocean liner Lusitania sunk by a German U-boat?",
    "answers": {
      "A": "1914",
      "B": "1915",
      "C": "1916",
      "D": "1917"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1177",
    "fact": "Algeria gained independence from France in July 1962 after a brutal eight-year war of independence (1954–1962) led by the FLN (National Liberation Front).",
    "question": "In which year did Algeria gain independence from France?",
    "answers": {
      "A": "1956",
      "B": "1960",
      "C": "1962",
      "D": "1965"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1178",
    "fact": "The Molotov–Ribbentrop Pact, signed on 23 August 1939, was a non-aggression treaty between Nazi Germany and the Soviet Union that included secret protocols dividing Eastern Europe into spheres of influence.",
    "question": "The Molotov–Ribbentrop Pact of 1939 was a non-aggression agreement between which two countries?",
    "answers": {
      "A": "Germany and Italy",
      "B": "Germany and the Soviet Union",
      "C": "Soviet Union and Japan",
      "D": "Germany and Poland"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1179",
    "fact": "Paella originated in the Valencia region of Spain in the mid-19th century, traditionally cooked over an open fire with rabbit, chicken, and beans.",
    "question": "From which region of Spain does the dish paella originate?",
    "answers": {
      "A": "Catalonia",
      "B": "Valencia",
      "C": "Andalusia",
      "D": "Galicia"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1180",
    "fact": "Sushi rice is seasoned with rice vinegar, sugar, and salt, giving it the distinctive tangy flavor that distinguishes it from plain steamed rice.",
    "question": "What ingredient is mixed with sushi rice to give it its characteristic flavor?",
    "answers": {
      "A": "Lemon juice",
      "B": "Mirin",
      "C": "Rice vinegar",
      "D": "Sake"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1181",
    "fact": "Feta is a brined curd cheese traditionally made in Greece from sheep's milk, or a mixture of sheep and goat's milk.",
    "question": "Traditional Greek feta cheese is primarily made from the milk of which animal?",
    "answers": {
      "A": "Cow",
      "B": "Buffalo",
      "C": "Goat",
      "D": "Sheep"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1182",
    "fact": "Tequila is produced primarily in the area surrounding the city of Tequila in the state of Jalisco, Mexico, from the blue agave plant.",
    "question": "Tequila is distilled from which plant?",
    "answers": {
      "A": "Blue agave",
      "B": "Sugar cane",
      "C": "Maize",
      "D": "Cactus"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1183",
    "fact": "Bouillabaisse is a traditional Provençal fish stew originating from the port city of Marseille on the southern coast of France.",
    "question": "Bouillabaisse, a famous fish stew, originates from which French city?",
    "answers": {
      "A": "Lyon",
      "B": "Bordeaux",
      "C": "Marseille",
      "D": "Nice"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1184",
    "fact": "Wasabi is a member of the Brassicaceae family, which also includes horseradish, mustard, and cabbage. True wasabi is grated from the stem of Wasabia japonica.",
    "question": "Wasabi belongs to the same plant family as which of the following?",
    "answers": {
      "A": "Ginger",
      "B": "Horseradish",
      "C": "Chilli pepper",
      "D": "Onion"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1185",
    "fact": "A Negroni is a classic Italian cocktail made of equal parts gin, sweet vermouth, and Campari, garnished with an orange peel.",
    "question": "Which three spirits/liqueurs in equal parts make up a classic Negroni cocktail?",
    "answers": {
      "A": "Vodka, vermouth, and Aperol",
      "B": "Gin, sweet vermouth, and Campari",
      "C": "Gin, dry vermouth, and Cointreau",
      "D": "Rum, Campari, and Cointreau"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1186",
    "fact": "Saffron comes from the dried stigmas of the Crocus sativus flower. Each flower produces only three stigmas, making it the world's most expensive spice by weight.",
    "question": "Saffron is harvested from which part of the Crocus sativus flower?",
    "answers": {
      "A": "Petals",
      "B": "Roots",
      "C": "Stigmas",
      "D": "Seeds"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1187",
    "fact": "Goulash (gulyás) is a soup or stew of meat and vegetables seasoned with paprika, originating from medieval Hungary, where it was eaten by cattle herdsmen.",
    "question": "The dish goulash originated in which country?",
    "answers": {
      "A": "Austria",
      "B": "Czech Republic",
      "C": "Romania",
      "D": "Hungary"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1188",
    "fact": "Kimchi is a traditional Korean side dish of salted and fermented vegetables, most commonly napa cabbage and Korean radish, seasoned with chili powder, garlic, ginger, and other spices.",
    "question": "What is the main vegetable typically used to make traditional Korean kimchi?",
    "answers": {
      "A": "Bok choy",
      "B": "Napa cabbage",
      "C": "Daikon radish",
      "D": "Spring onion"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1189",
    "fact": "Pisco Sour is a cocktail that originated in Lima, Peru, in the early 1920s, made with pisco, lime juice, syrup, egg white, and Angostura bitters.",
    "question": "The Pisco Sour cocktail originated in which country?",
    "answers": {
      "A": "Chile",
      "B": "Peru",
      "C": "Argentina",
      "D": "Bolivia"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1190",
    "fact": "Balsamic vinegar of Modena is made from grape must (freshly crushed grape juice with skins, seeds, and stems) that is aged in wooden barrels.",
    "question": "Traditional balsamic vinegar from Modena is made from what base ingredient?",
    "answers": {
      "A": "Red wine",
      "B": "Apple cider",
      "C": "Grape must",
      "D": "Fermented rice"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1191",
    "fact": "Pho is a Vietnamese soup consisting of broth, rice noodles, herbs, and meat (usually beef or chicken). It originated in northern Vietnam in the early 20th century.",
    "question": "Pho is a traditional noodle soup from which country?",
    "answers": {
      "A": "Thailand",
      "B": "Cambodia",
      "C": "Vietnam",
      "D": "Laos"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1192",
    "fact": "The Maillard reaction is a chemical reaction between amino acids and reducing sugars that gives browned foods their distinctive flavor. It was first described by French chemist Louis-Camille Maillard in 1912.",
    "question": "What is the name of the chemical reaction that gives seared and browned foods their distinctive flavor?",
    "answers": {
      "A": "Maillard reaction",
      "B": "Caramelization",
      "C": "Fermentation",
      "D": "Emulsification"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1193",
    "fact": "Champagne can only legally be called Champagne if it is produced in the Champagne region of France, following strict production methods including the traditional method of secondary fermentation in the bottle.",
    "question": "Which grape varieties are the three main grapes permitted in Champagne production?",
    "answers": {
      "A": "Chardonnay, Sauvignon Blanc, Riesling",
      "B": "Chardonnay, Pinot Noir, Pinot Meunier",
      "C": "Pinot Noir, Merlot, Cabernet Franc",
      "D": "Chardonnay, Pinot Noir, Gamay"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1194",
    "fact": "Ceviche is a seafood dish where raw fish is cured in citrus juices, typically lime or lemon, with chili peppers and other seasonings. Peru is widely recognized as its origin.",
    "question": "Ceviche is most associated with the cuisine of which country?",
    "answers": {
      "A": "Mexico",
      "B": "Spain",
      "C": "Peru",
      "D": "Portugal"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1195",
    "fact": "Tofu is made by coagulating soy milk and then pressing the resulting curds into solid white blocks. It originated in China over 2,000 years ago.",
    "question": "Tofu is made by coagulating which liquid?",
    "answers": {
      "A": "Coconut milk",
      "B": "Rice milk",
      "C": "Almond milk",
      "D": "Soy milk"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1196",
    "fact": "Béchamel is one of the five 'mother sauces' of French cuisine, made from a white roux of butter and flour mixed with milk. The others are velouté, espagnole, hollandaise, and tomato.",
    "question": "Béchamel sauce is made by adding milk to a roux of butter and what other ingredient?",
    "answers": {
      "A": "Egg yolk",
      "B": "Flour",
      "C": "Cornstarch",
      "D": "Cream"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1197",
    "fact": "Biryani is a mixed rice dish with origins among the Muslims of the Indian subcontinent. Hyderabadi biryani is one of the most famous regional varieties.",
    "question": "Hyderabadi biryani is a famous variety of which dish?",
    "answers": {
      "A": "A rice dish",
      "B": "A bread",
      "C": "A lentil stew",
      "D": "A dessert"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1198",
    "fact": "Roquefort is a sheep milk blue cheese from southern France, ripened in the natural Combalou caves of Roquefort-sur-Soulzon. It is one of the world's best known blue cheeses.",
    "question": "Roquefort cheese is traditionally aged in natural caves in which country?",
    "answers": {
      "A": "Italy",
      "B": "Switzerland",
      "C": "France",
      "D": "Belgium"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1199",
    "fact": "Mole poblano is a rich, complex Mexican sauce that originated in the state of Puebla. It typically contains over 20 ingredients including chili peppers, chocolate, nuts, and spices.",
    "question": "Which unusual ingredient is famously included in the Mexican sauce mole poblano?",
    "answers": {
      "A": "Coffee",
      "B": "Chocolate",
      "C": "Banana",
      "D": "Honey"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1200",
    "fact": "Sake is a Japanese alcoholic beverage made by fermenting rice that has been polished to remove the bran. It typically has an alcohol content of around 15-20%.",
    "question": "Sake is brewed from which grain?",
    "answers": {
      "A": "Barley",
      "B": "Wheat",
      "C": "Rice",
      "D": "Millet"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1201",
    "fact": "Sous-vide, French for 'under vacuum', is a cooking technique where food is sealed in a plastic pouch and cooked in a temperature-controlled water bath for an extended period.",
    "question": "What does the French cooking term 'sous-vide' literally translate to?",
    "answers": {
      "A": "Slow cooking",
      "B": "Under vacuum",
      "C": "Low heat",
      "D": "Water bath"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1202",
    "fact": "Cassava (also called manioc or yuca) is the root vegetable from which tapioca pearls are extracted. It is a staple food in many tropical regions.",
    "question": "Tapioca is extracted from the root of which plant?",
    "answers": {
      "A": "Taro",
      "B": "Yam",
      "C": "Sweet potato",
      "D": "Cassava"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1203",
    "fact": "Chartreuse is a French herbal liqueur made by Carthusian monks since 1737 according to a secret recipe containing 130 herbs and plants. Its distinctive yellow-green color gave the color 'chartreuse' its name.",
    "question": "The liqueur Chartreuse has been produced by monks of which religious order since the 18th century?",
    "answers": {
      "A": "Benedictines",
      "B": "Carthusians",
      "C": "Trappists",
      "D": "Jesuits"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1204",
    "fact": "Alexander Graham Bell was granted U.S. Patent 174,465 for the telephone on March 7, 1876, narrowly beating Elisha Gray to the patent office.",
    "question": "Who was granted the first U.S. patent for the telephone in 1876?",
    "answers": {
      "A": "Thomas Edison",
      "B": "Alexander Graham Bell",
      "C": "Nikola Tesla",
      "D": "Guglielmo Marconi"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1205",
    "fact": "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN, the European particle physics laboratory.",
    "question": "At which organisation was Tim Berners-Lee working when he invented the World Wide Web?",
    "answers": {
      "A": "MIT",
      "B": "IBM",
      "C": "CERN",
      "D": "NASA"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1206",
    "fact": "Ada Lovelace wrote what is considered the first algorithm intended to be processed by a machine (Babbage's Analytical Engine) in 1843.",
    "question": "Who is widely regarded as the world's first computer programmer?",
    "answers": {
      "A": "Grace Hopper",
      "B": "Ada Lovelace",
      "C": "Hedy Lamarr",
      "D": "Mary Somerville"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1207",
    "fact": "The ENIAC (Electronic Numerical Integrator and Computer) was unveiled in 1946 at the University of Pennsylvania and is considered one of the first general-purpose electronic computers.",
    "question": "What was the name of the pioneering electronic general-purpose computer unveiled in 1946?",
    "answers": {
      "A": "UNIVAC",
      "B": "Colossus",
      "C": "ENIAC",
      "D": "EDVAC"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1208",
    "fact": "Johannes Gutenberg invented the movable-type printing press in Europe around 1440, revolutionising the spread of information.",
    "question": "Who invented the European movable-type printing press around 1440?",
    "answers": {
      "A": "Leonardo da Vinci",
      "B": "Johannes Gutenberg",
      "C": "William Caxton",
      "D": "Martin Luther"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1209",
    "fact": "The first iPhone was announced by Steve Jobs on January 9, 2007, and released to the public on June 29, 2007.",
    "question": "In which year was the first Apple iPhone released to the public?",
    "answers": {
      "A": "2005",
      "B": "2006",
      "C": "2007",
      "D": "2008"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1210",
    "fact": "Douglas Engelbart invented the computer mouse in the 1960s at the Stanford Research Institute, famously demonstrating it in 1968's 'Mother of All Demos'.",
    "question": "Who invented the computer mouse?",
    "answers": {
      "A": "Steve Wozniak",
      "B": "Vint Cerf",
      "C": "Douglas Engelbart",
      "D": "Alan Kay"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1211",
    "fact": "Karl Benz patented the Motorwagen in 1886, widely considered the first true automobile powered by an internal combustion engine.",
    "question": "Who patented the first practical automobile powered by an internal combustion engine in 1886?",
    "answers": {
      "A": "Henry Ford",
      "B": "Gottlieb Daimler",
      "C": "Karl Benz",
      "D": "Rudolf Diesel"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1212",
    "fact": "The transistor was invented at Bell Labs in 1947 by John Bardeen, Walter Brattain, and William Shockley, who later shared the 1956 Nobel Prize in Physics.",
    "question": "At which research laboratory was the transistor invented in 1947?",
    "answers": {
      "A": "Bell Labs",
      "B": "IBM Research",
      "C": "Xerox PARC",
      "D": "MIT Lincoln Lab"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1213",
    "fact": "Hedy Lamarr, the Hollywood actress, co-patented a frequency-hopping spread spectrum technology in 1942 that became a foundation for Wi-Fi and Bluetooth.",
    "question": "Which Hollywood actress co-patented a frequency-hopping technology that helped pave the way for Wi-Fi and Bluetooth?",
    "answers": {
      "A": "Marilyn Monroe",
      "B": "Hedy Lamarr",
      "C": "Ingrid Bergman",
      "D": "Greta Garbo"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1214",
    "fact": "James Watt significantly improved the Newcomen steam engine in the 1760s-1770s, patenting his separate condenser design in 1769.",
    "question": "Who patented the separate condenser steam engine in 1769, vastly improving its efficiency?",
    "answers": {
      "A": "Thomas Newcomen",
      "B": "George Stephenson",
      "C": "James Watt",
      "D": "Richard Trevithick"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1215",
    "fact": "Tim Berners-Lee released the first web browser, called WorldWideWeb (later renamed Nexus), in 1990.",
    "question": "What was the name of the first web browser, created by Tim Berners-Lee in 1990?",
    "answers": {
      "A": "Mosaic",
      "B": "WorldWideWeb",
      "C": "Netscape",
      "D": "Lynx"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1216",
    "fact": "Linus Torvalds began developing the Linux kernel in 1991 while a student at the University of Helsinki, releasing it under an open-source licence.",
    "question": "Who created the Linux kernel in 1991?",
    "answers": {
      "A": "Richard Stallman",
      "B": "Linus Torvalds",
      "C": "Ken Thompson",
      "D": "Dennis Ritchie"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1217",
    "fact": "John Logie Baird, a Scottish inventor, gave the first public demonstration of a working television system in London on 26 January 1926.",
    "question": "Who demonstrated the first working television system in 1926?",
    "answers": {
      "A": "Philo Farnsworth",
      "B": "Vladimir Zworykin",
      "C": "John Logie Baird",
      "D": "Guglielmo Marconi"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1218",
    "fact": "The integrated circuit (microchip) was independently invented by Jack Kilby of Texas Instruments in 1958 and Robert Noyce of Fairchild Semiconductor in 1959. Kilby won the 2000 Nobel Prize in Physics for it.",
    "question": "Which inventor of the integrated circuit received the 2000 Nobel Prize in Physics?",
    "answers": {
      "A": "Robert Noyce",
      "B": "Gordon Moore",
      "C": "Jack Kilby",
      "D": "William Shockley"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1219",
    "fact": "The QWERTY keyboard layout was designed by Christopher Latham Sholes in the 1870s for his typewriter, which was commercialised by E. Remington and Sons.",
    "question": "Who designed the QWERTY keyboard layout in the 1870s?",
    "answers": {
      "A": "Christopher Latham Sholes",
      "B": "Thomas Edison",
      "C": "Eliphalet Remington",
      "D": "August Dvorak"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq1220",
    "fact": "Vint Cerf and Bob Kahn developed TCP/IP, the foundational protocols of the internet, in the 1970s, earning them the title 'fathers of the internet'.",
    "question": "Which two computer scientists are known as the 'fathers of the internet' for developing TCP/IP?",
    "answers": {
      "A": "Bill Gates and Paul Allen",
      "B": "Vint Cerf and Bob Kahn",
      "C": "Larry Page and Sergey Brin",
      "D": "Steve Jobs and Steve Wozniak"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1221",
    "fact": "Mary Anderson patented the first windshield wiper in 1903 after observing drivers having to stop to clear their windscreens by hand.",
    "question": "Who patented the first windshield wiper in 1903?",
    "answers": {
      "A": "Bertha Benz",
      "B": "Margaret Knight",
      "C": "Mary Anderson",
      "D": "Josephine Cochrane"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1222",
    "fact": "Google was founded by Larry Page and Sergey Brin in September 1998 while they were PhD students at Stanford University.",
    "question": "In which year was Google officially founded?",
    "answers": {
      "A": "1996",
      "B": "1997",
      "C": "1998",
      "D": "1999"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1223",
    "fact": "Wilhelm Röntgen discovered X-rays in 1895 and was awarded the first Nobel Prize in Physics in 1901 for the discovery.",
    "question": "Who discovered X-rays in 1895?",
    "answers": {
      "A": "Marie Curie",
      "B": "Wilhelm Röntgen",
      "C": "Henri Becquerel",
      "D": "Ernest Rutherford"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1224",
    "fact": "Ray Tomlinson sent the first email between computers on the ARPANET in 1971 and chose the @ symbol to separate the user name from the host.",
    "question": "Who sent the first networked email and chose the @ symbol for email addresses?",
    "answers": {
      "A": "Vint Cerf",
      "B": "Tim Berners-Lee",
      "C": "Ray Tomlinson",
      "D": "Larry Roberts"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1225",
    "fact": "The first programmable, electronic, digital computer was Colossus, built by Tommy Flowers and used at Bletchley Park from 1944 to break German Lorenz ciphers.",
    "question": "What was the name of the British codebreaking computer used at Bletchley Park from 1944?",
    "answers": {
      "A": "The Bombe",
      "B": "Colossus",
      "C": "Enigma",
      "D": "Manchester Baby"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1226",
    "fact": "Bluetooth wireless technology is named after the 10th-century Danish King Harald 'Bluetooth' Gormsson, who united Denmark and Norway.",
    "question": "Bluetooth wireless technology is named after a 10th-century king of which country?",
    "answers": {
      "A": "Sweden",
      "B": "Norway",
      "C": "Denmark",
      "D": "Finland"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1227",
    "fact": "The first commercially successful photograph process, the daguerreotype, was announced by Louis Daguerre in France in 1839.",
    "question": "Who introduced the daguerreotype photographic process in 1839?",
    "answers": {
      "A": "William Henry Fox Talbot",
      "B": "Louis Daguerre",
      "C": "Joseph Nicéphore Niépce",
      "D": "George Eastman"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1228",
    "fact": "Philo Farnsworth transmitted the first all-electronic television image in 1927 and was awarded a key patent for electronic television in 1930.",
    "question": "Who is credited with transmitting the first all-electronic television image in 1927?",
    "answers": {
      "A": "John Logie Baird",
      "B": "Vladimir Zworykin",
      "C": "Philo Farnsworth",
      "D": "Lee de Forest"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1229",
    "fact": "Leo Tolstoy's 'War and Peace' was published in serial form between 1865 and 1867 before appearing as a complete novel in 1869.",
    "question": "Who wrote the epic novel 'War and Peace'?",
    "answers": {
      "A": "Fyodor Dostoevsky",
      "B": "Leo Tolstoy",
      "C": "Anton Chekhov",
      "D": "Ivan Turgenev"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1230",
    "fact": "Leonardo da Vinci painted the Mona Lisa between approximately 1503 and 1519. It hangs in the Louvre in Paris.",
    "question": "Which artist painted the Mona Lisa?",
    "answers": {
      "A": "Michelangelo",
      "B": "Raphael",
      "C": "Leonardo da Vinci",
      "D": "Donatello"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1231",
    "fact": "Ludwig van Beethoven composed nine symphonies, with the Ninth ('Choral') including the famous 'Ode to Joy' chorus.",
    "question": "How many symphonies did Ludwig van Beethoven complete?",
    "answers": {
      "A": "Seven",
      "B": "Nine",
      "C": "Eleven",
      "D": "Five"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1232",
    "fact": "George Orwell's 'Nineteen Eighty-Four' was published in 1949 and introduced terms like 'Big Brother' and 'doublethink'.",
    "question": "Who wrote the dystopian novel 'Nineteen Eighty-Four'?",
    "answers": {
      "A": "Aldous Huxley",
      "B": "Ray Bradbury",
      "C": "George Orwell",
      "D": "H.G. Wells"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1233",
    "fact": "Michelangelo sculpted the marble statue of David between 1501 and 1504. It now stands in the Galleria dell'Accademia in Florence.",
    "question": "Which Renaissance artist sculpted the famous statue of David in Florence?",
    "answers": {
      "A": "Bernini",
      "B": "Donatello",
      "C": "Michelangelo",
      "D": "Cellini"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1234",
    "fact": "Giuseppe Verdi composed 'Aida', which premiered at the Khedivial Opera House in Cairo in 1871.",
    "question": "Who composed the opera 'Aida'?",
    "answers": {
      "A": "Giacomo Puccini",
      "B": "Gioachino Rossini",
      "C": "Giuseppe Verdi",
      "D": "Vincenzo Bellini"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1235",
    "fact": "Vincent van Gogh painted 'The Starry Night' in June 1889 while staying at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence.",
    "question": "In which year did Vincent van Gogh paint 'The Starry Night'?",
    "answers": {
      "A": "1889",
      "B": "1875",
      "C": "1901",
      "D": "1893"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1236",
    "fact": "Harper Lee's 'To Kill a Mockingbird' was published in 1960 and won the Pulitzer Prize for Fiction in 1961.",
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "answers": {
      "A": "Truman Capote",
      "B": "Harper Lee",
      "C": "Flannery O'Connor",
      "D": "Carson McCullers"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1237",
    "fact": "Wolfgang Amadeus Mozart composed 'The Magic Flute' (Die Zauberflöte), which premiered in Vienna in 1791, just two months before his death.",
    "question": "Who composed the opera 'The Magic Flute'?",
    "answers": {
      "A": "Joseph Haydn",
      "B": "Johann Sebastian Bach",
      "C": "Wolfgang Amadeus Mozart",
      "D": "Franz Schubert"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1238",
    "fact": "Auguste Rodin created 'The Thinker', originally part of a larger commission known as 'The Gates of Hell', in 1880.",
    "question": "Which sculptor created 'The Thinker'?",
    "answers": {
      "A": "Constantin Brâncuși",
      "B": "Auguste Rodin",
      "C": "Henry Moore",
      "D": "Alberto Giacometti"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1239",
    "fact": "F. Scott Fitzgerald's 'The Great Gatsby' was published in 1925 and is set on Long Island during the Jazz Age.",
    "question": "Who wrote 'The Great Gatsby'?",
    "answers": {
      "A": "Ernest Hemingway",
      "B": "John Steinbeck",
      "C": "F. Scott Fitzgerald",
      "D": "William Faulkner"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1240",
    "fact": "Edvard Munch painted 'The Scream' in 1893; the iconic work exists in four versions, including paintings and pastels.",
    "question": "Which Norwegian artist painted 'The Scream'?",
    "answers": {
      "A": "Edvard Munch",
      "B": "Gustav Klimt",
      "C": "Egon Schiele",
      "D": "Wassily Kandinsky"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1241",
    "fact": "Richard Wagner composed the four-opera cycle 'Der Ring des Nibelungen' over about 26 years, completing it in 1874.",
    "question": "Which composer created the opera cycle 'Der Ring des Nibelungen'?",
    "answers": {
      "A": "Richard Strauss",
      "B": "Gustav Mahler",
      "C": "Richard Wagner",
      "D": "Anton Bruckner"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1242",
    "fact": "Jane Austen's 'Pride and Prejudice' was first published in 1813 and features the romance between Elizabeth Bennet and Mr. Darcy.",
    "question": "Who wrote 'Pride and Prejudice'?",
    "answers": {
      "A": "Charlotte Brontë",
      "B": "Jane Austen",
      "C": "Emily Brontë",
      "D": "George Eliot"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1243",
    "fact": "Pablo Picasso painted 'Guernica' in 1937 in response to the bombing of the Basque town during the Spanish Civil War.",
    "question": "Which historical event inspired Picasso's painting 'Guernica'?",
    "answers": {
      "A": "The Cuban Missile Crisis",
      "B": "The Russian Revolution",
      "C": "The Bombing of a Basque town during the Spanish Civil War",
      "D": "The Battle of the Somme"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1244",
    "fact": "Gabriel García Márquez wrote 'One Hundred Years of Solitude', published in 1967, a landmark of magical realism.",
    "question": "Who wrote 'One Hundred Years of Solitude'?",
    "answers": {
      "A": "Jorge Luis Borges",
      "B": "Mario Vargas Llosa",
      "C": "Gabriel García Márquez",
      "D": "Isabel Allende"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1245",
    "fact": "Johann Sebastian Bach composed the 'Brandenburg Concertos', a set of six instrumental works dedicated to the Margrave of Brandenburg in 1721.",
    "question": "Who composed the 'Brandenburg Concertos'?",
    "answers": {
      "A": "George Frideric Handel",
      "B": "Antonio Vivaldi",
      "C": "Georg Philipp Telemann",
      "D": "Johann Sebastian Bach"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1246",
    "fact": "Sandro Botticelli painted 'The Birth of Venus' around 1484–1486. It depicts Venus arriving at the shore on a giant scallop shell.",
    "question": "Which Renaissance artist painted 'The Birth of Venus'?",
    "answers": {
      "A": "Titian",
      "B": "Sandro Botticelli",
      "C": "Giorgione",
      "D": "Piero della Francesca"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1247",
    "fact": "Fyodor Dostoevsky's 'Crime and Punishment' was published in 1866 and follows the impoverished ex-student Rodion Raskolnikov.",
    "question": "Who wrote the novel 'Crime and Punishment'?",
    "answers": {
      "A": "Nikolai Gogol",
      "B": "Mikhail Bulgakov",
      "C": "Fyodor Dostoevsky",
      "D": "Boris Pasternak"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1248",
    "fact": "Giacomo Puccini composed 'Madama Butterfly', which premiered at La Scala in Milan in 1904. The story is set in Nagasaki, Japan.",
    "question": "In which country is the opera 'Madama Butterfly' set?",
    "answers": {
      "A": "China",
      "B": "Japan",
      "C": "Vietnam",
      "D": "Korea"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1249",
    "fact": "Salvador Dalí painted 'The Persistence of Memory' in 1931, famous for its melting pocket watches in a dreamlike landscape.",
    "question": "Which surrealist artist painted 'The Persistence of Memory', featuring melting clocks?",
    "answers": {
      "A": "René Magritte",
      "B": "Max Ernst",
      "C": "Joan Miró",
      "D": "Salvador Dalí"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1250",
    "fact": "James Joyce's 'Ulysses', published in 1922, takes place over a single day — 16 June 1904 — in Dublin, now celebrated as Bloomsday.",
    "question": "Over what time period does the action of James Joyce's 'Ulysses' take place?",
    "answers": {
      "A": "One year",
      "B": "One week",
      "C": "One single day",
      "D": "One month"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1251",
    "fact": "Pyotr Ilyich Tchaikovsky composed the ballet 'Swan Lake', which premiered at the Bolshoi Theatre in Moscow in 1877.",
    "question": "Who composed the ballet 'Swan Lake'?",
    "answers": {
      "A": "Sergei Rachmaninoff",
      "B": "Pyotr Ilyich Tchaikovsky",
      "C": "Igor Stravinsky",
      "D": "Nikolai Rimsky-Korsakov"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1252",
    "fact": "Johannes Vermeer painted 'Girl with a Pearl Earring' around 1665. It is housed in the Mauritshuis in The Hague.",
    "question": "Who painted 'Girl with a Pearl Earring'?",
    "answers": {
      "A": "Rembrandt van Rijn",
      "B": "Pieter Bruegel the Elder",
      "C": "Frans Hals",
      "D": "Johannes Vermeer"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1253",
    "fact": "Thomas Mann's novella 'Death in Venice' was published in 1912. Mann won the Nobel Prize in Literature in 1929.",
    "question": "Who wrote the novella 'Death in Venice'?",
    "answers": {
      "A": "Hermann Hesse",
      "B": "Thomas Mann",
      "C": "Franz Kafka",
      "D": "Stefan Zweig"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1254",
    "fact": "Mercury is the closest planet to the Sun, orbiting at an average distance of about 58 million kilometres.",
    "question": "Which planet in our solar system is closest to the Sun?",
    "answers": {
      "A": "Venus",
      "B": "Mercury",
      "C": "Mars",
      "D": "Earth"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1255",
    "fact": "Jupiter is the largest planet in the solar system, with a mass more than twice that of all the other planets combined.",
    "question": "Which is the largest planet in our solar system?",
    "answers": {
      "A": "Saturn",
      "B": "Neptune",
      "C": "Uranus",
      "D": "Jupiter"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1256",
    "fact": "The Milky Way is the spiral galaxy that contains our solar system, estimated to contain 100-400 billion stars.",
    "question": "What is the name of the galaxy that contains our solar system?",
    "answers": {
      "A": "Andromeda",
      "B": "Milky Way",
      "C": "Triangulum",
      "D": "Sombrero"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1257",
    "fact": "Mars is known as the Red Planet due to the iron oxide (rust) prevalent on its surface, giving it a reddish appearance.",
    "question": "Which planet is commonly known as the 'Red Planet'?",
    "answers": {
      "A": "Venus",
      "B": "Jupiter",
      "C": "Mars",
      "D": "Mercury"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1258",
    "fact": "Yuri Gagarin completed one orbit of Earth aboard Vostok 1 on 12 April 1961, becoming the first human in space.",
    "question": "Who was the first human to travel into space?",
    "answers": {
      "A": "Alan Shepard",
      "B": "John Glenn",
      "C": "Valentina Tereshkova",
      "D": "Yuri Gagarin"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1259",
    "fact": "The Sun is a G-type main-sequence star, classified as G2V, often referred to as a yellow dwarf.",
    "question": "What type of star is our Sun?",
    "answers": {
      "A": "Red giant",
      "B": "Yellow dwarf (G-type main sequence)",
      "C": "White dwarf",
      "D": "Blue supergiant"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1260",
    "fact": "Saturn is famous for its extensive ring system, made primarily of ice particles with a smaller amount of rocky debris and dust.",
    "question": "Which planet in our solar system is most famous for its prominent ring system?",
    "answers": {
      "A": "Jupiter",
      "B": "Uranus",
      "C": "Saturn",
      "D": "Neptune"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1261",
    "fact": "The Hubble Space Telescope was launched on 24 April 1990 aboard the Space Shuttle Discovery on mission STS-31.",
    "question": "In which year was the Hubble Space Telescope launched into orbit?",
    "answers": {
      "A": "1985",
      "B": "1990",
      "C": "1995",
      "D": "1998"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1262",
    "fact": "Proxima Centauri, part of the Alpha Centauri system, is the closest known star to the Sun at about 4.24 light-years away.",
    "question": "What is the closest known star to our Sun?",
    "answers": {
      "A": "Sirius",
      "B": "Barnard's Star",
      "C": "Proxima Centauri",
      "D": "Alpha Centauri A"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1263",
    "fact": "Valentina Tereshkova became the first woman in space when she flew aboard Vostok 6 in June 1963, orbiting Earth 48 times.",
    "question": "Who was the first woman to travel into space?",
    "answers": {
      "A": "Sally Ride",
      "B": "Valentina Tereshkova",
      "C": "Mae Jemison",
      "D": "Svetlana Savitskaya"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1264",
    "fact": "Ganymede, a moon of Jupiter, is the largest moon in the solar system and is even larger than the planet Mercury.",
    "question": "What is the largest moon in our solar system?",
    "answers": {
      "A": "Titan",
      "B": "Europa",
      "C": "Callisto",
      "D": "Ganymede"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1265",
    "fact": "The Andromeda Galaxy (M31) is the nearest large spiral galaxy to the Milky Way, located about 2.5 million light-years away.",
    "question": "Which is the nearest large spiral galaxy to the Milky Way?",
    "answers": {
      "A": "Triangulum Galaxy",
      "B": "Large Magellanic Cloud",
      "C": "Andromeda Galaxy",
      "D": "Whirlpool Galaxy"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1266",
    "fact": "Venus has the longest day of any planet in the solar system, with one rotation taking about 243 Earth days — longer than its year of 225 Earth days.",
    "question": "Which planet has the longest day (rotation period) in our solar system?",
    "answers": {
      "A": "Mercury",
      "B": "Venus",
      "C": "Mars",
      "D": "Jupiter"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1267",
    "fact": "The Voyager 1 probe, launched in 1977, became the first human-made object to enter interstellar space in August 2012.",
    "question": "Which spacecraft was the first to enter interstellar space?",
    "answers": {
      "A": "Pioneer 10",
      "B": "New Horizons",
      "C": "Voyager 1",
      "D": "Voyager 2"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1268",
    "fact": "A light-year is the distance that light travels in one year in a vacuum, approximately 9.46 trillion kilometres.",
    "question": "What does a 'light-year' measure?",
    "answers": {
      "A": "Time",
      "B": "Distance",
      "C": "Brightness",
      "D": "Mass"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1269",
    "fact": "Olympus Mons on Mars is the largest volcano and the tallest known mountain in the solar system, standing about 22 km high.",
    "question": "On which planet is Olympus Mons, the largest volcano in the solar system, located?",
    "answers": {
      "A": "Venus",
      "B": "Earth",
      "C": "Mars",
      "D": "Mercury"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1270",
    "fact": "Pluto was reclassified from a planet to a 'dwarf planet' by the International Astronomical Union in August 2006.",
    "question": "In which year was Pluto reclassified as a 'dwarf planet'?",
    "answers": {
      "A": "2001",
      "B": "2004",
      "C": "2006",
      "D": "2010"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1271",
    "fact": "The James Webb Space Telescope launched on 25 December 2021 aboard an Ariane 5 rocket from French Guiana.",
    "question": "On what date did the James Webb Space Telescope launch?",
    "answers": {
      "A": "25 December 2021",
      "B": "4 July 2021",
      "C": "1 January 2022",
      "D": "20 November 2020"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1272",
    "fact": "Apollo 13 launched on 11 April 1970 but a service module oxygen tank exploded, forcing the crew to abort their lunar landing and safely return to Earth.",
    "question": "Which Apollo mission famously suffered an in-flight emergency in 1970, forcing it to abort its Moon landing?",
    "answers": {
      "A": "Apollo 11",
      "B": "Apollo 12",
      "C": "Apollo 13",
      "D": "Apollo 14"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1273",
    "fact": "Betelgeuse, a red supergiant in the constellation Orion, marks Orion's right shoulder and is one of the largest stars visible to the naked eye.",
    "question": "Betelgeuse, a famous red supergiant star, is located in which constellation?",
    "answers": {
      "A": "Ursa Major",
      "B": "Cassiopeia",
      "C": "Orion",
      "D": "Cygnus"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1274",
    "fact": "The event horizon is the boundary of a black hole beyond which nothing — not even light — can escape its gravitational pull.",
    "question": "What is the name of the boundary surrounding a black hole beyond which nothing can escape?",
    "answers": {
      "A": "Singularity",
      "B": "Event horizon",
      "C": "Accretion disk",
      "D": "Schwarzschild ring"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1275",
    "fact": "The Chicxulub impact crater on the Yucatán Peninsula in Mexico is widely believed to be the result of the asteroid impact that contributed to the extinction of the dinosaurs about 66 million years ago.",
    "question": "What is the name of the impact crater linked to the extinction of the dinosaurs?",
    "answers": {
      "A": "Vredefort",
      "B": "Sudbury",
      "C": "Chicxulub",
      "D": "Tunguska"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1276",
    "fact": "The Cassini–Huygens mission orbited Saturn from 2004 to 2017, with the Huygens probe successfully landing on Saturn's moon Titan in January 2005.",
    "question": "The Huygens probe, part of the Cassini mission, landed on which moon in 2005?",
    "answers": {
      "A": "Europa",
      "B": "Titan",
      "C": "Enceladus",
      "D": "Triton"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1277",
    "fact": "A parsec is approximately 3.26 light-years, defined as the distance at which one astronomical unit subtends an angle of one arcsecond.",
    "question": "Approximately how many light-years are in one parsec?",
    "answers": {
      "A": "1.0",
      "B": "3.26",
      "C": "9.46",
      "D": "10.5"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1279",
    "fact": "Pi (π) is the ratio of a circle's circumference to its diameter, approximately 3.14159.",
    "question": "What mathematical constant represents the ratio of a circle's circumference to its diameter?",
    "answers": {
      "A": "e",
      "B": "π (pi)",
      "C": "φ (phi)",
      "D": "γ (gamma)"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1280",
    "fact": "The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse.",
    "question": "Which theorem states that the square of the hypotenuse equals the sum of the squares of the other two sides in a right triangle?",
    "answers": {
      "A": "Fermat's Last Theorem",
      "B": "Euclid's Theorem",
      "C": "Pythagorean Theorem",
      "D": "Thales's Theorem"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1281",
    "fact": "Euler's number e is approximately 2.71828 and is the base of natural logarithms.",
    "question": "What is the approximate value of Euler's number 'e' to two decimal places?",
    "answers": {
      "A": "3.14",
      "B": "1.62",
      "C": "2.72",
      "D": "2.41"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1282",
    "fact": "The golden ratio, denoted φ (phi), is approximately 1.618 and appears in art, architecture, and nature.",
    "question": "What is the approximate numerical value of the golden ratio (φ)?",
    "answers": {
      "A": "1.414",
      "B": "1.618",
      "C": "2.718",
      "D": "3.142"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1283",
    "fact": "Andrew Wiles proved Fermat's Last Theorem in 1994, more than 350 years after it was conjectured.",
    "question": "Which mathematician proved Fermat's Last Theorem in 1994?",
    "answers": {
      "A": "Grigori Perelman",
      "B": "Terence Tao",
      "C": "Andrew Wiles",
      "D": "John Nash"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1284",
    "fact": "The sum of the interior angles of any triangle in Euclidean geometry is 180 degrees.",
    "question": "What is the sum of the interior angles of a triangle in Euclidean geometry?",
    "answers": {
      "A": "90°",
      "B": "180°",
      "C": "270°",
      "D": "360°"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1285",
    "fact": "Euclid, often called the 'Father of Geometry', wrote 'The Elements' around 300 BCE.",
    "question": "Which ancient Greek mathematician wrote 'The Elements', one of the most influential mathematical works in history?",
    "answers": {
      "A": "Pythagoras",
      "B": "Archimedes",
      "C": "Euclid",
      "D": "Thales"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1286",
    "fact": "Euler's identity, e^(iπ) + 1 = 0, is often called the most beautiful equation in mathematics.",
    "question": "Euler's identity famously links five fundamental constants: 0, 1, π, e, and which other?",
    "answers": {
      "A": "φ",
      "B": "i (the imaginary unit)",
      "C": "γ",
      "D": "√2"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1287",
    "fact": "A dodecahedron has 12 faces, each a regular pentagon. It is one of the five Platonic solids.",
    "question": "How many faces does a regular dodecahedron have?",
    "answers": {
      "A": "8",
      "B": "10",
      "C": "12",
      "D": "20"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1288",
    "fact": "There are exactly five Platonic solids: tetrahedron, cube, octahedron, dodecahedron, and icosahedron.",
    "question": "How many Platonic solids exist?",
    "answers": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1289",
    "fact": "Grigori Perelman proved the Poincaré conjecture in the early 2000s and famously declined the Fields Medal and the $1 million Clay Millennium Prize.",
    "question": "Which Russian mathematician proved the Poincaré conjecture and declined the Fields Medal?",
    "answers": {
      "A": "Andrey Kolmogorov",
      "B": "Grigori Perelman",
      "C": "Sergei Novikov",
      "D": "Vladimir Arnold"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1290",
    "fact": "The Fibonacci sequence starts 0, 1, 1, 2, 3, 5, 8, 13, 21, 34... Each number is the sum of the two preceding ones.",
    "question": "In the Fibonacci sequence starting 0, 1, 1, 2, 3, 5, 8..., what is the next number after 8?",
    "answers": {
      "A": "11",
      "B": "13",
      "C": "15",
      "D": "16"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1291",
    "fact": "A googol is 10^100, a 1 followed by 100 zeros. The term was coined by 9-year-old Milton Sirotta.",
    "question": "How many zeros follow the 1 in the number known as a 'googol'?",
    "answers": {
      "A": "10",
      "B": "100",
      "C": "1,000",
      "D": "1,000,000"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1292",
    "fact": "Carl Friedrich Gauss is often called the 'Prince of Mathematicians' for his immense contributions to many fields.",
    "question": "Which German mathematician is known as the 'Prince of Mathematicians'?",
    "answers": {
      "A": "Bernhard Riemann",
      "B": "Leonhard Euler",
      "C": "Carl Friedrich Gauss",
      "D": "David Hilbert"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1293",
    "fact": "The Riemann Hypothesis, proposed by Bernhard Riemann in 1859, concerns the distribution of the zeros of the Riemann zeta function.",
    "question": "The Riemann Hypothesis is concerned with the zeros of which mathematical function?",
    "answers": {
      "A": "Gamma function",
      "B": "Zeta function",
      "C": "Beta function",
      "D": "Theta function"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1294",
    "fact": "A regular hexagon can be divided into 6 equilateral triangles, and its interior angles each measure 120°.",
    "question": "What is the measure of each interior angle of a regular hexagon?",
    "answers": {
      "A": "60°",
      "B": "108°",
      "C": "120°",
      "D": "135°"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1295",
    "fact": "The Clay Mathematics Institute announced seven Millennium Prize Problems in 2000, each with a $1 million prize.",
    "question": "How many Millennium Prize Problems were announced by the Clay Mathematics Institute in 2000?",
    "answers": {
      "A": "5",
      "B": "7",
      "C": "10",
      "D": "23"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1296",
    "fact": "Ada Lovelace is often considered the first computer programmer for her work on Charles Babbage's Analytical Engine.",
    "question": "Which 19th-century mathematician is often credited as the world's first computer programmer?",
    "answers": {
      "A": "Florence Nightingale",
      "B": "Sophie Germain",
      "C": "Ada Lovelace",
      "D": "Emmy Noether"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1297",
    "fact": "Square root of 2 is approximately 1.41421356 and was the first known irrational number, discovered by the Pythagoreans.",
    "question": "What is the approximate value of √2 to three decimal places?",
    "answers": {
      "A": "1.414",
      "B": "1.618",
      "C": "1.732",
      "D": "2.236"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1298",
    "fact": "Archimedes is famously credited with shouting 'Eureka!' after discovering the principle of buoyancy.",
    "question": "Which ancient Greek mathematician is said to have shouted 'Eureka!' after discovering a principle in his bath?",
    "answers": {
      "A": "Euclid",
      "B": "Archimedes",
      "C": "Plato",
      "D": "Hipparchus"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1299",
    "fact": "The Fields Medal is awarded every four years to mathematicians under the age of 40.",
    "question": "What is the maximum age at which a mathematician can be awarded the Fields Medal?",
    "answers": {
      "A": "30",
      "B": "35",
      "C": "40",
      "D": "50"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1300",
    "fact": "Maryam Mirzakhani became the first woman to win the Fields Medal in 2014 for her work on Riemann surfaces.",
    "question": "Who was the first woman to be awarded the Fields Medal?",
    "answers": {
      "A": "Emmy Noether",
      "B": "Maryam Mirzakhani",
      "C": "Karen Uhlenbeck",
      "D": "Sofia Kovalevskaya"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1301",
    "fact": "Kurt Gödel's incompleteness theorems, published in 1931, showed that any consistent formal arithmetic system contains statements that cannot be proven within it.",
    "question": "Which Austrian-born logician is famous for his incompleteness theorems published in 1931?",
    "answers": {
      "A": "Ludwig Wittgenstein",
      "B": "Alan Turing",
      "C": "Bertrand Russell",
      "D": "Kurt Gödel"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq1302",
    "fact": "A sphere's volume is given by V = (4/3)πr³, derived by Archimedes.",
    "question": "What is the formula for the volume of a sphere of radius r?",
    "answers": {
      "A": "4πr²",
      "B": "(4/3)πr³",
      "C": "πr²h",
      "D": "2πr³"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1303",
    "fact": "Hilbert presented 23 unsolved problems at the International Congress of Mathematicians in Paris in 1900, shaping 20th-century mathematics.",
    "question": "How many problems did David Hilbert present in his famous 1900 address to the International Congress of Mathematicians?",
    "answers": {
      "A": "10",
      "B": "17",
      "C": "23",
      "D": "30"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1304",
    "fact": "The Torah consists of the first five books of the Hebrew Bible: Genesis, Exodus, Leviticus, Numbers, and Deuteronomy.",
    "question": "How many books make up the Torah?",
    "answers": {
      "A": "Three",
      "B": "Five",
      "C": "Seven",
      "D": "Ten"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1305",
    "fact": "Ra (or Re) was the ancient Egyptian sun god, often depicted with the head of a falcon and a sun disk above it.",
    "question": "In ancient Egyptian mythology, who was the sun god?",
    "answers": {
      "A": "Anubis",
      "B": "Osiris",
      "C": "Ra",
      "D": "Thoth"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1306",
    "fact": "Mecca, in modern-day Saudi Arabia, is the birthplace of the Prophet Muhammad and the holiest city in Islam.",
    "question": "Which city is considered the holiest in Islam?",
    "answers": {
      "A": "Medina",
      "B": "Jerusalem",
      "C": "Mecca",
      "D": "Damascus"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1307",
    "fact": "Thor, the Norse god of thunder, wields the mighty hammer Mjölnir, capable of leveling mountains.",
    "question": "What is the name of Thor's hammer in Norse mythology?",
    "answers": {
      "A": "Gungnir",
      "B": "Mjölnir",
      "C": "Gram",
      "D": "Skofnung"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1308",
    "fact": "Siddhartha Gautama, who became known as the Buddha, is the founder of Buddhism and lived in ancient India around the 5th-6th century BCE.",
    "question": "What was the birth name of the Buddha?",
    "answers": {
      "A": "Ashoka Maurya",
      "B": "Mahavira",
      "C": "Siddhartha Gautama",
      "D": "Bodhidharma"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1309",
    "fact": "The Bhagavad Gita is a 700-verse Hindu scripture that is part of the epic Mahabharata, featuring a dialogue between Prince Arjuna and Krishna.",
    "question": "The Bhagavad Gita is part of which larger Hindu epic?",
    "answers": {
      "A": "Ramayana",
      "B": "Mahabharata",
      "C": "Vedas",
      "D": "Puranas"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1310",
    "fact": "Shinto is the indigenous religion of Japan, centered on the veneration of kami (spirits) found in nature and ancestors.",
    "question": "Shinto is the indigenous religion of which country?",
    "answers": {
      "A": "Korea",
      "B": "China",
      "C": "Vietnam",
      "D": "Japan"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1311",
    "fact": "Anubis, the jackal-headed god, was the ancient Egyptian deity of mummification and the afterlife.",
    "question": "Which Egyptian god is depicted with the head of a jackal and is associated with mummification?",
    "answers": {
      "A": "Horus",
      "B": "Set",
      "C": "Anubis",
      "D": "Sobek"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1312",
    "fact": "Guru Nanak (1469–1539) founded Sikhism in the Punjab region and was the first of the ten Sikh Gurus.",
    "question": "Who was the founder of Sikhism?",
    "answers": {
      "A": "Guru Gobind Singh",
      "B": "Guru Nanak",
      "C": "Guru Arjan",
      "D": "Guru Ram Das"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1313",
    "fact": "The Greek goddess Athena was born fully grown and armored from the head of Zeus after he swallowed her mother Metis.",
    "question": "According to Greek mythology, from which part of Zeus's body was Athena born?",
    "answers": {
      "A": "His heart",
      "B": "His thigh",
      "C": "His head",
      "D": "His side"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1314",
    "fact": "Ramadan is the ninth month of the Islamic lunar calendar, during which Muslims fast from dawn until sunset.",
    "question": "Ramadan is which month in the Islamic calendar?",
    "answers": {
      "A": "First",
      "B": "Sixth",
      "C": "Ninth",
      "D": "Twelfth"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1315",
    "fact": "The Tripitaka, meaning 'three baskets,' is the traditional collection of Buddhist scriptures in the Pali Canon of Theravada Buddhism.",
    "question": "What does the Buddhist scripture name 'Tripitaka' literally mean?",
    "answers": {
      "A": "Three jewels",
      "B": "Three baskets",
      "C": "Three paths",
      "D": "Three truths"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1316",
    "fact": "Quetzalcoatl, the feathered serpent, was a major deity in Aztec and broader Mesoamerican religion, associated with wind, learning, and creation.",
    "question": "Which Aztec deity is known as the 'feathered serpent'?",
    "answers": {
      "A": "Tezcatlipoca",
      "B": "Huitzilopochtli",
      "C": "Quetzalcoatl",
      "D": "Tlaloc"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1317",
    "fact": "Yom Kippur, the Day of Atonement, is the holiest day in the Jewish calendar, marked by fasting and intensive prayer.",
    "question": "What is the holiest day in the Jewish calendar?",
    "answers": {
      "A": "Passover",
      "B": "Hanukkah",
      "C": "Rosh Hashanah",
      "D": "Yom Kippur"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1318",
    "fact": "Valhalla, ruled by Odin, is the great hall in Norse mythology where warriors who die in battle are taken by the Valkyries.",
    "question": "In Norse mythology, who rules over Valhalla?",
    "answers": {
      "A": "Thor",
      "B": "Loki",
      "C": "Odin",
      "D": "Freyr"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1319",
    "fact": "The Ganges River is considered sacred in Hinduism, personified as the goddess Ganga, and is believed to purify sins for those who bathe in it.",
    "question": "Which river is considered most sacred in Hinduism?",
    "answers": {
      "A": "Yamuna",
      "B": "Ganges",
      "C": "Indus",
      "D": "Brahmaputra"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1320",
    "fact": "Ahura Mazda is the supreme creator deity in Zoroastrianism, founded by the prophet Zoroaster (Zarathustra) in ancient Persia.",
    "question": "Ahura Mazda is the supreme god of which religion?",
    "answers": {
      "A": "Jainism",
      "B": "Manichaeism",
      "C": "Zoroastrianism",
      "D": "Bahá'í Faith"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1321",
    "fact": "The Five Pillars of Islam are Shahada (faith), Salat (prayer), Zakat (charity), Sawm (fasting), and Hajj (pilgrimage).",
    "question": "How many Pillars of Islam are there?",
    "answers": {
      "A": "Three",
      "B": "Five",
      "C": "Seven",
      "D": "Ten"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1322",
    "fact": "Cerberus is the three-headed dog that guards the entrance to the underworld in Greek mythology, preventing the dead from leaving.",
    "question": "How many heads does Cerberus, the guardian of the Greek underworld, traditionally have?",
    "answers": {
      "A": "Two",
      "B": "Three",
      "C": "Five",
      "D": "Seven"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1323",
    "fact": "Jainism's principle of Ahimsa, or non-violence toward all living beings, is so strict that devout Jains often sweep paths before walking and wear masks to avoid harming insects.",
    "question": "Which Indian religion places the strictest emphasis on Ahimsa (non-violence)?",
    "answers": {
      "A": "Hinduism",
      "B": "Buddhism",
      "C": "Sikhism",
      "D": "Jainism"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1324",
    "fact": "The Tao Te Ching, traditionally attributed to Laozi, is the foundational text of Taoism and dates to around the 6th–4th century BCE.",
    "question": "Who is traditionally credited as the author of the Tao Te Ching?",
    "answers": {
      "A": "Confucius",
      "B": "Mencius",
      "C": "Laozi",
      "D": "Zhuangzi"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1325",
    "fact": "In Hindu cosmology, the Trimurti consists of Brahma the creator, Vishnu the preserver, and Shiva the destroyer.",
    "question": "Which Hindu deity is known as 'the Preserver' in the Trimurti?",
    "answers": {
      "A": "Brahma",
      "B": "Vishnu",
      "C": "Shiva",
      "D": "Indra"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1326",
    "fact": "Ragnarök is the prophesied end-of-the-world battle in Norse mythology, during which many gods including Odin, Thor, and Loki are foretold to die.",
    "question": "What is the name of the apocalyptic battle in Norse mythology?",
    "answers": {
      "A": "Götterdämmerung",
      "B": "Ginnungagap",
      "C": "Ragnarök",
      "D": "Yggdrasil"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1327",
    "fact": "Amaterasu, the sun goddess, is the most important deity in Shinto and is considered the mythological ancestor of the Japanese imperial family.",
    "question": "Which Shinto deity is the sun goddess and mythological ancestor of the Japanese imperial line?",
    "answers": {
      "A": "Tsukuyomi",
      "B": "Susanoo",
      "C": "Inari",
      "D": "Amaterasu"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq1328",
    "fact": "The Avesta is the primary collection of sacred texts of Zoroastrianism, composed in the Avestan language and including the Gathas attributed to Zoroaster himself.",
    "question": "What is the name of the primary sacred scripture of Zoroastrianism?",
    "answers": {
      "A": "The Avesta",
      "B": "The Vendidad",
      "C": "The Denkard",
      "D": "The Bundahishn"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq1329",
    "fact": "Roald Amundsen led the Norwegian expedition that reached the geographic South Pole on 14 December 1911, beating Robert Falcon Scott's British team by about five weeks.",
    "question": "Who led the first expedition to reach the South Pole?",
    "answers": {
      "A": "Ernest Shackleton",
      "B": "Roald Amundsen",
      "C": "Robert Falcon Scott",
      "D": "Fridtjof Nansen"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1332",
    "fact": "On 14 October 2012, Austrian skydiver Felix Baumgartner jumped from a helium balloon at around 39 kilometres, breaking the sound barrier in free fall.",
    "question": "Which Austrian skydiver became the first person to break the sound barrier in free fall during the 2012 Red Bull Stratos jump?",
    "answers": {
      "A": "Felix Baumgartner",
      "B": "Alan Eustace",
      "C": "Joseph Kittinger",
      "D": "Luke Aikins"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1333",
    "fact": "Nelson Mandela served as President of South Africa from 1994 to 1999, having been imprisoned for 27 years before his release in 1990.",
    "question": "In which year did Nelson Mandela become President of South Africa?",
    "answers": {
      "A": "1990",
      "B": "1992",
      "C": "1994",
      "D": "1996"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1334",
    "fact": "Ferdinand Magellan organised the Spanish expedition that became the first to circumnavigate the globe, though Magellan himself was killed in the Philippines in 1521 before its completion.",
    "question": "Which Portuguese explorer led the first expedition to circumnavigate the globe, although he died before its completion?",
    "answers": {
      "A": "Vasco da Gama",
      "B": "Bartolomeu Dias",
      "C": "Ferdinand Magellan",
      "D": "Pedro Álvares Cabral"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1336",
    "fact": "Vincent van Gogh painted 'The Starry Night' in June 1889 while staying at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, France.",
    "question": "Which artist painted 'The Starry Night' in 1889?",
    "answers": {
      "A": "Claude Monet",
      "B": "Paul Gauguin",
      "C": "Vincent van Gogh",
      "D": "Paul Cézanne"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1338",
    "fact": "Sir Edmund Hillary of New Zealand and Tenzing Norgay of Nepal reached the summit of Mount Everest on 29 May 1953.",
    "question": "Along with Tenzing Norgay, who made the first confirmed ascent of Mount Everest in 1953?",
    "answers": {
      "A": "George Mallory",
      "B": "Edmund Hillary",
      "C": "Chris Bonington",
      "D": "Reinhold Messner"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1339",
    "fact": "Charles Darwin published 'On the Origin of Species' in 1859, presenting his theory of evolution by natural selection.",
    "question": "In what year did Charles Darwin publish 'On the Origin of Species'?",
    "answers": {
      "A": "1838",
      "B": "1849",
      "C": "1859",
      "D": "1871"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1340",
    "fact": "Margaret Thatcher served as British Prime Minister from 1979 to 1990, becoming the UK's first female PM and the longest-serving of the 20th century.",
    "question": "Who was the first woman to serve as Prime Minister of the United Kingdom?",
    "answers": {
      "A": "Theresa May",
      "B": "Margaret Thatcher",
      "C": "Liz Truss",
      "D": "Barbara Castle"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1341",
    "fact": "Frida Kahlo, born in Coyoacán in 1907, is renowned for her self-portraits drawing on Mexican folk art and her own physical suffering.",
    "question": "Which Mexican artist is famous for self-portraits including 'The Two Fridas' and 'Self-Portrait with Thorn Necklace and Hummingbird'?",
    "answers": {
      "A": "Diego Rivera",
      "B": "Frida Kahlo",
      "C": "Remedios Varo",
      "D": "Leonora Carrington"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1342",
    "fact": "Alexander Fleming discovered penicillin in 1928 at St Mary's Hospital, London, when he noticed mould inhibiting bacterial growth on a Petri dish.",
    "question": "Which Scottish scientist is credited with discovering penicillin in 1928?",
    "answers": {
      "A": "Joseph Lister",
      "B": "Howard Florey",
      "C": "Alexander Fleming",
      "D": "Ernst Chain"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1343",
    "fact": "Captain James Cook commanded HMS Endeavour on his first voyage (1768–1771), during which he charted New Zealand and the eastern coast of Australia.",
    "question": "What was the name of the ship Captain James Cook commanded on his first voyage of discovery?",
    "answers": {
      "A": "HMS Resolution",
      "B": "HMS Discovery",
      "C": "HMS Beagle",
      "D": "HMS Endeavour"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1344",
    "fact": "Roger Bannister ran the first sub-four-minute mile at Iffley Road track in Oxford on 6 May 1954, clocking 3:59.4.",
    "question": "Who was the first person to run a mile in under four minutes?",
    "answers": {
      "A": "John Landy",
      "B": "Roger Bannister",
      "C": "Herb Elliott",
      "D": "Sebastian Coe"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1345",
    "fact": "Pablo Picasso painted 'Guernica' in 1937 in response to the bombing of the Basque town of Guernica during the Spanish Civil War.",
    "question": "Which 1937 painting by Pablo Picasso depicts the suffering caused by the bombing of a Basque town during the Spanish Civil War?",
    "answers": {
      "A": "The Weeping Woman",
      "B": "Les Demoiselles d'Avignon",
      "C": "Guernica",
      "D": "The Old Guitarist"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1346",
    "fact": "Amelia Earhart became the first woman to fly solo across the Atlantic in May 1932, flying from Newfoundland to Northern Ireland.",
    "question": "In 1932, who became the first woman to fly solo across the Atlantic Ocean?",
    "answers": {
      "A": "Bessie Coleman",
      "B": "Amy Johnson",
      "C": "Amelia Earhart",
      "D": "Jacqueline Cochran"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1347",
    "fact": "Stephen Hawking was Lucasian Professor of Mathematics at the University of Cambridge from 1979 to 2009, a chair once held by Isaac Newton.",
    "question": "Which prestigious Cambridge chair, once held by Isaac Newton, did Stephen Hawking occupy from 1979 to 2009?",
    "answers": {
      "A": "Plumian Professor",
      "B": "Lucasian Professor of Mathematics",
      "C": "Cavendish Professor of Physics",
      "D": "Sadleirian Professor"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1348",
    "fact": "Genghis Khan founded the Mongol Empire in 1206 after uniting the nomadic tribes of the Mongolian steppe; it became the largest contiguous land empire in history.",
    "question": "Who founded the Mongol Empire in 1206?",
    "answers": {
      "A": "Kublai Khan",
      "B": "Tamerlane",
      "C": "Genghis Khan",
      "D": "Ögedei Khan"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1349",
    "fact": "Jeanne Calment of France lived to 122 years and 164 days (1875–1997), the longest confirmed human lifespan on record.",
    "question": "Who holds the record for the longest confirmed human lifespan, dying at 122 years old in 1997?",
    "answers": {
      "A": "Sarah Knauss",
      "B": "Jeanne Calment",
      "C": "Kane Tanaka",
      "D": "Lucile Randon"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1350",
    "fact": "David Livingstone was the Scottish missionary and explorer whom Henry Morton Stanley famously greeted with 'Dr. Livingstone, I presume?' at Ujiji in 1871.",
    "question": "Which African explorer was famously greeted by Henry Morton Stanley with the words 'Dr. Livingstone, I presume?'",
    "answers": {
      "A": "Richard Burton",
      "B": "John Hanning Speke",
      "C": "David Livingstone",
      "D": "Mungo Park"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1351",
    "fact": "Rosalind Franklin's X-ray diffraction image known as 'Photo 51', taken in 1952, was crucial in revealing the double-helix structure of DNA.",
    "question": "Whose X-ray diffraction work, including 'Photo 51', was crucial to the discovery of DNA's double helix structure?",
    "answers": {
      "A": "Barbara McClintock",
      "B": "Rosalind Franklin",
      "C": "Dorothy Hodgkin",
      "D": "Lise Meitner"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1352",
    "fact": "Junko Tabei of Japan became the first woman to reach the summit of Mount Everest on 16 May 1975.",
    "question": "Who became the first woman to summit Mount Everest in 1975?",
    "answers": {
      "A": "Wanda Rutkiewicz",
      "B": "Junko Tabei",
      "C": "Lydia Bradey",
      "D": "Alison Hargreaves"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1353",
    "fact": "Michelangelo painted the Sistine Chapel ceiling between 1508 and 1512 under commission from Pope Julius II.",
    "question": "Which Renaissance artist painted the ceiling of the Sistine Chapel between 1508 and 1512?",
    "answers": {
      "A": "Raphael",
      "B": "Donatello",
      "C": "Michelangelo",
      "D": "Titian"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1354",
    "fact": "The blue whale (Balaenoptera musculus) can reach lengths of up to 30 metres and weigh over 180 tonnes, making it the largest animal ever known to have existed.",
    "question": "What is the largest animal ever known to have lived on Earth?",
    "answers": {
      "A": "African elephant",
      "B": "Blue whale",
      "C": "Argentinosaurus",
      "D": "Sperm whale"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1355",
    "fact": "The peregrine falcon can reach speeds over 240 mph (390 km/h) during its hunting stoop (dive), making it the fastest member of the animal kingdom.",
    "question": "Which animal holds the record for the fastest speed in the animal kingdom?",
    "answers": {
      "A": "Cheetah",
      "B": "Sailfish",
      "C": "Peregrine falcon",
      "D": "Golden eagle"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1356",
    "fact": "The cheetah is the fastest land animal, capable of reaching speeds of around 70 mph (112 km/h) in short bursts.",
    "question": "Which is the fastest land animal in the world?",
    "answers": {
      "A": "Pronghorn antelope",
      "B": "Lion",
      "C": "Cheetah",
      "D": "Greyhound"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1357",
    "fact": "Mammals are warm-blooded vertebrates characterized by mammary glands which produce milk to feed their young.",
    "question": "What is the defining feature that gives the class Mammalia its name?",
    "answers": {
      "A": "Live birth",
      "B": "Hair or fur",
      "C": "Mammary glands",
      "D": "Warm-bloodedness"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1358",
    "fact": "The giant panda was downgraded from 'Endangered' to 'Vulnerable' on the IUCN Red List in 2016 thanks to extensive conservation efforts in China.",
    "question": "In 2016, which iconic species was downgraded from 'Endangered' to 'Vulnerable' on the IUCN Red List?",
    "answers": {
      "A": "Snow leopard",
      "B": "Giant panda",
      "C": "Mountain gorilla",
      "D": "Bengal tiger"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1359",
    "fact": "The ostrich (Struthio camelus) lays the largest eggs of any living bird, weighing up to 1.4 kg each.",
    "question": "Which bird lays the largest egg of any living species?",
    "answers": {
      "A": "Emu",
      "B": "Albatross",
      "C": "Ostrich",
      "D": "Cassowary"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1360",
    "fact": "Echolocation is used by bats, dolphins, and some whales to navigate and hunt by emitting sounds and listening to the echoes that bounce back from objects.",
    "question": "What is the name of the biological sonar used by bats and dolphins to navigate?",
    "answers": {
      "A": "Echolocation",
      "B": "Magnetoreception",
      "C": "Bioluminescence",
      "D": "Thermoception"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1361",
    "fact": "The vaquita, a small porpoise found only in the northern Gulf of California, is the world's most endangered marine mammal with fewer than 10 individuals estimated to remain.",
    "question": "Which critically endangered porpoise found only in the Gulf of California is considered the world's rarest marine mammal?",
    "answers": {
      "A": "Maui dolphin",
      "B": "Yangtze finless porpoise",
      "C": "Vaquita",
      "D": "Harbour porpoise"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1362",
    "fact": "Although it has 'fish' in its name, the starfish (sea star) is an echinoderm, related to sea urchins and sand dollars, not a fish.",
    "question": "To which phylum does the starfish belong?",
    "answers": {
      "A": "Mollusca",
      "B": "Echinodermata",
      "C": "Cnidaria",
      "D": "Arthropoda"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1363",
    "fact": "The Etruscan shrew (Suncus etruscus) weighs about 1.8 grams on average, making it the smallest mammal by mass.",
    "question": "What is the smallest mammal in the world by mass?",
    "answers": {
      "A": "Bumblebee bat",
      "B": "Pygmy mouse lemur",
      "C": "Etruscan shrew",
      "D": "African pygmy mouse"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1364",
    "fact": "Honeybees perform a 'waggle dance' to communicate the direction and distance of food sources to other members of the hive, as discovered by Karl von Frisch.",
    "question": "What behavior do honeybees use to communicate the location of food sources to other bees?",
    "answers": {
      "A": "Pheromone trails",
      "B": "Waggle dance",
      "C": "Buzzing patterns",
      "D": "Antennal tapping"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1365",
    "fact": "The Arctic tern (Sterna paradisaea) makes the longest known migration of any animal, traveling roughly 70,000 km annually between the Arctic and Antarctic.",
    "question": "Which bird holds the record for the longest annual migration in the animal kingdom?",
    "answers": {
      "A": "Bar-tailed godwit",
      "B": "Arctic tern",
      "C": "Wandering albatross",
      "D": "Sooty shearwater"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1366",
    "fact": "The Komodo dragon (Varanus komodoensis), found on a few Indonesian islands, is the world's largest living lizard, growing up to 3 metres long.",
    "question": "What is the largest living species of lizard in the world?",
    "answers": {
      "A": "Perentie",
      "B": "Nile monitor",
      "C": "Komodo dragon",
      "D": "Saltwater crocodile"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1367",
    "fact": "An octopus has three hearts: two pump blood through the gills, while the third circulates it through the rest of the body.",
    "question": "How many hearts does an octopus have?",
    "answers": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1368",
    "fact": "The IUCN Red List categories from least to most threatened are: Least Concern, Near Threatened, Vulnerable, Endangered, Critically Endangered, Extinct in the Wild, and Extinct.",
    "question": "On the IUCN Red List, which category indicates a higher extinction risk than 'Endangered'?",
    "answers": {
      "A": "Vulnerable",
      "B": "Near Threatened",
      "C": "Critically Endangered",
      "D": "Threatened"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1369",
    "fact": "The bootlace worm (Lineus longissimus), a type of ribbon worm, can reach lengths over 55 metres, making it arguably the longest animal in the world.",
    "question": "Which marine creature is often cited as the longest animal on Earth, with some specimens exceeding 55 metres?",
    "answers": {
      "A": "Lion's mane jellyfish",
      "B": "Giant squid",
      "C": "Bootlace worm",
      "D": "Oarfish"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1370",
    "fact": "The Hainan gibbon (Nomascus hainanus) of China is the world's rarest primate, with around 30-40 individuals remaining on Hainan Island.",
    "question": "Which is considered the world's rarest primate, with fewer than 40 individuals left?",
    "answers": {
      "A": "Mountain gorilla",
      "B": "Hainan gibbon",
      "C": "Cross River gorilla",
      "D": "Tarsier"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1371",
    "fact": "Marsupials, including kangaroos, koalas, and opossums, give birth to relatively undeveloped young that typically continue to develop in a pouch.",
    "question": "Kangaroos, koalas, and opossums all belong to which group of mammals?",
    "answers": {
      "A": "Monotremes",
      "B": "Placentals",
      "C": "Marsupials",
      "D": "Eutherians"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1372",
    "fact": "The platypus and echidnas are the only living monotremes — mammals that lay eggs instead of giving birth to live young.",
    "question": "Which two types of mammals are the only living monotremes?",
    "answers": {
      "A": "Platypus and echidna",
      "B": "Platypus and wombat",
      "C": "Echidna and koala",
      "D": "Aardvark and pangolin"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1373",
    "fact": "The mantis shrimp has the most complex eyes in the animal kingdom, with up to 16 types of photoreceptor cells (compared to humans' three).",
    "question": "Which animal has the most complex eyes in the animal kingdom, with up to 16 types of photoreceptors?",
    "answers": {
      "A": "Dragonfly",
      "B": "Mantis shrimp",
      "C": "Giant squid",
      "D": "Chameleon"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1374",
    "fact": "The bee hummingbird (Mellisuga helenae), native to Cuba, is the smallest bird in the world, measuring just 5-6 cm in length.",
    "question": "What is the smallest species of bird in the world?",
    "answers": {
      "A": "Goldcrest",
      "B": "Bee hummingbird",
      "C": "Pygmy nuthatch",
      "D": "Elf owl"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1375",
    "fact": "The Galápagos tortoise and certain species like the Aldabra giant tortoise can live over 150 years, with some individuals reportedly reaching 190+.",
    "question": "Which animal is widely regarded as the longest-living land vertebrate?",
    "answers": {
      "A": "African elephant",
      "B": "Galápagos tortoise",
      "C": "Greenland shark",
      "D": "Bowhead whale"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1376",
    "fact": "The thylacine, or Tasmanian tiger, was a carnivorous marsupial declared extinct after the last known individual died in Hobart Zoo in 1936.",
    "question": "The thylacine, declared extinct in 1936, was native to which country?",
    "answers": {
      "A": "New Zealand",
      "B": "Australia",
      "C": "Papua New Guinea",
      "D": "Indonesia"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1377",
    "fact": "The box jellyfish (Chironex fleckeri) found in waters off northern Australia is considered the most venomous marine creature, capable of killing a human in minutes.",
    "question": "Which marine animal is widely considered the most venomous in the world?",
    "answers": {
      "A": "Stonefish",
      "B": "Blue-ringed octopus",
      "C": "Box jellyfish",
      "D": "Cone snail"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1379",
    "fact": "Coca-Cola was invented by pharmacist John Pemberton in Atlanta, Georgia in 1886, originally sold as a medicinal tonic at Jacob's Pharmacy.",
    "question": "In which US city was Coca-Cola invented in 1886?",
    "answers": {
      "A": "Atlanta",
      "B": "Charleston",
      "C": "Nashville",
      "D": "Memphis"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1380",
    "fact": "The Wall Street Crash began on Black Thursday, October 24, 1929, and the most devastating day was Black Tuesday, October 29, 1929, triggering the Great Depression.",
    "question": "In which year did the Wall Street Crash occur, marking the start of the Great Depression?",
    "answers": {
      "A": "1925",
      "B": "1929",
      "C": "1931",
      "D": "1933"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1381",
    "fact": "The euro was introduced as an accounting currency in 1999, with banknotes and coins entering circulation on 1 January 2002 in 12 EU member states.",
    "question": "In which year did euro banknotes and coins enter physical circulation?",
    "answers": {
      "A": "1999",
      "B": "2000",
      "C": "2002",
      "D": "2004"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1382",
    "fact": "Toyota Motor Corporation was founded by Kiichiro Toyoda in 1937 as a spinoff from his father's company, Toyota Industries.",
    "question": "Who founded Toyota Motor Corporation in 1937?",
    "answers": {
      "A": "Soichiro Honda",
      "B": "Kiichiro Toyoda",
      "C": "Masaru Ibuka",
      "D": "Akio Morita"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1383",
    "fact": "The Dutch East India Company (VOC), founded in 1602, is widely considered the world's first publicly traded company and issued the first shares to the public.",
    "question": "Which company, founded in 1602, is generally regarded as the world's first publicly traded company?",
    "answers": {
      "A": "Hudson's Bay Company",
      "B": "British East India Company",
      "C": "Dutch East India Company",
      "D": "Muscovy Company"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1384",
    "fact": "The currency of Vietnam is the đồng, which was introduced in 1978 after the reunification of North and South Vietnam.",
    "question": "What is the official currency of Vietnam?",
    "answers": {
      "A": "Kip",
      "B": "Riel",
      "C": "Baht",
      "D": "Dong"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1385",
    "fact": "Amazon was founded by Jeff Bezos on July 5, 1994, originally as an online bookstore operating out of his garage in Bellevue, Washington.",
    "question": "In what year was Amazon founded by Jeff Bezos?",
    "answers": {
      "A": "1992",
      "B": "1994",
      "C": "1996",
      "D": "1998"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1386",
    "fact": "The Bretton Woods Conference was held in July 1944 at the Mount Washington Hotel in Bretton Woods, New Hampshire, establishing the IMF and World Bank.",
    "question": "In which US state was the 1944 Bretton Woods Conference held?",
    "answers": {
      "A": "Vermont",
      "B": "Maine",
      "C": "New Hampshire",
      "D": "Massachusetts"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1387",
    "fact": "Nokia was founded in 1865 as a pulp mill by Fredrik Idestam on the banks of the Tammerkoski rapids in southwestern Finland.",
    "question": "In what industry did the Finnish company Nokia originally start in 1865?",
    "answers": {
      "A": "Pulp/paper milling",
      "B": "Rubber boots",
      "C": "Telegraph cables",
      "D": "Television manufacturing"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq1388",
    "fact": "The South Sea Bubble of 1720 in Britain was a major stock market crash centered on the South Sea Company, which had been granted a monopoly on trade with South America.",
    "question": "In which year did the South Sea Bubble burst in Britain?",
    "answers": {
      "A": "1715",
      "B": "1720",
      "C": "1729",
      "D": "1745"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1389",
    "fact": "The currency of Poland is the złoty, whose name literally means 'golden' in Polish. It has been the official currency since 1924.",
    "question": "What is the name of the official currency of Poland?",
    "answers": {
      "A": "Koruna",
      "B": "Forint",
      "C": "Złoty",
      "D": "Leu"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1390",
    "fact": "Lehman Brothers filed for Chapter 11 bankruptcy protection on September 15, 2008, marking the largest bankruptcy filing in US history and a key moment in the global financial crisis.",
    "question": "In what month and year did Lehman Brothers file for bankruptcy?",
    "answers": {
      "A": "September 2008",
      "B": "October 2008",
      "C": "March 2008",
      "D": "January 2009"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1391",
    "fact": "Adidas was founded in 1949 by Adolf 'Adi' Dassler in Herzogenaurach, Germany, after he split from his brother Rudolf, who went on to found Puma.",
    "question": "Who founded the sportswear company Adidas in 1949?",
    "answers": {
      "A": "Rudolf Dassler",
      "B": "Adolf Dassler",
      "C": "Hugo Boss",
      "D": "Karl Albrecht"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1392",
    "fact": "OPEC (Organization of the Petroleum Exporting Countries) was founded in Baghdad, Iraq on September 14, 1960, by Iran, Iraq, Kuwait, Saudi Arabia, and Venezuela.",
    "question": "In which city was OPEC founded in 1960?",
    "answers": {
      "A": "Riyadh",
      "B": "Vienna",
      "C": "Tehran",
      "D": "Baghdad"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq1393",
    "fact": "The London Stock Exchange traces its origins to 1571 with the founding of the Royal Exchange by Sir Thomas Gresham, though the LSE itself was formally founded in 1801.",
    "question": "Who founded the Royal Exchange in London in 1571, a precursor to the London Stock Exchange?",
    "answers": {
      "A": "Sir Francis Drake",
      "B": "Sir Thomas Gresham",
      "C": "Sir Walter Raleigh",
      "D": "Sir Robert Peel"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1394",
    "fact": "The Swiss franc (CHF) is the official currency of Switzerland and Liechtenstein. Its ISO code 'CHF' stands for Confoederatio Helvetica Franc.",
    "question": "What does the 'CH' in the Swiss franc's ISO code 'CHF' stand for?",
    "answers": {
      "A": "Confoederatio Helvetica",
      "B": "Cantons Helvétiques",
      "C": "Central Helvetia",
      "D": "Chur Helvetia"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq1395",
    "fact": "Walmart was founded by Sam Walton in 1962, with the first store opening in Rogers, Arkansas. It is now the world's largest company by revenue.",
    "question": "Who founded Walmart in 1962?",
    "answers": {
      "A": "Ray Kroc",
      "B": "Sam Walton",
      "C": "Richard Sears",
      "D": "James Cash Penney"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1396",
    "fact": "The North American Free Trade Agreement (NAFTA) came into effect on January 1, 1994, between the United States, Canada, and Mexico. It was replaced by USMCA in 2020.",
    "question": "On what date did NAFTA come into effect?",
    "answers": {
      "A": "January 1, 1992",
      "B": "January 1, 1994",
      "C": "July 4, 1993",
      "D": "January 1, 1995"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1397",
    "fact": "Google was founded by Larry Page and Sergey Brin in September 1998 while they were PhD students at Stanford University.",
    "question": "At which university were Google's founders Larry Page and Sergey Brin students when they started the company?",
    "answers": {
      "A": "MIT",
      "B": "Harvard",
      "C": "Stanford",
      "D": "Berkeley"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1398",
    "fact": "The Hanseatic League was a medieval commercial and defensive confederation of merchant guilds and market towns in Northwestern and Central Europe, dominant from the 13th to 17th centuries, centered on Lübeck.",
    "question": "Which German city is considered the historical 'capital' of the medieval Hanseatic League?",
    "answers": {
      "A": "Hamburg",
      "B": "Bremen",
      "C": "Lübeck",
      "D": "Cologne"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1399",
    "fact": "Hyperinflation in the Weimar Republic peaked in November 1923, when 1 US dollar was worth approximately 4.2 trillion German marks.",
    "question": "In which year did hyperinflation in Germany's Weimar Republic reach its peak?",
    "answers": {
      "A": "1919",
      "B": "1921",
      "C": "1923",
      "D": "1926"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1400",
    "fact": "Ferrari was founded by Enzo Ferrari in 1939 as Auto Avio Costruzioni, becoming Ferrari S.p.A. in 1947 when the first car bearing the Ferrari name was produced.",
    "question": "Who founded the Italian sports car manufacturer Ferrari?",
    "answers": {
      "A": "Ferruccio Lamborghini",
      "B": "Enzo Ferrari",
      "C": "Battista Pininfarina",
      "D": "Giovanni Agnelli"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1401",
    "fact": "The yen became Japan's official currency in 1871 with the New Currency Act, replacing the complex monetary system of the Edo period.",
    "question": "In which year was the yen established as Japan's official currency?",
    "answers": {
      "A": "1853",
      "B": "1868",
      "C": "1871",
      "D": "1889"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1402",
    "fact": "Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, in Albuquerque, New Mexico, before relocating to the Seattle area in 1979.",
    "question": "In which US city was Microsoft originally founded in 1975?",
    "answers": {
      "A": "Seattle",
      "B": "Redmond",
      "C": "Albuquerque",
      "D": "San Francisco"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1403",
    "fact": "The World Trade Organization (WTO) was established on January 1, 1995, replacing the General Agreement on Tariffs and Trade (GATT) which had been in place since 1948.",
    "question": "What organization did the World Trade Organization replace when it was established in 1995?",
    "answers": {
      "A": "IMF",
      "B": "GATT",
      "C": "OECD",
      "D": "UNCTAD"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1405",
    "fact": "Insulin was discovered in 1921 by Frederick Banting and Charles Best at the University of Toronto.",
    "question": "Who is credited with the discovery of insulin in 1921, alongside Charles Best?",
    "answers": {
      "A": "Frederick Banting",
      "B": "Jonas Salk",
      "C": "Paul Ehrlich",
      "D": "Robert Koch"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1406",
    "fact": "The smallpox vaccine was developed by Edward Jenner in 1796 using cowpox material.",
    "question": "Which disease was the first to be eradicated worldwide through vaccination?",
    "answers": {
      "A": "Polio",
      "B": "Smallpox",
      "C": "Measles",
      "D": "Tuberculosis"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1407",
    "fact": "The hippocampus, located in the temporal lobe, is critical for forming new memories and spatial navigation.",
    "question": "Which part of the brain is primarily responsible for the formation of new memories?",
    "answers": {
      "A": "Cerebellum",
      "B": "Amygdala",
      "C": "Hippocampus",
      "D": "Medulla oblongata"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1408",
    "fact": "Christiaan Barnard performed the first successful human-to-human heart transplant in Cape Town in December 1967.",
    "question": "Which surgeon performed the world's first successful human heart transplant in 1967?",
    "answers": {
      "A": "Michael DeBakey",
      "B": "Denton Cooley",
      "C": "Norman Shumway",
      "D": "Christiaan Barnard"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1409",
    "fact": "Hemophilia is a hereditary disorder where blood lacks sufficient clotting factors, leading to prolonged bleeding.",
    "question": "Hemophilia is a disorder affecting which body function?",
    "answers": {
      "A": "Blood clotting",
      "B": "Digestion",
      "C": "Vision",
      "D": "Hearing"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1410",
    "fact": "Jonas Salk developed the first effective inactivated polio vaccine, announced in 1955.",
    "question": "Who developed the first effective polio vaccine in the 1950s?",
    "answers": {
      "A": "Albert Sabin",
      "B": "Jonas Salk",
      "C": "Maurice Hilleman",
      "D": "Louis Pasteur"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1411",
    "fact": "The pancreas produces insulin and glucagon to regulate blood sugar, as well as digestive enzymes.",
    "question": "Which organ produces insulin in the human body?",
    "answers": {
      "A": "Liver",
      "B": "Kidney",
      "C": "Pancreas",
      "D": "Spleen"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1412",
    "fact": "Multiple sclerosis is an autoimmune disease in which the immune system attacks the myelin sheath surrounding nerve fibres.",
    "question": "Multiple sclerosis primarily affects which part of the body?",
    "answers": {
      "A": "Joints and cartilage",
      "B": "Lungs and bronchi",
      "C": "Central nervous system",
      "D": "Liver and kidneys"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1413",
    "fact": "Hippocrates, born around 460 BC on the Greek island of Kos, is often called the 'Father of Medicine'.",
    "question": "Which ancient Greek physician is known as the 'Father of Medicine'?",
    "answers": {
      "A": "Galen",
      "B": "Aristotle",
      "C": "Hippocrates",
      "D": "Pythagoras"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1414",
    "fact": "The human body has 206 bones in adulthood, although babies are born with around 270 that fuse over time.",
    "question": "How many bones are typically in the adult human body?",
    "answers": {
      "A": "186",
      "B": "206",
      "C": "226",
      "D": "246"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1416",
    "fact": "The medical term 'tachycardia' refers to an abnormally fast heart rate, generally over 100 beats per minute at rest.",
    "question": "What does the medical term 'tachycardia' refer to?",
    "answers": {
      "A": "Low blood pressure",
      "B": "Slow heart rate",
      "C": "Fast heart rate",
      "D": "Irregular breathing"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1417",
    "fact": "Florence Nightingale, known as 'The Lady with the Lamp', pioneered modern nursing during the Crimean War.",
    "question": "Who is considered the founder of modern nursing?",
    "answers": {
      "A": "Mary Seacole",
      "B": "Clara Barton",
      "C": "Florence Nightingale",
      "D": "Edith Cavell"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1418",
    "fact": "The deltoid muscle covers the shoulder joint and is responsible for arm abduction.",
    "question": "The deltoid muscle is located in which part of the body?",
    "answers": {
      "A": "Thigh",
      "B": "Shoulder",
      "C": "Lower back",
      "D": "Calf"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1419",
    "fact": "Andreas Vesalius's 1543 work 'De humani corporis fabrica' revolutionised the study of human anatomy.",
    "question": "Which 16th-century Flemish anatomist is considered the founder of modern human anatomy?",
    "answers": {
      "A": "William Harvey",
      "B": "Ambroise Paré",
      "C": "Andreas Vesalius",
      "D": "Paracelsus"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1420",
    "fact": "Helicobacter pylori was identified by Barry Marshall and Robin Warren as the main cause of peptic ulcers, earning them the 2005 Nobel Prize.",
    "question": "Which bacterium was discovered to be the main cause of most stomach ulcers?",
    "answers": {
      "A": "Escherichia coli",
      "B": "Helicobacter pylori",
      "C": "Staphylococcus aureus",
      "D": "Clostridium difficile"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1421",
    "fact": "William Harvey published 'De Motu Cordis' in 1628, describing the circulation of blood pumped by the heart.",
    "question": "Which English physician first accurately described the circulation of blood in 1628?",
    "answers": {
      "A": "Thomas Sydenham",
      "B": "John Hunter",
      "C": "William Harvey",
      "D": "Edward Jenner"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1422",
    "fact": "The cornea is the transparent front layer of the eye, responsible for most of the eye's focusing power.",
    "question": "What is the name of the transparent front part of the eye that covers the iris and pupil?",
    "answers": {
      "A": "Retina",
      "B": "Sclera",
      "C": "Cornea",
      "D": "Choroid"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1423",
    "fact": "Karl Landsteiner discovered the ABO blood group system in 1901, winning the Nobel Prize in 1930.",
    "question": "Who discovered the main human blood groups (A, B, AB and O) in 1901?",
    "answers": {
      "A": "Karl Landsteiner",
      "B": "Paul Ehrlich",
      "C": "Emil von Behring",
      "D": "Robert Koch"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq1424",
    "fact": "Rheumatoid arthritis is an autoimmune disease that primarily attacks the synovial membranes of joints.",
    "question": "Rheumatoid arthritis is classified as what type of disease?",
    "answers": {
      "A": "Infectious",
      "B": "Autoimmune",
      "C": "Genetic only",
      "D": "Nutritional deficiency"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1425",
    "fact": "The liver is the largest internal organ and performs over 500 functions including detoxification, protein synthesis, and bile production.",
    "question": "Which is the largest internal organ in the human body?",
    "answers": {
      "A": "Brain",
      "B": "Lungs",
      "C": "Liver",
      "D": "Kidneys"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1427",
    "fact": "The medical term for high blood pressure is hypertension, a condition that increases the risk of heart disease and stroke.",
    "question": "What is the medical term for high blood pressure?",
    "answers": {
      "A": "Hypotension",
      "B": "Hyperglycemia",
      "C": "Hypertension",
      "D": "Hyperthermia"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1429",
    "fact": "The Eiffel Tower was designed by Gustave Eiffel's engineering firm and completed in 1889 as the entrance arch for the World's Fair celebrating the centennial of the French Revolution.",
    "question": "In which year was the Eiffel Tower completed?",
    "answers": {
      "A": "1879",
      "B": "1889",
      "C": "1899",
      "D": "1909"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1430",
    "fact": "The Burj Khalifa in Dubai stands at 828 meters (2,717 feet) tall and has been the world's tallest building since its opening in 2010.",
    "question": "What is the height of the Burj Khalifa?",
    "answers": {
      "A": "632 meters",
      "B": "728 meters",
      "C": "828 meters",
      "D": "928 meters"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1431",
    "fact": "The Sydney Opera House was designed by Danish architect Jørn Utzon and opened in 1973. He won the Pritzker Prize in 2003 for this iconic work.",
    "question": "Which architect designed the Sydney Opera House?",
    "answers": {
      "A": "Frank Lloyd Wright",
      "B": "Jørn Utzon",
      "C": "Le Corbusier",
      "D": "Renzo Piano"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1433",
    "fact": "The Leaning Tower of Pisa is the freestanding bell tower (campanile) of the cathedral of the Italian city of Pisa, and tilts due to unstable foundation soil.",
    "question": "The Leaning Tower of Pisa is actually what type of building?",
    "answers": {
      "A": "A lighthouse",
      "B": "A bell tower",
      "C": "A watchtower",
      "D": "A clock tower"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1434",
    "fact": "The Guggenheim Museum Bilbao, designed by Frank Gehry and opened in 1997, is famous for its titanium-clad curving forms and is considered a landmark of contemporary architecture.",
    "question": "Who designed the Guggenheim Museum Bilbao?",
    "answers": {
      "A": "Zaha Hadid",
      "B": "I.M. Pei",
      "C": "Frank Gehry",
      "D": "Norman Foster"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1435",
    "fact": "The Taj Mahal was commissioned in 1632 by Mughal emperor Shah Jahan as a mausoleum for his favorite wife, Mumtaz Mahal.",
    "question": "The Taj Mahal was built by Shah Jahan in memory of whom?",
    "answers": {
      "A": "His mother",
      "B": "His wife Mumtaz Mahal",
      "C": "His father",
      "D": "His daughter"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1436",
    "fact": "The Empire State Building, completed in 1931, was the world's tallest building for nearly 40 years until the construction of the North Tower of the World Trade Center in 1970.",
    "question": "In which year was the Empire State Building completed?",
    "answers": {
      "A": "1925",
      "B": "1931",
      "C": "1939",
      "D": "1945"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1437",
    "fact": "Antoni Gaudí began work on the Sagrada Família in Barcelona in 1883, and the basilica remains under construction more than 140 years later.",
    "question": "Which architect designed Barcelona's Sagrada Família?",
    "answers": {
      "A": "Santiago Calatrava",
      "B": "Antoni Gaudí",
      "C": "Ricardo Bofill",
      "D": "Rafael Moneo"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1438",
    "fact": "The Colosseum, originally known as the Flavian Amphitheatre, was completed in 80 AD under Emperor Titus and could hold an estimated 50,000–80,000 spectators.",
    "question": "Under which Roman emperor was the Colosseum completed?",
    "answers": {
      "A": "Nero",
      "B": "Vespasian",
      "C": "Titus",
      "D": "Hadrian"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1439",
    "fact": "The Petronas Towers in Kuala Lumpur, designed by César Pelli, were the world's tallest buildings from 1998 to 2004 at 452 meters tall.",
    "question": "In which city are the Petronas Towers located?",
    "answers": {
      "A": "Singapore",
      "B": "Jakarta",
      "C": "Kuala Lumpur",
      "D": "Bangkok"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1440",
    "fact": "Frank Lloyd Wright designed Fallingwater, a residence built partly over a waterfall in southwestern Pennsylvania, completed in 1937 for the Kaufmann family.",
    "question": "Which famous house designed by Frank Lloyd Wright is built over a waterfall?",
    "answers": {
      "A": "Robie House",
      "B": "Fallingwater",
      "C": "Taliesin West",
      "D": "Hollyhock House"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1441",
    "fact": "The Golden Gate Bridge, opened in 1937, spans the Golden Gate strait connecting San Francisco to Marin County. Its main span is 1,280 meters.",
    "question": "The Golden Gate Bridge connects San Francisco to which county?",
    "answers": {
      "A": "Alameda County",
      "B": "San Mateo County",
      "C": "Marin County",
      "D": "Contra Costa County"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1442",
    "fact": "Christ the Redeemer, a 30-meter Art Deco statue overlooking Rio de Janeiro, was designed by Brazilian engineer Heitor da Silva Costa and sculpted by French sculptor Paul Landowski.",
    "question": "On which mountain does the Christ the Redeemer statue stand?",
    "answers": {
      "A": "Sugarloaf Mountain",
      "B": "Corcovado",
      "C": "Pedra da Gávea",
      "D": "Tijuca Peak"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1443",
    "fact": "The Pantheon in Rome, completed around 126 AD under Emperor Hadrian, still holds the record for the world's largest unreinforced concrete dome.",
    "question": "What architectural distinction does Rome's Pantheon still hold today?",
    "answers": {
      "A": "Oldest standing building",
      "B": "Largest unreinforced concrete dome",
      "C": "Tallest ancient structure",
      "D": "Largest marble floor"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1444",
    "fact": "The Shard in London, designed by Italian architect Renzo Piano, opened in 2012 and is 310 meters tall, making it the tallest building in the UK.",
    "question": "Who designed The Shard in London?",
    "answers": {
      "A": "Norman Foster",
      "B": "Richard Rogers",
      "C": "Renzo Piano",
      "D": "Zaha Hadid"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1445",
    "fact": "The Hagia Sophia in Istanbul was completed in 537 AD under Byzantine emperor Justinian I and served as a cathedral, then a mosque, then a museum, and is again a mosque today.",
    "question": "Under which Byzantine emperor was the Hagia Sophia completed?",
    "answers": {
      "A": "Constantine I",
      "B": "Justinian I",
      "C": "Theodosius II",
      "D": "Basil II"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1446",
    "fact": "Machu Picchu, the famous 15th-century Inca citadel, sits at approximately 2,430 meters above sea level on a mountain ridge in the Cusco region of Peru.",
    "question": "In which country is Machu Picchu located?",
    "answers": {
      "A": "Bolivia",
      "B": "Ecuador",
      "C": "Peru",
      "D": "Chile"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1447",
    "fact": "The Chrysler Building in New York City, completed in 1930, was designed by William Van Alen in the Art Deco style and was briefly the world's tallest building before being surpassed by the Empire State Building.",
    "question": "In which architectural style is New York's Chrysler Building designed?",
    "answers": {
      "A": "Beaux-Arts",
      "B": "Art Deco",
      "C": "International Style",
      "D": "Gothic Revival"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1448",
    "fact": "The Louvre Pyramid, designed by Chinese-American architect I.M. Pei, was completed in 1989 and serves as the main entrance to the Louvre Museum in Paris.",
    "question": "Who designed the glass pyramid at the Louvre in Paris?",
    "answers": {
      "A": "I.M. Pei",
      "B": "Jean Nouvel",
      "C": "Philip Johnson",
      "D": "Tadao Ando"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1449",
    "fact": "The Great Wall of China is not a single continuous wall but a series of fortifications built over centuries; the most famous sections were built during the Ming Dynasty (1368–1644).",
    "question": "During which dynasty were the most famous sections of the Great Wall of China built?",
    "answers": {
      "A": "Han",
      "B": "Tang",
      "C": "Ming",
      "D": "Qing"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1450",
    "fact": "Zaha Hadid, the Iraqi-British architect, became the first woman to receive the Pritzker Architecture Prize in 2004. She designed the London Aquatics Centre and Heydar Aliyev Center.",
    "question": "Who was the first woman to win the Pritzker Architecture Prize?",
    "answers": {
      "A": "Kazuyo Sejima",
      "B": "Zaha Hadid",
      "C": "Denise Scott Brown",
      "D": "Jeanne Gang"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1451",
    "fact": "The Brooklyn Bridge, completed in 1883, was designed by John A. Roebling and was the first steel-wire suspension bridge ever built, spanning the East River in New York.",
    "question": "Who designed the Brooklyn Bridge?",
    "answers": {
      "A": "Gustav Lindenthal",
      "B": "John A. Roebling",
      "C": "Othmar Ammann",
      "D": "James Eads"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1452",
    "fact": "St. Peter's Basilica in Vatican City, with a dome designed by Michelangelo, has the largest interior of any Christian church in the world.",
    "question": "Who designed the dome of St. Peter's Basilica in Vatican City?",
    "answers": {
      "A": "Bernini",
      "B": "Bramante",
      "C": "Michelangelo",
      "D": "Raphael"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1453",
    "fact": "The CN Tower in Toronto, completed in 1976, stands 553.3 meters tall and was the world's tallest free-standing structure for over 30 years until surpassed by the Burj Khalifa.",
    "question": "In which Canadian city is the CN Tower located?",
    "answers": {
      "A": "Montreal",
      "B": "Vancouver",
      "C": "Toronto",
      "D": "Ottawa"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1454",
    "fact": "The word 'salary' comes from the Latin 'salarium', which referred to payments made to Roman soldiers, possibly to buy salt ('sal').",
    "question": "From which Latin word, meaning 'salt', does the English word 'salary' derive?",
    "answers": {
      "A": "Solidus",
      "B": "Sal",
      "C": "Sanguis",
      "D": "Solum"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1455",
    "fact": "Mandarin Chinese has the most native speakers of any language in the world, with around 900 million native speakers.",
    "question": "Which language has the most native speakers worldwide?",
    "answers": {
      "A": "English",
      "B": "Spanish",
      "C": "Mandarin Chinese",
      "D": "Hindi"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1456",
    "fact": "The French phrase 'déjà vu' literally translates as 'already seen', describing the feeling of having experienced a present situation before.",
    "question": "What does the French phrase 'déjà vu' literally translate to in English?",
    "answers": {
      "A": "Already seen",
      "B": "Already done",
      "C": "Already known",
      "D": "Already felt"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1457",
    "fact": "Esperanto was created by L. L. Zamenhof, a Polish-Jewish ophthalmologist, and published in 1887 as an easy-to-learn international auxiliary language.",
    "question": "Who created the constructed language Esperanto, first published in 1887?",
    "answers": {
      "A": "Noam Chomsky",
      "B": "J. R. R. Tolkien",
      "C": "Ferdinand de Saussure",
      "D": "L. L. Zamenhof"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1458",
    "fact": "An onomatopoeia is a word that phonetically imitates the sound it describes, such as 'buzz', 'hiss', or 'sizzle'.",
    "question": "What is the linguistic term for a word that imitates the sound it describes, like 'buzz' or 'hiss'?",
    "answers": {
      "A": "Onomatopoeia",
      "B": "Alliteration",
      "C": "Assonance",
      "D": "Metonymy"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1459",
    "fact": "The Latin phrase 'carpe diem' is generally translated as 'seize the day' and originates from a poem by Horace.",
    "question": "The Latin phrase 'carpe diem' is most commonly translated as what?",
    "answers": {
      "A": "Live forever",
      "B": "Seize the day",
      "C": "Beware the day",
      "D": "Trust the day"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1460",
    "fact": "Basque, spoken in parts of Spain and France, is a language isolate, meaning it has no demonstrated genealogical relationship to any other living language.",
    "question": "Which European language is considered a language isolate, with no proven relation to any other living language?",
    "answers": {
      "A": "Finnish",
      "B": "Hungarian",
      "C": "Basque",
      "D": "Welsh"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1461",
    "fact": "The word 'robot' was introduced to the world by Czech writer Karel Čapek in his 1920 play 'R.U.R.' (Rossum's Universal Robots), derived from the Czech word 'robota' meaning forced labour.",
    "question": "The word 'robot' was first popularised in a 1920 play by which Czech writer?",
    "answers": {
      "A": "Franz Kafka",
      "B": "Milan Kundera",
      "C": "Karel Čapek",
      "D": "Bohumil Hrabal"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1462",
    "fact": "A palindrome is a word, phrase, or sequence that reads the same backwards as forwards, like 'level' or 'racecar'.",
    "question": "What is the term for a word that reads the same forwards and backwards, like 'level' or 'kayak'?",
    "answers": {
      "A": "Anagram",
      "B": "Palindrome",
      "C": "Homophone",
      "D": "Pangram"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1463",
    "fact": "The German word 'Schadenfreude' combines 'Schaden' (harm) and 'Freude' (joy), describing pleasure derived from another's misfortune.",
    "question": "The German loanword 'Schadenfreude' refers to pleasure derived from what?",
    "answers": {
      "A": "Another's misfortune",
      "B": "Eating fine food",
      "C": "Solving a puzzle",
      "D": "Hearing music"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1464",
    "fact": "Ferdinand de Saussure, a Swiss linguist, is widely regarded as the father of modern linguistics and structuralism, especially through his posthumously published 'Course in General Linguistics'.",
    "question": "Which Swiss linguist is often regarded as the founder of modern structural linguistics?",
    "answers": {
      "A": "Noam Chomsky",
      "B": "Roman Jakobson",
      "C": "Ferdinand de Saussure",
      "D": "Leonard Bloomfield"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1465",
    "fact": "The Korean alphabet 'Hangul' was promulgated by King Sejong the Great in 1446, designed to be easy for common people to learn.",
    "question": "Which Korean king is credited with creating the Hangul alphabet in the 15th century?",
    "answers": {
      "A": "Taejo",
      "B": "Sejong the Great",
      "C": "Gojong",
      "D": "Jeongjo"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1466",
    "fact": "The Latin abbreviation 'i.e.' stands for 'id est', meaning 'that is', while 'e.g.' stands for 'exempli gratia', meaning 'for example'.",
    "question": "The abbreviation 'i.e.' stands for which Latin phrase?",
    "answers": {
      "A": "In extenso",
      "B": "Id est",
      "C": "Ipso facto",
      "D": "Inter alia"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1467",
    "fact": "Afrikaans evolved from 17th-century Dutch dialects brought to South Africa by settlers and is one of South Africa's 11 official languages.",
    "question": "Afrikaans developed primarily from which European language?",
    "answers": {
      "A": "German",
      "B": "Portuguese",
      "C": "Dutch",
      "D": "French"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1468",
    "fact": "A pangram is a sentence that uses every letter of the alphabet at least once; 'The quick brown fox jumps over the lazy dog' is the most famous English example.",
    "question": "What is the linguistic term for a sentence containing every letter of the alphabet?",
    "answers": {
      "A": "Lipogram",
      "B": "Pangram",
      "C": "Isogram",
      "D": "Anagram"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1469",
    "fact": "The Italian phrase 'al dente' literally means 'to the tooth', describing pasta cooked to be firm when bitten.",
    "question": "The Italian culinary term 'al dente' literally translates as what?",
    "answers": {
      "A": "To the tooth",
      "B": "To the taste",
      "C": "To the fire",
      "D": "To the plate"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1470",
    "fact": "The Rosetta Stone, discovered in 1799, features the same decree in Egyptian hieroglyphs, Demotic script, and Ancient Greek, which enabled scholars to decipher hieroglyphs.",
    "question": "The Rosetta Stone contains text in hieroglyphs, Demotic script, and which third language?",
    "answers": {
      "A": "Latin",
      "B": "Aramaic",
      "C": "Ancient Greek",
      "D": "Coptic"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1471",
    "fact": "Noam Chomsky proposed the theory of universal grammar, arguing that the ability to acquire language is innate to human beings.",
    "question": "Which American linguist is best known for proposing the theory of universal grammar?",
    "answers": {
      "A": "Steven Pinker",
      "B": "Noam Chomsky",
      "C": "Benjamin Lee Whorf",
      "D": "Edward Sapir"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1472",
    "fact": "The English word 'algebra' comes from the Arabic 'al-jabr', meaning 'the reunion of broken parts', from a 9th-century treatise by al-Khwarizmi.",
    "question": "The English word 'algebra' originates from which language?",
    "answers": {
      "A": "Greek",
      "B": "Latin",
      "C": "Arabic",
      "D": "Persian"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1473",
    "fact": "A morpheme is the smallest grammatical unit in a language that carries meaning; for example, 'unhappiness' contains three morphemes: 'un-', 'happy', and '-ness'.",
    "question": "In linguistics, what is the smallest meaningful unit of language called?",
    "answers": {
      "A": "Phoneme",
      "B": "Morpheme",
      "C": "Grapheme",
      "D": "Lexeme"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1474",
    "fact": "The Sapir–Whorf hypothesis, also called linguistic relativity, proposes that the structure of a language affects its speakers' worldview and cognition.",
    "question": "The hypothesis that language shapes thought is associated with Edward Sapir and which other linguist?",
    "answers": {
      "A": "Benjamin Lee Whorf",
      "B": "Roman Jakobson",
      "C": "Leonard Bloomfield",
      "D": "Otto Jespersen"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq1475",
    "fact": "Tagalog is the basis for Filipino, the national language of the Philippines, and is widely spoken in Luzon.",
    "question": "Which language is the principal basis for Filipino, the national language of the Philippines?",
    "answers": {
      "A": "Cebuano",
      "B": "Ilocano",
      "C": "Tagalog",
      "D": "Hiligaynon"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1476",
    "fact": "The word 'quarantine' comes from the Italian 'quaranta giorni', meaning 'forty days', the period ships were required to wait off Venice during plague outbreaks.",
    "question": "The English word 'quarantine' derives from an Italian word meaning what number of days?",
    "answers": {
      "A": "Fourteen",
      "B": "Thirty",
      "C": "Forty",
      "D": "Sixty"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1477",
    "fact": "Mandarin Chinese is a tonal language with four main tones (plus a neutral tone), where pitch contour distinguishes word meaning.",
    "question": "How many main tones does Standard Mandarin Chinese have (excluding the neutral tone)?",
    "answers": {
      "A": "Three",
      "B": "Four",
      "C": "Five",
      "D": "Six"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1478",
    "fact": "Proto-Indo-European is the reconstructed common ancestor of the Indo-European language family, which includes English, Hindi, Russian, Persian, and many others.",
    "question": "What name is given to the reconstructed common ancestor of languages such as English, Hindi, and Russian?",
    "answers": {
      "A": "Proto-Germanic",
      "B": "Proto-Indo-European",
      "C": "Proto-Uralic",
      "D": "Proto-Semitic"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1479",
    "fact": "The Mariana Trench in the western Pacific Ocean reaches a depth of approximately 11,000 metres at the Challenger Deep, making it the deepest known point in Earth's oceans.",
    "question": "What is the name of the deepest oceanic trench on Earth?",
    "answers": {
      "A": "Java Trench",
      "B": "Puerto Rico Trench",
      "C": "Mariana Trench",
      "D": "Tonga Trench"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1480",
    "fact": "The Sahara is the largest hot desert in the world, covering about 9.2 million square kilometres across North Africa.",
    "question": "Which is the largest hot desert in the world?",
    "answers": {
      "A": "Gobi",
      "B": "Sahara",
      "C": "Kalahari",
      "D": "Arabian"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1481",
    "fact": "Mount Everest, located in the Himalayas on the border of Nepal and China, rises to approximately 8,849 metres above sea level.",
    "question": "What is the highest mountain on Earth measured from sea level?",
    "answers": {
      "A": "K2",
      "B": "Kangchenjunga",
      "C": "Mount Everest",
      "D": "Lhotse"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1482",
    "fact": "The Richter scale, developed by Charles F. Richter in 1935, measures the magnitude of earthquakes based on seismic wave amplitude.",
    "question": "Which scale was historically used to measure the magnitude of earthquakes?",
    "answers": {
      "A": "Beaufort",
      "B": "Mohs",
      "C": "Fujita",
      "D": "Richter"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1483",
    "fact": "Diamond is rated 10 on the Mohs scale of mineral hardness, making it the hardest naturally occurring mineral.",
    "question": "Which mineral has a hardness of 10 on the Mohs scale?",
    "answers": {
      "A": "Quartz",
      "B": "Corundum",
      "C": "Topaz",
      "D": "Diamond"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1484",
    "fact": "The Amazon rainforest, located primarily in Brazil, is the world's largest tropical rainforest and produces a significant portion of Earth's atmospheric oxygen.",
    "question": "Which country contains the largest portion of the Amazon rainforest?",
    "answers": {
      "A": "Peru",
      "B": "Brazil",
      "C": "Colombia",
      "D": "Venezuela"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1485",
    "fact": "The ozone layer is found primarily in the stratosphere, between about 15 and 35 kilometres above Earth's surface, where it absorbs most of the Sun's ultraviolet radiation.",
    "question": "In which layer of Earth's atmosphere is the ozone layer primarily located?",
    "answers": {
      "A": "Troposphere",
      "B": "Mesosphere",
      "C": "Stratosphere",
      "D": "Thermosphere"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1486",
    "fact": "Angel Falls in Venezuela has a total height of 979 metres, making it the world's tallest uninterrupted waterfall.",
    "question": "What is the world's tallest uninterrupted waterfall?",
    "answers": {
      "A": "Niagara Falls",
      "B": "Victoria Falls",
      "C": "Iguazu Falls",
      "D": "Angel Falls"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1487",
    "fact": "The Great Barrier Reef off the coast of Queensland, Australia, is the world's largest coral reef system, stretching over 2,300 kilometres.",
    "question": "Off the coast of which country is the Great Barrier Reef located?",
    "answers": {
      "A": "Indonesia",
      "B": "Philippines",
      "C": "Australia",
      "D": "Fiji"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1488",
    "fact": "The Beaufort scale, devised by Sir Francis Beaufort in 1805, classifies wind speeds from 0 (calm) to 12 (hurricane force).",
    "question": "Which scale is used to measure wind speed based on observed conditions?",
    "answers": {
      "A": "Saffir-Simpson",
      "B": "Beaufort",
      "C": "Fujita",
      "D": "Torino"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1489",
    "fact": "Igneous rocks form from the cooling and solidification of magma or lava. Granite and basalt are common examples.",
    "question": "Which type of rock is formed from the cooling and solidification of magma or lava?",
    "answers": {
      "A": "Sedimentary",
      "B": "Metamorphic",
      "C": "Igneous",
      "D": "Organic"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1490",
    "fact": "The El Niño Southern Oscillation is a climate pattern involving the warming of Pacific Ocean surface waters, which significantly affects global weather.",
    "question": "What name is given to the periodic warming of surface waters in the central and eastern tropical Pacific Ocean?",
    "answers": {
      "A": "La Niña",
      "B": "El Niño",
      "C": "Gulf Stream",
      "D": "Monsoon"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1491",
    "fact": "The 1815 eruption of Mount Tambora in Indonesia is the largest volcanic eruption in recorded history, leading to the 'Year Without a Summer' in 1816.",
    "question": "The eruption of which volcano in 1815 caused the 'Year Without a Summer' in 1816?",
    "answers": {
      "A": "Krakatoa",
      "B": "Mount St. Helens",
      "C": "Tambora",
      "D": "Vesuvius"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1492",
    "fact": "The Mohorovičić discontinuity, or 'Moho', marks the boundary between the Earth's crust and the mantle, discovered by Andrija Mohorovičić in 1909.",
    "question": "What boundary in the Earth separates the crust from the mantle?",
    "answers": {
      "A": "Gutenberg discontinuity",
      "B": "Conrad discontinuity",
      "C": "Mohorovičić discontinuity",
      "D": "Lehmann discontinuity"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1493",
    "fact": "The Dead Sea, on the border of Israel and Jordan, has a surface about 430 metres below sea level, making it the lowest land elevation on Earth.",
    "question": "What is the lowest land elevation on Earth's surface?",
    "answers": {
      "A": "Death Valley",
      "B": "Caspian Depression",
      "C": "Lake Assal",
      "D": "Dead Sea shore"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1494",
    "fact": "The Köppen climate classification system, developed by Wladimir Köppen, is the most widely used system for classifying world climates based on temperature and precipitation.",
    "question": "Which climate classification system, widely used in geography, was developed in the late 19th and early 20th centuries?",
    "answers": {
      "A": "Thornthwaite",
      "B": "Köppen",
      "C": "Holdridge",
      "D": "Trewartha"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1496",
    "fact": "Pangaea was the supercontinent that existed during the late Paleozoic and early Mesozoic eras, before breaking apart around 175 million years ago.",
    "question": "What name is given to the supercontinent that existed roughly 300 to 175 million years ago?",
    "answers": {
      "A": "Gondwana",
      "B": "Laurasia",
      "C": "Rodinia",
      "D": "Pangaea"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1497",
    "fact": "The Enhanced Fujita scale, introduced in 2007, rates tornado intensity from EF0 to EF5 based on estimated wind speeds and damage.",
    "question": "What scale is used to rate the intensity of tornadoes in the United States?",
    "answers": {
      "A": "Saffir-Simpson scale",
      "B": "Enhanced Fujita scale",
      "C": "Beaufort scale",
      "D": "TORRO scale"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1498",
    "fact": "The taiga, also called boreal forest, is the world's largest land biome, dominated by coniferous trees and stretching across northern North America, Europe and Asia.",
    "question": "Which is the largest land biome on Earth?",
    "answers": {
      "A": "Tropical rainforest",
      "B": "Tundra",
      "C": "Taiga (boreal forest)",
      "D": "Savanna"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1499",
    "fact": "The Cambrian Explosion, around 538 million years ago, was a relatively short evolutionary event during which most major animal phyla appeared.",
    "question": "The 'Cambrian Explosion' refers to the rapid appearance of most major animal groups around how many million years ago?",
    "answers": {
      "A": "250 million",
      "B": "65 million",
      "C": "1 billion",
      "D": "538 million"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq1500",
    "fact": "Greenland holds the world's second-largest ice sheet after Antarctica, covering about 1.7 million square kilometres.",
    "question": "Which island contains the world's second-largest ice sheet?",
    "answers": {
      "A": "Iceland",
      "B": "Baffin Island",
      "C": "Greenland",
      "D": "Svalbard"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1501",
    "fact": "The Atacama Desert in Chile is regarded as the driest non-polar desert in the world, with some weather stations never recording rainfall.",
    "question": "Which desert is considered the driest non-polar desert on Earth?",
    "answers": {
      "A": "Namib",
      "B": "Atacama",
      "C": "Mojave",
      "D": "Patagonian"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1502",
    "fact": "The Coriolis effect, caused by Earth's rotation, deflects moving air and water to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.",
    "question": "What is the name of the effect, caused by Earth's rotation, that deflects winds and ocean currents?",
    "answers": {
      "A": "Doppler effect",
      "B": "Foucault effect",
      "C": "Coriolis effect",
      "D": "Magnus effect"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1503",
    "fact": "The highest reliably recorded surface air temperature on Earth was 56.7°C (134°F) at Furnace Creek in Death Valley, California, on 10 July 1913.",
    "question": "Where was the highest reliably recorded surface air temperature on Earth measured?",
    "answers": {
      "A": "Dallol, Ethiopia",
      "B": "Death Valley, USA",
      "C": "Kebili, Tunisia",
      "D": "Mitribah, Kuwait"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1504",
    "fact": "Russia spans 11 time zones and covers about 17.1 million square kilometres, making it the largest country in the world by area.",
    "question": "Which is the largest country in the world by land area?",
    "answers": {
      "A": "China",
      "B": "Canada",
      "C": "Russia",
      "D": "United States"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1505",
    "fact": "China shares land borders with 14 countries, the same number as Russia, more than any other nation.",
    "question": "How many countries share a land border with China?",
    "answers": {
      "A": "10",
      "B": "12",
      "C": "14",
      "D": "16"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1507",
    "fact": "The Atlas Mountains stretch about 2,500 km across Morocco, Algeria, and Tunisia in northwestern Africa.",
    "question": "Across which three countries do the Atlas Mountains primarily extend?",
    "answers": {
      "A": "Egypt, Libya, Sudan",
      "B": "Morocco, Algeria, Tunisia",
      "C": "Mali, Niger, Chad",
      "D": "Spain, Morocco, Algeria"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1509",
    "fact": "Astana was renamed Nur-Sultan in 2019 in honour of former president Nazarbayev, then reverted back to Astana in September 2022.",
    "question": "What is the current name of the capital of Kazakhstan?",
    "answers": {
      "A": "Almaty",
      "B": "Nur-Sultan",
      "C": "Astana",
      "D": "Bishkek"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1510",
    "fact": "Indonesia is an archipelago of more than 17,000 islands stretching across the equator in Southeast Asia.",
    "question": "Which country consists of more than 17,000 islands?",
    "answers": {
      "A": "Philippines",
      "B": "Japan",
      "C": "Indonesia",
      "D": "Malaysia"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1512",
    "fact": "The Drake Passage, between South America's Cape Horn and Antarctica's South Shetland Islands, is known for some of the roughest seas on Earth.",
    "question": "The Drake Passage lies between South America and which other landmass?",
    "answers": {
      "A": "Australia",
      "B": "Africa",
      "C": "Antarctica",
      "D": "New Zealand"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1513",
    "fact": "Naypyidaw was designated the capital of Myanmar in 2005, replacing Yangon (formerly Rangoon).",
    "question": "What is the capital of Myanmar (Burma)?",
    "answers": {
      "A": "Yangon",
      "B": "Mandalay",
      "C": "Naypyidaw",
      "D": "Bagan"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1514",
    "fact": "France borders Spain, Andorra, Monaco, Italy, Switzerland, Germany, Luxembourg, and Belgium — eight countries in mainland Europe.",
    "question": "How many countries share a land border with mainland (metropolitan) France in Europe?",
    "answers": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1517",
    "fact": "Honshu is Japan's largest and most populous island, containing Tokyo, Osaka, and Kyoto.",
    "question": "Which is the largest island of Japan?",
    "answers": {
      "A": "Hokkaido",
      "B": "Kyushu",
      "C": "Honshu",
      "D": "Shikoku"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1519",
    "fact": "Mount Everest, located in the Himalayas on the border of Nepal and China (Tibet), stands at 8,848.86 metres.",
    "question": "On the border of which two countries does Mount Everest lie?",
    "answers": {
      "A": "Nepal and India",
      "B": "Nepal and China",
      "C": "India and Bhutan",
      "D": "Pakistan and China"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1522",
    "fact": "Russia shares land borders with 14 sovereign nations, the most of any country alongside China.",
    "question": "Which country shares a land border with both Norway and North Korea?",
    "answers": {
      "A": "China",
      "B": "Russia",
      "C": "Mongolia",
      "D": "Finland"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1523",
    "fact": "The Danube flows through 10 countries, more than any other river in the world.",
    "question": "Which European river flows through the capitals Vienna, Bratislava, Budapest and Belgrade?",
    "answers": {
      "A": "Rhine",
      "B": "Danube",
      "C": "Elbe",
      "D": "Volga"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1525",
    "fact": "The Bosphorus strait in Istanbul separates the European and Asian sides of Turkey.",
    "question": "Which strait separates Europe from Asia in Turkey?",
    "answers": {
      "A": "Strait of Gibraltar",
      "B": "Bosphorus",
      "C": "Strait of Hormuz",
      "D": "Strait of Malacca"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1528",
    "fact": "The Amazon discharges about 209,000 cubic metres of water per second, more than the next seven largest rivers combined.",
    "question": "Which river has the largest discharge of water by volume in the world?",
    "answers": {
      "A": "Congo",
      "B": "Yangtze",
      "C": "Amazon",
      "D": "Ganges"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1529",
    "fact": "The Rosetta Stone, discovered in 1799, contains the same decree written in hieroglyphic, Demotic, and Ancient Greek, which allowed Jean-François Champollion to decipher Egyptian hieroglyphs in 1822.",
    "question": "Which three scripts appear on the Rosetta Stone?",
    "answers": {
      "A": "Hieroglyphic, Demotic, and Ancient Greek",
      "B": "Hieroglyphic, Coptic, and Latin",
      "C": "Hieratic, Demotic, and Aramaic",
      "D": "Hieroglyphic, Hieratic, and Phoenician"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1531",
    "fact": "The Code of Hammurabi, dating to around 1754 BC, is one of the oldest deciphered writings of significant length and was created by the sixth king of the First Babylonian Dynasty.",
    "question": "The Code of Hammurabi was created by a king of which ancient civilization?",
    "answers": {
      "A": "Assyria",
      "B": "Babylon",
      "C": "Sumer",
      "D": "Persia"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1532",
    "fact": "Tutankhamun's nearly intact tomb (KV62) was discovered by British archaeologist Howard Carter in November 1922 in the Valley of the Kings.",
    "question": "Who discovered the tomb of Tutankhamun in 1922?",
    "answers": {
      "A": "Heinrich Schliemann",
      "B": "Arthur Evans",
      "C": "Howard Carter",
      "D": "Flinders Petrie"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1533",
    "fact": "Qin Shi Huang unified China in 221 BC, becoming its first emperor, and is famous for the Terracotta Army that guarded his mausoleum.",
    "question": "Who was the first emperor to unify China?",
    "answers": {
      "A": "Liu Bang",
      "B": "Wu of Han",
      "C": "Qin Shi Huang",
      "D": "Kublai Khan"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1534",
    "fact": "The Maya civilization developed the Long Count calendar, which famously 'ended' a cycle on 21 December 2012, sparking apocalyptic theories.",
    "question": "Which ancient civilization developed the Long Count calendar?",
    "answers": {
      "A": "Aztec",
      "B": "Inca",
      "C": "Olmec",
      "D": "Maya"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1535",
    "fact": "The Epic of Gilgamesh, one of the earliest known works of literature, originated from ancient Mesopotamia and describes the adventures of the king of Uruk.",
    "question": "Gilgamesh was the legendary king of which ancient Sumerian city?",
    "answers": {
      "A": "Ur",
      "B": "Lagash",
      "C": "Uruk",
      "D": "Nippur"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1536",
    "fact": "The Battle of Thermopylae in 480 BC saw King Leonidas I of Sparta lead a small Greek force against the massive Persian army of Xerxes I.",
    "question": "Which Spartan king famously led the defense at Thermopylae in 480 BC?",
    "answers": {
      "A": "Leonidas I",
      "B": "Agesilaus II",
      "C": "Cleomenes I",
      "D": "Pausanias"
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "id": "pq1537",
    "fact": "Hatshepsut, who ruled circa 1479–1458 BC, was one of the most successful pharaohs of the Eighteenth Dynasty and is often depicted wearing a false beard.",
    "question": "Which female pharaoh ruled Egypt during the Eighteenth Dynasty and is known for her mortuary temple at Deir el-Bahari?",
    "answers": {
      "A": "Nefertiti",
      "B": "Cleopatra VII",
      "C": "Hatshepsut",
      "D": "Nefertari"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1538",
    "fact": "The Han Dynasty ruled China from 202 BC to 220 AD (with a brief interruption by the Xin Dynasty) and is considered a golden age of Chinese history.",
    "question": "Which dynasty immediately followed the Qin Dynasty in China?",
    "answers": {
      "A": "Tang",
      "B": "Han",
      "C": "Zhou",
      "D": "Ming"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1539",
    "fact": "The Punic Wars were three conflicts fought between Rome and Carthage from 264 BC to 146 BC, ending with the destruction of Carthage.",
    "question": "How many Punic Wars were fought between Rome and Carthage?",
    "answers": {
      "A": "Two",
      "B": "Three",
      "C": "Four",
      "D": "Five"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1541",
    "fact": "Alexander the Great was tutored by the philosopher Aristotle from around age 13 to 16, who instructed him in philosophy, medicine, and scientific inquiry.",
    "question": "Which famous philosopher tutored Alexander the Great as a youth?",
    "answers": {
      "A": "Plato",
      "B": "Socrates",
      "C": "Aristotle",
      "D": "Diogenes"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1542",
    "fact": "The Behistun Inscription, commissioned by Darius the Great around 522 BC, was crucial in deciphering cuneiform script, similar to the Rosetta Stone's role for hieroglyphs.",
    "question": "The Behistun Inscription, key to deciphering cuneiform, was commissioned by which Persian king?",
    "answers": {
      "A": "Cyrus the Great",
      "B": "Xerxes I",
      "C": "Artaxerxes I",
      "D": "Darius the Great"
    },
    "correct": "D",
    "difficulty": "hard"
  },
  {
    "id": "pq1543",
    "fact": "The Roman Emperor Hadrian built Hadrian's Wall in northern Britain around 122 AD to mark the northern boundary of the Roman Empire in Britannia.",
    "question": "Which Roman emperor ordered the construction of the wall across northern Britain that bears his name?",
    "answers": {
      "A": "Trajan",
      "B": "Hadrian",
      "C": "Marcus Aurelius",
      "D": "Antoninus Pius"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1544",
    "fact": "Confucius (Kong Fuzi) lived from approximately 551 to 479 BC during the Spring and Autumn period of the Zhou dynasty.",
    "question": "During which Chinese dynasty did the philosopher Confucius live?",
    "answers": {
      "A": "Han",
      "B": "Qin",
      "C": "Zhou",
      "D": "Shang"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1545",
    "fact": "The city of Persepolis served as the ceremonial capital of the Achaemenid Empire and was burned down by Alexander the Great in 330 BC.",
    "question": "Who destroyed the Persian ceremonial capital of Persepolis in 330 BC?",
    "answers": {
      "A": "Philip II of Macedon",
      "B": "Alexander the Great",
      "C": "Seleucus I",
      "D": "Antigonus I"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1546",
    "fact": "The Maya script known as the Dresden Codex is one of only four surviving pre-Columbian Maya books, named after the German city where it has been held since 1739.",
    "question": "The Dresden Codex is one of the few surviving books of which ancient civilization?",
    "answers": {
      "A": "Aztec",
      "B": "Inca",
      "C": "Maya",
      "D": "Zapotec"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1547",
    "fact": "The Hanging Gardens of Babylon are traditionally attributed to King Nebuchadnezzar II, who supposedly built them for his wife Amytis around 600 BC.",
    "question": "Which Babylonian king is traditionally credited with building the Hanging Gardens?",
    "answers": {
      "A": "Hammurabi",
      "B": "Nebuchadnezzar II",
      "C": "Nabonidus",
      "D": "Sargon II"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1549",
    "fact": "Pythagoras of Samos was a Greek philosopher and mathematician active in the 6th century BC, credited with the theorem relating the sides of right triangles.",
    "question": "On which Greek island was the mathematician Pythagoras born?",
    "answers": {
      "A": "Crete",
      "B": "Samos",
      "C": "Rhodes",
      "D": "Lesbos"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1550",
    "fact": "Chichen Itza, located in Mexico's Yucatán Peninsula, features the famous step-pyramid known as El Castillo or the Temple of Kukulcán.",
    "question": "What is the name of the iconic step pyramid at the Maya site of Chichen Itza?",
    "answers": {
      "A": "Temple of the Sun",
      "B": "El Caracol",
      "C": "El Castillo",
      "D": "Temple of the Inscriptions"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1551",
    "fact": "The Rosetta Stone, discovered in 1799, contains the same decree in hieroglyphic, Demotic, and Ancient Greek scripts, allowing scholars to decipher Egyptian hieroglyphs.",
    "question": "In which year was the Rosetta Stone discovered by French soldiers in Egypt?",
    "answers": {
      "A": "1789",
      "B": "1799",
      "C": "1812",
      "D": "1822"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1555",
    "fact": "Newton's Second Law of Motion states that the force acting on an object is equal to its mass multiplied by its acceleration (F = ma).",
    "question": "Which equation represents Newton's Second Law of Motion?",
    "answers": {
      "A": "E = mc²",
      "B": "F = ma",
      "C": "PV = nRT",
      "D": "V = IR"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1559",
    "fact": "Mercury (Hg) is the only metallic element that is liquid at standard room temperature and pressure.",
    "question": "Which is the only metal that is liquid at room temperature and standard pressure?",
    "answers": {
      "A": "Gallium",
      "B": "Bromine",
      "C": "Mercury",
      "D": "Caesium"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1563",
    "fact": "The Higgs boson was discovered at CERN's Large Hadron Collider in 2012, and Peter Higgs and François Englert shared the 2013 Nobel Prize in Physics.",
    "question": "In which year was the Higgs boson discovery announced by CERN?",
    "answers": {
      "A": "2008",
      "B": "2010",
      "C": "2012",
      "D": "2014"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1565",
    "fact": "Ohm's Law states that voltage equals current multiplied by resistance (V = IR), named after Georg Simon Ohm.",
    "question": "Which law states that V = IR, relating voltage, current, and resistance?",
    "answers": {
      "A": "Faraday's Law",
      "B": "Coulomb's Law",
      "C": "Kirchhoff's Law",
      "D": "Ohm's Law"
    },
    "correct": "D",
    "difficulty": "easy"
  },
  {
    "id": "pq1567",
    "fact": "The double-slit experiment, first performed by Thomas Young in 1801, demonstrated that light exhibits wave-like interference patterns.",
    "question": "Which physicist first performed the famous double-slit experiment with light in 1801?",
    "answers": {
      "A": "Isaac Newton",
      "B": "Thomas Young",
      "C": "Christiaan Huygens",
      "D": "Augustin-Jean Fresnel"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1568",
    "fact": "Avogadro's number, approximately 6.022 × 10²³, represents the number of particles in one mole of a substance.",
    "question": "Approximately how many particles are in one mole of a substance (Avogadro's number)?",
    "answers": {
      "A": "6.022 × 10²³",
      "B": "3.14 × 10¹⁰",
      "C": "9.81 × 10²²",
      "D": "1.602 × 10¹⁹"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1569",
    "fact": "Linus Pauling won the Nobel Prize in Chemistry in 1954 for his work on the nature of the chemical bond, and the Nobel Peace Prize in 1962 — the only person to win two unshared Nobel Prizes.",
    "question": "Who is the only person to have won two unshared Nobel Prizes?",
    "answers": {
      "A": "Marie Curie",
      "B": "Frederick Sanger",
      "C": "Linus Pauling",
      "D": "John Bardeen"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1570",
    "fact": "The Stern-Gerlach experiment (1922) demonstrated the quantization of angular momentum (spin) in atomic particles by passing silver atoms through a non-uniform magnetic field.",
    "question": "The 1922 Stern-Gerlach experiment demonstrated the quantization of which property?",
    "answers": {
      "A": "Electric charge",
      "B": "Mass",
      "C": "Spin (angular momentum)",
      "D": "Energy levels"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1571",
    "fact": "Noble gases (Group 18) are characterized by having a full outer electron shell, making them very unreactive.",
    "question": "Which group of the periodic table contains helium, neon, and argon?",
    "answers": {
      "A": "Alkali metals",
      "B": "Halogens",
      "C": "Noble gases",
      "D": "Alkaline earth metals"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1572",
    "fact": "Werner Heisenberg formulated the uncertainty principle in 1927, stating that the position and momentum of a particle cannot both be precisely known simultaneously.",
    "question": "Who formulated the uncertainty principle in quantum mechanics?",
    "answers": {
      "A": "Erwin Schrödinger",
      "B": "Werner Heisenberg",
      "C": "Max Born",
      "D": "Paul Dirac"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1573",
    "fact": "Boyle's Law states that, at constant temperature, the pressure of a gas is inversely proportional to its volume (PV = constant).",
    "question": "Which gas law states that pressure and volume are inversely proportional at constant temperature?",
    "answers": {
      "A": "Charles's Law",
      "B": "Avogadro's Law",
      "C": "Boyle's Law",
      "D": "Gay-Lussac's Law"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1574",
    "fact": "The Miller-Urey experiment in 1953 simulated early Earth conditions and produced amino acids from inorganic compounds, supporting theories of the chemical origin of life.",
    "question": "The 1953 Miller-Urey experiment produced which class of biological molecules from inorganic compounds?",
    "answers": {
      "A": "Nucleotides",
      "B": "Lipids",
      "C": "Amino acids",
      "D": "Carbohydrates"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1575",
    "fact": "Absolute zero, 0 Kelvin (−273.15 °C), is the theoretical temperature at which particles have minimum thermal motion.",
    "question": "What is absolute zero in degrees Celsius?",
    "answers": {
      "A": "−100 °C",
      "B": "−212 °C",
      "C": "−273.15 °C",
      "D": "−459.67 °C"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1578",
    "fact": "The speed of light in a vacuum is approximately 299,792,458 metres per second, commonly rounded to 300,000 km/s.",
    "question": "What is the approximate speed of light in a vacuum?",
    "answers": {
      "A": "150,000 km/s",
      "B": "300,000 km/s",
      "C": "1,000,000 km/s",
      "D": "30,000 km/s"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1580",
    "fact": "James Watson and Francis Crick published the double helix structure of DNA in 1953, building on Rosalind Franklin's X-ray diffraction images.",
    "question": "Which two scientists are credited with describing the double helix structure of DNA in 1953?",
    "answers": {
      "A": "Mendel and Darwin",
      "B": "Watson and Crick",
      "C": "Pasteur and Koch",
      "D": "Fleming and Salk"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1583",
    "fact": "The four DNA bases are adenine (A), thymine (T), guanine (G), and cytosine (C), with A pairing with T and G pairing with C.",
    "question": "Which base in DNA pairs with adenine?",
    "answers": {
      "A": "Guanine",
      "B": "Cytosine",
      "C": "Uracil",
      "D": "Thymine"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1584",
    "fact": "The standard biological classification hierarchy is Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species.",
    "question": "In biological classification, which rank comes immediately above 'Family'?",
    "answers": {
      "A": "Order",
      "B": "Genus",
      "C": "Class",
      "D": "Phylum"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1585",
    "fact": "The cerebellum, located at the back of the brain, coordinates voluntary movements such as posture, balance, and coordination.",
    "question": "Which part of the brain is primarily responsible for balance and coordination?",
    "answers": {
      "A": "Cerebrum",
      "B": "Medulla oblongata",
      "C": "Cerebellum",
      "D": "Hypothalamus"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1586",
    "fact": "Red blood cells, or erythrocytes, contain hemoglobin which binds to oxygen and transports it throughout the body.",
    "question": "Which protein in red blood cells is responsible for carrying oxygen?",
    "answers": {
      "A": "Myoglobin",
      "B": "Albumin",
      "C": "Hemoglobin",
      "D": "Keratin"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1587",
    "fact": "Humans share approximately 98.8% of their DNA with chimpanzees, our closest living relatives.",
    "question": "Approximately what percentage of DNA do humans share with chimpanzees?",
    "answers": {
      "A": "About 85%",
      "B": "About 92%",
      "C": "About 98%",
      "D": "About 99.9%"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1590",
    "fact": "The alveoli are tiny air sacs in the lungs where gas exchange occurs between inhaled air and blood capillaries.",
    "question": "What are the tiny air sacs in the lungs where gas exchange occurs?",
    "answers": {
      "A": "Bronchioles",
      "B": "Alveoli",
      "C": "Cilia",
      "D": "Villi"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1591",
    "fact": "Telomeres are repetitive DNA sequences at the ends of chromosomes that protect them from deterioration and shorten with each cell division.",
    "question": "What are the protective caps at the ends of chromosomes called?",
    "answers": {
      "A": "Centromeres",
      "B": "Histones",
      "C": "Telomeres",
      "D": "Plasmids"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1592",
    "fact": "The three domains of life proposed by Carl Woese in 1990 are Bacteria, Archaea, and Eukarya, based on ribosomal RNA differences.",
    "question": "What are the three domains of life in modern biological classification?",
    "answers": {
      "A": "Plantae, Animalia, Fungi",
      "B": "Prokarya, Eukarya, Protista",
      "C": "Bacteria, Archaea, Eukarya",
      "D": "Monera, Protista, Eukarya"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1595",
    "fact": "Mitochondrial DNA is inherited exclusively from the mother because the sperm's mitochondria are typically destroyed after fertilization.",
    "question": "From which parent is mitochondrial DNA inherited in humans?",
    "answers": {
      "A": "Father only",
      "B": "Mother only",
      "C": "Equally from both",
      "D": "Randomly from either"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1596",
    "fact": "James Watson and Francis Crick proposed the double helix structure of DNA in 1953, based partly on X-ray data from Rosalind Franklin.",
    "question": "Who, along with Francis Crick, is credited with discovering the double helix structure of DNA?",
    "answers": {
      "A": "Linus Pauling",
      "B": "Gregor Mendel",
      "C": "James Watson",
      "D": "Louis Pasteur"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1599",
    "fact": "The four DNA bases are adenine (A), thymine (T), guanine (G), and cytosine (C). In RNA, thymine is replaced by uracil.",
    "question": "Which of these is NOT one of the four bases found in DNA?",
    "answers": {
      "A": "Adenine",
      "B": "Guanine",
      "C": "Uracil",
      "D": "Cytosine"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1600",
    "fact": "The Linnaean classification system, devised by Carl Linnaeus, uses the hierarchy: Kingdom, Phylum, Class, Order, Family, Genus, Species.",
    "question": "In biological classification, which level comes immediately below 'Class'?",
    "answers": {
      "A": "Phylum",
      "B": "Family",
      "C": "Order",
      "D": "Genus"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1603",
    "fact": "Mitosis is the process of cell division that produces two genetically identical daughter cells, while meiosis produces four genetically distinct gametes.",
    "question": "Which type of cell division produces gametes (sex cells) in humans?",
    "answers": {
      "A": "Mitosis",
      "B": "Meiosis",
      "C": "Binary fission",
      "D": "Cytokinesis"
    },
    "correct": "B",
    "difficulty": "medium"
  },
  {
    "id": "pq1604",
    "fact": "ABBA was formed in Stockholm in 1972 and won Eurovision in 1974 with 'Waterloo'.",
    "question": "From which country does the pop group ABBA originate?",
    "answers": {
      "A": "Norway",
      "B": "Denmark",
      "C": "Sweden",
      "D": "Finland"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1605",
    "fact": "'Money Heist' (La Casa de Papel) became Netflix's most-watched non-English language series following its international release.",
    "question": "What is the original Spanish title of the Netflix hit 'Money Heist'?",
    "answers": {
      "A": "El Atraco",
      "B": "La Casa de Papel",
      "C": "Los Ladrones",
      "D": "Robo Total"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1606",
    "fact": "Pink Floyd's 'The Dark Side of the Moon' was released in 1973 and famously features a prism on its cover.",
    "question": "Which iconic 1973 album features a prism refracting light into a rainbow on its cover?",
    "answers": {
      "A": "Wish You Were Here",
      "B": "The Wall",
      "C": "The Dark Side of the Moon",
      "D": "Animals"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1608",
    "fact": "Hayao Miyazaki's 'Spirited Away' won the Academy Award for Best Animated Feature in 2003.",
    "question": "Which Studio Ghibli film won the Oscar for Best Animated Feature in 2003?",
    "answers": {
      "A": "Princess Mononoke",
      "B": "Spirited Away",
      "C": "Howl's Moving Castle",
      "D": "My Neighbor Totoro"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1609",
    "fact": "BTS debuted in 2013 under Big Hit Entertainment and became one of the best-selling music acts globally.",
    "question": "In which year did the K-pop group BTS officially debut?",
    "answers": {
      "A": "2010",
      "B": "2012",
      "C": "2013",
      "D": "2015"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1611",
    "fact": "Fellini's 'La Dolce Vita' (1960) features the famous Trevi Fountain scene with Anita Ekberg.",
    "question": "Which Italian director made the 1960 classic 'La Dolce Vita'?",
    "answers": {
      "A": "Vittorio De Sica",
      "B": "Michelangelo Antonioni",
      "C": "Federico Fellini",
      "D": "Roberto Rossellini"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1612",
    "fact": "Bob Marley's 'Exodus' was named Album of the Century by Time magazine in 1999.",
    "question": "Which 1977 Bob Marley album was named Album of the Century by Time magazine?",
    "answers": {
      "A": "Exodus",
      "B": "Kaya",
      "C": "Catch a Fire",
      "D": "Survival"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1613",
    "fact": "'Amélie' (Le Fabuleux Destin d'Amélie Poulain) was directed by Jean-Pierre Jeunet and starred Audrey Tautou.",
    "question": "Who directed the 2001 French film 'Amélie'?",
    "answers": {
      "A": "Luc Besson",
      "B": "François Ozon",
      "C": "Jean-Pierre Jeunet",
      "D": "Michel Gondry"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1615",
    "fact": "'Dark' is a German science fiction thriller that premiered on Netflix in 2017 and was created by Baran bo Odar and Jantje Friese.",
    "question": "The Netflix series 'Dark' is set in which fictional German town?",
    "answers": {
      "A": "Winden",
      "B": "Schwarzwald",
      "C": "Hohenfeld",
      "D": "Adlerstein"
    },
    "correct": "A",
    "difficulty": "hard"
  },
  {
    "id": "pq1616",
    "fact": "Daft Punk's 'Random Access Memories' won Album of the Year at the 2014 Grammy Awards.",
    "question": "Which Daft Punk album won the Grammy for Album of the Year in 2014?",
    "answers": {
      "A": "Discovery",
      "B": "Homework",
      "C": "Human After All",
      "D": "Random Access Memories"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1617",
    "fact": "Pedro Almodóvar's 'Volver' (2006) starred Penélope Cruz, who received an Oscar nomination for the role.",
    "question": "Penélope Cruz received her first Oscar nomination for which 2006 Pedro Almodóvar film?",
    "answers": {
      "A": "Volver",
      "B": "Broken Embraces",
      "C": "All About My Mother",
      "D": "Talk to Her"
    },
    "correct": "A",
    "difficulty": "medium"
  },
  {
    "id": "pq1618",
    "fact": "Rammstein is a German Neue Deutsche Härte band formed in Berlin in 1994.",
    "question": "The industrial metal band Rammstein was formed in which city?",
    "answers": {
      "A": "Hamburg",
      "B": "Munich",
      "C": "Berlin",
      "D": "Frankfurt"
    },
    "correct": "C",
    "difficulty": "medium"
  },
  {
    "id": "pq1620",
    "fact": "Psy's 'Gangnam Style' became the first YouTube video to reach one billion views in December 2012.",
    "question": "In what year did Psy release the viral hit 'Gangnam Style'?",
    "answers": {
      "A": "2010",
      "B": "2011",
      "C": "2012",
      "D": "2013"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1622",
    "fact": "Manu Chao's 'Clandestino' was released in 1998 and became a global hit, blending multiple languages.",
    "question": "Manu Chao's hugely successful 1998 debut solo album is called what?",
    "answers": {
      "A": "Próxima Estación: Esperanza",
      "B": "Clandestino",
      "C": "La Radiolina",
      "D": "Sibérie m'était contéee"
    },
    "correct": "B",
    "difficulty": "hard"
  },
  {
    "id": "pq1623",
    "fact": "'Lupin' starring Omar Sy is a French mystery thriller series inspired by the Arsène Lupin novels by Maurice Leblanc.",
    "question": "Which French actor stars as the lead in the Netflix series 'Lupin'?",
    "answers": {
      "A": "Vincent Cassel",
      "B": "Jean Dujardin",
      "C": "Omar Sy",
      "D": "Tahar Rahim"
    },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "id": "pq1624",
    "fact": "Kraftwerk's 'Autobahn' (1974) is considered a pioneering electronic music album that influenced generations of artists.",
    "question": "Which German electronic group released the pioneering 1974 album 'Autobahn'?",
    "answers": {
      "A": "Tangerine Dream",
      "B": "Can",
      "C": "Neu!",
      "D": "Kraftwerk"
    },
    "correct": "D",
    "difficulty": "medium"
  },
  {
    "id": "pq1625",
    "fact": "'Roma' by Alfonso Cuarón won three Oscars in 2019, including Best Director and Best Foreign Language Film.",
    "question": "Alfonso Cuarón's 2018 film 'Roma' is set in which decade?",
    "answers": {
      "A": "1950s",
      "B": "1960s",
      "C": "1970s",
      "D": "1980s"
    },
    "correct": "C",
    "difficulty": "hard"
  },
  {
    "id": "pq1626",
    "fact": "Céline Dion is from Charlemagne, Quebec, Canada, and is one of the best-selling music artists of all time.",
    "question": "In which Canadian province was singer Céline Dion born?",
    "answers": {
      "A": "Ontario",
      "B": "Quebec",
      "C": "New Brunswick",
      "D": "Nova Scotia"
    },
    "correct": "B",
    "difficulty": "easy"
  },
  {
    "id": "pq1627",
    "fact": "'The Bridge' (Bron/Broen) is a Scandinavian noir series that features a body found on the Øresund Bridge between Denmark and Sweden.",
    "question": "The Scandinavian crime drama 'The Bridge' begins with a body discovered on a bridge connecting Sweden and which other country?",
    "answers": {
      "A": "Norway",
      "B": "Finland",
      "C": "Germany",
      "D": "Denmark"
    },
    "correct": "D",
    "difficulty": "hard"
  }
];

module.exports = QUIZ_DATA;
