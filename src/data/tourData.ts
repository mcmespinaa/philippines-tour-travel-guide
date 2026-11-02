export interface HotelOption {
  rank: number;
  name: string;
  stars: string;
  tier: '5-Star Flagship' | '5-Star Boutique' | '4-Star Serviced' | '4-Star Premier' | 'Luxury Airbnb';
  budgetBand: 'flagship' | 'smart' | 'value'; // flagship (~51k total), smart (25-30k total), value (<25k total)
  landmark: string;
  distance: string;
  rateDkk: number;
  url: string;
  lat: number;
  lng: number;
  highlight: string;
}

export interface DiningOption {
  name: string;
  category: 'Morning Coffee' | 'Casual Lunch' | 'Destination Dinner' | 'Sunset Cocktails';
  neighborhood: string;
  specialty: string;
  bookingTip: string;
}

export interface FlightRoute {
  id: string;
  leg: number;
  code: string;
  carrier: string;
  flightNo: string;
  fromCode: string;
  fromCity: string;
  fromCoords: [number, number];
  toCode: string;
  toCity: string;
  toCoords: [number, number];
  duration: string;
  mode: 'cebu-pacific' | 'airswift-cebpac' | 'fast-ferry' | 'paraw-sail' | 'overland' | 'long-haul';
  fareDkk: number;
  bookingUrl: string;
  baggageTip: string;
  notes: string;
}

export interface DestinationHub {
  id: string;
  number: string;
  name: string;
  region: string;
  tagline: string;
  dates: string;
  nights: number;
  center: [number, number];
  zoom: number;
  weatherAvg: string;
  primaryLandmarks: { name: string; lat: number; lng: number; category: string; openHours: string }[];
  motorsportHighlight: string;
  romanceHighlight: string;
  weatherBackup: string;
  cebuPacGateway: string;
  cebuPacFlightNos: string;
  cebuPacBookingUrl: string;
  dining: DiningOption[];
  hotels: HotelOption[];
}

export interface DaySchedule {
  day: number;
  date: string;
  hubId: string;
  location: string;
  generalActivity: string;
  carHighlight: string;
  romanceHighlight: string;
  weatherBackup: string;
  coords: [number, number];
}

