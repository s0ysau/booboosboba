export default function Footer () {
  return (
    <footer className='py-5 bg-black text-white sticky top-[100vh] bottom-0 left-0 w-screen'>
      <section />
      <section className='flex justify-evenly'>
        <p>Logo</p>
        <div className='px-10'>
          <h1>SOCIAL MEDIA</h1>
          <a
            className='flex no-underline'
            href='https://www.linkedin.com/in/jerricklc/'
            target='_blank' rel='noreferrer'
          ><span className='text-center'>Linkedin</span>
          </a>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>twitter</p>
        </div>
        <div className='px-10'>
          <h1>COMPANY</h1>
          <a
            className='flex no-underline'
            href='https://jerricklc.netlify.app/'
            target='_blank' rel='noreferrer'
          ><span className='text-center'>About</span>
          </a>
        </div>
        <div className='px-10'>
          <h1>USEFUL LINKS</h1>
          <a
            className='flex no-underline'
            href='https://github.com/s0ysau/booboosboba#readme'
            target='_blank' rel='noreferrer'
          ><span className='text-center'>Github</span>
          </a>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>

      </section>
    </footer>
  )
}

{ /* <h1>Booboo's Boba</h1>
<p>1234 Boba Lane</p>
<p>San Francisco, CA 94111</p>
<p>(123) 456-7890</p>
<p>© 2021 Booboo's Boba</p> */ }
