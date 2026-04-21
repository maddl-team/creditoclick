export const CRCQ_META = {
  title: "Calcola Rata Cessione del Quinto 2026 | CreditoClick",
  description:
    "Calcola subito la tua rata di cessione del quinto: strumento gratuito, nessun dato personale richiesto, zero impatto sul CRIF. Preventivo via WhatsApp in 24h.",
} as const;

export const CRCQ_HERO = {
  badge: "Strumenti",
  title: "Calcola la Rata della Cessione del Quinto: strumento gratuito, immediato e senza registrazione",
  subtitle:
    "Vuoi sapere quanto potresti ottenere e quale sarebbe la rata mensile prima ancora di parlare con qualcuno? Il nostro calcolatore ti dà una stima immediata basata sul tuo stipendio netto (o sulla tua pensione) e sulla durata che preferisci. Nessun dato personale richiesto, nessuna richiesta formale, nessun impatto sulla tua posizione CRIF. Poi, se vuoi approfondire, un consulente è a un messaggio WhatsApp di distanza.",
  primaryCta: "Vai al calcolatore",
  secondaryCta: "Parla subito con un consulente su WhatsApp",
} as const;

export const CRCQ_COME = {
  sectionTitle: "Come Funziona il Calcolatore",
  title: "Tre dati, un risultato immediato",
  intro:
    "Il calcolatore di CreditoClick è stato progettato per essere il più semplice e diretto possibile. Non ti chiede dati personali, non richiede la creazione di un account, non lascia tracce nelle banche dati creditizie.",
  lead: "Per ottenere una stima hai bisogno di tre informazioni:",
  points: [
    "1. Il tuo reddito netto mensile: Lo stipendio netto che ricevi in busta paga ogni mese (o l'importo netto del tuo cedolino pensionistico). È la base di calcolo della rata massima: la legge stabilisce che non può superare il 20% di questo importo.",
    "2. La categoria professionale: Dipendente pubblico, dipendente privato o pensionato. La categoria incide sul tasso indicativo applicato nel calcolo: i dipendenti pubblici e i pensionati ex INPDAP accedono generalmente ai tassi più vantaggiosi, seguiti dai dipendenti di grandi aziende private.",
    "3. La durata desiderata: Da 24 a 120 mesi. Una durata più lunga riduce la rata mensile ma aumenta il costo totale del credito. Il calcolatore ti mostra entrambi i valori in modo che tu possa valutare il compromesso più adatto alle tue esigenze.",
  ],
  devNote:
    "(Nota per il team di sviluppo: il calcolatore deve esporre per ogni simulazione: rata mensile indicativa, importo totale indicativo erogabile, TAEG indicativo di riferimento per categoria, importo totale dovuto indicativo. Tutti i valori devono essere accompagnati dalla dicitura \"valori indicativi — il tasso reale dipende dal profilo specifico e viene determinato nel preventivo personalizzato\".)",
} as const;

export const CRCQ_INDICATIVO = {
  sectionTitle: "Cosa Significa \"Indicativo\": La Trasparenza Prima di Tutto",
  title: "Perché il calcolatore fornisce stime e non offerte vincolanti",
  paragraphs: [
    "Il calcolatore di CreditoClick fornisce stime indicative — non offerte vincolanti. Questa distinzione è importante e vogliamo spiegarla con chiarezza, perché è il fondamento di una consulenza seria.",
    "Il tasso reale dipende dal profilo specifico. Il calcolatore utilizza un tasso di riferimento medio per ciascuna categoria professionale. Il tasso effettivo applicato al tuo contratto dipende da variabili che solo un'analisi individuale può determinare: la specifica azienda datrice di lavoro, la tua anzianità contrattuale, il TFR maturato (per i privati), la tua età anagrafica (che incide sul costo della polizza vita), l'istituto finanziatore selezionato.",
    "L'importo reale dipende dal TFR disponibile. Per i dipendenti privati, il TFR maturato costituisce una garanzia implicita che può limitare l'importo effettivamente erogabile rispetto al massimo teorico calcolato sulla rata. Il calcolatore non tiene conto di questa variabile.",
    "Le segnalazioni CRIF possono influire. In presenza di segnalazioni in Centrale Rischi, alcuni istituti applicano condizioni diverse o limitano l'importo erogabile. Il calcolatore non considera la situazione creditizia del richiedente.",
    "La stima del calcolatore è utile per capire l'ordine di grandezza della soluzione e per valutare se proseguire con una consulenza. Il preventivo personalizzato — gratuito, riservato e senza impegno — è il solo documento che riflette le condizioni realmente applicabili al tuo profilo specifico.",
  ],
} as const;

