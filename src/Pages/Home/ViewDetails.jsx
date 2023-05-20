import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const loader = useLoaderData();
    console.log(loader);
    const {carName ,availableQuantities , price , sellerName    } = loader;
    return (
        <>
            <div className="overflow-x-auto my-5">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Seller Name Color</th>
                            <th>Price</th>
                            <th>Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>{carName}</td>
                            <td>{sellerName}</td>
                            <td>{price}</td>
                            <td>{availableQuantities}</td>
                        </tr>
                        {/* row 2
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        {/* <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr> */} 
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ViewDetails;