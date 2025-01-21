import React from "react";
import { QRCodeCanvas } from "qrcode.react";

function App() {
  const url = "https://preparati-sertifikat.vercel.app/";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Kod Sinovi</h1>
      <p>Quyidagi QR kodni skaner qilib sinab ko'ring:</p>
      <QRCodeCanvas
        value={url}
        size={180} // Rasm hajmiga mos kattalik
        bgColor={"#ffffff"} // Orqa fon oq rangda
        fgColor={"#000000"} // QR kod qora rangda
        level={"L"} // Past darajadagi aniqlik
        includeMargin={true} // Bo'sh joyni qo'shish
      />
    </div>
  );
}

export default App;
