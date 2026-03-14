'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

type PdfViewerProps = {
  file: string
}

export default function PdfViewer({ file }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.2)

  function onDocumentLoadSuccess({
    numPages,
  }: {
    numPages: number
  }) {
    setNumPages(numPages)
  }

  return (
    <div className="grid lg:grid-cols-[180px_1fr] gap-6">

      <aside className="hidden lg:block h-[85vh] overflow-y-auto border rounded-2xl p-3 bg-slate-50">
        {Array.from(new Array(numPages), (_, index) => (
          <button
            key={index}
            onClick={() => setPageNumber(index + 1)}
            className={`mb-4 border rounded-lg overflow-hidden ${
              pageNumber === index + 1 ? 'ring-2 ring-[#c98266]' : ''
            }`}
          >
            <Page
              pageNumber={index + 1}
              width={140}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </button>
        ))}
      </aside>

      <section className="space-y-4">

        <div className="flex flex-wrap gap-3 justify-between items-center">

          <div className="flex gap-2">
            <button
              onClick={() => setScale((s) => Math.max(0.8, s - 0.2))}
              className="px-4 py-2 rounded-lg border"
            >
              -
            </button>

            <button
              onClick={() => setScale((s) => s + 0.2)}
              className="px-4 py-2 rounded-lg border"
            >
              +
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber((p) => p - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Prev
            </button>

            <span>
              {pageNumber} / {numPages}
            </span>

            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber((p) => p + 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Next
            </button>
          </div>

          <a
            href={file}
            download
            className="px-4 py-2 rounded-lg bg-[#c98266] text-white"
          >
            Download PDF
          </a>
        </div>

        <div className="border rounded-2xl shadow-xl overflow-auto flex justify-center bg-white p-4">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Đang tải PDF..."
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
            />
          </Document>
        </div>

      </section>
    </div>
  )
}
