import EmailForm from "../../components/admin/EmailForm";
import PasswordForm from "../../components/admin/PasswordForm";
import Header from "../../components/admin/header";
import { useState } from "react";



const Signup = () => {

  const [step, setStep] = useState<number>(1)

  const progress = () => {
    setStep(prev => prev + 1)
  }
  return (
    <>
    <Header />
 
      <main className="h-screen flex justify-center items-center">

        {step === 1 && <EmailForm progress={progress}/> }
        {step === 2 && <PasswordForm/>}

      </main>
    </>
  );
};

export default Signup;
