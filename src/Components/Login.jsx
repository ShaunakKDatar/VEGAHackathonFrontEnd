import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      
<div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-md" data-v0-t="card">
  <div className="flex flex-col p-6 space-y-1">
    <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Login</h3>
    <p className="text-sm text-muted-foreground">Enter your email below to login to your account</p>
  </div>
  <div className="p-6">
    <div className="space-y-4">
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="email"
        >
          Email
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="email"
          placeholder="m@example.com"
          required=""
          type="email"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="password"
          >
            Password
          </label>
          <a className="ml-auto inline-block text-sm underline" href="#">
            Forgot your password?
          </a>
        </div>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="password"
          required=""
          type="password"
        />
      </div>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-secondary"
        type="submit"
      >
        Login
      </button>
    
    </div>
    <div className="mt-4 text-center text-sm">
      <small>
      Don't have an account?
      <Link className="underline" to="/signup">
        Sign up
      </Link></small>
    </div>
  </div>
</div>
    </div>
  )
}
