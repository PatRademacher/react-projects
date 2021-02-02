import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    

    const searchApi = async (searchTerm) => {
        console.log('what')
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'portland'
            }
        });
        setResults(response.data.businesses);
        }  catch (err) {
            setErrorMessage('Something Went Wrong');
        }
    }
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];

}