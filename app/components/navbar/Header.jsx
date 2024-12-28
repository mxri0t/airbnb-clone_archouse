'use client'
import Image from 'next/image';
import React from 'react';
import ARCHOUSE from '../../assets/logo/archouse.png';
import ProfileDropdown from '../dropdowns/ProfileDropdown';

// -------------------- React Icons: start --------------------
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
// -------------------- React Icons: end --------------------

// -------------------- Context: start --------------------
import { useDropDownContext } from '@/app/context/DropDownContext';
import { useSearchContext } from '@/app/context/SearchContext';
// -------------------- Context: end --------------------

const Header = () => {

    // -------------------- Imported Context: start (/app/context) --------------------
    const { isProfile, handleProfileDropDown, isCloseDropdowns } = useDropDownContext();
    const { isSearchType, handleSearchType } = useSearchContext();
    // -------------------- Imported Context: end --------------------

  return (
    <div className='flex justify-between items-center py-4 px-4 md:px-12 lg:px-32'>
        {/** -------------------- Website Logo: start (/app/assets/logo/archouse.png) -------------------- */}
        <section>
            <Image
                src={ARCHOUSE}
                alt='archouse_logo'
                width={150}
            />
        </section>
        {/** -------------------- Website Logo: end -------------------- */}
        {/** -------------------- Choose Search Option: start -------------------- */}
        <section className='hidden md:flex space-x-4'>
            <button className='text-[#adadad] hover:text-[#141414]'>Stay</button>
            <button className='text-[#adadad] hover:text-[#141414]'>Experience</button>
        </section>
        {/** -------------------- Choose Search Option: end -------------------- */}
        {/** -------------------- Profile Section: start -------------------- */}
        <section
            ref={isCloseDropdowns} 
            className={`relative hidden md:flex bg-white items-center space-x-2 border border-[#adadad] py-2 px-4 rounded-full cursor-pointer ${isProfile ? 'shadow-md' : ''}`}
            onClick={handleProfileDropDown}
        >
            <article><FaUser /></article>
            <article><GiHamburgerMenu /></article>

            <article>
                {isProfile && (
                    <div className='absolute right-0 top-10 bg-white border border-[#adadad] p-2 rounded-md shadow-md'>
                        <ProfileDropdown />
                    </div>
                )}
            </article>
        </section>
        {/** -------------------- Profile Section: end -------------------- */}
    </div>
  )
}

export default Header;