// Content database for all perspectives and connections
const content = {
    circles: {
        tre: {
            klient: {
                title: "TRE - Tension & Trauma Releasing Exercises",
                text: "TRE er en simpel metode hvor du gennem 7 øvelser aktiverer kroppens naturlige rystemekanisme. Når du tremorer (ryster), hjælper det din krop med at slippe spændinger og komme i balance. Det er som når dyr ryster efter en farlig situation - det hjælper nervesystemet med at vende tilbage til ro."
            },
            fagfolk: {
                title: "TRE - Klinisk Perspektiv",
                text: "TRE aktiverer neurogene tremor gennem systematisk muskeltrætning, primært i psoas og ben-muskulatur. Metoden faciliterer autonomt nervesystem-regulering uden at kræve narrativ processing af trauma. Effektiv som standalone eller integreret i eksisterende terapeutisk praksis."
            },
            videnskab: {
                title: "TRE - Neurobiologisk Mekanisme",
                text: "TRE inducerer neurogen tremor via muskel-spindle aktivering og proprioceptiv feedback. Tremor faciliterer polyvagal regulering, completion af incomplete defensive responses, og reorganisering af sensomotoriske mønstre associeret med traumatisk stress. Dokumenteret effekt på HPA-akse og autonomt nervesystem."
            }
        },
        polyvagal: {
            klient: {
                title: "Polyvagal Teori - Dit Nervesystem",
                text: "Din krop har tre forskellige 'gear': Ro og fordøjelse (grøn), alarm og kamp/flugt (gul), og nedlukning (rød). Når du tremorer, hjælper det din krop med at skifte fra alarm eller nedlukning tilbage til det grønne gear, hvor du kan føle dig sikker og forbundet."
            },
            fagfolk: {
                title: "Polyvagal Teori - Autonomt Nervesystem",
                text: "Stephen Porges' teori beskriver tre fylogenetiske lag: ventral vagal (social engagement), sympatisk (mobilisering), dorsal vagal (immobilisering). TRE faciliterer bevægelse fra sympatisk hyperarousal eller dorsal shutdown tilbage til ventral vagal regulering gennem neuroceptive signaler om sikkerhed."
            },
            videnskab: {
                title: "Polyvagal Teori - Neurofysiologi",
                text: "Vagalt modulerede kardiale og respiratoriske mønstre reflekterer autonomt nervesystem-tilstand. Tremor aktiverer afferent vagal signalering, hvilket nedregulerer amygdala-respons og faciliterer præfrontal korteks engagement. Respiratory sinus arrhythmia (RSA) forbedres, indikerende for øget vagal tone."
            }
        },
        narrative: {
            klient: {
                title: "Narrativ - Din Historie",
                text: "Den historie du fortæller om dig selv - 'jeg er altid anspændt', 'jeg kan ikke slappe af' - sidder i din krop. Når kroppen ændrer sig gennem tremor, kan din historie om dig selv også ændre sig. Du opdager: 'Jeg KAN faktisk slappe af', 'Min krop VED hvordan'."
            },
            fagfolk: {
                title: "Narrativ Psykologi - Identitetstransformation",
                text: "Autobiografisk narrativ er embodied og tilstandsafhængig. Når autonomt nervesystem reguleres (polyvagal shift), åbnes nye narrative muligheder. TRE faciliterer somatisk re-authoring uden eksplicit verbal processing - kroppen 'fortæller' en ny historie gennem direkte erfaring."
            },
            videnskab: {
                title: "Narrativ Neuroscience - Neural Reorganisering",
                text: "Autobiografisk hukommelse konstrueres gennem hippocampus-neocortex interaktion, moduleret af amygdala og autonomt nervesystem-tilstand. State-dependent retrieval betyder at narrativ tilgængelighed ændres med fysiologisk tilstand. TRE-induceret regulering faciliterer reconsolidation af traumatisk narrativ."
            }
        },
        enactivisme: {
            klient: {
                title: "Enactivisme - Aktiv Healing",
                text: "Din healing sker ikke ved at 'grave noget gammelt op' eller 'få noget ud'. I stedet SKABER du aktivt noget nyt hver gang du tremorer. Din krop lærer - gennem at gøre det - at den kan regulere sig selv. Det er som at lære at cykle: kroppen forstår gennem handling."
            },
            fagfolk: {
                title: "Enactivisme - Autopoietisk Reorganisering",
                text: "Varelas enactive cognition: perception og handling er uadskillige. TRE er ikke ekstraktion af 'lagret' materiale men aktiv enactment af ny sensomotorisk organisation. Tremor er autopoietisk proces - selvskabende, ikke symptom-reducerende. Healing emergerer gennem embodied handling."
            },
            videnskab: {
                title: "Enactivisme - Dynamiske Systemer",
                text: "Autopoietisk teori beskriver levende systemer som selvorganiserende, operationelt lukkede netværk. TRE faciliterer emergent reorganisering af sensomotoriske attraktorer gennem perturbation af eksisterende mønstre. Tremor er ikke discharge men kontinuerlig structural coupling mellem organisme og miljø."
            }
        },
        levine: {
            klient: {
                title: "Somatic Experiencing - Fuldførelse",
                text: "Når noget skræmmende sker, forbereder kroppen sig på at kæmpe eller flygte - men ofte blev det afbrudt. Den energi 'sidder fast'. Tremor hjælper kroppen med at fuldføre den bevægelse den skulle have lavet dengang. Det er som at færdiggøre en sætning der blev afbrudt midt i."
            },
            fagfolk: {
                title: "Somatic Experiencing - Trauma-completion",
                text: "Peter Levines SE model: trauma opstår når defensive orienting responses forbliver incomplete. TRE faciliterer discharge af 'frozen' survival energy gennem neurogen tremor. Titration og pendulering mellem aktivering og ro reorganiserer sensomotoriske mønstre associeret med traumatisk immobilisering."
            },
            videnskab: {
                title: "Somatic Experiencing - Neurobiologisk Completion",
                text: "Incomplete defensive responses vedligeholder sympatisk hyperarousal eller dorsal immobilization via brainstem reflexer. TRE aktiverer completion af motoriske programmmer gennem periaqueductal gray (PAG) og central pattern generators. Tremor faciliterer shift fra defensive til exploratory circuits."
            }
        },
        reich: {
            klient: {
                title: "Bioenergetik - Muskulært Panser",
                text: "Når livet er hårdt, spænder vi kroppen som beskyttelse - og glemmer at slippe igen. Det bliver til mønstre i musklerne ('panser') der holder følelser og energi tilbage. Tremor hjælper musklerne med at slippe de gamle mønstre, så energi og følelser kan bevæge sig frit igen."
            },
            fagfolk: {
                title: "Bioenergetik - Character Armor",
                text: "Reich og Lowens teori om character armor: kroniske muskelspaendinger embodier psykologisk forsvar. TRE faciliterer mildnelse af armor gennem neurogen tremor, hvilket restaurerer energetisk flow og affektiv tilgængelighed. Komplementerer verbal psykoterapi ved at arbejde gennem kroppen."
            },
            videnskab: {
                title: "Bioenergetik - Fascial og Muskulær Reorganisering",
                text: "Kronisk muskelspaending modificerer fascial viscoelastiske egenskaber og proprioceptiv signalering. TRE-induceret tremor reorganiserer myofasciale holding patterns gennem rhythmisk belastning og mekanisk stimulation. Ændrer både strukturelle og neurale komponenter af 'armoring'."
            }
        },
        psykologi: {
            klient: {
                title: "Klinisk Psykologi - Sikkerhed og Relation",
                text: "For at din krop kan slippe må du føle dig sikker. En terapeut eller guide skaber det trygge rum hvor tremor kan ske. Det handler ikke kun om teknikken - men også om at du føler dig set, hørt og accepteret. Healing sker i relationer, ikke i isolation."
            },
            fagfolk: {
                title: "Klinisk Psykologi - Terapeutisk Relation",
                text: "TRE effektivitet afhænger af terapeutisk alliance og co-regulering. Providers embodied tilstedeværelse faciliterer klientens neuroceptive oplevelse af sikkerhed (polyvagal). Integration af somatisk arbejde med psykologisk forståelse af attachment, dissociation og titration. Relationel neurobiologi i praksis."
            },
            videnskab: {
                title: "Klinisk Psykologi - Interpersonal Neurobiology",
                text: "Terapeutisk relation modificerer klientens autonomt nervesystem via social engagement system (ventral vagal). Terapeuts egen regulering co-regulerer klient gennem mirror neurons og interbrain synchrony. TRE effectiveness medieres af attachment security og therapeutic alliance quality."
            }
        }
    },
    connections: {
        'tre-polyvagal': {
            klient: "Tremor hjælper dit nervesystem med at skifte fra alarm eller nedlukning tilbage til ro og sikkerhed.",
            fagfolk: "TRE faciliterer polyvagal regulering fra sympatisk/dorsal tilstand til ventral vagal sikkerhed.",
            videnskab: "Neurogen tremor modulerer vagal efferens og nedregulerer amygdala-respons via brainstem circuits."
        },
        'tre-narrative': {
            klient: "Når din krop tremorer og finder ro, kan du fortælle en ny historie om dig selv - 'jeg er sikker'.",
            fagfolk: "Somatisk transformation gennem TRE faciliterer narrativ re-authoring uden verbal processing.",
            videnskab: "TRE-induceret autonomt nervesystem-regulering modificerer state-dependent narrative retrieval og reconsolidation."
        },
        'tre-enactivisme': {
            klient: "Hver gang du tremorer, skaber din krop aktivt ny viden om hvordan den kan regulere sig selv.",
            fagfolk: "TRE er enactment af ny sensomotorisk organisation, ikke ekstraktion af 'lagret' materiale.",
            videnskab: "Tremor faciliterer autopoietisk reorganisering gennem perturbation af eksisterende sensomotoriske attraktorer."
        },
        'tre-levine': {
            klient: "Tremor hjælper kroppen med at fuldføre den kamp- eller flugt-reaktion der blev afbrudt under stress.",
            fagfolk: "TRE faciliterer completion af incomplete defensive responses via neurogen discharge.",
            videnskab: "Tremor aktiverer completion af motoriske programmer gennem PAG og central pattern generators."
        },
        'tre-reich': {
            klient: "Tremor hjælper de spændte muskler med at slippe gamle beskyttelsesmønstre, så energi kan flyde.",
            fagfolk: "TRE mildner character armor gennem neurogen tremor, restaurerer energetisk flow.",
            videnskab: "Tremor reorganiserer myofasciale holding patterns gennem rhythmisk mekanisk stimulation."
        },
        'tre-psykologi': {
            klient: "Med en tryg terapeut kan din krop turde tremor - sikkerhed i relationen muliggør healing i kroppen.",
            fagfolk: "Terapeutisk alliance og co-regulering faciliterer TRE's effectiveness gennem neuroceptiv sikkerhed.",
            videnskab: "Providers regulerede tilstand co-regulerer klient via social engagement system og interbrain synchrony."
        },
        'polyvagal-narrative': {
            klient: "Når nervesystemet skifter til sikker tilstand, bliver nye måder at tænke om dig selv mulige.",
            fagfolk: "Autonomt nervesystem-tilstand (polyvagal) påvirker hvilken narrativ der kan konstrueres og tilgås.",
            videnskab: "Autonomt nervesystem-tilstand modulerer hippocampal consolidation og præfrontal narrative integration."
        },
        'polyvagal-enactivisme': {
            klient: "Din oplevelse af sikkerhed eller fare skabes aktivt af dig - ikke bare registreret passivt.",
            fagfolk: "Neuroception (Porges) er enactive perception - aktiv bringing-forth af betydning, ikke passiv detektion.",
            videnskab: "Polyvagal neuroception demonstrerer enactive princip: perception og response co-emerge gennem embodied evaluation."
        },
        'polyvagal-levine': {
            klient: "Systemet skal først være i sikker tilstand før den afbrudte stress-reaktion kan fuldføres.",
            fagfolk: "Ventral vagal aktivering er forudsætning for sikker completion af incomplete defensive responses (Levine).",
            videnskab: "Polyvagal state hierarchy: freeze-discharge sekvens kræver sufficient ventral vagal tone for sikker mobilisering."
        },
        'polyvagal-reich': {
            klient: "Muskulært panser er kroppens måde at blive i alarm-tilstand - tremor hjælper tilbage til ro.",
            fagfolk: "Character armor (Reich) manifesterer kronisk sympatisk aktivering eller dorsal immobilisering (Porges).",
            videnskab: "Reichian armor er somatisk manifestation af dysreguleret autonomt nervesystem - myofascial embodiment af defensive states."
        },
        'polyvagal-psykologi': {
            klient: "En rolig terapeut hjælper dit nervesystem med at finde ro - sikkerhed smitter relationelt.",
            fagfolk: "Terapeutens ventrale vagale tilstand co-regulerer klientens nervesystem gennem social engagement.",
            videnskab: "Provider's autonomic state influences client's via ventral vagal pathways - interpersonal neurobiological synchrony."
        },
        'narrative-enactivisme': {
            klient: "Din livshistorie skabes ikke kun i hovedet men gennem hvordan du lever og handler i verden.",
            fagfolk: "Narrativ identitet er autopoietisk - kontinuerligt enacted gennem lived experience, ikke statisk lagret.",
            videnskab: "Narrative self emergerer gennem sensomotorisk enactment - autobiographic memory er dynamisk reconstruction, ikke retrieval."
        },
        'narrative-levine': {
            klient: "Når kroppen fuldender stress-reaktionen, kan historien om 'hvad der skete' også ændre sig.",
            fagfolk: "Completion af traumatisk respons (Levine) åbner for narrativ transformation - historien kan bevæge sig videre.",
            videnskab: "Somatic completion modificerer episodic memory encoding - traumatic narrative loses its 'frozen' quality gennem discharge."
        },
        'narrative-reich': {
            klient: "Hvordan du holder kroppen fortæller historien om 'hvem du må være' - tremor ændrer begge dele.",
            fagfolk: "Character armor (Reich) embodier narrativ identitet - muskulær holding bærer implicit selv-historie.",
            videnskab: "Myofascial patterns encode implicit autobiographical memory - somatic armor IS embodied narrative structure."
        },
        'narrative-psykologi': {
            klient: "En god terapeut hjælper dig med at fortælle din historie på nye måder - du er medforfatter.",
            fagfolk: "Terapeutisk relation faciliterer narrativ re-authoring - terapeut holder rum for transformativ storytelling.",
            videnskab: "Therapeutic narrative co-construction modulates autobiographical memory reconsolidation through social engagement."
        },
        'enactivisme-levine': {
            klient: "Kroppen lærer gennem at gøre - ikke ved at tænke over. Tremor ER læringen, ikke forberedelsen.",
            fagfolk: "Levines pendulering er cirkulær enactment - ikke lineær discharge men kontinuerlig reorganisering.",
            videnskab: "SE completion demonstrerer enactive principle: perception-action loops reorganize through embodied engagement, not information-processing."
        },
        'enactivisme-reich': {
            klient: "Panseret er ikke noget 'lagret' - det er noget du aktivt gør hver dag. Tremor lærer nye mønstre.",
            fagfolk: "Character armor er ikke statisk struktur men kontinuerlig autopoietisk 'holding pattern' - aktiv selvbegrænsning.",
            videnskab: "Reichian armor er dynamisk process, ikke static structure - autopoietic maintenance af defensive sensomotorisk organization."
        },
        'enactivisme-psykologi': {
            klient: "Terapeut og klient skaber sammen et rum hvor ny måde at være kan opstå - ikke overførsel men fællesskabelse.",
            fagfolk: "Healing er co-enactment - terapeut og klient bringer sammen emergent organisation frem, ikke transmission.",
            videnskab: "Therapeutic dyad constitutes autopoietic system - healing emerges through structural coupling, not unidirectional intervention."
        },
        'levine-reich': {
            klient: "Den afbrudte flugt-reaktion og det muskulære panser er to sider af samme sag - begge holder fast.",
            fagfolk: "Levines incomplete response og Reichs frozen energy beskriver samme fænomen - sympatisk mobilisering uden discharge.",
            videnskab: "SE incompletion og bioenergetisk armor begge refererer til sustained brainstem defensive activation uden resolution."
        },
        'levine-psykologi': {
            klient: "Kun i et trygt rum kan kroppen turde fuldføre den stress-reaktion den holder tilbage - relation muliggør frigivelse.",
            fagfolk: "Titration og pendulering (Levine) kræver terapeutisk co-regulering - sikker base for at bevæge gennem activation.",
            videnskab: "SE methodology requires therapeutic containment - pendulation between activation/deactivation necessitates relational safety."
        },
        'reich-psykologi': {
            klient: "Terapeuten skal selv være afslappet og til stede i kroppen for at hjælpe dig - energi resonerer.",
            fagfolk: "Terapeutens embodiment påvirker klientens - bioenergetisk resonans er ikke metafor men faktisk co-regulering.",
            videnskab: "Provider's somatic state influences client via mirror neurons og autonomic synchrony - embodied countertransference."
        }
    }
};

