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

	return <NewSupplierForm onAddSupplier={addSupplierHandler} />
}

export default CreateSupplierPage
