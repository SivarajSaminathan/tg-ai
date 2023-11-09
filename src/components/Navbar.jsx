import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  PhotoIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  UserIcon,
  NewspaperIcon,
  RectangleGroupIcon,
  QueueListIcon,
  ViewColumnsIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, } from '@heroicons/react/20/solid'
import { NavLink } from 'react-router-dom'

const products = [
  { name: 'Image Annotation', href: '/img', icon: PhotoIcon },
  { name: 'Video Annotation', href: '/vid', icon: VideoCameraIcon },
  { name: 'Text Annotation', href: '/text', icon: DocumentTextIcon },
  { name: 'Audio Transcription', href: '/Aud', icon: MegaphoneIcon },
  { name: 'Sentiment Analysis', href: '/sen', icon: UserIcon },
  { name: 'Content Moderation', href: '/conmon', icon: NewspaperIcon },
  { name: 'Product Categorization', href: '/procat', icon: RectangleGroupIcon },
  { name: 'Image Segmentation', href: '/imgseg', icon: QueueListIcon },
  { name: 'Lidar Annotation', href: '/lidanno', icon: ViewColumnsIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [companyDp, setCompanyDp] = useState(false)

  return (
    <header className="bg-black z-[9999]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="#" className="-m-1.5 p-1.5">
            <span className="sr-only text-red-700">RED BOX</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-10">
          <NavLink to={'/'} className="text-sm font-semibold leading-6 text-white">Home</NavLink>
          <Popover className="relative">
            <Popover.Button className="flex items-center justify-center gap-x-1 text-sm font-semibold leading-6 focus:ring-0 focus:border-0 before:ring-0 before:border-0 after:ring-0 after:border-0 text-white">
              Our Services
              <ChevronDownIcon className="h-5 w-5 mt-1 text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >

              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-red-700" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <NavLink to={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </NavLink>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>
          <NavLink to={'/career'}><a className="text-sm font-semibold leading-6 text-white">Career</a></NavLink>
          <NavLink to={'/about'}><a className="text-sm font-semibold leading-6 text-white">About</a></NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to={'/contact'} className="text-sm font-semibold leading-6 text-white">
            Contact Us <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="#" className="-m-1.5 p-1.5">
              <span className="sr-only text-red-700">RED BOX</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink to={'/'} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black">
                  Home
                </NavLink>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-black">
                        Our Services
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products,].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-black"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <NavLink className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black" to={'/career'}>Career</NavLink>
                <NavLink className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black" to={'/about'}>About</NavLink>
              </div>
              <div className="py-6">
                <NavLink to={'/contact'} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-black">
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

