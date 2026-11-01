export interface HotelOption {
  rank: number;
  name: string;
  stars: string;
  tier: '5-Star Flagship' | '5-Star Boutique' | '4-Star Premier';
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
    name: 'Manila: Makati & BGC',
    region: 'Metro Manila · Luzon',
    tagline: 'Ayala Triangle Gardens, Supercar Showrooms & Blackbird Aviation Heritage',
    dates: 'Nov 8–12 & Dec 4–6 (8 Nights)',
    nights: 8,
    center: [14.5547, 121.0244],
    zoom: 14,
    weatherAvg: '29°C Day / 24°C Night · Dry Shoulder Begin',
    primaryLandmarks: [
      { name: 'Ayala Triangle Gardens & Blackbird Nielson Tower', lat: 14.5567, lng: 121.0245, category: 'Landmark & Dining', openHours: 'Daily 06:00–22:00 (Blackbird 11:00–23:00)' },
      { name: 'Ayala Museum & Diorama Gold Exhibition', lat: 14.5535, lng: 121.0232, category: 'Culture & Gold', openHours: 'Tue–Sun 10:00–18:00 (Closed Mondays)' },
      { name: 'Bonifacio High Street & BGC Exotic Auto Boutiques', lat: 14.5505, lng: 121.0505, category: 'Automotive & Lifestyle', openHours: 'Daily 10:00–22:00' }
    ],
    motorsportHighlight: 'BGC supercar spotting, air-cooled Porsche collector workshop & JDM performance garage tour',
    romanceHighlight: 'Candlelit dinner inside historic Nielson Tower control room at Blackbird & Ayala Triangle stroll',
    weatherBackup: 'Ayala Museum Gold of Ancestors gallery + Greenbelt 5 covered luxury skywalk & spa afternoon',
    cebuPacGateway: 'Manila NAIA Terminal 3 (MNL) — 15 min via NAIAX Skyway',
    cebuPacFlightNos: '5J 551 / 5J 562 / DG 6041 (All Domestic Hubs)',
    cebuPacBookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    dining: [
      { name: 'Yardstick Coffee / Curator', category: 'Morning Coffee', neighborhood: 'Legazpi Village (3 min from Ayala Triangle)', specialty: 'Philippine single-origin pour-over & sea-salt kouign-amann', bookingTip: 'Walk-in around 09:30 AM after breakfast' },
      { name: 'Blackbird at the Nielson Tower', category: 'Destination Dinner', neighborhood: 'Ayala Triangle Gardens', specialty: 'Art Deco 1937 Manila airport control tower grill & aviation heritage', bookingTip: 'Book the upstairs Flight Control Room table 3 weeks ahead' },
      { name: 'Toyo Eatery / Metiz', category: 'Destination Dinner', neighborhood: 'Karrivin Plaza, Chino Roces', specialty: 'Asia’s 50 Best modern Filipino tasting menu inside art compound', bookingTip: 'Reserve online 30 days ahead; pair with Silverlens gallery visit' }
    ],
    hotels: [
      {
        rank: 1,
        name: 'The Peninsula Manila',
        stars: '5★ Heritage Luxury',
        tier: '5-Star Flagship',
        landmark: 'Ayala Triangle Gardens & Blackbird Nielson Tower',
        distance: '120m walk (directly across Ayala Ave)',
        rateDkk: 1450,
        url: 'https://www.peninsula.com/en/manila',
        lat: 14.5548,
        lng: 121.0266,
        highlight: 'Iconic sunbeam lobby string orchestra, tropical garden pool & steps from Blackbird.'
      },
      {
        rank: 2,
        name: 'Raffles Makati',
        stars: '5★ All-Suite Flagship',
        tier: '5-Star Flagship',
        landmark: 'Ayala Museum & Greenbelt Luxury Pavilions',
        distance: '180m covered garden walk',
        rateDkk: 1750,
        url: 'https://www.raffles.com/makati/',
        lat: 14.5504,
        lng: 121.0246,
        highlight: 'Quiet all-suite sanctuary with Writers Bar & Long Bar right beside Ayala Museum.'
      },
      {
        rank: 3,
        name: 'Shangri-La The Fort, Manila',
        stars: '5★ Contemporary Resort',
        tier: '5-Star Flagship',
        landmark: 'Bonifacio High Street & BGC Supercar Showrooms',
        distance: '50m step-out onto High Street',
        rateDkk: 1675,
        url: 'https://www.shangri-la.com/en/manila/shangrilathefort/',
        lat: 14.5523,
        lng: 121.0468,
        highlight: 'Prime BGC corner for Wednesday evening exotic car meets and Raging Bull Chophouse.'
      },
      {
        rank: 4,
        name: 'Grand Hyatt Manila',
        stars: '5★ Skyscraper Luxury',
        tier: '5-Star Flagship',
        landmark: 'BGC Uptown & Mitsukoshi Mall',
        distance: '250m walk to High Street North',
        rateDkk: 1340,
        url: 'https://www.hyatt.com/grand-hyatt/en-US/mnlgh-grand-hyatt-manila',
        lat: 14.5567,
        lng: 121.0518,
        highlight: 'The Peak rooftop grill & whisky bar on the 60th–62nd floors overlooking Metro Manila.'
      },
      {
        rank: 5,
        name: 'Ascott Bonifacio Global City Manila',
        stars: '5★ Serviced Suites',
        tier: '5-Star Boutique',
        landmark: 'Mind Museum & Bonifacio High Street West',
        distance: '100m walk',
        rateDkk: 1005,
        url: 'https://www.discoverasr.com/en/ascott-the-residence/philippines/ascott-bonifacio-global-city-manila',
        lat: 14.5515,
        lng: 121.0445,
        highlight: 'Spacious residential king suites with washer/dryer ideal for multi-night unpacking.'
      },
      {
        rank: 6,
        name: 'Discovery Primea Makati',
        stars: '5★ Executive Boutique',
        tier: '5-Star Boutique',
        landmark: 'Ayala Triangle & Glorietta / Greenbelt',
        distance: '220m walk along Ayala Ave',
        rateDkk: 1120,
        url: 'https://www.discoveryprimea.com/',
        lat: 14.5516,
        lng: 121.0282,
        highlight: 'Quiet Urdaneta Village infinity pool & 1824 gin/whisky lounge.'
      },
      {
        rank: 7,
        name: 'Seda Residences Makati',
        stars: '4★+ Design Upscale',
        tier: '4-Star Premier',
        landmark: 'Ayala Avenue North & Salcedo Village',
        distance: '350m walk to Ayala Triangle',
        rateDkk: 750,
        url: 'https://makatiresidences.sedahotels.com/',
        lat: 14.5594,
        lng: 121.0182,
        highlight: '35th-floor Straight Up roof deck bar with panoramic sunset views.'
      }
    ]
  },
  {
    id: 'manila-bay',
    number: '02',
    name: 'Manila Bay & Intramuros',
    region: 'Historic Walled City · Luzon',
    tagline: 'Spanish Walled Heritage, San Agustin Kalesa Ride & Sunset Bay Esplanade',
    dates: 'Nov 13–14 (2 Nights)',
    nights: 2,
    center: [14.5794, 120.9772],
    zoom: 13,
    weatherAvg: '30°C Day / 25°C Golden Bay Breeze',
    primaryLandmarks: [
      { name: 'San Agustin Church & Intramuros Cobblestones', lat: 14.5889, lng: 120.9752, category: 'UNESCO Heritage', openHours: 'Daily 08:00–18:00' },
      { name: 'Fort Santiago & Vintage Presidential Car Exhibit', lat: 14.5942, lng: 120.9704, category: 'Historic & Auto', openHours: 'Daily 08:00–21:00' },
      { name: 'Manila Bay Sunset Esplanade & Roxas Blvd', lat: 14.5565, lng: 120.9818, category: 'Coastal Cruise', openHours: 'Open 24h (Golden Hour 17:15–18:00)' }
    ],
    motorsportHighlight: 'Roxas Boulevard coastal cruise, Jeepney art & American-era vintage transport collection',
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
        name: 'Okada Manila',
        stars: '5★ Ultra-Luxury Integrated Resort',
        tier: '5-Star Flagship',
        landmark: 'Entertainment City Bayfront & NAIAX Ramp',
        distance: '5 min drive from Shore Residences',
        rateDkk: 1620,
        url: 'https://www.okadamanila.com/',
        lat: 14.5152,
        lng: 120.9806,
        highlight: 'Private jet-setter suites with pink sand beach dome and fountain lagoon.'
      },
      {
        rank: 5,
        name: 'Lanson Place Mall of Asia Manila',
        stars: '5★ Waterfront Suites',
        tier: '5-Star Boutique',
        landmark: 'Manila Bay Shore Residences & Esplanade',
        distance: '200m walk along Bay Blvd',
        rateDkk: 990,
        url: 'https://lansonplace.com/mallofasia/',
        lat: 14.5332,
        lng: 120.9799,
        highlight: 'Brand-new quiet bayfront sanctuary with rooftop infinity edge pool.'
      },
      {
        rank: 6,
        name: 'The Bayleaf Intramuros',
        stars: '4★ Historic Walled Boutique',
        tier: '4-Star Premier',
        landmark: 'San Agustin Church & Baluarte de San Diego',
        distance: 'Inside Intramuros Walls (250m walk)',
        rateDkk: 580,
        url: 'https://www.thebayleaf.com.ph/intramuros/',
        lat: 14.5881,
        lng: 120.9788,
        highlight: '9 Spoons & Sky Deck rooftop overlooking the 16th-century Intramuros ramparts.'
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
        landmark: 'Clark International Speedway Paddock',
        distance: '7 min scenic drive along hillside ridge',
        rateDkk: 1005,
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
        name: 'Widus Hotel Clark',
        stars: '4★+ Executive Resort',
        tier: '4-Star Premier',
        landmark: 'Manuel A. Roxas Highway & CRK Airport Gate',
        distance: '8 min drive to CRK Terminal',
        rateDkk: 780,
        url: 'https://www.widus.com/',
        lat: 15.1851,
        lng: 120.5295,
        highlight: 'Immediate access to Clark’s specialty coffee roasters and airport boulevard.'
      },
      {
        rank: 6,
        name: 'Park Inn by Radisson Clark',
        stars: '4★ Modern Boutique',
        tier: '4-Star Premier',
        landmark: 'SM City Clark & NLEX Clark Spur Exit',
        distance: '10 min to CRK Airport',
        rateDkk: 750,
        url: 'https://www.radissonhotels.com/en-us/hotels/park-inn-clark',
        lat: 15.1684,
        lng: 120.5802,
        highlight: 'Smart contemporary rooms ideal for an effortless overnight before morning flight.'
      }
    ]
  },
  {
    id: 'coron',
    number: '04',
    name: 'Coron & Northern Palawan',
    region: 'Calamian Archipelago · Palawan',
    tagline: 'Paolyn Eco-Luxury Houseboats, Kayangan Lake & Tao Paraw Sailing Launch',
    dates: 'Nov 16–20 (5 Nights incl. Tao Sail)',
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
        name: 'Paolyn Houseboats Coron Island',
        stars: '5★ Eco-Luxury Floating Villa',
        tier: '5-Star Boutique',
        landmark: 'Twin Lagoon & Kayangan Lake (Coron Island)',
        distance: '0m — Anchored directly inside private turquoise lagoon',
        rateDkk: 1650,
        url: 'https://www.paolynhouseboats.com/',
        lat: 11.9612,
        lng: 120.2115,
        highlight: 'Zero crowds: kayak straight from your bedroom deck into Twin Lagoon at sunrise.'
      },
      {
        rank: 2,
        name: 'Two Seasons Coron Island Resort',
        stars: '5★ Private Peninsula Luxury',
        tier: '5-Star Flagship',
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
        landmark: 'Dimakya Island Turtle Sanctuary & USU Airport',
        distance: '30 min car + boat from Busuanga USU Airport',
        rateDkk: 1675,
        url: 'https://www.clubparadisepalawan.com/',
        lat: 12.2356,
        lng: 120.0918,
        highlight: 'UNESCO Biosphere private island with resident sea turtles and sunset sandbar.'
      },
      {
        rank: 4,
        name: 'Sunlight Eco Tourism Island Resort (SETIR)',
        stars: '5★ Overwater Villa Resort',
        tier: '5-Star Flagship',
        landmark: 'Culion Channel & Nagtajan Island',
        distance: '20 min speedboat from Coron Port',
        rateDkk: 1890,
        url: 'https://sunlighthotelsandresorts.com/setir/',
        lat: 11.8825,
        lng: 120.0680,
        highlight: 'Maldives-style overwater villas with glass floor panels overlooking coral gardens.'
      },
      {
        rank: 5,
        name: 'The Funny Lion - Coron',
        stars: '4★+ Safari Boutique Pride',
        tier: '4-Star Premier',
        landmark: 'Coron Town Pier & Mt. Tapyas Viewpoint',
        distance: '5 min tricycle/van to Tao Expedition Pier',
        rateDkk: 1150,
        url: 'https://www.thefunnylion.com/coron-palawan/',
        lat: 12.0038,
        lng: 120.1912,
        highlight: 'Pride Rock rooftop plunge tubs watching sunset over mangrove bay.'
      },
      {
        rank: 6,
        name: 'Bacau Bay Resort Coron',
        stars: '4★+ Mangrove Marina Resort',
        tier: '4-Star Premier',
        landmark: 'Coron Harbour & Maquinit Hot Springs Road',
        distance: '1.5 km from Coron Town Boat Dock',
        rateDkk: 800,
        url: 'https://www.bacaubayresortcoron.com/',
        lat: 12.0019,
        lng: 120.1945,
        highlight: 'Private jetty for island-hopping departures and tranquil pool lounge.'
      }
    ]
  },
  {
    id: 'el-nido',
    number: '05',
    name: 'El Nido & Bacuit Bay',
    region: 'Northern Palawan · Karst Archipelago',
    tagline: 'Big Lagoon Kayaking, Nacpan Coastal 4x4 & Pangulasian Island Luxury',
    dates: 'Nov 21–26 (6 Nights)',
    nights: 6,
    center: [11.1850, 119.3950],
    zoom: 12,
    weatherAvg: '30°C Sunny Karst Seas · Emerald Lagoon Visibility',
    primaryLandmarks: [
      { name: 'Big Lagoon & Secret Lagoon (Miniloc Island)', lat: 11.1528, lng: 119.3214, category: 'Marine Sanctuary', openHours: 'Timed Eco-Permits 08:00–16:00' },
      { name: 'Nacpan & Calitang Twin Beach', lat: 11.3214, lng: 119.4268, category: '4x4 Coastal Trail', openHours: 'Daily 07:00–20:00 (Sunset 17:35)' },
      { name: 'Las Cabañas Sunset Beach & Lio Estate', lat: 11.1475, lng: 119.3942, category: 'Sunset & Airport', openHours: 'Daily 08:00–22:00' }
    ],
    motorsportHighlight: 'Enduro coastal switchbacks, high-clearance 4x4 river crossings to Nacpan & twin-outboard speed craft',
    romanceHighlight: 'Emerald Big Lagoon kayaking, private beach candlelit dinner & Cadlao sunset brunch',
    weatherBackup: 'Pangulasian / Seda Lio traditional Hilot massage villa + Kalye Artisano gallery walk in Lio Estate',
    cebuPacGateway: 'El Nido Lio Airport (ENI) via AirSWIFT (now part of Cebu Pacific Group)',
    cebuPacFlightNos: 'T6 511 / T6 535 (ENI ✈ CEB) · T6 110 / T6 142 (MNL ✈ ENI) · 5J 637 (MNL ✈ PPS)',
    cebuPacBookingUrl: 'https://www.cebupacificair.com/en-PH/pages/plan/book-flights',
    dining: [
      { name: 'Gusto Gelato & Specialty Coffee / Hama Coffee', category: 'Morning Coffee', neighborhood: 'Calle Hama, El Nido Town Beach', specialty: 'Sea-front flat white & warm croissant looking straight at Cadlao Island cliffs', bookingTip: 'Walk along the sand around 09:30 AM' },
      { name: 'Cadlao Resort Terrace / Angkla Beach Club Nacpan', category: 'Casual Lunch', neighborhood: 'Caalan Beach & Nacpan Twin Beach', specialty: 'Grilled Palawan prawns, kinilaw ceviche & chilled Sauvignon Blanc by the surf', bookingTip: 'Reserve a front daybed at Angkla on your Nacpan 4x4 day' },
      { name: 'Piece Lio / Pangulasian Private Beach Dining', category: 'Destination Dinner', neighborhood: 'Lio Beach Estate & Pangulasian Cove', specialty: 'Torch-lit private 4-course tasting dinner directly on the powder-white sand', bookingTip: 'Arrange with resort concierge 48h prior' }
    ],
    hotels: [
      {
        rank: 1,
        name: 'Pangulasian Island Resort (El Nido Resorts)',
        stars: '5★ Eco-Luxury Flagship',
        tier: '5-Star Flagship',
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
        name: 'Seda Lio Beach Resort',
        stars: '5★ Sustainable Beachfront',
        tier: '5-Star Flagship',
        landmark: 'Lio Beach & El Nido Lio Airport (ENI)',
        distance: '3 min electric shuttle from ENI Airport',
        rateDkk: 1675,
        url: 'https://lio.sedahotels.com/',
        lat: 11.2035,
        lng: 119.4135,
        highlight: '4km golden beachfront with artisanal cafes and immediate road access to Nacpan.'
      },
      {
        rank: 4,
        name: 'LIHIM Resorts El Nido',
        stars: '5★ Clifftop Forest Villas',
        tier: '5-Star Boutique',
        landmark: 'Caalan Bay & Cadlao Channel',
        distance: '5 min private boat/buggy from El Nido Town',
        rateDkk: 2650,
        url: 'https://lihim.com/',
        lat: 11.1915,
        lng: 119.3895,
        highlight: 'Hidden luxury villas with private butler service and overwater lounge.'
      },
      {
        rank: 5,
        name: 'Cadlao Resort & Restaurant',
        stars: '4★+ Iconic Boutique',
        tier: '4-Star Premier',
        landmark: 'Caalan Beach facing Cadlao Island Monolith',
        distance: '800m beachfront stroll to El Nido Town',
        rateDkk: 1180,
        url: 'https://cadlaoresort.com/',
        lat: 11.1885,
        lng: 119.3878,
        highlight: 'Famous beachfront brunch terrace and twin infinity pools facing Cadlao Island.'
      },
      {
        rank: 6,
        name: 'H Hotel El Nido - Vegan Friendly Luxury',
        stars: '4★+ Town Beachfront',
        tier: '4-Star Premier',
        landmark: 'El Nido Beach & Tao Expedition Arrival Pier',
        distance: '50m from Boat Tour Departure Beach',
        rateDkk: 750,
        url: 'https://www.hhotel-elnido.com/',
        lat: 11.1802,
        lng: 119.3872,
        highlight: 'Piece-of-art rooftop bar with direct views over Bacuit Bay boat launches.'
      }
    ]
  },
  {
    id: 'cebu-mactan',
    number: '06',
    name: 'Cebu & Mactan Island',
    region: 'Central Visayas · Mountain Passes & Heritage',
    tagline: 'Cebu Transcentral Highway Twisties, CCLEX Bridge & NUSTAR Waterfront',
    dates: 'Nov 27–28 & Dec 3 (3 Nights)',
    nights: 3,
    center: [10.3157, 123.9150],
    zoom: 12,
    weatherAvg: '28°C Coast / 22°C Busay Highlands (Transcentral Hwy)',
    primaryLandmarks: [
      { name: 'Cebu Transcentral Highway (Balamban Twisties) & Tops Lookout', lat: 10.3712, lng: 123.8708, category: 'Mountain Driving Pass', openHours: 'Open 24h (Tops Lookout 08:00–23:00)' },
      { name: 'Basilica del Santo Niño & Magellan’s Cross', lat: 10.2942, lng: 123.9021, category: '1521 Heritage', openHours: 'Daily 06:00–19:00' },
      { name: 'CCLEX Bridge (Cebu-Cordova Link Expressway)', lat: 10.2785, lng: 123.8965, category: 'Engineering Icon', openHours: 'Open 24h (8.9km Cable-Stayed Sea Crossing)' }
    ],
    motorsportHighlight: 'Driving the legendary Cebu Transcentral Highway hairpins, CCLEX cable-stayed bridge & vintage European rally car collection',
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
        landmark: 'CCLEX Bridge Landing & Santo Niño Heritage Quarter',
        distance: '500m from CCLEX Ramp / 8 min to Magellan’s Cross',
        rateDkk: 890,
        url: 'https://nustar.ph/hotels/fili/',
        lat: 10.2642,
        lng: 123.8805,
        highlight: 'Brand-new waterfront icon directly overlooking the CCLEX Bridge and Mactan Channel.'
      },
      {
        rank: 2,
        name: 'Shangri-La Mactan, Cebu',
        stars: '5★ Premier Beach & Marine Resort',
        tier: '5-Star Flagship',
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
        landmark: 'Cebu Transcentral Highway & Tops Lookout',
        distance: '0 km — Right at the Nivel Hills start of Transcentral Hwy',
        rateDkk: 720,
        url: 'https://www.marcopolohotels.com/en/marco-polo-plaza-cebu/',
        lat: 10.3418,
        lng: 123.8962,
        highlight: 'Perched 600ft in Nivel Hills—pull out of the driveway straight onto the mountain pass.'
      },
      {
        rank: 4,
        name: 'Crimson Resort and Spa Mactan',
        stars: '5★ Boutique Villa Resort',
        tier: '5-Star Flagship',
        landmark: 'Hilutungan Channel & Mactan Coast',
        distance: '15 min to Mactan-Cebu Intl Airport (CEB)',
        rateDkk: 1350,
        url: 'https://crimsonhotel.com/mactan',
        lat: 10.2854,
        lng: 124.0085,
        highlight: 'Three-tiered infinity pool and Azure Beach Club with sunset saxophone sessions.'
      },
      {
        rank: 5,
        name: 'Dusit Thani Mactan Cebu Resort',
        stars: '5★ Thai-Filipino Coastal Luxury',
        tier: '5-Star Flagship',
        landmark: 'Punta Engaño North Peninsula (Sunset Facing)',
        distance: '20 min to MCIA Airport Terminal',
        rateDkk: 790,
        url: 'https://www.dusit.com/dusitthani-mactancebu/',
        lat: 10.3245,
        lng: 124.0352,
        highlight: '100-meter infinity pool facing northwest for dramatic Magellan Bay sunsets.'
      },
      {
        rank: 6,
        name: 'Radisson Blu Cebu',
        stars: '5★ Harbor & Heritage Hub',
        tier: '5-Star Boutique',
        landmark: 'Cebu Pier 1 (Bohol Ferry) & Basilica del Santo Niño',
        distance: '5 min drive to OceanJet Bohol Ferry Pier 1',
        rateDkk: 680,
        url: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-cebu',
        lat: 10.3102,
        lng: 123.9185,
        highlight: 'Unbeatable logistics for morning fast-ferry transfer to Bohol and Old Cebu sights.'
      }
    ]
  },
  {
    id: 'bohol-siquijor',
    number: '07',
    name: 'Bohol & Siquijor Islands',
    region: 'Central Visayas · Karst Hills & Mystic Coast',
    tagline: 'Chocolate Hills ATV, Loboc River Cruise & Siquijor 72km Coastal Ring Road',
    dates: 'Nov 29–Dec 2 (4 Nights)',
    nights: 4,
    center: [9.4200, 123.6800],
    zoom: 10,
    weatherAvg: '29°C Coastal Breeze · Emerald Waterfalls',
    primaryLandmarks: [
      { name: 'Chocolate Hills ATV Trail & Tarsier Sanctuary (Bohol)', lat: 9.8297, lng: 124.1397, category: 'Geological Wonder', openHours: 'Daily 08:00–17:00 (Tarsier Sanctuary Closed Public Holidays)' },
      { name: 'Alona Cliffside & Panglao Coastal Highway', lat: 9.5485, lng: 123.7745, category: 'Beachfront Base', openHours: 'Open 24h' },
      { name: 'Cambugahay Falls & Siquijor 72km Coastal Ring Road', lat: 9.1412, lng: 123.6265, category: 'Waterfall & Ring Road', openHours: 'Cambugahay Daily 07:00–17:00' }
    ],
    motorsportHighlight: 'Chocolate Hills off-road ATV trails & uninterrupted 72km coastal ring road around Siquijor',
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
        landmark: 'Doljo Sunset Beach & Tagbilaran Causeway',
        distance: '18 min to Tagbilaran Fast Ferry Port',
        rateDkk: 1150,
        url: 'https://www.thebellevuebohol.com/',
        lat: 9.5912,
        lng: 123.7245,
        highlight: 'Quiet Sunset side of Panglao away from crowds with private white-sand cove.'
      },
      {
        rank: 4,
        name: 'Henann Resort Alona Beach, Bohol',
        stars: '5★ Grand Beachfront Resort',
        tier: '5-Star Flagship',
        landmark: 'Center of Alona Beach & Balicasag Boat Launch',
        distance: '0m — Direct step-out onto Alona White Beach',
        rateDkk: 1090,
        url: 'https://www.henann.com/bohol/henannalonabeach/',
        lat: 9.5482,
        lng: 123.7735,
        highlight: '6.5-hectare beachfront estate with crystal pools and Sea Breeze beach club.'
      },
      {
        rank: 5,
        name: 'Coco Grove Beach Resort, Siquijor',
        stars: '4★+ Premier Island Sanctuary',
        tier: '4-Star Premier',
        landmark: 'Tubod Marine Sanctuary & San Juan Sunset Coast',
        distance: '15 min ride on Coastal Ring Road to Cambugahay Falls',
        rateDkk: 890,
        url: 'https://www.cocogrovebeachresort.com/',
        lat: 9.1468,
        lng: 123.5112,
        highlight: 'Siquijor’s flagship luxury resort on an 800m beach bordering a protected coral reef.'
      },
      {
        rank: 6,
        name: 'White Villas Resort, Siquijor',
        stars: '4★ Mediterranean Boutique',
        tier: '4-Star Premier',
        landmark: 'Solangon Beach, San Juan Ring Road',
        distance: '12 min to Siquijor Port & Lugnason Falls',
        rateDkk: 690,
        url: 'https://www.whitevillasresort.com/',
        lat: 9.1645,
        lng: 123.4958,
        highlight: 'Chic whitewashed beachfront villas facing west for Siquijor’s famous crimson sunsets.'
      }
    ]
  }
];

