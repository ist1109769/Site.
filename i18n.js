const translations = {
  en: {
    // Header
    navProblem: "Problem",
    navHow: "How It Works",
    navValidation: "Validation",
    navTeam: "Team",
    navCta: "Get in Touch",
    // Hero
    heroBadge: "Técnico Lisboa · Engineering Capstone",
    heroTitle1: "IoT Cold Chain",
    heroTitle2: "Integrity Monitor",
    heroDesc: "Real-time temperature and humidity monitoring for cold chain. Eliminate blind spots, reduce spoilage, and cut operational costs with our sensor-to-cloud platform.",
    heroBtn1: "Explore the Architecture →",
    heroBtn2: "See Validation Results",
    statBattery: "Battery Life",
    statMonitoring: "Monitoring",
    statPartners: "Industry Partners",
    dashTemp: "Current Temp · Zone A",
    dashSafe: "Within Safe Range",
    dashHumidity: "Humidity",
    dashAlert: "⚠ Alert",
    // Problem vs Solution
    pvsBadge: "Why It Matters",
    pvsTitle: 'The <span class="text-alert-600">Problem</span> vs. Our <span class="text-brand-600">Solution</span>',
    probLabel: "The Problem",
    probT1: "Zero Real-Time Visibility",
    probD1: "Legacy loggers record data locally with no live alerts, leaving excursions undetected for hours — or days.",
    probT2: "Manual, Error-Prone Processes",
    probD2: "Staff must physically retrieve and download data from each device — slow, unreliable, and impossible to scale.",
    probT3: "Rigid, Proprietary Hardware",
    probD3: "Closed ecosystems lock operators into expensive vendor contracts with no customization or integration options.",
    probT4: "Massive Spoilage & Cost",
    probD4: "Missed temperature excursions result in entire shipments of perishable goods being written off — a direct hit to the bottom line.",
    solLabel: "Our Solution",
    solT1: "Continuous Live Monitoring",
    solD1: "Sensors stream data in real time to a cloud dashboard — excursions trigger instant alerts for immediate action.",
    solT2: "Fully Automated Pipeline",
    solD2: "Data flows automatically from sensor to cloud — no manual downloads, no human error, fully scalable.",
    solT3: "Open & Flexible Architecture",
    solD3: "Modular design with standard protocols (BLE, LPWAN) means easy integration and zero vendor lock-in.",
    solT4: "Waste Elimination & ROI",
    solD4: "Proactive alerts prevent spoilage before it happens, dramatically cutting product loss and operational expenses.",
    // Industries
    indBadge: "Cross-Industry Impact",
    indTitle: "Built for Critical Supply Chains",
    indName1: "Pharma & Labs",
    indDesc1: "Safeguard vaccines, biological samples, and reagents with precise, auditable temperature records that meet regulatory compliance.",
    indName2: "Food Logistics",
    indDesc2: "Protect fresh produce, dairy, and frozen goods across the entire distribution chain — from warehouse to supermarket shelf.",
    indName3: "Chemical Industry",
    indDesc3: "Monitor temperature-sensitive chemicals and hazardous materials throughout transport, ensuring safety standards and regulatory adherence.",
    // How It Works
    hiwBadge: "System Architecture",
    hiwTitle: "How It Works",
    hiwDesc: "A four-stage pipeline that transforms raw sensor readings into actionable intelligence — fully automated, end to end.",
    hiwName1: "Sense",
    hiwDesc1: "Temperature & humidity sensors continuously monitor environmental conditions inside refrigerated trucks in real time.",
    hiwName2: "Process",
    hiwDesc2: "An onboard microcontroller (MCU) collects readings, performs edge processing, and checks against critical threshold violations.",
    hiwName3: "Transmit",
    hiwDesc3: "Data is transmitted wirelessly via Bluetooth or LPWAN (low-power, long-range technology) to a centralized cloud platform.",
    hiwName4: "Alert",
    hiwDesc4: "The cloud platform analyzes incoming data on a live dashboard and automatically generates alerts for immediate intervention.",
    // Validation
    valBadge: "Real-World Validation",
    valTitle: "Proven with Physical Hardware Testing",
    valDesc: "Our system isn't just theoretical. Every component will be rigorously tested — first in the lab for calibration, then in the field with industry partners to guarantee real-world feasibility.",
    valM1: "Battery Autonomy",
    valM2: "Low Power Consumption",
    valM3: "Network Delivery Rate",
    valM4: "Sensor Accuracy",
    partTitle: "Our Industry Partners",
    partDesc: "Validated alongside leading institutions and enterprises in Portugal.",
    // Presentation
    presBadge: "Project Presentation",
    presTitle: "Our Presentation",
    presDesc: "Explore our full project presentation",
    presDownload: "Download PDF",
    // Team
    teamBadge: "The People Behind The Tech",
    teamTitle: "Meet the Team",
    teamDesc: "Engineering students from Técnico Lisboa, driven by innovation and real-world impact.",
    role1a: "Systems Architecture Lead", role1b: "Prototype Assembly Lead",
    role2a: "UI Development Lead", role2b: "Eletrocap Day Preparations Lead",
    role3a: "Back-end Lead", role3b: "Material Sourcing Lead",
    role4a: "Firmware Development Lead", role4b: "Project Testing Lead",
    role5a: "Web Development Lead", role5b: "Spokesperson",
    role6a: "Communications Systems Lead", role6b: "Public Relations Lead",
    mentorLabel: "Project Mentor",
    // Footer
    footerDesc: "An academic engineering project from Instituto Superior Técnico (Técnico Lisboa), building the future of cold chain integrity monitoring.",
    footerLinks: "Quick Links",
    footerLinkProb: "The Problem",
    footerLinkHow: "How It Works",
    footerLinkVal: "Validation",
    footerLinkTeam: "Team",
    footerContact: "Get in Touch",
    footerContactDesc: "Interested in our project or exploring collaboration opportunities? Get in touch with the team via our email: jose.p.guita@tecnico.ulisboa.pt",
    footerContactBtn: "Contact Us",
    footerCopy: "© 2026 ChainGuard — IoT Cold Chain Integrity Monitor. Técnico Lisboa.",
    footerTagline: "Built with precision. Validated with rigor."
  },
  pt: {
    navProblem: "Problema",
    navHow: "Como Funciona",
    navValidation: "Validação",
    navTeam: "Equipa",
    navCta: "Contacte-nos",
    heroBadge: "Técnico Lisboa · Projeto de Engenharia",
    heroTitle1: "Monitor IoT de",
    heroTitle2: "Cadeia de Frio",
    heroDesc: "Monitorização em tempo real de temperatura e humidade para logística da cadeia de frio. Elimina pontos cegos, reduz o desperdício e corte custos operacionais com a nossa plataforma sensor-to-cloud.",
    heroBtn1: "Explorar a Arquitetura →",
    heroBtn2: "Ver Resultados de Validação",
    statBattery: "Autonomia",
    statMonitoring: "Monitorização",
    statPartners: "Parceiros",
    dashTemp: "Temp. Atual · Zona A",
    dashSafe: "Dentro do Intervalo Seguro",
    dashHumidity: "Humidade",
    dashAlert: "⚠ Alerta",
    pvsBadge: "Porquê Este Projeto",
    pvsTitle: 'O <span class="text-alert-600">Problema</span> vs. A Nossa <span class="text-brand-600">Solução</span>',
    probLabel: "O Problema",
    probT1: "Zero Visibilidade em Tempo Real",
    probD1: "Os registadores antigos gravam dados localmente sem alertas em tempo real, deixando desvios sem deteção durante horas — ou dias.",
    probT2: "Processos Manuais e Propensos a Erros",
    probD2: "A equipa tem de recolher e descarregar dados fisicamente de cada dispositivo — lento, pouco fiável e impossível de escalar.",
    probT3: "Hardware Rígido e Proprietário",
    probD3: "Ecossistemas fechados prendem os operadores a contratos dispendiosos sem opções de personalização ou integração.",
    probT4: "Desperdício e Custos Elevados",
    probD4: "Desvios de temperatura não detetados resultam em carregamentos inteiros de produtos perecíveis desperdiçados — um impacto direto nos resultados.",
    solLabel: "A Nossa Solução",
    solT1: "Monitorização Contínua em Tempo Real",
    solD1: "Os sensores transmitem dados em tempo real para um painel na cloud — desvios acionam alertas instantâneos para ação imediata.",
    solT2: "Pipeline Totalmente Automatizado",
    solD2: "Os dados fluem automaticamente do sensor para a cloud — sem descarregamentos manuais, sem erro humano, totalmente escalável.",
    solT3: "Arquitetura Aberta e Flexível",
    solD3: "Design modular com protocolos padrão (BLE, LPWAN) significa integração fácil e zero dependência de fornecedor.",
    solT4: "Eliminação de Desperdício e ROI",
    solD4: "Alertas proativos previnem o desperdício antes que aconteça, reduzindo drasticamente as perdas de produto e despesas operacionais.",
    indBadge: "Impacto Multi-Setorial",
    indTitle: "Construído para Cadeias de Abastecimento Críticas",
    indName1: "Farmacêutica e Laboratórios",
    indDesc1: "Proteja vacinas, amostras biológicas e reagentes com registos de temperatura precisos que cumprem a conformidade regulamentar.",
    indName2: "Logística Alimentar",
    indDesc2: "Proteja produtos frescos, laticínios e congelados ao longo de toda a cadeia de distribuição — do armazém às prateleira do supermercado.",
    indName3: "Indústria Química",
    indDesc3: "Monitorize químicos sensíveis à temperatura e materiais perigosos durante o transporte, garantindo normas de segurança e conformidade regulamentar.",
    hiwBadge: "Arquitetura do Sistema",
    hiwTitle: "Como Funciona",
    hiwDesc: "Um pipeline de quatro etapas que transforma leituras brutas dos sensores em informação acionável — totalmente automatizado, de ponta a ponta.",
    hiwName1: "Detetar",
    hiwDesc1: "Sensores de temperatura e humidade monitorizam continuamente as condições ambientais dentro dos camiões frigoríficos em tempo real.",
    hiwName2: "Processar",
    hiwDesc2: "Um microcontrolador (MCU) a bordo recolhe leituras, efetua processamento local e verifica violações de limites críticos.",
    hiwName3: "Transmitir",
    hiwDesc3: "Os dados são transmitidos sem fios via Bluetooth ou LPWAN (tecnologia de baixo consumo e longo alcance) para uma plataforma cloud centralizada.",
    hiwName4: "Alertar",
    hiwDesc4: "A plataforma cloud analisa os dados recebidos num painel em tempo real e gera automaticamente alertas para intervenção imediata.",
    valBadge: "Validação no Mundo Real",
    valTitle: "Comprovado com Testes de Hardware Físico",
    valDesc: "O nosso sistema não é apenas teórico. Cada componente será rigorosamente testado — primeiro em laboratório para calibração, depois no terreno com parceiros industriais para garantir a viabilidade real.",
    valM1: "Autonomia da Bateria",
    valM2: "Baixo Consumo Energético",
    valM3: "Taxa de Entrega de Rede",
    valM4: "Precisão dos Sensores",
    partTitle: "Os Nossos Parceiros",
    partDesc: "Validado em conjunto com instituições e empresas portuguesas",
    presBadge: "Apresentação do Projeto",
    presTitle: "A Nossa Apresentação",
    presDesc: "Explore a apresentação completa do nosso projeto",
    presDownload: "Descarregar PDF",
    teamBadge: "As Pessoas por Detrás da Tecnologia",
    teamTitle: "Conheça a Equipa",
    teamDesc: "Estudantes de engenharia do Técnico Lisboa, motivados pela inovação e impacto no mundo real.",
    role1a: "Líder de Arquitetura de Sistemas", role1b: "Líder de Montagem de Protótipo",
    role2a: "Líder de Desenvolvimento UI", role2b: "Líder de Preparação do Dia Eletrocap",
    role3a: "Líder de Back-end", role3b: "Líder de Aquisição de Material",
    role4a: "Líder de Desenvolvimento de Firmware", role4b: "Líder de Testes do Projeto",
    role5a: "Líder de Desenvolvimento Web", role5b: "Porta-voz",
    role6a: "Líder de Sistemas de Comunicação", role6b: "Líder de Relações Públicas",
    mentorLabel: "Orientador do Projeto",
    footerDesc: "Um projeto académico de engenharia do Instituto Superior Técnico (Técnico Lisboa), a construir o futuro da monitorização de integridade da cadeia de frio.",
    footerLinks: "Links Rápidos",
    footerLinkProb: "O Problema",
    footerLinkHow: "Como Funciona",
    footerLinkVal: "Validação",
    footerLinkTeam: "Equipa",
    footerContact: "Contacte-nos",
    footerContactDesc: "Interessado no nosso projeto ou em explorar oportunidades de colaboração? Entre em contacto com a equipa através do nosso email: jose.p.guita@tecnico.ulisboa.pt",
    footerContactBtn: "Contactar",
    footerCopy: "© 2026 ChainGuard — Monitor IoT de Integridade da Cadeia de Frio. Técnico Lisboa.",
    footerTagline: "Construído com precisão. Validado com rigor."
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';

  // Update toggle button
  document.getElementById('langToggle').innerHTML = lang === 'en'
    ? '<img src="data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="480" fill="#006600"/><rect x="0" width="256" height="480" fill="#006600"/><rect x="256" width="384" height="480" fill="#FF0000"/><circle cx="256" cy="240" r="80" fill="#FFCC00" stroke="#000" stroke-width="1"/></svg>') + '" class="w-5 h-3.5 rounded-sm object-cover" alt="PT"/> PT'
    : '<img src="data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="480" fill="#012169"/><path d="m0 0 640 480M640 0 0 480" stroke="#fff" stroke-width="60"/><path d="m0 0 640 480M640 0 0 480" stroke="#C8102E" stroke-width="40"/><path d="M320 0v480M0 240h640" stroke="#fff" stroke-width="100"/><path d="M320 0v480M0 240h640" stroke="#C8102E" stroke-width="60"/></svg>') + '" class="w-5 h-3.5 rounded-sm object-cover" alt="EN"/> EN';

  // Map data-i18n keys
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (key === 'pvsTitle') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
}

function toggleLang() {
  setLang(currentLang === 'en' ? 'pt' : 'en');
}

// Apply translations on page load
document.addEventListener('DOMContentLoaded', () => setLang(currentLang));
