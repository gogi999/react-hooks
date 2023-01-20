import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

const UseEffectHook = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setData(res.data[0].email);
            console.log('API was called!');
        }

        fetchData();
    }, []);

    return (
        <div>
            {data}
        </div>
    );
}

export default UseEffectHook;