export const CRCQ_DAL = {
  sectionTitle: "Dal Calcolatore al Preventivo: Il Passo Successivo",
  title: "Cosa succede dopo la simulazione",
  intro:
    "Hai ottenuto la tua stima e vuoi saperne di più? Il passo successivo è richiedere un preventivo personalizzato gratuito via WhatsApp. Ecco cosa cambia rispetto alla simulazione del calcolatore:",
  items: [
    "Il preventivo è basato sul tuo profilo reale: Il consulente analizza la tua situazione contrattuale specifica — datore di lavoro, anzianità, TFR, eventuale storico creditizio — e identifica tra i partner convenzionati l'istituto che offre le condizioni più competitive per il tuo caso.",
    "Il preventivo espone il TAEG reale: Non un tasso medio di categoria, ma il tasso annuo effettivo globale effettivamente applicabile al tuo contratto, calcolato in conformità alla normativa sul credito al consumo.",
    "Il preventivo è accompagnato dal modulo SECCI: Il documento Standard European Consumer Credit Information contiene tutte le condizioni contrattuali in modo standardizzato e confrontabile. Riceverlo è un tuo diritto prima di qualsiasi firma.",
    "Il preventivo non impegna a nulla: Puoi ricevere il preventivo, valutarlo con calma, confrontarlo con altre offerte e decidere liberamente se procedere o meno. Non ci sono costi di consulenza, non ci sono penali per il recesso prima della firma.",
  ],
  cta: "Richiedi il tuo preventivo personalizzato su WhatsApp",
} as const;

export const CRCQ_METODO = {
  sectionTitle: "Formula e Metodologia di Calcolo",
  title: "Come funziona matematicamente la cessione del quinto",
  paragraphs: [
    "Per chi vuole capire la logica alla base del calcolo, ecco la struttura matematica della cessione del quinto.",
    "La rata massima:",
    "Rata massima = Reddito netto mensile × 20%",
    "Questa è la soglia di legge invalicabile. La rata effettiva può essere inferiore al massimo — in funzione dell'importo richiesto e della durata scelta — ma non può mai superarlo.",
    "L'importo erogabile lordo: Il piano di ammortamento della cessione del quinto è a tasso fisso e a rate costanti (ammortamento alla francese). L'importo erogabile lordo si calcola come il valore attuale di una rendita annua posticipata di n rate mensili pari alla rata massima, scontate al tasso mensile equivalente al TAN contrattuale.",
    "In termini pratici, per una rata di 300 € mensili su 84 mesi a un TAN del 7%:",
    "Importo lordo ≈ 300 × [(1 - (1 + 0,07/12)^(-84)) / (0,07/12)] ≈ 18.800 €",
    "L'importo netto erogato: L'importo netto che il richiedente riceve sul conto corrente è inferiore all'importo lordo, perché dal totale vengono dedotti i costi inclusi nel piano: spese di istruttoria, costo della polizza assicurativa obbligatoria (vita e rischio impiego), imposta sostitutiva. Questi costi sono tutti inclusi nel TAEG e comunicati nel preventivo prima della firma.",
    "Il TAEG: Il Tasso Annuo Effettivo Globale include TAN più tutti i costi obbligatori — è il parametro corretto per confrontare offerte diverse. Due offerte con lo stesso TAN ma costi assicurativi diversi hanno TAEG diversi: è sempre il TAEG il dato da confrontare.",
  ],
} as const;

