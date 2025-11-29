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
          <span className={styles.deprecationBadge}>NOTICE</span>
          <h1 className={`${styles.title} ${styles.suitesColor}`}>Automock 2.x → Suites 3.x</h1>
          <p className={styles.subtitle}>
            Automock development stopped at version <code>2.1.0</code>. Starting from version <code>3.0.0</code>,
            the project continues as <strong>Suites</strong>, the actively developed successor with new features
            and improvements.
          </p>
          <p className={styles.subtitle}>
            <strong>Automock 2.x</strong> will receive critical bug fixes only. All new development,
            features, and enhancements are now released as <strong>Suites 3.x</strong>.
          </p>
          <p className={styles.subtitle}>
            Migrate to Suites (version 3) to access the latest features and continued support.
            Automated migration via <code>@suites/codemod</code> is planned for Q1 2026.
          </p>
          <p className={styles.subtitle}>
            <strong>Deprecation Timeline:</strong> A formal deprecation date for Automock v2 will be announced
            once <code>@suites/codemod</code> is stable to ensure a smooth automated migration path for all users.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link
            className={styles.button}
            to="https://suites.dev">
            Migrate to Suites
          </Link>
          &nbsp;
          &nbsp;
          &nbsp;
          <Link
            className={styles.button}
            to="https://github.com/suites-dev/suites/tree/master/docs/automock">
            View Archived Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Automock 2.x → Suites 3.x"
      description="Automock development stopped at version 2.1.0. Starting from version 3.0.0, the project continues as Suites with active development and new features.">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <HomepageHeader />
    </Layout>
  );
}
