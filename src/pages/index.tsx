import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.deprecationNotice}>
          <h1 className={styles.title}>Automock has evolved into Suites</h1>
          <p className={styles.subtitle}>
            We've taken everything you loved about Automock and expanded it into Suites - a more powerful framework 
            with enhanced capabilities for building robust test suites. Suites maintains Automock's core philosophy while 
            adding new features to eliminate boilerplate code, simplify dependency management, and streamline your entire testing workflow.
          </p>
          <p className={styles.subtitle}>
            All Automock projects can be migrated to Suites with minimal changes. Your existing knowledge and test patterns will transfer seamlessly.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link
            className={styles.button}
            to="https://suites.dev">
            Go to Suites.dev
          </Link>
          &nbsp;
          &nbsp;
          &nbsp;
          <Link
            className={styles.button}
            to="https://github.com/suites-dev/suites/tree/master/docs/automock">
            Access Automock Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Automock has evolved into Suites"
      description="Automock has evolved into Suites - a more powerful meta-framework for building robust test suites, eliminating boilerplate, and streamlining your testing workflow.">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <HomepageHeader />
    </Layout>
  );
}