export const CRCQ_CATEGORIE = {
  sectionTitle: "Il Calcolatore per Ogni Categoria",
  title: "Risultati diversi per profili diversi: cosa cambia",
  intro:
    "Il tasso di riferimento utilizzato nel calcolatore varia in funzione della categoria professionale. Ecco come si differenziano i profili principali.",
  items: [
    "Dipendenti Pubblici — Il profilo con i tassi più vantaggiosi: I dipendenti della pubblica amministrazione — insegnanti, infermieri, forze dell'ordine, dipendenti ministeriali — accedono ai TAEG più bassi del mercato della cessione del quinto. La solidità del datore di lavoro pubblico e la gestione centralizzata del cedolino (in molti casi tramite NoiPA) abbassano il rischio percepito dall'istituto al minimo. Il calcolatore utilizza per questa categoria il tasso di riferimento più favorevole.",
    "Pensionati INPS — Un profilo solido con specificità anagrafiche: Per i pensionati, il tasso indicativo dipende anche dall'età anagrafica, poiché il costo della polizza vita aumenta all'aumentare dell'età. Il calcolatore utilizza un tasso medio di categoria per i pensionati; il preventivo personalizzato riflette il costo esatto della polizza in funzione dell'età specifica del richiedente.",
    "Dipendenti Privati Grandi Aziende — Condizioni paragonabili al pubblico per i profili corporate: I dipendenti di SPA, grandi SRL e gruppi industriali strutturati accedono a condizioni molto competitive — in molti casi paragonabili a quelle dei dipendenti pubblici. Il calcolatore utilizza per questa categoria un tasso di riferimento medio; il preventivo personalizzato può essere significativamente più vantaggioso per i profili con datori di lavoro di primario standing.",
    "Dipendenti PMI — Il profilo con la maggiore variabilità: Per i dipendenti di piccole e medie imprese, il tasso effettivo dipende in modo significativo dall'azienda specifica, dall'anzianità contrattuale e dal TFR maturato. Il calcolatore utilizza un tasso medio conservativo per questa categoria. Il preventivo personalizzato — che tiene conto del profilo specifico dell'azienda e del TFR — può portare a condizioni migliori rispetto alla stima iniziale.",
  ],
  ctaPubblici: "Scopri le soluzioni per la tua categoria professionale",
  ctaPensionati: "Scopri la cessione del quinto della pensione",
  ctaGrandiAziende: "Scopri la cessione del quinto per dipendenti di grandi aziende",
  ctaPmi: "Scopri la cessione del quinto per dipendenti PMI",
} as const;

