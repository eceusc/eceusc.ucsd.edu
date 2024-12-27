import React from "react";
import Navbar from "@/components/navbar";
// import Footer from "@/components/footer"; Do we need a footer?
import Link from "next/link";
import { CredentialsFormDark } from "@/components/credentialsFormDark";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  const session = await getServerSession(authConfig);
  if (session) return redirect("/dashboard");

  const styles = {
    pageBackground: {
      width: "100vw",
      height: "100vh",
      // Full-page image or color
      backgroundImage: 'url("/images/signupPage1.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    overlayBackground: {
      width: "1366px",
      height: "768px",
      backgroundColor: "rgba(255, 255, 255, 0.2)", // more transparent
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    signupCard: {
      width: "400px",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // less transparent
      borderRadius: "15px",
      padding: "2rem",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      fontSize: "2rem",
      color: "white",
      marginBottom: "20px",
      textAlign: "center",
    },
    textCenter: {
      textAlign: "center",
	  color: "white",
      marginTop: "20px",
    },
  };

  return (
    <>
      {/* Render the navbar with only the logo (remove later if we want full navbar?) */}
      <Navbar onlyLogoLight />

      {/* Layer 1: Full-page background */}
      <div style={styles.pageBackground}>

        {/* Layer 2: 1366 x 768 background box */}
        <div style={styles.overlayBackground}>

          {/* Layer 3: The signup card */}
          <div style={styles.signupCard}>
            <h1 style={styles.heading}>Welcome!</h1>

            {/* Credentials form (Email/Password) */}
            <CredentialsFormDark 
         
            buttonText="Sign up" />

            <div style={styles.textCenter}>
              <span>
                Already have an account?{" "}
                <Link href="/login" className="text-blue-500">
                  Log in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
