import Link from "next/link";

export function LegalPreFooter() {
  return (
    <section className="border-t border-slate-200/60 bg-slate-50/70">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-12">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-8">
          <h3 className="text-base md:text-lg font-semibold text-text-primary">
            Disclaimer legale
          </h3>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary">
            <p>
              Il sito internet{" "}
              <Link href="https://www.creditoclick.it" className="font-medium text-brand-indigo hover:text-brand-indigo/80">
                www.creditoclick.it
              </Link>{" "}
              è gestito da FINNOVA S.R.L, società operante quale Agente in Attività Finanziaria, regolarmente iscritta
              nell&apos;elenco tenuto dall&apos;OAM (Organismo degli Agenti e dei Mediatori) al n. A17849, nonché iscritta, ove
              applicabile, al Registro degli Intermediari Assicurativi Numero Iscrizione E000811507. La società ha sede
              legale e operativa in Piazza Oronzo de Donno, 10 - Maglie, è iscritta presso il Registro delle Imprese di
              LECCE, REA n. 367208, Codice Fiscale 05441460754 e Partita IVA 05441460754. Il capitale sociale deliberato e
              interamente versato è pari a € 2000,00.
            </p>

            <p>
              FINNOVA S.R.L. svolge la propria attività in qualità di soggetto incaricato, in regime di monomandato, IBL
              Istituto Bancario del Lavoro S.p.A. con sede in Roma, Via Venti Settembre n. 30 - Iscritto all&apos;Albo delle
              Banche al n. 5578, Capogruppo del Gruppo Bancario IBL Banca (di seguito “Gruppo”), iscritta al n. 3263.1
              dell&apos;albo dei Gruppi Bancari - Codice Fiscale 00452550585 - P IVA Di Gruppo 14994571009 - iscritta al
              Registro Unico degli Intermediari di assicurazione alla sezione D al n. D000205521. L&apos;attività svolta da
              FINNOVA S.R.L. è limitata alla promozione e al collocamento di prodotti finanziari, tra cui, a titolo
              esemplificativo e non esaustivo: finanziamenti contro cessione del quinto dello stipendio o della pensione,
              delegazione di pagamento, anticipazione del trattamento di fine servizio e prestiti personali.
            </p>

            <p>
              La concessione dei finanziamenti è subordinata alla preventiva valutazione, da parte dell&apos;intermediario
              mandante IBL BANCA o di eventuali ulteriori banche o intermediari finanziari convenzionati, dei requisiti
              soggettivi ed oggettivi del richiedente, nonché del merito creditizio dello stesso, nel rispetto della
              normativa vigente. Qualora il finanziamento venga erogato da soggetti terzi rispetto al mandante, questi ultimi
              assumeranno, a tutti gli effetti, la qualifica di parte contrattuale e titolari esclusivi del rapporto,
              restando esclusa ogni responsabilità in capo a FINNOVA S.R.L. per le decisioni assunte in merito
              all&apos;istruttoria, alla concessione e alla gestione del finanziamento. Le informazioni presenti sul sito
              hanno carattere meramente informativo e non costituiscono in alcun modo
              offerta al pubblico ai sensi dell&apos;art. 1336 c.c., né impegno contrattuale.
            </p>
          </div>

          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 text-sm text-text-secondary w-fit">
              <p className="font-medium text-text-primary">Trasparenza Mandataria</p>
              <p className="mt-1 whitespace-nowrap">
                <Link href="https://www.iblbanca.it/trasparenza.html" className="text-brand-indigo hover:text-brand-indigo/80">
                  iblbanca.it/trasparenza.html
                </Link>
              </p>
            </div>

            <a href="https://www.organismo-am.it/b/0/05441460754/9904215b-8496-4d11-b9a3-893cc7b18c45/g.html">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.organismo-am.it/b/0/c1833ae86503807319f27b710394cfc6_sl_4GT0tTt8NzLj84_eq_.png"
                alt="Bollino OAM FINNOVA S.R.L."
                className="h-auto w-[96px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