export const CRCQ_FAQ = {
  sectionTitle: "Domande Frequenti sul Calcolatore",
  title: "Tutto quello che devi sapere sullo strumento",
  items: [
    {
      q: "Il calcolatore è davvero gratuito e senza registrazione?",
      a: "Sì. Il calcolatore di CreditoClick è completamente gratuito e non richiede la creazione di un account, l'inserimento di un indirizzo email o di qualsiasi altro dato personale. Puoi effettuare tutte le simulazioni che vuoi senza lasciare nessuna informazione di contatto.",
    },
    {
      q: "La simulazione lascia tracce in CRIF?",
      a: "No. Il calcolatore è uno strumento di simulazione puramente indicativo che non invia nessuna richiesta formale a nessun istituto finanziatore. Non lascia nessuna traccia nelle banche dati creditizie — né in CRIF né in Centrale Rischi. Solo la richiesta formale di finanziamento, avviata dopo la tua approvazione esplicita, viene registrata nei sistemi.",
    },
    {
      q: "Perché i valori del calcolatore differiscono da quelli di altri strumenti online?",
      a: "I calcolatori di cessione del quinto possono fornire risultati diversi in funzione del tasso di riferimento utilizzato, del metodo di calcolo dell'ammortamento e del modo in cui vengono trattati i costi accessori (polizza, istruttoria, imposta sostitutiva). Il calcolatore di CreditoClick utilizza tassi di riferimento aggiornati e include una stima dei costi accessori nel calcolo dell'importo netto erogabile. I valori sono comunque indicativi: il preventivo personalizzato è l'unico documento che riflette le condizioni reali.",
    },
    {
      q: "Posso salvare o condividere la simulazione?",
      a: "La simulazione può essere salvata o condivisa tramite la funzione di screenshot del tuo dispositivo. Non è previsto al momento un sistema di salvataggio o condivisione diretta dalla pagina. Se vuoi ricevere una stima formale da conservare, il modo più rapido è richiedere il preventivo personalizzato via WhatsApp.",
    },
    {
      q: "Il calcolatore funziona anche per la delega di pagamento o il rinnovo?",
      a: "Il calcolatore nella versione attuale è ottimizzato per la cessione del quinto standard. Per simulare una delega di pagamento (che si aggiunge a una cessione in corso) o un rinnovo (che dipende dal debito residuo del contratto attuale), il calcolo richiede variabili aggiuntive che solo il consulente può valutare correttamente. In questi casi, ti consigliamo di contattarci direttamente via WhatsApp.",
    },
    {
      q: "Ho fatto la simulazione ma voglio capire meglio i risultati: a chi mi rivolgo?",
      a: "Il nostro consulente è disponibile via WhatsApp per spiegare nel dettaglio i risultati della simulazione, rispondere a qualsiasi domanda e — se lo desideri — avviare la valutazione personalizzata del tuo profilo. Nessun impegno, nessun costo di consulenza.",
    },
  ],
  ctaDelega: "Scopri come funziona la delega di pagamento",
  ctaRinnovo: "Scopri come funziona il rinnovo della cessione del quinto",
} as const;

export const CRCQ_EEAT = {
  sectionTitle: "Sezione E-E-A-T / Note Metodologiche e Trasparenza",
  title: "Informazioni sulla metodologia del calcolatore e conformità normativa",
  paragraphs: [
    "I valori forniti dal calcolatore sono stime indicative elaborate sulla base di tassi medi di mercato aggiornati per categoria professionale. Non costituiscono un'offerta contrattuale, un preventivo formale o una promessa di finanziamento. Le condizioni reali applicabili al singolo richiedente vengono determinate esclusivamente nel preventivo personalizzato, rilasciato dopo l'analisi individuale del profilo da parte del consulente CreditoClick.",
    "CreditoClick opera in qualità di mediatore creditizio iscritto all'OAM (inserire numero) ai sensi del D.Lgs. 141/2010. Non eroga direttamente finanziamenti: i contratti vengono stipulati con istituti finanziatori autorizzati da Banca d'Italia. La cessione del quinto è disciplinata dal D.P.R. 180/1950 e dalla normativa sul credito al consumo (D.Lgs. 141/2010, Direttiva 2008/48/CE).",
    "Prima di qualsiasi firma contrattuale, il cliente riceve obbligatoriamente il modulo SECCI (Standard European Consumer Credit Information) contenente tutte le condizioni economiche del contratto. Il diritto di recesso può essere esercitato entro 14 giorni dalla stipula (art. 125-ter TUB). La consulenza preliminare è gratuita e senza impegno.",
    "I tassi comunicati a titolo indicativo nel calcolatore sono conformi alle soglie d'usura pubblicate trimestralmente da Banca d'Italia. CreditoClick opera esclusivamente con offerte conformi a queste soglie.",
  ],
} as const;

export const CRCQ_FINAL_CTA = {
  title: "Hai la tua stima. Adesso puoi fare la mossa giusta.",
  subtitle:
    "Il calcolatore ti ha dato un'idea dell'importo e della rata. Il passo successivo è scoprire le condizioni reali applicabili al tuo profilo — e questo richiede due minuti di conversazione con un consulente, non ore di pratiche burocratiche. Scrivici su WhatsApp: ti rispondiamo entro 24 ore lavorative con un preventivo personalizzato, gratuito, riservato e senza nessun impegno da parte tua.",
  primary: "Richiedi il tuo preventivo personalizzato su WhatsApp",
  secondary: "Torna al calcolatore",
} as const;
