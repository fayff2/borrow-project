import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type IBorrow = {
  name: string;
  amount: number;
  package: string;
  total: number;
  id: string;
};

export default function SendBorrow() {
  const [borrowDetails, setBorrowDetails] = useState<IBorrow[]>([]);
  const { id } = useParams();
  const navigate =useNavigate();

  useEffect(() => {
    axios
      .get(`https://64fc93ca605a026163aea289.mockapi.io/SendBorrow/${id}`)
      .then((res) => {
        console.log(res.data);
        setBorrowDetails(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>

        <div>
          <p>الاسم: {borrowDetails.name}</p>
          <p>المبلغ: {borrowDetails.amount}</p>
          <p>عدد الدفعات: {borrowDetails.package}</p>
          <p>المجموع: {borrowDetails.total}</p>
        </div>


      <h3>طرق التسليف:</h3>
      <div className='flex flex-col gap-2 w-80'>
        <button className='border' onClick={() => {navigate("/pay")}}>سحب بطافة الإتمان</button>
        <button className='border'>Paypal</button>
      </div>
    </div>
  );
}
