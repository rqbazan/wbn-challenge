import './styles.css'
import React from 'react'
import Button from '../../components/button'
import navItems from './nav-items.json'

export default function MainLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-48 bg-secondary fixed min-h-full border-r-4 border-primary">
        <div className="flex justify-center mt-6">
          <img
            className="h-32"
            src="/img/brand.svg"
            alt="World Business Network Logo"
          />
        </div>
        <nav className="flex flex-col mt-6 text-text text-sm">
          {navItems.map(navItem => (
            <a key={navItem.text} className="nav-item" href="#placeholder">
              {navItem.text}
            </a>
          ))}
          <a className="nav-item" href="#placeholder">
            All categories
          </a>
        </nav>
      </aside>
      <div className="ml-48 w-full">
        <header className="header">
          <div className="w-48">
            <img src="/img/logo.svg" alt="Italian Business Guide Logo" />
          </div>
          <div className="btn-container">
            <Button>Login</Button>
            <Button>Register</Button>
          </div>
        </header>
        <main className="mt-20">{children}</main>
      </div>
    </div>
  )
}
