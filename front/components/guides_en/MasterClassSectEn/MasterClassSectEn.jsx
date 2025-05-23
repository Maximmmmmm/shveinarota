import { useEffect, useState } from "react";
import "./MasterClassSect.css";
import Link from "next/link";
import Image from "next/image";
import { convertToId } from "@lib/utils";

const MasterClassSectEn = ({ masterClassData }) => {
  const [invalidLinks, setInvalidLinks] = useState({});
  const [loaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   const checkLinks = async () => {
  //     const results = {};

  //     await Promise.all(
  //       masterClassData.lekala.map(async (lekalo) => {
  //         const url = `https://drive.google.com/file/d/${lekalo.path}/view?usp=sharing`;
  //         try {
  //           const response = await fetch(url, { method: "HEAD" });
  //           if (!response.ok) {
  //             results[lekalo.path] = true;
  //           }
  //         } catch {
  //           results[lekalo.path] = true;
  //         }
  //       })
  //     );

  //     setLoaded(true);
  //     setInvalidLinks(results);
  //   };

  //   checkLinks();
  // }, [masterClassData.lekala]);

  return (
    <section className="master-class">
      <div className="masterclass-title-container">
        <h1 className="masterclass-title">
          {masterClassData.subcategory_en}
        </h1>
      </div>

      <div className="masterclass-subcategory-container">
        <h2>Templates</h2>

        <div className="master-class__body">
          {masterClassData.preview != null && masterClassData.preview != "" &&
            <Image
              src={`http://drive.google.com/uc?export=view&id=${convertToId(masterClassData.preview)}`}
              alt="Preview"
              width={400}
              height={400}
              className="master-class__preview"
            />
          }
          {loaded ? (
            <ul>
              {masterClassData.lekala.map((lekalo, index) => {
                const url = lekalo.path.includes("sharing") ? lekalo.path : `https://drive.google.com/file/d/${lekalo.path}/view?usp=sharing`;
                const isInvalid = invalidLinks[lekalo.path];

                console.log("=================");
                console.log(lekalo.text_en);

                return (
                  <li key={index}>
                    {lekalo.text_en} -{" "}
                    <Link
                      className={isInvalid ? "lekala-link invalid-link" : "lekala-link"}
                      href={url}
                      target="_blank"
                    >
                      {isInvalid ? "<Файл не доступний>" : "Download"}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>



    </section>

  );
};

export default MasterClassSectEn;