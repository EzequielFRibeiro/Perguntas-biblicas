// Banco de Dados de Perguntas Bíblicas
// Cobrindo toda a Bíblia de Gênesis a Apocalipse

const bibleQuestions = {
    // Antigo Testamento
    "genesis": [
        {
            question: "Quem foi o primeiro ser humano criado por Deus?",
            options: ["Adão", "Eva", "Caim", "Abel"],
            correct: 0,
            reference: "Gênesis 2:7"
        },
        {
            question: "Qual foi o nome do primeiro filho de Adão e Eva?",
            options: ["Caim", "Abel", "Sete", "Enoque"],
            correct: 0,
            reference: "Gênesis 4:1"
        },
        {
            question: "Quantos dias durou o dilúvio de Noé?",
            options: ["40 dias", "100 dias", "150 dias", "365 dias"],
            correct: 0,
            reference: "Gênesis 7:12"
        },
        {
            question: "Qual foi a promessa de Deus a Abraão?",
            options: ["Terra prometida", "Filhos numerosos", "Rei de reis", "Riquezas eternas"],
            correct: 0,
            reference: "Gênesis 12:1-3"
        },
        {
            question: "Quem foi vendido como escravo por seus irmãos?",
            options: ["José", "Benjamim", "Rúben", "Josué"],
            correct: 0,
            reference: "Gênesis 37:28"
        }
    ],

    "exodo": [
        {
            question: "Quem libertou o povo de Israel da escravidão no Egito?",
            options: ["Moisés", "Josué", "Aarão", "Samuel"],
            correct: 0,
            reference: "Êxodo 3:10"
        },
        {
            question: "Quantas pragas foram enviadas ao Egito?",
            options: ["7", "10", "12", "15"],
            correct: 1,
            reference: "Êxodo 7-12"
        },
        {
            question: "Onde Moisés recebeu os Dez Mandamentos?",
            options: ["Monte Sinai", "Monte Sião", "Monte Horebe", "Monte das Oliveiras"],
            correct: 0,
            reference: "Êxodo 20:1-17"
        },
        {
            question: "Qual foi o primeiro milagre de Moisés?",
            options: ["Transformar água em vinho", "Transformar o cajado em serpente", "Partir o Mar Vermelho", "Transformar água em sangue"],
            correct: 1,
            reference: "Êxodo 4:2-4"
        }
    ],

    "levitico": [
        {
            question: "Qual era a principal função dos sacerdotes no Tabernáculo?",
            options: ["Ensinar a lei", "Oferecer sacrifícios", "Liderar a guerra", "Julgar o povo"],
            correct: 1,
            reference: "Levítico 1:1-9"
        },
        {
            question: "Qual era o dia mais santo do ano para os israelitas?",
            options: ["Páscoa", "Dia da Expiação", "Pentecostes", "Tabernáculos"],
            correct: 1,
            reference: "Levítico 16:29-31"
        }
    ],

    "numeros": [
        {
            question: "Quantos espias foram enviados para a terra de Canaã?",
            options: ["10", "12", "40", "70"],
            correct: 1,
            reference: "Números 13:1-2"
        },
        {
            question: "Quem falou com uma jumenta?",
            options: ["Balaão", "Moisés", "Josué", "Calebe"],
            correct: 0,
            reference: "Números 22:28-30"
        }
    ],

    "deuteronomio": [
        {
            question: "Quem não pôde entrar na terra prometida por desobedecer a Deus?",
            options: ["Moisés", "Josué", "Calebe", "Aarão"],
            correct: 0,
            reference: "Deuteronômio 3:26-27"
        },
        {
            question: "Onde Moisés morreu?",
            options: ["Monte Sinai", "Monte Nebo", "Valle de Moabe", "Terra de Canaã"],
            correct: 1,
            reference: "Deuteronômio 34:1-5"
        }
    ],

    "josue": [
        {
            question: "Que cidade foi destruída quando os israelitas deram sete voltas ao redor dela?",
            options: ["Jericó", "Ai", "Gibeão", "Lachis"],
            correct: 0,
            reference: "Josué 6:1-20"
        },
        {
            question: "Quem escondeu os espias em sua casa?",
            options: ["Raabe", "Rute", "Débora", "Ester"],
            correct: 0,
            reference: "Josué 2:1-7"
        }
    ],

    "juizes": [
        {
            question: "Quem foi o juiz que matou 300 filisteus com uma queixada de jumento?",
            options: ["Sansão", "Gideão", "Jefté", "Otniel"],
            correct: 0,
            reference: "Juízes 15:15"
        },
        {
            question: "Quem foi o último juiz de Israel?",
            options: ["Sansão", "Samuel", "Gideão", "Jefté"],
            correct: 1,
            reference: "1 Samuel 7:15"
        }
    ],

    "rute": [
        {
            question: "Qual foi a declaração famosa de Rute a Noemi?",
            options: ["Teu povo será meu povo", "Vou te servir", "Nunca te abandonarei", "Te amo mais que tudo"],
            correct: 0,
            reference: "Rute 1:16"
        }
    ],

    "samuel1": [
        {
            question: "Quem foi o primeiro rei de Israel?",
            options: ["Davi", "Saul", "Salomão", "Josias"],
            correct: 1,
            reference: "1 Samuel 10:1"
        },
        {
            question: "Quem matou o gigante Golias?",
            options: ["Davi", "Sansão", "Jonatas", "Abisai"],
            correct: 0,
            reference: "1 Samuel 17:51"
        }
    ],

    "samuel2": [
        {
            question: "Qual foi a cidade escolhida por Davi como capital?",
            options: ["Belém", "Hebron", "Jerusalém", "Samaria"],
            correct: 2,
            reference: "2 Samuel 5:6-9"
        },
        {
            question: "Quem foi o filho de Davi que tentou tomar o trono?",
            options: ["Absalão", "Adonias", "Salomão", "João"],
            correct: 0,
            reference: "2 Samuel 15:1-12"
        }
    ],

    "reis1": [
        {
            question: "Quem sucedeu Davi como rei de Israel?",
            options: ["Salomão", "Adonias", "Absalão", "Roboão"],
            correct: 0,
            reference: "1 Reis 1:39"
        },
        {
            question: "Qual profeta confrontou o rei Acabe?",
            options: ["Elias", "Eliseu", "Isaías", "Jeremias"],
            correct: 0,
            reference: "1 Reis 18:17-19"
        }
    ],

    "reis2": [
        {
            question: "Quem foi arrebatado ao céu em um redemoinho de fogo?",
            options: ["Elias", "Eliseu", "Isaías", "Daniel"],
            correct: 0,
            reference: "2 Reis 2:11"
        },
        {
            question: "Qual rei foi curado de uma doença mortal por Isaías?",
            options: ["Ezequias", "Ezequiel", "Josias", "Jeoaquim"],
            correct: 0,
            reference: "2 Reis 20:1-6"
        }
    ],

    "cronicas1": [
        {
            question: "Quem foi o rei que construiu o Primeiro Templo?",
            options: ["Davi", "Salomão", "Roboão", "Josias"],
            correct: 1,
            reference: "1 Crônicas 22:6-10"
        }
    ],

    "cronicas2": [
        {
            question: "Qual rei restaurou a adoração a Deus em Judá?",
            options: ["Josias", "Ezequias", "Asa", "Jeosafá"],
            correct: 0,
            reference: "2 Crônicas 34:1-7"
        }
    ],

    "esdras": [
        {
            question: "Quem liderou o retorno do exílio babilônico?",
            options: ["Esdras", "Neemias", "Zorobabel", "Esdras e Neemias"],
            correct: 2,
            reference: "Esdras 2:2"
        }
    ],

    "neemias": [
        {
            question: "O que Neemias reconstruiu em Jerusalém?",
            options: ["O Templo", "Os muros da cidade", "A arca da aliança", "O palácio real"],
            correct: 1,
            reference: "Neemias 2:17-18"
        }
    ],

    "ester": [
        {
            question: "Qual rainha salvou o povo judeu da destruição?",
            options: ["Ester", "Vasti", "Rute", "Abigail"],
            correct: 0,
            reference: "Ester 7:1-6"
        }
    ],

    "job": [
        {
            question: "Qual era a profissão de Jó?",
            options: ["Rei", "Sacerdote", "Fazendeiro", "Pastor"],
            correct: 3,
            reference: "Jó 1:2-3"
        },
        {
            question: "Quem questionou a justiça de Deus diante do sofrimento?",
            options: ["Jó", "Elifaz", "Bildade", "Zofar"],
            correct: 0,
            reference: "Jó 1:21-22"
        }
    ],

    "salmos": [
        {
            question: "Quem escreveu a maioria dos salmos?",
            options: ["Davi", "Salomão", "Asafe", "Moisés"],
            correct: 0,
            reference: "Salmo 3:1 (título)"
        },
        {
            question: "Qual salmo fala de Deus como o pastor?",
            options: ["Salmo 23", "Salmo 24", "Salmo 25", "Salmo 26"],
            correct: 0,
            reference: "Salmo 23:1"
        }
    ],

    "proverbios": [
        {
            question: "Quem é tradicionalmente considerado o autor de Provérbios?",
            options: ["Salomão", "Davi", "Pablo", "Isaías"],
            correct: 0,
            reference: "Provérbios 1:1"
        },
        {
            question: "Qual é o tema principal de Provérbios?",
            options: ["Sabedoria", "Profecia", "História", "Lei"],
            correct: 0,
            reference: "Provérbios 1:7"
        }
    ],

    "ecclesiastes": [
        {
            question: "Qual é a frase famosa de Eclesiastes sobre tudo ser vaidade?",
            options: ["Tudo passa", "Nada é eterno", "Tudo é vaidade", "A vida é curta"],
            correct: 2,
            reference: "Eclesiastes 1:2"
        }
    ],

    "cantares": [
        {
            question: "Qual é o tema principal do Cântico dos Cânticos?",
            options: ["Amor", "Guerra", "Sabedoria", "Profecia"],
            correct: 0,
            reference: "Cânticos 1:2"
        }
    ],

    "isaiah": [
        {
            question: "Qual profeta previu o nascimento de Jesus?",
            options: ["Isaías", "Jeremias", "Ezequiel", "Daniel"],
            correct: 0,
            reference: "Isaías 7:14"
        },
        {
            question: "Qual rei foi curado por Isaías?",
            options: ["Ezequias", "Ezequiel", "Josias", "Acabe"],
            correct: 0,
            reference: "Isaías 38:1-5"
        }
    ],

    "jeremias": [
        {
            question: "Qual profeta chorou pela destruição de Jerusalém?",
            options: ["Jeremias", "Isaías", "Ezequiel", "Daniel"],
            correct: 0,
            reference: "Lamentações 1:16"
        },
        {
            question: "Qual era o apelido de Jeremias?",
            options: ["Profeta do amor", "Profeta do juízo", "Profeta do exílio", "Profeta da restauração"],
            correct: 1,
            reference: "Jeremias 1:10"
        }
    ],

    "lamentations": [
        {
            question: "Quem escreveu as Lamentações?",
            options: ["Jeremias", "Isaías", "Ezequiel", "Daniel"],
            correct: 0,
            reference: "Lamentações 1:1"
        }
    ],

    "ezekiel": [
        {
            question: "Qual profeta viu uma visão de ossos secos?",
            options: ["Ezequiel", "Isaías", "Jeremias", "Daniel"],
            correct: 0,
            reference: "Ezequiel 37:1-14"
        }
    ],

    "daniel": [
        {
            question: "Quem foi lançado na cova dos leões?",
            options: ["Daniel", "Ezequiel", "Jeremias", "Isaías"],
            correct: 0,
            reference: "Daniel 6:16-23"
        },
        {
            question: "Qual rei teve um sonho sobre uma estátua de metais?",
            options: ["Nabucodonosor", "Belsazar", "Dario", "Ciro"],
            correct: 0,
            reference: "Daniel 2:1-49"
        }
    ],

    "oseias": [
        {
            question: "Qual profeta se casou com uma mulher adúltera como símbolo do amor de Deus?",
            options: ["Oseias", "Amós", "Jonas", "Miquéias"],
            correct: 0,
            reference: "Oseias 1:2-3"
        }
    ],

    "joel": [
        {
            question: "Qual profeta falou sobre o derramamento do Espírito Santo?",
            options: ["Joel", "Oseias", "Amós", "Jonas"],
            correct: 0,
            reference: "Joel 2:28-29"
        }
    ],

    "amos": [
        {
            question: "Qual profeta foi pastor de ovelhas antes de ser chamado por Deus?",
            options: ["Amós", "Oseias", "Jonas", "Miquéias"],
            correct: 0,
            reference: "Amós 1:1"
        }
    ],

    "obadias": [
        {
            question: "Qual é o livro mais curto da Bíblia?",
            options: ["Obadias", "Filemom", "2 João", "3 João"],
            correct: 0,
            reference: "Obadias 1:1"
        }
    ],

    "jonas": [
        {
            question: "Para onde Jonas tentou fugir de Deus?",
            options: ["Nínive", "Tarsis", "Babilônia", "Egito"],
            correct: 1,
            reference: "Jonas 1:3"
        },
        {
            question: "Quem foi engolido por um grande peixe?",
            options: ["Jonas", "Daniel", "Josué", "Eliseu"],
            correct: 0,
            reference: "Jonas 1:17"
        }
    ],

    "miqueias": [
        {
            question: "Qual profeta falou sobre o nascimento de Jesus em Belém?",
            options: ["Miquéias", "Isaías", "Jeremias", "Ezequiel"],
            correct: 0,
            reference: "Miquéias 5:2"
        }
    ],

    "nahum": [
        {
            question: "Qual profeta profetizou a queda de Nínive?",
            options: ["Naum", "Oseias", "Jonas", "Miquéias"],
            correct: 0,
            reference: "Naum 1:1"
        }
    ],

    "habacuque": [
        {
            question: "Qual profeta questionou a justiça de Deus?",
            options: ["Habacuque", "Jeremias", "Isaías", "Ezequiel"],
            correct: 0,
            reference: "Habacuque 1:2-4"
        }
    ],

    "sofonias": [
        {
            question: "Qual profeta falou sobre o Dia do Senhor?",
            options: ["Sofonias", "Oseias", "Jonas", "Miquéias"],
            correct: 0,
            reference: "Sofonias 1:7"
        }
    ],

    "ageu": [
        {
            question: "Qual profeta incentivou a reconstrução do Templo?",
            options: ["Ageu", "Zacarias", "Malaquias", "Esdras"],
            correct: 0,
            reference: "Ageu 1:7-8"
        }
    ],

    "zacarias": [
        {
            question: "Qual profeta falou sobre o rei que viria montado em um jumento?",
            options: ["Zacarias", "Isaías", "Jeremias", "Ezequiel"],
            correct: 0,
            reference: "Zacarias 9:9"
        }
    ],

    "malaquias": [
        {
            question: "Qual é o último livro do Antigo Testamento?",
            options: ["Malaquias", "Daniel", "Ester", "Esdras"],
            correct: 0,
            reference: "Malaquias 4:6"
        }
    ],

    // Novo Testamento
    "mateus": [
        {
            question: "Quem escreveu o Evangelho de Mateus?",
            options: ["Mateus", "Pedro", "Paulo", "João"],
            correct: 0,
            reference: "Mateus 9:9"
        },
        {
            question: "Onde Jesus nasceu?",
            options: ["Nazaré", "Belém", "Jerusalém", "Betsaida"],
            correct: 1,
            reference: "Mateus 2:1"
        },
        {
            question: "Qual foi o sermão mais famoso de Jesus?",
            options: ["Sermão da Montanha", "Sermão do Mar", "Sermão da Planície", "Sermão da Cruz"],
            correct: 0,
            reference: "Mateus 5:1-2"
        },
        {
            question: "Quantos milagres de multiplicação de pães Jesus fez?",
            options: ["1", "2", "3", "4"],
            correct: 1,
            reference: "Mateus 14:13-21; 15:32-39"
        }
    ],

    "marcos": [
        {
            question: "Qual é o Evangelho mais curto?",
            options: ["Mateus", "Marcos", "Lucas", "João"],
            correct: 1,
            reference: "Marcos 1:1"
        },
        {
            question: "Quem batizou Jesus?",
            options: ["João Batista", "Pedro", "André", "Filipe"],
            correct: 0,
            reference: "Marcos 1:9-11"
        }
    ],

    "lucas": [
        {
            question: "Quem escreveu o Evangelho de Lucas e os Atos dos Apóstolos?",
            options: ["Lucas", "Paulo", "Pedro", "João"],
            correct: 0,
            reference: "Lucas 1:1-4"
        },
        {
            question: "Qual parábola fala de um filho que se perde e depois retorna?",
            options: ["Filho Pródigo", "O Semeador", "O Bom Samaritano", "As Dez Virgens"],
            correct: 0,
            reference: "Lucas 15:11-32"
        }
    ],

    "joao": [
        {
            question: "Qual é o versículo mais famoso da Bíblia?",
            options: ["João 3:16", "João 14:6", "João 1:1", "João 10:10"],
            correct: 0,
            reference: "João 3:16"
        },
        {
            question: "Quem negou Jesus três vezes?",
            options: ["Pedro", "João", "Tiago", "Judas"],
            correct: 0,
            reference: "João 18:15-27"
        }
    ],

    "atos": [
        {
            question: "Qual apóstolo foi convertido no caminho de Damasco?",
            options: ["Paulo", "Pedro", "João", "Tiago"],
            correct: 0,
            reference: "Atos 9:1-19"
        },
        {
            question: "Em que cidade os discípulos foram chamados de cristãos pela primeira vez?",
            options: ["Jerusalém", "Antioquia", "Éfeso", "Corinto"],
            correct: 1,
            reference: "Atos 11:26"
        }
    ],

    "romanos": [
        {
            question: "Quem escreveu a carta aos Romanos?",
            options: ["Paulo", "Pedro", "João", "Tiago"],
            correct: 0,
            reference: "Romanos 1:1"
        },
        {
            question: "Qual é o tema principal da carta aos Romanos?",
            options: ["Graça", "Fé", "Amor", "Justiça"],
            correct: 1,
            reference: "Romanos 1:17"
        }
    ],

    "corintios1": [
        {
            question: "Qual é o capítulo mais famoso sobre o amor?",
            options: ["1 Coríntios 13", "1 Coríntios 12", "1 Coríntios 14", "1 Coríntios 15"],
            correct: 0,
            reference: "1 Coríntios 13:1-13"
        }
    ],

    "corintios2": [
        {
            question: "Qual é a mensagem principal da 2ª carta aos Coríntios?",
            options: ["Consolação", "Disciplina", "Amor", "Fé"],
            correct: 0,
            reference: "2 Coríntios 1:3-4"
        }
    ],

    "galatas": [
        {
            question: "Qual é o tema principal da carta aos Gálatas?",
            options: ["Liberdade", "Lei", "Tradição", "Costume"],
            correct: 0,
            reference: "Gálatas 5:1"
        }
    ],

    "efesios": [
        {
            question: "Qual é a armadura de Deus mencionada por Paulo?",
            options: ["Armadura espiritual", "Armadura física", "Armadura mental", "Armadura emocional"],
            correct: 0,
            reference: "Efésios 6:10-18"
        }
    ],

    "filipenses": [
        {
            question: "Qual é a mensagem principal da carta aos Filipenses?",
            options: ["Alegria", "Tristeza", "Raiva", "Medo"],
            correct: 0,
            reference: "Filipenses 4:4"
        }
    ],

    "colossenses": [
        {
            question: "Qual é o tema principal da carta aos Colossenses?",
            options: ["Supremacia de Cristo", "Lei mosaica", "Tradições", "Filosofia"],
            correct: 0,
            reference: "Colossenses 1:15-20"
        }
    ],

    "tesalonicenses1": [
        {
            question: "Qual é o tema da 1ª carta aos Tessalonicenses?",
            options: ["Vinda de Cristo", "Lei", "Tradição", "Costume"],
            correct: 0,
            reference: "1 Tessalonicenses 4:13-18"
        }
    ],

    "tesalonicenses2": [
        {
            question: "Qual é o tema da 2ª carta aos Tessalonicenses?",
            options: ["Paciência", "Pressa", "Ansiedade", "Medo"],
            correct: 0,
            reference: "2 Tessalonicenses 3:13"
        }
    ],

    "timoteo1": [
        {
            question: "A quem Paulo escreveu a primeira carta a Timóteo?",
            options: ["Timóteo", "Tito", "Filemom", "Onésimo"],
            correct: 0,
            reference: "1 Timóteo 1:2"
        }
    ],

    "timoteo2": [
        {
            question: "Qual é o versículo mais famoso da 2ª carta a Timóteo?",
            options: ["2 Timóteo 1:7", "2 Timóteo 3:16", "2 Timóteo 4:7", "2 Timóteo 2:15"],
            correct: 2,
            reference: "2 Timóteo 4:7"
        }
    ],

    "tito": [
        {
            question: "A quem Paulo escreveu a carta a Tito?",
            options: ["Tito", "Timóteo", "Filemom", "Onésimo"],
            correct: 0,
            reference: "Tito 1:4"
        }
    ],

    "filemom": [
        {
            question: "Sobre quem Paulo escreveu a carta a Filemom?",
            options: ["Onésimo", "Tito", "Timóteo", "Apolo"],
            correct: 0,
            reference: "Filemom 1:10"
        }
    ],

    "hebreus": [
        {
            question: "Qual é o tema principal da carta aos Hebreus?",
            options: ["Superioridade de Cristo", "Lei mosaica", "Tradição", "Filosofia"],
            correct: 0,
            reference: "Hebreus 1:1-4"
        }
    ],

    "tiago": [
        {
            question: "Quem escreveu a carta de Tiago?",
            options: ["Tiago, irmão de Jesus", "Tiago, filho de Zebedeu", "Tiago, filho de Alfeu", "Tiago, apóstolo"],
            correct: 0,
            reference: "Tiago 1:1"
        }
    ],

    "pedro1": [
        {
            question: "Quem escreveu a 1ª carta de Pedro?",
            options: ["Pedro", "Paulo", "João", "Tiago"],
            correct: 0,
            reference: "1 Pedro 1:1"
        }
    ],

    "pedro2": [
        {
            question: "Qual é o tema da 2ª carta de Pedro?",
            options: ["Vinda de Cristo", "Falsos profetas", "Amor", "Fé"],
            correct: 1,
            reference: "2 Pedro 2:1-3"
        }
    ],

    "joao1": [
        {
            question: "Qual é o tema da 1ª carta de João?",
            options: ["Amor", "Fé", "Vida eterna", "Verdade"],
            correct: 0,
            reference: "1 João 4:7-8"
        }
    ],

    "joao2": [
        {
            question: "Qual é o tema da 2ª carta de João?",
            options: ["Verdade e amor", "Fé", "Vida eterna", "Justiça"],
            correct: 0,
            reference: "2 João 1:6"
        }
    ],

    "joao3": [
        {
            question: "A quem João escreveu a 3ª carta?",
            options: ["Gaius", "Diótrefes", "Décimo", "Tercio"],
            correct: 0,
            reference: "3 João 1:1"
        }
    ],

    "judas": [
        {
            question: "Quem escreveu a carta de Judas?",
            options: ["Judas, irmão de Tiago", "Judas Iscariotes", "Judas Tadeu", "Judas, apóstolo"],
            correct: 0,
            reference: "Judas 1:1"
        }
    ],

    "apocalipse": [
        {
            question: "Quem escreveu o livro de Apocalipse?",
            options: ["João", "Paulo", "Pedro", "Tiago"],
            correct: 0,
            reference: "Apocalipse 1:1"
        },
        {
            question: "Qual é o número do dragão no Apocalipse?",
            options: ["666", "777", "888", "999"],
            correct: 0,
            reference: "Apocalipse 13:18"
        },
        {
            question: "Qual é a nova Jerusalém descrita no Apocalipse?",
            options: ["Céu novo e terra nova", "Nova Babilônia", "Nova Roma", "Nova Grécia"],
            correct: 0,
            reference: "Apocalipse 21:1-4"
        }
    ]
};

