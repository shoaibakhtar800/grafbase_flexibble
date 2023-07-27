import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders';

const Navbar = () => {
    const session = {};

    return (
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        height={43}
                        width={115}
                        className="object-contain"
                    />
                </Link>

                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        UserPhoto

                        <Link href="/create-project">
                            Share Work
                        </Link>
                    </>
                ):(
                    <AuthProviders />
                )}
            </div>
        </nav>
    )
}

export default Navbar