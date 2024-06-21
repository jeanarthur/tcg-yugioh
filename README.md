# TCG - Yu-Gi-Oh

## Visão Geral

Web app em React JS que consulta a API do Yu-Gi-Oh para obter cartas aleatórias e armazená-las localmente através do json-server.

## API Utilizada

[Yu-Gi-Oh! API by YGOPRODeck](https://ygoprodeck.com/api-guide/)  
Endpoint de cartas aleatórias: [https://db.ygoprodeck.com/api/v7/randomcard.php](https://db.ygoprodeck.com/api/v7/randomcard.php)

## Configurando repositório

### Instalação:

`git clone https://github.com/jeanarthur/tcg-yugioh.git`  
`cd tcg-yugioh`   
`npm install`

### Download do pacote de imagens:   
A API exige que seja armazenado localmente as imagens, evitando consultas frequentes ao banco de imagens deles.  
* Necessário ter o python instalado   

Instale as dependências caso não tenha   
`pip install requests`  
`pip install urllib.request`   
`pip install time`   

### Execute um dos arquivos .py
* **downloadCardImages_hd.py** - para imagens em alta qualidade (Aproximadamente **1.91GB**)   
`cd src/public/cards`   
`pyhton downloadCardImages_hd.py`   

* **downloadCardImages_sd.py** - para imagens em baixa qualidade (Aproximadamente **355MB**)   
`cd src/public/cards`   
`pyhton downloadCardImages_sd.py`   

### Execução do aplicativo

Inicie o banco de dados local do json-server   
`npm run db`

Inicie o servidor da aplicação   
`npm run dev`

