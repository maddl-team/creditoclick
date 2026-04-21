export const PAAM_META = {
  title: "Prestito Acquisto Auto e Moto 2026 | CreditoClick",
  description:
    "Vuoi comprare un'auto o una moto? Con la cessione del quinto ottieni liquidità diretta sul conto, senza giustificativi. Preventivo gratuito via WhatsApp.",
} as const;

export const PAAM_HERO = {
  badge: "Soluzioni Mobilità",
  title: "Prestito per Acquisto Auto e Moto: liquidità diretta sul conto, senza vincoli sul veicolo",
  subtitle:
    "Vuoi cambiare l'auto, acquistare una moto o finanziare un veicolo usato da privato? Con la cessione del quinto ottieni la liquidità necessaria accreditata direttamente sul tuo conto corrente — senza dover vincolare il veicolo come garanzia, senza dover presentare preventivi o documenti sull'acquisto, senza restrizioni sul venditore. CreditoClick gestisce tutto via WhatsApp, dal preventivo alla firma digitale.",
  primaryCta: "Richiedi un preventivo su WhatsApp",
  secondaryCta: "Calcola la tua rata in 2 minuti",
} as const;

export const PAAM_PROBLEMA = {
  sectionTitle: "Il Problema dei Finanziamenti Auto Tradizionali",
  title: "Perché il finanziamento in concessionaria non è sempre la scelta migliore",
  paragraphs: [
    "Quando si acquista un veicolo nuovo o usato, la prima opzione che viene proposta è quasi sempre il finanziamento diretto in concessionaria o tramite le finanziarie captive dei costruttori. Questa soluzione è comoda — tutto si gestisce nello stesso posto, nello stesso momento — ma presenta limitazioni concrete che vale la pena conoscere prima di firmare.",
    "Il tasso effettivo è spesso più alto di quanto appare. I finanziamenti auto in concessionaria applicano frequentemente tassi nominali apparentemente bassi, accompagnati però da spese accessorie, polizze accessorie non sempre necessarie e commissioni che fanno salire significativamente il TAEG reale. La rata mensile pubblicizzata non sempre riflette il costo totale del credito.",
    "Il veicolo diventa garanzia del finanziamento. In molti contratti di finanziamento auto, il veicolo stesso è oggetto di riserva di proprietà fino all'estinzione del debito. Questo limita la libertà di disporre del bene — rivenderlo, modificarlo, cederlo — finché il finanziamento non è completamente estinto.",
    "L'acquisto da privato è spesso escluso. I finanziamenti in concessionaria sono per definizione legati all'acquisto presso quella specifica concessionaria. Chi vuole acquistare da un privato, da un'asta, dall'estero o tramite piattaforme online non ha accesso a questo canale.",
    "La cessione del quinto elimina tutti questi vincoli. La liquidità viene accreditata direttamente sul tuo conto corrente, da spendere dove e come preferisci — concessionaria, privato, asta, importazione. Il veicolo non è in nessun modo coinvolto nel contratto di finanziamento.",
  ],
} as const;

export const PAAM_PERCHE = {
  sectionTitle: "Perché la Cessione del Quinto è Vantaggiosa per l'Acquisto di un Veicolo",
  title: "I vantaggi concreti rispetto al finanziamento auto tradizionale",
  intro: "",
  items: [
    "Libertà totale sulla scelta del venditore: Puoi acquistare da qualsiasi soggetto — concessionaria, privato, piattaforma online, asta pubblica, importatore — senza vincoli di sorta. La liquidità è sul tuo conto: sei tu a decidere come usarla.",
    "Nessun vincolo sul veicolo: Il veicolo acquistato è immediatamente e interamente di tua proprietà, senza riserva di proprietà a favore della finanziaria. Puoi rivenderlo, modificarlo o cederlo in qualsiasi momento senza dover estinguere preventivamente il finanziamento.",
    "Tasso fisso e rata automatica: La rata della cessione del quinto non cambia mai per tutta la durata del contratto e viene trattenuta automaticamente in busta paga. Non ci sono rischi di variazioni di tasso, né rischi di addebito su conto scoperto.",
    "Confrontabilità reale del costo: Il preventivo CreditoClick espone sempre TAEG, TAN e costo totale del credito in modo chiaro e confrontabile. Puoi paragonare il costo effettivo della cessione del quinto con quello del finanziamento in concessionaria e scegliere consapevolmente.",
    "Accessibile anche con segnalazioni CRIF: Se hai avuto difficoltà creditizie in passato, il finanziamento auto tradizionale potrebbe essere difficile da ottenere. La cessione del quinto valuta principalmente la stabilità del tuo reddito attuale.",
  ],
} as const;

