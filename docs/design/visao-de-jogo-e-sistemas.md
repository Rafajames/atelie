# Ateliê — visão de jogo e especificação de design

**Status:** decisões conceituais consolidadas para orientar as próximas versões do protótipo.  
**Escopo:** registrar a direção do jogo sem exigir que todas as funcionalidades sejam implementadas de uma só vez.

## 1. Conceito central

Ateliê é um jogo relaxante de criação artesanal em que o jogador trabalha materiais, utiliza ferramentas, desenvolve habilidades, atende clientes e constrói sua trajetória profissional. A experiência deve mostrar visualmente a transformação da matéria em uma obra.

O jogo deve funcionar pela web, em computadores e celulares, com interface responsiva. A experiência de escultura precisa ser interativa e jogável, não apenas uma apresentação visual.

## 2. Dois modos principais de criação

### 2.1 Criação livre

- O jogador escolhe o material, as ferramentas e o que deseja criar.
- Não precisa seguir uma encomenda ou referência obrigatória.
- Pode experimentar formas e técnicas até considerar que a obra está boa.
- Decide quando encerrar, finalizar e nomear a peça.
- Pode guardar ou colocar suas criações à venda.
- Não existe obrigação de completar uma barra de progresso até 100% para considerar a obra pronta.

### 2.2 Carreira e encomendas

- O jogador recebe pedidos de um mestre, durante o aprendizado, e posteriormente de clientes.
- Cada pedido apresenta uma referência visual e requisitos, como tipo de obra, material, tamanho, acabamento e prazo, quando aplicável.
- O jogador trabalha para reproduzir a referência e atender aos requisitos.
- A avaliação pode considerar semelhança com a referência, qualidade, acabamento, material e prazo.
- O resultado influencia pagamento, reputação e oportunidades futuras.
- O jogador poderá vender obras, receber dinheiro e investir em ferramentas, materiais e melhorias para o ateliê.

## 3. Escultura dividida em etapas visuais

O trabalho deve ser apresentado em etapas compreensíveis, que mudam de acordo com a obra. Exemplo de um busto:

1. Preparação do bloco e escolha do material.
2. Desbaste e construção da forma geral.
3. Definição da estrutura do rosto e das proporções.
4. Detalhamento de olhos, nariz, boca, orelhas e outras partes.
5. Acabamento, lixamento e polimento.

As etapas devem ser representadas por mudanças visíveis na própria escultura. Não basta avançar uma barra abstrata: a peça precisa evoluir visualmente, idealmente com formas/modelos ou estágios 3D específicos para cada tipo de obra.

## 4. Trabalho manual e modo automático assistido

O modo automático é uma assistência ao trabalho, não um modo de jogo separado que substitui a escultura.

### Trabalho manual
- O jogador escolhe a ferramenta, controla a intensidade e trabalha diretamente na peça.
- Pode alternar ferramentas, interromper e retomar quando quiser.
- O resultado deve responder à ferramenta, força, material e etapa da obra.

### Automação por etapa
- O jogador pode delegar uma etapa específica ao personagem, por exemplo: desbastar a cabeça, trabalhar os olhos ou esculpir a boca.
- O personagem executa visualmente o trabalho até concluir a etapa selecionada ou até o jogador interromper.
- Quando a etapa termina, o jogador pode retomar o controle manual e continuar outra parte.
- O jogador também pode solicitar que o personagem finalize a obra inteira automaticamente, se desejar.
- A velocidade e a qualidade do trabalho automático devem considerar proficiência, ferramentas disponíveis e dificuldade da tarefa.
- Um aprendiz pode ser mais lento e cometer mais imperfeições; maior experiência melhora velocidade e precisão.

A automação deve transformar a peça visualmente enquanto o personagem trabalha, e não apenas preencher uma barra de progresso.

## 5. Controle de força

A interação manual terá uma barra de intensidade/força para ajudar o jogador a entender a consequência de cada golpe ou ação.

- Força baixa: pode ter pouco efeito ou não retirar material suficiente.
- Força moderada: adequada para muitas ações de modelagem.
- Força alta: útil para desbaste e remoção de excessos, mas pode ser perigosa em etapas delicadas.
- Força excessiva ou inadequada: pode causar lascas, rachaduras, deformações ou quebra da peça, conforme o material e a ferramenta.

A intensidade adequada não será universal. Deve variar conforme:
- material;
- ferramenta utilizada;
- etapa da escultura;
- região trabalhada e delicadeza do detalhe;
- habilidade/proficiência do personagem.

O jogo deve comunicar riscos e resultados de forma clara, sem punir injustamente o jogador por não conhecer uma ferramenta.

## 6. Ferramentas: uso, consulta e inventário

Cada ferramenta terá uma ficha explicativa acessível na loja e no inventário/bolsa. O jogador não deve precisar adivinhar como utilizá-la.

Informações previstas para cada ficha:
- nome e descrição;
- função e etapas em que é útil;
- instruções básicas de uso;
- materiais compatíveis;
- intensidade de força recomendada;
- nível de habilidade exigido, quando houver;
- estado de conservação e durabilidade;
- preço e opções de compra, melhoria ou manutenção.

