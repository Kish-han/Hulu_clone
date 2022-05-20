import React from 'react'
import Image from 'next/image'
import HeaderItems from './HeaderItems'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon, LightningBoltIcon, SearchIcon, UserIcon,
} from "@heroicons/react/outline"
const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between sm:items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl' >
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        src={"https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png"}
        alt=""
        width={200}
        height={100}
        className='object-contain'
      />
    </header>
  )
}

export default Header