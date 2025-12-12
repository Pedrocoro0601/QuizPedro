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

    // --- NOVOS LOTES (ADICIONADOS ANTERIORMENTE - MANTIDOS) ---
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

    // --- LOTE 4: PERGUNTAS ADICIONADAS ANTERIORMENTE (Mantidos) ---
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

    // --- LOTE 6: PERGUNTAS MISTURADAS (Mantidos) ---
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
    { question: "Qual a capital da Romênia?", options: ["Bucareste", "Budapeste", "Sófia", "Belgrado"], correct: 0, category: "geografia", difficulty: 3, explanation: "Bucareste." },

    // --- LOTE 6: PERGUNTAS MISTURADAS (Mantidos) ---
    { question: "O que é 'Dead Code Elimination'?", options: ["Remover código não usado", "Apagar comentários", "Otimizar imagens", "Deletar logs"], correct: 0, category: "ti", difficulty: 2, explanation: "Otimização de compilador para remover código que não afeta o programa." },
    { question: "O que é 'Vertical Scaling'?", options: ["Adicionar mais máquinas", "Aumentar recursos da mesma máquina (CPU/RAM)", "Mudar de prédio", "Criar microserviços"], correct: 1, category: "ti", difficulty: 2, explanation: "Upgrade de hardware de um servidor existente." },
    { question: "Qual a função do 'Kubernetes'?", options: ["Gerenciar containers", "Compilar Java", "Editar vídeo", "Criar sites"], correct: 0, category: "ti", difficulty: 2, explanation: "Orquestração de containers (como Docker) em clusters." },
    { question: "O que é um 'Singleton'?", options: ["Variável global", "Classe com instância única", "Função sem retorno", "Tipo de dado"], correct: 1, category: "ti", difficulty: 2, explanation: "Padrão de projeto que restringe a instanciação de uma classe a um objeto." },
    { question: "O que significa 'SOLID'?", options: ["Estado da matéria", "Princípios de design OO", "Linguagem de banco", "Protocolo de rede"], correct: 1, category: "ti", difficulty: 3, explanation: "Acrônimo para 5 princípios de design de software orientado a objetos." },
    { question: "O que é 'Lazy Loading'?", options: ["Carregamento lento", "Carregar recursos sob demanda", "Erro de rede", "Preguiça do dev"], correct: 1, category: "ti", difficulty: 2, explanation: "Adiar o carregamento de recursos até que sejam necessários." },
    { question: "Qual a principal característica do 'Rust'?", options: ["Lentidão", "Segurança de memória sem garbage collector", "Sintaxe igual Python", "Apenas para web"], correct: 1, category: "ti", difficulty: 3, explanation: "Foco em performance e segurança, prevenindo erros de memória." },
    { question: "O que é 'JWT'?", options: ["JSON Web Token", "Java Web Tool", "Just Write Text", "Join With Table"], correct: 0, category: "ti", difficulty: 2, explanation: "Padrão para criação de tokens de acesso baseados em JSON." },
    { question: "O que é 'Continuous Integration' (CI)?", options: ["Integrar código frequentemente", "Instalar Windows", "Continuar programando", "Internet rápida"], correct: 0, category: "ti", difficulty: 2, explanation: "Prática de mesclar cópias de trabalho de todos os devs na linha principal várias vezes ao dia." },
    { question: "O que é um 'Foreign Key'?", options: ["Chave estrangeira em DB", "Chave de casa", "Senha do Wi-Fi", "Variável externa"], correct: 0, category: "ti", difficulty: 2, explanation: "Campo que aponta para a chave primária de outra tabela." },
    { question: "O que é 'Big O Notation'?", options: ["Um logo grande", "Análise de complexidade de algoritmos", "Erro de compilação", "Uma variável global"], correct: 1, category: "ti", difficulty: 3, explanation: "Descreve a performance ou complexidade de um algoritmo." },
    { question: "O que é 'Middleware'?", options: ["Software de meio de campo", "Camada entre SO e aplicações", "Vírus leve", "Hardware antigo"], correct: 1, category: "ti", difficulty: 2, explanation: "Software que fornece serviços para outras aplicações além do SO." },
    { question: "O que é 'Serverless'?", options: ["Sem servidor físico", "Execução de código sem gerenciar infra", "Site offline", "Internet P2P"], correct: 1, category: "ti", difficulty: 3, explanation: "Modelo onde o provedor de nuvem gerencia a alocação de recursos." },
    { question: "Qual a função do 'Webpack'?", options: ["Navegador", "Empacotador de módulos (Bundler)", "Banco de dados", "Editor de texto"], correct: 1, category: "ti", difficulty: 2, explanation: "Ferramenta para empacotar arquivos JS e assets para o navegador." },
    { question: "O que é 'Polimorfismo'?", options: ["Múltiplas formas de objetos", "Muitos arquivos", "Vários servidores", "Erro de compilação"], correct: 0, category: "ti", difficulty: 2, explanation: "Capacidade de um objeto ser tratado como instâncias de diferentes classes." },
    { question: "O que é 'Git Rebase'?", options: ["Apagar repositório", "Reaplicar commits em outra base", "Renomear base de dados", "Criar backup"], correct: 1, category: "ti", difficulty: 3, explanation: "Reescreve o histórico de commits movendo-os para uma nova base." },
    { question: "O que é 'Cross-Site Scripting' (XSS)?", options: ["Vulnerabilidade de injeção de script", "Estilo CSS cruzado", "Script de servidor", "Cruzamento de dados"], correct: 0, category: "ti", difficulty: 3, explanation: "Permite que atacantes injetem scripts maliciosos em páginas web." },
    { question: "O que é 'Dependency Injection'?", options: ["Injeção de dependência", "Vacina virtual", "Erro de dependência", "Instalação manual"], correct: 0, category: "ti", difficulty: 3, explanation: "Técnica onde um objeto recebe suas dependências de fora." },
    { question: "O que é 'ORM'?", options: ["Object-Relational Mapping", "Only Read Memory", "Online Resource Manager", "Operational Research Model"], correct: 0, category: "ti", difficulty: 2, explanation: "Técnica para converter dados entre sistemas de tipos incompatíveis." },
    { question: "O que é 'SOAP'?", options: ["Sabão", "Protocolo de troca de mensagens estruturadas", "Linguagem de programação", "Banco de dados"], correct: 1, category: "ti", difficulty: 3, explanation: "Protocolo baseado em XML para acessar serviços web." },
    { question: "O que é 'NoSQL'?", options: ["Não SQL", "Not Only SQL", "Never SQL", "New SQL"], correct: 1, category: "ti", difficulty: 2, explanation: "Bancos de dados não relacionais." },
    { question: "O que é 'Load Balancer'?", options: ["Balança de carga", "Distribuidor de tráfego de rede", "Carregador de bateria", "Editor de peso"], correct: 1, category: "ti", difficulty: 2, explanation: "Distribui tráfego entre vários servidores para otimizar recursos." },
    { question: "O que é 'Unit Testing'?", options: ["Teste de unidade", "Teste de todo o sistema", "Teste manual", "Teste de usuário"], correct: 0, category: "ti", difficulty: 2, explanation: "Testar pequenas partes isoladas do código." },
    { question: "O que é 'Scrum'?", options: ["Framework Ágil", "Linguagem de script", "Tipo de erro", "Servidor"], correct: 0, category: "ti", difficulty: 2, explanation: "Framework para gestão ágil de projetos." },
    { question: "O que é 'MVP'?", options: ["Minimum Viable Product", "Most Valuable Player", "Maximum Virtual Power", "Main Video Protocol"], correct: 0, category: "ti", difficulty: 2, explanation: "Produto Mínimo Viável." },
    { question: "O que é 'Refactoring'?", options: ["Melhorar código sem mudar comportamento", "Reescrever tudo do zero", "Apagar código", "Fazer backup"], correct: 0, category: "ti", difficulty: 2, explanation: "Reestruturar código existente mantendo a funcionalidade externa." },
    { question: "O que é 'CDN'?", options: ["Content Delivery Network", "Central Data Node", "Code Domain Name", "Computer Disk Network"], correct: 0, category: "ti", difficulty: 2, explanation: "Rede de servidores distribuídos para entregar conteúdo rápido." },
    { question: "O que é 'GraphQL'?", options: ["Linguagem de consulta para APIs", "Gráfico de ações", "Linguagem de banco SQL", "Biblioteca de gráficos 3D"], correct: 0, category: "ti", difficulty: 2, explanation: "Alternativa ao REST para APIs, permitindo pedir exatamente o que precisa." },
    { question: "O que é 'Two-Factor Authentication' (2FA)?", options: ["Autenticação de dois fatores", "Duas senhas iguais", "Login duplo", "Erro de fator"], correct: 0, category: "ti", difficulty: 2, explanation: "Camada extra de segurança além da senha." },
    { question: "O que é 'SaaS'?", options: ["Software as a Service", "System as a Server", "Storage and Security", "Simple and Safe"], correct: 0, category: "ti", difficulty: 2, explanation: "Software licenciado por assinatura e hospedado centralmente." },
    { question: "O que é 'Hash'?", options: ["Função que mapeia dados para tamanho fixo", "Comida", "Tag de HTML", "Comando Linux"], correct: 0, category: "ti", difficulty: 2, explanation: "Transforma entrada em string de tamanho fixo, usada em criptografia." },
    { question: "O que é 'OpenAPI'?", options: ["Especificação para APIs RESTful", "API aberta a todos", "Software livre", "Novo Windows"], correct: 0, category: "ti", difficulty: 3, explanation: "Padrão para definir APIs (antigo Swagger)." },
    { question: "O que é 'Microservices'?", options: ["Arquitetura de serviços pequenos e independentes", "Serviços baratos", "Microchips", "Serviços locais"], correct: 0, category: "ti", difficulty: 2, explanation: "Estilo arquitetural que estrutura a aplicação como coleção de serviços." },
    { question: "O que é 'Container' (Docker)?", options: ["Unidade de software isolada", "Caixa de transporte", "Variável", "Pasta"], correct: 0, category: "ti", difficulty: 2, explanation: "Pacote leve e executável de software." },
    { question: "O que é 'DevOps'?", options: ["Cultura unindo Dev e Ops", "Desenvolvedor de Operações", "Departamento de TI", "Ferramenta"], correct: 0, category: "ti", difficulty: 2, explanation: "Práticas que combinam desenvolvimento de software e operações de TI." },
    { question: "O que é 'Headless CMS'?", options: ["CMS sem front-end acoplado", "CMS sem administrador", "CMS quebrado", "CMS automático"], correct: 0, category: "ti", difficulty: 3, explanation: "Gerenciador de conteúdo que entrega dados via API, sem camada de apresentação." },
    { question: "O que é 'WebAssembly'?", options: ["Formato binário para web", "Assembly antigo", "Framework JS", "Plugin"], correct: 0, category: "ti", difficulty: 3, explanation: "Permite rodar código de alta performance (C++, Rust) no navegador." },
    { question: "O que é 'Tree Shaking'?", options: ["Remoção de código morto", "Balançar árvore", "Estrutura de dados", "Animação"], correct: 0, category: "ti", difficulty: 3, explanation: "Otimização que remove código não utilizado do bundle final." },
    { question: "O que é 'NullPointerException'?", options: ["Erro ao acessar referência nula", "Ponteiro apontando para tudo", "Erro de sintaxe", "Variável vazia"], correct: 0, category: "ti", difficulty: 2, explanation: "Exceção comum quando se tenta usar um objeto que é null." },
    { question: "O que é 'Race Condition'?", options: ["Comportamento dependente da sequência de eventos", "Corrida de carros", "Teste de velocidade", "Erro de rede"], correct: 0, category: "ti", difficulty: 3, explanation: "Falha quando o resultado depende da ordem incontrolável de eventos." },
    { question: "O que é 'Closure' em JS?", options: ["Função que lembra seu escopo léxico", "Fechar janela", "Fim de código", "Variável privada"], correct: 0, category: "ti", difficulty: 3, explanation: "Combinação de uma função e o ambiente onde foi declarada." },
    { question: "O que é 'Hoisting' em JS?", options: ["Elevação de declarações", "Hospedagem", "Levantar peso", "Loop"], correct: 0, category: "ti", difficulty: 3, explanation: "Comportamento de mover declarações para o topo do escopo." },
    { question: "O que é 'Event Loop'?", options: ["Gerencia execução assíncrona", "Loop infinito", "Evento de clique", "Plugin"], correct: 0, category: "ti", difficulty: 3, explanation: "Mecanismo que permite JS não bloqueante." },
    { question: "O que é 'Virtual DOM'?", options: ["Cópia leve do DOM em memória", "DOM falso", "Realidade Virtual", "Erro de renderização"], correct: 0, category: "ti", difficulty: 2, explanation: "Conceito usado por bibliotecas como React para otimizar atualizações." },
    { question: "O que é 'Transpiler'?", options: ["Traduz código fonte para outro código fonte", "Compilador binário", "Tradutor de idiomas", "Editor"], correct: 0, category: "ti", difficulty: 3, explanation: "Ex: Babel, que transforma JS moderno em JS compatível." },
    { question: "O que é 'Memoization'?", options: ["Cache de resultados de função", "Memorizar senha", "Escrever memo", "Banco de dados"], correct: 0, category: "ti", difficulty: 3, explanation: "Otimização que guarda o retorno de funções puras." },
    { question: "O que é 'Sharding'?", options: ["Particionamento de banco de dados", "Compartilhar tela", "Criptografia", "Backup"], correct: 0, category: "ti", difficulty: 3, explanation: "Dividir dados em múltiplos servidores." },
    { question: "O que é 'Idempotência'?", options: ["Operação repetida tem mesmo efeito", "Poder total", "Identidade única", "Erro de repetição"], correct: 0, category: "ti", difficulty: 3, explanation: "Propriedade fundamental em APIs REST (ex: PUT, DELETE)." },
    { question: "O que é 'Man-in-the-Middle'?", options: ["Ataque de interceptação", "Gerente", "Servidor central", "Usuário"], correct: 0, category: "ti", difficulty: 3, explanation: "Ataque onde o hacker intercepta a comunicação entre duas partes." },
    { question: "O que é 'Zero-day'?", options: ["Vulnerabilidade recém-descoberta", "Dia de folga", "Começar do zero", "Data inválida"], correct: 0, category: "ti", difficulty: 3, explanation: "Falha de segurança conhecida antes de haver correção." },
    { question: "Qual a capital do Cazaquistão?", options: ["Astana", "Almaty", "Tashkent", "Bishkek"], correct: 0, category: "geografia", difficulty: 3, explanation: "Astana (que chegou a se chamar Nur-Sultan)." },
    { question: "Quem escreveu 'A Arte da Guerra'?", options: ["Sun Tzu", "Confúcio", "Mao Tsé-Tung", "Lao Tsé"], correct: 0, category: "literatura", difficulty: 2, explanation: "Estrategista militar chinês Sun Tzu." },
    { question: "Qual o mineral mais duro da natureza?", options: ["Diamante", "Grafite", "Quartzo", "Topázio"], correct: 0, category: "ciencias", difficulty: 2, explanation: "O diamante atinge 10 na escala de Mohs." },
    { question: "O que é o 'Gato de Schrödinger'?", options: ["Experimento mental de física quântica", "Raça de gato", "Desenho animado", "Constelação"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Paradoxo que ilustra a superposição quântica." },
    { question: "Qual país tem mais lagos no mundo?", options: ["Canadá", "Brasil", "Rússia", "EUA"], correct: 0, category: "geografia", difficulty: 3, explanation: "O Canadá possui mais da metade dos lagos naturais do mundo." },
    { question: "Quem pintou 'O Jardim das Delícias Terrenas'?", options: ["Hieronymus Bosch", "Dali", "Van Eyck", "Bruegel"], correct: 0, category: "arte", difficulty: 3, explanation: "Tríptico famoso de Bosch." },
    { question: "Qual a capital da Islândia?", options: ["Reykjavik", "Oslo", "Nuuk", "Helsinque"], correct: 0, category: "geografia", difficulty: 2, explanation: "Reykjavik é a capital mais setentrional." },
    { question: "O que estuda a 'Herpetologia'?", options: ["Répteis e anfíbios", "Plantas", "Sangue", "Aves"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Ramo da zoologia." },
    { question: "Qual o elemento químico 'W'?", options: ["Tungstênio", "Wolframio", "Ambos estão certos", "Nenhum"], correct: 2, category: "ciencias", difficulty: 3, explanation: "W vem de Wolfram (alemão), chamado Tungstênio em português." },
    { question: "Quem foi o primeiro imperador romano?", options: ["Augusto", "Júlio César", "Nero", "Trajano"], correct: 0, category: "historia", difficulty: 2, explanation: "Otávio Augusto fundou o Império." },
    { question: "Qual a moeda da Coreia do Sul?", options: ["Won", "Iene", "Yuan", "Dong"], correct: 0, category: "geral", difficulty: 2, explanation: "O Won sul-coreano." },
    { question: "O que é 'Sinestesia'?", options: ["Cruzamento de sentidos", "Doença de pele", "Perda de memória", "Técnica de pintura"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Condição onde estímulo em um sentido provoca experiência em outro." },
    { question: "Quem compôs 'As Quatro Estações'?", options: ["Vivaldi", "Bach", "Mozart", "Beethoven"], correct: 0, category: "musica", difficulty: 2, explanation: "Antonio Vivaldi." },
    { question: "Qual a montanha mais alta fora da Ásia?", options: ["Aconcágua", "Kilimanjaro", "Denali", "Elbrus"], correct: 0, category: "geografia", difficulty: 3, explanation: "O Aconcágua, na Argentina (quase 7.000m)." },
    { question: "O que é um 'Haicai'?", options: ["Poema japonês curto", "Luta marcial", "Prato típico", "Roupa"], correct: 0, category: "literatura", difficulty: 2, explanation: "Poema de 3 versos (5-7-5 sílabas)." },
    { question: "Quem descobriu a estrutura do DNA?", options: ["Watson e Crick", "Darwin", "Pasteur", "Einstein"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Com ajuda crucial de Rosalind Franklin." },
    { question: "Qual a capital da Turquia?", options: ["Ancara", "Istambul", "Antália", "Esmirna"], correct: 0, category: "geografia", difficulty: 2, explanation: "Muitos acham que é Istambul, mas é Ancara." },
    { question: "O que é a 'Pedra de Roseta'?", options: ["Chave para decifrar hieróglifos", "Pedra preciosa", "Monumento grego", "Fóssil"], correct: 0, category: "historia", difficulty: 3, explanation: "Fragmento que permitiu traduzir a escrita egípcia." },
    { question: "Qual o maior órgão interno do corpo?", options: ["Fígado", "Pulmão", "Coração", "Estômago"], correct: 0, category: "ciencias", difficulty: 2, explanation: "O Fígado (a pele é o maior externo)." },
    { question: "Quem escreveu '1984'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"], correct: 0, category: "literatura", difficulty: 2, explanation: "Clássico distópico de Orwell." },
    { question: "Qual a capital da Nova Zelândia?", options: ["Wellington", "Auckland", "Christchurch", "Queenstown"], correct: 0, category: "geografia", difficulty: 2, explanation: "Wellington." },
    { question: "O que é 'Niilismo'?", options: ["Negação de sentido/crenças", "Adoração ao Nilo", "Amor à natureza", "Filosofia política"], correct: 0, category: "cultura", difficulty: 3, explanation: "Filosofia associada a Nietzsche, ceticismo radical." },
    { question: "Quem foi a primeira mulher a ganhar um Nobel?", options: ["Marie Curie", "Madre Teresa", "Ada Lovelace", "Rosa Parks"], correct: 0, category: "historia", difficulty: 2, explanation: "Marie Curie (Física e Química)." },
    { question: "Qual a velocidade do som no ar?", options: ["~343 m/s", "~300.000 km/s", "~100 km/h", "~1000 m/s"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Aproximadamente 343 metros por segundo." },
    { question: "O que é um 'Palíndromo'?", options: ["Palavra igual de trás pra frente", "Lugar de cavalos", "Doença antiga", "Figura geométrica"], correct: 0, category: "literatura", difficulty: 2, explanation: "Ex: 'Arara', 'Reviver'." },
    { question: "Qual a capital do Vietnã?", options: ["Hanói", "Ho Chi Minh", "Da Nang", "Hue"], correct: 0, category: "geografia", difficulty: 3, explanation: "Hanói." },
    { question: "Quem pintou 'A Persistência da Memória' (Relógios derretendo)?", options: ["Salvador Dalí", "Picasso", "Miró", "Matisse"], correct: 0, category: "arte", difficulty: 2, explanation: "Ícone do surrealismo." },
    { question: "Qual o elemento mais abundante no universo?", options: ["Hidrogênio", "Oxigênio", "Carbono", "Hélio"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Hidrogênio." },
    { question: "Quem foi o 'Rei Sol'?", options: ["Luís XIV", "Henrique VIII", "Carlos V", "Napoleão"], correct: 0, category: "historia", difficulty: 3, explanation: "Luís XIV de França, monarca absolutista." },
    { question: "Qual a capital da Polônia?", options: ["Varsóvia", "Cracóvia", "Gdansk", "Poznan"], correct: 0, category: "geografia", difficulty: 2, explanation: "Varsóvia." },
    { question: "O que estuda a 'Micologia'?", options: ["Fungos", "Micos", "Minerais", "Músculos"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Ramo da biologia dedicado aos fungos." },
    { question: "Quem dirigiu '2001: Uma Odisseia no Espaço'?", options: ["Stanley Kubrick", "Spielberg", "Lucas", "Nolan"], correct: 0, category: "filmes", difficulty: 3, explanation: "Kubrick." },
    { question: "Qual a moeda da Rússia?", options: ["Rublo", "Dólar", "Euro", "Yuan"], correct: 0, category: "geografia", difficulty: 2, explanation: "Rublo Russo." },
    { question: "O que é 'Obsidiana'?", options: ["Vidro vulcânico", "Metal raro", "Flor", "Planeta"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Rocha ígnea extrusiva." },
    { question: "Quem escreveu 'O Grande Gatsby'?", options: ["F. Scott Fitzgerald", "Hemingway", "Steinbeck", "Faulkner"], correct: 0, category: "literatura", difficulty: 3, explanation: "Retrato da Era do Jazz." },
    { question: "Qual a capital da Colômbia?", options: ["Bogotá", "Medellín", "Cali", "Cartagena"], correct: 0, category: "geografia", difficulty: 2, explanation: "Bogotá." },
    { question: "O que é a 'Sequência de Fibonacci'?", options: ["Série numérica onde o próximo é a soma dos 2 anteriores", "Receita de macarrão", "Código secreto", "Lei física"], correct: 0, category: "matematica", difficulty: 2, explanation: "1, 1, 2, 3, 5, 8..." },
    { question: "Quem foi Nikola Tesla?", options: ["Inventor e engenheiro elétrico", "Criador do carro elétrico", "Presidente sérvio", "Músico"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Pioneiro da corrente alternada." },
    { question: "Qual a capital da Etiópia?", options: ["Adis Abeba", "Nairóbi", "Cairo", "Lagos"], correct: 0, category: "geografia", difficulty: 3, explanation: "Adis Abeba." },
    { question: "O que é 'Urobóros'?", options: ["Serpente engolindo a própria cauda", "Prato grego", "Constelação", "Doença"], correct: 0, category: "cultura", difficulty: 3, explanation: "Símbolo da eternidade e ciclos." },
    { question: "Quem compôs 'Bohemian Rhapsody'?", options: ["Freddie Mercury", "Elton John", "Bowie", "Lennon"], correct: 0, category: "musica", difficulty: 2, explanation: "Queen (Freddie Mercury)." },
    { question: "Qual a camada mais externa da Terra?", options: ["Crosta", "Manto", "Núcleo", "Atmosfera"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Crosta terrestre." },
    { question: "Quem escreveu 'Os Miseráveis'?", options: ["Victor Hugo", "Dumas", "Voltaire", "Balzac"], correct: 0, category: "literatura", difficulty: 2, explanation: "Victor Hugo." },
    { question: "Qual a capital do Marrocos?", options: ["Rabat", "Casablanca", "Marrakech", "Fez"], correct: 0, category: "geografia", difficulty: 3, explanation: "Rabat (Casablanca é a maior, mas não a capital)." },
    { question: "O que é 'Semântica'?", options: ["Estudo do significado", "Estudo do som", "Estudo da gramática", "Estudo da escrita"], correct: 0, category: "cultura", difficulty: 3, explanation: "Área da linguística." },
    { question: "Quem foi o primeiro homem a orbitar a Terra?", options: ["Yuri Gagarin", "Neil Armstrong", "John Glenn", "Laika"], correct: 0, category: "historia", difficulty: 2, explanation: "Gagarin, em 1961." },
    { question: "Qual a capital da Hungria?", options: ["Budapeste", "Bucareste", "Praga", "Viena"], correct: 0, category: "geografia", difficulty: 2, explanation: "Budapeste." },
    { question: "O que é um 'Buraco Negro'?", options: ["Região de gravidade extrema", "Túnel no espaço", "Estrela apagada", "Vazio total"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Nada, nem a luz, escapa dele." },
    { question: "Quem pintou 'A Escola de Atenas'?", options: ["Rafael", "Da Vinci", "Michelangelo", "Donatello"], correct: 0, category: "arte", difficulty: 3, explanation: "Rafael Sanzio." },
    { question: "Qual a moeda do Reino Unido?", options: ["Libra Esterlina", "Euro", "Dólar", "Franco"], correct: 0, category: "geografia", difficulty: 2, explanation: "Pound Sterling." },

    // --- LOTE 7: 50 NOVAS TI (Mais Desafiadoras) ---
    { question: "O que é 'Currying' em Programação Funcional?", options: ["Transformar função de múltiplos argumentos em sequência de unários", "Tempero indiano no código", "Loop infinito", "Erro de recursão"], correct: 0, category: "ti", difficulty: 3, explanation: "Técnica de decompor uma função que recebe múltiplos argumentos em uma cadeia de funções." },
    { question: "Qual a diferença entre 'Process' e 'Thread'?", options: ["Threads compartilham memória, Processos são isolados", "Processos são mais leves", "Não há diferença", "Threads são apenas para UI"], correct: 0, category: "ti", difficulty: 2, explanation: "Processos têm seu próprio espaço de memória; threads dentro de um processo compartilham memória." },
    { question: "O que é 'Sticky Session'?", options: ["Usuário preso ao mesmo servidor na sessão", "Sessão travada", "Cookie doce", "Erro de login"], correct: 0, category: "ti", difficulty: 2, explanation: "Mecanismo de Load Balancer para direcionar requisições do mesmo usuário para o mesmo servidor." },
    { question: "O que é 'Blue-Green Deployment'?", options: ["Dois ambientes idênticos (ativo/inativo) para deploy seguro", "Mistura de cores", "Deploy apenas em dias claros", "Erro de tela azul"], correct: 0, category: "ti", difficulty: 3, explanation: "Estratégia de lançamento que reduz downtime trocando o tráfego entre dois ambientes." },
    { question: "O que é 'Chaos Engineering'?", options: ["Testar resiliência injetando falhas propositais", "Programar sem regras", "Gerenciar caos no escritório", "Engenharia civil"], correct: 0, category: "ti", difficulty: 3, explanation: "Prática introduzida pela Netflix (Chaos Monkey) para garantir que sistemas suportem falhas." },
    { question: "O que é 'CQRS'?", options: ["Segregação de Responsabilidade de Comando e Consulta", "Código Que Roda Sozinho", "Query Simples", "Sistema de Fila"], correct: 0, category: "ti", difficulty: 3, explanation: "Padrão que separa modelos de leitura e escrita." },
    { question: "O que é 'Tree Traversal'?", options: ["Visitar todos os nós de uma árvore", "Cortar árvores", "Jardinagem digital", "Salvar arquivos"], correct: 0, category: "ti", difficulty: 2, explanation: "Processo de visitar cada nó em uma estrutura de dados de árvore (ex: DFS, BFS)." },
    { question: "O que é 'Mutex'?", options: ["Objeto de exclusão mútua", "Texugo mutante", "Variável global", "Protocolo de rede"], correct: 0, category: "ti", difficulty: 3, explanation: "Mecanismo de sincronização para evitar que threads acessem recursos simultaneamente." },
    { question: "O que significa 'SLA'?", options: ["Service Level Agreement", "System Local Access", "Server Low Alert", "Simple Log Analysis"], correct: 0, category: "ti", difficulty: 2, explanation: "Acordo de Nível de Serviço, definindo expectativas entre provedor e cliente." },
    { question: "O que é 'Rubber Duck Debugging'?", options: ["Explicar código a um pato de borracha para achar erros", "Pato que apaga bugs", "Brinquedo de dev", "Linguagem Pato"], correct: 0, category: "ti", difficulty: 2, explanation: "Método psicológico de depuração: ao verbalizar o problema, a solução aparece." },
    { question: "O que é 'Side Effect' em função?", options: ["Mudança de estado fora do escopo local", "Efeito visual", "Erro lateral", "Menu lateral"], correct: 0, category: "ti", difficulty: 2, explanation: "Quando uma função altera algo além de retornar um valor (ex: mudar variável global)." },
    { question: "Qual a função do 'Babel'?", options: ["Transpilador JS", "Torre bíblica", "Tradutor de inglês", "Banco de dados"], correct: 0, category: "ti", difficulty: 2, explanation: "Converte JavaScript moderno (ES6+) em versões compatíveis com navegadores antigos." },
    { question: "O que é 'Hot Reloading'?", options: ["Atualizar código sem perder estado da aplicação", "Recarregar arma", "Esquentar PC", "Reiniciar servidor"], correct: 0, category: "ti", difficulty: 2, explanation: "Recurso comum em frameworks modernos (React, Flutter) para desenvolvimento rápido." },
    { question: "O que é 'Technical Debt'?", options: ["Custo implícito de escolher solução rápida vs correta", "Dívida no banco", "Pagar licença", "Erro técnico"], correct: 0, category: "ti", difficulty: 2, explanation: "Dívida Técnica: trabalho extra futuro gerado por soluções fáceis agora." },
    { question: "O que é 'Kanban'?", options: ["Método visual de gestão de fluxo", "Luta japonesa", "Tipo de servidor", "Linguagem de script"], correct: 0, category: "ti", difficulty: 2, explanation: "Sistema de cartões para gerenciar tarefas e fluxo de trabalho." },
    { question: "O que é 'Event Sourcing'?", options: ["Armazenar estado como sequência de eventos", "Fonte de eventos", "Festa de devs", "Plugin de calendário"], correct: 0, category: "ti", difficulty: 3, explanation: "Padrão onde todas as mudanças no estado da aplicação são salvas como eventos." },
    { question: "O que é 'Polyfill'?", options: ["Código que implementa recurso faltante no navegador", "Massa corrida", "Preenchimento de polígonos", "Arquivo zip"], correct: 0, category: "ti", difficulty: 3, explanation: "Permite usar APIs modernas em navegadores que não as suportam nativamente." },
    { question: "O que é 'Three-way Handshake'?", options: ["Processo de conexão TCP (SYN, SYN-ACK, ACK)", "Cumprimento secreto", "Negociação de preço", "Login triplo"], correct: 0, category: "ti", difficulty: 3, explanation: "Método usado pelo TCP para estabelecer uma conexão confiável." },
    { question: "O que é 'Dependency Hell'?", options: ["Conflito de versões de bibliotecas", "Lugar quente", "Erro de banco", "Hackers"], correct: 0, category: "ti", difficulty: 2, explanation: "Problemas complexos causados por dependências de software conflitantes." },
    { question: "O que é 'Monorepo'?", options: ["Repositório único para múltiplos projetos", "Repositório mono usuário", "Projeto pequeno", "Banco único"], correct: 0, category: "ti", difficulty: 2, explanation: "Estratégia de armazenar código de muitos projetos no mesmo repositório." },
    { question: "O que é 'Linting'?", options: ["Análise estática de código para erros/estilo", "Limpar tela", "Linkar arquivos", "Compilar"], correct: 0, category: "ti", difficulty: 2, explanation: "Ferramentas (Linters) que buscam problemas no código antes da execução." },
    { question: "O que é 'Dark Mode' em UX?", options: ["Interface com cores escuras", "Modo secreto", "Erro de tela", "Vírus"], correct: 0, category: "ti", difficulty: 1, explanation: "Esquema de cores preferido por muitos devs para reduzir cansaço visual." },
    { question: "O que é 'Native' app?", options: ["App desenvolvido para plataforma específica (iOS/Android)", "App web", "App híbrido", "App antigo"], correct: 0, category: "ti", difficulty: 2, explanation: "Software construído especificamente para o sistema operacional do dispositivo." },
    { question: "O que é 'SSO'?", options: ["Single Sign-On", "Super Safe Online", "Server System Out", "Simple Site Option"], correct: 0, category: "ti", difficulty: 2, explanation: "Autenticação única: login em vários sistemas com uma credencial." },
    { question: "O que é 'Daemon'?", options: ["Processo em background", "Demônio de jogo", "Erro fatal", "Vírus"], correct: 0, category: "ti", difficulty: 3, explanation: "Programa que roda em segundo plano, sem interação direta do usuário." },
    { question: "O que é 'Integer Overflow'?", options: ["Valor excede capacidade do tipo inteiro", "Copo cheio", "Erro de texto", "Memória vazia"], correct: 0, category: "ti", difficulty: 2, explanation: "Quando um cálculo aritmético ultrapassa o valor máximo armazenável." },
    { question: "O que é 'Boilerplate Code'?", options: ["Código repetitivo padrão", "Código quente", "Placa de metal", "Código errado"], correct: 0, category: "ti", difficulty: 2, explanation: "Seções de código que devem ser incluídas em muitos lugares com pouca alteração." },
    { question: "O que é 'TTL'?", options: ["Time To Live", "Talk To Later", "Total Text Length", "Table Type List"], correct: 0, category: "ti", difficulty: 2, explanation: "Mecanismo que limita a vida útil de dados ou pacotes na rede." },
    { question: "O que é 'Sanitization'?", options: ["Limpar inputs para evitar injeção", "Limpar tela", "Organizar arquivos", "Formatar PC"], correct: 0, category: "ti", difficulty: 2, explanation: "Prática de segurança para garantir que dados de entrada não contenham comandos maliciosos." },
    { question: "O que é 'Semantic HTML'?", options: ["Uso de tags com significado (nav, article)", "HTML antigo", "HTML colorido", "Apenas div e span"], correct: 0, category: "ti", difficulty: 2, explanation: "Usar tags que descrevem o conteúdo para acessibilidade e SEO." },
    { question: "O que é 'VPS'?", options: ["Virtual Private Server", "Very Powerful System", "Video Play Speed", "Visual Private Source"], correct: 0, category: "ti", difficulty: 2, explanation: "Máquina virtual vendida como serviço por empresas de hospedagem." },
    { question: "O que é 'Throughput'?", options: ["Taxa de transferência de dados", "Através de", "Latência", "Perda de pacote"], correct: 0, category: "ti", difficulty: 2, explanation: "Quantidade de dados processados em um período de tempo." },
    { question: "O que é 'Keylogger'?", options: ["Malware que registra teclas", "Login por chave", "Gerenciador de senhas", "Teclado virtual"], correct: 0, category: "ti", difficulty: 2, explanation: "Software espião que grava tudo que é digitado." },
    { question: "O que é 'Spoofing'?", options: ["Falsificação de identidade em rede", "Brincadeira", "Spam", "Erro de digitação"], correct: 0, category: "ti", difficulty: 3, explanation: "Ataque onde uma pessoa/programa se mascara como outro falsificando dados." },
    { question: "O que é 'Firmware'?", options: ["Software embutido no hardware", "Software firme", "Antivírus", "Capa de celular"], correct: 0, category: "ti", difficulty: 2, explanation: "Software de baixo nível que controla o hardware." },
    { question: "O que é 'BIOS'?", options: ["Basic Input/Output System", "Binary Input OS", "Basic Internet Open Source", "Big Integrated Operating System"], correct: 0, category: "ti", difficulty: 2, explanation: "Firmware usado para inicializar o hardware durante o boot." },
    { question: "O que é 'Mainframe'?", options: ["Computador de grande porte para processamento massivo", "Tela principal", "Moldura", "PC Gamer"], correct: 0, category: "ti", difficulty: 2, explanation: "Computadores poderosos usados por grandes organizações." },
    { question: "O que é 'Clock Speed'?", options: ["Velocidade do processador (Hz)", "Hora do sistema", "Tempo de boot", "Cronômetro"], correct: 0, category: "ti", difficulty: 1, explanation: "Frequência na qual o processador executa instruções." },
    { question: "O que é 'Overclocking'?", options: ["Aumentar velocidade do componente acima do padrão", "Relógio extra", "Trabalhar muito", "Erro de tempo"], correct: 0, category: "ti", difficulty: 2, explanation: "Prática de forçar hardware a rodar mais rápido que a especificação." },
    { question: "O que é 'Botnet'?", options: ["Rede de computadores infectados controlados remotamente", "Rede de robôs amigos", "Internet rápida", "Chatbot"], correct: 0, category: "ti", difficulty: 2, explanation: "Rede usada para ataques DDoS e spam." },
    { question: "O que é 'Ransomware'?", options: ["Malware que sequestra dados por resgate", "Software de corrida", "Antivírus pago", "Jogo de resgate"], correct: 0, category: "ti", difficulty: 2, explanation: "Tipo de malware que criptografa arquivos e exige pagamento." },
    { question: "O que é 'GUI'?", options: ["Graphical User Interface", "Global Unit Index", "General User Info", "Game UI"], correct: 0, category: "ti", difficulty: 1, explanation: "Interface gráfica que permite interação visual." },
    { question: "O que é 'CLI'?", options: ["Command Line Interface", "Code Line Input", "Common Language Interface", "Central Link Info"], correct: 0, category: "ti", difficulty: 2, explanation: "Interface de Linha de Comando (terminal)." },
    { question: "O que é 'Sudo'?", options: ["SuperUser DO", "Suar muito", "Comando de saída", "Apelido de admin"], correct: 0, category: "ti", difficulty: 2, explanation: "Comando Linux para executar tarefas com privilégios elevados." },
    { question: "O que é 'Chmod'?", options: ["Change Mode (permissões)", "Change Model", "Chat Mode", "Check Modem"], correct: 0, category: "ti", difficulty: 2, explanation: "Comando para alterar permissões de arquivos no Unix." },
    { question: "O que é '404'?", options: ["Not Found", "Server Error", "Success", "Forbidden"], correct: 0, category: "ti", difficulty: 1, explanation: "Código de status HTTP para recurso não encontrado." },
    { question: "O que é '500'?", options: ["Internal Server Error", "Not Found", "OK", "Redirect"], correct: 0, category: "ti", difficulty: 2, explanation: "Erro genérico do servidor." },
    { question: "O que é 'Stack Trace'?", options: ["Rastro da pilha de execução (para debug)", "Pilha de livros", "Rastreio de entrega", "Histórico do navegador"], correct: 0, category: "ti", difficulty: 2, explanation: "Relatório que fornece informações sobre as chamadas de função ativas em um ponto." },
    { question: "O que é 'Variable Scope'?", options: ["Contexto onde variável é acessível", "Tamanho da variável", "Tipo da variável", "Valor da variável"], correct: 0, category: "ti", difficulty: 2, explanation: "Define a visibilidade e tempo de vida de variáveis." },
    { question: "O que é 'Callback Hell'?", options: ["Muitos callbacks aninhados dificultando leitura", "Ligação ruim", "Erro de retorno", "Festa do inferno"], correct: 0, category: "ti", difficulty: 2, explanation: "Fenômeno em JS assíncrono com muitos aninhamentos (Pyramid of Doom)." },

    // --- LOTE 8: 50 NOVAS VARIADADES (Médio / Difícil) ---
    { question: "Qual a capital do Butão?", options: ["Timbu", "Catmandu", "Daca", "Lhasa"], correct: 0, category: "geografia", difficulty: 3, explanation: "Timbu (Thimphu)." },
    { question: "Quem escreveu 'O Príncipe'?", options: ["Maquiavel", "Dante", "Platão", "Hobbes"], correct: 0, category: "literatura", difficulty: 2, explanation: "Nicolau Maquiavel." },
    { question: "Qual o maior osso do corpo humano?", options: ["Fêmur", "Tíbia", "Úmero", "Bacia"], correct: 0, category: "ciencias", difficulty: 1, explanation: "O Fêmur, na coxa." },
    { question: "Qual a cidade mais antiga continuamente habitada?", options: ["Damasco", "Roma", "Atenas", "Jericó"], correct: 0, category: "geografia", difficulty: 3, explanation: "Damasco (Síria) é frequentemente citada." },
    { question: "Quem descobriu a Penicilina?", options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Freud"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Por acidente, em 1928." },
    { question: "Qual a capital da Estônia?", options: ["Tallinn", "Riga", "Vilnius", "Helsinque"], correct: 0, category: "geografia", difficulty: 3, explanation: "Tallinn." },
    { question: "O que é a 'Pedra Filosofal' na lenda?", options: ["Transforma metais em ouro", "Pedra que fala", "Arma mágica", "Livro antigo"], correct: 0, category: "cultura", difficulty: 2, explanation: "Objeto mítico da alquimia." },
    { question: "Quem pintou 'A Ronda Noturna'?", options: ["Rembrandt", "Vermeer", "Van Gogh", "Rubens"], correct: 0, category: "arte", difficulty: 3, explanation: "Obra prima de Rembrandt." },
    { question: "Qual o país com maior IDH do mundo (geralmente)?", options: ["Noruega", "EUA", "Japão", "Brasil"], correct: 0, category: "geografia", difficulty: 2, explanation: "Noruega e Suíça costumam alternar no topo." },
    { question: "O que é 'Efêmero'?", options: ["Passageiro, dura pouco", "Eterno", "Feminino", "Doença"], correct: 0, category: "geral", difficulty: 2, explanation: "Algo que tem curta duração." },
    { question: "Quem foi o deus grego do vinho?", options: ["Dionísio", "Apolo", "Zeus", "Hades"], correct: 0, category: "mitologia", difficulty: 2, explanation: "Dionísio (Baco para os romanos)." },
    { question: "Qual a capital do Líbano?", options: ["Beirute", "Amã", "Damasco", "Tel Aviv"], correct: 0, category: "geografia", difficulty: 2, explanation: "Beirute." },
    { question: "Quem escreveu 'A Metamorfose'?", options: ["Franz Kafka", "Orwell", "Sartre", "Camus"], correct: 0, category: "literatura", difficulty: 2, explanation: "Kafka (Gregor Samsa vira um inseto)." },
    { question: "Qual o símbolo químico da Prata?", options: ["Ag", "Au", "Pt", "Si"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Ag (Argentum)." },
    { question: "O que é 'Filantropia'?", options: ["Amor à humanidade (caridade)", "Estudo de selos", "Medo de plantas", "Amor a cavalos"], correct: 0, category: "geral", difficulty: 2, explanation: "Ajudar o próximo." },
    { question: "Quem foi a 'Dama de Ferro'?", options: ["Margaret Thatcher", "Rainha Vitória", "Angela Merkel", "Joana d'Arc"], correct: 0, category: "historia", difficulty: 2, explanation: "Primeira-ministra britânica." },
    { question: "Qual a capital da Croácia?", options: ["Zagreb", "Dubrovnik", "Split", "Belgrado"], correct: 0, category: "geografia", difficulty: 3, explanation: "Zagreb." },
    { question: "O que é 'Ikigai'?", options: ["Razão de viver (Conceito japonês)", "Comida crua", "Luta de espada", "Bonsai"], correct: 0, category: "cultura", difficulty: 3, explanation: "Conceito de propósito de vida." },
    { question: "Quem compôs o 'Bolero'?", options: ["Ravel", "Debussy", "Chopin", "Bach"], correct: 0, category: "musica", difficulty: 3, explanation: "Maurice Ravel." },
    { question: "Qual a camada de ozônio protege contra?", options: ["Raios Ultravioleta (UV)", "Raios Gama", "Chuva ácida", "Meteoros"], correct: 0, category: "ciencias", difficulty: 1, explanation: "Protege a Terra da radiação UV nociva." },
    { question: "Quem escreveu 'Orgulho e Preconceito'?", options: ["Jane Austen", "Emily Bronte", "Woolf", "Agatha Christie"], correct: 0, category: "literatura", difficulty: 2, explanation: "Jane Austen." },
    { question: "Qual a capital da Venezuela?", options: ["Caracas", "Quito", "Bogotá", "La Paz"], correct: 0, category: "geografia", difficulty: 2, explanation: "Caracas." },
    { question: "O que é um 'Habeas Corpus'?", options: ["Garantia de liberdade", "Corpo de delito", "Prova de crime", "Julgamento final"], correct: 0, category: "geral", difficulty: 2, explanation: "Recurso jurídico para garantir liberdade de locomoção." },
    { question: "Quem foi Spartacus?", options: ["Gladiador que liderou revolta", "Imperador", "Filósofo", "Deus"], correct: 0, category: "historia", difficulty: 2, explanation: "Líder da revolta dos escravos contra Roma." },
    { question: "Qual a capital da Áustria?", options: ["Viena", "Berna", "Berlim", "Budapeste"], correct: 0, category: "geografia", difficulty: 2, explanation: "Viena." },
    { question: "O que é 'Fotofobia'?", options: ["Sensibilidade à luz", "Medo de fotos", "Gostar de escuro", "Doença de planta"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Aversão ou sensibilidade à luz." },
    { question: "Quem pintou 'Moça com Brinco de Pérola'?", options: ["Vermeer", "Rembrandt", "Van Gogh", "Da Vinci"], correct: 0, category: "arte", difficulty: 3, explanation: "Johannes Vermeer." },
    { question: "Qual o maior animal marinho?", options: ["Baleia Azul", "Tubarão Branco", "Lula Colossal", "Orca"], correct: 0, category: "ciencias", difficulty: 1, explanation: "Baleia Azul." },
    { question: "Quem foi Winston Churchill?", options: ["Primeiro-ministro britânico na 2ª Guerra", "Presidente dos EUA", "General Alemão", "Escritor francês"], correct: 0, category: "historia", difficulty: 2, explanation: "Líder do Reino Unido durante a guerra." },
    { question: "Qual a capital da Sérvia?", options: ["Belgrado", "Sarajevo", "Zagreb", "Skopje"], correct: 0, category: "geografia", difficulty: 3, explanation: "Belgrado." },
    { question: "O que é 'Taxidermia'?", options: ["Empalhar animais", "Estudo de táxis", "Coleção de selos", "Cirurgia"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Técnica de preservação da forma da pele de animais." },
    { question: "Quem dirigiu 'Pulp Fiction'?", options: ["Tarantino", "Scorsese", "Nolan", "Spielberg"], correct: 0, category: "filmes", difficulty: 2, explanation: "Quentin Tarantino." },
    { question: "Qual a moeda da China?", options: ["Yuan (Renminbi)", "Iene", "Won", "Dólar"], correct: 0, category: "geografia", difficulty: 2, explanation: "Yuan." },
    { question: "O que é 'Aurora Boreal'?", options: ["Luzes polares no hemisfério norte", "Estrela cadente", "Cometa", "Nascer do sol"], correct: 0, category: "geografia", difficulty: 2, explanation: "Fenômeno luminoso no norte (no sul é Austral)." },
    { question: "Quem escreveu 'O Conde de Monte Cristo'?", options: ["Alexandre Dumas", "Victor Hugo", "Verne", "Zola"], correct: 0, category: "literatura", difficulty: 2, explanation: "Alexandre Dumas." },
    { question: "Qual a capital do Uruguai?", options: ["Montevidéu", "Assunção", "Buenos Aires", "Santiago"], correct: 0, category: "geografia", difficulty: 2, explanation: "Montevidéu." },
    { question: "O que é 'Teorema de Pitágoras'?", options: ["Relação em triângulos retângulos", "Física quântica", "Química", "Lei gravitacional"], correct: 0, category: "matematica", difficulty: 1, explanation: "a² + b² = c²." },
    { question: "Quem inventou a lâmpada (comercial)?", options: ["Edison", "Tesla", "Bell", "Newton"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Thomas Edison." },
    { question: "Qual a capital da Indonésia (atual)?", options: ["Jacarta", "Bali", "Manila", "Kuala Lumpur"], correct: 0, category: "geografia", difficulty: 3, explanation: "Jacarta (mas planejam mudar)." },
    { question: "O que é 'Zen'?", options: ["Escola de Budismo", "Tipo de chá", "Yoga", "Massagem"], correct: 0, category: "cultura", difficulty: 2, explanation: "Budismo focado em meditação." },
    { question: "Quem compôs 'Nona Sinfonia' (Ode à Alegria)?", options: ["Beethoven", "Mozart", "Bach", "Wagner"], correct: 0, category: "musica", difficulty: 2, explanation: "Beethoven." },
    { question: "Qual a camada de gás que envolve a Terra?", options: ["Atmosfera", "Hidrosfera", "Litosfera", "Biosfera"], correct: 0, category: "ciencias", difficulty: 1, explanation: "Atmosfera." },
    { question: "Quem escreveu 'Drácula'?", options: ["Bram Stoker", "Shelley", "Poe", "King"], correct: 0, category: "literatura", difficulty: 2, explanation: "Bram Stoker." },
    { question: "Qual a capital do Quênia?", options: ["Nairóbi", "Lagos", "Cairo", "Dakar"], correct: 0, category: "geografia", difficulty: 3, explanation: "Nairóbi." },
    { question: "O que é 'Pragmático'?", options: ["Prático, objetivo", "Sonhador", "Preguiçoso", "Teórico"], correct: 0, category: "geral", difficulty: 3, explanation: "Focado na prática e resultados." },
    { question: "Quem foi Joana d'Arc?", options: ["Heroína francesa e santa", "Rainha da Inglaterra", "Bruxa", "Pintora"], correct: 0, category: "historia", difficulty: 2, explanation: "Líder militar na Guerra dos 100 Anos." },
    { question: "Qual a capital da República Tcheca?", options: ["Praga", "Viena", "Budapeste", "Bratislava"], correct: 0, category: "geografia", difficulty: 2, explanation: "Praga." },
    { question: "O que é 'Supernova'?", options: ["Explosão estelar", "Estrela nova", "Buraco negro", "Planeta gigante"], correct: 0, category: "ciencias", difficulty: 2, explanation: "Morte explosiva de uma estrela massiva." },
    { question: "Quem pintou 'O Beijo'?", options: ["Gustav Klimt", "Picasso", "Munch", "Rodin"], correct: 0, category: "arte", difficulty: 3, explanation: "Gustav Klimt." },
    { question: "Qual a moeda do México?", options: ["Peso Mexicano", "Dólar", "Real", "Sol"], correct: 0, category: "geografia", difficulty: 2, explanation: "Peso." }
];

// --- Lista de Prêmios (Escada de 1 a 50) ---
const prizes = [
    "1. 1 Pão de Queijo",
    "2. 1 Cafezinho Fresco",
    "3. 1 Paçoca",
    "4. 1 Pote de Doce de Leite",
    "5. 1 Queijo Minas Frescal",
    "6. 1 Broa de Fubá",
    "7. 1 Goiabada Cascão",
    "8. 1 Cachaça da Roça",
    "9. 1 Frango com Quiabo",
    "10. 1 Feijão Tropeiro",
    "11. 1 Leitão à Pururuca",
    "12. 1 Passagem pra Ouro Preto",
    "13. 1 Fim de semana em Tiradentes",
    "14. 1 Fusca 78 (Inteirão)",
    "15. 1 Opala Diplomata",
    "16. 1 Lote em Betim",
    "17. 1 Sítio em Brumadinho",
    "18. 1 Casa na Pampulha",
    "19. 1 Apartamento no Savassi",
    "20. 1 Cobertura no Belvedere",
    "21. 1 Fazenda de Café",
    "22. 1 Mina de Ouro (Pequena)",
    "23. 1 Franquia de Açaí",
    "24. 1 Rede de Supermercados",
    "25. Prefeito de BH",
    "26. Governador de Minas",
    "27. Presidente do Galo/Cruzeiro",
    "28. Rei do Pão de Queijo",
    "29. Dono da Serra do Curral",
    "30. Dono do Mineirão",
    "31. 1 Ilha em Angra (pra variar)",
    "32. 1 Jatinho Particular",
    "33. 1 Iate de Luxo",
    "34. Presidente do Brasil",
    "35. Dono da Amazon",
    "36. Dono do Google",
    "37. Viagem pra Lua",
    "38. Terreno em Marte",
    "39. Estação Espacial Própria",
    "40. Imperador da Terra",
    "41. Governador da Via Láctea",
    "42. Dono do Sistema Solar",
    "43. Mestre do Universo",
    "44. Viajante do Tempo",
    "45. Onisciente",
    "46. Onipotente",
    "47. Criador de Mundos",
    "48. Entidade Cósmica",
    "49. Dono do Multiverso",
    "50. O Próprio Pedro (Zerou a Vida!)"
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
// Novo elemento de aviso
const startWarningOverlay = document.getElementById('start-warning-overlay');

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
    } else {
        // Modo Família (Tudim misturado): REMOVE TI COMPLETAMENTE
        pool = allQuestions.filter(q => q.category !== 'ti');
    }

    // 2. Criar a progressão de dificuldade (5 Fáceis + 45 Médias/Difíceis Misturadas)
    
    // Filtra fáceis
    const easyPool = pool.filter(q => q.difficulty === 1).sort(() => 0.5 - Math.random());
    
    // Filtra médias e difíceis e mistura tudo num saco só
    const hardPool = pool.filter(q => q.difficulty > 1).sort(() => 0.5 - Math.random());

    let selectedQuestions = [];
    
    // Pega 5 fáceis
    const qEasy = easyPool.slice(0, 5);
    
    // Pega 45 do resto (médio/difícil)
    const qRest = hardPool.slice(0, 45);

    selectedQuestions = [...qEasy, ...qRest];

    // Se por acaso não tiver 50 (ex: filtro muito restrito), completa com o que tiver sobrado das fáceis ou repete (fallback seguro)
    if (selectedQuestions.length < 50) {
        const needed = 50 - selectedQuestions.length;
        // Pega qualquer pergunta que sobrou, mesmo que seja fácil, pra completar
        const remaining = pool.filter(q => !selectedQuestions.includes(q)).sort(() => 0.5 - Math.random());
        selectedQuestions = selectedQuestions.concat(remaining.slice(0, needed));
    }
    
    // Garante corte em 50
    currentQuestions = selectedQuestions.slice(0, 50);

    currentQuestionIndex = 0;
    isGameActive = true;
    hasWon = false;
    
    renderPrizeList();
    
    switchScreen(screenGame);
    // Substituído o Toast pelo Modal de Aviso
    showStartWarning(); 
    loadQuestion();
}

function showStartWarning() {
    startWarningOverlay.classList.remove('hidden');
}

function closeStartWarning() {
    startWarningOverlay.classList.add('hidden');
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

    // Atualizar Barra de Progresso (Base 50 agora)
    const progressPercent = ((currentQuestionIndex + 1) / 50) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // Atualiza display de prêmio mobile
    const rawPrize = prizes[currentQuestionIndex];
    // Remove o número da frente para ficar mais limpo no mobile se necessário, ou mantém
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
    // Agora renderiza os 50 prêmios
    [...prizes].forEach((prize, index) => {
        const li = document.createElement('li');
        li.className = 'prize-item';
        li.textContent = prize; 
        li.dataset.index = index;
        prizeListEl.prepend(li);
    });
}

function updatePrizeLadder() {
    const items = prizeListEl.querySelectorAll('.prize-item');
    items.forEach(item => {
        const idx = parseInt(item.dataset.index);
        item.classList.remove('active', 'passed');
        if (idx === currentQuestionIndex) {
            item.classList.add('active');
            // Scroll para manter o item ativo visível na lista longa
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
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