Ferramentas inicialmente consideradas:
- **Martelo:** ajuda a remover grandes excessos e fazer o desbaste inicial.
- **Cinzel:** remove material e define planos, contornos e formas.
- **Goiva:** trabalha curvas, cavidades e detalhes; especialmente útil em madeira.
- **Lixas e polidores:** suavizam superfícies e melhoram o acabamento.

A lista é inicial e poderá crescer com novas profissões e materiais. A interface deve manter explicações acessíveis na loja e na bolsa/inventário.

## 7. Materiais e comportamento próprio

Os materiais não devem ser apenas mudanças de textura. Cada um deve apresentar características e resposta próprias às ferramentas e à força.

Materiais considerados:
- **Mármore:** material clássico para esculturas; permite detalhes, mas pode lascar ou trincar com golpes inadequados.
- **Madeira:** permite esculturas, entalhes e objetos; direção das fibras influencia o corte e o resultado.
- **Granito:** mais resistente e difícil de trabalhar; exige ferramentas adequadas e maior experiência.
- **Argila:** moldável, adequada à modelagem manual e potencialmente à cerâmica.

Cada material poderá ter propriedades como dureza, fragilidade, facilidade de remoção, acabamento possível e compatibilidade com ferramentas. O desenvolvimento desses comportamentos será gradual.

## 8. Profissões e escolha no início de uma partida

A visão de longo prazo é oferecer diferentes profissões artesanais. Quando esse sistema estiver implementado, ao iniciar uma nova partida o jogador escolherá sua profissão, em vez de ser obrigado a começar como escultor.

Possíveis profissões futuras:
- **Escultor:** mármore, granito, argila e obras tridimensionais.
- **Marceneiro:** madeira, móveis e objetos funcionais ou decorativos.
- **Entalhador:** desenhos, relevos e detalhes esculpidos, especialmente em madeira.
- **Ceramista:** modelagem de argila e criação de peças cerâmicas.

Essa lista é conceitual e não representa compromisso de implementação imediata. O protótipo atual continua sendo uma experiência inicial focada em escultura.

### Mudança de profissão e progressão

- Em uma etapa mais avançada do jogo, o jogador poderá mudar de profissão ou aprender outras.
- A mudança não deve apagar o progresso já conquistado.
- Obras, dinheiro, ferramentas, reputação e experiência anterior devem ser preservados.
- Ao começar uma nova profissão, o jogador aprende suas técnicas e desenvolve sua proficiência específica.
- No futuro, o jogador poderá dominar várias profissões e manter diferentes oficinas dentro de um ateliê maior.

## 9. Economia e evolução do ateliê

A carreira poderá incluir:
- receber e concluir encomendas;
- vender obras criadas livremente;
- ganhar dinheiro e reputação;
- comprar materiais e ferramentas;
- melhorar e manter ferramentas;
- desbloquear técnicas e projetos;
- ampliar o espaço de trabalho e, futuramente, criar oficinas para diferentes profissões.

A economia deve apoiar a criatividade e a progressão, sem transformar o jogo relaxante em uma rotina excessivamente punitiva.

## 10. Interface e experiência

A interface deverá ser responsiva para computador e celular e organizar claramente:
- área principal de trabalho 3D;
- ferramenta selecionada e sua explicação;
- controle de força;
- etapa atual da obra e etapas disponíveis;
- opção de trabalho manual ou automação por etapa;
- referência da encomenda, quando houver;
- bolsa/inventário, loja e materiais;
- progresso da carreira, habilidades e encomendas.

O jogador deve conseguir consultar informações sem perder o contexto do trabalho na peça.

## 11. Priorização de desenvolvimento

### Protótipo e primeiras evoluções
1. Transformar a peça 3D de maneira visualmente convincente, com etapas de escultura.
2. Consolidar o fluxo manual e a automação por etapa.
3. Implementar controle de força com consequências compreensíveis.
4. Dar funções distintas às ferramentas básicas e exibir suas fichas explicativas.
5. Criar inventário/bolsa e consulta de materiais.
6. Começar com escultura e um conjunto pequeno de materiais, priorizando mármore e madeira.

### Evoluções posteriores
- comportamento mais profundo de cada material;
- goivas, lixas, polidores, desgaste e manutenção;
- carreira completa, mestre, encomendas, referências, avaliação e vendas;
- argila, granito e cerâmica;
- economia, reputação e expansão do ateliê;
- seleção de profissão no início de uma nova partida;
- mudança e domínio de múltiplas profissões;
- marcenaria, entalhe e outros ofícios.

## 12. Princípios que devem orientar as decisões

- Priorizar uma experiência jogável, não apenas uma demonstração visual.
- Mostrar a transformação real da obra em cada etapa.
- Manter a criação livre genuinamente livre.
- Fazer a força, a ferramenta e o material influenciarem o resultado.
- Explicar as ferramentas e materiais dentro do próprio jogo.
- Tratar o modo automático como assistência opcional e configurável.
- Implementar por etapas, sem tentar construir todas as profissões de uma vez.
- Preservar o progresso do jogador ao expandir ou mudar de profissão.
- Manter a experiência relaxante, acessível e responsiva.
