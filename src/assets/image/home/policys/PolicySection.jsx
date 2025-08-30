import React from "react";

function PolicySection() {
  return (
    <div className="containers">
      <div className="">
        {/* Main content container with consistent spacing */}
        <div className="space-y-4 text-white">
          <h1 className="text-[24px] md:text-[48px] lg:text-[64px] font-bold mb-6">
            Privacy Notice
          </h1>

          <p className="privacy-header">Last Updated:</p>
          <p className="privacy-text">
            This Privacy Notice for FuNglish (“we,” “our,” “us”) describes how
            and why we collect, use, and protect your personal information when
            you use our services (“Services”), such as when you:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Visit our website at{" "}
              <a
                href="https://www.funglishedu.org"
                className="text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.funglishedu.org
              </a>
              , or any site of ours that links to this Privacy Notice
            </li>
            <li>
              Engage with us through consultations, visa services, classes, or
              events
            </li>
            <li>Communicate with us via phone, email, or social platforms</li>
            <li>
              Questions or concerns? Reading this Privacy Notice will help you
              understand your rights and choices. If you do not agree with our
              policies, please discontinue use of our Services. For questions,
              contact us at 📧{" "}
              <a
                href="mailto:pinky.htut@funglishedu.org"
                className="text-white underline"
              >
                pinky.htut@funglishedu.org
              </a>
              .
            </li>
          </ul>

          <h2 className="privacy-header">📌 Summary of Key Points</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#FFD700] mr-2">•</span>
              <span className="privacy-text">
                What personal data do we collect? We collect information you
                provide (e.g., name, contact info, academic details) as well as
                technical and usage data.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FFD700] mr-2">•</span>
              <span className="privacy-text">
                Do we process sensitive data? We do not intentionally collect or
                process sensitive personal data.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FFD700] mr-2">•</span>
              <span className="privacy-text">
                Do we share your data? Yes, but only with trusted partners
                (universities, embassies, payment providers, and service
                vendors) when necessary to deliver our services.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FFD700] mr-2">•</span>
              <span className="privacy-text">
                How do we protect your data? We use organizational and technical
                measures to safeguard it, but no system is 100% secure.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FFD700] mr-2">•</span>
              <span className="privacy-text">
                What are your rights? Depending on your location, you may have
                the right to access, update, or delete your information.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FFD700] mr-2">•</span>
              <span className="privacy-text">
                How long do we keep your data? Only as long as needed to provide
                our services or as required by law.
              </span>
            </li>
          </ul>

          <h2 className="privacy-header">1. What Information Do We Collect?</h2>
          <p className="privacy-header2 mt-2">Information You Provide to Us</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number</li>
            <li>
              Academic background, test scores, documents (e.g., transcripts,
              CVs, application forms)
            </li>
            <li>Payment information (if applicable)</li>
          </ul>

          <p className="privacy-header2 mt-2">
            Automatically Collected Information
          </p>
          <p> When you visit our website, we may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address, device details, browser type</li>
            <li>Pages visited, time spent, and other analytics data</li>
            <li>Cookies or similar technologies (see Section 4)</li>
          </ul>

          <p className="privacy-header2 mt-2">Information from Other Sources</p>
          <p className="privacy-text mt-2">
            We may receive additional information from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Partner institutions (universities, training centers)</li>
            <li>Social platforms (if you connect with us there)</li>
            <li>Public databases or marketing partners</li>
          </ul>

          <h2 className="privacy-header">2. How Do We Use Your Information?</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Deliver consulting, visa, and educational services</li>
            <li>Process and submit applications on your behalf</li>
            <li>Improve our website, services, and communications</li>
            <li>
              Send important updates (e.g., deadlines, service notifications)
            </li>
            <li>Comply with legal or regulatory obligations</li>
          </ul>

          <h2 className="privacy-header">
            3. When and With Whom Do We Share Your Information?
          </h2>
          <p>We do not sell your data. We may share your data with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Educational institutions & embassies (when applying for
              studies/visas)
            </li>
            <li>Payment processors (for service fees)</li>
            <li>Service providers (IT, hosting, analytics, email systems)</li>
            <li>Legal authorities (if required by law)</li>
          </ul>

          <h2 className="privacy-header">4. Do We Use Cookies?</h2>
          <p>
            Yes. Cookies help us improve website performance, personalize your
            experience, and analyze usage. You may disable cookies in your
            browser settings, but some features may not work properly.
          </p>

          <h2 className="privacy-header">
            5. How Do We Protect Your Information?
          </h2>
          <p>
            We use a combination of technical and organizational security
            measures to safeguard your data from unauthorized access, loss, or
            misuse. However, no system is completely secure, so we cannot
            guarantee absolute protection.
          </p>

          <h2 className="privacy-header">
            6. Do We Collect Information from Minors?
          </h2>
          <p>
            We do not knowingly collect data from children under 18. If you are
            a parent/guardian and believe your child has provided information,
            please contact us and we will take appropriate action.
          </p>

          <h2 className="privacy-header">7. Your Privacy Rights</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Depending on your location, you may have the right to:</li>
            <li>Access your personal data (request a copy)</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Delete your data (right to be forgotten)</li>
            <li>Object to the processing of your data</li>
            <li>Request a transfer of your data to a third party</li>
            <li>
              To exercise these rights, please contact us at 📧{" "}
              <a href="mailto:pinky.htut@funglishedu.org" className="">
                pinky.htut@funglishedu.org
              </a>
            </li>
          </ul>

          <h2 className="privacy-header">8. Updates to This Notice</h2>
          <p>
            We may update this Privacy Notice periodically. Any changes will be
            posted on our website with the revised date.
          </p>

          <h2 className="privacy-header">9. Contact Us</h2>
          <p>If you have questions, please contact us:</p>
          <h1 className="privacy-header2">FuNglish Global Max</h1>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              📧 <span className="privacy-text"></span> -
              pinky.htut@funglishedu.org
            </li>
            <li>
              📞 <span className="privacy-text"></span>- +66 969949572
            </li>
            <li>
              💬 <span className="privacy-text"></span> -{" "}
              <a
                href=" https://www.funglishglobalmax.org"
                className="text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.funglishglobalmax.org
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PolicySection;
