import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(request) {
	const [obj, setObj] = useState('');
	const fetchData = async () => {
		const res = await axios
			.get(`http://bebest.pp.ua/api/${request}`)
			.then((res) => setObj(res));
	};

	useEffect(() => {
		fetchData();
	}, [request]);

	return obj
}

export default useFetch
