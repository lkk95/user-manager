import User from '../../backend/models/User';
import connectToMongodb from '../../backend/db/connect-to-mongodb';

export default async function handler(request, response) {
	await connectToMongodb();
	const {userId} = request.query;
	if (request.method === 'GET') {
		const singleUser = await User.findById(userId);
		return response.status(200).json({data: singleUser});
	}
	if (request.method === 'DELETE') {
		const deletedUser = await User.findByIdAndRemove(userId);
		return response.status(200).json({message: 'User successfully deleted'});
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