export const PAAM_IMPORTI = {
  sectionTitle: "Quanto Puoi Ottenere per l'Acquisto del Veicolo",
  title: "Importi disponibili in base allo stipendio e alla durata",
  formula: "Rata massima = Stipendio netto mensile × 20%",
  lead: "Esempio indicativo — dipendente con stipendio netto di 1.700 €:",
  columns: ["Durata", "Rata massima (20%)", "Importo indicativo ottenibile*"] as const,
  rows: [
    ["60 mesi (5 anni)", "340 €", "~ 16.000 – 18.500 €"],
    ["84 mesi (7 anni)", "340 €", "~ 21.000 – 25.000 €"],
    ["120 mesi (10 anni)", "340 €", "~ 27.000 – 32.000 €"],
  ] as const,
  note:
    "Valori indicativi calcolati su un profilo tipo. Gli importi esatti dipendono dal tasso applicato al profilo specifico e dall'istituto finanziatore selezionato.",
  afterNote:
    "Per la maggior parte degli acquisti di veicoli — auto nuove di fascia media, auto usate di qualità, moto di media e alta cilindrata — gli importi ottenibili con la cessione del quinto sono ampiamente sufficienti a coprire l'intero costo del veicolo.",
  cta: "Calcola quanto puoi ottenere — Usa il nostro strumento gratuito",
} as const;

export const PAAM_CONFRONTO = {
  sectionTitle: "Cessione del Quinto vs. Finanziamento Auto: Il Confronto Diretto",
  title: "Quale strumento conviene davvero?",
  columns: ["Caratteristica", "Cessione del Quinto", "Finanziamento Auto Tradizionale"] as const,
  rows: [
    ["Liquidità accreditata sul conto", "Sì — libera da vincoli", "No — collegata all'acquisto specifico"],
    ["Vincolo sul veicolo (riserva di proprietà)", "No", "Spesso sì"],
    ["Acquisto da privato possibile", "Sì", "No (in genere)"],
    ["Tasso fisso garantito", "Sempre", "Dipende dal contratto"],
    ["Accessibile con segnalazioni CRIF", "Spesso sì", "Difficile"],
    ["Trasparenza sul costo totale", "TAEG sempre esposto", "Verificare attentamente le condizioni"],
    ["Rata automatica senza rischio di insoluto", "Sì — trattenuta in busta paga", "No — addebito su conto corrente"],
  ] as const,
  note:
    "Il finanziamento in concessionaria può essere conveniente in situazioni specifiche — promozioni a tasso zero reali, permute integrate, pacchetti servizi inclusi. In tutti gli altri casi, la cessione del quinto offre maggiore flessibilità, maggiore trasparenza e spesso un costo effettivo più competitivo. Il consulente CreditoClick può aiutarti a confrontare le due opzioni sulla base del tuo profilo specifico.",
} as const;

export const PAAM_USATO = {
  sectionTitle: "Auto Usata da Privato: Il Caso d'Uso più Frequente",
  title: "Perché la cessione del quinto è lo strumento ideale per l'acquisto da privato",
  paragraphs: [
    "L'acquisto di un'auto usata da un privato — tramite piattaforme online, annunci, passaparola — è una delle situazioni in cui la cessione del quinto esprime il suo vantaggio più evidente. In questo contesto, il finanziamento in concessionaria semplicemente non esiste come opzione, e un prestito personale tradizionale potrebbe essere difficile da ottenere o meno conveniente.",
    "Con la cessione del quinto, il processo è diretto: ottieni la liquidità sul conto, tratti liberamente con il venditore privato, paghi in contanti o tramite bonifico, e il veicolo diventa immediatamente di tua proprietà senza alcun coinvolgimento della finanziaria nella transazione.",
    "Questa libertà vale anche per altri acquisti analoghi: moto d'epoca, veicoli commerciali leggeri per uso privato, camper, roulotte — qualsiasi acquisto che richieda liquidità disponibile piuttosto che un finanziamento vincolato a uno specifico fornitore.",
  ],
} as const;

