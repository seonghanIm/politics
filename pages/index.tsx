import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link';
import Header from '../components/Header';


const Home: NextPage = () => {
  return (
     <div className='container'>
        <Header/>
    
      <div className="ml-8 mb-4 container-fluid py-7">
        <h1 className="mb-4 display-5 fw-bold">정치인 SNS 모아보기</h1>
        <p className="mb-4 col-md-8 fs-4">편하게 정치인들의 SNS를 모아보세요! </p>
        <p className="mb-4 col-md-8 fs-4">트위터, 페이스북, 인스타그램의 정치인들의 글귀를 모아볼 수 있습니다!  </p>
        <Link href="#none">
        <a className="btn btn-success btn-lg">최근 업데이트 글 모아보기</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
