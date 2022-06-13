import connectToMongodb from '../../backend/db/connect-to-mongodb';
import User from '../../backend/models/User';

export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'GET') {
		const users = await User.find({});
		return response.status(200).json({data: users});
	}
	if (request.method === 'POST') {
		const data = request.body;
		const newUser = new User({
			name: data.name,
			email: data.email,
			age: data.age,
		});
		await newUser.save();
		return response.status(201).json({data: newUser});
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
