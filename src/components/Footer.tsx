import Typography from "./ui/Typography";

export default function Footer() {
	return (
		<div className="relative w-full h-40 flex flex-col items-center justify-between py-2 bg-[#111111] z-2">
			<div></div>
			<div className="relative w-full flex items-center justify-center">
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