// State management
let currentMode = 'klient';
let activeElement = null;
let tourActive = false;
let tourStep = 0;

// Tour sequence
const tourSequence = [
    { type: 'circle', id: 'tre', duration: 3000 },
    { type: 'circle', id: 'polyvagal', duration: 3000 },
    { type: 'connection', from: 'tre', to: 'polyvagal', duration: 2500 },
    { type: 'circle', id: 'narrative', duration: 3000 },
    { type: 'connection', from: 'polyvagal', to: 'narrative', duration: 2500 },
    { type: 'circle', id: 'enactivisme', duration: 3000 },
    { type: 'circle', id: 'levine', duration: 3000 },
    { type: 'circle', id: 'reich', duration: 3000 },
    { type: 'circle', id: 'psykologi', duration: 3000 }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupModeButtons();
    setupCircleClicks();
    setupConnectionClicks();
    setupTourButton();
});

// Mode selector
function setupModeButtons() {
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMode = btn.dataset.mode;
            if (activeElement) {
                updateInfoPanel(activeElement);
            }
        });
    });
}

// Circle interactions
function setupCircleClicks() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            if (tourActive) return;
            
            const id = circle.dataset.id;
            clearActive();
            circle.classList.add('active');
            activeElement = { type: 'circle', id: id };
            updateInfoPanel(activeElement);
        });
    });
}

