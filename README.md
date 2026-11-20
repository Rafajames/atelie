# Ateliê — jogo de criação artesanal

Ateliê é um jogo web responsivo, pensado para computador e celular, sobre criação artesanal, escultura, aprendizado de técnicas e desenvolvimento de uma carreira.

O conceito prevê dois modos principais: **criação livre**, em que o jogador inventa e finaliza suas próprias obras, e **carreira**, em que aprende com um mestre, recebe encomendas com referências, produz e vende peças.

O sistema de escultura deverá combinar trabalho manual com controle de força e um modo automático assistido, no qual o jogador pode delegar etapas específicas (como desbaste, olhos ou boca), retomar o controle quando quiser ou solicitar a finalização automática.

## Documentação do projeto
- [Visão de jogo e sistemas](docs/design/visao-de-jogo-e-sistemas.md): decisões conceituais, modos de jogo, etapas de escultura, força, ferramentas, materiais, profissões e expansões futuras.
- [Roadmap](docs/roadmap.md): prioridades do protótipo e evolução planejada.

## Protótipo atual

A estrutura inicial foi construída com:
- React + Vite
- Three.js com React Three Fiber
- Lucide React
- Salvamento local via localStorage

### Rodar localmente
```bash
npm install
npm run dev
```

### Controles atuais
- Arraste a cena para girar a peça.
- Escolha uma ferramenta disponível.
- No modo manual, aplique a ferramenta para avançar.
- No modo automático, inicie ou pause o trabalho.
- O progresso e a proficiência ficam salvos neste navegador.

**Limitações da versão 0.1:** a peça 3D ainda é um bloco estilizado; a transformação detalhada em esculturas reconhecíveis será desenvolvida em seguida. O salvamento é local e não sincroniza entre dispositivos. As ideias documentadas para carreira, força, encomendas e múltiplas profissões representam planejamento, não funcionalidades já implementadas.

## Publicação
O workflow em `.github/workflows/deploy.yml` publica automaticamente o build no GitHub Pages quando houver push na branch `main`. Ative GitHub Pages nas configurações do repositório, selecionando **GitHub Actions** como fonte, se ainda não estiver habilitado.
