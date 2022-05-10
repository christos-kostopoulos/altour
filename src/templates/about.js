import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import watermark from "../img/watermark-about.svg";

import ReactMarkdown from "react-markdown";
import FullWidthImage from "../components/FullWidthImage";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/Navbar";
// eslint-disable-next-line
export const AboutPageTemplate = ({ image, intro }) => {
  const heroImage = getImage(image) || image;
  const rightImage = getImage(intro.image) || intro.image;


  return (
    <div className="content">
      <FullWidthImage img={heroImage} />
      <section className="section section--gradient arrow-section-white">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <h2
                style={{ fontSize: "3.2rem" }}
                className="title  has-text-weight-light is-bold-light"
              >
                {intro.heading}
              </h2>
              <ReactMarkdown>{intro.body}</ReactMarkdown>
            </div>
            <div className="column is-4">
              <GatsbyImage
                image={rightImage}
                alt="right image"
                style={{ height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="has-background-primary p-5 arrow-section-primary">
        <div className="container">
          <h3 className="has-text-weight-semibold is-size-2 has-text-white mt-5">
            Υπουργείο Τουρισμού Ελλάδος
          </h3>
          <div className="columns pt-2 pb-5">
            <div className="column is-6">
              <StaticImage
                src="../img/about_middle.jpg"
                alt="A kitten"
                placeholder="blurred"
              />
            </div>
            <div className="column is-6">
              <p className="has-text-weight-semibold has-text-white">
                Το Υπουργείο Τουρισμού ανασυστάθηκε σύμφωνα με τις διατάξεις του
                π.δ. 123/2016 (A’ 208). Αποστολή του Υπουργείου σύμφωνα με το
                π.δ. 127/2017 «Οργανισμός Υπουργείου Τουρισμού» (Α’ 157), όπως
                ισχύει, είναι:
              </p>
              <p className="has-text-weight-semibold has-text-white">
                α. Ο προγραμματισμός και η χάραξη της τουριστικής πολιτικής, ο
                σχεδιασμός της τουριστικής ανάπτυξης στο πλαίσιο της γενικότερης
                κυβερνητικής πολιτικής και η διαμόρφωση και προώθηση των
                αναγκαίων θεσμικών και λοιπών ρυθμίσεων.
              </p>
              <p className="has-text-weight-semibold has-text-white">
                β. Η συνεργασία με τα συναρμόδια Υπουργεία για την εναρμόνιση
                των πολιτικών που επηρεάζουν τον τουρισμό και το συντονισμό των
                δράσεων με σκοπό την υποβοήθηση της τουριστικής ανάπτυξης, την
                διαμόρφωση ασφαλούς περιβάλλοντος για ανάληψη επενδυτικών
                πρωτοβουλιών στον κλάδο και τη βελτίωση της ποιότητας και της
                ανταγωνιστικότητας του τουρισμού της χώρας.
              </p>
              <p className="has-text-weight-semibold has-text-white">
                γ. Η εκπροσώπηση της χώρας στους διεθνείς οργανισμούς και στις
                διακρατικές σχέσεις που αφορούν στον τουρισμό και η σύναψη
                διεθνών συμβάσεων που αναφέρονται στον τουριστικό τομέα και
                διμερών συμφωνιών τουριστικής συνεργασίας.
              </p>
              <p className="has-text-weight-semibold has-text-white">
                δ. Η αναβάθμιση των παρεχόμενων τουριστικών υπηρεσιών μέσα από
                την υλοποίηση προγραμμάτων εκπαίδευσης και κατάρτισης
              </p>
              <p className="has-text-weight-semibold has-text-white">
                Το Υπουργείο Τουρισμού συμμετέχει στο έργο ALTTOUR του
                Προγράμματoς Interreg IPA CBC Ελλάδα-Αλβανία 2014-2020 ως
                δικαιούχος.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <h3 className="has-text-weight-semibold has-text-centered is-size-2 pt-5">
            Σύνδεσμος Δήμων Ιαματικών Πηγών Ελλάδας
          </h3>
          <p>
            Ο Σύνδεσμος Δήμων Ιαματικών Πηγών Ελλάδας ιδρύθηκε το 1983 με έδρα
            τα Καμένα Βούρλα, ενώ το 1985 μεταφέρεται στη Θεσσαλονίκη όπου και
            παραμένει μέχρι σήμερα. Το 1989 μετατρέπεται σε Αναπτυξιακό Σύνδεσμο
            δυνάμει των σχετικών διατάξεων του Ν.1416/84, ενώ το 1993
            παρατείνεται η διάρκεια του κατά πενήντα χρόνια και διευρύνονται οι
            καταστατικοί του σκοποί, οι οποίοι είναι: α) η ανάπτυξη και διάδοση
            του θερμαλισμού και των εφαρμογών του, β) η δημιουργία κέντρων
            θερμαλιστικών σπουδών, γ) η προώθηση της επιστημονικής έρευνας για
            την προστασία – αξιοποίηση και διαχείριση των γεωθερμικών πόρων της
            χώρας καθώς και σύγχρονου νομοθετικού πλαισίου, δ) η παροχή
            επιστημονικής και νομικής κάλυψης σε θέματα θερμαλισμού και
            γεωθερμίας στα μέλη του ΣΔΙΠΕ, ε) η διοργάνωση ημερίδων ανάπτυξης
            και συνδιασκέψεων για το θερμαλισμό, στ) η προώθηση και προβολή των
            στόχων του ΣΔΙΠΕ και του Ιαματικού Τουρισμού και ζ) η δημιουργία
            παραρτημάτων θερμαλισμού στις περιφέρειες της χώρας.
          </p>
          <p>
            Σήμερα ο ΣΔΙΠΕ αριθμεί 53 δήμους – μέλη με γεωγραφική διασπορά στις
            11 από τις 13 περιφέρειες της χώρας. Ο ΣΔΙΠΕ διοικείται από το
            Διοικητικό Συμβούλιο του που απαρτίζεται από 74 μέλη και από την
            Εκτελεστική του Επιτροπή η οποία εκλέγεται από το Διοικητικό
            Συμβούλιο, ενώ η θητεία των μελών των οργάνων του ακολουθεί την
            εκάστοτε δημοτική περίοδο. Ο Σύνδεσμος συγκροτείται από μέλη
            πρωτοβάθμιας Αυτοδιοίκησης - Δήμους - στα διοικητικά όρια των οποίων
            υπάρχουν αναγνωρισμένοι ιαματικοί φυσικοί πόροι. Ως φορέας ανέλαβε
            την πρωτοβουλία να ανταποκριθεί στα καθήκοντα και τις προκλήσεις που
            υπαγορεύουν οι ανθρώπινες ανάγκες για τη φροντίδα της υγείας με τη
            χρήση ιαματικών φυσικών πόρων.
          </p>
          <p>
            Οι κάθε είδους υδροθεραπευτικές εγκαταστάσεις σε ένα θερμαλιστικό
            περιβάλλον αποτελούν για το Σύνδεσμο μονάδες πρωτοβάθμιας φροντίδας
            της ανθρώπινης υγείας. Οι μονάδες αυτές επηρεάζουν το πολιτισμικό
            περιβάλλον της περιοχής, αποτελούν κλειδί για την οικονομία και την
            ανάπτυξη των τοπικών κοινωνιών, συνδέονται με την τοπική ιστορία και
            τις παραδόσεις, θέτουν σε κίνηση πολυάριθμες δραστηριότητες και
            αναδεικνύουν την ιδιαιτερότητα της φυσιογνωμίας του θερμαλιστικού
            περιβάλλοντος. Ο Σύνδεσμος από τη σύστασή του μέχρι τώρα, στέκεται
            αρωγός κάθε αναπτυξιακής πρωτοβουλίας των μελών του στους τομείς του
            Ιαματικού Τουρισμού - Τουρισμού Υγείας και ενεργειακής χρήσης των
            θερμών νερών.
          </p>
          <div className="columns mb-5" style={{ position: "relative" }}>
            <div className="column is-10">
              <h1 className="has-text-right has-text-weight-light ">
                Στόχοι Συνδέσμου
              </h1>
              <ul className="mt-5">
                <li className="mb-4">
                  Η ανάδειξη, προβολή και προστασία των ιαματικών φυσικών πόρων
                  της χώρας μας και του περιβάλλοντός τους.
                </li>
                <li className="mb-4">
                  Η ανάδειξη και προβολή στην Ελλάδα και το εξωτερικό, των
                  ιαματικών θερμαλιστικών κέντρων, κάθε μορφή υδροθεραπευτικής
                  αγωγής, πρόληψης και ευεξίας καθώς και όλων των στοιχείων και
                  έργων τέχνης , ιστορίας και πολιτισμού, που συνδέονται με τις
                  ιαματικές πηγές, την υδροθεραπεία – κλιματοθεραπεία, τη
                  θαλασσοθεραπεία και πηλοθεραπεία.
                </li>
                <li className="mb-4">
                  Η υποστήριξη όλων των μορφών θεραπευτικής αγωγής, πρόληψης και
                  ευεξίας με χρήση ιαματικών φυσικών πόρων καθώς επίσης και κάθε
                  μορφή θαλασσοθεραπείας, κλιματοθεραπείας, σπηλαιοθεραπείας,
                  που πραγματοποιούνται και στοχεύουν στην φροντίδα της
                  ανθρώπινης σωματικής και ψυχικής υγείας.
                </li>
                <li className="mb-4">
                  Η καθιέρωση, ανάδειξη και προβολή της διαφορετικότητας των
                  θερμαλιστικών θεραπευτικών τόπων της χώρας καθώς και η
                  υποστήριξη και προώθηση κάθε εναλλακτικής μορφής τουρισμού
                  (θρησκευτικού, συνεδριακού, φυσιολατρικού κ.ά.) στις περιοχές
                  των ιαματικών φυσικών πόρων και θερμαλιστικών κέντρων.
                </li>
                <li className="mb-4">
                  Η επιστημονική έρευνα και μελέτη των υδρογεωλογικών, χημικών,
                  βιολογικών και περιβαλλοντολογικών χαρακτηριστικών των
                  ιαματικών φυσικών πόρων, των τοπικών ιστορικών, πολιτιστικών
                  στοιχείων που συνδέονται με τη χρήση των ιαματικών πηγών καθώς
                  και η στατιστική αξιολόγηση των αποτελεσμάτων των
                  θερμαλιστικών θεραπειών.
                </li>
                <li>
                  Η επιστημονική έρευνα, τεκμηρίωση και αξιολόγηση των
                  αποτελεσμάτων των θεραπευτικών ενδείξεων-αντενδείξεων των
                  ιαματικών φυσικών πόρων, του περιβάλλοντος και των κλιματικών
                  συνθηκών των θερμαλιστικών θεραπευτικών τόπων. Η διενέργεια
                  ημερίδων, επιμορφωτικών σεμιναρίων, συνεδρίων, επιστημονικών
                  συναντήσεων που αφορούν στη βιώσιμη ανάπτυξη του θερμαλισμού,
                  την αειφόρο διαχείριση των ιαματικών φυσικών πόρων και του
                  περιβάλλοντος και κάθε άλλης ενέργειας ή δράσης που αφορά στο
                  αντικείμενο.
                </li>
              </ul>
            </div>
            <img
              src={watermark}
              alt="about-us"
              style={{ position: "absolute", right: "0px", width: "50%" }}
            />
          </div>
        </div>
      </section>
      <section className="has-background-primary mt-5 pb-5 pt-5">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <h3 className="has-text-weight-semibold is-size-2 has-text-white mt-5">
                Sustainable Environment Albania (SEA)
              </h3>
              <p className="has-text-white">
                Ο «Sustainable Environment Albania» είναι ένας ανεξάρτητος μη
                κερδοσκοπικός Οργανισμός που έχει σαν στόχο να αλλάξει την
                γενική αντίληψη και επίγνωση απέναντι στην προστασία του
                περιβάλλοντος μέσω απτών δράσεων. Ο Οργανισμός ιδρύθηκε το 2014
                και οι δραστηριότητές του εκτείνονται σε ποικίλα κι ευαίσθητα
                περιβαλλοντικά ζητήματα όπως: ανακύκλωση, «πράσινη ζωή»,
                προστασία του νερού, προώθηση του τουρισμού και της πολιτιστικής
                κληρονομιάς, περιβαλλοντική εκπαίδευση, εθελοντισμό κ.α.
              </p>
              <p className="has-text-white">
                Ο Οργανισμός «Sustainable Environment Albania» έχει συμμετάσχει
                σε πληθώρα συγχρηματοδοτούμενων έργων της ΕΕ σαν εξωτερικός
                σύμβουλος και σαν εταίρος παρέχοντας την επιστημονική και
                κοινωνική του συνεισφορά. Η συμβολή του εκτείνεται σε εθνικά και
                διεθνή έργα στον τομέα του περιβάλλοντος, της εκπαίδευσης και
                του εθελοντισμού.
              </p>
              <p className="has-text-white pb-5">
                Το όραμα του Οργανισμού συνίσταται στην εύρεση λύσεων και στην
                ανάπτυξη μακροπρόθεσμων συνεργειών με άλλους οργανισμούς ή άτομα
                που μοιράζονται, χωρίς συμβιβασμούς, κοινούς στόχους για μια πιο
                οικολογική προσέγγιση απέναντι στον πλανήτη.
              </p>
            </div>
            <div className="column is-4">
              <StaticImage
                className="image-full-height"
                src="../img/bg-2.jpg"
                alt="A background"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

const AboutPage = ({ data }) => {
  const { frontmatter: content } = data.content;
 
  return (
    <Layout>
      <Navbar lang={content.language} slug={data.page.fields.slug} />
      <AboutPageTemplate image={content.image} intro={content.intro} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!, $language: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
    }
    content: markdownRemark(
      frontmatter: {
        type: { eq: 1 }
        templateKey: { eq: "templates/about" }
        language: { eq: $language }
      }
    ) {
      frontmatter {
        language
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        intro {
          heading
          body
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
