export const styles = `
  @page {
    size: letter;
    margin: 0.3in;
  }

  @media print {
    * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  @media screen {
    body {
      max-width: 8.5in;
      margin: 0 auto;
    }
  }
`
