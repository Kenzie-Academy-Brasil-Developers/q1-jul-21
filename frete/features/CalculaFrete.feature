# language: pt

Funcionalidade: Calcular o frete total do pedido 
    Precisamos Calcular o preço do frete.

    Cenario: Frete Gratis 
        Dado um valor total do pedido maior ou igual a 500 reais 
        Quando calcular o frete do pedido 
        Então o valor do frete deve ser 0 reais
    
    Cenario: Frete com desconto 
        Dado um valor total do pedido maior ou igual a 200 reais
        Quando calcular o frete do pedido 
        Então o valor do frete deve ser 25 reais

    Cenario: Frete sem desconto 
        Dado um valor total do pedido menor igual 199.99 reais
        Quando calcular o frete do pedido 
        Então o valor do frete deve ser 50 reais