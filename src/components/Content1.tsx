const Content1 = () => {
	return (
		<section className="pt-32">
			<div className="container max-w-7xl">
				<div className="relative grid-cols-3 gap-20 lg:grid">
					<div className="lg:col-span-2">
						<div>
							<h1 className="mt-3 text-3xl font-extrabold">Impressum</h1>
							<p className="text-muted-foreground mt-2 text-lg">
								Angaben gemäß § 5 TMG und Informationspflichten nach E-Commerce Gesetz (ECG)
							</p>
						</div>

						<section id="section2" className="prose dark:prose-invert my-8">
							<h2>Verantwortlich für den Inhalt</h2>
							<p>
								<strong>Wattkostet.at</strong>
								<br />
								Yassin Ugarčina e.U.
								<br />
								Unabhängiger Energieberater
								<br />
								Franz Prendingerstraße 37
								<br />
								2540 Bad Vöslau
								<br />
								Österreich
							</p>

							<h2>Kontakt</h2>
							<p>
								<strong>E-Mail:</strong>{" "}
								<a href="mailto:anfrage@wattkostet.at" className="text-primary hover:underline">
									anfrage@wattkostet.at
								</a>
								<br />
								<strong>Telefon:</strong>{" "}
								<a href="tel:+436769128040" className="text-primary hover:underline">
									+43 676 912 8040
								</a>
							</p>

							<h2>Haftungsausschluss</h2>
							<h3>Haftung für Inhalte</h3>
							<p>
								Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
								Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
								oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
							</p>

							<h3>Haftung für Links</h3>
							<p>
								Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
								Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten 
								ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
							</p>

							<h3>Urheberrecht</h3>
							<p>
								Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. 
								Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
								der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
							</p>

							<h2>Datenschutz</h2>
							<p>
								Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. 
								Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, 
								erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
							</p>
							<p>
								Weitere Informationen finden Sie in unserer{" "}
								<a href="/privacy" className="text-primary hover:underline">
									Datenschutzerklärung
								</a>
								.
							</p>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Content1 };
