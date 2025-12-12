// --- Banco de Dados de Perguntas ---
const allQuestions = [
    // --- PERGUNTAS ORIGINAIS (MANTIDAS) ---
    // --- Minas Gerais ---
    { question: "Qual é a capital de Minas Gerais?", options: ["Ouro Preto", "Belo Horizonte", "Uberlândia", "Juiz de Fora"], correct: 1, category: "minas", difficulty: 1, explanation: "Belo Horizonte foi inaugurada em 1897 para ser a nova capital, substituindo Ouro Preto." },
    { question: "Complete a frase da bandeira de Minas: 'Libertas Quae Sera...'", options: ["Tamen", "Amen", "Viemen", "Semper"], correct: 0, category: "minas", difficulty: 2, explanation: "'Libertas Quae Sera Tamen' significa 'Liberdade ainda que tardia' em latim." },
    { question: "Qual destes ingredientes NÃO pode faltar num pão de queijo tradicional?", options: ["Farinha de Trigo", "Polvilho", "Fermento Biológico", "Açúcar"], correct: 1, category: "minas", difficulty: 1, explanation: "O polvilho (azedo ou doce) é a base do pão de queijo. Farinha de trigo não entra na receita original!" },
    { question: "Qual cidade mineira é famosa por suas águas termais e o Parque das Águas?", options: ["São Lourenço", "Divinópolis", "Betim", "Contagem"], correct: 0, category: "minas", difficulty: 3, explanation: "São Lourenço faz parte do Circuito das Águas e é famosa por suas fontes minerais medicinais." },

    // --- Conhecimentos Gerais ---
    { question: "Qual é o elemento químico representado pela letra 'O'?", options: ["Ouro", "Osmium", "Oxigênio", "Oliva"], correct: 2, category: "ciencias", difficulty: 1, explanation: "O símbolo 'O' representa o Oxigênio na tabela periódica. Ouro é 'Au'." },
    { question: "Quantos estados tem o Brasil?", options: ["24", "26", "26 + DF", "27 + DF"], correct: 2, category: "geografia", difficulty: 2, explanation: "O Brasil possui 26 estados e 1 Distrito Federal, totalizando 27 unidades federativas." },

    // --- Esportes ---
    { question: "Qual time é conhecido como 'Galo' em Minas Gerais?", options: ["Cruzeiro", "América", "Atlético Mineiro", "Villa Nova"], correct: 2, category: "esportes", difficulty: 1, explanation: "O Atlético Mineiro adotou o Galo como mascote na década de 1930." },
    { question: "Em que ano o Brasil sediou a Copa do Mundo pela segunda vez?", options: ["2010", "2014", "2006", "2018"], correct: 1, category: "esportes", difficulty: 2, explanation: "O Brasil sediou a Copa em 1950 e depois novamente em 2014." },

    // --- Filmes ---
    { question: "Quem dirigiu o filme 'Central do Brasil'?", options: ["Fernando Meirelles", "Walter Salles", "José Padilha", "Glauber Rocha"], correct: 1, category: "filmes", difficulty: 3, explanation: "Walter Salles dirigiu o filme que rendeu uma indicação ao Oscar para Fernanda Montenegro." },
    { question: "Qual super-herói é conhecido como 'Homem de Ferro'?", options: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"], correct: 3, category: "filmes", difficulty: 1, explanation: "Tony Stark é o bilionário por trás da armadura do Homem de Ferro." },

    // --- História ---
    { question: "Quem foi o primeiro presidente do Brasil?", options: ["Getúlio Vargas", "Deodoro da Fonseca", "Dom Pedro II", "Juscelino Kubitschek"], correct: 1, category: "historia", difficulty: 2, explanation: "O Marechal Deodoro da Fonseca proclamou a república e foi o primeiro presidente em 1889." },
    
    // --- TI / Programação (Originais) ---
    { question: "O que significa HTML?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Layer", "Home Tool Markup Language"], correct: 0, category: "ti", difficulty: 1, explanation: "HTML (Linguagem de Marcação de Hipertexto) é o bloco de construção padrão da web." },
    { question: "Em JavaScript, qual símbolo é usado para comentários de uma linha?", options: ["<!-- -->", "//", "/* */", "**"], correct: 1, category: "ti", difficulty: 1, explanation: "// é usado para comentários de linha única, enquanto /* */ é para múltiplas linhas." },
    { question: "Qual destas NÃO é uma linguagem de programação?", options: ["Python", "Java", "HTML", "C++"], correct: 2, category: "ti", difficulty: 2, explanation: "HTML é uma linguagem de marcação (estrutura), não de programação (lógica)." },
    { question: "O que significa o erro 404 na web?", options: ["Servidor interno", "Não encontrado", "Proibido", "Requisição ruim"], correct: 1, category: "ti", difficulty: 1, explanation: "404 Not Found indica que o servidor não conseguiu encontrar o recurso solicitado." },
    { question: "Qual estrutura de dados funciona no princípio LIFO (Last In, First Out)?", options: ["Fila (Queue)", "Pilha (Stack)", "Árvore (Tree)", "Grafo (Graph)"], correct: 1, category: "ti", difficulty: 3, explanation: "Em uma Pilha (Stack), o último item a entrar é o primeiro a sair (como uma pilha de pratos)." },
    { question: "Quem é considerado o pai da computação?", options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Ada Lovelace"], correct: 2, category: "ti", difficulty: 2, explanation: "Alan Turing formalizou os conceitos de algoritmo e computação com a Máquina de Turing." },
    { question: "Qual comando git envia as alterações para o repositório remoto?", options: ["git pull", "git commit", "git push", "git status"], correct: 2, category: "ti", difficulty: 2, explanation: "Git 'push' empurra seus commits locais para o servidor remoto." },
    { question: "O que é 'React'?", options: ["Um banco de dados", "Uma biblioteca JS para UI", "Um sistema operacional", "Um editor de texto"], correct: 1, category: "ti", difficulty: 2, explanation: "React é uma biblioteca JavaScript popular criada pelo Facebook para construir interfaces de usuário." },

    // --- NOVOS LOTES (50 TI + 50 MISTAS) - ADICIONADOS ANTERIORMENTE (Mantidos) ---
    { question: "O que é 'Hardware'?", options: ["A parte lógica", "A parte física", "O sistema operacional", "A internet"], correct: 1, category: "ti", difficulty: 1, explanation: "Hardware são os componentes físicos, como mouse, teclado e placa-mãe." },
    { question: "O que significa 'CPU'?", options: ["Central Process Unit", "Computer Personal Unit", "Central Power Unit", "Control Panel Utility"], correct: 0, category: "ti", difficulty: 1, explanation: "Unidade Central de Processamento, o cérebro do computador." },
    { question: "Qual é o atalho para 'Desfazer' no Windows?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+Z", "Ctrl+X"], correct: 2, category: "ti", difficulty: 1, explanation: "Ctrl+Z desfaz a última ação realizada." },
    { question: "Qual empresa faz o iPhone?", options: ["Samsung", "Apple", "Xiaomi", "Nokia"], correct: 1, category: "ti", difficulty: 1, explanation: "A Apple lançou o primeiro iPhone em 2007." },
    { question: "O que é um 'Browser'?", options: ["Um antivírus", "Um editor de texto", "Um navegador web", "Um jogo"], correct: 2, category: "ti", difficulty: 1, explanation: "Browser (Navegador) é o programa usado para acessar sites, como Chrome ou Firefox." },
    { question: "O que é 'spam'?", options: ["Vírus perigoso", "E-mail indesejado", "Programa de limpeza", "Tipo de memória"], correct: 1, category: "ti", difficulty: 1, explanation: "Spam refere-se a mensagens eletrônicas não solicitadas enviadas em massa." },
    { question: "Qual a unidade básica de armazenamento?", options: ["Litro", "Byte", "Hertz", "Pixel"], correct: 1, category: "ti", difficulty: 1, explanation: "O Byte (composto por 8 bits) é a unidade fundamental de dados." },
    { question: "Qual destes é um sistema operacional móvel?", options: ["iOS", "Windows 95", "Linux Ubuntu", "MacOS"], correct: 0, category: "ti", difficulty: 1, explanation: "iOS é o sistema operacional exclusivo dos dispositivos móveis da Apple." },
    { question: "Para que serve o 'caps lock'?", options: ["Apagar texto", "Deixar letras maiúsculas", "Tirar print", "Fechar janela"], correct: 1, category: "ti", difficulty: 1, explanation: "Ativa a caixa alta (maiúsculas) no teclado." },
    { question: "O que é um 'Link'?", options: ["Um personagem de jogo", "Uma conexão entre páginas", "Um vírus", "Um tipo de monitor"], correct: 1, category: "ti", difficulty: 1, explanation: "Hiperlink é a referência que leva de uma página web a outra." },
    { question: "Qual cabo conecta o monitor ao PC?", options: ["USB", "HDMI", "P2", "RJ45"], correct: 1, category: "ti", difficulty: 1, explanation: "HDMI é o padrão atual para transmissão de áudio e vídeo." },
    { question: "O que significa 'Download'?", options: ["Enviar arquivo", "Baixar arquivo", "Apagar arquivo", "Editar arquivo"], correct: 1, category: "ti", difficulty: 1, explanation: "Transferir dados de um servidor remoto para o seu computador local." },
    { question: "Quem é o fundador do Facebook?", options: ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Bill Gates"], correct: 2, category: "ti", difficulty: 1, explanation: "Zuckerberg fundou o Facebook em 2004." },
    { question: "Qual tecla tira 'print' da tela?", options: ["Insert", "Print Screen", "Scroll Lock", "Pause Break"], correct: 1, category: "ti", difficulty: 1, explanation: "A tecla Print Screen captura a imagem da tela atual." },
    { question: "O que é um 'Avatar'?", options: ["Um filme", "Representação gráfica do usuário", "Um vírus", "Um tipo de site"], correct: 1, category: "ti", difficulty: 1, explanation: "Imagem ou boneco que representa uma pessoa no mundo digital." },
    { question: "O que é 'Cloud Computing'?", options: ["Computação em Nuvem", "Computação de Chuva", "Computador Rápido", "Rede Local"], correct: 0, category: "ti", difficulty: 2, explanation: "Uso de servidores remotos para armazenar e processar dados pela internet." },
    { question: "Qual linguagem é conhecida pela cobrinha?", options: ["Java", "C++", "Python", "Ruby"], correct: 2, category: "ti", difficulty: 2, explanation: "O logotipo de Python são duas cobras entrelaçadas." },
    { question: "O que é 'Open Source'?", options: ["Software pago", "Código fonte aberto", "Internet grátis", "Hardware livre"], correct: 1, category: "ti", difficulty: 2, explanation: "Software cujo código pode ser inspecionado e modificado por qualquer pessoa." },
    { question: "O que faz um servidor DNS?", options: ["Hospeda sites", "Traduz domínios em IPs", "Bloqueia vírus", "Acelera vídeos"], correct: 1, category: "ti", difficulty: 2, explanation: "Converte nomes como 'google.com' em endereços numéricos IP." },
    { question: "Qual porta padrão do HTTPS?", options: ["80", "21", "443", "8080"], correct: 2, category: "ti", difficulty: 2, explanation: "Porta 443 é usada para tráfego web seguro." },
    { question: "O que é 'Phishing'?", options: ["Pescaria virtual", "Golpe para roubar dados", "Um jogo de cartas", "Edição de fotos"], correct: 1, category: "ti", difficulty: 2, explanation: "Técnica de enganar usuários para revelar senhas e dados pessoais." },
    { question: "Em programação, o que é um 'Loop'?", options: ["Um erro fatal", "Repetição de código", "Uma variável", "Um comentário"], correct: 1, category: "ti", difficulty: 2, explanation: "Estrutura que repete um bloco de código enquanto uma condição for verdadeira." },
    { question: "O que é 'Linux'?", options: ["Um navegador", "Um Kernel de SO", "Um editor de vídeo", "Uma marca de PC"], correct: 1, category: "ti", difficulty: 2, explanation: "Linux é um kernel de sistema operacional de código aberto." },
    { question: "Qual destes é um banco de dados?", options: ["MySQL", "Excel", "Notepad", "PowerPoint"], correct: 0, category: "ti", difficulty: 2, explanation: "MySQL é um sistema de gerenciamento de banco de dados relacional." },
    { question: "O que significa 'IoT'?", options: ["Internet of Things", "Input of Technology", "Internal of Time", "Index of Text"], correct: 0, category: "ti", difficulty: 2, explanation: "Internet das Coisas: objetos do dia a dia conectados à rede." },
    { question: "O que é um 'Array'?", options: ["Uma flecha", "Uma lista de dados", "Um erro de tela", "Um tipo de mouse"], correct: 1, category: "ti", difficulty: 2, explanation: "Estrutura de dados que armazena uma coleção de elementos." },
    { question: "O que faz o comando 'Ctrl+F'?", options: ["Formata o PC", "Localiza texto", "Fecha janela", "Salva arquivo"], correct: 1, category: "ti", difficulty: 2, explanation: "Abre a ferramenta de busca (Find) na maioria dos programas." },
    { question: "Qual a função da memória RAM?", options: ["Armazenar fotos", "Processar gráficos", "Memória temporária rápida", "Conectar à internet"], correct: 2, category: "ti", difficulty: 2, explanation: "Armazena dados que o processador precisa acessar imediatamente." },
    { question: "O que é 'CSS'?", options: ["Counter Strike Source", "Cascading Style Sheets", "Computer System Security", "Central Server System"], correct: 1, category: "ti", difficulty: 2, explanation: "Linguagem usada para estilizar a apresentação de documentos HTML." },
    { question: "Quem criou a World Wide Web?", options: ["Steve Jobs", "Tim Berners-Lee", "Bill Gates", "Alan Turing"], correct: 1, category: "ti", difficulty: 2, explanation: "Tim Berners-Lee inventou a WWW em 1989." },
    { question: "O que é um 'Algorithm'?", options: ["Um ritmo musical", "Uma sequência de instruções", "Um tipo de gráfico", "Um componente de rede"], correct: 1, category: "ti", difficulty: 2, explanation: "Algoritmo é um conjunto de passos para realizar uma tarefa." },
    { question: "O que é 'Backup'?", options: ["Voltar atrás", "Cópia de segurança", "Fundo de tela", "Parte de trás do PC"], correct: 1, category: "ti", difficulty: 2, explanation: "Cópia de dados para recuperação em caso de perda." },
    { question: "O que é 'Big O Notation'?", options: ["Um logo grande", "Análise de complexidade", "Um erro de compilação", "Uma variável global"], correct: 1, category: "ti", difficulty: 3, explanation: "Descreve a performance ou complexidade de um algoritmo." },
    { question: "Qual a diferença de HTTP e HTTPS?", options: ["Velocidade", "Segurança (Criptografia)", "Preço", "Compatibilidade"], correct: 1, category: "ti", difficulty: 3, explanation: "O 'S' significa Secure (Seguro), usando SSL/TLS." },
    { question: "O que é 'Docker'?", options: ["Um porto", "Plataforma de containers", "Um tipo de documento", "Um médico virtual"], correct: 1, category: "ti", difficulty: 3, explanation: "Ferramenta para criar e gerenciar containers de software." },
    { question: "O que significa 'API'?", options: ["Application Programming Interface", "Advanced Program Internet", "Apple Phone Interface", "Automated Protocol Input"], correct: 0, category: "ti", difficulty: 3, explanation: "Interface que permite que dois softwares se comuniquem." },
    { question: "Qual destes é um banco NoSQL?", options: ["PostgreSQL", "Oracle", "MongoDB", "MariaDB"], correct: 2, category: "ti", difficulty: 3, explanation: "MongoDB é um banco orientado a documentos, não relacional." },
    { question: "O que é 'Blockchain'?", options: ["Um jogo de blocos", "Cadeia de registros descentralizada", "Um tipo de corrente", "Bloqueio de sites"], correct: 1, category: "ti", difficulty: 3, explanation: "Tecnologia por trás das criptomoedas, garantindo registros imutáveis." },
    { question: "O que é um ataque 'DDoS'?", options: ["Negação de Serviço Distribuída", "Roubo de Senha Direta", "Download de Dados Ocultos", "Deletar Disco do Sistema"], correct: 0, category: "ti", difficulty: 3, explanation: "Múltiplos acessos simultâneos para derrubar um servidor." },
    { question: "O que é 'Machine Learning'?", options: ["Aprender a consertar máquinas", "Aprendizado de Máquina (IA)", "Tutorial de PC", "Curso de digitação"], correct: 1, category: "ti", difficulty: 3, explanation: "Ramo da IA onde computadores aprendem com dados." },
    { question: "Qual a função do 'Git'?", options: ["Ouvir música", "Controle de versão", "Editar fotos", "Navegar na web"], correct: 1, category: "ti", difficulty: 3, explanation: "Sistema de controle de versão distribuído para rastrear mudanças no código." },
    { question: "O que é 'VPN'?", options: ["Virtual Private Network", "Very Personal Number", "Visual Photo Name", "Virus Protection Now"], correct: 0, category: "ti", difficulty: 3, explanation: "Rede Privada Virtual, cria uma conexão segura sobre uma rede pública." },
    { question: "O que é 'Full Stack'?", options: ["Uma pilha cheia", "Desenvolvedor Front e Back-end", "Um sanduíche", "Memória lotada"], correct: 1, category: "ti", difficulty: 3, explanation: "Profissional que trabalha tanto no lado do cliente quanto do servidor." },
    { question: "O que é 'Agile'?", options: ["Um pássaro", "Metodologia de desenvolvimento", "Um software de ginástica", "Um tipo de geladeira"], correct: 1, category: "ti", difficulty: 3, explanation: "Abordagem iterativa para gerenciamento de projetos e desenvolvimento de software." },
    { question: "Qual destes é um Framework JS?", options: ["Django", "React", "Laravel", "Spring"], correct: 1, category: "ti", difficulty: 3, explanation: "React é uma biblioteca (frequentemente chamada de framework) JavaScript." },
    { question: "O que é 'Latency'?", options: ["Um tipo de café", "Atraso na rede", "Lateral do computador", "Luz da tela"], correct: 1, category: "ti", difficulty: 3, explanation: "Tempo que um pacote de dados leva para ir de um ponto a outro." },
    { question: "O que significa 'SSD'?", options: ["Super Speed Disk", "Solid State Drive", "System Security Data", "Screen Saver Display"], correct: 1, category: "ti", difficulty: 3, explanation: "Unidade de Estado Sólido, mais rápida que HDs tradicionais." },
    { question: "O que é 'Bug Bounty'?", options: ["Um chocolate", "Caça a recompensas por bugs", "Um jogo de tiro", "Um vírus novo"], correct: 1, category: "ti", difficulty: 3, explanation: "Programas que pagam hackers éticos para encontrar falhas de segurança." },
    { question: "O que é 'Recursive Function'?", options: ["Função que chama a si mesma", "Função quebrada", "Função de relógio", "Função reversa"], correct: 0, category: "ti", difficulty: 3, explanation: "Conceito onde uma função executa chamando a si própria." },
    { question: "Qual a base do sistema Binário?", options: ["10", "2", "16", "8"], correct: 1, category: "ti", difficulty: 3, explanation: "O sistema binário usa apenas dois dígitos: 0 e 1." },
    { question: "Quantos dias tem uma semana?", options: ["5", "6", "7", "8"], correct: 2, category: "geral", difficulty: 1, explanation: "Segunda a Domingo, são 7 dias." },
    { question: "Qual cor é a mistura de azul e amarelo?", options: ["Roxo", "Verde", "Laranja", "Preto"], correct: 1, category: "arte", difficulty: 1, explanation: "Azul e Amarelo formam Verde." },
    { question: "Onde o sol se põe?", options: ["Leste", "Oeste", "Norte", "Sul"], correct: 1, category: "geografia", difficulty: 1, explanation: "O sol nasce no Leste e se põe no Oeste." },
    { question: "Qual animal tem tromba?", options: ["Girafa", "Elefante", "Leão", "Macaco"], correct: 1, category: "ciencias", difficulty: 1, explanation: "O elefante é famoso por sua tromba." },
    { question: "Quantas rodas tem um triciclo?", options: ["2", "3", "4", "1"], correct: 1, category: "matematica", difficulty: 1, explanation: "Tri-ciclo significa três rodas." },
    { question: "O que a vaca produz?", options: ["Refrigerante", "Leite", "Suco", "Mel"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Vacas produzem leite." },
    { question: "Qual a cor do céu limpo de dia?", options: ["Verde", "Azul", "Vermelho", "Roxo"], correct: 1, category: "geral", difficulty: 1, explanation: "Devido à dispersão da luz, vemos o céu azul." },
    { question: "O que usamos para cortar papel?", options: ["Colher", "Tesoura", "Martelo", "Garfo"], correct: 1, category: "geral", difficulty: 1, explanation: "A tesoura é a ferramenta adequada." },
    { question: "Qual mês vem depois de Janeiro?", options: ["Março", "Abril", "Fevereiro", "Dezembro"], correct: 2, category: "geral", difficulty: 1, explanation: "A ordem é Janeiro, Fevereiro..." },
    { question: "Quem é o parceiro do Mickey?", options: ["Pato Donald", "Pateta", "Pluto", "Minnie"], correct: 3, category: "cultura", difficulty: 1, explanation: "Minnie Mouse é a namorada do Mickey." },
    { question: "O que o peixe faz?", options: ["Voa", "Nada", "Late", "Corre"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Peixes nadam." },
    { question: "Qual o sabor principal do limão?", options: ["Doce", "Azedo", "Salgado", "Amargo"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Limões são ácidos e azedos." },
    { question: "Quantos dedos temos em uma mão?", options: ["4", "5", "6", "10"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Temos 5 dedos em cada mão." },
    { question: "O que usamos para ver as horas?", options: ["Bússola", "Relógio", "Termômetro", "Régua"], correct: 1, category: "geral", difficulty: 1, explanation: "Relógios marcam o tempo." },
    { question: "Qual é a capital do Brasil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2, category: "geografia", difficulty: 1, explanation: "Brasília é a capital federal." },
    { question: "Quantos continentes existem?", options: ["4", "5", "6", "7"], correct: 2, category: "geografia", difficulty: 2, explanation: "América, Europa, Ásia, África, Oceania, Antártida (modelo de 6)." },
    { question: "Quem pintou a Mona Lisa?", options: ["Picasso", "Da Vinci", "Van Gogh", "Michelangelo"], correct: 1, category: "arte", difficulty: 2, explanation: "Leonardo da Vinci." },
    { question: "Qual o maior país do mundo?", options: ["China", "EUA", "Brasil", "Rússia"], correct: 3, category: "geografia", difficulty: 2, explanation: "A Rússia é o maior em extensão territorial." },
    { question: "Qual a fórmula da água?", options: ["CO2", "H2O", "O2", "NaCl"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Dois hidrogênios e um oxigênio." },
    { question: "Em que ano o homem pisou na lua?", options: ["1950", "1969", "1980", "2000"], correct: 1, category: "historia", difficulty: 2, explanation: "Neil Armstrong pisou na lua em 1969." },
    { question: "Quantos lados tem um triângulo?", options: ["2", "3", "4", "5"], correct: 1, category: "matematica", difficulty: 2, explanation: "Triângulos têm 3 lados." },
    { question: "Qual a moeda do Japão?", options: ["Dólar", "Euro", "Iene", "Real"], correct: 2, category: "geral", difficulty: 2, explanation: "Iene é a moeda japonesa." },
    { question: "Quem descobriu o Brasil?", options: ["Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Dom Pedro I"], correct: 1, category: "historia", difficulty: 2, explanation: "Cabral chegou em 1500." },
    { question: "Qual o animal mais rápido?", options: ["Leão", "Guepardo", "Cavalo", "Águia"], correct: 1, category: "ciencias", difficulty: 2, explanation: "O Guepardo (Cheetah) é o mais rápido em terra." },
    { question: "O que é um 'bissexto'?", options: ["Ano com 366 dias", "Ano com 364 dias", "Mês de 40 dias", "Feriado"], correct: 0, category: "geral", difficulty: 2, explanation: "Acontece a cada 4 anos, fevereiro tem 29 dias." },
    { question: "Qual a capital da França?", options: ["Londres", "Berlim", "Paris", "Roma"], correct: 2, category: "geografia", difficulty: 2, explanation: "Paris é a capital francesa." },
    { question: "Quantos jogadores num time de vôlei?", options: ["5", "6", "11", "7"], correct: 1, category: "esportes", difficulty: 2, explanation: "6 jogadores em quadra." },
    { question: "Quem é o Rei do Futebol?", options: ["Neymar", "Messi", "Pelé", "Maradona"], correct: 2, category: "esportes", difficulty: 2, explanation: "Edson Arantes do Nascimento, o Pelé." },
    { question: "Qual o planeta vermelho?", options: ["Vênus", "Marte", "Júpiter", "Saturno"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Marte é conhecido como planeta vermelho devido ao óxido de ferro." },
    { question: "O que é fotossíntese?", options: ["Tirar foto", "Planta produzir energia", "Tipo de luz", "Impressão"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Processo onde plantas usam luz solar para criar alimento." },
    { question: "Qual o livro mais vendido do mundo?", options: ["Dom Quixote", "Bíblia", "Harry Potter", "O Senhor dos Anéis"], correct: 1, category: "literatura", difficulty: 2, explanation: "A Bíblia é o livro mais distribuído da história." },
    { question: "Quem escreveu Harry Potter?", options: ["J.K. Rowling", "Tolkien", "George Martin", "Stephen King"], correct: 0, category: "literatura", difficulty: 2, explanation: "J.K. Rowling criou o mundo bruxo." },
    { question: "Qual a capital da Austrália?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2, category: "geografia", difficulty: 3, explanation: "Canberra, não Sydney." },
    { question: "Quantos elementos na tabela periódica?", options: ["100", "118", "150", "92"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Atualmente são 118 elementos confirmados." },
    { question: "Quem compôs a 9ª Sinfonia?", options: ["Mozart", "Bach", "Beethoven", "Chopin"], correct: 2, category: "musica", difficulty: 3, explanation: "Ludwig van Beethoven." },
    { question: "Qual a montanha mais alta do mundo?", options: ["K2", "Everest", "Aconcágua", "Makalu"], correct: 1, category: "geografia", difficulty: 3, explanation: "Monte Everest, com 8.848m." },
    { question: "Em que ano começou a 2ª Guerra Mundial?", options: ["1914", "1939", "1945", "1918"], correct: 1, category: "historia", difficulty: 3, explanation: "Começou em 1939 com a invasão da Polônia." },
    { question: "Qual o símbolo químico do Ouro?", options: ["Ag", "Au", "Fe", "Cu"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Au, do latim Aurum." },
    { question: "Quem pintou 'A Noite Estrelada'?", options: ["Van Gogh", "Monet", "Dali", "Picasso"], correct: 0, category: "arte", difficulty: 3, explanation: "Vincent Van Gogh." },
    { question: "Qual o menor país do mundo?", options: ["Mônaco", "Vaticano", "Malta", "San Marino"], correct: 1, category: "geografia", difficulty: 3, explanation: "O Vaticano fica dentro de Roma e é o menor." },
    { question: "Qual a velocidade da luz?", options: ["300.000 km/s", "150.000 km/s", "1.000 km/s", "Som"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Aproximadamente 300.000 km/s no vácuo." },
    { question: "Quem foi o primeiro presidente dos EUA?", options: ["Lincoln", "Washington", "Jefferson", "Kennedy"], correct: 1, category: "historia", difficulty: 3, explanation: "George Washington." },
    { question: "Qual é o rio mais longo do mundo?", options: ["Amazonas", "Nilo", "Yangtze", "Mississipi"], correct: 0, category: "geografia", difficulty: 3, explanation: "O Amazonas é considerado o mais longo e volumoso." },
    { question: "Quantos corações tem um polvo?", options: ["1", "2", "3", "4"], correct: 2, category: "ciencias", difficulty: 3, explanation: "Três corações: dois para as brânquias, um para o corpo." },
    { question: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Clarice Lispector"], correct: 0, category: "literatura", difficulty: 3, explanation: "Machado de Assis, o Bruxo do Cosme Velho." },
    { question: "Qual o metal líquido à temperatura ambiente?", options: ["Ferro", "Mercúrio", "Chumbo", "Alumínio"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Mercúrio (Hg)." },
    { question: "Onde fica a cidade de Petra?", options: ["Egito", "Jordânia", "Turquia", "Grécia"], correct: 1, category: "geografia", difficulty: 3, explanation: "Petra fica na Jordânia." },
    { question: "Qual a guerra dos 100 anos?", options: ["França x Inglaterra", "EUA x Inglaterra", "Roma x Cartago", "Espanha x Portugal"], correct: 0, category: "historia", difficulty: 3, explanation: "Conflito entre França e Inglaterra (durou 116 anos)." },
    { question: "Quem descobriu a Penicilina?", options: ["Fleming", "Pasteur", "Darwin", "Newton"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Alexander Fleming, em 1928." },
    { question: "Qual o planeta mais quente?", options: ["Mercúrio", "Vênus", "Marte", "Júpiter"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Vênus, devido ao efeito estufa." },

    // --- LOTE 4: NOVAS PERGUNTAS ADICIONADAS ANTERIORMENTE (Mantidos) ---
    { question: "O que é um 'Pixel'?", options: ["Ponto de cor na tela", "Tipo de cabo", "Uma moeda virtual", "Marca de PC"], correct: 0, category: "ti", difficulty: 1, explanation: "Menor elemento de uma imagem digital." },
    { question: "Para que serve o 'Ctrl+V'?", options: ["Copiar", "Colar", "Cortar", "Salvar"], correct: 1, category: "ti", difficulty: 1, explanation: "Atalho universal para colar conteúdo." },
    { question: "O que é 'Spam'?", options: ["Vírus", "E-mail indesejado", "Jogo", "Antivírus"], correct: 1, category: "ti", difficulty: 1, explanation: "Mensagens eletrônicas não solicitadas enviadas em massa." },
    { question: "O que é 'MP3'?", options: ["Formato de vídeo", "Formato de áudio", "Formato de texto", "Formato de imagem"], correct: 1, category: "ti", difficulty: 1, explanation: "Formato de compressão de áudio digital." },
    { question: "Qual a função do 'Monitor'?", options: ["Processar dados", "Exibir imagem", "Tocar som", "Digitar texto"], correct: 1, category: "ti", difficulty: 1, explanation: "Periférico de saída de vídeo." },
    { question: "O que é 'Google'?", options: ["Um jogo", "Um buscador", "Um vírus", "Um tipo de memória"], correct: 1, category: "ti", difficulty: 1, explanation: "Motor de busca mais popular do mundo." },
    { question: "O que é 'Offline'?", options: ["Conectado", "Desconectado", "Rápido", "Lento"], correct: 1, category: "ti", difficulty: 1, explanation: "Estado de não estar conectado à internet." },
    { question: "Para que serve a tecla 'Enter'?", options: ["Apagar", "Confirmar/Quebrar linha", "Sair", "Copiar"], correct: 1, category: "ti", difficulty: 1, explanation: "Usada para confirmar comandos ou pular linhas." },
    { question: "O que é 'ZIP'?", options: ["Formato compactado", "Formato de vídeo", "Marca de PC", "Tipo de mouse"], correct: 0, category: "ti", difficulty: 1, explanation: "Formato de arquivo usado para compressão de dados sem perda." },
    { question: "O que é 'Webcam'?", options: ["Câmera de vídeo para PC", "Site de vídeos", "Tela do computador", "Caixa de som"], correct: 0, category: "ti", difficulty: 1, explanation: "Câmera digital conectada ao computador." },
    { question: "O que é 'Username'?", options: ["Senha", "Nome de usuário", "Endereço IP", "Nome do PC"], correct: 1, category: "ti", difficulty: 1, explanation: "Identificação única de um usuário em um sistema." },
    { question: "O que é 'Password'?", options: ["Nome", "Senha", "E-mail", "Site"], correct: 1, category: "ti", difficulty: 1, explanation: "Código secreto para autenticação." },
    { question: "Qual a função do 'Mousepad'?", options: ["Limpar a tela", "Apoiar o mouse", "Tocar música", "Resfriar o PC"], correct: 1, category: "ti", difficulty: 1, explanation: "Superfície para melhorar o uso do mouse." },
    { question: "O que é 'Restart'?", options: ["Desligar", "Reiniciar", "Suspender", "Bloquear"], correct: 1, category: "ti", difficulty: 1, explanation: "Processo de desligar e ligar o computador novamente." },
    { question: "O que é 'Desktop'?", options: ["Área de trabalho", "Teclado", "Mouse", "Internet"], correct: 0, category: "ti", difficulty: 1, explanation: "Ambiente principal da interface gráfica do usuário." },
    { question: "O que é 'Folder'?", options: ["Arquivo", "Pasta", "Programa", "Site"], correct: 1, category: "ti", difficulty: 1, explanation: "Diretório usado para organizar arquivos." },
    { question: "O que é 'Microservices'?", options: ["Serviços pequenos de limpeza", "Arquitetura de software modular", "Microchips", "Serviços de internet baratos"], correct: 1, category: "ti", difficulty: 2, explanation: "Abordagem arquitetural onde o software é composto por pequenos serviços independentes." },
    { question: "O que é 'GraphQL'?", options: ["Linguagem de consulta para APIs", "Gráfico de ações", "Linguagem de banco SQL", "Biblioteca de gráficos 3D"], correct: 0, category: "ti", difficulty: 2, explanation: "Linguagem de consulta e manipulação de dados para APIs, alternativa ao REST." },
    { question: "O que é 'WebSocket'?", options: ["Soquete de energia", "Protocolo de comunicação bidirecional", "Site bloqueado", "Linguagem web"], correct: 1, category: "ti", difficulty: 2, explanation: "Permite comunicação interativa entre o navegador e o servidor." },
    { question: "O que é 'Stack Overflow'?", options: ["Memória cheia (Erro)", "Site de perguntas e respostas", "Pilha de pratos", "Ambos (Erro e Site)"], correct: 3, category: "ti", difficulty: 2, explanation: "É um erro de estouro de pilha e também o nome da maior comunidade de devs." },
    { question: "O que é 'Refactoring'?", options: ["Formatar o PC", "Melhorar código existente", "Escrever código novo", "Apagar código"], correct: 1, category: "ti", difficulty: 2, explanation: "Processo de reestruturar código existente sem alterar seu comportamento externo." },
    { question: "O que é 'MVP'?", options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Virtual Power", "Main Video Protocol"], correct: 1, category: "ti", difficulty: 2, explanation: "Produto Mínimo Viável: versão mais simples de um produto para validar ideias." },
    { question: "Qual a função do 'Kernel'?", options: ["Interface gráfica", "Núcleo do sistema operacional", "Navegador web", "Antivírus"], correct: 1, category: "ti", difficulty: 2, explanation: "Componente central do SO que gerencia a comunicação entre software e hardware." },
    { question: "O que é 'Compiler'?", options: ["Tradutor de código para máquina", "Editor de texto", "Executor de scripts", "Depurador de erros"], correct: 0, category: "ti", difficulty: 2, explanation: "Programa que traduz código fonte de alto nível para linguagem de máquina." },
    { question: "O que é 'Interpreter'?", options: ["Compila código", "Executa código linha a linha", "Traduz idiomas", "Escreve código"], correct: 1, category: "ti", difficulty: 2, explanation: "Programa que executa instruções escritas em uma linguagem de programação ou script diretamente." },
    { question: "O que é 'Latency'?", options: ["Largura de banda", "Tempo de resposta (atraso)", "Velocidade de download", "Perda de pacote"], correct: 1, category: "ti", difficulty: 2, explanation: "Tempo que leva para um pacote de dados viajar da origem ao destino." },
    { question: "O que é 'Firewall'?", options: ["Parede de fogo real", "Sistema de segurança de rede", "Antivírus de e-mail", "Protetor de tela"], correct: 1, category: "ti", difficulty: 2, explanation: "Dispositivo de segurança que monitora e controla o tráfego de rede." },
    { question: "O que é 'Proxy'?", options: ["Servidor intermediário", "Protocolo de rede", "Programa de chat", "Cabo de rede"], correct: 0, category: "ti", difficulty: 2, explanation: "Atua como intermediário entre o cliente e o servidor." },
    { question: "O que é 'Beta'?", options: ["Versão final", "Versão de teste", "Versão paga", "Versão antiga"], correct: 1, category: "ti", difficulty: 2, explanation: "Versão de software ainda em fase de testes antes do lançamento final." },
    { question: "O que é 'Cache'?", options: ["Dinheiro", "Armazenamento temporário rápido", "Lixo eletrônico", "Tipo de cookie"], correct: 1, category: "ti", difficulty: 2, explanation: "Componente que armazena dados para que futuras solicitações sejam atendidas mais rapidamente." },
    { question: "O que é 'Cookie'?", options: ["Biscoito", "Dado armazenado no navegador", "Vírus", "Programa espião"], correct: 1, category: "ti", difficulty: 2, explanation: "Pequenos arquivos de texto salvos pelo navegador com dados de navegação." },
    { question: "O que é 'Domain'?", options: ["Endereço de um site (Nome)", "IP do servidor", "Hospedagem", "E-mail"], correct: 0, category: "ti", difficulty: 2, explanation: "Nome amigável usado para identificar um ou mais endereços IP (ex: google.com)." },
    { question: "O que é 'Hosting'?", options: ["Hospedagem de sites", "Criação de sites", "Domínio", "Navegação"], correct: 0, category: "ti", difficulty: 2, explanation: "Serviço que armazena os arquivos de um site e o disponibiliza na internet." },
    { question: "O que é 'ACID' em Banco de Dados?", options: ["Ácido corrosivo", "Atomicidade, Consistência, Isolamento, Durabilidade", "Algoritmo de Compressão Inteligente de Dados", "Access Control ID"], correct: 1, category: "ti", difficulty: 3, explanation: "Conjunto de propriedades que garantem a validade de transações em bancos de dados." },
    { question: "O que é 'CAP Theorem'?", options: ["Consistency, Availability, Partition Tolerance", "Computer, Algorithm, Program", "Code, Access, Protocol", "Central, Application, Process"], correct: 0, category: "ti", difficulty: 3, explanation: "Teorema que diz que um sistema distribuído não pode garantir os três simultaneamente." },
    { question: "O que é 'Pointer' em C?", options: ["Seta do mouse", "Variável que armazena endereço de memória", "Comando de impressão", "Ponto final"], correct: 1, category: "ti", difficulty: 3, explanation: "Variável que contém o endereço de memória de outra variável." },
    { question: "O que é 'Race Condition'?", options: ["Competição de velocidade", "Erro por dependência de sequência de eventos", "Condição de corrida de carros", "Teste de performance"], correct: 1, category: "ti", difficulty: 3, explanation: "Falha que ocorre quando o timing ou a ordem dos eventos afeta a correção do programa." },
    { question: "O que é 'Deadlock'?", options: ["Bloqueio mortal em jogos", "Impasse entre processos esperando recursos", "Travamento de tela", "Erro de disco"], correct: 1, category: "ti", difficulty: 3, explanation: "Situação onde dois ou mais processos ficam bloqueados esperando uns pelos outros." },
    { question: "O que é 'Memory Leak'?", options: ["Vazamento de água no PC", "Falha ao liberar memória não usada", "Perda de dados no HD", "Memória RAM queimada"], correct: 1, category: "ti", difficulty: 3, explanation: "Ocorre quando um programa consome memória, mas não a libera de volta ao sistema." },
    { question: "O que é 'REST'?", options: ["Descanso", "Representational State Transfer", "Remote Execution System Tool", "Random Error State Test"], correct: 1, category: "ti", difficulty: 3, explanation: "Estilo de arquitetura de software para sistemas hipermídia distribuídos." },
    { question: "O que é 'OAuth'?", options: ["Autenticação Aberta", "Autorização de Usuário", "Padrão aberto para delegação de acesso", "Sistema de login do Google"], correct: 2, category: "ti", difficulty: 3, explanation: "Protocolo para autorização que permite acesso limitado a recursos de usuário." },
    { question: "O que é 'XSS'?", options: ["Extra Small Size", "Cross-Site Scripting", "XML Style Sheet", "Xenon Server System"], correct: 1, category: "ti", difficulty: 3, explanation: "Vulnerabilidade que permite injeção de scripts maliciosos em páginas web." },
    { question: "O que é 'CSRF'?", options: ["Cross-Site Request Forgery", "Cascading Style Request File", "Computer System Resource Failure", "Client Server Remote Function"], correct: 0, category: "ti", difficulty: 3, explanation: "Ataque que força um usuário autenticado a executar ações indesejadas." },
    { question: "O que é 'Hash Function'?", options: ["Função de mistura", "Mapeia dados para valor de tamanho fixo", "Função de criptografia reversível", "Função de compressão"], correct: 1, category: "ti", difficulty: 3, explanation: "Função que converte uma entrada de tamanho variável em uma saída de tamanho fixo." },
    { question: "O que é 'Public Key Cryptography'?", options: ["Criptografia simétrica", "Criptografia assimétrica", "Senha pública", "Código aberto"], correct: 1, category: "ti", difficulty: 3, explanation: "Sistema que usa um par de chaves: uma pública para encriptar e uma privada para decriptar." },
    { question: "O que é 'TCP/IP'?", options: ["Protocolo de Transferência de Arquivos", "Conjunto de protocolos da Internet", "Tipo de cabo de rede", "Linguagem de programação"], correct: 1, category: "ti", difficulty: 3, explanation: "Transmission Control Protocol/Internet Protocol, a base da comunicação na internet." },
    { question: "O que é 'UDP'?", options: ["User Datagram Protocol", "Universal Data Process", "Upload Download Protocol", "Uniform Device Port"], correct: 0, category: "ti", difficulty: 3, explanation: "Protocolo de comunicação sem conexão e sem garantia de entrega, usado para streaming." },
    { question: "O que é 'NoSQL'?", options: ["Não SQL", "Not Only SQL", "Never SQL", "New SQL"], correct: 1, category: "ti", difficulty: 3, explanation: "Classe de bancos de dados que fornecem mecanismo para armazenamento e recuperação de dados além do tabular." },
    { question: "O que é 'DevOps'?", options: ["Desenvolvedores de Operações", "Cultura de união entre Dev e Ops", "Departamento de TI", "Ferramenta de código"], correct: 1, category: "ti", difficulty: 3, explanation: "Conjunto de práticas que combina desenvolvimento de software (Dev) e operações de TI (Ops)." },
    { question: "O que é 'TDD'?", options: ["Test Driven Development", "Technical Design Document", "Time Driven Data", "Total Data Destruction"], correct: 0, category: "ti", difficulty: 3, explanation: "Desenvolvimento orientado a testes: escrever testes antes do código." },
    { question: "Qual a cor do céu à noite?", options: ["Azul claro", "Preto/Azul escuro", "Verde", "Laranja"], correct: 1, category: "geral", difficulty: 1, explanation: "À noite, sem a luz do sol, o céu parece preto ou azul muito escuro." },
    { question: "O que o sapo come?", options: ["Insetos", "Pedras", "Vidro", "Plástico"], correct: 0, category: "ciencias", difficulty: 1, explanation: "Sapos se alimentam principalmente de insetos e pequenos invertebrados." },
    { question: "Quantas pernas tem o cavalo?", options: ["2", "3", "4", "5"], correct: 2, category: "ciencias", difficulty: 1, explanation: "Cavalos são quadrúpedes." },
    { question: "Onde vive o pinguim?", options: ["Deserto", "Floresta", "Gelo/Polo Sul", "Vulcão"], correct: 2, category: "ciencias", difficulty: 1, explanation: "A maioria vive no Hemisfério Sul, em áreas frias." },
    { question: "Qual a fruta que a Branca de Neve comeu?", options: ["Banana", "Maçã", "Uva", "Pera"], correct: 1, category: "filmes", difficulty: 1, explanation: "A famosa maçã envenenada." },
    { question: "Qual o oposto de 'frio'?", options: ["Gelado", "Quente", "Morno", "Congelado"], correct: 1, category: "geral", difficulty: 1, explanation: "Quente é o antônimo de frio." },
    { question: "O que usamos para escovar os dentes?", options: ["Pente", "Escova de dentes", "Garfo", "Colher"], correct: 1, category: "geral", difficulty: 1, explanation: "Item básico de higiene bucal." },
    { question: "Qual a cor da gema do ovo?", options: ["Branca", "Azul", "Amarela/Laranja", "Verde"], correct: 2, category: "ciencias", difficulty: 1, explanation: "A gema é a parte central amarela ou alaranjada." },
    { question: "O que cai da nuvem quando chove?", options: ["Pedras", "Água", "Fogo", "Areia"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Chuva é precipitação de água." },
    { question: "Qual o som que a vaca faz?", options: ["Miau", "Au au", "Muu", "Piu piu"], correct: 2, category: "geral", difficulty: 1, explanation: "O mugido é o som da vaca." },
    { question: "Quantos dedos temos nos pés (total)?", options: ["5", "10", "15", "20"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Normalmente temos 5 em cada pé, totalizando 10." },
    { question: "Qual o nome do planeta que vivemos?", options: ["Marte", "Terra", "Júpiter", "Lua"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Nosso planeta é a Terra." },
    { question: "O que o sol nos dá?", options: ["Escuridão", "Luz e Calor", "Frio", "Chuva"], correct: 1, category: "ciencias", difficulty: 1, explanation: "O sol é nossa fonte primária de luz e energia térmica." },
    { question: "Qual a cor da grama saudável?", options: ["Azul", "Verde", "Roxa", "Vermelha"], correct: 1, category: "geral", difficulty: 1, explanation: "A clorofila dá a cor verde às plantas." },
    { question: "Para que serve o guarda-chuva?", options: ["Voar", "Proteger da chuva", "Cozinhar", "Dormir"], correct: 1, category: "geral", difficulty: 1, explanation: "Objeto usado para proteção contra chuva." },
    { question: "Quem entrega presentes no Natal?", options: ["Coelhinho da Páscoa", "Papai Noel", "Fada do Dente", "Bicho Papão"], correct: 1, category: "cultura", difficulty: 1, explanation: "Figura lendária do Natal." },
    { question: "Qual a capital da Itália?", options: ["Milão", "Veneza", "Roma", "Nápoles"], correct: 2, category: "geografia", difficulty: 2, explanation: "Roma é a capital histórica e política." },
    { question: "Quantas letras tem o alfabeto (PT-BR)?", options: ["23", "25", "26", "27"], correct: 2, category: "geral", difficulty: 2, explanation: "Desde o novo acordo ortográfico, são 26 letras." },
    { question: "Qual o maior oceano do mundo?", options: ["Atlântico", "Índico", "Pacífico", "Ártico"], correct: 2, category: "geografia", difficulty: 2, explanation: "O Pacífico é o maior e mais profundo." },
    { question: "Quem descobriu a América?", options: ["Cabral", "Colombo", "Vasco da Gama", "Magalhães"], correct: 1, category: "historia", difficulty: 2, explanation: "Cristóvão Colombo em 1492." },
    { question: "Qual a língua mais falada na China?", options: ["Inglês", "Mandarim", "Japonês", "Hindi"], correct: 1, category: "cultura", difficulty: 2, explanation: "O Mandarim é o idioma oficial e mais falado." },
    { question: "O que é um 'mamífero'?", options: ["Nasce de ovo", "Mama quando pequeno", "Tem escamas", "Vive na água"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Animais que se alimentam de leite materno." },
    { question: "Qual o nome da nossa galáxia?", options: ["Andrômeda", "Via Láctea", "Triângulo", "Sombrero"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Vivemos na Via Láctea." },
    { question: "Qual a moeda dos EUA?", options: ["Euro", "Libra", "Dólar", "Iene"], correct: 2, category: "geral", difficulty: 2, explanation: "O Dólar Americano." },
    { question: "O que se comemora em 25 de Dezembro?", options: ["Páscoa", "Natal", "Ano Novo", "Carnaval"], correct: 1, category: "cultura", difficulty: 2, explanation: "O Natal cristão." },
    { question: "Quantos anos tem um século?", options: ["10", "50", "100", "1000"], correct: 2, category: "geral", difficulty: 2, explanation: "Um século corresponde a 100 anos." },
    { question: "Qual o animal símbolo da Austrália?", options: ["Leão", "Canguru", "Urso Polar", "Águia"], correct: 1, category: "geografia", difficulty: 2, explanation: "O Canguru é nativo e símbolo do país." },
    { question: "Qual o maior osso do corpo humano?", options: ["Tíbia", "Fêmur", "Úmero", "Rádio"], correct: 1, category: "ciencias", difficulty: 2, explanation: "O fêmur, localizado na coxa." },
    { question: "Quem pintou o teto da Capela Sistina?", options: ["Da Vinci", "Michelangelo", "Rafael", "Donatello"], correct: 1, category: "arte", difficulty: 2, explanation: "Michelangelo Buonarroti." },
    { question: "Qual a capital da Inglaterra?", options: ["Paris", "Londres", "Dublin", "Edimburgo"], correct: 1, category: "geografia", difficulty: 2, explanation: "Londres é a capital." },
    { question: "O que é 'H2O'?", options: ["Sal", "Açúcar", "Água", "Ar"], correct: 2, category: "ciencias", difficulty: 2, explanation: "Fórmula química da água." },
    { question: "Qual o instrumento do Sherlock Holmes?", options: ["Piano", "Violino", "Flauta", "Bateria"], correct: 1, category: "literatura", difficulty: 2, explanation: "Holmes tocava violino para relaxar." },
    { question: "Onde ficam as Pirâmides de Gizé?", options: ["México", "Egito", "Peru", "China"], correct: 1, category: "geografia", difficulty: 2, explanation: "No Egito, perto do Cairo." },
    { question: "Qual a montanha mais alta da África?", options: ["Everest", "Kilimanjaro", "K2", "Fuji"], correct: 1, category: "geografia", difficulty: 3, explanation: "O Monte Kilimanjaro, na Tanzânia." },
    { question: "Quem escreveu 'Os Lusíadas'?", options: ["Pessoa", "Camões", "Saramago", "Eça"], correct: 1, category: "literatura", difficulty: 3, explanation: "Luís de Camões." },
    { question: "Qual a capital do Canadá?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 2, category: "geografia", difficulty: 3, explanation: "Ottawa é a capital federal." },
    { question: "Qual o elemento químico 'K'?", options: ["Cálcio", "Potássio", "Criptônio", "Cobre"], correct: 1, category: "ciencias", difficulty: 3, explanation: "K vem do latim 'Kalium'." },
    { question: "Em que ano o homem pisou na Lua?", options: ["1959", "1969", "1979", "1961"], correct: 1, category: "historia", difficulty: 3, explanation: "Neil Armstrong, Apollo 11, 1969." },
    { question: "Qual o maior deserto do mundo?", options: ["Saara", "Gobi", "Antártida", "Kalahari"], correct: 2, category: "geografia", difficulty: 3, explanation: "A Antártida é um deserto polar e é o maior em área." },
    { question: "Quem compôs 'As Quatro Estações'?", options: ["Bach", "Vivaldi", "Mozart", "Beethoven"], correct: 1, category: "musica", difficulty: 3, explanation: "Antonio Vivaldi." },
    { question: "Qual a velocidade do som no ar?", options: ["343 m/s", "1000 m/s", "300.000 km/s", "100 m/s"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Aproximadamente 343 metros por segundo a 20°C." },
    { question: "Qual a guerra entre Esparta e Atenas?", options: ["Guerra de Troia", "Guerra do Peloponeso", "Guerras Púnicas", "Guerras Médicas"], correct: 1, category: "historia", difficulty: 3, explanation: "Conflito na Grécia Antiga." },
    { question: "Qual o país com mais ilhas?", options: ["Filipinas", "Indonésia", "Suécia", "Japão"], correct: 2, category: "geografia", difficulty: 3, explanation: "A Suécia tem mais de 260.000 ilhas." },
    { question: "O que é 'Enzima'?", options: ["Uma célula", "Um catalisador biológico", "Um vírus", "Um músculo"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Proteínas que aceleram reações químicas." },
    { question: "Quem foi o 'Rei Sol'?", options: ["Luís XIV", "Henrique VIII", "Carlos V", "Napoleão"], correct: 0, category: "historia", difficulty: 3, explanation: "Luís XIV de França." },
    { question: "Qual a capital da Nova Zelândia?", options: ["Auckland", "Wellington", "Christchurch", "Queenstown"], correct: 1, category: "geografia", difficulty: 3, explanation: "Wellington." },
    { question: "O que é 'Mitose'?", options: ["Morte celular", "Divisão celular", "Fusão nuclear", "Doença"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Processo de divisão celular." },
    { question: "Quem escreveu 'A Divina Comédia'?", options: ["Dante Alighieri", "Maquiavel", "Petrarca", "Boccaccio"], correct: 0, category: "literatura", difficulty: 3, explanation: "Obra prima de Dante." },
    { question: "Qual o menor osso do corpo?", options: ["Estribo", "Martelo", "Bigorna", "Fêmur"], correct: 0, category: "ciencias", difficulty: 3, explanation: "O estribo, localizado no ouvido médio." },
    { question: "Qual a capital da Colômbia?", options: ["Medellín", "Bogotá", "Cali", "Cartagena"], correct: 1, category: "geografia", difficulty: 3, explanation: "Bogotá." },

    // --- LOTE 5: 100 NOVAS PERGUNTAS FAMÍLIA/GERAL ADICIONADAS AGORA (Misturadas) ---
    // FÁCIL
    { question: "Qual a cor da banana madura?", options: ["Verde", "Azul", "Amarela", "Roxa"], correct: 2, category: "geral", difficulty: 1, explanation: "Bananas maduras ficam amarelas." },
    { question: "Quantos meses tem um ano?", options: ["10", "12", "15", "20"], correct: 1, category: "geral", difficulty: 1, explanation: "Um ano possui 12 meses." },
    { question: "O que usamos para ouvir?", options: ["Nariz", "Boca", "Ouvidos", "Mãos"], correct: 2, category: "ciencias", difficulty: 1, explanation: "Os ouvidos são os órgãos da audição." },
    { question: "Qual animal mia?", options: ["Cachorro", "Gato", "Pato", "Vaca"], correct: 1, category: "geral", difficulty: 1, explanation: "O miado é o som do gato." },
    { question: "O que a abelha faz?", options: ["Nada", "Voa", "Corre", "Pula"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Abelhas voam para coletar néctar." },
    { question: "Qual a cor do leite?", options: ["Preto", "Branco", "Azul", "Vermelho"], correct: 1, category: "geral", difficulty: 1, explanation: "O leite de vaca é branco." },
    { question: "Quantas rodas tem uma bicicleta?", options: ["1", "2", "3", "4"], correct: 1, category: "geral", difficulty: 1, explanation: "Bicicletas padrão têm duas rodas." },
    { question: "O que usamos para calçar os pés?", options: ["Chapéu", "Luva", "Sapato", "Cachecol"], correct: 2, category: "geral", difficulty: 1, explanation: "Sapatos protegem os pés." },
    { question: "Qual a forma de uma bola de futebol?", options: ["Quadrada", "Triangular", "Redonda (Esfera)", "Plana"], correct: 2, category: "geral", difficulty: 1, explanation: "A bola é esférica." },
    { question: "Onde o peixe vive?", options: ["Terra", "Ar", "Água", "Fogo"], correct: 2, category: "ciencias", difficulty: 1, explanation: "Peixes são animais aquáticos." },
    { question: "O que usamos para escrever no quadro negro?", options: ["Lápis", "Giz", "Caneta", "Pincel"], correct: 1, category: "geral", difficulty: 1, explanation: "Giz é usado em quadros negros." },
    { question: "Qual a cor do tomate?", options: ["Azul", "Verde", "Vermelho", "Preto"], correct: 2, category: "geral", difficulty: 1, explanation: "Tomates maduros são vermelhos." },
    { question: "Quantos dedos temos em um pé?", options: ["5", "10", "2", "1"], correct: 0, category: "ciencias", difficulty: 1, explanation: "Temos 5 dedos em cada pé." },
    { question: "Qual o dia depois de sexta-feira?", options: ["Domingo", "Segunda", "Sábado", "Quarta"], correct: 2, category: "geral", difficulty: 1, explanation: "Sábado vem após a sexta." },
    { question: "O que o bombeiro apaga?", options: ["Luz", "Fogo", "Água", "Vento"], correct: 1, category: "geral", difficulty: 1, explanation: "Bombeiros combatem incêndios." },
    { question: "Qual a cor da cenoura?", options: ["Azul", "Laranja", "Roxa", "Verde"], correct: 1, category: "geral", difficulty: 1, explanation: "Cenouras comuns são laranjas." },
    { question: "Onde dormimos?", options: ["Mesa", "Cadeira", "Cama", "Fogão"], correct: 2, category: "geral", difficulty: 1, explanation: "Camas são feitas para dormir." },
    { question: "O que usamos para pentear o cabelo?", options: ["Escova/Pente", "Garfo", "Colher", "Faca"], correct: 0, category: "geral", difficulty: 1, explanation: "Usamos pente ou escova." },
    { question: "Qual animal tem pescoço comprido?", options: ["Elefante", "Girafa", "Leão", "Zebra"], correct: 1, category: "ciencias", difficulty: 1, explanation: "A girafa é famosa pelo pescoço longo." },
    { question: "O que bebemos quando temos sede?", options: ["Pão", "Água", "Areia", "Pedra"], correct: 1, category: "geral", difficulty: 1, explanation: "Água hidrata o corpo." },
    { question: "Qual a cor do carvão?", options: ["Branco", "Azul", "Preto", "Amarelo"], correct: 2, category: "geral", difficulty: 1, explanation: "Carvão é preto." },
    { question: "O que usamos para ligar a TV?", options: ["Controle remoto", "Sapato", "Livro", "Copo"], correct: 0, category: "geral", difficulty: 1, explanation: "O controle remoto opera a TV." },
    { question: "Qual estação é muito fria?", options: ["Verão", "Inverno", "Primavera", "Outono"], correct: 1, category: "geral", difficulty: 1, explanation: "O inverno é a estação do frio." },
    { question: "O que o padeiro faz?", options: ["Sapato", "Pão", "Carro", "Casa"], correct: 1, category: "geral", difficulty: 1, explanation: "Padeiros fazem pão." },
    { question: "Qual a cor da neve?", options: ["Preta", "Verde", "Branca", "Azul"], correct: 2, category: "geral", difficulty: 1, explanation: "Neve limpa é branca." },
    { question: "O que usamos para ver filmes no cinema?", options: ["Tela grande", "Espelho", "Janela", "Relógio"], correct: 0, category: "geral", difficulty: 1, explanation: "Cinemas usam telas de projeção." },
    { question: "Qual animal pula e carrega o filhote na bolsa?", options: ["Cachorro", "Gato", "Canguru", "Cavalo"], correct: 2, category: "ciencias", difficulty: 1, explanation: "Cangurus são marsupiais." },
    { question: "O que a galinha come?", options: ["Milho", "Pedra", "Vidro", "Ferro"], correct: 0, category: "ciencias", difficulty: 1, explanation: "Milho é um alimento comum para galinhas." },
    { question: "Qual a cor do chocolate ao leite?", options: ["Branco", "Marrom", "Azul", "Verde"], correct: 1, category: "geral", difficulty: 1, explanation: "Chocolate ao leite é marrom." },
    { question: "O que usamos para lavar as mãos?", options: ["Terra", "Água e Sabão", "Óleo", "Cola"], correct: 1, category: "geral", difficulty: 1, explanation: "Higiene básica requer água e sabão." },
    { question: "Qual a cor da uva roxa?", options: ["Amarela", "Verde", "Roxa", "Azul"], correct: 2, category: "geral", difficulty: 1, explanation: "A uva roxa é... roxa." },
    { question: "O que o professor faz?", options: ["Conserta carros", "Ensina", "Vende pão", "Pinta casas"], correct: 1, category: "geral", difficulty: 1, explanation: "Professores ensinam alunos." },
    { question: "Qual animal é o melhor amigo do homem?", options: ["Gato", "Cachorro", "Passarinho", "Peixe"], correct: 1, category: "cultura", difficulty: 1, explanation: "O cachorro é conhecido por esse título." },
    { question: "O que usamos para falar ao longe?", options: ["Telefone", "Sapato", "Pedra", "Livro"], correct: 0, category: "geral", difficulty: 1, explanation: "Telefones permitem comunicação à distância." },

    // MÉDIO
    { question: "Quantos anos tem uma década?", options: ["5", "10", "20", "50"], correct: 1, category: "geral", difficulty: 2, explanation: "Uma década são 10 anos." },
    { question: "Qual a capital da Espanha?", options: ["Barcelona", "Sevilha", "Madri", "Valência"], correct: 2, category: "geografia", difficulty: 2, explanation: "Madri é a capital." },
    { question: "O que é um 'reptil'?", options: ["Cobra", "Sapo", "Peixe", "Pássaro"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Cobras são répteis." },
    { question: "Quem pintou 'O Grito'?", options: ["Munch", "Van Gogh", "Picasso", "Dali"], correct: 0, category: "arte", difficulty: 2, explanation: "Edvard Munch." },
    { question: "Qual o maior mamífero do mundo?", options: ["Elefante", "Baleia Azul", "Girafa", "Rinoceronte"], correct: 1, category: "ciencias", difficulty: 2, explanation: "A baleia azul é o maior animal existente." },
    { question: "Qual a capital da Argentina?", options: ["Rosário", "Buenos Aires", "Mendoza", "Córdoba"], correct: 1, category: "geografia", difficulty: 2, explanation: "Buenos Aires." },
    { question: "O que é Hélio?", options: ["Um gás", "Um metal", "Um líquido", "Uma pedra"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Hélio é um gás nobre." },
    { question: "Quantas cordas tem um violino?", options: ["3", "4", "5", "6"], correct: 1, category: "musica", difficulty: 2, explanation: "Violinos têm 4 cordas." },
    { question: "Qual o símbolo do Sódio?", options: ["So", "Na", "Si", "S"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Na (Natrium)." },
    { question: "Quem escreveu 'O Pequeno Príncipe'?", options: ["Saint-Exupéry", "Verne", "Hugo", "Dumas"], correct: 0, category: "literatura", difficulty: 2, explanation: "Antoine de Saint-Exupéry." },
    { question: "Qual a capital do Chile?", options: ["Santiago", "Valparaíso", "Concepción", "Arica"], correct: 0, category: "geografia", difficulty: 2, explanation: "Santiago." },
    { question: "O que é um 'anfíbio'?", options: ["Sapo", "Cobra", "Peixe", "Leão"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Sapos vivem na água e na terra (anfíbios)." },
    { question: "Quantos jogadores num time de basquete?", options: ["5", "6", "7", "11"], correct: 0, category: "esportes", difficulty: 2, explanation: "5 jogadores em quadra." },
    { question: "Qual a capital da Rússia?", options: ["São Petersburgo", "Moscou", "Kazan", "Sochi"], correct: 1, category: "geografia", difficulty: 2, explanation: "Moscou." },
    { question: "O que é a 'Via Láctea'?", options: ["Um chocolate", "Nossa Galáxia", "Uma estrada", "Um planeta"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Nome da galáxia onde está o Sistema Solar." },
    { question: "Quem descobriu a gravidade (maçã)?", options: ["Einstein", "Newton", "Galileu", "Tesla"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Isaac Newton." },
    { question: "Qual a capital do Peru?", options: ["Cusco", "Lima", "Arequipa", "Trujillo"], correct: 1, category: "geografia", difficulty: 2, explanation: "Lima." },
    { question: "O que é 'bossa nova'?", options: ["Dança", "Gênero musical", "Comida", "Roupa"], correct: 1, category: "musica", difficulty: 2, explanation: "Estilo musical brasileiro." },
    { question: "Qual o maior órgão do corpo humano?", options: ["Fígado", "Pele", "Coração", "Pulmão"], correct: 1, category: "ciencias", difficulty: 2, explanation: "A pele é o maior órgão." },
    { question: "Quem pintou 'Guernica'?", options: ["Picasso", "Dali", "Miro", "Goya"], correct: 0, category: "arte", difficulty: 2, explanation: "Pablo Picasso." },
    { question: "Qual a capital do México?", options: ["Cancún", "Cidade do México", "Guadalajara", "Monterrey"], correct: 1, category: "geografia", difficulty: 2, explanation: "Cidade do México." },
    { question: "O que é um 'tsunami'?", options: ["Vento forte", "Onda gigante", "Terremoto", "Vulcão"], correct: 1, category: "geografia", difficulty: 2, explanation: "Onda causada por deslocamento de água." },
    { question: "Quantos anéis tem o símbolo olímpico?", options: ["4", "5", "6", "7"], correct: 1, category: "esportes", difficulty: 2, explanation: "5 anéis entrelaçados." },
    { question: "Qual a capital da Índia?", options: ["Mumbai", "Nova Delhi", "Calcutá", "Bangalore"], correct: 1, category: "geografia", difficulty: 2, explanation: "Nova Delhi." },
    { question: "Quem escreveu 'Romeu e Julieta'?", options: ["Shakespeare", "Dickens", "Twain", "Austen"], correct: 0, category: "literatura", difficulty: 2, explanation: "William Shakespeare." },
    { question: "Qual o metal mais precioso?", options: ["Ouro", "Prata", "Ródio", "Cobre"], correct: 2, category: "ciencias", difficulty: 2, explanation: "Ródio é frequentemente mais valioso que ouro." },
    { question: "Qual a capital da Noruega?", options: ["Oslo", "Estocolmo", "Helsinque", "Copenhague"], correct: 0, category: "geografia", difficulty: 2, explanation: "Oslo." },
    { question: "O que é 'jazz'?", options: ["Gênero musical", "Dança", "Pintura", "Esporte"], correct: 0, category: "musica", difficulty: 2, explanation: "Estilo musical originado nos EUA." },
    { question: "Quantos ossos tem o corpo humano adulto?", options: ["200", "206", "210", "215"], correct: 1, category: "ciencias", difficulty: 2, explanation: "206 ossos." },
    { question: "Qual a capital da Suécia?", options: ["Oslo", "Estocolmo", "Helsinque", "Copenhague"], correct: 1, category: "geografia", difficulty: 2, explanation: "Estocolmo." },
    { question: "O que é 'haiku'?", options: ["Luta", "Poema japonês", "Comida", "Roupa"], correct: 1, category: "literatura", difficulty: 2, explanation: "Forma de poesia japonesa." },
    { question: "Quem dirigiu 'O Poderoso Chefão'?", options: ["Coppola", "Scorsese", "Spielberg", "Tarantino"], correct: 0, category: "filmes", difficulty: 2, explanation: "Francis Ford Coppola." },
    { question: "Qual a capital da Bélgica?", options: ["Bruxelas", "Antuérpia", "Ghent", "Bruges"], correct: 0, category: "geografia", difficulty: 2, explanation: "Bruxelas." },

    // DIFÍCIL
    { question: "Qual a capital da Mongólia?", options: ["Ulan Bator", "Astana", "Bishkek", "Tashkent"], correct: 0, category: "geografia", difficulty: 3, explanation: "Ulan Bator." },
    { question: "Quem descobriu o Raio-X?", options: ["Roentgen", "Curie", "Edison", "Tesla"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Wilhelm Roentgen." },
    { question: "Qual a guerra mais longa da história?", options: ["Guerra dos 100 Anos", "Guerra dos 335 Anos", "Cruzadas", "Reconquista"], correct: 1, category: "historia", difficulty: 3, explanation: "Guerra dos 335 Anos (sem sangue)." },
    { question: "Quem escreveu 'Ulysses'?", options: ["Joyce", "Woolf", "Hemingway", "Faulkner"], correct: 0, category: "literatura", difficulty: 3, explanation: "James Joyce." },
    { question: "Qual o elemento químico 'W'?", options: ["Tungstênio", "Wolframio", "Ambos", "Nenhum"], correct: 2, category: "ciencias", difficulty: 3, explanation: "W é Tungstênio (Wolframio em alemão)." },
    { question: "Qual a capital do Vietnã?", options: ["Ho Chi Minh", "Hanói", "Da Nang", "Hue"], correct: 1, category: "geografia", difficulty: 3, explanation: "Hanói." },
    { question: "Quem compôs 'O Lago dos Cisnes'?", options: ["Tchaikovsky", "Stravinsky", "Prokofiev", "Rachmaninoff"], correct: 0, category: "musica", difficulty: 3, explanation: "Pyotr Ilyich Tchaikovsky." },
    { question: "Qual a profundidade média do oceano?", options: ["1km", "3.7km", "5km", "10km"], correct: 1, category: "geografia", difficulty: 3, explanation: "Aprox. 3.700 metros." },
    { question: "Quem foi o último Czar da Rússia?", options: ["Nicolau II", "Pedro I", "Ivan IV", "Alexandre II"], correct: 0, category: "historia", difficulty: 3, explanation: "Nicolau II." },
    { question: "Qual a capital do Paquistão?", options: ["Karachi", "Lahore", "Islamabad", "Peshawar"], correct: 2, category: "geografia", difficulty: 3, explanation: "Islamabad." },
    { question: "O que é 'Entropia'?", options: ["Ordem", "Desordem", "Energia", "Calor"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Medida da desordem de um sistema." },
    { question: "Quem pintou 'O Nascimento de Vênus'?", options: ["Botticelli", "Da Vinci", "Michelangelo", "Rafael"], correct: 0, category: "arte", difficulty: 3, explanation: "Sandro Botticelli." },
    { question: "Qual a capital da Nigéria?", options: ["Lagos", "Abuja", "Kano", "Ibadan"], correct: 1, category: "geografia", difficulty: 3, explanation: "Abuja (desde 1991)." },
    { question: "O que é 'bóson de Higgs'?", options: ["Partícula de Deus", "Vírus", "Estrela", "Planeta"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Partícula fundamental da física." },
    { question: "Quem escreveu 'Cem Anos de Solidão'?", options: ["Márquez", "Borges", "Cortázar", "Neruda"], correct: 0, category: "literatura", difficulty: 3, explanation: "Gabriel García Márquez." },
    { question: "Qual a capital da Arábia Saudita?", options: ["Jeddah", "Riad", "Mecca", "Medina"], correct: 1, category: "geografia", difficulty: 3, explanation: "Riad." },
    { question: "Quem foi o primeiro homem no espaço?", options: ["Armstrong", "Gagarin", "Glenn", "Shepard"], correct: 1, category: "historia", difficulty: 3, explanation: "Yuri Gagarin." },
    { question: "Qual o pH da água pura?", options: ["5", "6", "7", "8"], correct: 2, category: "ciencias", difficulty: 3, explanation: "7 (Neutro)." },
    { question: "Qual a capital da Etiópia?", options: ["Adis Abeba", "Nairóbi", "Cartum", "Mogadíscio"], correct: 0, category: "geografia", difficulty: 3, explanation: "Adis Abeba." },
    { question: "Quem compôs a ópera 'Carmen'?", options: ["Bizet", "Verdi", "Puccini", "Mozart"], correct: 0, category: "musica", difficulty: 3, explanation: "Georges Bizet." },
    { question: "Qual o elemento mais denso?", options: ["Ósmio", "Chumbo", "Ouro", "Mercúrio"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Ósmio é o elemento natural mais denso." },
    { question: "Qual a capital do Irã?", options: ["Bagdá", "Teerã", "Cabul", "Damasco"], correct: 1, category: "geografia", difficulty: 3, explanation: "Teerã." },
    { question: "Quem escreveu 'O Grande Gatsby'?", options: ["Fitzgerald", "Hemingway", "Steinbeck", "Faulkner"], correct: 0, category: "literatura", difficulty: 3, explanation: "F. Scott Fitzgerald." },
    { question: "Qual a capital da Hungria?", options: ["Viena", "Praga", "Budapeste", "Varsóvia"], correct: 2, category: "geografia", difficulty: 3, explanation: "Budapeste." },
    { question: "O que é 'antimatéria'?", options: ["Matéria escura", "Oposto da matéria", "Energia pura", "Vácuo"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Matéria composta por antipartículas." },
    { question: "Quem foi 'Mata Hari'?", options: ["Espiã", "Rainha", "Cientista", "Pintora"], correct: 0, category: "historia", difficulty: 3, explanation: "Dançarina e espiã na 1ª Guerra." },
    { question: "Qual a capital da Finlândia?", options: ["Helsinque", "Oslo", "Estocolmo", "Copenhague"], correct: 0, category: "geografia", difficulty: 3, explanation: "Helsinque." },
    { question: "O que estuda a 'Ontologia'?", options: ["Ser/Existência", "Insetos", "Câncer", "Linguagem"], correct: 0, category: "cultura", difficulty: 3, explanation: "Ramo da filosofia sobre a natureza do ser." },
    { question: "Quem dirigiu '2001: Uma Odisseia no Espaço'?", options: ["Kubrick", "Spielberg", "Lucas", "Scott"], correct: 0, category: "filmes", difficulty: 3, explanation: "Stanley Kubrick." },
    { question: "Qual a capital da Polônia?", options: ["Cracóvia", "Varsóvia", "Gdansk", "Poznan"], correct: 1, category: "geografia", difficulty: 3, explanation: "Varsóvia." },
    { question: "Qual o segundo planeta do sistema solar?", options: ["Vênus", "Marte", "Terra", "Mercúrio"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Mercúrio, Vênus, Terra..." },
    { question: "Quem escreveu 'Fausto'?", options: ["Goethe", "Schiller", "Kafka", "Mann"], correct: 0, category: "literatura", difficulty: 3, explanation: "Johann Wolfgang von Goethe." },
    { question: "Qual a capital da Romênia?", options: ["Bucareste", "Budapeste", "Sófia", "Belgrado"], correct: 0, category: "geografia", difficulty: 3, explanation: "Bucareste." }
];

// --- Lista de Prêmios (Escada de 1 a 15) ---
const prizes = [
    "1. 1 Pão de Queijo",
    "2. 1 Cafezinho Fresco",
    "3. 1 Pote de Doce de Leite",
    "4. 1 Queijo Minas Inteiro",
    "5. 1 Passagem pra Ouro Preto",
    "6. 1 Fusca Cheio de Pequi",
    "7. 1 Sítio na Serra",
    "8. 1 Lote em Betim",
    "9. 1 Franquia de Açaí",
    "10. 1 Caminhonete Diesel",
    "11. 1 Apartamento em BH",
    "12. 1 Mansão na Pampulha",
    "13. 1 Ilha em Capitólio",
    "14. Governador do Universo",
    "15. 1 Milhão de Reais (em ouro)"
];

// --- Variáveis de Estado ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let isGameActive = false;
let hasWon = false;

// --- Elementos do DOM ---
const screenStart = document.getElementById('start-screen');
const screenAbout = document.getElementById('about-screen');
const screenGame = document.getElementById('game-screen');
const screenEnd = document.getElementById('end-screen');
const feedbackOverlay = document.getElementById('feedback-overlay');
const exitOverlay = document.getElementById('exit-overlay');
const toastEl = document.getElementById('game-toast'); // Toast Element

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const categoryBadge = document.getElementById('category-badge');
const prizeListEl = document.getElementById('prize-list');
const currentPrizeDisplay = document.getElementById('current-prize-display');

// Novos Elementos de Progresso
const currentLevelAnim = document.getElementById('current-level-anim');
const progressFill = document.getElementById('progress-fill');

// Feedback Elements
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackCorrectAns = document.getElementById('feedback-correct-answer');
const feedbackExplanation = document.getElementById('feedback-explanation');
const btnNextQ = document.getElementById('btn-next-q');

const endTitle = document.getElementById('end-title');
const endMessage = document.getElementById('end-message');
const endIcon = document.getElementById('end-icon');
const finalPrizeEl = document.getElementById('final-prize');

// --- Funções Principais ---

function startGame(mode) {
    let pool = [];

    // 1. Filtrar o banco de perguntas baseado no modo
    if (mode === 'tech') {
        pool = allQuestions.filter(q => q.category === 'ti');
        // Se não houver perguntas suficientes de TI, completamos com gerais difíceis
        if (pool.length < 15) {
            const extra = allQuestions.filter(q => q.category !== 'ti' && q.difficulty >= 2);
            pool = pool.concat(extra);
        }
    } else {
        // Modo Família (Tudim misturado): REMOVE TI COMPLETAMENTE
        pool = allQuestions.filter(q => q.category !== 'ti');
    }

    // 2. Criar a progressão de dificuldade (5 Fáceis, 5 Médias, 5 Difíceis)
    // O .sort(() => 0.5 - Math.random()) garante a aleatoriedade a cada novo jogo
    const easy = pool.filter(q => q.difficulty === 1).sort(() => 0.5 - Math.random());
    const medium = pool.filter(q => q.difficulty === 2).sort(() => 0.5 - Math.random());
    const hard = pool.filter(q => q.difficulty === 3).sort(() => 0.5 - Math.random());

    let selectedQuestions = [];
    
    // Tenta pegar 5 de cada
    const qEasy = easy.slice(0, 5);
    const qMedium = medium.slice(0, 5);
    const qHard = hard.slice(0, 5);

    selectedQuestions = [...qEasy, ...qMedium, ...qHard];

    // Se ainda não deu 15, completa com aleatórias restantes
    if (selectedQuestions.length < 15) {
        const usedIds = new Set(selectedQuestions.map(q => q.question));
        const remaining = pool.filter(q => !usedIds.has(q.question)).sort(() => 0.5 - Math.random());
        selectedQuestions = selectedQuestions.concat(remaining.slice(0, 15 - selectedQuestions.length));
    }
    
    // Corta em 15 caso tenha passado
    currentQuestions = selectedQuestions.slice(0, 15);

    currentQuestionIndex = 0;
    isGameActive = true;
    hasWon = false;
    
    renderPrizeList();
    
    switchScreen(screenGame);
    showGameToast(); // Mostra o aviso rápido
    loadQuestion();
}

function showGameToast() {
    toastEl.classList.remove('hidden');
    // Força reflow
    void toastEl.offsetWidth;
    toastEl.classList.add('visible');

    // Esconde depois de 3.5 segundos
    setTimeout(() => {
        toastEl.classList.remove('visible');
        setTimeout(() => {
            toastEl.classList.add('hidden');
        }, 500); // Tempo da transição CSS
    }, 3500);
}

function showAbout() {
    // Calcular estatísticas dinamicamente
    const total = allQuestions.length;
    const techCount = allQuestions.filter(q => q.category === 'ti').length;
    const familyCount = total - techCount;

    document.getElementById('total-questions-count').textContent = total;
    document.getElementById('tech-questions-count').textContent = techCount;
    document.getElementById('family-questions-count').textContent = familyCount;

    switchScreen(screenAbout);
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    
    questionText.textContent = q.question;
    categoryBadge.textContent = formatCategory(q.category);
    
    // Atualizar Indicador de Nível com Animação
    currentLevelAnim.textContent = currentQuestionIndex + 1;
    
    // Reiniciar a animação CSS removendo e readicionando a classe
    currentLevelAnim.classList.remove('level-pop');
    void currentLevelAnim.offsetWidth; // Trigger reflow
    currentLevelAnim.classList.add('level-pop');

    // Atualizar Barra de Progresso
    const progressPercent = ((currentQuestionIndex + 1) / 15) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // Atualiza display de prêmio mobile
    const rawPrize = prizes[currentQuestionIndex];
    const prizeText = rawPrize.includes('. ') ? rawPrize.split('. ')[1] : rawPrize;
    currentPrizeDisplay.textContent = `Valendo: ${prizeText}`;

    // Limpar container e criar botões dinamicamente para animar entrada
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.onclick = () => checkAnswer(index);
        
        // Estrutura interna
        const letter = ["A", "B", "C", "D"][index];
        btn.innerHTML = `<span class="opt-letter">${letter}</span> <span class="opt-text">${opt}</span>`;
        
        // Adicionar ao DOM
        optionsContainer.appendChild(btn);

        // Animação de entrada com delay (cascata)
        setTimeout(() => {
            btn.classList.add('slide-in-option');
        }, index * 100); 
    });

    updatePrizeLadder();
}

function checkAnswer(selectedIndex) {
    if (!isGameActive) return;

    const q = currentQuestions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll('.btn-option');
    const correctIndex = q.correct;
    
    // Desabilitar cliques
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        // Acertou
        const btn = buttons[selectedIndex];
        btn.classList.add('correct', 'animate-pop');
        showFeedback(true, q);
    } else {
        // Errou
        const btn = buttons[selectedIndex];
        btn.classList.add('wrong', 'animate-shake');
        
        // Mostra a correta também
        setTimeout(() => {
            buttons[correctIndex].classList.add('correct');
        }, 300);
        
        showFeedback(false, q);
    }
}

function showFeedback(isCorrect, questionData) {
    // Pequeno delay para o usuário ver a animação do botão antes do modal subir
    setTimeout(() => {
        feedbackOverlay.classList.remove('hidden');
        
        if (isCorrect) {
            feedbackIcon.textContent = "✅";
            feedbackTitle.textContent = "Acertou, mizeravi!";
            feedbackTitle.style.color = "var(--success)";
            feedbackCorrectAns.classList.add('hidden');
            
            if (currentQuestionIndex === currentQuestions.length - 1) {
                btnNextQ.textContent = "Ver Resultado Final";
                hasWon = true;
            } else {
                btnNextQ.textContent = "Próxima Pergunta";
                hasWon = false;
            }
        } else {
            feedbackIcon.textContent = "❌";
            feedbackTitle.textContent = "Errou feio, errou rude!";
            feedbackTitle.style.color = "var(--error)";
            
            feedbackCorrectAns.innerHTML = `A resposta certa era: <strong>${questionData.options[questionData.correct]}</strong>`;
            feedbackCorrectAns.classList.remove('hidden');
            
            btnNextQ.textContent = "Ver Pontuação";
            isGameActive = false; 
        }

        feedbackExplanation.textContent = questionData.explanation || "Sem explicação disponível.";
    }, 800); // 800ms de delay
}

function nextQuestion() {
    feedbackOverlay.classList.add('hidden');

    if (!isGameActive) {
        endGame(false);
    } else if (hasWon) {
        endGame(true);
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function endGame(won) {
    switchScreen(screenEnd);
    
    // Atualiza barra final cheia se ganhou
    if(won) progressFill.style.width = '100%';

    if (won) {
        endIcon.textContent = "🏆";
        endTitle.textContent = "Cê é bão mesmo!";
        endMessage.textContent = "Zerou o jogo! Pode pedir música no Fantástico.";
        finalPrizeEl.textContent = prizes[prizes.length - 1]; 
    } else {
        let prizeIndex = currentQuestionIndex - 1;
        // Pega o texto do prêmio sem o número da frente
        let rawPrize = prizeIndex >= 0 ? prizes[prizeIndex] : "Um aperto de mão";
        let prizeName = rawPrize.includes('. ') ? rawPrize.split('. ')[1] : rawPrize;
        
        endIcon.textContent = "💔";
        endTitle.textContent = "Não foi dessa vez";
        endMessage.textContent = "Mas num desanima não! Cê garantiu:";
        finalPrizeEl.textContent = prizeName;
    }
}

// --- Funções de Saída Personalizada ---

function showExitModal() {
    exitOverlay.classList.remove('hidden');
}

function hideExitModal() {
    exitOverlay.classList.add('hidden');
}

function confirmExitAction() {
    hideExitModal();
    goToHome();
}

// --- Funções Auxiliares ---

function renderPrizeList() {
    prizeListEl.innerHTML = '';
    [...prizes].forEach((prize, index) => {
        const li = document.createElement('li');
        li.className = 'prize-item';
        li.textContent = prize; // Já inclui o número agora
        li.dataset.index = index;
        prizeListEl.prepend(li);
    });
}

function updatePrizeLadder() {
    const items = prizeListEl.querySelectorAll('.prize-item');
    items.forEach(item => {
        const idx = parseInt(item.dataset.index);
        item.classList.remove('active', 'passed');
        if (idx === currentQuestionIndex) item.classList.add('active');
        else if (idx < currentQuestionIndex) item.classList.add('passed');
    });
}

function switchScreen(targetScreen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    targetScreen.classList.add('active');
    window.scrollTo(0, 0);
}

function formatCategory(cat) {
    const map = {
        'minas': 'Minas Gerais',
        'esportes': 'Esportes',
        'historia': 'História',
        'filmes': 'Cinema',
        'geral': 'Geral',
        'ti': 'Tecnologia',
        'ciencias': 'Ciências',
        'geografia': 'Geografia',
        'arte': 'Arte',
        'cultura': 'Cultura Pop',
        'musica': 'Música',
        'literatura': 'Literatura',
        'mitologia': 'Mitologia',
        'matematica': 'Matemática'
    };
    return map[cat] || cat.toUpperCase();
}

function goToHome() {
    switchScreen(screenStart);
}