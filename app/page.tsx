import Image from 'next/image';
import Styles  from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type News = {
  id: string;
  title: string;
  category:{
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data:{contents:News[]}={
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name:"更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name:"更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    }
  ]
}

export default function Home() {
  const sliceData = data.contents.slice(0,2);
  return (
    <>
      <section className={Styles.top}>
        <div>
          <h1 className={Styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={Styles.description}>私達は市場をリードしているグローバルカンパニーです</p>
        </div>
        <Image className={Styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200}/>
      </section>
      <section className={Styles.news}>
        <h2 className={Styles.newsTitle}>News</h2>
        <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={Styles.list}>
              <div className={Styles.link}>
                <Image className={Styles.image} src="/no-image.png" alt="No Image" width={1200} height={630}/>
                <dl className={Styles.content}>
                  <dt className={Styles.newsItemTitle}>{article.title}</dt>
                  <dd className={Styles.meta}>
                    <span className={Styles.tag}>{article.category.name}</span>
                    <span className={Styles.date}>
                      <Image src="/clock.svg" alt="" width={16} height={16} priority/>
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>))}
        </ul>
        <div className={Styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  )
}