import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
  Button
} from '@nextui-org/react'
export default function HeadNavbar () {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = ['Developers', 'Software Owners', 'Rewards Creators']
  const menuLinks = ['developers', 'owners', 'creators']

  return (
    <Navbar
      shouldHideOnScroll
      position='sticky'
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      maxWidth='full'
      className='flex flex-row items-center bg-transparent py-6 justify-between'
    >
      <NavbarContent className='w-fit'>
        <NavbarBrand className='flex flex-row gap-8 p-2'>
          <Link className='flex flex-col items-center justify-center' href='/'>
            <Image
              isBlurred
              src={'/assets/logos/big_logo.png'}
              width={150}
              height={50}
              className='hidden md:flex opacity-100 cursor-pointer'
              radius='none'
            />
            <Image
              isBlurred
              src={'/assets/logos/isotype.png'}
              width={32}
              className='md:hidden opacity-100 cursor-pointer'
              radius='none'
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex gap-8 flex-row items-center justify-end'
        justify='center'
      >
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full font-bold'
            href='developers'
            size='lg'
          >
            Developers
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full font-bold'
            href='owners'
            size='lg'
          >
            Software Owners
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full font-bold'
            href='creators'
            size='lg'
          >
            Rewards Creators
          </Link>
        </NavbarMenuItem>
      </NavbarContent>
      <NavbarContent justify='end' className='w-fit max-w-fit'>
        <NavbarItem className='hidden md:flex w-fit max-w-fit'>
          <Button
            className=' p-6 text-md bg-white text-black font-bold'
            radius='full'
            href='https://app.opire.dev/'
            as={Link}
            variant='solid'
          >
            Rewards
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='md:hidden text-white'
        />
      </NavbarContent>
      <NavbarMenu className='gap-6 flex items-center justify-center'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className='flex items-center justify-center font-bold'
          >
            <Link color={'foreground'} href={menuLinks[index]} size='lg'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className='flex items-center justify-center'>
          <Button
            className=' p-6 text-md bg-white text-black'
            radius='full'
            href='https://app.opire.dev/'
            as={Link}
            variant='solid'
          >
            Rewards
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
