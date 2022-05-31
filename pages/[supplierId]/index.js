import { Fragment } from 'react';
import Head from 'next/head'
import SupplierData from "../../components/suppliers/SupplierDetail"

function SupplierDetails(props){

	return (
		<Fragment>
			<Head>
				<title>{props.supplierData.name}</title>
				<meta name='description' content={props.supplierData.name} />
			</Head>
			<SupplierData 
				name={props.supplierData.name}
				logo={props.supplierData.logo}
				address={props.supplierData.address}
			/>
		</Fragment>
	);
}

export async function getStaticPaths() {
	const Database = require("@replit/database");	
	const db = new Database();

	const suppliersKeys = await db.list();

	console.log(suppliersKeys);
	
	return {
		fallback: false,
		paths: suppliersKeys.map(supplier => ({params: {supplierId: supplier}})),
	};
}

export async function getStaticProps(context) {
	// fetch data for a single supplier

	const supplierId = context.params.supplierId;

	console.log(supplierId);
	
	const Database = require("@replit/database");	
	const db = new Database();

	const supplier = await db.get(supplierId)

	console.log(supplier);
	
	return {
		props: {
			supplierData: {
				name: supplier[0],
				logo: supplier[1],
				address: supplier[2]
			}
		},
		revalidate: 1
	};
}


export default SupplierDetails;