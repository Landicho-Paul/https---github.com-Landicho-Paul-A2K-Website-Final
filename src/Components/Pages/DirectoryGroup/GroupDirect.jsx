import React from 'react'
import './groupdirect.css';
const GroupDirect = () => {
  return (
    <div className="directorytable">
      <h1>DIRECTORY</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Distribution Group</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          <tr className="general">
            <td rowSpan="1" className="category">General</td>
            <td>General Business Information</td>
            <td>info@a2kgroup.org</td>
          </tr>
          <tr className="groups">
            <td rowSpan="5" className="category">Groups</td>
            <td>Finance Group</td>
            <td>finance@a2kgroup.org</td>
          </tr>
          <tr className="groups">
            <td>Human Resources Group</td>
            <td>hr@a2kgroup.org</td>
          </tr>
          <tr className="groups">
            <td>Legal Group</td>
            <td>legal@a2kgroup.org</td>
          </tr>
          <tr className="groups">
            <td>Strategy & Planning Group</td>
            <td>plans@a2kgroup.org</td>
          </tr>
          <tr className="groups">
            <td>Technical Group</td>
            <td>techinfo@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td rowSpan="13" className="category">Divisions</td>
            <td className="division-title">Angad Digital Engineering Division</td>
            <td></td>
          </tr>
          <tr className="divisions">
            <td>Software Development Team</td>
            <td>software.team@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td>Hardware Development Team</td>
            <td>hardware.team@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td>Modeling & Data Analysis Team</td>
            <td>mda@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td>Information System Team</td>
            <td>it@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td className="division-title">Angat Solutions Division</td>
            <td></td>
          </tr>
          <tr className="divisions">
            <td>Internship & Mentorship Management Team</td>
            <td>internship@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td>Courses Management Team</td>
            <td>courses@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td>Consultancy Team</td>
            <td>consultancy@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td className="division-title">Kasama Enterprise Division</td>
            <td></td>
          </tr>
          <tr className="divisions">
            <td>Expertise Support Team</td>
            <td>expertsupport@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td>Seed Funding Team</td>
            <td>seed@a2kgroup.org</td>
          </tr>
          <tr className="divisions">
            <td>Facilitation Management Services Team</td>
            <td>facilitate@a2kgroup.org</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GroupDirect