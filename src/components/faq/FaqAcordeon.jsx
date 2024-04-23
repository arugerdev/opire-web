import { Link } from '@nextui-org/react'
import AcordeonCustom from '../shared/AcordeonCustom'

export default function FaqAcordeon () {
  return (
    <AcordeonCustom
      variant='splitted'
      className='max-w-3xl'
      contents={[
        {
          name: 'Who are you?',
          content: () => {
            return (
              <p>
                We're a team with a technical background, motivated by the idea
                that developers and codeowners can make a living thanks to the{' '}
                <strong> open-source</strong>
              </p>
            )
          }
        },
        {
          name: 'Why should I use Opire instead of directly offering money to my maintainers?',
          content: () => {
            return (
              <>
                <p>
                  With Opire, developers looking to earn some money can see all
                  the available rewards in a single place.
                  <br />
                  <br />
                  Also, your project will be exposed not only to your existing
                  maintainers but also to other developers (so you can end up
                  having more maintainers for your project)
                  <br />
                  <br />
                  Another advantage of using Opire is that we provide a safe and
                  easy way to create rewards by anyone. That means someone else
                  can create rewards in your project, improving your product
                  while also receiving a % of the paid rewards created by
                  others, you can see{' '}
                  <Link
                    className='font-bold hover:text-slate-500 underline'
                    target='_blank'
                    href='https://docs.opire.dev/rewards/pricing#percentage-for-code-owner'
                  >
                    here
                  </Link>{' '}
                  the percenteges.
                </p>
              </>
            )
          }
        },
        {
          name: "What's your business model?",
          content: () => {
            return (
              <>
                <p>
                  We offer different tools to make it easier to fund open-source
                  projects, aiming to help codeowners and developers. As
                  intermediaries, we take a fee on all paid transactions, you
                  can see the fees{' '}
                  <Link
                    className='font-bold hover:text-slate-500 underline'
                    target='_blank'
                    href='https://docs.opire.dev/rewards/pricing#minimum-price-and-costs'
                  >
                    here
                  </Link>
                  {'.'}
                  <br />
                  <br />
                  <strong>
                    Opire services are always free for the developers.
                  </strong>
                  They will receive the 100% of the amounts, and the associated
                  costs will be paid on top in the checkout process.
                  <br />
                  <br />
                  For example, if someone creates a $100 reward, the developer
                  will receive $100 and we'll receive <strong>$4</strong>.
                  <br />
                  <br />
                  <Link
                    className='font-bold hover:text-slate-500 underline'
                    target='_blank'
                    href='https://docs.opire.dev/rewards/pricing#playground'
                  >
                    Here
                  </Link>{' '}
                  you can find a playground to see how much you will be charged
                  based on the reward amount
                </p>
              </>
            )
          }
        },
        {
          name: 'How can I contact you?',
          content: () => {
            return (
              <p>
                You can send us an email at{' '}
                <Link
                  className='font-bold hover:text-slate-500 underline'
                  target='_blank'
                  href='mailto:opiredev@gmail.com'
                >
                  opiredev@gmail.com
                </Link>{' '}
                and we'll get back to you as soon as possible.
              </p>
            )
          }
        }
      ]}
    />
  )
}
