const Content1 = () => {
	return (
		<section className="py-32 bg-[#fff8ee]">
			<div className="container max-w-7xl">
				<div className="relative grid-cols-3 gap-20 lg:grid">
					<div className="lg:col-span-2">
						<div>
							<h1 className="mt-3 text-3xl font-extrabold">Impressum</h1>
							<p className="text-muted-foreground mt-2 text-lg">
								Verantwortliche Informationen und rechtliche Hinweise zu unserem
								Unternehmen. Erfahren Sie mehr über unsere Kontaktdaten und
								rechtliche Angaben.
							</p>
						</div>

						<section id="section2" className="prose dark:prose-invert my-8">
							<h2>Folgt</h2>
							<p>-</p>

							<p>-</p>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Content1 };
