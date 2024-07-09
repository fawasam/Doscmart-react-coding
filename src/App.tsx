// import { BrowserRouter  as Router , Route,Routes} from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}



