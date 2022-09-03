import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link';
export default function Header():any{
    return (
        <div className='p-3 container'>
            <header className="flex flex-row p-3 justify-between">
                <div>
                    <Link href='/'>
                        <a className="btn btn-outline-warning m-2 btn-lg">Polictics  </a>
                    </Link>
                </div>

                <div className="d-grid gap-2 d-md-block">
                    <Link href="/aboutUs">
                        <a className="btn btn-outline-success m-2 btn-lg">About Us</a>
                    </Link>
                    <Link href="/bosu">
                        <a className="btn btn-outline-danger m-2 btn-lg" >보수</a>
                    </Link>
                    <Link href="/jinbo">
                        <a className="btn btn-outline-primary m-2 btn-lg">진보</a>
                    </Link>
                </div>
            </header>
        </div>
    )
}