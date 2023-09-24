import {FormEvent, useState} from "react";
import Router from 'next/router'
const Form = ({produit}) => {
  const handleSubmit = async (event) => {
    event.preventDefault()

    // const [first_name, setFirst_name] = useState('');
    // const [last_name, setLast_name] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setTel] = useState('');
    // const [list, setList] = useState('');
    // const [adress, setAdress] = useState('');
    
    const form = {
      first_name : event.target.first_name.value,
      last_name: event.target.last_name.value,
      phone: event.target.phone.value,
      produit: event.target.produit.value,
      adress: event.target.adress.value,
    }

    const rawResponse = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    const content = await rawResponse.json();

    if (content.rep == 'ok') {
      Router.push('/thanks')
    }

    // setFirst_name('')
    // setLast_name('')
    // setEmail('')
    // setTel('')
    // setList('')
    // setAdress('')
  }

  return (
    <div id="commande">
      <h2 className="text-center text-3xl font-bold">
        Order
      </h2>

      <form onSubmit={handleSubmit} className=" p-8">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500  focus:ring-0 peer focus:outline-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="first_name"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500  focus:ring-0 peer focus:outline-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="last_name"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500  focus:ring-0 peer focus:outline-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="hidden"
              name="produit"
              id="produit"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500  focus:ring-0 peer focus:outline-none"
              placeholder=" "
              required
              value={produit}
            />
            {/* <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Produit
            </label> */}
          </div>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="adress"
            id="adress"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500  focus:ring-0 peer focus:outline-none"
            placeholder=" "
            required
          />
          <label
            htmlFor="adress"
            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Command
        </button>
      </form>
    </div>
  )
}

export default Form
