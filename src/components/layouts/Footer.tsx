import MainLogoBlack from "@/assets/MainLogoBlack.svg"
import ButtonIcon from "@/assets/icons/ButtonIcon.svg"
import YouTube from "@/assets/icons/YouTube.svg"
import Instagram from "@/assets/icons/Instagram.svg"
import Facebook from "@/assets/icons/Facebook.svg"

type NavLink = { id: number; title: string; url: `#${string}` }
type SocialIcon = {link: string; img: string; alt: string;}

const navLinks: NavLink[] = [
    { id: 1, title: "About us", url: "#about" },
    { id: 2, title: "Rates", url: "#payment" },
    { id: 3, title: "Our speakers", url: "#speakers" },
    { id: 4, title: "FAQ", url: "#faq" },
]

const socialIcons: SocialIcon[] = [
    {link: "https://www.youtube.com/", img:YouTube, alt: "YouTube" },
    {link: "https://www.facebook.com/", img:Facebook, alt: "Facebook" },
    {link: "https://www.instagram.com/", img:Instagram, alt: "Instagram" },
]


const Footer = () => {
    return (
        <footer className="bg-[var(--color-black)] rounded-t-3xl section-y section-x">
            <a href="#hero" >
                <img className="mb-14 mx-auto w-36 cursor-pointer" src={MainLogoBlack} alt="Kingdom & Company" />
            </a>

            <div className="px-3">
                <div className="py-8 border-y flex flex-col items-center justify-center">
                    <h4 className="text-h4 text-[var(--color-white)] text-center mb-8 max-w-3xl">
                        For general inquiries, registration questions, or partnership opportunities, reach out anytime:
                    </h4>
                    <a
                        href="#connect"
                        className="w-full md:w-80 mb-4 flex justify-center items-center gap-2 py-3 px-5 border-none
                                   bg-[var(--color-blue)] rounded-[10px] text-p2 text-[var(--color-white)]"
                    >
                        Let’s Connect <span><img src={ButtonIcon} alt="icon"/></span>
                    </a>

                    <a
                        href="mailto:hello@kingdomcompany.ca"
                        className="w-full md:w-80 flex justify-center items-center gap-2 py-3 px-5 border
                                   border-[var(--color-blue)] rounded-[10px] text-p2 text-[var(--color-blue)]"
                    >
                        hello@kingdomcompany.ca <span><img src={ButtonIcon} alt="icon"/></span>
                    </a>
                </div>
            </div>

            <div>
                <p className="text-p1 uppercase text-[var(--color-white)] text-center mb-4 mt-16">
                    Social Media
                </p>
                <ul className="flex justify-center items-center gap-10">
                    {socialIcons.map((social)=>(
                        <li key={social.link}>
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-md border link-hover"

                            >
                                <img src={social.img} alt={social.alt} className="w-4 h-4"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul className="py-16 flex flex-col md:flex-row gap-10 items-start justify-center">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.url}
                               className="text-p1-semiBold text-[var(--color-white)] link-hover"
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 md:text-center gap-6 lg:gap-0 items-start justify-center">
                <p className="text-p2 text-[var(--color-gray)]">
                    © 2025 Kingdom & Company. All rights reserved.
                </p>

                <a href="/privacy-policy.html" className="text-p2 text-[var(--color-gray)] link-hover">
                    Privacy Policy
                </a>

                <a href="/terms-of-service.html" className="text-p2 text-[var(--color-gray)] link-hover">
                    Terms of Service
                </a>
            </div>
        </footer>
    )
}
export default Footer
