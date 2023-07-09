import "./map.css"
import { Text, Image, Container } from "@chakra-ui/react";
export default function Map() {
    return (
      <div
        style={{
          columnCount: 2,
          position: "relative",
          marginLeft: 20,
          flex: 1,
          paddingBottom: "10%", /* 16:9 */
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.7673981746334!2d75.6588302!3d16.1809411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7798ad76319fb%3A0x745f940740957224!2sNataraj%20sangeeta%20nritya%20niketana.!5e0!3m2!1sen!2sin!4v1686320090368!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
        <Container maxW="container.lg" centerContent mt="10vh" flex={3} >
        <Text fontSize="2xl" textAlign="left" mt="5vh">
            Call Us at: <a href="tel:944800000">944800000</a> <br />
            Email us at: <a href="mailto:NatarajInstitute@gmail.com">NatarajInstitute@gmail.com</a> <br />
            <b>Nataraja Sangeeta Nritya Niketana </b> <br />
            9th Main Rd, <br />
            Vidyagiri, Bagalkote, <br />
            Karnataka 587102
         </Text>
    </Container>
      </div>
    );
  }