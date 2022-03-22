import styles from '../../styles/Home.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

import Module from '../../components/module';

import { getPostBySlug, getAllPosts } from '../../lib/posts';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post, posts }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.col2}`}>
        <Module title={post.title} span={2} contentStyles={{ padding: '1rem' }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Module>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
