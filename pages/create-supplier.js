import NewSupplierForm from '../components/suppliers/NewSupplierForm'

function CreateSupplierPage() {
	function addSupplierHandler(enteredSupplierData){
		console.log(enteredSupplierData);
	}

	return <NewSupplierForm onAddSupplier={addSupplierHandler} />
}

export default CreateSupplierPage
