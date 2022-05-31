import { Fragment } from 'react';
import Head from 'next/head'
import SupplierList from '../components/suppliers/SupplierList';

// const DUMMY_SUPPLIERS = [
// 	{
// 		name: 'banana',
// 		logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
// 		address: '444 banana st'
// 	},
// 	{
// 		name: 'banana1',
// 		logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
// 		address: '444 banana st'
// 	},
// 	{
// 		name: 'banana2',
// 		logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
// 		address: '444 banana st'
// 	},
// ];

function HomePage(props) {
	
	return (
		<Fragment>
			<Head>
				<title>Suppliers</title>
				<meta name='description' content='William Yang | Rundoo Take Home' />
			</Head>
			<SupplierList suppliers={props.suppliers} />
		</Fragment>
	);
}

export async function getStaticProps() {
	// fetch data from an API
	const Database = require("@replit/database");	
	const db = new Database();

	const suppliersKeys = await db.list();

	console.log(suppliersKeys);
	
	var suppliers = [];
	for (var i=0; i < suppliersKeys.length ; ++i)
		suppliers.push(await db.get(suppliersKeys[i]));

	console.log(suppliers);
	
	return {
		props: {
			suppliers: suppliers.map((supplier) => ({
				name: supplier[0],
				logo: supplier[1],
				address: supplier[2],
			}))
		},
		revalidate: 1
	};
}

export default HomePage