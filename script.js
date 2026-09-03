const caixaPrincipal = document.querySelector(&quot;.caixa-principal&quot;);
const caixaPerguntas = document.querySelector(&quot;.caixa-perguntas&quot;);
const caixaAlternativas = document.querySelector(&quot;.caixa-alternativas&quot;);
const caixaResultado = document.querySelector(&quot;.caixa-resultado&quot;);
const textoResultado = document.querySelector(&quot;.texto-resultado&quot;);

const perguntas = [
{
enunciado: &quot;Assim que saiu da escola você se depara com uma nova tecnologia, um chat
que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens
e áudios hiper-realistas. Qual o primeiro pensamento?&quot;,
alternativas: [
{
texto: &quot;Isso é assustador!&quot;,
afirmacao: &quot;No início ficou com medo do que essa tecnologia pode fazer. &quot;

},
{
texto: &quot;Isso é maravilhoso!&quot;,
afirmacao: &quot;Quis saber como usar IA no seu dia a dia.&quot;
}
]
},
{
enunciado: &quot;Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma
professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia.
No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula.
Qual atitude você toma?&quot;,
alternativas: [
{
texto: &quot;Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a
encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o
entendimento.&quot;,
afirmacao: &quot;Conseguiu utilizar a IA para buscar informações úteis.&quot;
},
{
texto: &quot;Escreve o trabalho com base nas conversas que teve com colegas, algumas
pesquisas na internet e conhecimentos próprios sobre o tema.&quot;,
afirmacao: &quot;Sentiu mais facilidade em utilizar seus próprios recursos para escrever
seu trabalho.&quot;
}
]
},
{
enunciado: &quot;Após a elaboração do trabalho escrito, a professora realizou um debate entre
a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi
levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate,
como você se posiciona?&quot;,
alternativas: [
{

texto: &quot;Defende a ideia de que a IA pode criar novas oportunidades de emprego e
melhorar habilidades humanas.&quot;,
afirmacao: &quot;Vem impulsionando a inovação na área de IA e luta para abrir novos
caminhos profissionais com IA.&quot;
},
{
texto: &quot;Me preocupo com as pessoas que perderão seus empregos para máquinas e
defendem a importância de proteger os trabalhadores.&quot;,
afirmacao: &quot;Sua preocupação com as pessoas motivou a criar um grupo de estudos
entre trabalhadores para discutir meios de utilização de IA de forma ética.&quot;
}
]
},
{
enunciado: &quot;Ao final da discussão, você precisou criar uma imagem no computador que
representasse o que pensa sobre IA. E agora?&quot;,
alternativas: [
{
texto: &quot;Criar uma imagem utilizando uma plataforma de design como o Paint.&quot;,
afirmacao: &quot;Notou também que muitas pessoas não sabem ainda utilizar as
ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando
ferramentas de pintura digital para iniciantes.&quot;
},
{
texto: &quot;Criar uma imagem utilizando um gerador de imagem de IA.&quot;,
afirmacao: &quot;Acelerou o processo de criação de trabalhos utilizando geradores de
imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar
manualmente como utilizar também!&quot;
}
]
},
{
enunciado: &quot;Você tem um trabalho em grupo de biologia para entregar na semana
seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo

decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat.
O que você faz? &quot;,
alternativas: [
{
texto: &quot;Escrever comandos para o chat é uma forma de contribuir com o trabalho, por
isso não é um problema utilizar o texto inteiro.&quot;,
afirmacao: &quot;Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se
sente dependente da IA para tudo.&quot;
},
{
texto: &quot;O chat pode ser uma tecnologia muito avançada, mas é preciso manter a
atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas
pessoais é essencial.&quot;,
afirmacao: &quot;Percebeu que toda IA reproduz orientações baseadas na empresa que
programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os
textos gerados pela IA devem servir como auxílio e não resultado final. &quot;
}
]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = &quot;&quot;;

function mostraPergunta() {
if (atual &gt;= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = &quot;&quot;;

mostraAlternativas();
}

function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement(&quot;button&quot;);
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener(&quot;click&quot;, () =&gt; respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + &quot; &quot;;
atual++;
mostraPergunta();
}

function mostraResultado() {
caixaPerguntas.textContent = &quot;Em 2049...&quot;;
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = &quot;&quot;;
}

mostraPergunta();
