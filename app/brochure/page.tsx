import PdfViewer from "@/components/organism/pdf-viewer";

export default function BrochurePage() {
  return (
    <main className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <PdfViewer file="/pdf/brochure-fenica.pdf" />
      </div>
    </main>
  )
}
