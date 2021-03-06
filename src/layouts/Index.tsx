import React from 'react';
import { graphql } from 'gatsby';
import { Stack, Heading, VisuallyHidden } from 'tamia';
import groupBy from 'just-group-by';
import Page from './Page';
import PostList from '../components/PostList';
import Metatags from '../components/Metatags';

type Fields = {
	slug: string;
};

type Frontmatter = {
	title: string;
	tags: string[];
	year: string;
	dateTime: string;
};

type Post = Fields & Frontmatter;

type GroupedPosts = {
	[year: string]: Post[];
};

const groupByYear = (posts: Post[]) => groupBy(posts, (post) => post.year);

const getYears = (postsByYear: GroupedPosts): string[] => {
	const years = Object.keys(postsByYear);
	years.sort();
	years.reverse();
	return years;
};

type Props = {
	data: {
		allMarkdownRemark: {
			edges: {
				node: {
					fields: Fields;
					frontmatter: Frontmatter;
				};
			}[];
		};
	};
	location: {
		pathname: string;
	};
};

const Index = ({
	data: {
		allMarkdownRemark: { edges },
	},
	location: { pathname },
}: Props) => {
	const posts = edges.map(({ node }) => ({
		...node.fields,
		...node.frontmatter,
	}));
	const postsByYear = groupByYear(posts);
	const years = getYears(postsByYear);
	return (
		<Page url={pathname}>
			<Metatags slug={pathname} />
			<main>
				<VisuallyHidden as="h1">Artem Sapegin’s blog posts</VisuallyHidden>
				<Stack gap="l">
					{years.map((year) => (
						<Stack key={year} as="section" gap="m">
							<Heading as="h2" level={2}>
								{year}
							</Heading>
							<PostList posts={postsByYear[year]} />
						</Stack>
					))}
				</Stack>
			</main>
		</Page>
	);
};

export default Index;

export const pageQuery = graphql`
	query IndexPage {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/all/.*/" } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						tags
						year: date(formatString: "YYYY")
						dateTime: date(formatString: "YYYY-MM-DD")
					}
				}
			}
		}
	}
`;
