// Velocidade máxima de 70
// a cada 5Km acima do limite ganha um ponto.


verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const verificarMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= verificarMaxima)
    console.log('ok');
    else {
        const pontos = Math.floor(((velocidade-verificarMaxima)/kmPorPonto));
        if (pontos >= 12)
        console.log('Carteira Suspensa');
        else
        console.log('Pontos', pontos);
    }
    
}