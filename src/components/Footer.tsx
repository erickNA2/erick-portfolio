import Typography from "./ui/Typography";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="relative w-full h-36 flex flex-col items-center justify-between py-2 bg-[#111111] z-2">
			<div className="relative w-full h-2/3 flex items-center justify-center space-x-10">
				<Link
					href={"https://www.linkedin.com/in/erick-nunes-a243742b1"}
					target="_blank"
					className="hover:scale-120 transition-all duration-200 ease-in"
				>
					<FaLinkedin
						size={24}
						color="white"
					></FaLinkedin>
				</Link>
				<Link
					href={"https://www.instagram.com/ericknunesdev/"}
					target="_blank"
					className="hover:scale-120 transition-all duration-200 ease-in"
				>
					<FaInstagram size={24} color="white"></FaInstagram>
				</Link>
				<Link
					href={"https://github.com/erickNA2"}
					target="_blank"
					className="hover:scale-120 transition-all duration-200 ease-in"
				>
					<FaGithub size={24} color="white"></FaGithub>
				</Link>
			</div>
			<div className="relative w-full h-1/3 flex items-center justify-center">
				<Typography
					variant="caption"
					className={"opacity-50 text-white"}
				>
					Codigo e Design por Erick Nunes ©2025 - Todos Direitos
					Reservados
				</Typography>
			</div>
		</div>
	);
}
