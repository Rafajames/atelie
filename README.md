# Ateliê — Oficina de Escultura

Protótipo web responsivo de um jogo relaxante de escultura. Escolha uma obra, selecione ferramentas e acompanhe a transformação do bloco de mármore em modo manual ou automático.

## Rodar localmente
```bash
npm install
npm run dev
```

## Stack
- React + Vite
- Three.js com React Three Fiber
- Lucide React
- Salvamento local via localStorage

## Controles
- Arraste a cena para girar a peça.
- Escolha Martelo, Cinzel ou Polimento.
- No modo manual, aplique a ferramenta para avançar.
- No modo automático, inicie ou pause o trabalho.
- O progresso e a proficiência ficam salvos neste navegador.

## Protótipo 0.1
Esta versão valida a estrutura da oficina e o ciclo de progresso. O objeto 3D ainda é um bloco estilizado; a transformação detalhada em uma escultura reconhecível será desenvolvida em seguida usando estágios/modelos 3D específicos. O salvamento ainda é local e não sincroniza entre dispositivos.

## Publicação
O workflow em `.github/workflows/deploy.yml` publica automaticamente o build no GitHub Pages quando houver push na branch `main`. Ative GitHub Pages nas configurações do repositório, selecionando **GitHub Actions** como fonte, se ainda não estiver habilitado.
