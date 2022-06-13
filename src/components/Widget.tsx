
import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {

  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-10 flex flex-col items-end">

      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="button-widget group">
        <ChatTeardropDots className="h-6 w-6" />
        <span className='content-button group-hover:max-w-xs'>
          <span className="pl-2"></span>
          <span>Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  )
}