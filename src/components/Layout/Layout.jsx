import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import { Container } from "./Layout.styled.jsx";

export default function Layout({ children }) {
  return (
    <Container>
      <AppBar />
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}