export interface PackingCategory {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export const PACKING_CATEGORIES: PackingCategory[] = [
  {
    id: 'docs-finance',
    title: 'Documents & Island Finance',
    icon: '🛂',
    items: [
      'Passports valid >6 months from Dec 9 return (verified in admin/)',
      'Philippine eTravel QR Registration completed 72h prior (etravel.gov.ph)',
      'International Driving Permit (IDP) + national license for Clark & Cebu drives',
      'Offline copies of Cebu Pacific PNRs, AirSWIFT tickets & hotel references',
      'PHP cash in small bills (5,000–10,000 PHP) for Palawan/Siquijor boat tips',
      'Primary & backup Visa/Mastercard notified for Philippines travel'
    ]
  },
  {
    id: 'tech-cockpit',
    title: 'Tech, Action Cam & Navigation',
    icon: '📷',
    items: [
      'Smartphones with Airalo / Smart PH eSIM + Globe backup eSIM',
      'GoPro / DJI Action mount for Clark Speedway & Cebu Transcentral Highway',
      '20,000mAh airline-compliant power bank (critical for 4-day Tao Paraw sail)',
      'Universal travel adapter + multi-port GaN USB-C fast charger',
      'Waterproof floating phone pouches & 20L dry bag for lagoon kayaking',
      'AirTags inside all carry-on spinners and daypacks'
    ]
  },
  {
    id: 'wardrobe-mc',
    title: 'Tropical Capsule — MC',
    icon: '👗',
    items: [
      'Cushioned walking sneakers (broken in) + waterproof reef/water sandals',
      'Breathable linen tops, tropical day dresses & smart casual Makati outfits',
      'Elegant evening outfit for Blackbird Nielson Tower & BGC rooftop dinners',
      '3 sets of swimwear + UV50+ long-sleeve rash guard for Coron/El Nido reefs',
      'Lightweight merino/cashmere wrap for chilly airplane cabins & ferries',
      'Polarized UV sunglasses + wide-brim packable sun hat'
    ]
  },
  {
    id: 'wardrobe-christian',
    title: 'Tropical & Track Capsule — Christian',
    icon: '🏎️',
    items: [
      'Closed-toe driving shoes (required for Clark Speedway paddock & track laps)',
      'Breathable linen button-downs, polo shirts & tailored lightweight chinos',
      'Smart evening shirt & loafers for Manila fine dining reservations',
      '3 sets quick-dry boardshorts + UV rash guard for Tao Paraw expedition',
      'Lightweight wind/rain shell for Cebu highland mountain pass & scooter rides',
      'Polarized driving sunglasses + packable sun cap'
    ]
  },
  {
    id: 'health-reef',
    title: 'Tropical First Aid & Reef Care',
    icon: '🩺',
    items: [
      'Reef-safe SPF 50+ sunscreen & soothing aloe vera after-sun gel',
      'Tropical insect repellent (DEET / Picaridin) for dusk beach lounges',
      'Motion sickness tablets (Bonine/Dramamine) for OceanJet & open-water sail',
      'Electrolyte rehydration packets, probiotics & travel digestive kit',
      'Compeed blister patches, waterproof bandages & antiseptic wipes',
      'Ear drops (swimmer’s ear prevention after Kayangan & Twin Lagoon dives)'
    ]
  }
];

export const FLIGHT_ROUTES: FlightRoute[] = [
  {
    id: 'leg-0',
    leg: 0,
    code: 'CPH ✈ MNL',
    carrier: 'Emirates / Qatar / Singapore Airlines',
    flightNo: 'EK 152 / EK 332 (or QR 160 / QR 932)',
    fromCode: 'CPH',
    fromCity: 'Copenhagen Kastrup',
    fromCoords: [14.65, 119.50],
    toCode: 'MNL',
    toCity: 'Manila NAIA T3 (Cebu Pacific Hub)',
    toCoords: [14.5086, 121.0194],
    duration: '16h 40m',
    mode: 'long-haul',
    fareDkk: 6200,
    bookingUrl: 'https://www.emirates.com/',
    baggageTip: '30kg checked allowance; arrives NAIA Terminal 3 (same terminal as Cebu Pacific).',
    notes: 'Arrives NAIA Terminal 3 — direct indoor access to NAIAX Skyway to Makati (15 mins).'
  },
  {
    id: 'leg-1',
    leg: 1,
    code: 'MNL 🚗 CRK',
    carrier: 'Private Executive Overland (NLEX Skyway)',
    flightNo: 'SKYWAY-STAGE-3',
    fromCode: 'MNL',
    fromCity: 'Manila Bay / Makati',
    fromCoords: [14.5547, 121.0244],
    toCode: 'CRK',
    toCity: 'Clark International Speedway & Airport',
    toCoords: [15.1859, 120.5600],
    duration: '1h 35m',
    mode: 'overland',
    fareDkk: 420,
    bookingUrl: 'https://www.clarkinternationalairport.com/',
    baggageTip: 'Door-to-door private SUV transfer; unlimited luggage capacity.',
    notes: 'Elevated Skyway Stage 3 to North Luzon Expressway straight to Clark International Speedway paddock.'
  },
  {
    id: 'leg-2',
    leg: 2,
    code: 'CRK ✈ USU',
    carrier: 'Cebu Pacific / Cebgo',
    flightNo: 'DG 6031 (or MNL-USU DG 6041)',
    fromCode: 'CRK',
    fromCity: 'Clark International (CRK)',
    fromCoords: [15.1859, 120.5600],
    toCode: 'USU',
    toCity: 'Coron Busuanga (USU)',
    toCoords: [12.1214, 120.1000],
    duration: '1h 20m',
    mode: 'cebu-pacific',
    fareDkk: 480,
    bookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    baggageTip: 'ATR 72-600 turboprop: book CEB Go Easy + extra 20kg prepaid baggage online.',
    notes: 'Civilized morning turboprop hop directly into northern Palawan limestone lagoon country.'
  },
  {
    id: 'leg-3',
    leg: 3,
    code: 'COR ⛵ ENI',
    carrier: 'Tao Philippines Paraw Expedition (or Cebu Pacific Alt)',
    flightNo: 'TAO-EXPEDITION / Fast Craft',
    fromCode: 'USU',
    fromCity: 'Coron Island Harbour',
    fromCoords: [11.9986, 120.2043],
    toCode: 'ENI',
    toCity: 'El Nido Bacuit Bay (ENI)',
    toCoords: [11.1956, 119.4181],
    duration: '4D / 3N Sail (or 3.5h Ferry)',
    mode: 'paraw-sail',
    fareDkk: 3650,
    bookingUrl: 'https://www.taophilippines.com/',
    baggageTip: 'Main suitcases stored safely in Tao cargo hold; keep a 20L waterproof drybag on deck.',
    notes: 'Open-water paraw expedition across Culion & Linapacan, or fast ferry / Cebu Pacific via MNL.'
  },
  {
    id: 'leg-4',
    leg: 4,
    code: 'ENI ✈ CEB',
    carrier: 'AirSWIFT (Cebu Pacific Group) / Cebu Pacific 5J',
    flightNo: 'T6 511 / T6 535 (or 5J 228 via PPS)',
    fromCode: 'ENI',
    fromCity: 'El Nido Lio Airport (ENI)',
    fromCoords: [11.2022, 119.4169],
    toCode: 'CEB',
    toCity: 'Mactan-Cebu Intl (CEB)',
    toCoords: [10.3075, 123.9794],
    duration: '1h 40m',
    mode: 'airswift-cebpac',
    fareDkk: 820,
    bookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    baggageTip: 'AirSWIFT is now part of Cebu Pacific Group; book 20kg checked bag bundle early.',
    notes: 'Direct boutique terminal departure from Lio Beach straight to Mactan-Cebu for Transcentral Highway.'
  },
  {
    id: 'leg-5',
    leg: 5,
    code: 'CEB ⛴ TAG',
    carrier: 'OceanJet Business Class (or Cebu Pacific MNL-TAG 5J 617)',
    flightNo: 'OJ-802 Business Class',
    fromCode: 'CEB',
    fromCity: 'Cebu Pier 1 Terminal',
    fromCoords: [10.2929, 123.9090],
    toCode: 'TAG',
    toCity: 'Tagbilaran / Panglao Bohol (TAG)',
    toCoords: [9.5780, 123.7730],
    duration: '2h 00m',
    mode: 'fast-ferry',
    fareDkk: 160,
    bookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    baggageTip: 'Book Upper-Deck Aircon Business Class seats; porter checks roller bags at Pier 1.',
    notes: 'Fast ferry across Cebu Strait to Bohol (or direct Cebu Pacific 5J 617/619 into Panglao TAG).'
  },
  {
    id: 'leg-6',
    leg: 6,
    code: 'TAG ⛴ SIQ ⛴ CEB',
    carrier: 'OceanJet Island Hopper + Cebu Pacific DGT Gateway',
    flightNo: 'OJ-SIQ / DG 6516 DGT-CEB',
    fromCode: 'TAG',
    fromCity: 'Panglao Bohol',
    fromCoords: [9.5583, 123.7722],
    toCode: 'SIQ',
    toCity: 'Siquijor San Juan (via DGT)',
    toCoords: [9.1670, 123.5050],
    duration: '1h 30m',
    mode: 'fast-ferry',
    fareDkk: 140,
    bookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    baggageTip: 'Alternative return: 45-min ferry to Dumaguete (DGT) + Cebu Pacific DG 6516 flight to CEB.',
    notes: 'Cross to Siquijor coastal ring road; return via Dumaguete (Cebu Pacific DG 6516 to CEB) or fast ferry.'
  },
  {
    id: 'leg-7',
    leg: 7,
    code: 'CEB ✈ MNL',
    carrier: 'Cebu Pacific',
    flightNo: '5J 554 / 5J 562 / 5J 568 (12+ Daily)',
    fromCode: 'CEB',
    fromCity: 'Mactan-Cebu Intl (CEB)',
    fromCoords: [10.3075, 123.9794],
    toCode: 'MNL',
    toCity: 'Manila NAIA Terminal 3 (MNL)',
    toCoords: [14.5086, 121.0194],
    duration: '1h 25m',
    mode: 'cebu-pacific',
    fareDkk: 390,
    bookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    baggageTip: 'Operated by widebody A330neo or A321neo; select Row 1 or Exit Row seats via Manage Booking.',
    notes: 'Daytime trunk route back to NAIA Terminal 3 for BGC finale and farewell rooftop dinner.'
  }
];

export const DESTINATION_HUBS: DestinationHub[] = [
  {
    id: 'makati-bgc',
    number: '01',
    name: 'Manila: Ayala Triangle, Makati & BGC',
    region: 'Metro Manila · Luzon (8 Nights Total)',
    tagline: 'Ayala Triangle Gardens, Somerset/Citadines Serviced Suites, Luxury Airbnbs & Supercar Showrooms',
    dates: 'Nov 8–12 (5N) & Dec 4–6 (3N) · 8 Nights',
    nights: 8,
    center: [14.5567, 121.0245],
    zoom: 15,
    weatherAvg: '29°C Day / 24°C Night · Dry Shoulder Begin',
    primaryLandmarks: [
      { name: 'Ayala Triangle Gardens & Blackbird Nielson Tower', lat: 14.5567, lng: 121.0245, category: 'Core Park & Dining', openHours: 'Daily 06:00–22:00 (Blackbird 11:00–23:00)' },
      { name: 'Antonio’s Manila at PGA Cars Studio (Porsche/Lambo Showroom)', lat: 14.5994, lng: 121.0568, category: 'Supercar Showroom Dining', openHours: 'Tue–Sun 11:00–22:00 (202 EDSA Mandaluyong)' },
      { name: 'Karrera Bistro & Showroom (Classic Sports Car Cafe)', lat: 14.4172, lng: 121.0384, category: 'Car Enthusiast Cafe', openHours: 'Daily 09:00–21:00 (360 Corporate Woods, Filinvest Alabang)' },
      { name: 'Presidential Car Museum (Quezon Memorial Circle)', lat: 14.6515, lng: 121.0493, category: 'Historic Auto Museum', openHours: 'Tue–Sun 08:00–16:00 (Free Admission · Closed Mondays)' },
      { name: 'B2B Carshow XXII w/ Sung Kang (Dec 5–6 Finale)', lat: 14.5505, lng: 121.0505, category: 'Car Show & Meet', openHours: 'Dec 5–6, 2026 (Special Guest: Sung Kang "Han" + BGC Meets)' }
    ],
    motorsportHighlight: 'Antonio’s at PGA Cars Porsche/Lambo Studio, Karrera Bistro Alabang classic sports cars, Presidential Car Museum & Dec 5–6 B2B Carshow w/ Sung Kang',
    romanceHighlight: 'Candlelit dinner inside historic Nielson Tower control room at Blackbird & Ayala Triangle stroll',
    weatherBackup: 'Ayala Museum Gold of Ancestors gallery + Greenbelt 5 covered luxury skywalk & spa afternoon',
    cebuPacGateway: 'Manila NAIA Terminal 3 (MNL) — 15 min via NAIAX Skyway',
    cebuPacFlightNos: '5J 551 / 5J 562 / DG 6041 (All Domestic Hubs)',
    cebuPacBookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    dining: [
      { name: 'Karrera Bistro (Alabang) / Yardstick Coffee (Makati)', category: 'Morning Coffee', neighborhood: '360 Corporate Woods Alabang & Legazpi Village', specialty: 'Rotating classic Porsche/Ferrari displays right beside your coffee & brick-oven pizza table', bookingTip: 'Drive 18 mins down Skyway from Makati on Wed/Thu morning (09:00 AM)' },
      { name: 'Antonio’s Manila at PGA Cars Studio', category: 'Casual Lunch', neighborhood: '202 EDSA (Inside Porsche/Lamborghini/Bentley Showroom)', specialty: 'Fresh burrata salad & aged steaks overlooking PGA Cars supercar gallery', bookingTip: 'Opens 11:00 AM Tue–Sun; easy parking along the side of the building' },
      { name: 'Blackbird at the Nielson Tower', category: 'Destination Dinner', neighborhood: 'Right inside Ayala Triangle Gardens', specialty: 'Art Deco 1937 Manila airport control tower grill & aviation heritage', bookingTip: 'Book the upstairs Flight Control Room table 3 weeks ahead' }
    ],
    hotels: [
      {
        rank: 1,
        name: 'The Peninsula Manila',
        stars: '5★ Heritage Flagship',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Ayala Triangle Gardens & Blackbird Nielson Tower',
        distance: '80m walk (directly across Ayala Ave & Makati Ave)',
        rateDkk: 1450,
        url: 'https://www.peninsula.com/en/manila',
        lat: 14.5548,
        lng: 121.0266,
        highlight: 'Literally across the crosswalk from Ayala Triangle Gardens & Blackbird; iconic lobby string orchestra.'
      },
      {
        rank: 2,
        name: 'Discovery Primea Makati',
        stars: '5★ Executive Luxury Suites',
        tier: '5-Star Boutique',
        budgetBand: 'smart',
        landmark: 'Ayala Triangle Gardens South & Glorietta',
        distance: '180m walk across Ayala Avenue',
        rateDkk: 1050,
        url: 'https://www.discoveryprimea.com/',
        lat: 14.5516,
        lng: 121.0282,
        highlight: 'Quiet luxury along Ayala Ave with heated infinity pool & huge residential suites.'
      },
      {
        rank: 3,
        name: 'Raffles Makati',
        stars: '5★ All-Suite Flagship',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Ayala Museum, Greenbelt & Ayala Triangle',
        distance: '220m covered garden walk',
        rateDkk: 1750,
        url: 'https://www.raffles.com/makati/',
        lat: 14.5504,
        lng: 121.0246,
        highlight: 'Ultra-serene all-suite sanctuary with Writers Bar & Long Bar right beside Greenbelt.'
      },
      {
        rank: 4,
        name: 'Airbnb: Paseo Parkview Suites / The Ellis (Salcedo Village)',
        stars: '★4.95 Guest Favorite Airbnb (1BR King Balcony)',
        tier: 'Luxury Airbnb',
        budgetBand: 'value',
        landmark: 'Ayala Triangle North Gate & Salcedo Saturday Market',
        distance: '140m walk (2 mins to Ayala Triangle & Blackbird)',
        rateDkk: 490,
        url: 'https://www.airbnb.com/s/Salcedo-Village--Makati--Philippines/homes',
        lat: 14.5588,
        lng: 121.0238,
        highlight: 'Steps from Ayala Triangle along Valero/Sedeño St & right beside Salcedo Weekend Market; washer/dryer & kitchen.'
      },
      {
        rank: 5,
        name: 'Valero Grand Suites by Swiss-Belhotel',
        stars: '4★ Serviced Suite Hotel',
        tier: '4-Star Serviced',
        budgetBand: 'value',
        landmark: 'Ayala Triangle Gardens (Valero St Entrance)',
        distance: '200m walk (2–3 mins behind Ayala Ave towers)',
        rateDkk: 460,
        url: 'https://www.swiss-belhotel.com/en-gb/valero-grand-suites-by-swiss-belhotel',
        lat: 14.5582,
        lng: 121.0229,
        highlight: 'One of the closest physical buildings to Ayala Triangle; spacious suites in quiet Salcedo Village.'
      },
      {
        rank: 6,
        name: 'Citadines Salcedo Makati (Ascott Group)',
        stars: '4★+ Premier Serviced Residence',
        tier: '4-Star Serviced',
        budgetBand: 'smart',
        landmark: 'Ayala Triangle Gardens & Jaime Velasquez Park',
        distance: '380m tree-lined walk (4 mins down Valero St)',
        rateDkk: 740,
        url: 'https://www.discoverasr.com/en/citadines/philippines/citadines-salcedo-makati',
        lat: 14.5602,
        lng: 121.0214,
        highlight: 'Sister brand to Somerset: full kitchen, washer/dryer, lap pool & 4-min walk to Ayala Triangle.'
      },
      {
        rank: 7,
        name: 'Somerset Central Salcedo Makati',
        stars: '4★+ Flagship Somerset Serviced Residence',
        tier: '4-Star Serviced',
        budgetBand: 'smart',
        landmark: 'Ayala Triangle Gardens & Salcedo Park',
        distance: '480m walk (6 mins along HV Dela Costa St)',
        rateDkk: 780,
        url: 'https://www.discoverasr.com/en/somerset-serviced-residence/philippines/somerset-central-salcedo-makati',
        lat: 14.5614,
        lng: 121.0205,
        highlight: 'Brand-new Somerset property in Salcedo Village with rooftop pool & third-wave coffee downstairs.'
      },
      {
        rank: 8,
        name: 'Airbnb: The Residences at Greenbelt — TRAG (Legazpi Village)',
        stars: '★4.98 Luxe Executive Airbnb (High-Floor 1BR)',
        tier: 'Luxury Airbnb',
        budgetBand: 'smart',
        landmark: 'Greenbelt Pavilions, Ayala Museum & Ayala Triangle',
        distance: '320m covered walk to Ayala Triangle via Greenbelt',
        rateDkk: 680,
        url: 'https://www.airbnb.com/s/Legazpi-Village--Makati--Philippines/homes',
        lat: 14.5508,
        lng: 121.0212,
        highlight: 'Makati’s #1 luxury Airbnb tower: huge 70sqm 1-bedroom layouts, resort pool & direct Greenbelt skybridge.'
      },
      {
        rank: 9,
        name: 'Somerset Millennium Makati',
        stars: '4★ Boutique Serviced Residence',
        tier: '4-Star Serviced',
        budgetBand: 'value',
        landmark: 'Ayala Museum, Greenbelt & Ayala Triangle',
        distance: '550m walk through Legazpi Village (7 mins)',
        rateDkk: 610,
        url: 'https://www.discoverasr.com/en/somerset-serviced-residence/philippines/somerset-millennium-makati',
        lat: 14.5522,
        lng: 121.0185,
        highlight: 'Located on Aguirre St in Legazpi Village surrounded by Yardstick Coffee & artisan bistros.'
      },
      {
        rank: 10,
        name: 'Airbnb: Greenbelt Hamilton / KL Tower Serviced Residences',
        stars: '★4.92 Designer Studio/1BR Airbnb',
        tier: 'Luxury Airbnb',
        budgetBand: 'value',
        landmark: 'Legazpi Active Park, Ayala Museum & Ayala Triangle',
        distance: '450m walk along Palanca / Gamboa St (5 mins)',
        rateDkk: 440,
        url: 'https://www.airbnb.com/s/Legazpi-Village--Makati--Philippines/homes',
        lat: 14.5542,
        lng: 121.0178,
        highlight: 'Incredible value in the most walkable coffee & dining pocket of Legazpi Village.'
      },
      {
        rank: 11,
        name: 'Seda Residences Makati',
        stars: '4★+ Modern Serviced Hotel',
        tier: '4-Star Serviced',
        budgetBand: 'smart',
        landmark: 'Ayala Avenue North & Ayala Triangle',
        distance: '390m walk straight down Ayala Ave (5 mins)',
        rateDkk: 750,
        url: 'https://makatiresidences.sedahotels.com/',
        lat: 14.5594,
        lng: 121.0182,
        highlight: '35th-floor Straight Up rooftop bar overlooking Ayala Ave & kitchenette king studios.'
      },
      {
        rank: 12,
        name: 'Shangri-La The Fort, Manila (BGC)',
        stars: '5★ Contemporary BGC Resort',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Bonifacio High Street & BGC Supercar Showrooms',
        distance: '50m step-out onto High Street (10m drive to Ayala Triangle)',
        rateDkk: 1675,
        url: 'https://www.shangri-la.com/en/manila/shangrilathefort/',
        lat: 14.5523,
        lng: 121.0468,
        highlight: 'Best for Dec 4–6 finale nights right on Bonifacio High Street for Wednesday supercar meets.'
      }
    ]
  },
  {
    id: 'manila-bay',
    number: '02',
    name: 'Manila Bay & Intramuros',
    region: 'Historic Walled City · Luzon (2 Nights)',
    tagline: 'Spanish Walled Heritage, San Agustin Kalesa Ride & Sunset Bay Esplanade',
    dates: 'Nov 13–14 (2 Nights)',
    nights: 2,
    center: [14.5794, 120.9772],
    zoom: 13,
    weatherAvg: '30°C Day / 25°C Golden Bay Breeze',
    primaryLandmarks: [
      { name: 'Liberty Walk Manila Car Meet (Wataru & Hyuma Kato) — Parqal Aseana', lat: 14.5256, lng: 120.9902, category: 'Nov 13–14 Car Meet', openHours: 'Fri Nov 13 – Sat Nov 14, 2026 (Parqal Aseana City · 3 min from Hotel)' },
      { name: 'Manila Auto Salon & Philippine Diecast Expo — SMX Convention Center', lat: 14.5321, lng: 120.9815, category: 'Nov 14–15 Auto Show', openHours: 'Sat Nov 14 – Sun Nov 15, 2026 10:00–21:00 (200m walk from Shore/Conrad/Lanson)' },
      { name: 'San Agustin Church & Fort Santiago (Intramuros)', lat: 14.5889, lng: 120.9752, category: 'UNESCO Heritage', openHours: 'Daily 08:00–18:00' },
      { name: 'Manila Bay Sunset Esplanade & Ayala Malls Manila Bay', lat: 14.5232, lng: 120.9885, category: 'Bayfront & Stance Meet', openHours: 'Open 24h (Golden Hour 17:15–18:00)' }
    ],
    motorsportHighlight: 'EXACT DATE MATCH: Liberty Walk Manila Car Meet w/ Wataru & Hyuma Kato at Parqal Aseana (Nov 13) + Manila Auto Salon & Diecast Expo at SMX (Nov 14–15) steps from your hotel!',
    romanceHighlight: 'Horse-drawn kalesa carriage around San Agustin Church & golden sunset cocktails on Manila Bay',
    weatherBackup: 'National Museum of Fine Arts (Juan Luna Spoliarium) & Champagne Room at The Manila Hotel',
    cebuPacGateway: 'Manila NAIA Terminal 3 (MNL) — 12 min via NAIA Expressway Bay Ramp',
    cebuPacFlightNos: '5J Domestic Hub (NAIA T3) + NLEX Northbound Ramp',
    cebuPacBookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    dining: [
      { name: 'Papakape Fort Santiago', category: 'Morning Coffee', neighborhood: 'Inside Fort Santiago gardens, Intramuros', specialty: 'Artisanal ginger-infused cold brew in a glasshouse surrounded by heritage walls', bookingTip: 'Stop in around 10:00 AM during morning walk' },
      { name: 'Batala Bar / Barbara’s Heritage Restaurant', category: 'Casual Lunch', neighborhood: 'Plaza San Luis Complex, across San Agustin Church', specialty: 'Heirloom Spanish-Filipino lunch & Philippine craft ice cream', bookingTip: 'Directly facing San Agustin courtyard' },
      { name: 'Champagne Room / Admiral Club Manila Bay', category: 'Destination Dinner', neighborhood: 'Manila Bay Waterfront', specialty: 'Crystal-palace heritage dining or rooftop sunset bay gastronomy', bookingTip: 'Request a west-facing bay window table for 17:30 sunset' }
    ],
    hotels: [
      {
        rank: 1,
        name: 'The Manila Hotel',
        stars: '5★ Grand Dame Heritage',
        tier: '5-Star Flagship',
        budgetBand: 'smart',
        landmark: 'Intramuros Walls & Rizal Park / Manila Bay',
        distance: '250m from Intramuros Gate',
        rateDkk: 980,
        url: 'https://www.manilahotel.com/',
        lat: 14.5832,
        lng: 120.9736,
        highlight: '1912 historic icon with Champagne Room, sunset bay pier & heritage museum.'
      },
      {
        rank: 2,
        name: 'Conrad Manila',
        stars: '5★ Iconic Cruise-Ship Design',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Manila Bay Esplanade & Shore Residences',
        distance: '80m direct waterfront boardwalk',
        rateDkk: 1380,
        url: 'https://www.hilton.com/en/hotels/mnlmbci-conrad-manila/',
        lat: 14.5318,
        lng: 120.9794,
        highlight: 'C Lounge veranda boasts the most unobstructed sunset view over Manila Bay.'
      },
      {
        rank: 3,
        name: 'Admiral Hotel Manila - MGallery',
        stars: '5★ Art Deco Boutique',
        tier: '5-Star Boutique',
        budgetBand: 'smart',
        landmark: 'Roxas Boulevard & Manila Yacht Club',
        distance: '100m across from Yacht Basin',
        rateDkk: 920,
        url: 'https://all.accor.com/hotel/B9C6/index.en.shtml',
        lat: 14.5648,
        lng: 120.9852,
        highlight: 'Filipino-Spanish Golden Age boutique aesthetic with rooftop catwalk pool.'
      },
      {
        rank: 4,
        name: 'Lanson Place Mall of Asia Manila',
        stars: '5★ Waterfront Serviced Suites',
        tier: '4-Star Serviced',
        budgetBand: 'smart',
        landmark: 'Manila Bay Shore Residences & Esplanade',
        distance: '200m walk along Bay Blvd',
        rateDkk: 880,
        url: 'https://lansonplace.com/mallofasia/',
        lat: 14.5332,
        lng: 120.9799,
        highlight: 'Brand-new quiet bayfront serviced apartments with rooftop infinity edge pool.'
      },
      {
        rank: 5,
        name: 'The Bayleaf Intramuros',
        stars: '4★ Historic Walled Boutique',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'San Agustin Church & Baluarte de San Diego',
        distance: 'Inside Intramuros Walls (250m walk)',
        rateDkk: 580,
        url: 'https://www.thebayleaf.com.ph/intramuros/',
        lat: 14.5881,
        lng: 120.9788,
        highlight: '9 Spoons & Sky Deck rooftop overlooking the 16th-century Intramuros ramparts.'
      },
      {
        rank: 6,
        name: 'Airbnb: Shore 2 / Shore 3 Luxury Bayfront Balcony Suite',
        stars: '★4.91 Waterfront Airbnb (Pool & Sunset View)',
        tier: 'Luxury Airbnb',
        budgetBand: 'value',
        landmark: 'Manila Bay Esplanade (Exact Day 6–7 Itinerary Base)',
        distance: '0m — Directly inside Manila Bay Shore Residences',
        rateDkk: 390,
        url: 'https://www.airbnb.com/s/Shore-Residences--Pasay--Philippines/homes',
        lat: 14.5365,
        lng: 120.9822,
        highlight: 'Matches your exact Nov 13–14 "Manila Bay Shore Residences" itinerary stop at a fraction of hotel cost.'
      }
    ]
  },
  {
    id: 'clark',
    number: '03',
    name: 'Clark Speedway & Pampanga',
    region: 'Central Luzon · Motorsport & Culinary Capital',
    tagline: 'Clark International Speedway Track Day, Kapampangan Gastronomy & CRK Hub',
    dates: 'Nov 15 (1 Night)',
    nights: 1,
    center: [15.1859, 120.5350],
    zoom: 13,
    weatherAvg: '29°C Dry Track Asphalt · Clear Zambales Views',
    primaryLandmarks: [
      { name: 'Clark International Speedway (FIA Grade 4 Circuit)', lat: 15.2064, lng: 120.5178, category: 'Motorsport Circuit', openHours: 'Daily 08:00–17:00 (Verify Track Day Calendar)' },
      { name: 'Clark International Airport (CRK Timber Terminal)', lat: 15.1859, lng: 120.5600, category: 'Cebu Pacific Hub', openHours: 'Open 24h (Prix Versailles World Architecture Winner)' },
      { name: 'Clark Parade Grounds & Acacia Barn Bistros', lat: 15.1815, lng: 120.5256, category: 'Culinary & Park', openHours: 'Daily 06:00–22:00' }
    ],
    motorsportHighlight: 'Clark International Speedway paddock access, parade laps & 4.2km full-circuit hot laps',
    romanceHighlight: 'Curated Kapampangan heirloom tasting menu & afternoon Korean-style thermal spa',
    weatherBackup: 'Clark Museum 4D theater, Pürovel Alpine Spa thermal circuit & Bale Dutung private dining',
    cebuPacGateway: 'Clark International Airport (CRK) — Award-winning boutique timber terminal',
    cebuPacFlightNos: 'DG 6031 (CRK ✈ USU Coron Direct) & 5J 587 (CRK ✈ CEB)',
    cebuPacBookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    dining: [
      { name: 'Here Cafe Clark', category: 'Morning Coffee', neighborhood: 'Clark Parade Grounds', specialty: 'Specialty roastery & artisan bakery inside a giant industrial pavilion under century-old acacia trees', bookingTip: '5 min drive from Clark Marriott' },
      { name: '25 Seeds by Chef Sau del Rosario', category: 'Casual Lunch', neighborhood: 'Dycaico Ancestral House, Angeles', specialty: 'Farm-to-table modern Kapampangan cuisine (Sisig paella, tamales)', bookingTip: '20 min from Clark Speedway; reserve garden veranda' },
      { name: 'Smoki Moto (Clark Marriott)', category: 'Destination Dinner', neighborhood: 'Clark Freeport Zone', specialty: '17th-floor rooftop Korean craft grill & steakhouse overlooking Zambales mountains', bookingTip: 'In-house elevator ride after afternoon spa' }
    ],
    hotels: [
      {
        rank: 1,
        name: 'Clark Marriott Hotel',
        stars: '5★ International Luxury',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Clark International Speedway & CRK Terminal',
        distance: '8 min drive to CRK / 10 min to Speedway',
        rateDkk: 1205,
        url: 'https://www.marriott.com/en-us/hotels/crkmc-clark-marriott-hotel/overview/',
        lat: 15.1862,
        lng: 120.5284,
        highlight: 'Highest-rated 5-star in Pampanga with Smoki Moto & Quan Spa.'
      },
      {
        rank: 2,
        name: 'Swissôtel Clark Philippines',
        stars: '5★ Alpine-Inspired Luxury',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Clark Parade Grounds & Speedway Approach',
        distance: '9 min drive to Clark Speedway',
        rateDkk: 1120,
        url: 'https://www.swissotel.com/hotels/clark/',
        lat: 15.1874,
        lng: 120.5278,
        highlight: 'Floor-to-ceiling Zambales mountain views and Pürovel Spa recovery.'
      },
      {
        rank: 3,
        name: 'Hilton Clark Sun Valley Resort',
        stars: '5★ Hillside Golf & Spa Resort',
        tier: '5-Star Flagship',
        budgetBand: 'smart',
        landmark: 'Clark International Speedway Paddock',
        distance: '7 min scenic drive along hillside ridge',
        rateDkk: 950,
        url: 'https://www.hilton.com/en/hotels/crksvhi-hilton-clark-sun-valley-resort/',
        lat: 15.1995,
        lng: 120.5065,
        highlight: 'Closest 5-star resort to Clark International Speedway with quiet green views.'
      },
      {
        rank: 4,
        name: 'Midori Clark Hotel and Casino',
        stars: '5★ Zen Boutique Luxury',
        tier: '5-Star Boutique',
        budgetBand: 'smart',
        landmark: 'Clark Museum & Parade Grounds',
        distance: '400m from Clark Green Loop',
        rateDkk: 805,
        url: 'https://www.midorihotel.com/',
        lat: 15.1822,
        lng: 120.5198,
        highlight: 'Lush botanical architecture and serene outdoor pool surrounded by mature acacia trees.'
      },
      {
        rank: 5,
        name: 'Park Inn by Radisson Clark',
        stars: '4★ Modern Boutique',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'SM City Clark & NLEX Clark Spur Exit',
        distance: '10 min to CRK Airport',
        rateDkk: 680,
        url: 'https://www.radissonhotels.com/en-us/hotels/park-inn-clark',
        lat: 15.1684,
        lng: 120.5802,
        highlight: 'Smart contemporary rooms ideal for an effortless overnight before morning flight.'
      },
      {
        rank: 6,
        name: 'Quest Plus Conference Center, Clark',
        stars: '4★ Golf & Park Resort',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'Mimosa Plus Golf Course & Clark Parade Grounds',
        distance: '9 min drive to Clark Speedway & CRK',
        rateDkk: 620,
        url: 'https://www.questhotelsandresorts.com/clark/',
        lat: 15.1765,
        lng: 120.5312,
        highlight: 'Set inside lush Mimosa acacia parklands with Charley’s Bar & pool villas.'
      }
    ]
  },
  {
    id: 'coron',
    number: '04',
    name: 'Coron & Northern Palawan',
    region: 'Calamian Archipelago · Palawan (5 Nights)',
    tagline: 'Paolyn Eco-Luxury Houseboats, Kayangan Lake & Tao Paraw Sailing Launch',
    dates: 'Nov 16–20 (5 Nights)',
    nights: 5,
    center: [11.9750, 120.2100],
    zoom: 11,
    weatherAvg: '29°C Air / 28°C Lagoon Water · Calm Amihan Tradewinds',
    primaryLandmarks: [
      { name: 'Kayangan Lake & Twin Lagoon (Coron Island)', lat: 11.9542, lng: 120.2248, category: 'Lagoon Sanctuary', openHours: 'Daily 07:00–17:00 (Paolyn guests enter at 07:00 before dayboats)' },
      { name: 'Paolyn Private Lagoon Mooring', lat: 11.9612, lng: 120.2115, category: 'Houseboat Anchorage', openHours: 'Private 24h Indigenous Tagbanua Sanctuary' },
      { name: 'Coron Harbour & Tao Expedition Pier', lat: 11.9986, lng: 120.2043, category: 'Sailing Launch', openHours: 'Tao Briefing 17:00 Day Prior · Departure 08:00' }
    ],
    motorsportHighlight: 'Custom twin-cylinder Palawan marine diesel bancas & off-grid paraw sailing rig mechanics',
    romanceHighlight: 'Private houseboat lagoon swim before dayboats arrive & candlelit seafood deck dinner',
    weatherBackup: 'Maquinit Natural Saltwater Hot Springs soak (39°C geothermal pools under mangroves)',
    cebuPacGateway: 'Francisco B. Reyes Busuanga Airport (USU) — Direct via Cebgo / Cebu Pacific',
    cebuPacFlightNos: 'DG 6031 (CRK ✈ USU) · DG 6041 / 6043 (MNL ✈ USU) · DG 6055 (CEB ✈ USU)',
    cebuPacBookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    dining: [
      { name: 'Epic Cafe Coron', category: 'Morning Coffee', neighborhood: 'Real Street, Coron Town', specialty: 'Island espresso, mango smoothie bowls & freshly baked pandesal before boarding Tao Paraw', bookingTip: '5 min walk from Tao Philippines office' },
      { name: 'Paolyn Organic Floating Restaurant', category: 'Destination Dinner', neighborhood: 'Coron Island Private Lagoon', specialty: 'Fresh-caught Lapu-Lapu, blue crab & Italian-Filipino recipes served on your houseboat bamboo deck', bookingTip: 'Exclusive to houseboat guests; zero outside boat noise' },
      { name: 'Santino’s Grill / Pacifico Coron', category: 'Casual Lunch', neighborhood: 'Coron Town', specialty: 'Charcoal-grilled baby back ribs & Palawan cashew-crusted catch of the day', bookingTip: 'Great pre-expedition dinner the night before Tao sail' }
    ],
    hotels: [
      {
        rank: 1,
        name: 'Paolyn Houseboats Coron Island (Zero-Carbon Bamboo Villa)',
        stars: '5★ Eco-Luxury Floating Villa',
        tier: '5-Star Boutique',
        budgetBand: 'smart',
        landmark: 'Twin Lagoon & Kayangan Lake (Coron Island)',
        distance: '0m — Anchored directly inside private turquoise lagoon',
        rateDkk: 1340,
        url: 'https://www.paolynhouseboats.com/',
        lat: 11.9612,
        lng: 120.2115,
        highlight: 'Your signature Coron stay: kayak straight from your bedroom deck into Twin Lagoon before dayboats arrive.'
      },
      {
        rank: 2,
        name: 'Two Seasons Coron Island Resort',
        stars: '5★ Private Peninsula Luxury',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Kayangan Lake & Barracuda Lake',
        distance: '15 min private speedboat across Coron Bay',
        rateDkk: 2345,
        url: 'https://www.twoseasonsresorts.com/coron/',
        lat: 11.7985,
        lng: 120.2512,
        highlight: 'Dual-beach sandbar peninsula with transparent bottom kayaks and house reef.'
      },
      {
        rank: 3,
        name: 'Club Paradise Palawan',
        stars: '5★ Private Island Sanctuary',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Dimakya Island Turtle Sanctuary & USU Airport',
        distance: '30 min car + boat from Busuanga USU Airport',
        rateDkk: 1650,
        url: 'https://www.clubparadisepalawan.com/',
        lat: 12.2356,
        lng: 120.0918,
        highlight: 'UNESCO Biosphere private island with resident sea turtles and sunset sandbar.'
      },
      {
        rank: 4,
        name: 'The Funny Lion - Coron',
        stars: '4★+ Safari Boutique Pride',
        tier: '4-Star Premier',
        budgetBand: 'smart',
        landmark: 'Coron Town Pier & Tao Expedition Launch',
        distance: '5 min transfer to Tao Expedition Pier & Kayangan boats',
        rateDkk: 890,
        url: 'https://www.thefunnylion.com/coron-palawan/',
        lat: 12.0038,
        lng: 120.1912,
        highlight: 'Pride Rock rooftop plunge tubs watching sunset over mangrove bay; effortless for morning Tao boarding.'
      },
      {
        rank: 5,
        name: 'Bacau Bay Resort Coron',
        stars: '4★+ Mangrove Marina Resort',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'Coron Harbour & Maquinit Hot Springs Road',
        distance: '1.5 km from Coron Town Boat Dock',
        rateDkk: 760,
        url: 'https://www.bacaubayresortcoron.com/',
        lat: 12.0019,
        lng: 120.1945,
        highlight: 'Private jetty for island-hopping departures and tranquil pool lounge.'
      },
      {
        rank: 6,
        name: 'Two Seasons Coron Bayside Hotel',
        stars: '4★ Boutique Harbourfront',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'Coron Seaport & Tao Philippines Pier',
        distance: '300m from Coron Harbour boat launch',
        rateDkk: 790,
        url: 'https://www.twoseasonsresorts.com/bayside/',
        lat: 11.9942,
        lng: 120.1982,
        highlight: 'Infinity pool directly overlooking Coron Bay with private pier for early Kayangan Lake banca launch.'
      }
    ]
  },
  {
    id: 'el-nido',
    number: '05',
    name: 'El Nido & Bacuit Bay',
    region: 'Northern Palawan · Karst Archipelago (6 Nights)',
    tagline: 'Big Lagoon Kayaking, Nacpan Coastal 4x4 & Pangulasian / Lio Beach Luxury',
    dates: 'Nov 21–26 (6 Nights)',
    nights: 6,
    center: [11.1850, 119.3950],
    zoom: 12,
    weatherAvg: '30°C Sunny Karst Seas · Emerald Lagoon Visibility',
    primaryLandmarks: [
      { name: 'Big Lagoon & Secret Lagoon (Miniloc Island)', lat: 11.1528, lng: 119.3214, category: 'Marine Sanctuary', openHours: 'Timed Eco-Permits 08:00–16:00' },
      { name: 'Las Cabañas / Maremegmeg Sunset Beach & Sandbar', lat: 11.1436, lng: 119.3935, category: 'Sunset Beach Club Hub', openHours: 'Daily 07:00–22:00 (Golden Hour 17:15–18:00)' },
      { name: 'Lio Beach Tourism Estate & ENI Airport', lat: 11.2028, lng: 119.4132, category: '4km Eco-Beach & Airport', openHours: 'Daily 06:00–22:00 (3 min to AirSWIFT/CebuPac Terminal)' },
      { name: 'Nacpan & Calitang Twin Beach', lat: 11.3214, lng: 119.4268, category: '4x4 Coastal Trail', openHours: 'Daily 07:00–20:00 (Sunset 17:35)' }
    ],
    motorsportHighlight: 'Enduro coastal switchbacks, high-clearance 4x4 river crossings to Nacpan & twin-outboard speed craft',
    romanceHighlight: 'Emerald Big Lagoon kayaking, Las Cabañas sunset sandbar cocktails & Lio Beach torch-lit dinner',
    weatherBackup: 'Seda Lio / Piece Lio traditional Hilot massage + Kalye Artisano gallery walk in Lio Estate',
    cebuPacGateway: 'El Nido Lio Airport (ENI) via AirSWIFT (now part of Cebu Pacific Group)',
    cebuPacFlightNos: 'T6 511 / T6 535 (ENI ✈ CEB) · T6 110 / T6 142 (MNL ✈ ENI) · 5J 637 (MNL ✈ PPS)',
    cebuPacBookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    dining: [
      { name: 'Gusto Gelato & Specialty Coffee / Hama Coffee', category: 'Morning Coffee', neighborhood: 'Calle Hama, El Nido Town Beach', specialty: 'Sea-front flat white & warm croissant looking straight at Cadlao Island cliffs', bookingTip: 'Walk along the sand around 09:30 AM' },
      { name: 'Maremegmeg Beach Club (MBC) / Las Cabañas Sunset Bar', category: 'Sunset Cocktails', neighborhood: 'Las Cabañas Beach (South)', specialty: 'Front-row sunset daybeds facing Depeldet Island sandbar with mango daiquiris & fresh seafood', bookingTip: 'Arrive by 16:30 for front-row sunset loungers' },
      { name: 'Piece Lio / Globy Traveling Chef (Lio Beach Promenade)', category: 'Destination Dinner', neighborhood: 'Lio Beach Estate (North)', specialty: 'Torch-lit al fresco dining on the 4km Lio eco-beach promenade under coconut palms', bookingTip: 'Zero tricycle traffic inside Lio Estate; stroll straight from your hotel' }
    ],
    hotels: [
      {
        rank: 1,
        name: 'Pangulasian Island Resort (El Nido Resorts)',
        stars: '5★ Eco-Luxury Flagship',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Big Lagoon & Secret Lagoon (Bacuit Bay)',
        distance: '8 min private speedboat to Big Lagoon',
        rateDkk: 3350,
        url: 'https://www.elnidoresorts.com/pangulasian-island/',
        lat: 11.1156,
        lng: 119.3302,
        highlight: 'The "Island of the Sun" with canopy villas and private sunset catamaran cruises.'
      },
      {
        rank: 2,
        name: 'Cauayan Island Resort',
        stars: '5★ Boutique Private Island',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Cadlao Lagoon & Helicopter Island',
        distance: '10 min boat to Helicopter Island & Secret Beach',
        rateDkk: 2345,
        url: 'https://www.cauayanresort.com/',
        lat: 11.2012,
        lng: 119.3425,
        highlight: 'Dramatic limestone cliff backdrop with water villas and infinity pool.'
      },
      {
        rank: 3,
        name: 'Seda Lio Beach Resort (Lio Tourism Estate)',
        stars: '5★ Sustainable Beachfront Resort',
        tier: '5-Star Flagship',
        budgetBand: 'smart',
        landmark: 'Lio Beach & El Nido Lio Airport (ENI)',
        distance: '0m on 4km Lio Beach · 3 min free shuttle to ENI Airport',
        rateDkk: 1550,
        url: 'https://lio.sedahotels.com/',
        lat: 11.2035,
        lng: 119.4135,
        highlight: 'Flagship resort of Ayala’s 325-hectare Lio Estate (~₱13,000/n): huge pool, spa villas & direct Lio Beach boat pier.'
      },
      {
        rank: 4,
        name: 'Cadlao Resort & Restaurant',
        stars: '4★+ Iconic Cliffside Boutique',
        tier: '4-Star Premier',
        budgetBand: 'smart',
        landmark: 'Caalan Beach facing Cadlao Island Monolith',
        distance: '800m beachfront stroll to El Nido Town',
        rateDkk: 1080,
        url: 'https://cadlaoresort.com/',
        lat: 11.1885,
        lng: 119.3878,
        highlight: 'Matches your Day 14–15 Cadlao cliffside boutique itinerary highlight; twin infinity pools facing Bacuit Bay.'
      },
      {
        rank: 5,
        name: 'Maremegmeg Beach Club — MBC (Las Cabañas Beach)',
        stars: '4★+ Premier Beachfront Boutique',
        tier: '4-Star Premier',
        budgetBand: 'smart',
        landmark: 'Las Cabañas / Maremegmeg Sunset Beach',
        distance: '0m — Directly on the sand at Las Cabañas Beach',
        rateDkk: 1150,
        url: 'https://www.mbcelnido.com/',
        lat: 11.1458,
        lng: 119.3948,
        highlight: 'The most upscale modern boutique hotel right on Las Cabañas Beach (~₱9,600/n) with private infinity pool & beach club.'
      },
      {
        rank: 6,
        name: 'Las Cabañas Beach Resort (Sunset Sandbar Tip)',
        stars: '4★ Iconic Sunset Beachfront Cottages',
        tier: '4-Star Premier',
        budgetBand: 'smart',
        landmark: 'Las Cabañas Sunset Point & Depeldet Sandbar',
        distance: '0m — At the western sunset tip of Las Cabañas Beach',
        rateDkk: 1050,
        url: 'https://www.lascabanasbeachresort.com/',
        lat: 11.1422,
        lng: 119.3918,
        highlight: 'The original namesake resort on the quietest tip of Las Cabañas (~₱8,800/n); step off your veranda into sunset waters.'
      },
      {
        rank: 7,
        name: 'Piece Lio (MICHELIN Guide · Lio Beach Estate)',
        stars: '4★+ Japanese-Filipino Design Boutique',
        tier: '4-Star Serviced',
        budgetBand: 'smart',
        landmark: 'Lio Beach Promenade & Kalye Artisano',
        distance: '150m walk to Lio Beach · 3 min free shuttle to ENI Airport',
        rateDkk: 950,
        url: 'https://www.piecelio.com/',
        lat: 11.2012,
        lng: 119.4142,
        highlight: 'MICHELIN Guide selected minimalist design hotel (~₱8,000/n) with loft suites, courtyard pool & tranquil forest-beach vibe.'
      },
      {
        rank: 8,
        name: 'Huni Lio (Lio Beach Estate)',
        stars: '4★+ Contemporary Beachfront Hotel',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'Lio Beach Pier & Promenade',
        distance: '50m to Lio Beach sand & boat pier · 3 min to ENI Airport',
        rateDkk: 890,
        url: 'https://hunilio.com/',
        lat: 11.2018,
        lng: 119.4122,
        highlight: 'Modern Filipino beachfront sanctuary (~₱7,500/n) with pool bar and free airport transfers inside Lio Estate.'
      },
      {
        rank: 9,
        name: 'Balai Adlao / Isla Amara (Lio Beach Promenade)',
        stars: '4★ Boutique Eco-Resorts (Lio Estate)',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'Lio Beach Dining Strip & Boat Pier',
        distance: '40m to Lio Beach & restaurants · 3 min to ENI Airport',
        rateDkk: 820,
        url: 'https://www.liobeach.com/stay/',
        lat: 11.2024,
        lng: 119.4128,
        highlight: 'Best value inside Lio Tourism Estate (~₱6,850/n incl. breakfast & airport shuttle) steps from the beach.'
      },
      {
        rank: 10,
        name: 'Karuna El Nido Villas / Sunset Cliff Airbnb (Las Cabañas)',
        stars: '★4.95 Panoramic Cliff Pool Villa / Airbnb',
        tier: 'Luxury Airbnb',
        budgetBand: 'value',
        landmark: 'Las Cabañas Beach & Corong-Corong Sunset Bay',
        distance: '300m hillside above Las Cabañas Beach (free buggy shuttle)',
        rateDkk: 880,
        url: 'https://www.airbnb.com/s/Corong-Corong--El-Nido--Philippines/homes',
        lat: 11.1512,
        lng: 119.3962,
        highlight: 'Famous hillside infinity pool & spacious 1BR glass-front apartments (~₱7,400/n) with jaw-dropping Bacuit Bay sunsets.'
      },
      {
        rank: 11,
        name: 'H Hotel El Nido (Vegan-Friendly Luxury Boutique)',
        stars: '4★+ Town Beachfront Boutique',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'El Nido Beach & Tao Expedition Arrival Pier',
        distance: '50m from Boat Tour Departure Beach',
        rateDkk: 720,
        url: 'https://www.hhotel-elnido.com/',
        lat: 11.1802,
        lng: 119.3872,
        highlight: 'Managed by H Hospitality (same group as Piece Lio); rooftop bar overlooking Cadlao cliffs right where Tao Paraw lands.'
      }
    ]
  },
  {
    id: 'cebu-mactan',
    number: '06',
    name: 'Cebu & Mactan Island',
    region: 'Central Visayas · Mountain Passes & Heritage (3 Nights)',
    tagline: 'Cebu Transcentral Highway Twisties, CCLEX Bridge & NUSTAR Waterfront',
    dates: 'Nov 27–28 (2N) & Dec 3 (1N) · 3 Nights',
    nights: 3,
    center: [10.3157, 123.9150],
    zoom: 12,
    weatherAvg: '28°C Coast / 22°C Busay Highlands (Transcentral Hwy)',
    primaryLandmarks: [
      { name: 'Cebu Transcentral Highway (Balamban Twisties) & Tops Lookout', lat: 10.3712, lng: 123.8708, category: 'Mountain Driving Pass', openHours: 'Open 24h (33km Mountain Touge Pass: Busay → Balamban)' },
      { name: 'CCLEX Bridge (Cebu-Cordova Link Expressway)', lat: 10.2785, lng: 123.8965, category: 'Engineering Icon', openHours: 'Open 24h (8.9km Cable-Stayed Sea Crossing)' },
      { name: 'Cebu Pier 1 / Pier 3 RORO Car Ferry & OceanJet Terminal (To Bohol)', lat: 10.2929, lng: 123.9090, category: 'Cebu → Bohol Roadtrip Launch', openHours: 'FastCat / Lite Ferries RORO (Car to Tubigon/Tagbilaran) & OceanJet' },
      { name: 'Basilica del Santo Niño & Magellan’s Cross', lat: 10.2942, lng: 123.9021, category: '1521 Heritage', openHours: 'Daily 06:00–19:00' }
    ],
    motorsportHighlight: 'Self-Drive 4x4 Pickup / SUV Roadtrip: Cebu Transcentral Highway (Busay–Balamban hairpins) + CCLEX Sea Bridge + RORO Car Ferry (or Dual-Island Rental) across to Bohol!',
    romanceHighlight: 'Sirao Flower Garden in the misty highlands, Tops Lookout sunset dinner & Mactan seaside spa',
    weatherBackup: 'National Museum Cebu (Old Aduana) + CHI The Spa Village hydrotherapy at Shangri-La Mactan',
    cebuPacGateway: 'Mactan-Cebu International Airport (CEB) — Cebu Pacific Visayas Mega-Hub',
    cebuPacFlightNos: '5J 554 / 5J 562 / 5J 568 (CEB ✈ MNL) · T6 511 (ENI ✈ CEB) · DG 6515 (CEB ✈ DGT)',
    cebuPacBookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    dining: [
      { name: 'Tightrope Coffee / Abaca Baking Company', category: 'Morning Coffee', neighborhood: 'Kasambagan / Nivel Hills (En route to Transcentral Hwy)', specialty: 'Third-wave single-origin espresso & butter croissants before the mountain pass drive', bookingTip: 'Pick up at 09:30 AM on the way up to Busay' },
      { name: 'House of Lechon / Tales & Feelings', category: 'Casual Lunch', neighborhood: 'Acacia St, Cebu City', specialty: 'Crispy Carcar heritage lechon with green mango salad & calamansi', bookingTip: '10 min from Yap-Sandiego Ancestral House' },
      { name: 'Il Primo (NUSTAR) / Cowrie Cove (Shangri-La Mactan)', category: 'Destination Dinner', neighborhood: 'CCLEX Waterfront or Mactan Cliffside', specialty: 'Authentic Italian steakhouse overlooking CCLEX Bridge or open-air reef-edge seafood grill', bookingTip: 'Book cliff-edge pergola table at Cowrie Cove' }
    ],
    hotels: [
      {
        rank: 1,
        name: 'Fili Hotel at NUSTAR Cebu',
        stars: '5★ Filipino Five-Star Flagship',
        tier: '5-Star Flagship',
        budgetBand: 'smart',
        landmark: 'CCLEX Bridge Landing & Santo Niño Heritage Quarter',
        distance: '500m from CCLEX Ramp / 8 min to Magellan’s Cross',
        rateDkk: 890,
        url: 'https://nustar.ph/hotels/fili/',
        lat: 10.2642,
        lng: 123.8805,
        highlight: 'Brand-new 5-star waterfront icon directly overlooking the CCLEX Bridge at an exceptional rate.'
      },
      {
        rank: 2,
        name: 'Shangri-La Mactan, Cebu',
        stars: '5★ Premier Beach & Marine Resort',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Punta Engaño Marine Sanctuary & MCIA Airport',
        distance: '18 min drive to Mactan-Cebu Airport (CEB)',
        rateDkk: 1580,
        url: 'https://www.shangri-la.com/en/cebu/mactanresort/',
        lat: 10.3078,
        lng: 124.0218,
        highlight: '6-hectare private marine sanctuary, CHI The Spa village & Cowrie Cove seafood.'
      },
      {
        rank: 3,
        name: 'Marco Polo Plaza Cebu',
        stars: '5★ Highland Gateway Hotel',
        tier: '5-Star Boutique',
        budgetBand: 'value',
        landmark: 'Cebu Transcentral Highway & Tops Lookout',
        distance: '0 km — Right at the Nivel Hills start of Transcentral Hwy',
        rateDkk: 690,
        url: 'https://www.marcopolohotels.com/en/marco-polo-plaza-cebu/',
        lat: 10.3418,
        lng: 123.8962,
        highlight: 'Perched 600ft in Nivel Hills—pull out of the driveway straight onto the mountain pass.'
      },
      {
        rank: 4,
        name: 'Dusit Thani Mactan Cebu Resort',
        stars: '5★ Thai-Filipino Coastal Luxury',
        tier: '5-Star Flagship',
        budgetBand: 'smart',
        landmark: 'Punta Engaño North Peninsula (Sunset Facing)',
        distance: '20 min to MCIA Airport Terminal',
        rateDkk: 790,
        url: 'https://www.dusit.com/dusitthani-mactancebu/',
        lat: 10.3245,
        lng: 124.0352,
        highlight: '100-meter infinity pool facing northwest for dramatic Magellan Bay sunsets.'
      },
      {
        rank: 5,
        name: 'Radisson Blu Cebu',
        stars: '5★ Harbor & Heritage Hub',
        tier: '5-Star Boutique',
        budgetBand: 'value',
        landmark: 'Cebu Pier 1 (Bohol Ferry) & Basilica del Santo Niño',
        distance: '5 min drive to OceanJet Bohol Ferry Pier 1',
        rateDkk: 680,
        url: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-cebu',
        lat: 10.3102,
        lng: 123.9185,
        highlight: 'Unbeatable logistics for morning fast-ferry transfer to Bohol and Old Cebu sights.'
      },
      {
        rank: 6,
        name: 'Seda Ayala Center Cebu',
        stars: '4★+ Premier Lifestyle Hotel',
        tier: '4-Star Serviced',
        budgetBand: 'value',
        landmark: 'Cebu Business Park & Transcentral Approach',
        distance: '10 min to Transcentral Hwy foot & Pier 1',
        rateDkk: 590,
        url: 'https://ayalacentercebu.sedahotels.com/',
        lat: 10.3182,
        lng: 123.9058,
        highlight: 'Walkable to Abaca Baking Company & lush garden pool in the heart of Cebu.'
      }
    ]
  },
  {
    id: 'bohol-siquijor',
    number: '07',
    name: 'Bohol & Siquijor Islands',
    region: 'Central Visayas · Karst Hills & Mystic Coast (4 Nights)',
    tagline: 'Chocolate Hills ATV, Loboc River Cruise & Siquijor 72km Coastal Ring Road',
    dates: 'Nov 29–Dec 2 (4 Nights)',
    nights: 4,
    center: [9.4200, 123.6800],
    zoom: 10,
    weatherAvg: '29°C Coastal Breeze · Emerald Waterfalls',
    primaryLandmarks: [
      { name: 'Bilar Man-Made Mahogany Forest & Loay Interior Road (Bohol Roadtrip)', lat: 9.6872, lng: 124.0815, category: 'Iconic Driving Canopy', openHours: 'Open 24h (2km Dense Mahogany Tunnel between Loboc & Carmen)' },
      { name: 'Chocolate Hills ATV Trail & Carmen Viewpoint (Bohol)', lat: 9.8297, lng: 124.1397, category: 'Geological & ATV Hub', openHours: 'Daily 08:00–17:00 (Self-Drive Parking at Base)' },
      { name: 'Panglao–Tagbilaran–Anda Coastal Roadtrip Loop', lat: 9.5485, lng: 123.7745, category: 'Coastal Self-Drive', openHours: 'Open 24h (Smooth Limestone Coastal Highway)' },
      { name: 'Cambugahay Falls & Siquijor 72km Coastal Ring Road', lat: 9.1412, lng: 123.6265, category: '72km Island Ring Road', openHours: 'Cambugahay Daily 07:00–17:00 · Zero-Traffic Coastal Loop' }
    ],
    motorsportHighlight: 'Bohol Self-Drive Roadtrip (Panglao → Loboc → 2km Bilar Mahogany Forest Tunnel → Chocolate Hills ATV) + Siquijor 72km Coastal Ring Road',
    romanceHighlight: 'Loboc River floating acoustic guitar cruise, Cambugahay turquoise falls & San Juan cliff sunset dinner',
    weatherBackup: 'Baclayon 1596 Coral-Stone Church Museum, Bohol Bee Farm cliff lunch & Coco Grove shell spa',
    cebuPacGateway: 'Bohol-Panglao Intl (TAG) & Dumaguete (DGT) + OceanJet Fast Ferry',
    cebuPacFlightNos: '5J 617 / 5J 619 (MNL ✈ TAG) · DG 6516 (DGT ✈ CEB) · OceanJet TAG/SIQ/CEB',
    cebuPacBookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    dining: [
      { name: 'Overgrown Cafe & Bar / Bucafe Siquijor', category: 'Morning Coffee', neighborhood: 'Panglao Bohol & Mt. Bandilaan Siquijor', specialty: 'Specialty coconut cold brew & sourdough toast; Bucafe overlooks Siquijor hills', bookingTip: 'Pit-stop during Siquijor ring road cruise' },
      { name: 'Loboc Riverwatch Floating Restaurant / Bohol Bee Farm', category: 'Casual Lunch', neighborhood: 'Loboc River & Dao Cliffside, Bohol', specialty: 'Organic garden salad with edible flowers, cassava chips & river cruise serenade', bookingTip: 'Board the 11:30 AM Loboc cruise before Chocolate Hills' },
      { name: 'Saffron at Amorita / Dolce Amore Siquijor', category: 'Destination Dinner', neighborhood: 'Alona Cliffside (Bohol) & San Juan (Siquijor)', specialty: 'Cliff-edge Boholano heirloom cuisine & authentic wood-fired Italian in Siquijor', bookingTip: 'Reserve Amorita cliff table for sunset' }
    ],
    hotels: [
      {
        rank: 1,
        name: 'Amorita Resort, Panglao Bohol',
        stars: '5★ SLH Cliffside Boutique',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Alona Beach Eastern Limestone Cliff & TAG Airport',
        distance: '8 min to Panglao TAG Airport / Overlooks Alona Bay',
        rateDkk: 1320,
        url: 'https://www.amoritaresort.com/',
        lat: 9.5488,
        lng: 123.7772,
        highlight: 'Small Luxury Hotels of the World member perched quietly on the cliff above Alona.'
      },
      {
        rank: 2,
        name: 'Eskaya Beach Resort & Spa, Bohol',
        stars: '5★ All-Villa Private Sanctuary',
        tier: '5-Star Flagship',
        budgetBand: 'flagship',
        landmark: 'Bolod / Tawala Coastline, Panglao Island',
        distance: '10 min to Panglao Airport & Bohol Coastal Road',
        rateDkk: 2850,
        url: 'https://www.eskayaresort.com/',
        lat: 9.5542,
        lng: 123.7985,
        highlight: 'Thatched luxury pool villas with private infinity pools and Handuraw cliff spa.'
      },
      {
        rank: 3,
        name: 'The Bellevue Resort, Panglao Bohol',
        stars: '5★ ASEAN Green Luxury Resort',
        tier: '5-Star Flagship',
        budgetBand: 'smart',
        landmark: 'Doljo Sunset Beach & Tagbilaran Causeway',
        distance: '18 min to Tagbilaran Fast Ferry Port',
        rateDkk: 980,
        url: 'https://www.thebellevuebohol.com/',
        lat: 9.5912,
        lng: 123.7245,
        highlight: 'Quiet Sunset side of Panglao away from crowds with private white-sand cove.'
      },
      {
        rank: 4,
        name: 'Coco Grove Beach Resort, Siquijor',
        stars: '4★+ Premier Island Sanctuary',
        tier: '4-Star Premier',
        budgetBand: 'smart',
        landmark: 'Tubod Marine Sanctuary & San Juan Sunset Coast',
        distance: '15 min ride on Coastal Ring Road to Cambugahay Falls',
        rateDkk: 890,
        url: 'https://www.cocogrovebeachresort.com/',
        lat: 9.1468,
        lng: 123.5112,
        highlight: 'Siquijor’s flagship luxury resort on an 800m beach bordering a protected coral reef.'
      },
      {
        rank: 5,
        name: 'Oceanica Resort Panglao (formerly South Palms)',
        stars: '4★+ White-Sand Palm Sanctuary',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'Bolod Beach & Bohol Coastal Road',
        distance: '10 min to TAG Airport / 35 min to Tarsier Sanctuary',
        rateDkk: 820,
        url: 'https://oceanicaresortpanglao.com/',
        lat: 9.5568,
        lng: 123.8012,
        highlight: 'Longest palm-fringed white sand beach on Panglao Island.'
      },
      {
        rank: 6,
        name: 'White Villas Resort, Siquijor',
        stars: '4★ Mediterranean Boutique',
        tier: '4-Star Premier',
        budgetBand: 'value',
        landmark: 'Solangon Beach, San Juan Ring Road',
        distance: '12 min to Siquijor Port & Lugnason Falls',
        rateDkk: 650,
        url: 'https://www.whitevillasresort.com/',
        lat: 9.1645,
        lng: 123.4958,
        highlight: 'Chic whitewashed beachfront villas facing west for Siquijor’s famous crimson sunsets.'
      }
    ]
  }
];

export const DAILY_ITINERARY: DaySchedule[] = [
  { day: 1, date: 'Nov 8', hubId: 'makati-bgc', location: 'Makati Ayala Triangle', generalActivity: 'Arrival in Manila NAIA T3, private transfer to Ayala Triangle / Salcedo stay & evening relaxation', carHighlight: 'Spotting luxury supercars & modified overland SUVs cruising Ayala Avenue', romanceHighlight: 'Illuminated Ayala Triangle Gardens evening stroll & rooftop welcome cocktails', weatherBackup: 'Indoor lobby lounge string quartet & spa at The Peninsula Manila', coords: [14.5567, 121.0245] },
  { day: 2, date: 'Nov 9', hubId: 'makati-bgc', location: 'Makati & BGC High Street', generalActivity: 'Exploring Makati CBD, Greenbelt pavilions & BGC Bonifacio High Street', carHighlight: 'Visiting premier exotic automotive showrooms & bespoke styling boutiques in BGC', romanceHighlight: 'Gourmet lunch at Greenbelt garden cafe, boutique shopping & couples reflexology spa', weatherBackup: 'Covered Greenbelt 3–5 elevated walkway & Mitsukoshi indoor Japanese food hall', coords: [14.5505, 121.0505] },
  { day: 3, date: 'Nov 10', hubId: 'makati-bgc', location: 'Antonio’s at PGA Cars & Ayala Museum', generalActivity: 'Morning at Ayala Museum (opens Tue 10 AM) & lunch at Antonio’s Manila inside PGA Cars Studio (202 EDSA)', carHighlight: 'Lunch at Antonio’s Manila (11 AM Tue) right inside the PGA Cars Porsche / Lamborghini / Bentley showroom + classic J70 Land Cruisers', romanceHighlight: 'Gold of Ancestors & indigenous textile exhibitions at Ayala Museum + burrata lunch at Antonio’s', weatherBackup: 'Full afternoon inside Ayala Museum 4 floors + PGA Cars indoor showroom gallery', coords: [14.5994, 121.0568] },
  { day: 4, date: 'Nov 11', hubId: 'makati-bgc', location: 'Karrera Bistro Alabang & Galleries', generalActivity: 'Morning Skyway drive to Karrera Bistro (Filinvest Alabang) & afternoon at Karrivin Plaza / Silverlens galleries', carHighlight: 'Coffee & brick-oven pizza at Karrera Bistro (360 Corporate Woods Alabang) right beside rotating classic Porsche/Ferrari displays', romanceHighlight: 'Private gallery viewing at Silverlens & afternoon high tea at The Peninsula Manila lobby', weatherBackup: 'Karrera Bistro indoor sports car showroom & Karrivin Plaza contemporary art compound', coords: [14.4172, 121.0384] },
  { day: 5, date: 'Nov 12', hubId: 'makati-bgc', location: 'Presidential Car Museum & Nielson Tower', generalActivity: 'Morning visit to Presidential Car Museum (Quezon Memorial Circle, opens 8 AM) & evening dinner at Blackbird Nielson Tower', carHighlight: 'Presidential Car Museum (Imelda Marcos’s Rolls-Royce Phantom V, Mercedes 600 Pullman & vintage state fleet — 20 min exhibit) + JDM garage', romanceHighlight: 'Candlelit dinner at Blackbird at the Nielson Tower (historic 1937 airport control tower inside Ayala Triangle)', weatherBackup: 'Indoor Presidential Car Museum hall & aviation heritage dining room at Blackbird', coords: [14.6515, 121.0493] },
  { day: 6, date: 'Nov 13', hubId: 'manila-bay', location: 'Liberty Walk Manila @ Parqal (Manila Bay)', generalActivity: 'Checkout & transfer to Manila Bay hotel (Shore / Lanson / Conrad / Admiral) + afternoon/evening at Parqal Aseana City', carHighlight: '🔥 LIVE EVENT: Liberty Walk Manila Car Meet w/ Wataru Kato & Hyuma Kato at Parqal, Aseana City (Show & Shine, R34/GT-R LBWK builds, Fan Signing & Afterparty)', romanceHighlight: 'Bayfront suite check-in with private sunset balcony & golden-hour infinity pool dip before walking 3 mins to Parqal', weatherBackup: 'Parqal Aseana covered canopy street & Conrad C Lounge floor-to-ceiling bay panorama', coords: [14.5256, 120.9902] },
  { day: 7, date: 'Nov 14', hubId: 'manila-bay', location: 'Intramuros & Manila Auto Salon / Diecast Expo (SMX)', generalActivity: 'Morning heritage exploration in 16th-century Intramuros + afternoon at SMX Convention Center Manila (200m from hotel)', carHighlight: '🔥 LIVE EVENT: Manila Auto Salon 2026 (30th Custom Car Show & 31st Sport Truck Show) + Philippine Diecast Expo & Megameet at SMX Convention Center!', romanceHighlight: 'Horse-drawn kalesa carriage ride around San Agustin Church & sunset bay esplanade drinks', weatherBackup: 'Full air-conditioned halls at SMX Convention Center Manila + San Agustin Museum cloisters', coords: [14.5321, 120.9815] },
  { day: 8, date: 'Nov 15', hubId: 'clark', location: 'SMX Finale 🚗 Clark International Speedway', generalActivity: 'Optional morning stop at SMX / Presidential Car Museum en route up NLEX Skyway Stage 3 to Clark Freeport Zone', carHighlight: 'Clark International Speedway track paddock access, parade laps & high-speed circuit runs (plus NLEX expressway run)', romanceHighlight: 'Heirloom Kapampangan gourmet lunch at 25 Seeds & rejuvenating afternoon thermal spa', weatherBackup: 'Clark Museum & 25 Seeds indoor ancestral dining room in Angeles City', coords: [15.2064, 120.5178] },
  { day: 9, date: 'Nov 16', hubId: 'coron', location: 'Clark ✈ Coron Lagoon', generalActivity: 'Cebu Pacific morning flight CRK ✈ USU Busuanga & private boat to Coron Island', carHighlight: 'Custom island utility transport rigs engineered for Palawan hill roads', romanceHighlight: 'Check into Paolyn Eco-Luxury Houseboat anchored inside a private turquoise lagoon', weatherBackup: 'Sheltered zero-wave private lagoon anchorage & indoor bamboo lounge deck', coords: [11.9612, 120.2115] },
  { day: 10, date: 'Nov 17', hubId: 'coron', location: 'Kayangan & Twin Lagoon', generalActivity: 'Private wooden banca cruise to Kayangan Lake, Twin Lagoon & Siete Pecados reef', carHighlight: 'Twin-cylinder marine diesel inboard engines custom-crafted by Palawan boatwrights', romanceHighlight: 'Early-morning swim in crystal lagoons before dayboats arrive & candlelit deck dinner', weatherBackup: 'Maquinit Natural Saltwater Hot Springs & sheltered Twin Lagoon inner cove', coords: [11.9542, 120.2248] },
  { day: 11, date: 'Nov 18', hubId: 'coron', location: 'Coron ⛵ Tao Expedition', generalActivity: 'Board the Tao Philippines traditional paraw sailboat expedition across northern Palawan', carHighlight: 'Examining traditional bamboo outrigger mechanics, wooden rudder & wind navigation', romanceHighlight: 'Sailing across untouched turquoise seas to an uninhabited sandbar for sunset drinks', weatherBackup: 'Protected leeward island channels along Culion & Busuanga coast', coords: [11.8200, 120.0500] },
  { day: 12, date: 'Nov 19', hubId: 'coron', location: 'Culion & Linapacan Atolls', generalActivity: 'Island hopping through remote Culion & Linapacan archipelagos with reef snorkeling', carHighlight: 'Off-grid basecamp engineering study: solar micro-grids & marine desalination systems', romanceHighlight: 'Handmade bamboo beach cabanas, open-air beachfront massage & fresh grilled mahi-mahi', weatherBackup: 'Culion Historical Museum & sheltered bay coral garden snorkeling', coords: [11.6100, 119.8600] },
  { day: 13, date: 'Nov 20', hubId: 'coron', location: 'Linapacan Marine Channels', generalActivity: 'Deep sailing exploration through deserted island channels & pristine coral gardens', carHighlight: 'Studying traditional outrigger hull hydro-mechanics built for open-ocean swells', romanceHighlight: 'Stargazing under zero-light-pollution skies around a driftwood campfire', weatherBackup: 'Tao main farm basecamp cooking workshop & bamboo longhouse social lounge', coords: [11.4500, 119.6500] },
  { day: 14, date: 'Nov 21', hubId: 'el-nido', location: 'Tao Arrival → Las Cabañas / Lio Beach', generalActivity: 'Final morning sail arriving in El Nido & check-in at Las Cabañas Beach Resort / Maremegmeg or Lio Estate', carHighlight: 'Inspecting custom-converted island 4x4 safari transports & trail buggies', romanceHighlight: 'Check into beachfront cottage at Las Cabañas / Lio Beach & sunset sandbar cocktails', weatherBackup: 'Resort spa suite recovery ritual & covered beachfront veranda dining', coords: [11.1436, 119.3935] },
  { day: 15, date: 'Nov 22', hubId: 'el-nido', location: 'El Nido & Cadlao Bay', generalActivity: 'Exploring El Nido artisan boutiques, specialty coffee cafés & Cadlao coast', carHighlight: 'Renting an enduro motorcycle to ride winding coastal switchbacks & jungle trails', romanceHighlight: 'Romantic beachfront brunch at Cadlao Resort & infinity pool overlooking limestone cliffs', weatherBackup: 'Kalye Artisano Filipino craft galleries & boutique coffee tasting in Lio', coords: [11.1885, 119.3878] },
  { day: 16, date: 'Nov 23', hubId: 'el-nido', location: 'Nacpan & Calitang Twin Beach', generalActivity: 'Northern coastal road expedition to the 4km golden crescent of Nacpan Beach', carHighlight: 'High-clearance 4x4 coastal drive navigating sandy tracks & shallow river crossings', romanceHighlight: 'Lounging under coconut palms on Nacpan Twin Beach with fresh chilled coconuts at sunset', weatherBackup: 'Angkla Beach Club covered architectural pavilion & coastal seafood tasting', coords: [11.3214, 119.4268] },
  { day: 17, date: 'Nov 24', hubId: 'el-nido', location: 'Big Lagoon & Secret Lagoon', generalActivity: 'Private chartered speedboat tour through Bacuit Bay: Big Lagoon, Secret Lagoon & Shimizu', carHighlight: 'High-powered twin-outboard marine speed craft carving across deep limestone channels', romanceHighlight: 'Kayaking side-by-side through emerald Big Lagoon & swimming into hidden caverns', weatherBackup: 'Sheltered Big Lagoon karst walls block open swell; flexible morning/afternoon departure', coords: [11.1528, 119.3214] },
  { day: 18, date: 'Nov 25', hubId: 'el-nido', location: 'Lio Beach Tourism Estate Sanctuary', generalActivity: 'Unstructured buffer & wellness day along the 4km Lio Beach eco-promenade', carHighlight: 'Visiting local seaside custom builders crafting retro scramblers & custom sidecars', romanceHighlight: 'Couples sea-breeze aromatherapy massage & private candlelit 4-course dinner on Lio Beach', weatherBackup: 'Full-day Hilot wellness retreat at Seda Lio / Piece Lio & Kalye Artisano', coords: [11.2028, 119.4132] },
  { day: 19, date: 'Nov 26', hubId: 'el-nido', location: 'Taraw Canopy & Las Cabañas Sunset', generalActivity: 'Morning limestone canopy walk for bay vistas & golden-hour finale at Las Cabañas sandbar', carHighlight: 'Western shoreline coastal drive testing suspension articulation on varied terrain', romanceHighlight: 'Sunset cocktails at Maremegmeg Beach Club (MBC) with ambient acoustic live music', weatherBackup: 'Maremegmeg covered sunset lounge & artisan cocktail bar', coords: [11.1458, 119.3948] },
  { day: 20, date: 'Nov 27', hubId: 'cebu-mactan', location: 'ENI ✈ Cebu: Transcentral Highway Roadtrip (Leg 1)', generalActivity: 'Morning flight ENI ✈ CEB (3 min from Lio Hotel) & pick up self-drive 4x4 Pickup / SUV at Mactan Airport', carHighlight: '🛣️ CEBU ROADTRIP LEG 1: Drive the 33km Cebu Transcentral Highway (Busay → Tops Lookout → Balamban mountain hairpins) with mountain coffee stops', romanceHighlight: 'Sirao highland flower gardens & sunset dinner above the city lights at Tops Lookout / Anzani', weatherBackup: 'Anzani Mediterranean hilltop restaurant & La Vie in the Sky wine cellar', coords: [10.3712, 123.8708] },
  { day: 21, date: 'Nov 28', hubId: 'cebu-mactan', location: 'Cebu Coastal & CCLEX Bridge Roadtrip (Leg 2)', generalActivity: 'Drive across the 8.9km CCLEX Sea Bridge, explore Old Cebu / Carcar heritage & evening at NUSTAR Waterfront', carHighlight: '🛣️ CEBU ROADTRIP LEG 2: Full-span run across CCLEX Cable-Stayed Sea Expressway + Cebu vintage rally car collection & coastal highway cruise', romanceHighlight: 'Yap-Sandiego 17th-century ancestral house walk & crispy Carcar lechon tasting', weatherBackup: 'National Museum of the Philippines - Cebu & Il Primo at NUSTAR', coords: [10.2785, 123.8965] },
  { day: 22, date: 'Nov 29', hubId: 'bohol-siquijor', location: 'Cebu ⛴ Bohol RORO / Self-Drive Roadtrip (Leg 3)', generalActivity: 'Roll vehicle onto FastCat/Lite RORO Ferry (or take 2h OceanJet Business Class + pick up fresh Bohol 4x4 at Tagbilaran Port) & drive to Panglao', carHighlight: '🛣️ CEBU → BOHOL ROADTRIP LEG 3: RORO car ferry crossing (or port 4x4 pickup) + coastal drive across Tagbilaran Causeway & Panglao Dauis/Alona cliffs', romanceHighlight: 'Check into cliffside oceanfront resort at Panglao & sunset cocktail cruise', weatherBackup: 'National Museum Bohol in Tagbilaran & Amorita Sea Tree Spa', coords: [9.5488, 123.7772] },
  { day: 23, date: 'Nov 30', hubId: 'bohol-siquijor', location: 'Bohol Interior Roadtrip: Mahogany Forest & Chocolate Hills (Leg 4)', generalActivity: 'Self-drive Bohol interior loop: Panglao → Corella Tarsiers → Loboc River → Bilar Man-Made Forest → Carmen Chocolate Hills', carHighlight: '🛣️ BOHOL ROADTRIP LEG 4: Driving through the iconic 2km Bilar Man-Made Mahogany Forest canopy tunnel + off-road ATV trails at the base of Chocolate Hills', romanceHighlight: 'Floating restaurant lunch cruise down the jade-green Loboc River with guitar serenades', weatherBackup: 'Covered Loboc River floating barge & Baclayon Heritage Museum', coords: [9.6872, 124.0815] },
  { day: 24, date: 'Dec 1', hubId: 'bohol-siquijor', location: 'Bohol ⛴ Siquijor 72km Ring Road (Leg 5)', generalActivity: 'Morning ferry from Tagbilaran to Siquijor & pick up island roadster/car for the 72km Circumferential Coastal Road', carHighlight: '🛣️ VISAYAS ROADTRIP LEG 5: Uninterrupted 72km coastal ring road drive around Siquijor Island with zero traffic & sweeping sea cliffs', romanceHighlight: 'Swimming in multi-tiered turquoise pools at Cambugahay Falls & Balete enchanted tree', weatherBackup: 'Lazi Convent (largest coral-stone convent in Asia) & Coco Grove shell spa', coords: [9.1412, 123.6265] },
  { day: 25, date: 'Dec 2', hubId: 'bohol-siquijor', location: 'Siquijor Mount Bandilaan Ridge Drive (Leg 6)', generalActivity: 'Highland switchback drive up Mount Bandilaan, Bucafe hill view, Lugnason Falls & San Juan sunset coast', carHighlight: '🛣️ VISAYAS ROADTRIP LEG 6: Climbing Siquijor’s central mountain spine road from Lazi to Mount Bandilaan & descending to San Juan coast', romanceHighlight: 'Romantic sunset dinner perched on the ocean cliffs in San Juan above the surf', weatherBackup: 'Bucafe highland glasshouse cafe & Dolce Amore Italian wood-fired trattoria', coords: [9.1468, 123.5112] },
  { day: 26, date: 'Dec 3', hubId: 'cebu-mactan', location: 'Siquijor ⛴ Cebu & CCLEX Night Drive', generalActivity: 'Return via Dumaguete/Tagbilaran to Cebu & check-in at Fili NUSTAR / Mactan 5★ resort', carHighlight: 'Illuminated night drive across the 8.9km CCLEX cable-stayed bridge over Mactan Channel', romanceHighlight: 'Afternoon at Mactan marine sanctuary, couples thalassotherapy sauna & seafood dinner', weatherBackup: 'NUSTAR luxury mall & Fili Lobby Lounge afternoon tea overlooking CCLEX', coords: [10.2785, 123.8965] },
  { day: 27, date: 'Dec 4', hubId: 'makati-bgc', location: 'Cebu ✈ Manila BGC (Cebu Pacific)', generalActivity: 'Cebu Pacific daytime flight CEB ✈ MNL T3, check-in at Makati/BGC stay & High Street evening stroll', carHighlight: 'Friday night exotic supercar & tuned JDM gathering along Bonifacio High Street & Burgos Circle', romanceHighlight: 'Artisan pastry tasting, High Street flagship boutiques & contemporary Filipino bistro', weatherBackup: 'Shangri-La The Fort Kerry Sports wellness club & Samba poolside lounge', coords: [14.5523, 121.0468] },
  { day: 28, date: 'Dec 5', hubId: 'makati-bgc', location: 'B2B Carshow XXII (Sung Kang) & Rooftop Finale', generalActivity: 'Daytime visit to Bumper 2 Bumper (B2B) Carshow XXII + curated Filipino design boutiques & celebration dinner', carHighlight: '🔥 LIVE EVENT: Bumper 2 Bumper (B2B) Carshow XXII (Dec 5–6) featuring special guest Sung Kang ("Han" from Fast & Furious: Tokyo Drift) & top PH custom builds!', romanceHighlight: 'Full wellness spa afternoon followed by a 60th-floor rooftop farewell tasting menu', weatherBackup: 'Indoor B2B Carshow exhibition hall & The Peak indoor sky-bar at Grand Hyatt Manila', coords: [14.5567, 121.0518] },
  { day: 29, date: 'Dec 6', hubId: 'makati-bgc', location: 'Sunday Cars & Coffee + MNL ✈ CPH Departure', generalActivity: 'Sunday morning BGC / Alabang Cars & Coffee or B2B Carshow Day 2, checkout & private transfer to NAIA Airport', carHighlight: 'Sunday morning supercar & classic JDM Cars & Coffee meet before cruising the elevated NAIA Expressway to Terminal 3', romanceHighlight: 'Last cup of single-origin Philippine Barako coffee & South Sea pearl keepsake', weatherBackup: 'Direct indoor drop-off at NAIA International Departure Lounge', coords: [14.5086, 121.0194] },
  { day: 30, date: 'Dec 7', hubId: 'makati-bgc', location: 'International Transit to CPH', generalActivity: 'Long-haul international flight & luxury hub lounge transit toward Copenhagen', carHighlight: 'Widebody twin-aisle aviation engineering observation & hub airport transit systems', romanceHighlight: 'First/Business class lounge shower spa, champagne toast & movie marathon', weatherBackup: 'Indoor international transit terminal lounges', coords: [14.5086, 121.0194] },
  { day: 31, date: 'Dec 8', hubId: 'makati-bgc', location: 'Copenhagen CPH Touchdown', generalActivity: 'Morning arrival at Copenhagen Airport Kastrup (CPH) & smooth return home', carHighlight: 'Precision Danish electric rail & automated metro transit into Copenhagen', romanceHighlight: 'Stepping back into warm Scandinavian hygge & unpacking island treasures', weatherBackup: 'Covered CPH Terminal 3 direct rail platform', coords: [14.5086, 121.0194] },
  { day: 32, date: 'Dec 9', hubId: 'makati-bgc', location: 'Copenhagen Homecoming', generalActivity: 'Post-trip reflection, organizing photography & updating packing-list.md', carHighlight: 'Reviewing onboard footage from Clark Speedway, Liberty Walk Manila & Cebu–Bohol Roadtrip', romanceHighlight: 'Curating a keepsake photo book of 32 days of lagoons, paraw sails & sunsets', weatherBackup: 'Cozy home reflection & vault archive update', coords: [14.5086, 121.0194] }
];
