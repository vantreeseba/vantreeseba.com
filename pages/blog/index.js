import styles from '../../styles/Home.module.css';
import listStyles from '../../components/github/index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

import Module from '../../components/module';
import Link from '../../components/link';

import { getAllPosts } from '../../lib/posts';

function BlogPostPreview({ post }) {
  return (
    <>
      <Link href={`/blog/${post.slug}`} className={listStyles.key}>
        {post.title}
      </Link>
      <span className={listStyles.value}>{post.excerpt}</span>
    </>
  );
}

export default function Blog({ allPosts }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.col1}`}>
        <Module title="Posts" span={1}>
          <div className={listStyles.content}>
            {allPosts.map((x) => (
              <BlogPostPreview post={x} />
            ))}
          </div>
        </Module>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
