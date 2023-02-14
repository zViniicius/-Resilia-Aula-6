import { useParams } from 'react-router-dom';

export default function Profile() {
	// function Params() {
	// 	const { id } = useParams();
	// 	return <h3>Requested topic ID: {id}</h3>;
	// }

	const { id } = useParams();

	return (
		<div>
			<h1>Profile</h1>
			{id}
		</div>
	);
}
