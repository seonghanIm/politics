import Header from "../components/Header";

export default function bosu(): any {

    interface Icontents{
        name : String;
        content : String;
        date : Date;
    }

    class contents implements Icontents{
        constructor(
            public name : String,
            public content: String,
            public date : Date
        ){}
    }

    const date = new Date();
    const content = new contents("홍길동", "콘텐츠 입니다.",date)
    console.log(content)


    return (
        <><div className='container'>
            <Header />
        </div><span className="badge bg-danger text wrap position-absolute top-35 start-50 translate-middle">
                <p className="text-center fs-2 fw-bold ml -100">보수 정치인 SNS 모아보기</p>
            </span></>

        
    )
}