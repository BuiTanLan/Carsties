'use client';

import { useParamsStore } from '@/hooks/useParamsStore';
import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export default function Logo() {
	const router = useRouter();
	const pathname = usePathname();
	const reset = useParamsStore((state) => state.reset);

	function doReset() {
		if (pathname !== '/') router.push('/');
		reset();
	}

	return (
			<div onClick={reset} className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500'>
			<AiOutlineCar size={34} />
			<div>Carsties Auctions</div>
		</div>
	);
}
