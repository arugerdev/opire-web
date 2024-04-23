import { Image, Button, Link } from '@nextui-org/react'
import { any } from 'astro/zod'

export default function InfoCard ({
  className = '',
  title = '',
  titleClass = '',
  description = '',
  linkTo = '',
  imageSrc
}) {
  return (
    <section
      class={`${className} flex flex-row w-full md:w-fit max-w-prose md:max-w-prose items-center justify-center gap-0 px-0 md:pd-16`}
    >
      <section class='flex flex-col items-center md:items-start gap-2 py-4 mb-12 px-0 max-w-[800px]'>
        <div class='flex pb-2 md:pb-12 p-0 m-0 gap-4 w-full items-center justify-center'>
          <h1
            class={`${titleClass} pb-0 p-0 m-0 text-2xl md:text-5xl text-center font-extrabold w-full text-transparent bg-clip-text`}
          >
            {title}
          </h1>
        </div>
        <p class='text-justify text-slate-300 text-sm md:text-lg max-w-prose font-mono pb-12 font-bold'>
          {description.split('\n').map((item, i) => {
            return (
              <>
                {item}
                <br />
              </>
            )
          })}
        </p>
        <Button
          as={Link}
          href={linkTo}
          variant='solid'
          color='primary'
          className='px-8 py-6 max-w-[160px] font-bold text-base font-mono uppercase'
        >
          Read more
        </Button>
      </section>
      <Image
        client:visible
        src={imageSrc}
        className='hidden md:flex opacity-100 p-12'
        width={248}
      />
    </section>
  )
}
