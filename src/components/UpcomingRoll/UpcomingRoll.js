// import React from "react";
// import PropTypes from "prop-types";
// import { graphql, StaticQuery } from "gatsby";
// import UpcomingRollItem from "./UpcomingRollItem";
// import "./upcoming.css";

// class UpcomingRollTemplate extends React.Component {
//   render() {
//     const { data } = this.props;
//     const { edges: posts } = data.allMarkdownRemark;

//     return (
//       <div className="columns is-multiline" style={{ position: "relative", zIndex: '15' }}>
//         {posts &&
//           posts.map(({ node: post }) => (
//             <UpcomingRollItem key={post.id} {...post} />
//           ))}
//       </div>
//     );
//   }
// }

// UpcomingRoll.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// };

// export default function UpcomingRoll() {
//   return (
//     <StaticQuery
//       query={graphql`
//         query UpcomingRollQuery {
//           allMarkdownRemark(
//             sort: { order: DESC, fields: [frontmatter___date] }
//             filter: { frontmatter: { templateKey: { eq: "upcoming-event" } } }
//           ) {
//             edges {
//               node {
//                 excerpt(pruneLength: 400)
//                 id
//                 fields {
//                   slug
//                 }
//                 frontmatter {
//                   title
//                   description
//                   templateKey
//                   date(formatString: "MMMM DD, YYYY")
//                   featuredpost
//                   featuredimage {
//                     childImageSharp {
//                       gatsbyImageData(
//                         height: 500
//                         quality: 100
//                         layout: CONSTRAINED
//                       )
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={(data, count) => (
//         <UpcomingRollTemplate data={data} count={count} />
//       )}
//     />
//   );
// }
