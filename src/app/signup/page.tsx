import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import { CredentialsForm } from "@/components/credentialsForm";
import { GoogleSignInButton } from "@/components/authButtons";
import Link from "next/link";

export default function LogoutPage() {
	return (
		<>
			<Navbar pageLocation="Login" hideInitialNav={false} />
			<Background>
				<div className="grid grid-rows-1 m-auto sm:w-2/3 md:w-1/2 lg:w-1/3">
					<div className="w-full bg-zinc-800 mt-20 sm:m-0 p-10 text-white rounded-t-md">
						<div className="text-center py-4">
							<span className="text-5xl">Welcome</span>
						</div>
						<GoogleSignInButton />
					</div>
					<div className="w-full bg-zinc-700 p-10 pt-0 text-white rounded-b-md">
						<div className="inline-flex items-center justify-center w-full">
							<hr className="w-full md:w-24 lg:w-32 h-px bg-gray-200 border-0" />
							<span className="px-3 font-medium">or</span>
							<hr className="w-full md:w-24 lg:w-32 h-px bg-gray-200 border-0" />
						</div>
						<CredentialsForm buttonText="Sign up" />
						<div className="text-center p-4">
							<span>
								Already have an account?{" "}
								<Link href="/login" className="text-blue-500">
									Log in
								</Link>{" "}
							</span>
						</div>
					</div>
				</div>
			</Background>
			<Footer />
		</>
	);
}
