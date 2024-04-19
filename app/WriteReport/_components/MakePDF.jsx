'use client'
import { PDFDocument } from 'pdf-lib'
import React from 'react'
const MakePDF = () => {
  const [name, setName] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const pdfDoc = await PDFDocument.load(await fetch('pdf-template.pdf'))
    const page = pdfDoc.getPages()[0]

    const { width, height } = page.getSize()
    const nameField = page.drawText(name, {
      x: 50,
      y: height - 100,
      size: 24,
      color: '#000000',
      rotate: 0,
      width,
      height,
    })

    const pdfBytes = await pdfDoc.save()
    savePDF(pdfBytes, 'output.pdf')
  }

  const savePDF = (data, fileName) => {
    const blob = new Blob([data], { type: 'application/pdf' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.click()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Generate PDF</button>
      </form>
    </div>
  )
}

export default MakePDF