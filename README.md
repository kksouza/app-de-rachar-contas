# Despesas de Viagem

**Despesas de Viagem** é um aplicativo simples e funcional para dividir os custos de uma viagem entre participantes, tornando o processo de cálculo rápido e prático. Este projeto foi desenvolvido durante uma viagem de carro, onde surgiu a necessidade de calcular e dividir as despesas de forma justa entre muitas pessoas.

A ideia nasceu da estratégia que já usávamos em viagens com amigos, introduzida pelo **Baca** e talvez pelo **Sucrilhos** e/ou **GAK** nos anos 90, que sugeriu uma abordagem simples e eficiente para rachar os custos. Inspirado por isso, decidi usar ferramentas de **no-code** para transformar essa prática em um aplicativo funcional. O objetivo foi facilitar nossas vidas e trazer uma solução que pudesse ser usada por qualquer grupo em suas viagens.

Um agradecimento especial ao **Baca**, **Sucrilhos** e **GAK** e ao **fundão** por trazerem essa ideia à tona nos anos 90 e motivarem a criação deste projeto.

---

## Funcionalidades

- **Entrada simplificada**: Basta colar as despesas em formato CSV em um único campo de texto.
- **Exemplo pré-carregado**: O sistema já traz um exemplo de uso para facilitar a compreensão.
- **Processamento automático**: Calcula quem deve pagar quanto para quem, com base nas despesas registradas.
- **Relatório final**: Gera um resumo claro e visual de saldos e pagamentos sugeridos.
- **Responsivo**: Interface adaptada para uso em dispositivos móveis.
- **Progressive Web App (PWA)**: Pode ser instalado diretamente no celular para acesso rápido.

## Tecnologias Utilizadas

- **HTML5** e **CSS3**: Estrutura e estilização.
- **Bootstrap**: Layout responsivo e moderno.
- **JavaScript**: Lógica de processamento e cálculos.
- **GitHub Pages**: Hospedagem do aplicativo como um PWA.

## Como Usar

1. **Acesse o aplicativo**: [Link do GitHub Pages](https://kksouza.github.io/app-de-rachar-contas).
2. **Insira as despesas**:
   - Cole os dados no campo de texto no formato: `Nome da Despesa, Quem Pagou, Valor, Participantes (separados por ";")`.
   - Exemplo:
     ```
     Almoço, João, 150.00, João;Maria;Pedro
     Uber, Maria, 50.00, João;Maria
     ```
3. Clique em **"Processar Despesas"** para calcular os saldos.
4. Verifique o relatório final com os valores que cada participante deve receber ou pagar.

## Recursos Futuramente Planejados

- Exportação do relatório em **PDF** ou **CSV**.
- Integração com APIs para **conversão de moedas**.
- Histórico de viagens e despesas.

## Contribuições

Sinta-se à vontade para contribuir com este projeto! Sugestões, correções e melhorias são sempre bem-vindas. Para contribuir:
1. Faça um fork deste repositório.
2. Crie uma branch com a sua feature (`git checkout -b feature/sua-feature`).
3. Envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