export const PAAM_MOTO = {
  sectionTitle: "Moto e Veicoli a Due Ruote: Specificità e Importi",
  title: "Dalla moto da città alla moto da turismo: quanto serve e come ottenerlo",
  intro:
    "L'acquisto di una moto — sia per uso quotidiano che per uso sportivo o turistico — rientra perfettamente nel perimetro di utilizzo della cessione del quinto. Non esistono vincoli sulla tipologia di veicolo: la liquidità può essere utilizzata per scooter, moto naked, moto da turismo, enduro, moto d'epoca o qualsiasi altro veicolo a due ruote.",
  lead: "Importi tipici per l'acquisto di moto:",
  items: [
    "Scooter urbano nuovo: 3.000 – 6.000 €",
    "Moto media cilindrata nuova: 6.000 – 12.000 €",
    "Moto alta cilindrata o turismo nuova: 12.000 – 25.000 €",
    "Moto usata di qualità: 3.000 – 15.000 €",
  ],
  note:
    "Per la maggior parte di questi acquisti, la cessione del quinto — anche su durate più brevi come 36 o 48 mesi — fornisce l'importo necessario con rate mensili sostenibili. Il consulente CreditoClick calcola la soluzione ottimale in base al tuo stipendio e all'importo del veicolo che intendi acquistare.",
} as const;

export const PAAM_PROCESSO = {
  sectionTitle: "Il Processo CreditoClick per l'Acquisto del Veicolo",
  title: "Dalla richiesta all'acquisto: tutto via WhatsApp",
  steps: [
    {
      title: "Passaggio 1 — Scrivici su WhatsApp",
      desc: "Indicaci: il tipo di veicolo che intendi acquistare (auto nuova, auto usata, moto), l'importo indicativo, il tuo contratto di lavoro e lo stipendio netto mensile. Nessun documento in questa fase, nessun impatto sulla posizione CRIF.",
      icon: "clipboardList",
    },
    {
      title: "Passaggio 2 — Analisi del profilo e selezione dell'offerta",
      desc: "Il consulente analizza il tuo profilo contrattuale e identifica tra i partner convenzionati l'istituto con le condizioni più favorevoli per il tuo caso specifico. Ti risponde su WhatsApp con una prima valutazione concreta.",
      icon: "userCheck",
    },
    {
      title: "Passaggio 3 — Preventivo personalizzato con TAEG e rata netta",
      desc: "Ricevi il preventivo con tutti i parametri economici esposti in modo chiaro: TAN, TAEG, rata mensile netta, importo totale dovuto, costo dell'assicurazione. Puoi confrontarlo liberamente con il finanziamento proposto dalla concessionaria prima di decidere.",
      icon: "fileText",
    },
    {
      title: "Passaggio 4 — Firma digitale e accredito sul conto",
      desc: "La documentazione si gestisce in modalità elettronica. L'accredito avviene direttamente sul tuo conto corrente nei tempi previsti dall'istituto — generalmente 7-15 giorni lavorativi dalla presentazione della pratica completa. Da quel momento sei libero di procedere con l'acquisto.",
      icon: "send",
    },
  ],
  cta: "Inizia ora — Scrivici su WhatsApp",
} as const;

