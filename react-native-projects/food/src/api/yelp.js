import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer moV097bSl6Bnam4jWAiR3T7TC3GwEBLO_VkrPWVk3HtdZu9mayf9WqLQMwTKaCYirOhw0WitOkfIUL-TC3luoatIM5ozeLPhLm_KOWNPpl45fpSFTOjP_erqFzMHYHYx'
    }
});

