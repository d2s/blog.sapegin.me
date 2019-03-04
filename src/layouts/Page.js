import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Page as PageBase, Box, Container } from 'tamia';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageFooter from '../components/PageFooter';
import Base from './Base';

const Page = ({ children, url, title, pageTitle }) => {
	return (
		<Base>
			<Container>
				<PageBase>
					<Helmet title={pageTitle || title} />
					<Box mb="l">
						<Header url={url} />
					</Box>
					<Box as="main" role="main" mb="l">
						{children}
					</Box>
					<PageBase.Footer>
						<PageFooter />
						<Footer />
					</PageBase.Footer>
				</PageBase>
			</Container>
		</Base>
	);
};

Page.propTypes = {
	children: PropTypes.node.isRequired,
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	pageTitle: PropTypes.string,
};

export default Page;