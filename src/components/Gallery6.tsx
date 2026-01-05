'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

interface GalleryItem {
	id: string;
	image: string;
}

interface Gallery6Props {
	heading?: string;
	demoUrl?: string;
	items?: GalleryItem[];
}

const Gallery6 = ({
	heading = 'Gallery',
	items = [
		{
			id: 'item-1',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
		},
		{
			id: 'item-2',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
		},
		{
			id: 'item-3',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
		},
		{
			id: 'item-4',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
		},
		{
			id: 'item-5',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
		},
	],
}: Gallery6Props) => {
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);
	useEffect(() => {
		if (!carouselApi) {
			return;
		}
		const updateSelection = () => {
			setCanScrollPrev(carouselApi.canScrollPrev());
			setCanScrollNext(carouselApi.canScrollNext());
		};
		updateSelection();
		carouselApi.on('select', updateSelection);
		return () => {
			carouselApi.off('select', updateSelection);
		};
	}, [carouselApi]);
	return (
		<section className="py-32 bg-[#faedda]">
			<div className="container">
				<div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
					<div>
						<h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
							{heading}
						</h2>
					</div>
					<div className="mt-8 flex shrink-0 items-center justify-start gap-2">
						<Button
							size="icon"
							onClick={() => {
								carouselApi?.scrollPrev();
							}}
							disabled={!canScrollPrev}
							className="disabled:pointer-events-auto"
						>
							<ArrowLeft className="size-5" />
						</Button>
						<Button
							size="icon"
							onClick={() => {
								carouselApi?.scrollNext();
							}}
							disabled={!canScrollNext}
							className="disabled:pointer-events-auto"
						>
							<ArrowRight className="size-5" />
						</Button>
					</div>
				</div>
			</div>
			<div className="w-full max-w-full">
				<Carousel
					setApi={setCarouselApi}
					opts={{
						breakpoints: {
							'(max-width: 768px)': {
								dragFree: true,
							},
						},
					}}
					className="relative w-full max-w-full md:left-[-1rem]"
				>
					<CarouselContent className="hide-scrollbar w-full max-w-full md:-mr-4 md:ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
						{items.map((item) => (
							<CarouselItem key={item.id} className="ml-8 md:max-w-[452px]">
								<div className="group flex flex-col justify-between">
									<div>
										<div className="aspect-3/2 flex overflow-clip rounded-xl">
											<div className="flex-1">
												<div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
													<img
														src={item.image}
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};

export { Gallery6 };
