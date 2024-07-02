'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { use, useEffect } from 'react';
import Confetti from 'react-confetti';

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get('orderId');

  useEffect(() => {
    if (!orderId) return;
    const timer = setTimeout(() => {
      router.push('/orders/' + orderId);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [orderId, router]);

  return (
    <div className=''>
      <Confetti
        width={2000}
        height={1000}
      />
      <h1>SuccessPage</h1>
    </div>
  );
};

export default SuccessPage;
