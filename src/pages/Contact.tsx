import { contactContent } from '../mock/pages'

export default function Contact() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">{contactContent.title}</h1>
      <div className="space-y-1 text-gray-700">
        <p>Email: <a className="text-blue-600 hover:underline" href={`mailto:${contactContent.email}`}>{contactContent.email}</a></p>
        <p>Phone: {contactContent.phone}</p>
      </div>
    </section>
  )
}


