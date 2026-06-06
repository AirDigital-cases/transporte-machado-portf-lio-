# MEDIA GUIDE

Este projeto ja esta preparado para receber a logo oficial e os videos reais da Machado Transportes sem quebrar o layout atual.

## Logo oficial

Coloque a logo em:

`public/media/machado/logo/logo-machado.png`

Regras recomendadas:

- Usar PNG com fundo transparente sempre que possivel
- Manter boa area de respiro
- A largura visual ideal no hero fica entre 180px e 260px no desktop
- No mobile, a largura visual ideal fica entre 140px e 200px

## Video principal do hero

Coloque o video em:

`public/media/machado/videos/hero-machado.mp4`

Uso:

- Video principal do hero
- O site ja faz fallback automatico para o placeholder atual se esse arquivo nao existir

## Videos da galeria

Coloque cada arquivo exatamente com estes nomes:

- `public/media/machado/videos/frota-em-movimento.mp4`
- `public/media/machado/videos/carga-fechada.mp4`
- `public/media/machado/videos/carga-fracionada.mp4`
- `public/media/machado/videos/empilhadeira-clamp.mp4`
- `public/media/machado/videos/armazem-estrutura.mp4`
- `public/media/machado/videos/equipe-operacional.mp4`
- `public/media/machado/videos/institucional-machado.mp4`

## Formato recomendado

- Codec: MP4 H.264
- Resolucao ideal: 1920x1080
- Duracao ideal: 15 a 45 segundos
- Tamanho ideal: ate 30 MB por video para web

## Como trocar depois

1. Comprima ou exporte o video final em MP4 H.264.
2. Renomeie o arquivo exatamente com o nome esperado acima.
3. Substitua o arquivo dentro de `public/media/machado/videos/`.
4. Rode `npm run build` para validar.
5. Se estiver tudo certo, publique normalmente.

## Observacoes importantes

- A logo oficial esperada no hero e `public/media/machado/logo/logo-machado.png`.
- Se a logo for removida, o hero volta automaticamente para o fallback em texto.
- Se algum video real nao existir ou falhar, o site usa o placeholder atual para nao quebrar a pagina.
- Os arquivos brutos de video enviados no Desktop estao muito acima do ideal para web. Antes de publicar, exporte versoes otimizadas com ate 30 MB por arquivo sempre que possivel.
