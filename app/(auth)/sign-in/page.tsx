'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'

const page = () => {
  const handleSignIn = async () =>{
    return await authClient.signIn.social({provider:'google'})
  }

  return (
   <main className='sign-in'>
     <aside className='testimonial'>
        <Link href='/'>
          <Image src='/assets/icons/logo.svg' alt="logo" width={32} height={32} />
          <h1>DoomCast</h1>
        </Link>

      <div className='description'>
        <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => ( <Image src='/assets/icons/star.svg' alt="star" width={20} height={20} key={index} />
              ))}
            </figure>
            <p>doomcast is a platform that allows you to share your screen recording videos with the world</p>

            <article>
              <Image src='/assets/images/jason.png' alt="jason" width={64} height={64} className='rounded-full' />

              <div>
                <h2>Jason Doe</h2>
                <p>Product manager, Zoom</p>

              </div>
            </article>
        </section>
        </div> 
        <p>Doomcast {new Date().getFullYear()} </p> 
     </aside>

     <aside className='google-sign-in'>
         <section>
            <Link href='/'>
              <Image src='/assets/icons/logo.svg' alt="logo" width={42} height={42} />
            </Link>
            <p>Crate and share your very first <span>DoomCast video</span> in no time! </p>
            <button onClick={handleSignIn}>
              <Image src='/assets/icons/google.svg' alt="google" width={22} height={22} />
              <span>Sign in with Google</span>
            </button>
          </section>     
     </aside>
     <div className='overlay'/>
    </main>
  )
}

export default page