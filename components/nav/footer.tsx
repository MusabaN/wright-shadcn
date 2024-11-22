export default function Footer() {

  return (
    <footer className="bg-blue-200 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold">Om trafikkskolen</h3>
          <p><a href="#" className="text-blue-900">Kontakt oss</a></p>
          <p><a href="#" className="text-blue-900">Åpningstider</a></p>
          <p><a href="#" className="text-blue-900">Om oss</a></p>
        </div>
        <div>
          <h3 className="font-semibold">Om nettstedet</h3>
          <p><a href="#" className="text-blue-900">Vilkår</a></p>
          <p><a href="#" className="text-blue-900">Personvern og informasjonskapsler</a></p>
        </div>
        <div>
          <h3 className="font-semibold">Kontakt</h3>
          <p>Avsenderen</p>
          <p>Org.nr: 999 888 777</p>
          <p><a href="#" className="text-blue-900">Kontakt oss på epost</a></p>
          <p><a href="#" className="text-blue-900">Ring oss</a></p>
        </div>
      </div>
    </footer>
  )
}
