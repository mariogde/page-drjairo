import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import foto1 from "./dr-jairo-1.jpeg";
import foto2 from "./dr-jairo-2.jpeg";
import foto3 from "./dr-jairo-3.jpeg";

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`reveal ${inView ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const especialidades = [
  { icon: "🎥", title: "Videolaparoscopia", sub: "Cirurgia Minimamente Invasiva",
    desc: "Técnica moderna realizada por pequenas incisões, garantindo procedimentos seguros, menor desconforto pós-operatório, cicatrizes reduzidas e retorno rápido às atividades." },
  { icon: "🩺", title: "Cirurgia do Aparelho Digestivo", sub: "Trato Gastrointestinal",
    desc: "Avaliação, diagnóstico e tratamento cirúrgico de afecções do estômago, vesícula biliar, vias biliares, apêndice e intestinos." },
  { icon: "⚕️", title: "Cirurgia Geral", sub: "Procedimentos Eletivos",
    desc: "Avaliação e realização de procedimentos cirúrgicos eletivos para diversas condições abdominais, com rigoroso suporte pré e pós-operatório." },
  { icon: "🚨", title: "Cirurgia do Trauma", sub: "Urgências e Emergências",
    desc: "Ampla vivência em urgências cirúrgicas com capacitação ATLS, atuando como cirurgião concursado de emergência em múltiplas instituições." },
  { icon: "👨‍⚕️", title: "Clínica Médica", sub: "Medicina de Família e Comunidade",
    desc: "Atendimento clínico integral voltado à prevenção, diagnóstico precoce e manejo humanizado de condições de saúde gerais." },
];

const diferenciais = [
  { num: "25+", label: "Anos de experiência" },
  { num: "TCBC", label: "Membro Titular do CBC" },
  { num: "RQE", label: "2005 — Especialista Registrado" },
  { num: "ATLS", label: "Certificação em Trauma" },
];

const hospitais = [
  { sigla: "HRC", nome: "Hospital Regional do Cariri", local: "Juazeiro do Norte / CE",
    papel: "Coordenador e Supervisor da Residência Médica em Cirurgia Geral Avançada" },
  { sigla: "HGBS", nome: "Hospital Geral de Brejo Santo", local: "Brejo Santo / CE",
    papel: "Cirurgião Geral e Preceptor de Cirurgia — parceria UFCA" },
  { sigla: "HRIS", nome: "Hospital Regional Inácio de Sá", local: "SESA/PE",
    papel: "Médico Cirurgião Geral de Emergência Concursado" },
];

const WhatsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Dr. Jairo Frutuoso | Cirurgia Geral & Videolaparoscopia";
  }, []);

  return (
    <div className="app">

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav__brand">
          <span className="nav__title">Dr. Jairo Frutuoso</span>
          <span className="nav__sub">Cirurgia Geral & Videolaparoscopia</span>
        </div>
        <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#especialidades" onClick={() => setMenuOpen(false)}>Especialidades</a>
          <a href="#atuacao" onClick={() => setMenuOpen(false)}>Atuação</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </div>
        <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="inicio">
        <div className="hero__content">
          <div className="hero__text">
            <Reveal>
              <div className="hero__badges">
                <span className="badge">CRM 7296</span>
                <span className="badge">RQE 2005</span>
                <span className="badge badge--gold">TCBC — Membro Titular do CBC</span>
              </div>
            </Reveal>
            <Reveal delay={100}><h1 className="hero__name">Dr. Jairo Frutuoso</h1></Reveal>
            <Reveal delay={200}><p className="hero__specialty">Cirurgia Geral & Videolaparoscopia</p></Reveal>
            <Reveal delay={300}>
              <p className="hero__desc">
                Especialista em Cirurgia Geral e do Aparelho Digestivo. Mais de 25 anos dedicados
                à alta precisão cirúrgica, ao ensino médico e à sua saúde.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="hero__actions">
                <a href="https://wa.me/5588997183111" target="_blank" rel="noopener noreferrer"
                  className="btn btn--primary">
                  <WhatsIcon /> Clínica São Lucas -- Brejo Santo - CE
                </a>
                <a href="https://wa.me/558888222020" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                  <WhatsIcon /> Clínica Endodigest -- Juazeiro do Norte - CE
                </a>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <a href="https://instagram.com/drjairofrutuoso" target="_blank"
                rel="noopener noreferrer" className="hero__instagram">
                <IgIcon /> @drjairofrutuoso
              </a>
            </Reveal>
          </div>
          <Reveal delay={200} className="hero__photo-wrap">
            <div className="hero__photo-frame">
              <img src={foto3} alt="Dr. Jairo Frutuoso" className="hero__photo" />
              <div className="hero__photo-badge">
                <span>+25 anos</span>
                <span>de experiência</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="hero__scroll">↓</div>
      </section>

      {/* ── NÚMEROS ── */}
      <section className="numbers">
        <div className="numbers__grid">
          {diferenciais.map((d, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="number-card">
                <div className="number-card__num">{d.num}</div>
                <div className="number-card__label">{d.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section className="section sobre" id="sobre">
        <div className="sobre__grid">
          <div className="sobre__fotos">
            <Reveal>
              <div className="sobre__foto sobre__foto--main">
                <img src={foto2} alt="Dr. Jairo com certificado CBC" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="sobre__foto sobre__foto--sec">
                <img src={foto1} alt="Dr. Jairo no consultório" />
              </div>
            </Reveal>
          </div>
          <div className="sobre__text">
            <Reveal><span className="eyebrow">Sobre o Médico</span></Reveal>
            <Reveal delay={100}>
              <h2 className="section__title">Excelência Médica, Rigor Acadêmico e Cuidado Humanizado</h2>
            </Reveal>
            <Reveal delay={200}>
              <p>Graduado em Medicina pela <strong>Universidade Federal da Paraíba (UFPB)</strong> em 1996, o Dr. Jairo Fernandes Frutuoso conta com mais de duas décadas de atuação focada no diagnóstico e tratamento de condições cirúrgicas e digestivas.</p>
            </Reveal>
            <Reveal delay={250}>
              <p>Realizou Residência Médica em Cirurgia Geral no <strong>Hospital Universitário Alcides Carneiro (HUAC/UFPB)</strong> entre 1997 e 1999, com bolsa do CNPq. É <strong>Membro Titular do Colégio Brasileiro de Cirurgiões (TCBC)</strong> e possui Título de Especialista emitido pelo CBC/AMB.</p>
            </Reveal>
            <Reveal delay={300}>
              <p>Possui forte presença acadêmica como <strong>Coordenador e Supervisor da Residência Médica em Cirurgia Geral Avançada</strong> do Hospital Regional do Cariri, exercendo preceptoria no IDOMED, ISGH, UFCA e avaliação de bancas na ESP-CE.</p>
            </Reveal>
            <Reveal delay={350}>
              <div className="sobre__tags">
                <span>Graduação UFPB — 1996</span>
                <span>Residência HUAC/UFPB — 1997–1999</span>
                <span>Bolsista CNPq</span>
                <span>TCBC — Membro Titular</span>
                <span>RQE 2005</span>
                <span>ATLS Certificado</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section className="section especialidades" id="especialidades">
        <div className="especialidades__inner">
          <Reveal><span className="eyebrow">Áreas de Atuação</span></Reveal>
          <Reveal delay={100}>
            <h2 className="section__title section__title--center">Especialidades & Procedimentos</h2>
          </Reveal>
          <div className="esp__wrapper">
            {/* Linha 1: 3 cards iguais */}
            <div className="esp__row esp__row--3">
              {especialidades.slice(0, 3).map((e, i) => (
                <Reveal key={i} delay={i * 80} className="esp__col">
                  <div className="esp-card">
                    <div className="esp-card__icon">{e.icon}</div>
                    <h3 className="esp-card__title">{e.title}</h3>
                    <p className="esp-card__sub">{e.sub}</p>
                    <p className="esp-card__desc">{e.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            {/* Linha 2: 2 cards iguais */}
            <div className="esp__row esp__row--2">
              {especialidades.slice(3, 5).map((e, i) => (
                <Reveal key={i} delay={i * 80} className="esp__col">
                  <div className="esp-card esp-card--last">
                    <div className="esp-card__icon">{e.icon}</div>
                    <h3 className="esp-card__title">{e.title}</h3>
                    <p className="esp-card__sub">{e.sub}</p>
                    <p className="esp-card__desc">{e.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ATUAÇÃO ── */}
      <section className="section atuacao" id="atuacao">
        <div className="atuacao__inner">
          <Reveal><span className="eyebrow eyebrow--light">Onde Atua</span></Reveal>
          <Reveal delay={100}>
            <h2 className="section__title section__title--center section__title--light">
              Estrutura de Atendimento
            </h2>
          </Reveal>
          <div className="clinicas__grid">
            <Reveal delay={150}>
              <div className="clinica-card">
                <div className="clinica-card__badge">Consultas Privadas</div>
                <h3>🏢 Clínica São Lucas</h3>
                <p>R. Luiz Gonzaga Junior, 348 - Centro, Brejo Santo - CE</p>
                <div className="clinica-card__contacts">
                  <a href="tel:8821381992">📞 (88) 2138-1992</a>
                  <a href="https://wa.me/5588997183111" target="_blank" rel="noopener noreferrer">
                    📱 (88) 99718-3111 — WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="clinica-card">
                <div className="clinica-card__badge">Consultas Privadas</div>
                <h3>🔬 Endodigest</h3>
                <p>Av. Leão Sampaio, 3095 - Lagoa Seca, Juazeiro do Norte - CE</p>
                <div className="clinica-card__contacts">
                  <a href="tel:8831151010">📞 (88) 3115-1010</a>
                  <a
                    href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F558888222020%3Ftext%3DQuero%2Bagendar%2Buma%2Bconsulta%2Bcom%2BDr.%2BJairo%2BFrutuoso%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeXkmPBSVBploKM59eASZQTz8bJs542UuXqZ56xalUdbS99X2GM1os5l374Wg_aem_EZ1MGAq2_E4eOXZ46QYxSA&e=AUB01PDRm2HMP9qv1s031owI6V3X39r3wVO1Foy1T-MrRMc8XgxOCw2tzarq7id7dPXbitbDFwsgeoe_hpSabn0n-lHTPjb-P0soFArz_2MS5M6A3JswYVwg5UX-65nJzCejFKOfjou5R2QZOdzFICQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📱 (88) 98822-2020 — WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <h3 className="atuacao__subtitle">🏥 Atuação Hospitalar & Preceptoria</h3>
          </Reveal>
          <div className="hospitais__grid">
            {hospitais.map((h, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="hospital-card">
                  <div className="hospital-card__sigla">{h.sigla}</div>
                  <div className="hospital-card__info">
                    <strong>{h.nome}</strong>
                    <span>{h.local}</span>
                    <p>{h.papel}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta" id="contato">
        <div className="cta__inner">
          <Reveal><span className="eyebrow">Agende sua Consulta</span></Reveal>
          <Reveal delay={100}>
            <h2 className="cta__title">Sua saúde em<br /><em>especializadas mãos</em></h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="cta__desc">
              Precisa de uma avaliação cirúrgica ou deseja agendar uma consulta com especialista?
              Entre em contato e marque seu atendimento na Clínica São Lucas, em Brejo Santo — CE.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="cta__actions">
              <a href="https://wa.me/5588997183111" target="_blank" rel="noopener noreferrer"
                className="btn btn--primary btn--lg">
                <WhatsIcon /> Clínica São Lucas — WhatsApp
              </a>
              <a href="https://api.whatsapp.com/send/?phone=558888222020&text=Quero+agendar+uma+consulta+com+Dr.+Jairo+Frutuoso&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
                <WhatsIcon /> Clínica Endodigest — WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <strong>Dr. Jairo Frutuoso</strong>
            <span>CRM 7296 | RQE 2005 — Cirurgia Geral & Videolaparoscopia</span>
            <span>Membro Titular do Colégio Brasileiro de Cirurgiões (TCBC)</span>
          </div>
          <div className="footer__links">
            <a href="https://instagram.com/drjairofrutuoso" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F558888222020%3Ftext%3DQuero%2Bagendar%2Buma%2Bconsulta%2Bcom%2BDr.%2BJairo%2BFrutuoso%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeXkmPBSVBploKM59eASZQTz8bJs542UuXqZ56xalUdbS99X2GM1os5l374Wg_aem_EZ1MGAq2_E4eOXZ46QYxSA&e=AUB01PDRm2HMP9qv1s031owI6V3X39r3wVO1Foy1T-MrRMc8XgxOCw2tzarq7id7dPXbitbDFwsgeoe_hpSabn0n-lHTPjb-P0soFArz_2MS5M6A3JswYVwg5UX-65nJzCejFKOfjou5R2QZOdzFICQ" target="_blank" rel="noopener noreferrer">Clinica Endodigest</a>
            <a href="https://wa.me/5588997183111" target="_blank" rel="noopener noreferrer">Clínica São Lucas</a>
          </div>
        </div>
        <div className="footer__copy">
          © 2025 Dr. Jairo Frutuoso — Todos os direitos reservados.
        </div>
      </footer>

    </div>
  );
}