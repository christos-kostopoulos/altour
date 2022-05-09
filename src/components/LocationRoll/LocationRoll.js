// import React from "react";
// import PropTypes from "prop-types";
// import { graphql, StaticQuery } from "gatsby";
// import LocationRollItem from "./LocationRollItem";
// import Slider from "react-slick";
// import "./locationRoll.css";

// class LocationRollTemplate extends React.Component {
//   render() {
//     const { data } = this.props;
//     const { edges: posts } = data.allMarkdownRemark;
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//       <div >
//         {posts && (
//           <Slider {...settings}>
//             {posts.map(({ node: post }) => (
//               <LocationRollItem key={post.id} {...post} />
//             ))}
//           </Slider>
//         )}
//       </div>
//     );
//   }
// }

// LocationRoll.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// };

// export default function LocationRoll() {
//   return (
//     <StaticQuery
//       query={graphql`
//         query LocationRollQuery {
//           allMarkdownRemark(
//             sort: { order: DESC, fields: [frontmatter___date] }
//             filter: { frontmatter: { templateKey: { eq: "location" } } }
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
//                   templateKey
//                   date(formatString: "MMMM DD, YYYY")
//                   featuredpost
//                   featuredimage {
//                     childImageSharp {
//                       gatsbyImageData(quality: 100, layout: CONSTRAINED)
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={(data, count) => <LocationRollTemplate data={data} count={count} />}
//     />
//   );
// }
