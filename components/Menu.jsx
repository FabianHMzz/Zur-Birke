import Image from 'next/image'

export default function Menu() {
  return (
    <section className='bg-gray-100/20 py-14' id='menu'>
      <h2 className='text-5xl font-[PlayFair] text-center mb-10'>Our Menu</h2>
      <div className='select-none'>
        <picture className='flex flex-col justify-center items-center lg:flex-row lg:justify-around'>
          <Image
            className='drop-shadow-xl shadow-black border-8 border-double border-[#deb887]/80'
            src='/Zur-Birke-Menu.webp'
            alt='Zur Birke Menu'
            width={500}
            height={500}
          />
          <Image
            className='drop-shadow-xl shadow-black border-8 border-double border-[#deb887]/80'
            src='/Zur-Birke-Menus.webp'
            alt='Zur Birke Menu'
            width={500}
            height={500}
          />
        </picture>
        <h3 className='text-5xl font-[PlayFair] text-center mb-10 mt-10 select-text'>
          Lunch Menu
        </h3>
        <picture className='flex flex-col justify-center items-center lg:flex-row lg:justify-around'>
          <Image
            className='drop-shadow-xl shadow-black border-8 border-double border-[#deb887]/80'
            src='/LunchMenu.webp'
            alt='Lunch Menu'
            width={500}
            height={500}
          />
        </picture>
      </div>
    </section>
  )
}
