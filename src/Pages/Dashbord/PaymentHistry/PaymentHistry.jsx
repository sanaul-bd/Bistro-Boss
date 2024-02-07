
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/Section_Title/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const PaymentHistry = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()



    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    })

    // console.log(payments);   



    return (
        <div className="w-full">
            {/* <SectionTitle heading='All Transaction' subHeading='Manage all transaction from here '></SectionTitle> */}

            <h2 className="bg-white p-3 mx-2 rounded font-semibold">Total Payment : {payments.length} </h2>
            <div className="p-14 m-5 bg-fuchsia-200">
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>Price</th>
                                    <th>Transaction ID</th>
                                    <th className="text-end">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment, index) => <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.price}</td>
                                    <td>{payment.Transaction_ID}</td>
                                    <td className="text-end">{payment.status}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistry;