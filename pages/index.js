import Link from "next/link";
import toc from "../toc.json";
import Head from "next/head";

export default function Index({ children }) {
  return (
    <>
      <Head>
        <title>Man Sarip</title>
      </Head>

      <div className="wrapper">
        <Header />
        <div className="body">
          <Sidebar />
          <Content content={children} />
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          margin: 0 auto;
          width: 900px;
        }
        .body {
          display: grid;
          grid-template-columns: 150px 1fr;
          column-gap: 15px;
        }
      `}</style>
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <h2>Man Sarip</h2>
      <p>Luqman B. Shariffudin</p>

      <style jsx>{`
        .header {
          padding: 20px 0;
          border-bottom: 1px solid #a4c5c6;
          margin-bottom: 20px;
        }
        h2 {
          margin: 0;
        }
        p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link href="/">
            <a>Muka Depan</a>
          </Link>
        </li>
        <li>
          <Link href="/siapa-saya">
            <a>Siapa Saya</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .sidebar {
          background-color: #fff;
          padding: 0;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 5px;
        }
        a {
          text-decoration: none;
          color: #138c8c;
        }
        a:hover {
          text-decoration: underline;
          color: #de7119;
        }
      `}</style>
    </div>
  );
}

function Content({ content = null }) {
  return (
    <div className="content">
      {content ? (
        content
      ) : (
        <table>
          <tbody>
            {toc.map((post, index) => (
              <tr key={index}>
                <td className="date">{post.date}</td>
                <td>
                  <Link href={post.slug}>
                    <a>{post.title}</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <style jsx>{`
        .content {
          background-color: #fff;
        }
        td.date {
          padding-right: 20px;
        }
        a {
          color: #b80d57;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
          color: #005082;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
