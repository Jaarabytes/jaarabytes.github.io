// Paystack component that accepts donations
//
import { usePaystackPayment } from 'react-paystack';
import { useState } from 'react';
export default function Donate () {
    const [ amount, setAmount ] = useState(0);
    const config = { reference: (new Date()).getTime().toString(), email: "xh3rking96@gmail.com", amount: amount, publicKey: '' }
    const onSuccess = ( reference: any ) => { console.log(reference) }
    const onClose = () => { console.log("closed") }
    const initializePayment = usePaystackPayment(config);
    return (
                <div style={{minHeight: '100vh'}}>  
                    <h1 className='text-2xl font-bold my-5'>Thank you for donating anon!</h1>
                    <label>Amount</label>
                    <input value={amount} onChange={() => setAmount(Number(event.target.value))}>
                    <button onClick={() => initializePayment(onSuccess, onClose)}
                    className='text-white rounded-lg px-3 bg-green-900 hover:bg-green-700'
                    >
                        Money upvote
                    </button>
                </>
           )
}
