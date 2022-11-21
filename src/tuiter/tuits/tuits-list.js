import React , {useEffect} from 'react';
import TuitItem from "./TuitItem.js";
import { useDispatch,useSelector } from 'react-redux';
import {findTuitsThunk}
	from "../../services/tuits-thunks";


// const TuitList = () => {
// 	const tuits = useSelector((state) => state.tuits);
//
// 	return (
// 			<>
// 				{tuits.map(tuit =>
// 						<TuitItem
// 								key={tuit._id}
// 								tuit={tuit}
// 						/>
// 				)}
// 			</>
// 	);
// };

const TuitList = () => {
	const {tuits, loading} = useSelector(
			state => state.tuitsData)

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(findTuitsThunk())
	}, [])

	return (
			<ul className="list-group">
				{
						loading &&
						<li className="list-group-item">
							loading...
						</li>
				}
				{tuits.map((tuit) => (
						<TuitItem
								key={tuit._id}
								tuit={tuit}
						/>
				))}
			</ul>
	);
};





export default TuitList;