// Livros da Bíblia
const bibleBooks = [
    { name: "Gênesis", key: "genesis", testament: "AT" },
    { name: "Êxodo", key: "exodo", testament: "AT" },
    { name: "Levítico", key: "levitico", testament: "AT" },
    { name: "Números", key: "numeros", testament: "AT" },
    { name: "Deuteronômio", key: "deuteronomio", testament: "AT" },
    { name: "Josué", key: "josue", testament: "AT" },
    { name: "Juízes", key: "juizes", testament: "AT" },
    { name: "Rute", key: "rute", testament: "AT" },
    { name: "1 Samuel", key: "samuel1", testament: "AT" },
    { name: "2 Samuel", key: "samuel2", testament: "AT" },
    { name: "1 Reis", key: "reis1", testament: "AT" },
    { name: "2 Reis", key: "reis2", testament: "AT" },
    { name: "1 Crônicas", key: "cronicas1", testament: "AT" },
    { name: "2 Crônicas", key: "cronicas2", testament: "AT" },
    { name: "Esdras", key: "esdras", testament: "AT" },
    { name: "Neemias", key: "neemias", testament: "AT" },
    { name: "Ester", key: "ester", testament: "AT" },
    { name: "Jó", key: "job", testament: "AT" },
    { name: "Salmos", key: "salmos", testament: "AT" },
    { name: "Provérbios", key: "proverbios", testament: "AT" },
    { name: "Eclesiastes", key: "ecclesiastes", testament: "AT" },
    { name: "Cânticos", key: "cantares", testament: "AT" },
    { name: "Isaías", key: "isaiah", testament: "AT" },
    { name: "Jeremias", key: "jeremias", testament: "AT" },
    { name: "Lamentações", key: "lamentations", testament: "AT" },
    { name: "Ezequiel", key: "ezekiel", testament: "AT" },
    { name: "Daniel", key: "daniel", testament: "AT" },
    { name: "Oseias", key: "oseias", testament: "AT" },
    { name: "Joel", key: "joel", testament: "AT" },
    { name: "Amós", key: "amos", testament: "AT" },
    { name: "Obadias", key: "obadias", testament: "AT" },
    { name: "Jonas", key: "jonas", testament: "AT" },
    { name: "Miquéias", key: "miqueias", testament: "AT" },
    { name: "Naum", key: "nahum", testament: "AT" },
    { name: "Habacuque", key: "habacuque", testament: "AT" },
    { name: "Sofonias", key: "sofonias", testament: "AT" },
    { name: "Ageu", key: "ageu", testament: "AT" },
    { name: "Zacarias", key: "zacarias", testament: "AT" },
    { name: "Malaquias", key: "malaquias", testament: "AT" },
    { name: "Mateus", key: "mateus", testament: "NT" },
    { name: "Marcos", key: "marcos", testament: "NT" },
    { name: "Lucas", key: "lucas", testament: "NT" },
    { name: "João", key: "joao", testament: "NT" },
    { name: "Atos", key: "atos", testament: "NT" },
    { name: "Romanos", key: "romanos", testament: "NT" },
    { name: "1 Coríntios", key: "corintios1", testament: "NT" },
    { name: "2 Coríntios", key: "corintios2", testament: "NT" },
    { name: "Gálatas", key: "galatas", testament: "NT" },
    { name: "Efésios", key: "efesios", testament: "NT" },
    { name: "Filipenses", key: "filipenses", testament: "NT" },
    { name: "Colossenses", key: "colossenses", testament: "NT" },
    { name: "1 Tessalonicenses", key: "tesalonicenses1", testament: "NT" },
    { name: "2 Tessalonicenses", key: "tesalonicenses2", testament: "NT" },
    { name: "1 Timóteo", key: "timoteo1", testament: "NT" },
    { name: "2 Timóteo", key: "timoteo2", testament: "NT" },
    { name: "Tito", key: "tito", testament: "NT" },
    { name: "Filemom", key: "filemom", testament: "NT" },
    { name: "Hebreus", key: "hebreus", testament: "NT" },
    { name: "Tiago", key: "tiago", testament: "NT" },
    { name: "1 Pedro", key: "pedro1", testament: "NT" },
    { name: "2 Pedro", key: "pedro2", testament: "NT" },
    { name: "1 João", key: "joao1", testament: "NT" },
    { name: "2 João", key: "joao2", testament: "NT" },
    { name: "3 João", key: "joao3", testament: "NT" },
    { name: "Judas", key: "judas", testament: "NT" },
    { name: "Apocalipse", key: "apocalipse", testament: "NT" }
];

