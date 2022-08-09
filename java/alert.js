let btnShow = document.querySelector('button');
btnShow.addEventListener('click', () => {
    swal({
        title: 'Atraso Escolar',
        text: 'Estudo mostra que reprovação, abandono escolar e distorção idade-série já impactavam estudantes mais vulneráveis antes da pandemia. Com a Covid-19, desafios se tornam ainda maiores. Disponível em https://www.unicef.org/brazil/comunicados-de-imprensa/cultura-do-fracasso-escolar-afeta-milhoes-de-estudantes-e-desigualdade-se-agrava-na-pandemia. Acesso em 08/08/2022.',
        icon: 'success',
        button: 'Ciente'
    });
});