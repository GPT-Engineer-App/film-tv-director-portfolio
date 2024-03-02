import React from "react";
import { Box, Container, Flex, Heading, Text, Image, SimpleGrid, VStack, HStack, Input, Textarea, Button, Link, Spacer } from "@chakra-ui/react";
import { FaEnvelope, FaFilm, FaTv, FaBlog, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <MainContent />
        <Footer />
      </Flex>
    </Container>
  );
};

const Header = () => (
  <Box as="header" width="full" p={4} bg="blackAlpha.700">
    <Flex justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="lg" color="white">
        John Doe Films
      </Heading>
      <HStack spacing={4}>
        <NavLink icon={FaFilm}>Films</NavLink>
        <NavLink icon={FaTv}>TV Shows</NavLink>
        <NavLink icon={FaBlog}>Blog</NavLink>
        <NavLink icon={FaEnvelope}>Contact</NavLink>
      </HStack>
    </Flex>
  </Box>
);

const MainContent = () => (
  <Flex direction="column" flex="1" p={4}>
    <AboutSection />
    <PortfolioSection />
    <BlogSection />
    <ContactSection />
  </Flex>
);

const AboutSection = () => (
  <VStack as="section" spacing={4} mt={10} alignItems="flex-start">
    <Heading as="h2" size="xl" color="gray.800">
      About
    </Heading>
    <Text fontSize="lg" color="gray.600">
      John Doe is an award-winning film and TV director known for his visual storytelling and innovative cinematography. With over a decade of experience in the industry, John has directed a variety of critically acclaimed projects.
    </Text>
    <Image src="https://images.unsplash.com/photo-1603218734550-be7fcffeb817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3J8ZW58MHx8fHwxNzA5MzcxMzE1fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
  </VStack>
);

const PortfolioSection = () => (
  <Box as="section" my={10}>
    <Heading as="h2" size="xl" mb={6} color="gray.800">
      Portfolio
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      <PortfolioItem title="Project Title 1" />
      <PortfolioItem title="Project Title 2" />
      <PortfolioItem title="Project Title 3" />
      {/* Add more PortfolioItem components as needed */}
    </SimpleGrid>
  </Box>
);

const PortfolioItem = ({ title }) => (
  <Box bg="gray.700" color="white" borderRadius="md" overflow="hidden">
    <Image src="https://images.unsplash.com/photo-1691120040367-4ddbdf418b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBzY2VuZXxlbnwwfHx8fDE3MDkzNzEzMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" height={200} width="full" />
    <Box p={4}>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text mt={2}>A brief description of the project goes here.</Text>
    </Box>
  </Box>
);

const BlogSection = () => (
  <Box as="section" my={10}>
    <Heading as="h2" size="xl" mb={6} color="gray.800">
      Latest Updates
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      <BlogPost title="Blog Post 1" />
      <BlogPost title="Blog Post 2" />
      <BlogPost title="Blog Post 3" />
      {/* Add more BlogPost components as needed */}
    </SimpleGrid>
  </Box>
);

const BlogPost = ({ title }) => (
  <Box bg="gray.700" color="white" borderRadius="md" overflow="hidden">
    <Image src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBibG9nJTIwcG9zdHxlbnwwfHx8fDE3MDkzNzEzMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" height={200} width="full" />
    <Box p={4}>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text mt={2}>An excerpt from the latest blog post...</Text>
    </Box>
  </Box>
);

const ContactSection = () => (
  <VStack as="section" spacing={4} my={10} alignItems="flex-start">
    <Heading as="h2" size="xl" color="gray.800">
      Contact
    </Heading>
    <Text fontSize="lg" color="gray.600">
      For inquiries or to discuss a project, please use the form below to get in touch.
    </Text>
    <Box as="form" width="full" mt={4}>
      <VStack spacing={4}>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
          Send Message
        </Button>
      </VStack>
    </Box>
  </VStack>
);

const Footer = () => (
  <Box as="footer" width="full" p={4} bg="blackAlpha.700" color="white">
    <Flex justifyContent="space-between" alignItems="center">
      <Text>&copy; {new Date().getFullYear()} John Doe Films. All Rights Reserved.</Text>
      <HStack spacing={4}>
        <SocialIcon icon={FaInstagram} />
        <SocialIcon icon={FaTwitter} />
        <SocialIcon icon={FaFacebookF} />
        <SocialIcon icon={FaLinkedinIn} />
      </HStack>
    </Flex>
  </Box>
);

const NavLink = ({ icon, children }) => (
  <Link fontSize="lg" color="white" _hover={{ textDecoration: "none", color: "gray.300" }}>
    {React.createElement(icon, { mr: 2 })}
    {children}
  </Link>
);

const SocialIcon = ({ icon }) => (
  <Link fontSize="lg" color="white" _hover={{ color: "gray.300" }}>
    {React.createElement(icon, { size: "1.5em" })}
  </Link>
);

export default Index;
