import axios from "axios";

const YGODB = {

    getCardCollection: (setStateCallback) => {
        axios.get("http://localhost:3000/cardCollection")
            .then((res) => {
                let data = res?.data;
                setStateCallback(data);
            })
            .catch((error) => {
                console.error(error);
            })
    },

    getCardFromCollection: (setStateCallback, id) => {
        axios.get(`http://localhost:3000/cardCollection/${id}`)
            .then((res) => {
                setStateCallback(res?.data);
            })
            .catch((error) => {
                console.error(error);
            })
    },

    postCardInCollection: (card) => {
        hasCardInCollection(card.id)
            .then((has) => {
                if (has){
                    YGODB.patchCardInColection(has.id, has.amount + 1);
                } else {
                    axios.post("http://localhost:3000/cardCollection", {...card, amount: 1})
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((error) => {
                            console.error(error);
                        })
                }
            })
            .catch((error) => {
                console.error(error);
            })
    },

    patchCardInColection: (id, amount) => {
        axios.patch(`http://localhost:3000/cardCollection/${id}`, { amount: amount })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            })
    }
}

async function hasCardInCollection(id){
    try {
        return await axios.get(`http://localhost:3000/cardCollection/${id}`)
            .then((res) => {return res.data});
    } catch {
        return false;
    }
}

export default YGODB;