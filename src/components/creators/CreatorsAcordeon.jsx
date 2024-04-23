import { Link } from '@nextui-org/react'
import AcordeonCustom from '../shared/AcordeonCustom'

export default function CreatorsAcordeon ({ id = 0 }) {
  const firstContent = [
    {
      name: 'Supporting project growth',
      content: () => {
        return (
          <p>
            By offering rewards, creators can support and incentivize developers
            to contribute to their projects, leading to increased growth and
            development.
          </p>
        )
      }
    },
    {
      name: 'Investing in innovation',
      content: () => {
        return (
          <p>
            Rewards encourage developers to explore new ideas and technologies,
            fostering innovation within the project and pushing it forward.
          </p>
        )
      }
    },
    {
      name: 'Recognition and appreciation',
      content: () => {
        return (
          <p>
            Reward creators have the opportunity to recognize and appreciate the
            efforts of developers who contribute to their projects, fostering a
            positive relationship with the community.
          </p>
        )
      }
    },
    {
      name: 'Increased visibility',
      content: () => {
        return (
          <p>
            Projects that offer rewards may attract more attention and interest
            from developers, leading to increased visibility and exposure within
            the open-source community.
          </p>
        )
      }
    }
  ]
  const secondContent = [
    {
      name: 'Create your first reward.',
      content: () => {
        return (
          <p>
            With Opire, anyone can create rewards in{' '}
            <Link
              href='https://app.opire.dev/projects'
              target='_blank'
              className='underline font-bold'
            >
              {' '}
              repositories that have the app installed
            </Link>{' '}
            using our commands. Rewards can start from $20. In addition to
            adding rewards to issues, anyone can show appreciation for a user's
            effort with tips starting from $1.
            <br />
            <br />
            An issue can have multiple rewards associated with it, regardless of
            whether it's the same user creating them or several users
            contributing different amounts: at the time of payment, each user
            will be responsible for paying their share.
            <br />
            <br />
            If someone outside the repository's organization creates a reward,
            the organization will receive a % when it's paid to the developer.
          </p>
        )
      }
    },
    {
      name: 'Pay when someone claims your rewards associated with the issue.',
      content: () => {
        return (
          <p>
            Once the developer has claimed the rewards for the issue and it has
            been verified that the proposed change meets expectations, you can
            pay the rewards you created for that issue from your dashboard. In
            case there are multiple developers who have claimed the same issue,
            you can choose whom to pay. It is the developer's responsibility to
            ensure that their account is correctly configured to receive
            payments.
            <br />
            <br />
            This is when the reward transfer will take place along with the
            associated costs being charged.
            <br />
            <br />
            If several people create rewards for the same issue, each creator
            will pay the sum of the rewards they have created.
          </p>
        )
      }
    }
  ]

  return (
    <AcordeonCustom
      variant='shadow'
      className=''
      fullWidth={true}
      contents={[firstContent, secondContent][id]}
    />
  )
}
