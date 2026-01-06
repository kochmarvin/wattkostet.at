const Content2 = () => {
	return (
		<section className="pt-32">
			<div className="container max-w-7xl">
				<div className="relative grid-cols-3 gap-20 lg:grid">
					<div className="lg:col-span-2">
						<div>
							<h1 className="mt-3 text-3xl font-extrabold">
								Datenschutzerklärung
							</h1>
							<p className="text-muted-foreground mt-2 text-lg">
								Erfahren Sie, wie wir Ihre persönlichen Daten schützen und
								verwenden. Ihre Privatsphäre ist uns wichtig.
							</p>
						</div>

						<section id="section2" className="prose dark:prose-invert my-8">
							<h2>Verwendung von Google Fonts</h2>
							<p>
								Unsere Website verwendet Google Fonts, einen Dienst von Google
								LLC, um Schriftarten korrekt darzustellen. Beim Laden der Google
								Fonts werden Daten wie Ihre IP-Adresse und Informationen über
								den Browser an Google-Server übermittelt. Diese Daten können in
								die USA übertragen werden, wo Google seinen Sitz hat. Google
								verwendet diese Daten, um die Schriftarten bereitzustellen und
								zu verbessern. Google Fonts verwendet keine Cookies. Für weitere
								Informationen zum Datenschutz bei Google besuchen Sie bitte die{' '}
								<a href="https://policies.google.com/privacy" target="_blank">
									Google Datenschutzrichtlinie
								</a>

							</p>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Content2 };
