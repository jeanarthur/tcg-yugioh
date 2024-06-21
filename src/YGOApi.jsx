import axios from "axios";

const YGOApi = {

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