import { Button } from '@/components/ui/button';

interface Hero3Props {
	heading?: string;
	description?: string;
	buttons?: {
		primary?: {
			text: string;
			url: string;
		};
	};
}

const Hero3 = ({
	heading = 'Kud Jovan Jovanović Zmaj',
	description = 'KUD Jovan Jovanovic Zmaj ist ein kultureller Verein, der sich den traditionellen serbischen Bräuchen und der Förderung der serbischen Kultur widmet.',
	buttons = {
		primary: {
			text: 'Mehr erfahren',
			url: 'https://www.shadcnblocks.com',
		},
	},
}: Hero3Props) => {
	return (
		<section className="py-16 bg-[#fff8ee]">
			<div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
				<div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
					<h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
						{heading}
					</h1>
					<p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
						{description}
					</p>

					<div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
						{buttons.primary && (
							<Button asChild className="w-full sm:w-auto">
								<a href={buttons.primary.url}>{buttons.primary.text}</a>
							</Button>
						)}
					</div>
				</div>
				<div className="flex">
					<img
						src="/hero.png"
						alt="placeholder hero"
						className="max-h-[600px]  rounded-md object-cover lg:max-h-[800px] w-3/4"
					/>
				</div>
			</div>
		</section>
	);
};

export { Hero3 };
