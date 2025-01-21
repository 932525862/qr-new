import React from "react";
import { QRCodeCanvas } from "qrcode.react";
function App() {

  const url = "https://preparati-sertifikat.vercel.app/";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1></h1>
      <p>Quyidagi QR kodni skaner qilib sinab ko'ring:</p>
      <QRCodeCanvas
        value={url}
        size={150} // Hajmi siz bergan rasmdagi hajmga moslashadi
        bgColor={"#ffffff"} // Orqa fon rangini oq qilamiz
        fgColor={"#000000"} // QR kod elementlarini qora rangda sozlaymiz
        level={"L"} // Kamroq ma'lumot bo'lsa, to'g'ri aniqlash
        includeMargin={true} // Bo'sh joyni qo'shish
      />
    </div>
  );
}

export default App;
