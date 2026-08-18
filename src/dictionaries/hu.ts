import type { Dictionary } from "@/lib/i18n/types";

const hu = {
  metadata: {
    home: {
      title: "Sabeesoft",
      description:
        "A Sabeesoft egy egyedi szoftverfejlesztő stúdió, amely modern technológiákra épülő webes és mobilalkalmazásokat tervez és épít — tiszta kód, gyors szállítás, semmi felesleges.",
    },
    legalNotice: {
      title: "Impresszum — Sabeesoft",
      description:
        "Üzemeltető, szerzői jog és felhasználási feltételek a sabeesoft.com oldalhoz.",
    },
    privacy: {
      title: "Adatvédelmi tájékoztató — Sabeesoft",
      description:
        "Hogyan gyűjti, használja és védi a Sabeesoft az oldalon keresztül megadott adatokat.",
    },
  },
  header: {
    nav: {
      services: "Szolgáltatások",
      work: "Munkáink",
      process: "Folyamat",
      contact: "Kapcsolat",
    },
    cta: "Kérjen ajánlatot",
    menuLabel: "Menü",
    languageLabel: "Nyelv",
  },
  hero: {
    badge: "Egyedi szoftverfejlesztő stúdió",
    titleLine1: "Minimál kód.",
    titleLine2: "Maximális eredmény.",
    paragraph:
      "Modern technológiákra épülő webes és mobilalkalmazásokat tervezünk és fejlesztünk — tiszta kód, gyors szállítás, semmi felesleges.",
    ctaPrimary: "Projekt indítása",
    ctaSecondary: "Nézze meg, mit építünk",
    panel: {
      filename: "ship.ts",
      deployStatus: "deploy ✓ 42s",
      stats: ["0 örökölt kód", "2 hetes sprintek", "100% saját kód"],
    },
  },
  sectionLabels: {
    services: "Szolgáltatások",
    work: "Válogatott munkáink",
    process: "Hogyan dolgozunk",
    contact: "Projekt indítása",
  },
  services: {
    eyebrow: "01",
    title: "Szolgáltatások",
    subtitle: "Négy dolog, rendesen csinálva.",
    items: [
      {
        id: "web",
        title: "Webalkalmazások",
        body: "React, TypeScript, micro-frontendek, ahol a csapatok közös felületen dolgoznak.",
      },
      {
        id: "ai",
        title: "AI mérnöki munka",
        body: "LLM-alapú munkafolyamatok a saját adataidon, kiértékelve és költségkorláttal.",
      },
      {
        id: "mobile",
        title: "Mobilalkalmazások",
        body: "iOS és Android egy kódbázisból, offline-first megközelítéssel.",
      },
      {
        id: "cloud",
        title: "Szolgáltatások és felhő",
        body: "Java, Quarkus és NestJS mikroszolgáltatások, infrastruktúra kódként.",
      },
    ],
  },
  work: {
    eyebrow: "02",
    title: "Válogatott munkáink",
    subtitleDesktop:
      "Három friss projekt, a megoldott probléma mentén bemutatva. Ügyfélnevek kérésre — nem publikálunk olyan logót, amelynek megjelenítésére nem kaptunk engedélyt.",
    subtitleMobile:
      "Három friss projekt, a megoldott probléma mentén bemutatva. Ügyfélnevek kérésre.",
    cta: "Kérje a teljes esettanulmányokat",
    caseStudies: [
      {
        sector: "Logisztika",
        year: "2026",
        title: "Egy 14 éves monolit szolgáltatásokra bontása leállás nélkül",
        body: "Strangler-fig migráció egy stabil API mögött. A rendeléskezelés Quarkus szolgáltatásokba költözött, miközben a régi rendszer tovább szolgálta ki a forgalmat.",
        metric: "-64%",
        metricLabel: "csúcsidei rendelés-késleltetés",
        tags: ["Java", "Quarkus", "Kafka"],
      },
      {
        sector: "Fintech",
        year: "2025",
        title:
          "Dokumentumellenőrzés LLM-alapú munkafolyamatra bízva, emberi felügyelettel",
        body: "Keresés az ügyfél saját archívumában, megbízhatósági küszöbök és auditnyom minden automatizált döntésnél.",
        metric: "9 nap",
        metricLabel: "havonta megspórolt kézi ellenőrzés",
        tags: ["Python", "NestJS", "PostgreSQL"],
      },
      {
        sector: "Terepi szolgáltatás",
        year: "2025",
        title: "Egy offline-first alkalmazás, amely 400 technikusnál váltotta a papírt",
        body: "Munkák, fotók és aláírások rögzítése jel nélkül, ütközésmentes szinkronizálással újracsatlakozáskor. iOS és Android egy kódbázisból.",
        metric: "11 hét",
        metricLabel: "az indítástól az áruházi megjelenésig",
        tags: ["Flutter", "TypeScript", "AWS"],
      },
    ],
    stats: [
      { value: "≥ 95", label: "Lighthouse, CI-ben kikényszerítve" },
      { value: "< 15 perc", label: "Commit-tól élesítésig" },
      { value: "2. szempár", label: "minden merge-nél" },
      { value: "0", label: "proprietary réteg, lock-in nélkül" },
    ],
    techStackLabel: "Jellemzően:",
  },
  process: {
    eyebrow: "03",
    title: "Hogyan dolgozunk",
    subtitle:
      "Három lépés, discovery-színház nélkül. A kód a legelső commit-tól a tiéd.",
    stats: [
      { label: "Discovery-től az első release-ig", value: "6 hét" },
      { label: "Tesztlefedettség átadáskor", value: "≥ 80%" },
      { label: "Fix árazású sprintek", value: "mindig" },
    ],
    steps: [
      {
        number: "01",
        title: "Egy hetes discovery",
        body: "Scope, felhasználói folyamatok, architektúra — fix árral és dátumozott tervvel zárva.",
      },
      {
        number: "02",
        title: "Szállítás kéthetente",
        body: "Minden sprint éles környezetben zárul. Működő termék, nem egy demó.",
      },
      {
        number: "03",
        title: "Dokumentált átadás",
        body: "Kód, pipeline és tudásátadás. Vendor lock-in soha.",
      },
    ],
  },
  contact: {
    eyebrow: "04",
    label: "Projekt indítása",
    title: "Bízza ránk a nehezét.",
    paragraph:
      "Néhány sor a termékről elég a kezdéshez. Kap egy névvel ellátott fejlesztőt, egy körülhatárolt tervet és egy fix árat — nem egy értékesítési folyamatot.",
    trustItems: [
      "Válasz 2 munkanapon belül",
      "NDA aláírva az első hívás előtt",
      "A saját repód, a saját fiókod, az első naptól",
    ],
    location: "Budapest · elsősorban távmunkában",
    form: {
      kindLabel: "Mit épít",
      kinds: ["Új termék", "Meglévő termék", "Csapatbővítés"],
      nameLabel: "Név",
      namePlaceholder: "Kovács János",
      emailLabel: "Munkahelyi e-mail",
      emailPlaceholder: "janos@ceg.hu",
      briefLabel: "A brief",
      briefPlaceholder: "Mit csináljon, kinek szól, és mi a határidő?",
      submit: "Brief elküldése",
      note: "Nincs hírlevél. Nincs CRM-kampány.",
      success: {
        title: "Brief megérkezett.",
        body: "Mindegyiket magunk olvassuk el. Egy fejlesztőtől kap választ, nem sablonlevelet, két munkanapon belül.",
        reset: "Új üzenet küldése",
      },
    },
  },
  footer: {
    description:
      "Egy kis stúdió, amely modern technológiákra épülő webes és mobilalkalmazásokat épít. Tiszta kód, gyors szállítás, lock-in nélkül.",
    servicesHeading: "Szolgáltatások",
    studioHeading: "Stúdió",
    studioLinks: {
      howWeWork: "Hogyan dolgozunk",
      work: "Munkáink",
      startAProject: "Projekt indítása",
    },
    contactHeading: "Kapcsolat",
    contactLinkLabel: "Kapcsolat",
    location: "Budapest, Magyarország",
    hours: "Elsősorban távmunka, CET munkaidő",
    privacy: "Adatvédelem",
    legalNotice: "Impresszum",
    cookiePreferences: "Süti beállítások",
  },
  common: {
    backToHome: "Vissza a sabeesoft.com-ra",
    lastUpdated: "Utoljára frissítve",
  },
  cookieConsent: {
    message:
      "Egy funkcionális sütit használunk a nyelvi beállításod megjegyzésére, és — csak ha elfogadod — Google Analytics-et, hogy lássuk, hogyan találnak ránk és hogyan használják az oldalt.",
    accept: "Elfogadom",
    decline: "Elutasítom",
    privacyLink: "Adatvédelmi tájékoztató",
  },
  legalNotice: {
    eyebrow: "Jogi",
    title: "Impresszum",
    updated: "2026. augusztus 18.",
    operator: {
      title: "Üzemeltető",
      body: "Ezt az oldalt a Sabeesoft (székhely: Budapest, Magyarország) teszi közzé. A Sabeesoft egyelőre nem bejegyzett jogi személy — a hivatalos cégbejegyzési adatok (bejegyzett név, székhely, cégjegyzékszám, adószám) a bejegyzés lezárultával kerülnek közzétételre.",
    },
    copyright: {
      title: "Szerzői jog",
      body: "Eltérő jelölés hiányában az oldalon található design, kód, szöveg és esettanulmány-leírások © 2026 Sabeesoft. Az ügyfélneveket nem tesszük közzé, hacsak erre engedélyt nem kaptunk; az ismertetett mutatók valós projekteket reprezentálnak.",
    },
    trademarks: {
      title: "Védjegyek",
      body: "A Sabeesoft név és logó a Sabeesoft védjegye. Az oldalon említett harmadik féltől származó nevek, logók és védjegyek — programozási nyelvek, keretrendszerek, felhőszolgáltatók és hasonlók — a jogos tulajdonosaikat illetik, és kizárólag azonosítás céljából szerepelnek itt.",
    },
    noWarranty: {
      title: "Szavatosság kizárása",
      body: "Ez az oldal és tartalma „jelen állapotában”, mindenféle szavatosság nélkül kerül közzétételre. Jóhiszeműen törekszünk a pontosságára és naprakészségére, de ezt nem garantáljuk.",
    },
    liability: {
      title: "Felelősség",
      body: "A jogszabályok által megengedett mértékben a Sabeesoft nem felel az oldal használatából vagy használatának ellehetetlenüléséből eredő károkért.",
    },
    governingLaw: {
      title: "Irányadó jog",
      body: "A jelen feltételekre Magyarország joga irányadó.",
    },
    contact: {
      title: "Kapcsolat",
      suffix: " — Budapest, Magyarország.",
    },
  },
  privacy: {
    eyebrow: "Adatvédelem",
    title: "Adatvédelmi tájékoztató",
    updated: "2026. augusztus 18.",
    whoThisIs: {
      title: "Kik vagyunk",
      body: "A Sabeesoft („mi”) üzemelteti ezt az oldalt a sabeesoft.com címen. Ez a tájékoztató azt írja le, mi történik az oldalon keresztül megadott adataiddal — és semmi mást.",
    },
    whatWeCollect: {
      title: "Milyen adatot gyűjtünk",
      body1:
        "Egy funkcionális sütit használunk a nyelvi beállításod megjegyzésére. Ha ezt a bannerben elfogadod, Google Analytics-et is használunk a látogatottság megértésére — ezt a döntésedet bármikor megváltoztathatod a lábléc „Süti beállítások” pontján keresztül. Hirdetést vagy más nyomkövetést nem alkalmazunk.",
      body2:
        "Az egyetlen adat, amit gyűjtünk, amit a kapcsolatfelvételi űrlapba beírsz: a neved, a munkahelyi e-mail címed, hogy mit építesz, és a briefed. Ennyi.",
    },
    whyWeCollect: {
      title: "Miért gyűjtjük",
      body: "Hogy válaszoljunk a megkeresésedre. Minden briefet magunk olvasunk el, és jellemzően két munkanapon belül jelentkezünk.",
    },
    whatWeDontDo: {
      title: "Mit nem csinálunk vele",
      body: "Nincs hírlevél. Nincs CRM-kampány. Nem adjuk el, nem adjuk bérbe és nem osztjuk meg az adataidat harmadik féllel, és a briefedet nem használjuk fel az elindított beszélgetésen túl semmire.",
    },
    howLongWeKeep: {
      title: "Meddig őrizzük",
      body: "Az üzenetedet addig őrizzük, amíg a beszélgetéshez szükséges, majd töröljük, amint a megkeresés lezárult és már nincs rá szükségünk — jellemzően 12 hónapon belül, kérésre korábban is.",
    },
    hosting: {
      title: "Tárhely és infrastruktúra",
      body: "Az oldalt a tárhelyszolgáltatónk szolgálja ki, amely biztonsági és üzemeltetési célból naplózhat alapvető kapcsolati adatokat (IP-cím, böngészőtípus, kérés időpontja). Ezeket a naplókat nem használjuk marketingre vagy profilalkotásra.",
    },
    yourRights: {
      title: "Az Ön jogai",
      before:
        "Bármikor megkérdezheted, milyen adatot tárolunk rólad, kérheted azok helyesbítését vagy törlését. Írj a ",
      after: " címre, és elrendezzük — űrlapok és bonyodalmak nélkül.",
    },
    changes: {
      title: "Változások",
      body: "Ha ez a tájékoztató változik, frissítjük a tetején lévő dátumot. Az adataiddal kapcsolatos gyakorlatunkat nem változtatjuk meg csendben.",
    },
    contact: {
      title: "Kapcsolat",
      before: "Kérdésed van ezzel a tájékoztatóval kapcsolatban? ",
    },
  },
} satisfies Dictionary;

export default hu;
