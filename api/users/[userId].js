import User from '../../backend/models/User';
import connectToMongodb from '../../backend/db/connect-to-mongodb';

export default async function handler(request, response) {
	await connectToMongodb();
	const {userId} = request.query;
	// TODO: Check for request methods GET and DELETE and handle them!
	if (request.method === 'GET') {
		const updatedUser = await User.findByIdAndUpdate(userId, {$set: {name: 'John'}}, {new: true});
		return response.status(200).json({data: updatedUser});
	}
	if (request.method === 'DELETE') {
		// DELETE example:
		const deletedUser = await User.findByIdAndRemove(userId);
		return response.status(200).json({data: deletedUser});
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