// Função para obter perguntas por dificuldade
function getQuestionsByDifficulty(difficulty) {
    let allQuestions = [];

    // Coletar todas as perguntas
    for (const book in bibleQuestions) {
        allQuestions = allQuestions.concat(bibleQuestions[book]);
    }

    // Embaralhar as perguntas
    allQuestions = shuffleArray(allQuestions);

    // Selecionar quantidade baseada na dificuldade
    let questionCount;
    switch (difficulty) {
        case 'easy':
            questionCount = 10;
            break;
        case 'medium':
            questionCount = 15;
            break;
        case 'hard':
            questionCount = 20;
            break;
        default:
            questionCount = 10;
    }

    return allQuestions.slice(0, questionCount);
}

// Função para obter perguntas por livro
function getQuestionsByBook(bookKey) {
    if (bibleQuestions[bookKey]) {
        return shuffleArray(bibleQuestions[bookKey]).slice(0, 10);
    }
    return [];
}

// Função para obter perguntas por testamento
function getQuestionsByTestament(testament) {
    let questions = [];

    bibleBooks.forEach(book => {
        if (book.testament === testament && bibleQuestions[book.key]) {
            questions = questions.concat(bibleQuestions[book.key]);
        }
    });

    return shuffleArray(questions).slice(0, 15);
}

// Função para embaralhar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Função para obter livros por testamento
function getBooksByTestament(testament) {
    return bibleBooks.filter(book => book.testament === testament);
}