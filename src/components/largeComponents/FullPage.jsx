import Header from "./Header";
import Main from "./Main";
import { LangProvider } from "../LangProvider";
import Footer from "./Footer";

function FullPage() {

  return (
    <>
        <LangProvider>
          <Header />
          <Main />
          <Footer />
        </LangProvider>
    </>
  )
}

export default FullPage