# SEN.AI - Sistema de Análise de Peças

## Descrição
SEN.AI é um sistema de análise de peças baseado em inteligência artificial, desenvolvido para automatizar e melhorar o processo de inspeção de qualidade. O sistema utiliza técnicas de visão computacional e aprendizado de máquina para classificar peças como "Boas" ou "Ruins" com base em imagens.

## Funcionalidades Principais

1. **Upload e Análise de Imagens**: Os usuários podem fazer upload de imagens de peças para análise.
2. **Classificação Automática**: O sistema classifica automaticamente as peças como "Boas" ou "Ruins" usando um modelo de IA treinado.
3. **Visualização de Resultados**: Exibe gráficos e estatísticas sobre as análises realizadas.
4. **Geração de Relatórios**: Permite gerar relatórios em PDF com informações detalhadas sobre as análises.
5. **Autenticação de Usuários**: Sistema de login para controle de acesso.
6. **Interface Responsiva**: Design adaptável para diferentes dispositivos.
7. **Modo Claro/Escuro**: Opção para alternar entre temas claro e escuro.

## Tecnologias Utilizadas

- **Backend**: Django (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Banco de Dados**: SQLite
- **IA/ML**: TensorFlow, Keras
- **Visualização de Dados**: Matplotlib, Pandas
- **Geração de PDF**: ReportLab

## Dependências Principais

- Django
- TensorFlow
- Keras
- Matplotlib
- Pandas
- ReportLab
- NumPy
- Pillow

## Configuração e Instalação

1. Clone o repositório
2. Instale as dependências: `pip install -r requirements.txt`
3. Configure o banco de dados: `python manage.py migrate`
4. Inicie o servidor: `python manage.py runserver`

## Estrutura do Projeto

- `Main/`: Aplicação principal do Django
- `IA_Imagens/`: Scripts para treinamento e análise de imagens
- `static/`: Arquivos estáticos (CSS, JS, imagens)
- `templates/`: Templates HTML

## Uso

1. Faça login no sistema
2. Navegue até a seção de upload
3. Faça upload de uma imagem de peça
4. O sistema analisará a imagem e exibirá o resultado
5. Visualize estatísticas e gere relatórios conforme necessário

## Contribuição

Contribuições são bem-vindas! Por favor, leia o guia de contribuição antes de submeter pull requests.

## Licença

[Inserir informações de licença aqui]

## Contato

| Nome           | GitHub                                                        | Função          |
|----------------|---------------------------------------------------------------|-----------------|
| Isaac          | [blueIsaac1](https://github.com/blueIsaac1)                   | Desenvolvedor Backend/Web/DB |
| Renan          | [RenanM1214](https://github.com/RenanM1214)                   | Desenvolvedor da IA |
| Pedro          | [pedro-b-siqueira](https://github.com/pedro-b-siqueira)       | Desenvolvedor Backend |
| Rafael         | [sieRleafaR](https://github.com/sieRleafaR)                   | Desenvolvedor Frontend |
| Luiz Francisco | [Francisco-Neves-15](https://github.com/Francisco-Neves-15)   | Desenvolvedor UX/UI |