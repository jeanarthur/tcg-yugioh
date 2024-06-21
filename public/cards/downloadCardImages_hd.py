import requests
import urllib.request
import time

url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
response = requests.get(url)

if response.status_code == 200:
    data = response.json()

    cards = []
    for card in data['data']:
        for image in card['card_images']:
            cards.append(image['image_url'])

    for card in cards:
        print('Downloading [ ' + str(cards.index(card) + 1) + ' / ' + str(len(cards)) + ' ] - source: ' + str(card))
        urllib.request.urlretrieve(card, "./" + card.split('/')[-1])
        time.sleep(0.2)
else:
    print('Failed to retrieve data')