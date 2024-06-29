// Paystack component that accepts donations
//
import { usePaystackPayment } from 'react-paystack';
import { useState } from 'react';
export default function Donate () {
    const [ amount, setAmount ] = useState(0);
    const config = { reference: (new Date()).getTime().toString(), email: "xh3rking96@gmail.com", amount: amount, publicKey: 'pk_live_9999378c83331abc0c642f96d2457a5f88969934' }
    const onSuccess = ( reference: any ) => { console.log(reference) }
    const onClose = () => { console.log("closed") }
    const initializePayment = usePaystackPayment(config);
    return (
            <>
                <div className='text-center my-5' style={{minHeight: '100vh'}}>  
                    <h1 className='text-2xl font-bold my-5'>Thank you for donating anon!</h1>
                    <label>Amount</label>
                    <br /><br />
                    <input className='text-center rounded-sm text-black py-3' value={amount} onChange={() => setAmount(Number(event.target.value))} />
                    <br /><br />
                    <button onClick={() => initializePayment(onSuccess, onClose)}
                    className='my-5 py-2 text-white rounded-lg px-3 bg-green-900 hover:bg-green-700'
                    >
                        Money upvote
                    </button>
                </div>
           </>
           )
}