export const DAILY_ITINERARY: DaySchedule[] = [
  { day: 1, date: 'Nov 8', hubId: 'makati-bgc', location: 'Makati Ayala Triangle', generalActivity: 'Arrival in Manila NAIA T3, private transfer to luxury Makati hotel & evening relaxation', carHighlight: 'Spotting luxury supercars & modified overland SUVs cruising Ayala Avenue', romanceHighlight: 'Illuminated Ayala Triangle Gardens evening stroll & rooftop welcome cocktails', weatherBackup: 'Indoor lobby lounge string quartet & spa at The Peninsula Manila', coords: [14.5567, 121.0245] },
  { day: 2, date: 'Nov 9', hubId: 'makati-bgc', location: 'Makati & BGC', generalActivity: 'Exploring Makati CBD, Greenbelt pavilions & BGC High Street', carHighlight: 'Visiting premier exotic automotive showrooms & bespoke styling boutiques in BGC', romanceHighlight: 'Gourmet lunch at Greenbelt garden cafe, boutique shopping & couples reflexology spa', weatherBackup: 'Covered Greenbelt 3–5 elevated walkway & Mitsukoshi indoor Japanese food hall', coords: [14.5505, 121.0505] },
  { day: 3, date: 'Nov 10', hubId: 'makati-bgc', location: 'Ayala Museum & Legazpi', generalActivity: 'Cultural discovery at Ayala Museum & culinary walking tour through Legazpi Village', carHighlight: 'Custom retro Toyota Land Cruisers & bespoke off-road builds at Sunday enthusiast cafes', romanceHighlight: 'Gold artifacts & indigenous textile exhibitions at Ayala Museum + specialty coffee', weatherBackup: 'Full afternoon inside Ayala Museum 4 floors + Filipinas Heritage Library', coords: [14.5535, 121.0232] },
  { day: 4, date: 'Nov 11', hubId: 'makati-bgc', location: 'Metro Manila Galleries', generalActivity: 'Art galleries at Silverlens, artisan markets & historic Makati landmarks', carHighlight: 'Private collector meet & tour of an air-cooled Porsche restoration workshop', romanceHighlight: 'Private gallery viewing at Silverlens & afternoon high tea at The Peninsula Manila lobby', weatherBackup: 'Karrivin Plaza indoor contemporary art compounds & Yardstick coffee tasting', coords: [14.5548, 121.0266] },
  { day: 5, date: 'Nov 12', hubId: 'makati-bgc', location: 'Salcedo & Nielson Tower', generalActivity: 'Leisurely Salcedo Park stroll, designer boutiques & iconic aviation-history dinner', carHighlight: 'Touring an elite aftermarket performance tuning garage for Japanese JDM icons', romanceHighlight: 'Candlelit dinner at Blackbird at the Nielson Tower (historic 1937 airport control tower)', weatherBackup: 'Indoor aviation heritage dining room inside Blackbird Nielson Tower', coords: [14.5572, 121.0258] },
  { day: 6, date: 'Nov 13', hubId: 'manila-bay', location: 'Manila Bay Waterfront', generalActivity: 'Checkout & scenic coastal transfer to Manila Bay waterfront hotel', carHighlight: 'Roxas Boulevard coastal cruise admiring vintage car clubs & traditional Jeepney art', romanceHighlight: 'Bayfront suite check-in with private balcony & golden-hour infinity pool dip', weatherBackup: 'Conrad Spa thermal lounge & C Lounge covered floor-to-ceiling bay panorama', coords: [14.5565, 120.9818] },
  { day: 7, date: 'Nov 14', hubId: 'manila-bay', location: 'Intramuros Walled City', generalActivity: 'Full-day heritage exploration in 16th-century Intramuros & Manila Bay sunset', carHighlight: 'Inspecting historic American-era transport exhibits & vintage presidential cars', romanceHighlight: 'Horse-drawn kalesa carriage ride around San Agustin Church & sunset bay esplanade drinks', weatherBackup: 'San Agustin Museum cloisters + National Museum of Fine Arts indoor galleries', coords: [14.5889, 120.9752] },
  { day: 8, date: 'Nov 15', hubId: 'clark', location: 'Clark International Speedway', generalActivity: 'Morning expressway drive up NLEX to Clark Freeport Zone in Pampanga', carHighlight: 'Clark International Speedway track paddock access, parade laps & high-speed circuit runs', romanceHighlight: 'Heirloom Kapampangan gourmet lunch & rejuvenating afternoon thermal spa', weatherBackup: 'Clark Museum & 25 Seeds indoor ancestral dining room in Angeles City', coords: [15.2064, 120.5178] },
  { day: 9, date: 'Nov 16', hubId: 'coron', location: 'Clark ✈ Coron Lagoon', generalActivity: 'Cebu Pacific morning flight CRK ✈ USU Busuanga & private boat to Coron Island', carHighlight: 'Custom island utility transport rigs engineered for Palawan hill roads', romanceHighlight: 'Check into Paolyn Eco-Luxury Houseboat anchored inside a private turquoise lagoon', weatherBackup: 'Sheltered zero-wave private lagoon anchorage & indoor bamboo lounge deck', coords: [11.9612, 120.2115] },
  { day: 10, date: 'Nov 17', hubId: 'coron', location: 'Kayangan & Twin Lagoon', generalActivity: 'Private wooden banca cruise to Kayangan Lake, Twin Lagoon & Siete Pecados reef', carHighlight: 'Twin-cylinder marine diesel inboard engines custom-crafted by Palawan boatwrights', romanceHighlight: 'Early-morning swim in crystal lagoons before dayboats arrive & candlelit deck dinner', weatherBackup: 'Maquinit Natural Saltwater Hot Springs & sheltered Twin Lagoon inner cove', coords: [11.9542, 120.2248] },
  { day: 11, date: 'Nov 18', hubId: 'coron', location: 'Coron ⛵ Tao Expedition', generalActivity: 'Board the Tao Philippines traditional paraw sailboat expedition across northern Palawan', carHighlight: 'Examining traditional bamboo outrigger mechanics, wooden rudder & wind navigation', romanceHighlight: 'Sailing across untouched turquoise seas to an uninhabited sandbar for sunset drinks', weatherBackup: 'Protected leeward island channels along Culion & Busuanga coast', coords: [11.8200, 120.0500] },
  { day: 12, date: 'Nov 19', hubId: 'coron', location: 'Culion & Linapacan Atolls', generalActivity: 'Island hopping through remote Culion & Linapacan archipelagos with reef snorkeling', carHighlight: 'Off-grid basecamp engineering study: solar micro-grids & marine desalination systems', romanceHighlight: 'Handmade bamboo beach cabanas, open-air beachfront massage & fresh grilled mahi-mahi', weatherBackup: 'Culion Historical Museum & sheltered bay coral garden snorkeling', coords: [11.6100, 119.8600] },
  { day: 13, date: 'Nov 20', hubId: 'coron', location: 'Linapacan Marine Channels', generalActivity: 'Deep sailing exploration through deserted island channels & pristine coral gardens', carHighlight: 'Studying traditional outrigger hull hydro-mechanics built for open-ocean swells', romanceHighlight: 'Stargazing under zero-light-pollution skies around a driftwood campfire', weatherBackup: 'Tao main farm basecamp cooking workshop & bamboo longhouse social lounge', coords: [11.4500, 119.6500] },
  { day: 14, date: 'Nov 21', hubId: 'el-nido', location: 'Tao Arrival in El Nido', generalActivity: 'Final morning sail arriving in El Nido & check-in at luxury Bacuit Bay resort', carHighlight: 'Inspecting custom-converted island 4x4 safari transports & trail buggies', romanceHighlight: 'Check into cliffside/island luxury resort, flower-petal bath soak & sunset cocktails', weatherBackup: 'Resort spa suite recovery ritual & covered beachfront veranda dining', coords: [11.1956, 119.4181] },
  { day: 15, date: 'Nov 22', hubId: 'el-nido', location: 'El Nido & Cadlao Bay', generalActivity: 'Exploring El Nido artisan boutiques, specialty coffee cafés & Cadlao coast', carHighlight: 'Renting an enduro motorcycle to ride winding coastal switchbacks & jungle trails', romanceHighlight: 'Romantic beachfront brunch at Cadlao Resort & infinity pool overlooking limestone cliffs', weatherBackup: 'Kalye Artisano Filipino craft galleries & boutique coffee tasting in Lio', coords: [11.1885, 119.3878] },
  { day: 16, date: 'Nov 23', hubId: 'el-nido', location: 'Nacpan & Calitang Twin Beach', generalActivity: 'Northern coastal road expedition to the 4km golden crescent of Nacpan Beach', carHighlight: 'High-clearance 4x4 coastal drive navigating sandy tracks & shallow river crossings', romanceHighlight: 'Lounging under coconut palms on Nacpan Twin Beach with fresh chilled coconuts at sunset', weatherBackup: 'Angkla Beach Club covered architectural pavilion & coastal seafood tasting', coords: [11.3214, 119.4268] },
  { day: 17, date: 'Nov 24', hubId: 'el-nido', location: 'Big Lagoon & Secret Lagoon', generalActivity: 'Private chartered speedboat tour through Bacuit Bay: Big Lagoon, Secret Lagoon & Shimizu', carHighlight: 'High-powered twin-outboard marine speed craft carving across deep limestone channels', romanceHighlight: 'Kayaking side-by-side through emerald Big Lagoon & swimming into hidden caverns', weatherBackup: 'Sheltered Big Lagoon karst walls block open swell; flexible morning/afternoon departure', coords: [11.1528, 119.3214] },
  { day: 18, date: 'Nov 25', hubId: 'el-nido', location: 'Pangulasian / Lio Sanctuary', generalActivity: 'Unstructured buffer & wellness day at luxury resort with seaside dining', carHighlight: 'Visiting local seaside custom builders crafting retro scramblers & custom sidecars', romanceHighlight: 'Couples sea-breeze aromatherapy massage & private candlelit 4-course dinner on the sand', weatherBackup: 'Full-day Hilot wellness retreat & private villa balcony reading day', coords: [11.1156, 119.3302] },
  { day: 19, date: 'Nov 26', hubId: 'el-nido', location: 'Taraw Canopy & Las Cabañas', generalActivity: 'Morning limestone canopy walk for bay vistas & afternoon at Las Cabañas cove', carHighlight: 'Western shoreline coastal drive testing suspension articulation on varied terrain', romanceHighlight: 'Sunset cocktails at Las Cabañas beach lounge with ambient acoustic live music', weatherBackup: 'Maremegmeg covered sunset lounge & artisan cocktail bar', coords: [11.1475, 119.3942] },
  { day: 20, date: 'Nov 27', hubId: 'cebu-mactan', location: 'El Nido ✈ Cebu Transcentral Hwy', generalActivity: 'Morning flight ENI ✈ CEB (AirSWIFT / Cebu Pacific Group) & rental car pickup', carHighlight: 'Thrilling mountain drive up the legendary Cebu Transcentral Highway (Balamban twisties)', romanceHighlight: 'Sirao highland flower gardens & dinner above the city lights at Tops Lookout', weatherBackup: 'Anzani Mediterranean hilltop restaurant & La Vie in the Sky wine cellar', coords: [10.3712, 123.8708] },
  { day: 21, date: 'Nov 28', hubId: 'cebu-mactan', location: 'Historic Old Cebu', generalActivity: 'Magellan’s Cross, Basilica del Santo Niño & Fort San Pedro heritage cluster', carHighlight: 'Private Cebu automotive collection tour featuring vintage European sports & rally cars', romanceHighlight: 'Yap-Sandiego 17th-century ancestral house walk & authentic Cebu lechon tasting', weatherBackup: 'National Museum of the Philippines - Cebu & Casa Gorordo Museum', coords: [10.2942, 123.9021] },
  { day: 22, date: 'Nov 29', hubId: 'bohol-siquijor', location: 'Cebu ⛴ Panglao Bohol', generalActivity: 'Morning OceanJet Business Class fast ferry to Tagbilaran & check-in on Panglao Island', carHighlight: 'Driving a rental crossover along the scenic southwestern coastal highway of Bohol', romanceHighlight: 'Check into cliffside oceanfront resort at Alona/Doljo & sunset cocktail cruise', weatherBackup: 'National Museum Bohol in Tagbilaran & Amorita Sea Tree Spa', coords: [9.5488, 123.7772] },
  { day: 23, date: 'Nov 30', hubId: 'bohol-siquijor', location: 'Chocolate Hills & Loboc River', generalActivity: 'Full-day Bohol countryside tour: Chocolate Hills, Bilar Man-Made Forest & Tarsiers', carHighlight: 'Piloting an off-road ATV along rugged dirt trails around the base of the Chocolate Hills', romanceHighlight: 'Floating restaurant lunch cruise down the jade-green Loboc River with guitar serenades', weatherBackup: 'Covered Loboc River floating barge & Baclayon Heritage Museum', coords: [9.8297, 124.1397] },
  { day: 24, date: 'Dec 1', hubId: 'bohol-siquijor', location: 'Bohol ⛴ Siquijor Ring Road', generalActivity: 'Morning fast ferry from Tagbilaran to Siquijor & check-in at Tubod marine sanctuary', carHighlight: 'Cruising the smooth, empty 72km two-lane coastal ring road encircling Siquijor Island', romanceHighlight: 'Swimming in multi-tiered turquoise pools at Cambugahay Falls & Balete enchanted tree', weatherBackup: 'Lazi Convent (largest coral-stone convent in Asia) & Coco Grove shell spa', coords: [9.1412, 123.6265] },
  { day: 25, date: 'Dec 2', hubId: 'bohol-siquijor', location: 'Siquijor Highlands & San Juan', generalActivity: 'Mount Bandilaan viewpoints, Lugnason Falls & peaceful coral beaches in San Juan', carHighlight: 'Navigating the steep, sweeping mountain ridge roads connecting San Juan and Lazi', romanceHighlight: 'Romantic sunset dinner perched on the ocean cliffs in San Juan above the surf', weatherBackup: 'Bucafe highland glasshouse cafe & Dolce Amore Italian wood-fired trattoria', coords: [9.1468, 123.5112] },
  { day: 26, date: 'Dec 3', hubId: 'cebu-mactan', location: 'Siquijor ⛴ Cebu & CCLEX Bridge', generalActivity: 'Return via Dumaguete/Tagbilaran to Cebu & check-in at NUSTAR / Mactan 5★ resort', carHighlight: 'Driving across the monumental 8.9km CCLEX cable-stayed bridge over Mactan Channel', romanceHighlight: 'Afternoon at Mactan marine sanctuary, couples thalassotherapy sauna & seafood dinner', weatherBackup: 'NUSTAR luxury mall & Fili Lobby Lounge afternoon tea overlooking CCLEX', coords: [10.2785, 123.8965] },
  { day: 27, date: 'Dec 4', hubId: 'makati-bgc', location: 'Cebu ✈ Manila BGC (Cebu Pacific)', generalActivity: 'Cebu Pacific daytime flight CEB ✈ MNL T3, check-in at BGC 5★ hotel & High Street stroll', carHighlight: 'Wednesday evening exotic supercar & tuned JDM gathering along Bonifacio High Street', romanceHighlight: 'Artisan pastry tasting, High Street flagship boutiques & contemporary Filipino bistro', weatherBackup: 'Shangri-La The Fort Kerry Sports wellness club & Samba poolside lounge', coords: [14.5523, 121.0468] },
  { day: 28, date: 'Dec 5', hubId: 'makati-bgc', location: 'Manila Farewell & Rooftop Finale', generalActivity: 'Curated Filipino design boutiques, pearl/weaving keepsakes & celebration dinner', carHighlight: 'Visiting premier automotive lifestyle hubs & rare scale-model collector vaults', romanceHighlight: 'Full wellness spa afternoon followed by a 60th-floor rooftop farewell tasting menu', weatherBackup: 'Power Plant Mall Rockwell & The Peak indoor sky-bar at Grand Hyatt Manila', coords: [14.5567, 121.0518] },
  { day: 29, date: 'Dec 6', hubId: 'makati-bgc', location: 'Manila ✈ Copenhagen Departure', generalActivity: 'Relaxed morning coffee, checkout & private executive transfer to NAIA Airport', carHighlight: 'Cruising the elevated NAIA Expressway with sweeping metropolitan tarmac views', romanceHighlight: 'Last cup of single-origin Philippine Barako coffee & South Sea pearl keepsake', weatherBackup: 'Direct indoor drop-off at NAIA International Departure Lounge', coords: [14.5086, 121.0194] },
  { day: 30, date: 'Dec 7', hubId: 'makati-bgc', location: 'International Transit to CPH', generalActivity: 'Long-haul international flight & luxury hub lounge transit toward Copenhagen', carHighlight: 'Widebody twin-aisle aviation engineering observation & hub airport transit systems', romanceHighlight: 'First/Business class lounge shower spa, champagne toast & movie marathon', weatherBackup: 'Indoor international transit terminal lounges', coords: [14.5086, 121.0194] },
  { day: 31, date: 'Dec 8', hubId: 'makati-bgc', location: 'Copenhagen CPH Touchdown', generalActivity: 'Morning arrival at Copenhagen Airport Kastrup (CPH) & smooth return home', carHighlight: 'Precision Danish electric rail & automated metro transit into Copenhagen', romanceHighlight: 'Stepping back into warm Scandinavian hygge & unpacking island treasures', weatherBackup: 'Covered CPH Terminal 3 direct rail platform', coords: [14.5086, 121.0194] },
  { day: 32, date: 'Dec 9', hubId: 'makati-bgc', location: 'Copenhagen Homecoming', generalActivity: 'Post-trip reflection, organizing photography & updating packing-list.md', carHighlight: 'Reviewing onboard footage from Clark Speedway & Cebu Transcentral Highway', romanceHighlight: 'Curating a keepsake photo book of 32 days of lagoons, paraw sails & sunsets', weatherBackup: 'Cozy home reflection & vault archive update', coords: [14.5086, 121.0194] }
];
