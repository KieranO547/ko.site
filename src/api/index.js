import axios from 'axios'

export const getStackoverflow = async () => {
    const { data } = await axios.get(
        'https://api.stackexchange.com/2.2/users/5428936?site=stackoverflow'
    )

    return data
}

export const getSpotify = async () => {
    const { data } = await axios.get(
        'https://api.stackexchange.com/2.2/users/5428936?site=stackoverflow'
    )

    return data
}
export const getMyAnimeList = async () => {
    const { data } = await axios.get(
        'https://api.stackexchange.com/2.2/users/5428936?site=stackoverflow'
    )

    return data
}