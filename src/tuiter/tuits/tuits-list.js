import React from 'react';
import TuitItem from "./TuitItem.js";
import { useSelector } from 'react-redux';


const TuitList = () => {
	const tuits = useSelector((state) => state.tuits);

	return (
			<>
				{tuits.map(tuit =>
						<TuitItem
								key={tuit._id}
								tuit={tuit}
						/>
				)}
			</>
	);
};



export default TuitList;