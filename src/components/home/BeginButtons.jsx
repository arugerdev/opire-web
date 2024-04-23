import { Button, Link } from '@nextui-org/react'

export default function BeginButtons () {
  return (
    <section class='flex flex-col p-12 gap-4'>
      <Button
        as={Link}
        href='https://app.opire.dev'
        variant='solid'
        color='primary'
        className='px-8 py-6 font-bold text-base font-mono uppercase'
      >
        APP
      </Button>
      <Button
        as={Link}
        href='https://docs.opire.dev/es/overview/introduction'
        variant='ghost'
        color='primary'
        className='px-8 py-6 font-bold text-base font-mono uppercase'
      >
        Documentation
      </Button>
    </section>
  )
}
