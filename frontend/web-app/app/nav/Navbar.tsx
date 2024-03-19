import React from 'react';
import Search from './Search';
import Logo from './Logo';
import { getCurrentUser } from '@/app/actions/authActions';
import UserActions from '@/app/nav/UserActions';
import LoginButton from '@/app/nav/LoginButton';

export default async function Navbar() {
	const user = await getCurrentUser();	return (
		<header
			className='
      sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md
    '
		>
			<Logo />
			<Search />
			{user ? (
				<UserActions user={user} />
			) : (
				<LoginButton />
			)}
		</header>
	);
}