export const PAAM_EEAT = {
  sectionTitle: "Sezione E-E-A-T / Note Legali e Trasparenza",
  title: "Informazioni legali e conformità normativa",
  paragraphs: [
    "CreditoClick opera in qualità di mediatore creditizio iscritto all'OAM (inserire numero) ai sensi del D.Lgs. 141/2010. Non eroga direttamente finanziamenti: i contratti vengono stipulati con istituti finanziatori autorizzati da Banca d'Italia. La cessione del quinto è disciplinata dal D.P.R. 180/1950 e dalla normativa sul credito al consumo. Prima della firma, il cliente riceve il modulo SECCI con tutte le condizioni economiche del contratto. Il diritto di recesso può essere esercitato entro 14 giorni dalla stipula (art. 125-ter TUB). La consulenza preliminare è gratuita e senza impegno.",
  ],
} as const;

export const PAAM_FAQ = {
  sectionTitle: "FAQ (GEO / AEO Optimization)",
  title: "Domande frequenti sul prestito per acquisto auto e moto",
  items: [
    {
      q: "Devo dimostrare che uso la liquidità per comprare un veicolo?",
      a: "No. La cessione del quinto non prevede vincoli sulla destinazione d'uso della liquidità erogata. Non è necessario presentare preventivi, fatture o documentazione sull'acquisto. La liquidità viene accreditata sul tuo conto corrente e puoi utilizzarla liberamente.",
    },
    {
      q: "Posso usare la cessione del quinto per acquistare un veicolo all'estero o da un importatore?",
      a: "Sì. Non esistono restrizioni geografiche sull'utilizzo della liquidità. Puoi acquistare da un privato estero, da un importatore, tramite un'asta internazionale o da qualsiasi altra fonte. La cessione del quinto non è in alcun modo collegata al fornitore del veicolo.",
    },
    {
      q: "È conveniente usare la cessione del quinto se la concessionaria mi offre un tasso promozionale molto basso?",
      a: "Dipende dal TAEG effettivo dell'offerta della concessionaria, incluse tutte le spese accessorie e le polizze obbligatorie richieste. In alcuni casi, le promozioni a tasso agevolato dei costruttori sono genuinamente competitive. In altri casi, il tasso nominale basso è compensato da costi accessori che fanno salire il costo reale. Il consulente CreditoClick può aiutarti a confrontare le due offerte sul costo totale effettivo prima di decidere.",
    },
    {
      q: "Posso richiedere la cessione del quinto per acquistare un veicolo commerciale leggero per uso privato?",
      a: "Sì. Non esistono restrizioni sulla tipologia di veicolo acquistabile con la liquidità della cessione del quinto. Furgoni, van, veicoli commerciali leggeri utilizzati a uso privato rientrano perfettamente nell'utilizzo dello strumento.",
    },
    {
      q: "Quanto tempo passa tra la firma del contratto e la disponibilità della liquidità per l'acquisto?",
      a: "Generalmente tra i 7 e i 15 giorni lavorativi dalla presentazione della pratica completa. Se stai trattando l'acquisto con un privato o hai una scadenza specifica legata all'acquisto, informaci fin dal primo contatto per pianificare i tempi in modo adeguato.",
    },
    {
      q: "Posso usare la cessione del quinto per acquistare un'auto se ne ho già una finanziata in corso?",
      a: "Sì, a condizione che la rata della cessione del quinto non superi il 20% del reddito netto mensile. La presenza di altri finanziamenti in corso non preclude automaticamente la richiesta, purché il profilo complessivo sia sostenibile. Il consulente verifica la compatibilità nella fase di analisi preliminare.",
    },
  ],
} as const;

export const PAAM_FINAL_CTA = {
  title: "Il veicolo che vuoi, i soldi sul conto, nessun vincolo.",
  subtitle:
    "Non devi scegliere solo tra i veicoli che finanziano in concessionaria. Non devi vincolare il tuo nuovo acquisto come garanzia di un debito. Con la cessione del quinto sei tu a scegliere — il veicolo, il venditore, il prezzo. Scrivici su WhatsApp: ti diciamo in 24 ore quanto puoi ottenere e a quali condizioni, senza impegno e senza documenti nella fase iniziale.",
  primary: "Scrivici su WhatsApp — Preventivo gratuito in 24h",
  secondary: "Calcola la tua rata con il nostro strumento gratuito",
} as const;
