import Guest from '@/Layouts/GuestLayout'
import React from 'react'

function NewEvent({ auth }) {
  return (
    <Guest auth={auth}>

      <form onSubmit={submit}>
        <div>
          {/* <InputLabel htmlFor="name" value="Name" /> */}

          <TextInput
              id="firstName"
              name="firstName"
              value={data.firstName}
              className="mt-1 block w-full"
              autoComplete="firstName"
              isFocused={true}
              onChange={(e) => setData('firstName', e.target.value)}
              required
              placeholder="First Name"
          />

          <InputError message={errors.firstName} className="mt-2" />
        </div>

        <div className="mt-4">
          {/* <InputLabel htmlFor="name" value="Name" /> */}

          <TextInput
              id="lastName"
              name="lastName"
              value={data.lastName}
              className="mt-1 block w-full"
              autoComplete="lastName"
              isFocused={true}
              onChange={(e) => setData('lastName', e.target.value)}
              required
              placeholder="Last Name"
          />

          <InputError message={errors.lastName} className="mt-2" />
        </div>

        <div className="mt-4">
          {/* <InputLabel htmlFor="email" value="Email" /> */}

          <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              onChange={(e) => setData('email', e.target.value)}
              required
              placeholder="Email: We will send you confirmation receipts here"
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          {/* <InputLabel htmlFor="email" value="Email" /> */}

          <TextInput
              id="phoneNumber"
              type="number"
              name="phoneNumber"
              value={data.phoneNumber}
              className="mt-1 block w-full"
              autoComplete="phoneNumber"
              onChange={(e) => setData('phoneNumber', e.target.value)}
              required
              placeholder="Phone Number: To fill in your tickets start with country code"
              title="Start with country code e.g +254..."
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          {/* <InputLabel htmlFor="password" value="Password" /> */}

          <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full"
              autoComplete="new-password"
              onChange={(e) => setData('password', e.target.value)}
              required
              placeholder="Password"
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          {/* <InputLabel htmlFor="password_confirmation" value="Confirm Password" /> */}

          <TextInput
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              className="mt-1 block w-full"
              autoComplete="new-password"
              onChange={(e) => setData('password_confirmation', e.target.value)}
              required
              placeholder="Confirm Password"
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link
              href={route('login')}
              className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
          >
              Already registered?
          </Link>

          <PrimaryButton className="ms-4" disabled={processing}>
              Register
          </PrimaryButton>
        </div>
      </form>

    </Guest>
  )
}

export default NewEvent