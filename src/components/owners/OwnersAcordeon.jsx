import { Link } from '@nextui-org/react'
import AcordeonCustom from '../shared/AcordeonCustom'

export default function OwnersAcordeon ({ id = 0 }) {
  const firstContent = [
    {
      name: 'Accelerated Development',
      content: () => {
        return (
          <p>
            With more developers actively involved, your project can progress
            faster, with issues being resolved and features being implemented
            more quickly.
          </p>
        )
      }
    },
    {
      name: 'Increased Engagement',
      content: () => {
        return (
          <p>
            Offering rewards encourages developers to contribute to your
            project, leading to greater community engagement and participation.
          </p>
        )
      }
    },
    {
      name: 'Quality Improvement',
      content: () => {
        return (
          <p>
            Rewards incentivize developers to produce high-quality code, leading
            to improved codebase quality and overall project stability.
          </p>
        )
      }
    },
    {
      name: 'Community Building',
      content: () => {
        return (
          <p>
            Rewarding contributions fosters a sense of community around your
            project, leading to stronger relationships between contributors and
            increased loyalty to your project.
          </p>
        )
      }
    }
  ]
  const secondContent = [
    {
      name: 'Install the app.',
      content: () => {
        return (
          <p>
            The Opire app allows any user to use Opire commands in repositories
            where it's installed, enabling interaction with the Opire platform
            without having to leave your GitHub repository.
            <br />
            <br />
            We recommend notifying your community that you are using Opire so
            that they can create rewards themselves or stay tuned to resolve
            issues. You can modify the README.md of the repositories,
            communicate it in the community forum, notify on Discord, etc.
          </p>
        )
      }
    },
    {
      name: "Configure your organization's payment account.",
      content: () => {
        return (
          <p>
            If someone external to your project creates rewards and a developer
            receives them, you will receive a % of the reward as recognition for
            your contribution as the code author.
            <br />
            <br />
            To access this payment through Opire, it's essential to complete the
            configuration of your organization's payment platform. Any team
            member can go to the settings screen and carry out the onboarding
            process with Stripe. By clicking on the corresponding button for
            your organization, an email with instructions will be sent to the
            organization. If this procedure is not completed, you will not be
            able to receive the mentioned compensation.
          </p>
        )
      }
    },
    {
      name: 'Create your first reward (or let others create it for you).',
      content: () => {
        return (
          <p>
            If you are going to create rewards in your own repositories, check
            the{' '}
            <Link href='/creators' className='font-bold underline'>
              "For Rewards Creators"
            </Link>{' '}
            section
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
