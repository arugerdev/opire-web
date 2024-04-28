import { Accordion, AccordionItem, Divider } from '@nextui-org/react'
export default function AcordeonCustom ({
  contents = [],
  variant = '',
  className = '',
  fullWidth = false,
  isCompact = false,
  selectionMode = 'single'
}) {
  const isMobile = window.matchMedia('(max-width: 770px)').matches

  return (
    <Accordion
      showDivider
      fullWidth={fullWidth}
      isCompact={isCompact}
      variant={variant}
      selectionMode={selectionMode}
      className={className}
      disableAnimation={isMobile}
      itemClasses={{
        title: 'font-bold text-sm md:text-base'
      }}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: 'auto',
            transition: {
              height: {
                type: 'spring',
                stiffness: 500,
                damping: 30,
                duration: 1
              },
              opacity: {
                easings: 'ease',
                duration: 1
              }
            }
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: 'ease',
                duration: 0.25
              },
              opacity: {
                easings: 'ease',
                duration: 0.3
              }
            }
          }
        }
      }}
    >
      {contents.map((item, index) => {
        return (
          <AccordionItem
            key={item.name + '_' + index}
            aria-label={item.name}
            title={item.name}
          >
            <div className='flex flex-col gap-4 p-2 text-sm md:text-base'>
              <Divider className='h-0.5 rounded-full' />

              {item.content()}
            </div>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
