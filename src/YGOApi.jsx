import axios from "axios";

const YGOApi = {

    getAllCards: (setStateCallback) => {
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
            .then((res) => {
                let data = res?.data?.data;
                setStateCallback(data);
            })
            .catch((error) => {
                console.error(error);
            })
    },

    getCardById: (setStateCallback, id) => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
            .then((res) => {
                let data = res?.data?.data[0];
                data = {
                    ...data,
                    id: data.id.toString(),
                    image: `/cards/${data.id}.jpg`
                }
                setStateCallback(data);
            })
            .catch((error) => {
                console.error(error);
            })
    },

    getRandomCard: (setStateCallback) => {
        axios.get("https://db.ygoprodeck.com/api/v7/randomcard.php")
            .then((res) => {
                let data = res?.data;
                data = {
                    id: data.id.toString(),
                    name: data.name,
                    type: data.type,
                    image: `/cards/${data.id}.jpg`
                }
                setStateCallback(data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

}

export default YGOApi;