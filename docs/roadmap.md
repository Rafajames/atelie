# Plano de desenvolvimento

A visão completa de jogo, regras conceituais e sistemas planejados está em [Visão de jogo e sistemas](design/visao-de-jogo-e-sistemas.md). Este roadmap separa a experiência inicial das expansões futuras.

## Protótipo 0.1 — Oficina inicial
- Estrutura React + Vite + Three.js.
- Cena 3D com câmera orbital.
- Seleção inicial de projetos e ferramentas.
- Trabalho manual e automático básico.
- Salvamento local do progresso.

## Próxima prioridade — Núcleo de escultura
1. Transformação visual convincente da peça em etapas (bloco bruto, forma geral, estrutura, detalhes e acabamento).
2. Trabalho manual com controle de força e consequências proporcionais ao material, ferramenta e etapa.
3. Modo automático assistido: delegar uma etapa específica, interromper e retomar manualmente; permitir também finalizar a obra automaticamente.
4. Ferramentas com efeitos distintos e fichas explicativas acessíveis na loja e no inventário.
5. Inventário/bolsa e consulta das características dos materiais.
6. Começar com escultura e poucos materiais, priorizando mármore e madeira.

## Evolução de carreira
- Aprendizado com um mestre e encomendas com referências visuais.
- Etapas de trabalho e avaliação da semelhança, qualidade, acabamento e prazo.
- Venda de obras, dinheiro, reputação, compra de materiais e ferramentas.
- Proficiência afetando velocidade e qualidade do trabalho manual e automático.

## Expansões futuras
- Comportamento mais profundo de mármore, madeira, granito e argila.
- Goivas, lixas, polidores, manutenção e desgaste.
- Cerâmica, marcenaria, entalhe e outras profissões.
- Quando houver mais de uma profissão implementada, permitir escolher uma ao iniciar a partida.
- Permitir aprender/mudar de profissão posteriormente sem apagar obras, dinheiro, ferramentas ou experiência anterior.
- Oficinas múltiplas e expansão do ateliê.
- Sincronização em nuvem opcional.

## Escopo técnico e princípio de implementação
A versão 0.1 valida a estrutura e o ciclo básico, mas ainda não simula remoção física de vértices em tempo real nem possui esculturas distintas e completas. A evolução visual deve priorizar modelos ou estágios 3D específicos por obra, antes de tentar uma simulação física complexa. Desenvolver por etapas e manter a experiência relaxante, acessível e responsiva para computador e celular.
