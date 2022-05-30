function handler(req, res) {
	const Database = require("@replit/database");	
	const db = new Database();
	
	if (req.method === 'POST'){
		const data = req.body;

		const {name, logo, address} = data;

		db.set(name, [name, logo, address]);

		db.list().then(keys => {console.log(keys);});
	}
}

export default handler; 