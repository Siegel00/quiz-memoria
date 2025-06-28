const questions = [
            {
                question: "Quais são os cursos de graduação oferecidos pela Faculdade Municipal de Palhoça?",
                options: [
                    "Medicina, Direito, Engenharia",
                    "Administração, Pedagogia, Processos Gerenciais, ADS",
                    "Arquitetura, Farmácia, Odontologia",
                    "Psicologia, Nutrição, Fisioterapia"
                ],
                correct: 1
            },
            {
                question: "A FMP oferece cursos de pós-graduação ou apenas graduação?",
                options: [
                    "Apenas graduação",
                    "Apenas pós-graduação",
                    "Graduação e pós-graduação",
                    "Nenhum dos dois"
                ],
                correct: 2
            },
            {
                question: "Qual é o processo seletivo para ingressar na FMP?",
                options: [
                    "ENEM",
                    "Vestibular",
                    "Sisu",
                    "Entrevista"
                ],
                correct: 1
            },
            {
                question: "Quais são os principais projetos sociais desenvolvidos pela FMP que envolvem a comunidade?",
                options: [
                    "Nenhum projeto social",
                    "Brinquedoteca e Fórum do Empreendedor",
                    "Apenas eventos acadêmicos",
                    "Projetos de saúde pública"
                ],
                correct: 1
            },
            {
                question: "Como é a infraestrutura da FMP, incluindo salas de aula, laboratórios e biblioteca?",
                options: [
                    "Sem laboratórios ou biblioteca",
                    "Infraestrutura básica, mas funcional",
                    "Infraestrutura moderna e completa",
                    "Apenas salas de aula"
                ],
                correct: 1
            },
            {
                question: "Os professores da FMP possuem qualificação de mestrado e doutorado?",
                options: [
                    "Apenas graduação",
                    "Sim, muitos com mestrado e doutorado",
                    "Somente doutorado",
                    "Nenhum com pós-graduação"
                ],
                correct: 1
            },
            {
                question: "A FMP oferece aulas práticas frequentes nos cursos?",
                options: [
                    "Não, apenas teóricas",
                    "Sim, especialmente em ADS",
                    "Apenas em Pedagogia",
                    "Nenhum curso tem práticas"
                ],
                correct: 1
            },
            {
                question: "Qual é o endereço atual da Faculdade Municipal de Palhoça?",
                options: [
                    "R. João Pereira dos Santos, 99, Ponte do Imaruim",
                    "Av. Barão do Rio Branco, 123",
                    "R. José Maria da Luz, 456",
                    "Nenhum dos anteriores"
                ],
                correct: 0
            },
            {
                question: "A FMP organiza eventos como palestras gratuitas ou workshops para os alunos?",
                options: [
                    "Não, apenas aulas",
                    "Sim, como o Fórum do Empreendedor",
                    "Apenas eventos pagos",
                    "Somente para professores"
                ],
                correct: 1
            },
            {
                question: "Como é o sistema de avaliação e as normas acadêmicas da FMP?",
                options: [
                    "Sem avaliações formais",
                    "Provas, trabalhos e participação",
                    "Apenas provas escritas",
                    "Baseado em projetos"
                ],
                correct: 1
            },
            {
                question: "Quais são os diferenciais da FMP em comparação com outras instituições de ensino superior da região?",
                options: [
                    "Cursos pagos e internacionais",
                    "Cursos gratuitos e projetos comunitários",
                    "Apenas cursos EAD",
                    "Foco em pesquisa avançada"
                ],
                correct: 1
            },
            {
                question: "Qual é a duração média dos cursos de graduação oferecidos pela FMP?",
                options: [
                    "2 anos para todos",
                    "4 anos ou 2,5 a 3 anos",
                    "5 anos",
                    "1 ano"
                ],
                correct: 1
            },
            {
                question: "Como funciona o vestibular da FMP, e quais materiais são permitidos nas provas?",
                options: [
                    "Prova online, sem materiais",
                    "Presencial, caneta, lápis, borracha",
                    "Apenas entrevista",
                    "Prova com calculadora"
                ],
                correct: 1
            },
            {
                question: "A FMP tem alguma iniciativa voltada para a sustentabilidade ou responsabilidade social?",
                options: [
                    "Nenhuma iniciativa",
                    "Projetos como a Brinquedoteca",
                    "Apenas sustentabilidade ambiental",
                    "Somente eventos acadêmicos"
                ],
                correct: 1
            },
            {
                question: "A FMP é uma instituição pública ou privada?",
                options: [
                    "Privada",
                    "Pública municipal",
                    "Pública estadual",
                    "Pública federal"
                ],
                correct: 1
            },
            {
                question: "Qual é a missão da FMP?",
                options: [
                    "Formar apenas professores",
                    "Ensino gratuito e desenvolvimento local",
                    "Foco em cursos pagos",
                    "Pesquisa internacional"
                ],
                correct: 1
            },
            {
                question: "A FMP tem laboratórios específicos para cada curso?",
                options: [
                    "Não, apenas salas",
                    "Sim, como para ADS",
                    "Apenas para Pedagogia",
                    "Nenhum laboratório"
                ],
                correct: 1
            },
            {
                question: "Qual é o telefone de contato da FMP?",
                options: [
                    "(48) 3220-0376",
                    "(48) 3333-1234",
                    "(47) 3221-5678",
                    "Nenhum telefone disponível"
                ],
                correct: 0
            },
            {
                question: "Como a FMP contribui para o mercado de trabalho local?",
                options: [
                    "Nenhuma contribuição",
                    "Cursos e estágios",
                    "Apenas eventos",
                    "Somente pesquisa"
                ],
                correct: 1
            },
            {
                question: "A FMP possui redes sociais ativas para divulgação de eventos e notícias?",
                options: [
                    "Não, apenas site",
                    "Sim, como Instagram",
                    "Apenas Facebook",
                    "Nenhuma rede social"
                ],
                correct: 1
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let startTime;
        let selectedAnswers = new Array(questions.length).fill(null);
        let timerInterval;

        function startQuiz() {
            console.log('Iniciando quiz...');
            const questionElement = document.getElementById('question');
            const optionsElement = document.getElementById('options');
            if (!questionElement || !optionsElement) {
                console.error('Erro: Elementos #question ou #options não encontrados no DOM');
                return;
            }
            startTime = new Date();
            timerInterval = setInterval(updateTimer, 1000);
            loadQuestion();
        }

        function updateTimer() {
            if (!startTime) {
                console.error('Erro: Temporizador não inicializado');
                return;
            }
            const now = new Date();
            const elapsed = Math.floor((now - startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            const timerElement = document.getElementById('timer');
            if (timerElement) {
                timerElement.textContent = `Tempo: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            } else {
                console.error('Erro: Elemento #timer não encontrado');
            }
        }

        function loadQuestion() {
            console.log(`Carregando pergunta ${currentQuestion + 1} de ${questions.length}`);
            if (currentQuestion >= questions.length || currentQuestion < 0) {
                console.error('Erro: Índice de pergunta inválido:', currentQuestion);
                return;
            }
            const q = questions[currentQuestion];
            const questionElement = document.getElementById('question');
            const optionsElement = document.getElementById('options');
            if (!q || !questionElement || !optionsElement) {
                console.error('Erro: Pergunta ou elementos DOM não encontrados');
                return;
            }
            questionElement.textContent = `${currentQuestion + 1}. ${q.question}`;
            optionsElement.innerHTML = '';
            q.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.textContent = option;
                if (selectedAnswers[currentQuestion] !== null) {
                    if (index === q.correct) {
                        optionDiv.classList.add('correct');
                    } else if (index === selectedAnswers[currentQuestion]) {
                        optionDiv.classList.add('incorrect');
                    }
                    optionDiv.classList.add('disabled');
                } else {
                    optionDiv.onclick = () => selectOption(index);
                }
                optionsElement.appendChild(optionDiv);
            });
            const nextBtn = document.getElementById('next-btn');
            const submitBtn = document.getElementById('submit-btn');
            if (nextBtn) {
                nextBtn.disabled = currentQuestion === questions.length - 1;
            }
            if (submitBtn) {
                submitBtn.disabled = !selectedAnswers.every(answer => answer !== null);
            }
        }

        function selectOption(index) {
            console.log(`Selecionada opção ${index + 1} para pergunta ${currentQuestion + 1}`);
            selectedAnswers[currentQuestion] = index;
            loadQuestion();
        }

        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion();
            } else {
                console.log('Última pergunta alcançada');
            }
        }

        function submitQuiz() {
            console.log('Enviando quiz...');
            clearInterval(timerInterval);
            const now = new Date();
            const elapsed = Math.floor((now - startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            score = selectedAnswers.reduce((acc, answer, index) => {
                return answer === questions[index].correct ? acc + 1 : acc;
            }, 0);
            const resultElement = document.getElementById('result');
            if (resultElement) {
                resultElement.style.display = 'block';
                resultElement.innerHTML = `Parabéns!! Você acertou ${score} de ${questions.length} perguntas!<br>Tempo total: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
            document.getElementById('question').style.display = 'none';
            document.getElementById('options').style.display = 'none';
            document.getElementById('next-btn').style.display = 'none';
            document.getElementById('submit-btn').style.display = 'none';
        }

        // Iniciar o quiz
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            startQuiz();
        } else {
            document.addEventListener('DOMContentLoaded', startQuiz);
        }