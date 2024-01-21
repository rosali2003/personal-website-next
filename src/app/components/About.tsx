"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import DocumentIcon from "../../../public/document.svg";
import MailIcon from "../../../public/mail.svg";
import useDownloader from "react-use-downloader";

const About = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/RosaLiResume12212023.pdf"
  const filename = "RosaLiResume12212023.pdf"
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            {"Hi!"}
          </h1>
          <div className="flex flex-row items-center gap-2 py-6">
            <Link href="mailto:rosali.tks@gmail.com">
              <Image src={MailIcon} alt="Mail Icon" />
            </Link>
            <Link href="https://github.com/rosali2003">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/rosaa-li/">
              <Image src={LinkedinIcon} alt="LinkedIn Icon" />
            </Link>
            <Link href={fileUrl}>
              <Image src={DocumentIcon} alt="Github Icon" />
            </Link>
          </div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {"Hello! I'm Rosa, a production engineering intern at Shopify and"}{" "}
            <br></br>
            {"a 3rd year Computer Science student in the Dev Degree program at"}{" "}
            <br></br>{" "}
            {" Carleton University, Canada."}
          </p>

          <div>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <button onClick={() => download(fileUrl, filename)}>
                  Download Resume
                </button>
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/profilepic.png"
              alt="profile pic"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
