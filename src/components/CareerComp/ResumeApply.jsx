import { useCallback, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useDropzone } from 'react-dropzone'
import { UploadCloud } from 'lucide-react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [agreed, setAgreed] = useState(false)
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    return (
        <div className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Resume Apply Us</h2>
                <p className="mt-2 text-lg leading-8 text-white">
                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6" placeholder="First Name" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-white shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6" placeholder="Last Name" />
                        </div>
                    </div>



                    <div className="flex gap-8 w-full flex-col md:flex-row sm:col-span-2">

                        <div className='w-full'>
                            <label htmlFor="gender" className=" text-white">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2.5 text-black bg-white shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className="w-full">
                        <label htmlFor="age" className=" text-white">
                                Age
                            </label>
                            <input
                            type='number'
                            placeholder="Above < 20 "
                                id="age"
                                name="age"
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-black bg-white shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6" 
                            />
                                
                        </div>
                    </div>


                    
                    <div className="sm:col-span-2">
                        <label htmlFor="graduation" className="block text-sm font-semibold leading-6 text-white">
                            Year of Graduation 
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="graduation"
                                id="graduation"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6" placeholder="Year of your Graduation"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="designation" className="block text-sm font-semibold leading-6 text-white">
                            Designation
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="designation"
                                id="designation"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6" placeholder="Your designation"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6" placeholder="Perivous Company Name"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="currentLocation" className="block text-sm font-semibold leading-6 text-white">
                            Current Location
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="currentLocation"
                                id="currentLocation"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6" placeholder="Enter your current location"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6" placeholder="Enter Your Mail ID"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                            Phone number
                        </label>
                        <div className="flex mt-2.5 bg-white rounded-md">
                            <div className="flex items-center px-3">
                                <p className=' text-black text-center'>+91</p>
                            </div>
                            <input
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2  text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6" placeholder="Enter Your Mobile Number" />
                        </div>
                    </div>
                 
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className=" block text-sm font-semibold leading-6 text-white">
                            Upload  Resume
                        </label>
                        <section className="container h-32 rounded-md px-3 py-1 bg-white  mt-2 flex flex-col items-center justify-center">
                            <div {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                <div className="flex justify-center">
                                    <UploadCloud className='h-12 w-12' />
                                </div>
                                <div className="flex justify-center gap-3 items-center">
                                    <p className='text-center'>Upload your resume, Click to upload </p>
                                </div>
                            </div>
                            <aside className='flex flex-col items-center'>
                                <h4>Files</h4>
                                <ul>{files}</ul>
                            </aside>
                        </section>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                    >
                        Submit application
                    </button>
                </div>
            </form>
        </div>
    )
}
