import { Fragment } from 'react';
import Head from 'next/head'
import NewSupplierForm from '../../components/suppliers/NewSupplierForm'

function CreateSupplierPage() {
	async function addSupplierHandler(enteredSupplierData){
		const response = await fetch('/api/create-supplier', {
			method: 'POST',
			body: JSON.stringify(enteredSupplierData),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();

		console.log(data);
	}

	return (
		<Fragment>
			<Head>
				<title>Add a Supplier</title>
				<meta name='description' content='Form for adding suppliers' />
			</Head>
			<NewSupplierForm onAddSupplier={addSupplierHandler} />
		</Fragment>
	);
}

export default CreateSupplierPage
