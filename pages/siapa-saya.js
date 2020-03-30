import Index from "./index";

export default function() {
  return (
    <Index>
      <div className="post">
        <h1>Siapa Saya?</h1>

        <p>Assalamualaikum, salam sejahtera.</p>

        <img src="/pic.jpg" style={{ width: 300 }} />

        <p>
          <i>
            "Seorang Melayu-Islam dan tidak berapa suka elemen-elemen British."
          </i>
        </p>

        <table>
          <tbody>
            <tr>
              <td>
                <b>Nama</b>
              </td>
              <td>Muhammad Luqman B. Shariffudin</td>
            </tr>
            <tr>
              <td>
                <b>Sebagai</b>
              </td>
              <td>Software Developer</td>
            </tr>
            <tr>
              <td>
                <b>Stack</b>
              </td>
              <td>HTML, CSS, JavaScript, Node.js, React, MongoDB, MySQL</td>
            </tr>
            <tr>
              <td>
                <b>Lokasi</b>
              </td>
              <td>Putrajaya, Malaysia</td>
            </tr>
            <tr>
              <td>
                <b>Email</b>
              </td>
              <td>
                <code>luqmanrasa[a]gmail.com</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Index>
  );
}
