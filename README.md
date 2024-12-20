# Nearby

Nearby é um aplicativo desenvolvido com **React Native**, focado em ajudar os usuários a encontrar estabelecimentos parceiros perto de sua localização e ativar cupons de vantagens com QR Codes. O projeto oferece uma interface intuitiva para navegação e uma experiência rica em recursos interativos.

---

## **Capturas de Tela**

### **1. Tela Inicial**

<img src=".github\home.jpg" alt="Tela Inicial" width="300" />

### **2. Mapa Interativo**

<img src=".github\map.jpg" alt="Mapa Interativo" width="300" />

### **3. Lista de Estabelecimentos**

<img src=".github\shops.jpg" alt="Lista de Estabelecimentos" width="300" />

### **4. Detalhes do Estabelecimento**

<img src=".github\details.jpg" alt="Detalhes do Estabelecimento" width="300" />

---

## **Funcionalidades**

1. **Explorar estabelecimentos próximos**:

   - Visualização de estabelecimentos categorizados (Alimentação, Cinema, Compras, etc.) em um mapa interativo.
   - Lista com detalhes de cada estabelecimento, incluindo descrição, localização, e quantidade de cupons disponíveis.

2. **Ativação de cupons**:

   - Opção de escanear QR Codes diretamente no aplicativo para ativar vantagens em estabelecimentos.

3. **Categorias interativas**:

   - Alternar facilmente entre diferentes categorias (como Alimentação, Compras, Hospedagem, etc.) usando botões dinâmicos.

4. **Design limpo e moderno**:
   - Interface responsiva e de fácil uso, com ênfase na usabilidade e na experiência do usuário.

---

## **Tecnologias Utilizadas**

- **React Native**: Framework principal para o desenvolvimento multiplataforma.
- **React Navigation**: Gerenciamento de rotas e navegação no aplicativo.
- **React Native Maps**: Exibição de mapas interativos e marcadores.
- **@gorhom/bottom-sheet**: Implementação de modais deslizantes para exibir listas e detalhes.
- **React Native Gesture Handler**: Gerenciamento de gestos e interações táteis no aplicativo.
- **Expo**: Ambiente para desenvolvimento e deploy rápido.
- **Typescript**: Tipagem estática para maior segurança e produtividade no desenvolvimento.
- **Axios**: Para integração performática.

---

## **Como Executar o Projeto**

### **Pré-requisitos**

1. Node.js instalado.
2. Expo CLI instalado globalmente:
   ```bash
   npm install -g expo-cli
   ```
3. Emulador Android/iOS configurado ou dispositivo físico com o aplicativo Expo Go instalado.

### **Passos**

1. Clone o repositório:

   ```bash
   git clone https://github.com/RodGondin/Nearby.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Nearby
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o projeto:

   ```bash
   expo start
   ```

5. Escaneie o QR Code exibido no terminal com o aplicativo **Expo Go** ou inicie o emulador Android/iOS.

---

## **Estrutura do Projeto**

```plaintext
Nearby/
├── src/
│   ├── app/                 # Arquivos principais do aplicativo
│   │   ├── market/          # Tela e lógica do mercado
│   │   ├── _layout.tsx      # Layout global
│   │   ├── home.tsx         # Tela inicial
│   │   └── index.tsx        # Entrada principal
│   ├── assets/              # Imagens e ícones
│   │   ├── location.png
│   │   ├── logo.png
│   │   └── pin.png
│   ├── components/          # Componentes reutilizáveis
│   │   ├── button/          # Botões personalizados
│   │   ├── categories/      # Componente de categorias
│   │   ├── category/        # Componente de uma categoria
│   │   ├── loading/         # Indicador de carregamento
│   │   ├── market/          # Componentes do mercado
│   │   │   ├── coupon/
│   │   │   ├── cover/
│   │   │   ├── details/
│   │   │   └── info/
│   │   ├── place/           # Componente de um local
│   │   ├── places/          # Lista de locais
│   │   ├── step/            # Passos interativos
│   │   └── welcome/         # Tela de boas-vindas
│   ├── services/            # Serviços e integrações
│   ├── styles/              # Estilos globais e temáticos
│   └── utils/               # Funções utilitárias
├── App.tsx                 # Arquivo principal do aplicativo
├── package.json            # Configurações e dependências do projeto
└── README.md               # Documentação do projeto
```

## **@Rocketseat**

Projeto feito no NLW Pocket Mobile - trilha de React Native
