// import { useEffect, useState } from 'react';
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
	// const [loadedSuppliers, setLoadedSuppliers] = useState([]);
	
	// useEffect(() => {
	// 	// send a http request and fetch data
	// 	setLoadedSuppliers(DUMMY_SUPPLIERS);
		
	// }, []);
	
	return <SupplierList suppliers={props.suppliers} /> ;
}

// export async function getServerSideProps(context) {
// 	const req = context.req
// 	const res = context.res
	
// 	return{
// 		props: {
// 			suppliers: DUMMY_SUPPLIERS
// 		}
// 	};
// }

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