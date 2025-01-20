import React from "react";
import "./style.css";
import styles from "../../Landing.module.css"

const JeeMain = () => {
  return (
    <div className={styles.landingContainer} style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
      <div className={`jee-main-cnt ${styles.mainContent}`}>
        <div className="jmain-title">
          JEE Main 2024 Exam: Exam Updates, Syllabus, Admit Card
        </div>
        <div>
          <img className="jmain-logo" src={"/assets/NTA.png"}></img>
        </div>

        <div>
          <div className="jmain-para-heading">All About JEE Main 2024</div>
          <div>
            JEE Main is the engineering computer-based entrance test for
            applicants who wish to pursue a variety of technical undergraduate
            programs in engineering, architecture, and planning at universities
            throughout India. The full form of JEE is Joint Entrance Examination
            and it is conducted by the National Testing Agency (NTA) twice a
            year. The JEE Apex Board administers the exam in order to determine
            eligibility for admission to B.Tech, B.Arch, and other programs at
            prestigious technical institutions including the National Institutes
            of Technology and Indian Institutes of Information Technology.
            Typically, it takes place twice a year.
          </div>
        </div>
        <div>
          <div className="jmain-para-heading">
            JEE Main 2024 Important Details
          </div>
          <div>
            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              Different papers will be offered for B. Tech/B.E., B.Arch, and
              B.Planning starting in 2024.
            </div>

            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              The number of questions will change in 2024. There will be 105
              questions for B.Planning, 90 questions for B.Tech/B.E., and 82
              questions for B.Arch.
            </div>

            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <b>Number of Sessions:</b> There will be two sessions of JEE Main
              2024 (January and April).
            </div>

            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <b>Marking Scheme:</b> The JEE Main test has a maximum score of
              360 marks (90 questions at 4 points each). For each wrong answer,
              one mark is deducted from the final score.
            </div>

            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              Correction Window for Applicants: On the official JEE Main
              website,{" "}
              <a href="https://jeemain.nta.nic.in" target="_blank">
                jeemain.nta.nic.in
              </a>
              , applicants can modify their application. By entering their
              application ID and password, candidates can also alter or correct
              fully completed and submitted JEE application forms. Candidates
              can edit their information in the JEE Main application forms that
              have already been submitted by using the correction window for JEE
              Main.
            </div>

            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <b>Centre for Examination:</b> NTA, the organization in charge of
              administering the exam, will host the JEE Main 2024 in about 424
              testing facilities. This year, there will be 517 exam centres for
              JEE Main Paper 1; for Paper 2, there are 345 for B. Arch and 327
              for the B. Plan exam.
            </div>

            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <b>Age Limit:</b> The candidates who have passed the class
              12/equivalent examination in 2022 and 2023 or are appearing in
              2024, irrespective of their age, can appear in JEE (Main) – 2024
              examination.
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="jmain-para-heading">JEE ADVANCED KEY POINTS</div>
          <div>
            <table className="jmain-table">
              <thead>
                <tr>
                  <th rowspan="2">Occurrence</th>
                  <th colspan="2">Tentative Dates</th>
                </tr>
                <tr>
                  <th>January Session</th>
                  <th>April Session</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Release of Application form</td>
                  <td>December 2023</td>
                  <td>March 2024</td>
                </tr>
                <tr>
                  <td>The Last date to fill JEE Main form</td>
                  <td>To be announced</td>
                  <td>March 2024</td>
                </tr>
                <tr>
                  <td>The Last date of JEE application fee payment</td>
                  <td>To be announced</td>
                  <td>To be announced</td>
                </tr>
                <tr>
                  <td>Release of admit card</td>
                  <td>January 2024</td>
                  <td>April 2024</td>
                </tr>
                <tr>
                  <td>JEE Main 2024 exam date</td>
                  <td>To be announced</td>
                  <td>To be announced</td>
                </tr>
                <tr>
                  <td>Display of Answer key</td>
                  <td>To be announced</td>
                  <td>To be announced</td>
                </tr>
                <tr>
                  <td>Declaration of Result</td>
                  <td>To be announced</td>
                  <td>To be announced</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="jmain-para-heading">
            JEE Advanced Important Exam Dates: 2024
          </div>
          <div>
            <table className="jmain-table">
              <thead>
                <tr>
                  <th>Parameters</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Exam name</td>
                  <td>JEE Main</td>
                </tr>
                <tr>
                  <td>Full form of JEE Main is</td>
                  <td>Joint Entrance Examination (Main)</td>
                </tr>
                <tr>
                  <td>Exam Conducting authority</td>
                  <td>National Testing Agency</td>
                </tr>
                <tr>
                  <td>Official website</td>
                  <td>
                    <a href="https://jeemain.nta.nic.in" target="_blank">
                      jeemain.nta.nic.in
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Exam Frequency</td>
                  <td>Twice a year</td>
                </tr>
                <tr>
                  <td>Level of the exam</td>
                  <td>National level exam</td>
                </tr>
                <tr>
                  <td>Examination Procedure</td>
                  <td>Online, Computer Based Test</td>
                </tr>
                <tr>
                  <td>Languages</td>
                  <td>
                    English, Assamese, Bengali, Gujarati, Hindi, Kannada,
                    Marathi, Oriya, Tamil, Telugu, Urdu, Punjabi, and Malayalam.
                  </td>
                </tr>
                <tr>
                  <td>Offered courses</td>
                  <td>B.E/B.Tech, B.Planning, B.Arch</td>
                </tr>
                <tr>
                  <td>Duration of the Examination</td>
                  <td>3 hours</td>
                </tr>
                <tr>
                  <td>Total Marks</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>Marking</td>
                  <td>
                    Negative marking present, -1 for each wrong answer, +4 for
                    correct answer.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeeMain;