// Connection interactions
function setupConnectionClicks() {
    const connections = document.querySelectorAll('.connection');
    connections.forEach(line => {
        line.addEventListener('click', () => {
            if (tourActive) return;
            
            const from = line.dataset.from;
            const to = line.dataset.to;
            clearActive();
            line.classList.add('active');
            activeElement = { type: 'connection', from: from, to: to };
            updateInfoPanel(activeElement);
        });
    });
}

// Update info panel
function updateInfoPanel(element) {
    const infoContent = document.getElementById('info-content');
    
    if (element.type === 'circle') {
        const data = content.circles[element.id][currentMode];
        infoContent.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.text}</p>
        `;
    } else if (element.type === 'connection') {
        const key = `${element.from}-${element.to}`;
        const text = content.connections[key][currentMode];
        const fromTitle = content.circles[element.from][currentMode].title;
        const toTitle = content.circles[element.to][currentMode].title;
        
        infoContent.innerHTML = `
            <h2>Dynamik: ${element.from.charAt(0).toUpperCase() + element.from.slice(1)} ↔ ${element.to.charAt(0).toUpperCase() + element.to.slice(1)}</h2>
            <p><strong>${text}</strong></p>
            <p style="margin-top: 20px; font-size: 0.95rem; color: #718096;">
                Klik på cirklerne for at lære mere om hvert perspektiv individuelt.
            </p>
        `;
    }
}

// Clear active states
function clearActive() {
    document.querySelectorAll('.circle').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.connection').forEach(c => c.classList.remove('active'));
}

// Tour functionality
function setupTourButton() {
    const tourBtn = document.getElementById('start-tour');
    tourBtn.addEventListener('click', () => {
        if (tourActive) return;
        startTour();
    });
}

function startTour() {
    tourActive = true;
    tourStep = 0;
    document.getElementById('start-tour').textContent = 'Gennemgang kører...';
    document.getElementById('start-tour').disabled = true;
    runTourStep();
}

function runTourStep() {
    if (tourStep >= tourSequence.length) {
        endTour();
        return;
    }
    
    const step = tourSequence[tourStep];
    clearActive();
    
    if (step.type === 'circle') {
        const circle = document.querySelector(`[data-id="${step.id}"]`);
        circle.classList.add('active');
        circle.classList.add('highlight');
        activeElement = { type: 'circle', id: step.id };
        updateInfoPanel(activeElement);
        
        setTimeout(() => {
            circle.classList.remove('highlight');
        }, 1000);
        
    } else if (step.type === 'connection') {
        const connection = document.querySelector(`[data-from="${step.from}"][data-to="${step.to}"]`);
        connection.classList.add('active');
        activeElement = { type: 'connection', from: step.from, to: step.to };
        updateInfoPanel(activeElement);
    }
    
    setTimeout(() => {
        tourStep++;
        runTourStep();
    }, step.duration);
}

function endTour() {
    tourActive = false;
    tourStep = 0;
    document.getElementById('start-tour').textContent = 'Start guidet gennemgang';
    document.getElementById('start-tour').disabled = false;
    clearActive();
    activeElement = null;
    document.getElementById('info-content').innerHTML = `
        <h2>Gennemgang afsluttet</h2>
        <p>Du kan nu udforske modellen frit ved at klikke på cirklerne og forbindelserne.</p>
        <p>Tryk på "Start guidet gennemgang" igen for at se den endnu en gang.</p>
    `;
}
