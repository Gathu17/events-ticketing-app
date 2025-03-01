import React, { Component } from 'react';
import { Transition } from '@headlessui/react'

const Categoriesdetails = ({open}) => {
    return ( 
        <Transition
        className="mx-auto my-16 max-w-md space-y-4"
        show={true}
        enter="transition-all ease-in-out duration-500 delay-[200ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
            Tempor et labore est id ullamco nisi Lorem sit laborum et Lorem. Sunt irure occaecat laboris dolor duis pariatur veniam magna laborum ipsum. 
            Laboris non duis id ut incididunt dolor irure do pariatur reprehenderit occaecat.
        </Transition>
     );
}
 
export default Categoriesdetails;