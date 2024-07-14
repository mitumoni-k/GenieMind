// We used Shadcn-UI because this CSS framework provides the code of the icons added as well, which we can manipulate according to our own wants.
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <Button variant="ghost">You're on the Landing Page</Button>
      <div>
        <Link href="/sign-in">
        <Button>
            Login
        </Button>
        </Link>
        <Link href="/sign-up">
        <Button>
            Register
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
