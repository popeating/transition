//create an arrow function called header
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let timer;
    const aniStart = async () => {
      timer = setTimeout(() => {
        setIsActive(true);
        const tl = gsap.timeline();
        tl.to('.cover-strip', {
          yPercent: 100,
          duration: 0.8,
          ease: 'Expo.easeInOut',
          stagger: 0.1,
        });
      }, 300);
    };
    const aniEnd = () => {
      console.log(isActive);
      if (timer) {
        clearTimeout(timer);
      }
      const tl = gsap.timeline();
      if (isActive) {
        tl.to('.cover-strip', {
          yPercent: 200,
          duration: 0.8,
          ease: 'Expo.easeInOut',
          stagger: -0.1,
        });
        setIsActive(false);
      }

      tl.set('.cover-strip', { yPercent: 0 });
      clearTimeout(timer);
    };

    router.events.on('routeChangeStart', aniStart);
    router.events.on('routeChangeComplete', aniEnd);
    router.events.on('routeChangeError', aniEnd);

    return () => {
      router.events.off('routeChangeStart', aniStart);
      router.events.off('routeChangeComplete', aniEnd);
      router.events.off('routeChangeError', aniEnd);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [router]);
  return (
    <>
      <div className="flex flex-col overflow-hidden relative z-50">
        <div
          id="cover"
          className="cover-strip h-screen w-3/12 bg-slate-50  top-0 left-0 cover fixed"
        ></div>
        <div
          id="cover1"
          className="cover-strip h-screen w-3/12 bg-slate-100 fixed top-0 left-1/4 cover"
        ></div>
        <div
          id="cover2"
          className="cover-strip h-screen w-3/12 bg-slate-200 fixed top-0 left-2/4 cover"
        ></div>
        <div
          id="cover3"
          className="cover-strip h-screen w-3/12 bg-slate-300 fixed top-0 left-3/4 cover"
        ></div>
      </div>
      <div className="container mx-auto flex justify-between py-8 absolute left-2/4 -translate-x-1/2">
        <h1 className="font-extrabold">DUMMYLOGO</h1>
        <ul className="flex gap-x-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/whatwedo">What we do</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
