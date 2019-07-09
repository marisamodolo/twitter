# Twitter
## Objetivo:

O projeto **Twitter** foi iniciado com a proposta de replicarmos a função de postagem do site [Twitter](http://twitter.com).

## Como funciona?
* O usuário escreve uma mensagem contendo até 140 caracteres e clica no botão *Tweet*. 
* Sua mensagem é mostrada logo abaixo da caixa de texto, contendo a data e a hora de postagem.
* Caso seja postada outra mensagem, a anterior é empurrada para baixo e a nova mensagem é criada acima da antiga.

## Como funciona? *TECH*

* A mensagem digitada pelo usuário no `textArea` é recebida em um `eventListener`.
* Este `eventListener` monitora o campo para checar quando algo é digitado e chama uma função que atualiza o botão para ativá-lo quando os requisitos de postagem forem atendidos, e desativá-lo quando ultrapassar os limites ou não contiver mensagem.
* São chamadas duas funçoẽs em seguida, uma que altera o style do `textArea` para adapta-lo ao tamanho da mensagem.
* E a segunda para o contador, tanto para atualizar o número como as cores.
* Quando o usuário clica no botão `Tweet` é utilizado um `template String` em uma tag **p** com o texto informado.
* É chamada uma função que gera a data e hora atual e colocada dentro de outra tag **p**.
* É utilizado innerHTML para colocá-las dentro de uma lista e essa lista é exibi-da ao usuário em forma de postagem.
* Foram utilizadas as fontes **Nanum Gothic** e **Maven Pro**.

## Conclusão:
* Aprendizado do uso de: 
* eventListener, *~~appendChild, createElement~~* **refatorado para TemplateString** e new Date();
* Uso de switchCase para alterar cor do contador no CSS.
* Resultado final: https://marisamodolo.github.io/twitter/
