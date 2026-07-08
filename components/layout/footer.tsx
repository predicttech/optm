import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Logo from '../logo'

const enterpriseLinks = [
    { href: '#', label: 'Knee & joint pain' },
    { href: '#', label: 'Back & spine pain' },
    { href: '#', label: 'Obesity & GLP-1' },
    { href: '#', label: 'Muscle longevity' }, 
]

const productLinks = [
    { href: '#', label: 'MuscleAGE™ test' },
    { href: '#', label: 'OrthoAGE™ test' },
    { href: '#', label: 'Plant formulation' },
    { href: '#', label: 'GLP-1 therapy' },
]

const docsLinks = [
    { href: '#', label: 'The research' },
    { href: '#', label: 'Published studies' },
    { href: '#', label: 'Clinical outcomes' },
    { href: '#', label: 'Our team' }, 
]

const communityLinks = [
    { href: '#', label: 'Book a test' },
    { href: '#', label: '+91 98100 00000' },
    { href: '#', label: 'South Delhi' },
    { href: '#', label: 'Mon–Sat, 9am–7pm' },
]

const footerLinks = [
    {
        name: 'EnterConditionsprise',
        links: enterpriseLinks,
    },
    {
        name: 'Protocol',
        links: productLinks,
    },
    {
        name: 'Conditions',
        links: docsLinks,
    },
]

export function Footer() {
    return (
        <footer className="">
            <div className="mx-auto max-w-5xl space-y-16 px-5 pb-16">
                <div className="flex flex-col items-center justify-center border-b pb-8">
                    <Link href="/" className="text-xl">
                        <Logo fill='#133F26' className="size-40" />
                    </Link>
                    <p className='text-xl max-w-sm text-center'>
                        India's first biomarker-driven pain & metabolic clinic.
                    </p> 
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {footerLinks.map((linksGroup, index) => (
                        <div key={index}>
                            <span className="font-medium">{linksGroup.name}</span>
                            <ul className="mt-4 list-inside space-y-4">
                                {linksGroup.links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-primary text-muted-foreground text-sm duration-150">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <span className="text-sm font-medium">Community</span>
                        <ul className="mt-4 list-inside space-y-4">
                            {communityLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary text-muted-foreground text-sm duration-150">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-muted mt-16 flex items-center justify-between rounded-md p-4 px-6 py-3">
                    <span>&copy; All Rights Reserved by OPTM 2026</span>
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-primary text-sm">
                        Licence
                    </Link>
                </div>
            </div>
        </footer>
    )
}