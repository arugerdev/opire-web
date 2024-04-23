import { Link } from '@nextui-org/react'
import AcordeonCustom from '../shared/AcordeonCustom'

export default function DevsAcordeon ({ id = 0 }) {
  const firstContent = [
    {
      name: 'Rewards for contributions',
      content: () => {
        return (
          <p>
            Developers can earn rewards for their contributions to open-source
            projects, providing tangible recognition for their work.
          </p>
        )
      }
    },
    {
      name: 'Engagement and community growth',
      content: () => {
        return (
          <p>
            By offering rewards, Opire incentivizes developers to actively
            participate in projects, leading to increased engagement and
            community growth.
          </p>
        )
      }
    },
    {
      name: 'Visibility and recognition',
      content: () => {
        return (
          <p>
            By showcasing their contributions and earning rewards, developers
            can enhance their visibility within the open-source community and
            gain recognition.
          </p>
        )
      }
    },
    {
      name: 'Skill Enhancement',
      content: () => {
        return (
          <p>
            Developers have the opportunity to enhance their skills by working
            on diverse projects and collaborating with other talented
            individuals within the open-source community.
          </p>
        )
      }
    }
  ]
  const secondContent = [
    {
      name: 'Set up your payment account.',
      content: () => {
        return (
          <p>
            To receive payments through Opire, it's necessary for you to login
            and complete the configuration of the payment platform in your
            settings. We're using <strong>Stripe</strong> to provide secure
            payments.
            <br />
            <br />
            Failure to do so will prevent reward creators from rewarding you for
            your work.
          </p>
        )
      }
    },
    {
      name: 'Search for a rewarded issue and try to solve it.',
      content: () => {
        return (
          <p>
            On Opire, you can search through all available rewards based on
            technology, programming language, price, etc.
            <br />
            <br />
            Once you've found an issue you believe you can solve, give it a shot
            to let the world know you intend to claim the associated rewards
            upon resolution.
          </p>
        )
      }
    },
    {
      name: 'Create a PR and claim the reward.',
      content: () => {
        return (
          <p>
            Once you have the solution to the issue, create a{' '}
            <strong>PR</strong> and use our <strong>commands</strong> to claim
            the associated rewards.
            <br />
            <br />
            <strong>
              Please note that this does not mean you will be automatically
              paid.
            </strong>{' '}
            Reward creators will pay you when they verify that your solution
            meets the requirements defined in the issue.
            <br />
            <br />
            Since a single issue may have multiple rewards from different
            creators associated with it, each creator will pay their share
            separately (possibly at different times). You can see the pending
            amount for the rewards you have claimed at any time on your{' '}
            <strong>dashboard</strong>.
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
