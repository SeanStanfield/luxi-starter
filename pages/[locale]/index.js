import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Hidden from '@mui/material/Hidden';
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '~/components/Header';
import AnimateSlider from '~/components/AnimateSlider';
import Feature from '~/components/Feature';
import Counter from '~/components/Counter';
import Hero from '~/components/Hero';
import Testimonials from '~/components/Testimonials';
import Footer from '~/components/Footer';
import PageNav from '~/components/PageNav';
import Notification from '~/components/Notification';
import Contact from '../../components/Forms/Contact';

const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  spaceBottom: {
    marginBottom: theme.spacing(15),
  },
  spaceTop: {
    paddingTop: theme.spacing(15)
  },
  containerWrap: {
    marginTop: theme.spacing(15)
  },
}));

function Landing(props) {
  const { classes, cx } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          Menu-Genie - Home Page
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section className={classes.spaceBottom} id="hero">
            <Hero />
          </section>
          <section>
            <Container fixed>
              <AnimateSlider />
            </Container>
          </section>
          <section className={cx(classes.spaceTop, classes.spaceBottom)} id="feature">
            <Container fixed>
              <Feature />
            </Container>
          </section>
          <section className={classes.pageSection}>
            <Counter />
          </section>
          <section className={classes.spaceTop} id="testimonials">
            <Testimonials />
          </section>
          <section className={classes.spaceTop} id="feature">
            <Feature />
          </section>
          <section className={classes.spaceTop} id="contact">
            <Contact />
          </section>
        </main>
        <Hidden lgDown>
          <PageNav />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        <Hidden lgDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
